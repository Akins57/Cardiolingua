// js/note-page.js  — note.html
// Renders a single topic note with EN/RU tab toggle.
// When the Russian tab is active, selecting text shows the corresponding
// English sentence/bullet from the same topic's English note.

import { bootstrap, getLang, setLang, getParams, getTopicBySlug } from './app.js'
import { getTopicRead, putTopicRead, removeTopicRead } from './db.js'

let _currentTopic = null
let _topicSlug    = null

async function init() {
  await bootstrap()

  const slug = getParams().get('slug')
  if (!slug) { showError('No topic specified.'); return }

  const found = getTopicBySlug(slug)
  if (!found) { showError('Topic not found.'); return }

  const { discipline, subdiscipline, topic } = found
  _currentTopic = topic
  _topicSlug    = slug
  render(discipline, subdiscipline, topic)

  document.getElementById('tabEn').addEventListener('click', () => switchTab('en'))
  document.getElementById('tabRu').addEventListener('click', () => switchTab('ru'))
  switchTab(getLang())

  initTranslationTooltip()
  await initMarkRead(slug)
}

function render(discipline, subdiscipline, topic) {
  const dSlug = discipline.slug
  const sSlug = subdiscipline.slug
  const cardCount = topic.cards.length

  document.getElementById('main').innerHTML = `
    <a class="back-link" href="notes.html?d=${dSlug}&s=${sSlug}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 5l-7 7 7 7"/>
      </svg>
      <span class="en">${subdiscipline.title_en}</span>
      <span class="ru">${subdiscipline.title_ru}</span>
    </a>

    <div class="page-header">
      <div class="breadcrumb">
        <a href="notes.html">Notes</a>
        <span class="sep">›</span>
        <a href="notes.html?d=${dSlug}">
          <span class="en">${discipline.title_en}</span>
          <span class="ru">${discipline.title_ru}</span>
        </a>
        <span class="sep">›</span>
        <a href="notes.html?d=${dSlug}&s=${sSlug}">
          <span class="en">${subdiscipline.title_en}</span>
          <span class="ru">${subdiscipline.title_ru}</span>
        </a>
        <span class="sep">›</span>
        <span>
          <span class="en">${topic.title_en}</span>
          <span class="ru">${topic.title_ru}</span>
        </span>
      </div>
      <h1 class="page-title">
        <span class="en">${topic.title_en}</span>
        <span class="ru">${topic.title_ru}</span>
      </h1>
    </div>

    <div class="note-actions">
      <div class="tabs">
        <button class="tab-btn" id="tabEn">English</button>
        <button class="tab-btn" id="tabRu">Русский</button>
      </div>
      <div style="flex:1"></div>
      <button class="btn mark-read-btn" id="markReadBtn" aria-label="Mark topic as done"></button>
      ${cardCount > 0
        ? `<a href="review.html?topic=${topic.slug}" class="btn btn-primary">
             Study Flashcards (${cardCount})
           </a>`
        : `<span style="color:var(--text-dim);font-size:0.85rem">No flashcards yet</span>`
      }
    </div>

    <div class="note-body" id="noteBody"></div>
  `

  renderSections(topic)
}

function renderSections(topic) {
  const body = document.getElementById('noteBody')
  const lang = getLang()
  const noteLang = topic.note[lang] || topic.note['en']

  body.innerHTML = ''
  for (const section of noteLang.sections) {
    const el = document.createElement('div')
    el.className = 'note-section'

    if (section.type === 'list') {
      const items = section.body.map(
        item => `<li class="note-list-item">${item}</li>`
      ).join('')
      el.innerHTML = `
        <div class="note-section-header">${section.title}</div>
        <div class="note-section-body">
          <ul class="note-list">${items}</ul>
        </div>
      `
    } else {
      const paras = section.body.split('\n\n')
        .map(p => `<p>${p}</p>`)
        .join('')
      el.innerHTML = `
        <div class="note-section-header">${section.title}</div>
        <div class="note-section-body">${paras}</div>
      `
    }

    body.appendChild(el)
  }
}

function switchTab(lang) {
  setLang(lang)
  const enBtn = document.getElementById('tabEn')
  const ruBtn = document.getElementById('tabRu')
  if (!enBtn) return
  enBtn.classList.toggle('active', lang === 'en')
  ruBtn.classList.toggle('active', lang === 'ru')
  const slug = getParams().get('slug')
  const found = getTopicBySlug(slug)
  if (found) renderSections(found.topic)
  hideTooltip()
}

// ── Translation tooltip (from EN note) ────────────────────────────────────────

function initTranslationTooltip() {
  // selectionchange fires after selection is committed on both desktop and mobile.
  // touchend fires too early on iOS — selection isn't ready yet.
  let debounceTimer = null
  document.addEventListener('selectionchange', () => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(handleSelection, 200)
  })

  // Dismiss on click or tap outside the tooltip
  document.addEventListener('mousedown', e => {
    const tip = document.getElementById('translate-tip')
    if (tip && !tip.contains(e.target)) hideTooltip()
  })
  document.addEventListener('touchstart', e => {
    const tip = document.getElementById('translate-tip')
    if (tip && !tip.contains(e.target)) hideTooltip()
  }, { passive: true })
}

function handleSelection() {
  if (getLang() !== 'ru') return

  const sel = window.getSelection()
  const text = sel ? sel.toString().trim() : ''
  if (!text || text.length < 2) { hideTooltip(); return }

  const noteBody = document.getElementById('noteBody')
  if (!noteBody) return

  // Selection must start inside noteBody
  const anchor = sel.anchorNode
  if (!anchor || !noteBody.contains(anchor)) return

  const range = sel.getRangeAt(0)
  const rect  = range.getBoundingClientRect()

  // ── Find which note-section the selection starts in ──────────────────────
  const allSections = Array.from(noteBody.querySelectorAll('.note-section'))
  const sectionEl   = anchor.nodeType === Node.TEXT_NODE
    ? anchor.parentElement.closest('.note-section')
    : anchor.closest('.note-section')

  if (!sectionEl) return

  const sectionIndex = allSections.indexOf(sectionEl)
  if (sectionIndex < 0) return

  const enNote    = _currentTopic?.note?.en
  const enSection = enNote?.sections?.[sectionIndex]
  if (!enSection) return

  // ── Find the specific paragraph or list item ──────────────────────────────
  let enText    = ''
  let enTitle   = enSection.title

  if (enSection.type === 'list') {
    // Find which <li> the anchor is in
    const liEl    = anchor.nodeType === Node.TEXT_NODE
      ? anchor.parentElement.closest('li')
      : anchor.closest('li')
    const allLis  = Array.from(sectionEl.querySelectorAll('li'))
    const liIndex = liEl ? allLis.indexOf(liEl) : -1

    enText = (liIndex >= 0 && enSection.body[liIndex])
      ? enSection.body[liIndex]
      : enSection.body.join('\n')
  } else {
    // Find which <p> the anchor is in
    const pEl     = anchor.nodeType === Node.TEXT_NODE
      ? anchor.parentElement.closest('p')
      : anchor.closest('p')
    const allPs   = Array.from(sectionEl.querySelectorAll('p'))
    const pIndex  = pEl ? allPs.indexOf(pEl) : -1
    const enParas = enSection.body.split('\n\n')

    enText = (pIndex >= 0 && enParas[pIndex])
      ? enParas[pIndex]
      : enSection.body
  }

  // If selection is in the section header, just show title
  const headerEl = sectionEl.querySelector('.note-section-header')
  if (headerEl && headerEl.contains(anchor)) {
    enText  = enSection.title
    enTitle = null
  }

  showTooltip(rect, enText, enTitle)
}

function showTooltip(rect, text, sectionTitle) {
  hideTooltip()

  const tip = document.createElement('div')
  tip.id        = 'translate-tip'
  tip.className = 'translate-tip'

  if (sectionTitle) {
    const hdr = document.createElement('div')
    hdr.className   = 'translate-tip-section'
    hdr.textContent = sectionTitle
    tip.appendChild(hdr)
  }

  const body = document.createElement('div')
  body.className   = 'translate-tip-text'
  body.textContent = text
  tip.appendChild(body)

  const close = document.createElement('button')
  close.className   = 'translate-tip-close'
  close.textContent = '×'
  close.addEventListener('click', hideTooltip)
  tip.appendChild(close)

  tip.addEventListener('mousedown',  e => e.stopPropagation())
  tip.addEventListener('touchstart', e => e.stopPropagation(), { passive: true })
  document.body.appendChild(tip)

  // Position relative to selection (fixed coords)
  const tipW = tip.offsetWidth  || 300
  const tipH = tip.offsetHeight || 60
  const vw   = window.innerWidth
  const vh   = window.innerHeight

  let top  = rect.top - tipH - 10
  if (top < 8) top = rect.bottom + 10   // flip below if no room above
  if (top + tipH > vh - 8) top = Math.max(8, vh - tipH - 8)

  let left = rect.left + rect.width / 2 - tipW / 2
  left = Math.max(8, Math.min(left, vw - tipW - 8))

  tip.style.top  = top  + 'px'
  tip.style.left = left + 'px'
}

function hideTooltip() {
  const tip = document.getElementById('translate-tip')
  if (tip) tip.remove()
}

// ── Mark as Done ────────────────────────────────────────────────────────────

async function initMarkRead(slug) {
  const state = await getTopicRead(slug)
  updateMarkReadBtn(!!state)

  document.getElementById('markReadBtn')?.addEventListener('click', async () => {
    const current = await getTopicRead(slug)
    if (current) {
      await removeTopicRead(slug)
      updateMarkReadBtn(false)
    } else {
      await putTopicRead({ slug, readAt: new Date().toISOString() })
      updateMarkReadBtn(true)
    }
  })
}

function updateMarkReadBtn(isRead) {
  const btn = document.getElementById('markReadBtn')
  if (!btn) return
  if (isRead) {
    btn.textContent = '✓ Done'
    btn.classList.add('mark-read-btn--done')
  } else {
    btn.textContent = 'Mark as Done'
    btn.classList.remove('mark-read-btn--done')
  }
}

function showError(msg) {
  document.getElementById('main').innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">⚠️</div>
      <h3>Error</h3>
      <p>${msg}</p>
      <a href="notes.html" class="btn btn-secondary">Back to Notes</a>
    </div>`
}

init()
