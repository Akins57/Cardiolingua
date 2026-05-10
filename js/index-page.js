// js/index-page.js  — index.html (Dashboard)

import { DATA } from './data.js'
import { bootstrap, getLang, getDueCards } from './app.js'
import { getTodayReviewCount } from './db.js'

async function init() {
  await bootstrap()

  const lang = getLang()

  const dueCards   = await getDueCards()
  const todayCount = await getTodayReviewCount()

  // Split due cards: new = never reviewed, review = seen before
  const newCards    = dueCards.filter(c => c.srs.repetitions === 0)
  const reviewCards = dueCards.filter(c => c.srs.repetitions > 0)

  // Total data cards (virtual cards = 2× this)
  let totalCards = 0
  for (const d of DATA) for (const s of d.subdisciplines) for (const t of s.topics)
    totalCards += t.cards.length

  const main = document.getElementById('main')
  main.innerHTML = `
    <div class="page-header" style="margin-bottom:20px">
      <h1 class="page-title">Dashboard</h1>
    </div>

    <!-- Stats row -->
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-value blue">${newCards.length}</div>
        <div class="stat-label">New cards</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color:var(--amber)">${reviewCards.length}</div>
        <div class="stat-label">To review</div>
      </div>
      <div class="stat-card">
        <div class="stat-value green">${todayCount}</div>
        <div class="stat-label">Done today</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalCards}</div>
        <div class="stat-label">Total cards</div>
      </div>
    </div>

    <!-- New cards + Review CTA -->
    ${buildCTA(newCards.length, reviewCards.length)}

    <!-- Disciplines list -->
    <div class="section-heading">Disciplines</div>
    <div class="grid" id="disciplinesGrid"></div>
  `

  const grid = document.getElementById('disciplinesGrid')

  if (DATA.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">📚</div>
        <h3>No content yet</h3>
        <p>Ask Claude Code to add disciplines and topics to data.js</p>
      </div>`
    return
  }

  for (const discipline of DATA) {
    const topicCount = discipline.subdisciplines.reduce(
      (n, s) => n + s.topics.length, 0
    )
    const cardCount = discipline.subdisciplines.reduce(
      (n, s) => n + s.topics.reduce((m, t) => m + t.cards.length, 0), 0
    )

    // Due count — match by base ID (strip _en / _ru suffix from virtual IDs)
    const disciplineBaseIds = new Set(
      discipline.subdisciplines.flatMap(s =>
        s.topics.flatMap(t => t.cards.map(c => c.id))
      )
    )
    const disciplineDue = dueCards.filter(c => {
      const baseId = c.id.replace(/_(?:en|ru)$/, '')
      return disciplineBaseIds.has(baseId)
    }).length

    const title = lang === 'en' ? discipline.title_en : discipline.title_ru

    const a = document.createElement('a')
    a.className = 'card'
    a.href = `notes.html?d=${discipline.slug}`
    a.innerHTML = `
      <div class="card-icon">🫀</div>
      <div class="card-title">${title}</div>
      <div class="card-meta">
        <span>${topicCount} topic${topicCount !== 1 ? 's' : ''}</span>
        <span>·</span>
        <span>${cardCount} cards</span>
        ${disciplineDue > 0
          ? `<span class="badge badge-due" style="margin-left:2px">${disciplineDue} due</span>`
          : ''
        }
      </div>
    `
    grid.appendChild(a)
  }
}

// ── CTA builder ────────────────────────────────────────────────────────────────

function buildCTA(newCount, reviewCount) {
  if (newCount === 0 && reviewCount === 0) {
    return `
      <div style="margin-bottom:32px;padding:20px;background:var(--surface);
                  border:1px solid var(--border);border-radius:var(--radius);
                  text-align:center;color:var(--text-muted)">
        🎉 All caught up! No cards due right now.
      </div>
    `
  }

  const cols  = newCount > 0 && reviewCount > 0 ? '1fr 1fr' : '1fr'
  const cards = []

  if (newCount > 0) {
    cards.push(`
      <a href="review.html?mode=new"
         style="display:flex;flex-direction:column;align-items:center;gap:6px;
                padding:20px 12px;background:var(--surface);
                border:1px solid rgba(59,130,246,0.35);border-radius:var(--radius);
                text-decoration:none;transition:border-color .15s,background .15s"
         onmouseenter="this.style.background='var(--surface-2)'"
         onmouseleave="this.style.background='var(--surface)'">
        <div style="font-size:1.8rem">📚</div>
        <div style="font-size:1.9rem;font-weight:700;color:var(--blue);line-height:1">${newCount}</div>
        <div style="font-size:0.78rem;font-weight:600;color:var(--text-muted);
                    letter-spacing:0.06em;text-transform:uppercase">New Cards</div>
        <div style="margin-top:8px;padding:7px 18px;background:var(--blue);
                    color:#fff;border-radius:var(--radius-sm);
                    font-size:0.82rem;font-weight:600">Study Now</div>
      </a>
    `)
  }

  if (reviewCount > 0) {
    cards.push(`
      <a href="review.html?mode=review"
         style="display:flex;flex-direction:column;align-items:center;gap:6px;
                padding:20px 12px;background:var(--surface);
                border:1px solid rgba(245,158,11,0.35);border-radius:var(--radius);
                text-decoration:none;transition:border-color .15s,background .15s"
         onmouseenter="this.style.background='var(--surface-2)'"
         onmouseleave="this.style.background='var(--surface)'">
        <div style="font-size:1.8rem">🔄</div>
        <div style="font-size:1.9rem;font-weight:700;color:var(--amber);line-height:1">${reviewCount}</div>
        <div style="font-size:0.78rem;font-weight:600;color:var(--text-muted);
                    letter-spacing:0.06em;text-transform:uppercase">Review</div>
        <div style="margin-top:8px;padding:7px 18px;background:var(--amber);
                    color:#000;border-radius:var(--radius-sm);
                    font-size:0.82rem;font-weight:600">Start Review</div>
      </a>
    `)
  }

  return `
    <div style="display:grid;grid-template-columns:${cols};gap:12px;margin-bottom:32px">
      ${cards.join('')}
    </div>
  `
}

init()
