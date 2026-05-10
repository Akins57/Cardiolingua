// js/cards-page.js  — cards.html
// Browse all cards grouped by Discipline → Subdiscipline → Topic.
// Each data card appears as two rows: English (EN) and Russian (RU).
// Shows each variant's independent SRS status.

import { DATA } from './data.js'
import { bootstrap, getLang, getCardsWithSRS } from './app.js'
import { srsStatus } from './sm2.js'

async function init() {
  await bootstrap()

  document.getElementById('main').innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Flashcards</h1>
      <p class="page-subtitle">All cards with their review status</p>
    </div>
    <div id="cardsRoot"><div class="loading">Loading cards…</div></div>
  `

  // getCardsWithSRS now returns both _en and _ru virtual cards
  const allWithSRS = await getCardsWithSRS()

  // Build a lookup: virtual card id → srs state
  const srsMap = Object.fromEntries(allWithSRS.map(c => [c.id, c.srs]))

  // Build a lookup: topicSlug → [virtual cards]
  const byTopic = {}
  for (const vc of allWithSRS) {
    if (!byTopic[vc.topicSlug]) byTopic[vc.topicSlug] = []
    byTopic[vc.topicSlug].push(vc)
  }

  const root = document.getElementById('cardsRoot')
  root.innerHTML = ''

  const lang = getLang()
  let totalCards = 0

  for (const discipline of DATA) {
    const dTitle = lang === 'en' ? discipline.title_en : discipline.title_ru

    const dCardCount = discipline.subdisciplines.reduce(
      (n, s) => n + s.topics.reduce((m, t) => m + t.cards.length * 2, 0), 0
    )
    if (dCardCount === 0) continue
    totalCards += dCardCount

    const dSection = document.createElement('div')
    dSection.style.marginBottom = '32px'
    dSection.innerHTML = `
      <div class="discipline-header">
        <h2>${dTitle}</h2>
      </div>
    `

    for (const sub of discipline.subdisciplines) {
      const subCards = sub.topics.reduce((n, t) => n + t.cards.length * 2, 0)
      if (subCards === 0) continue

      const sTitle = lang === 'en' ? sub.title_en : sub.title_ru
      const subSection = document.createElement('div')
      subSection.className = 'subdiscipline-section'
      subSection.innerHTML = `<div class="subdiscipline-label">${sTitle}</div>`

      for (const topic of sub.topics) {
        const topicVirtualCards = byTopic[topic.slug] || []
        if (topicVirtualCards.length === 0) continue

        const tTitle = lang === 'en' ? topic.title_en : topic.title_ru

        // Count due virtual cards
        const now = new Date().toISOString()
        const dueCount = topicVirtualCards.filter(vc => {
          const s = srsMap[vc.id]
          return s && s.dueDate <= now
        }).length

        const group = document.createElement('div')
        group.className = 'topic-group'

        const header = document.createElement('div')
        header.className = 'topic-group-header'
        header.innerHTML = `
          <span class="topic-group-title">${tTitle}</span>
          <span class="topic-group-meta">
            ${dueCount > 0
              ? `<span class="badge badge-due">${dueCount} due</span>`
              : ''
            }
            <span>${topicVirtualCards.length} cards</span>
            <svg class="topic-group-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </span>
        `

        const list = document.createElement('div')
        list.className = 'card-list'

        for (const vc of topicVirtualCards) {
          const state = srsMap[vc.id]
          const status = state ? srsStatus(state) : { label: 'New', cls: 'badge-new' }
          const qText = vc.cardLang === 'en' ? vc.question_en : vc.question_ru
          const langLabel = vc.cardLang === 'en' ? 'EN' : 'RU'

          const item = document.createElement('div')
          item.className = 'card-list-item'
          item.innerHTML = `
            <div class="card-list-question">
              <span style="font-size:0.7rem;font-weight:600;color:var(--text-dim);margin-right:6px;letter-spacing:0.05em">${langLabel}</span>${qText}
            </div>
            <div class="card-list-status">
              <span class="badge ${status.cls}">${status.label}</span>
            </div>
          `
          list.appendChild(item)
        }

        header.addEventListener('click', () => {
          header.classList.toggle('open')
        })

        group.appendChild(header)
        group.appendChild(list)
        subSection.appendChild(group)
      }

      dSection.appendChild(subSection)
    }

    root.appendChild(dSection)
  }

  if (totalCards === 0) {
    root.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🃏</div>
        <h3>No flashcards yet</h3>
        <p>Ask Claude Code to add topics with flashcards to data.js</p>
        <a href="notes.html" class="btn btn-secondary">Go to Notes</a>
      </div>`
  }
}

init()
