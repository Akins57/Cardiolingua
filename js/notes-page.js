// js/notes-page.js  — notes.html
// Handles 3-level drill-down: Discipline → Subdiscipline → Topic

import { DATA, } from './data.js'
import { bootstrap, getLang, getParams } from './app.js'

async function init() {
  await bootstrap()

  const p = getParams()
  const d = p.get('d')
  const s = p.get('s')

  if (!d) renderDisciplines()
  else if (!s) renderSubdisciplines(d)
  else renderTopics(d, s)
}

// ── Level 0: Disciplines ──────────────────────────────────────────────────

function renderDisciplines() {
  const lang = getLang()
  const main = document.getElementById('main')

  main.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Notes Library</h1>
      <p class="page-subtitle">Select a discipline to begin</p>
    </div>
    <div class="grid" id="grid"></div>
  `

  if (DATA.length === 0) {
    main.innerHTML += `
      <div class="empty-state">
        <div class="empty-state-icon">📚</div>
        <h3>No disciplines yet</h3>
        <p>Ask Claude Code to add study content to data.js</p>
      </div>`
    return
  }

  const grid = document.getElementById('grid')
  for (const discipline of DATA) {
    const topicCount = discipline.subdisciplines.reduce(
      (n, s) => n + s.topics.length, 0
    )
    const title = lang === 'en' ? discipline.title_en : discipline.title_ru

    const a = document.createElement('a')
    a.className = 'card'
    a.href = `notes.html?d=${discipline.slug}`
    a.innerHTML = `
      <div class="card-icon">🫀</div>
      <div class="card-title">${title}</div>
      <div class="card-meta">
        <span>${discipline.subdisciplines.length} subdiscipline${discipline.subdisciplines.length !== 1 ? 's' : ''}</span>
        <span>·</span>
        <span>${topicCount} topic${topicCount !== 1 ? 's' : ''}</span>
      </div>
    `
    grid.appendChild(a)
  }
}

// ── Level 1: Subdisciplines ───────────────────────────────────────────────

function renderSubdisciplines(dSlug) {
  const lang = getLang()
  const discipline = DATA.find(d => d.slug === dSlug)
  if (!discipline) { notFound(); return }

  const dTitle = lang === 'en' ? discipline.title_en : discipline.title_ru
  const main = document.getElementById('main')

  main.innerHTML = `
    <a class="back-link" href="notes.html">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      Notes Library
    </a>
    <div class="page-header">
      <div class="breadcrumb">
        <a href="notes.html">Notes</a>
        <span class="sep">›</span>
        <span>${dTitle}</span>
      </div>
      <h1 class="page-title">${dTitle}</h1>
    </div>
    <div class="grid" id="grid"></div>
  `

  const grid = document.getElementById('grid')
  for (const sub of discipline.subdisciplines) {
    const title = lang === 'en' ? sub.title_en : sub.title_ru
    const a = document.createElement('a')
    a.className = 'card'
    a.href = `notes.html?d=${dSlug}&s=${sub.slug}`
    a.innerHTML = `
      <div class="card-icon">📋</div>
      <div class="card-title">${title}</div>
      <div class="card-meta">
        <span>${sub.topics.length} topic${sub.topics.length !== 1 ? 's' : ''}</span>
      </div>
    `
    grid.appendChild(a)
  }
}

// ── Level 2: Topics ───────────────────────────────────────────────────────

function renderTopics(dSlug, sSlug) {
  const lang = getLang()
  const discipline = DATA.find(d => d.slug === dSlug)
  if (!discipline) { notFound(); return }
  const sub = discipline.subdisciplines.find(s => s.slug === sSlug)
  if (!sub) { notFound(); return }

  const dTitle = lang === 'en' ? discipline.title_en : discipline.title_ru
  const sTitle = lang === 'en' ? sub.title_en : sub.title_ru
  const main = document.getElementById('main')

  main.innerHTML = `
    <a class="back-link" href="notes.html?d=${dSlug}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      ${dTitle}
    </a>
    <div class="page-header">
      <div class="breadcrumb">
        <a href="notes.html">Notes</a>
        <span class="sep">›</span>
        <a href="notes.html?d=${dSlug}">${dTitle}</a>
        <span class="sep">›</span>
        <span>${sTitle}</span>
      </div>
      <h1 class="page-title">${sTitle}</h1>
    </div>
    <div class="grid" id="grid"></div>
  `

  if (sub.topics.length === 0) {
    document.getElementById('grid').innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📄</div>
        <h3>No topics yet</h3>
        <p>Ask Claude Code to add topics to this subdiscipline</p>
      </div>`
    return
  }

  const grid = document.getElementById('grid')
  for (const topic of sub.topics) {
    const title = lang === 'en' ? topic.title_en : topic.title_ru
    const cardCount = topic.cards.length
    const a = document.createElement('a')
    a.className = 'card'
    a.href = `note.html?slug=${topic.slug}`
    a.innerHTML = `
      <div class="card-icon">📄</div>
      <div class="card-title">${title}</div>
      <div class="card-meta">
        <span>${cardCount} card${cardCount !== 1 ? 's' : ''}</span>
      </div>
    `
    grid.appendChild(a)
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────

function notFound() {
  document.getElementById('main').innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">⚠️</div>
      <h3>Not found</h3>
      <p>This section doesn't exist in the data.</p>
      <a href="notes.html" class="btn btn-secondary">Back to Notes</a>
    </div>`
}

init()
