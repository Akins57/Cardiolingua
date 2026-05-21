// js/review-page.js  — review.html
// SRS review session with 4 ordered phases (empty phases are skipped):
//   1. New · English    (repetitions === 0)
//   2. Review · English (repetitions  >  0)
//   3. New · Russian
//   4. Review · Russian
//
// "Again" re-queues the card within the SAME phase — EN cards never appear
// in the RU phase and vice versa.
// Flashcard HTML fully re-rendered on each card — no stale CSS state.

import { bootstrap, getLang, getParams, getDueCards, getTopicBySlug } from './app.js'
import { getSRS, putSRS, addReview } from './db.js'
import { sm2, previewIntervals, newState } from './sm2.js'

const LANG_BATCH = 10   // max cards per language (10 EN + 10 RU = 20 total per session)

let phases        = []  // [{ type:'new'|'review', lang:'en'|'ru', cards:[] }]
let phaseIndex    = 0
let cardIndex     = 0
let totalCards    = 0
let totalReviewed = 0
let remainingAfterBatch = 0
let topicSlug  = null
let topicLabel = ''
let mode       = 'all'  // 'new' | 'review' | 'all'

// ── Init ───────────────────────────────────────────────────────────────────────

async function init() {
  await bootstrap()

  mode      = getParams().get('mode')  || 'all'
  topicSlug = getParams().get('topic') || null
  if (topicSlug) {
    const found = getTopicBySlug(topicSlug)
    if (found) {
      topicLabel = getLang() === 'en' ? found.topic.title_en : found.topic.title_ru
    }
  }

  document.getElementById('main').innerHTML = '<div class="loading">Loading cards…</div>'

  const allDue = await getDueCards(topicSlug)
  if (!allDue.length) { showAllCaughtUp(); return }

  // ── Split by language ──────────────────────────────────────────────────────
  const enAll = allDue.filter(c => c.cardLang === 'en')
  const ruAll = allDue.filter(c => c.cardLang === 'ru')

  // Split each language into new (never reviewed) vs review (seen before)
  const enNew    = enAll.filter(c => c.srs.repetitions === 0)
  const enReview = enAll.filter(c => c.srs.repetitions > 0)
  const ruNew    = ruAll.filter(c => c.srs.repetitions === 0)
  const ruReview = ruAll.filter(c => c.srs.repetitions > 0)

  ;[enNew, enReview, ruNew, ruReview].forEach(shuffleArray)

  // ── Build mode-aware batches (each type gets its own LANG_BATCH cap) ────────
  // Previously new cards could crowd out review cards in a shared batch,
  // causing mode=review sessions to be empty when many new cards are due.
  let enNewBatch, enReviewBatch, ruNewBatch, ruReviewBatch

  if (mode === 'review') {
    enNewBatch    = []
    enReviewBatch = enReview.slice(0, LANG_BATCH)
    ruNewBatch    = []
    ruReviewBatch = ruReview.slice(0, LANG_BATCH)
  } else if (mode === 'new') {
    enNewBatch    = enNew.slice(0, LANG_BATCH)
    enReviewBatch = []
    ruNewBatch    = ruNew.slice(0, LANG_BATCH)
    ruReviewBatch = []
  } else {
    // 'all': fill LANG_BATCH per language (new first, then review)
    const enBatch = [...enNew, ...enReview].slice(0, LANG_BATCH)
    const ruBatch = [...ruNew, ...ruReview].slice(0, LANG_BATCH)
    enNewBatch    = enBatch.filter(c => c.srs.repetitions === 0)
    enReviewBatch = enBatch.filter(c => c.srs.repetitions > 0)
    ruNewBatch    = ruBatch.filter(c => c.srs.repetitions === 0)
    ruReviewBatch = ruBatch.filter(c => c.srs.repetitions > 0)
  }

  // ── Build phase list (skip empty phases) ──────────────────────────────────
  phases = []
  if (enNewBatch.length)    phases.push({ type: 'new',    lang: 'en', cards: [...enNewBatch] })
  if (enReviewBatch.length) phases.push({ type: 'review', lang: 'en', cards: [...enReviewBatch] })
  if (ruNewBatch.length)    phases.push({ type: 'new',    lang: 'ru', cards: [...ruNewBatch] })
  if (ruReviewBatch.length) phases.push({ type: 'review', lang: 'ru', cards: [...ruReviewBatch] })

  // If mode filtering left nothing, show the appropriate "caught up" screen
  if (!phases.length) { showAllCaughtUp(); return }

  const batchCount    = enNewBatch.length + enReviewBatch.length + ruNewBatch.length + ruReviewBatch.length
  const eligibleCount = mode === 'review' ? (enReview.length + ruReview.length)
                      : mode === 'new'    ? (enNew.length    + ruNew.length)
                      : allDue.length
  totalCards          = phases.reduce((sum, p) => sum + p.cards.length, 0)
  remainingAfterBatch = eligibleCount - batchCount

  renderSession()
  showCard()
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function phaseLabel(phase) {
  const typeIcon = phase.type === 'new' ? '📚' : '🔄'
  const typeText = phase.type === 'new' ? 'New' : 'Review'
  const langText = phase.lang === 'en' ? 'English' : 'Русский'
  return `${typeIcon} ${typeText} · ${langText}`
}

// ── Session shell ───────────────────────────────────────────────────────────────

function renderSession() {
  const topicInfo  = topicLabel ? `<strong>${topicLabel}</strong>` : 'All topics'
  const totalLabel = remainingAfterBatch > 0
    ? `Showing ${totalCards} of ${totalCards + remainingAfterBatch} due`
    : `${totalCards} card${totalCards !== 1 ? 's' : ''} due`

  document.getElementById('main').innerHTML = `
    <div class="review-header">
      <div class="review-topic">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" style="vertical-align:-2px;margin-right:4px">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
        ${topicInfo}
        <span style="color:var(--text-dim);margin-left:6px;font-size:0.8rem">${totalLabel}</span>
      </div>
      <div style="margin:4px 0 6px">
        <span id="phaseBadge" style="
          display:inline-block;
          font-size:0.72rem;font-weight:600;
          padding:2px 10px;border-radius:999px;
          background:var(--surface-2);color:var(--text-muted);
          letter-spacing:0.04em
        "></span>
      </div>
      <div class="progress-wrap">
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill" style="width:0%"></div>
        </div>
        <span id="progressText">0 / ${totalCards}</span>
      </div>
    </div>
    <div class="flashcard-wrap" id="flashcardWrap"></div>
  `
}

// ── Card display ────────────────────────────────────────────────────────────────

function showCard() {
  if (phaseIndex >= phases.length) {
    showComplete()
    return
  }

  const phase = phases[phaseIndex]

  // Current phase exhausted
  if (cardIndex >= phase.cards.length) {
    if (phaseIndex + 1 < phases.length) {
      showPhaseTransition(phase, phases[phaseIndex + 1])
    } else {
      showComplete()
    }
    return
  }

  const card     = phase.cards[cardIndex]
  const qText    = card.cardLang === 'en' ? card.question_en : card.question_ru
  const aText    = card.cardLang === 'en' ? card.answer_en   : card.answer_ru
  const langFlag = card.cardLang === 'en' ? '🇬🇧 English' : '🇷🇺 Русский'

  document.getElementById('flashcardWrap').innerHTML = `
    <div class="flashcard" id="flashcard">
      <div class="flashcard-question" id="cardQuestion">${qText}</div>
      <div class="flashcard-divider"></div>
      <div class="flashcard-answer" id="cardAnswer">${aText}</div>
    </div>
    <div class="flashcard-actions" id="cardActions">
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px;width:100%">
        <div style="font-size:0.75rem;color:var(--text-dim);letter-spacing:0.05em">${langFlag}</div>
        <button class="btn btn-secondary btn-lg btn-full" id="showAnswerBtn">Show Answer</button>
      </div>
    </div>
  `

  document.getElementById('showAnswerBtn').addEventListener('click', () => revealAnswer(card))
  updateProgress()
}

function showPhaseTransition(donePhase, nextPhase) {
  const isLangSwitch = donePhase.lang !== nextPhase.lang
  const nextLabel    = phaseLabel(nextPhase)
  const nextCount    = nextPhase.cards.length
  const s            = nextCount !== 1 ? 's' : ''

  let icon, title, subtitle
  if (isLangSwitch) {
    const doneLang = donePhase.lang === 'en' ? 'English' : 'Russian'
    icon     = nextPhase.lang === 'ru' ? '🇷🇺' : '🇬🇧'
    title    = `${doneLang} deck complete!`
    subtitle = `Starting ${nextLabel} — ${nextCount} card${s}.`
  } else {
    const lang = nextPhase.lang === 'en' ? 'English' : 'Russian'
    icon     = '🔄'
    title    = `New ${lang} cards done!`
    subtitle = `Now onto Review · ${lang} — ${nextCount} card${s}.`
  }

  document.getElementById('flashcardWrap').innerHTML = `
    <div style="text-align:center;padding:48px 20px">
      <div style="font-size:3rem;margin-bottom:16px">${icon}</div>
      <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:8px">${title}</h2>
      <p style="color:var(--text-muted);margin-bottom:28px">${subtitle}</p>
      <button class="btn btn-primary btn-lg" id="nextPhaseBtn">Continue →</button>
    </div>
  `
  document.getElementById('nextPhaseBtn').addEventListener('click', () => {
    phaseIndex++
    cardIndex = 0
    showCard()
  })
}

// ── Rating ─────────────────────────────────────────────────────────────────────

async function revealAnswer(card) {
  const flashcard = document.getElementById('flashcard')
  const actions   = document.getElementById('cardActions')
  flashcard.classList.add('answered')

  const state = await getSRS(card.id)
  const iv    = previewIntervals(state)

  actions.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:14px;width:100%">
      <div class="rating-buttons">
        <button class="btn btn-again rating-btn" data-rating="0">
          <span class="rating-label">Again</span>
          <span class="rating-interval">${iv.again}</span>
        </button>
        <button class="btn btn-hard rating-btn" data-rating="2">
          <span class="rating-label">Hard</span>
          <span class="rating-interval">${iv.hard}</span>
        </button>
        <button class="btn btn-good rating-btn" data-rating="3">
          <span class="rating-label">Good</span>
          <span class="rating-interval">${iv.good}</span>
        </button>
        <button class="btn btn-easy rating-btn" data-rating="5">
          <span class="rating-label">Easy</span>
          <span class="rating-interval">${iv.easy}</span>
        </button>
      </div>
    </div>
  `
  actions.querySelectorAll('[data-rating]').forEach(btn => {
    btn.addEventListener('click', () => rateCard(card, parseInt(btn.dataset.rating)))
  })
}

async function rateCard(card, rating) {
  if (rating === 0) {
    // Again: full SRS reset, re-queue within the SAME phase (no cross-phase mixing)
    await putSRS(newState(card.id))
    await addReview(card.id, 0, card.cardLang)
    phases[phaseIndex].cards.push(card)
    cardIndex++
    showCard()
    return
  }

  const state   = await getSRS(card.id)
  const updated = sm2(state, rating)
  await putSRS(updated)
  await addReview(card.id, rating, card.cardLang)

  totalReviewed++
  cardIndex++
  showCard()
}

// ── Progress ───────────────────────────────────────────────────────────────────

function updateProgress() {
  const pct   = totalCards > 0 ? Math.round((totalReviewed / totalCards) * 100) : 0
  const fill  = document.getElementById('progressFill')
  const text  = document.getElementById('progressText')
  const badge = document.getElementById('phaseBadge')
  if (fill)  fill.style.width = Math.min(pct, 100) + '%'
  if (text)  text.textContent = `${totalReviewed} / ${totalCards}`
  if (badge && phases[phaseIndex]) badge.textContent = phaseLabel(phases[phaseIndex])
}

// ── End states ──────────────────────────────────────────────────────────────────

function showComplete() {
  const continueBtn = remainingAfterBatch > 0
    ? `<a href="review.html${topicSlug ? '?topic=' + topicSlug : ''}" class="btn btn-primary">
         Continue (${remainingAfterBatch} more)
       </a>`
    : ''

  document.getElementById('main').innerHTML = `
    <div class="session-complete">
      <div class="session-complete-icon">✅</div>
      <h2>Session Complete</h2>
      <p>You reviewed ${totalReviewed} card${totalReviewed !== 1 ? 's' : ''} this session.</p>
      <div class="action-row">
        <a href="index.html" class="btn btn-secondary">Dashboard</a>
        ${topicSlug
          ? `<a href="note.html?slug=${topicSlug}" class="btn btn-secondary">Back to Note</a>`
          : ''}
        ${continueBtn}
      </div>
    </div>
  `
}

function showAllCaughtUp() {
  const modeMsg = mode === 'new'
    ? 'No new cards to study right now.'
    : mode === 'review'
    ? 'No cards due for review right now.'
    : `No cards are due right now${topicSlug ? ' for this topic' : ''}.`

  document.getElementById('main').innerHTML = `
    <div class="session-complete">
      <div class="session-complete-icon">🎉</div>
      <h2>All Caught Up!</h2>
      <p>${modeMsg}<br>Come back later for your next session.</p>
      <div class="action-row">
        <a href="index.html" class="btn btn-secondary">Dashboard</a>
        ${topicSlug
          ? `<a href="note.html?slug=${topicSlug}" class="btn btn-secondary">View Note</a>`
          : ''}
        <a href="cards.html" class="btn btn-secondary">Browse Cards</a>
      </div>
    </div>
  `
}

init()
