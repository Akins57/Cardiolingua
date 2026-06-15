// js/app.js
// Shared utilities: language toggle, data helpers, SRS initialisation.
// Imported by every page module.

import { DATA } from './data.js'
import { getAllSRS, putSRS, getSRS } from './db.js'
import { newState } from './sm2.js'
import { initAuth } from './auth.js'

// ── Language ──────────────────────────────────────────────────────────────────

export function getLang() {
  return localStorage.getItem('lang') || 'en'
}

export function setLang(lang) {
  localStorage.setItem('lang', lang)
  applyLang(lang)
}

export function applyLang(lang) {
  document.querySelectorAll('.en').forEach(el => {
    el.classList.toggle('hidden', lang !== 'en')
  })
  document.querySelectorAll('.ru').forEach(el => {
    el.classList.toggle('hidden', lang !== 'ru')
  })
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.querySelectorAll('[data-lang]').forEach(span => {
      span.classList.toggle('active', span.dataset.lang === lang)
    })
  })
}

export function initLangToggle() {
  const lang = getLang()
  applyLang(lang)

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = getLang()
      setLang(current === 'en' ? 'ru' : 'en')
    })
  })
}

// ── Navigation helpers ────────────────────────────────────────────────────────

export function getParams() {
  return new URLSearchParams(location.search)
}

export function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href')
    a.classList.toggle('active', href === page)
  })
}

// ── Data helpers ──────────────────────────────────────────────────────────────

/**
 * Flat array of all virtual cards — each data card yields TWO entries:
 *   one locked to English (id = "<cardId>_en") and
 *   one locked to Russian (id = "<cardId>_ru").
 * SRS state is tracked independently for each language variant.
 */
export function getAllCards() {
  const cards = []
  for (const d of DATA) {
    for (const s of d.subdisciplines) {
      for (const t of s.topics) {
        for (const c of t.cards) {
          const base = {
            ...c,
            disciplineSlug: d.slug,
            disciplineTitle_en: d.title_en,
            disciplineTitle_ru: d.title_ru,
            subdisciplineSlug: s.slug,
            subdisciplineTitle_en: s.title_en,
            subdisciplineTitle_ru: s.title_ru,
            topicSlug: t.slug,
            topicTitle_en: t.title_en,
            topicTitle_ru: t.title_ru
          }
          cards.push({ ...base, id: c.id + '_en', cardLang: 'en' })
          cards.push({ ...base, id: c.id + '_ru', cardLang: 'ru' })
        }
      }
    }
  }
  return cards
}

export function getDisciplineBySlug(slug) {
  return DATA.find(d => d.slug === slug) || null
}

export function getSubdiscipline(dSlug, sSlug) {
  const d = getDisciplineBySlug(dSlug)
  return d ? (d.subdisciplines.find(s => s.slug === sSlug) || null) : null
}

export function getTopicBySlug(slug) {
  for (const d of DATA) {
    for (const s of d.subdisciplines) {
      const t = s.topics.find(t => t.slug === slug)
      if (t) return { discipline: d, subdiscipline: s, topic: t }
    }
  }
  return null
}

// ── SRS helpers ───────────────────────────────────────────────────────────────

/**
 * On every page load: ensure every card in data.js has an SRS state in IndexedDB.
 * New cards (added to data.js since last visit) are automatically seeded.
 */
export async function initSRS() {
  const all = getAllCards()
  const existing = await getAllSRS()
  const existingIds = new Set(existing.map(s => s.id))
  for (const card of all) {
    if (!existingIds.has(card.id)) {
      await putSRS(newState(card.id))
    }
  }
}

/**
 * Get cards that are scheduled for SRS review (previously seen + past due date).
 * New cards (lastReview === null) are NEVER returned here — they live in their
 * topics and are accessed via the topic's "Study Flashcards" session.
 * @returns {Array} array of card objects enriched with .srs state
 */
export async function getDueCards() {
  const all = getAllCards()
  const now = new Date().toISOString()
  const due = []
  for (const card of all) {
    const state = await getSRS(card.id)
    if (state && state.lastReview !== null && state.dueDate <= now) {
      due.push({ ...card, srs: state })
    }
  }
  return due
}

/**
 * Get ALL cards for a topic with their SRS state.
 */
export async function getCardsWithSRS(topicSlug = null) {
  const all = getAllCards()
  const filtered = topicSlug ? all.filter(c => c.topicSlug === topicSlug) : all
  const result = []
  for (const card of filtered) {
    const state = await getSRS(card.id)
    result.push({ ...card, srs: state })
  }
  return result
}

// ── Toast notifications ───────────────────────────────────────────────────────

export function toast(msg, type = 'info') {
  const el = document.createElement('div')
  el.className = `toast toast-${type}`
  el.textContent = msg
  document.body.appendChild(el)
  requestAnimationFrame(() => el.classList.add('visible'))
  setTimeout(() => {
    el.classList.remove('visible')
    setTimeout(() => el.remove(), 400)
  }, 2600)
}

// ── Page bootstrap ────────────────────────────────────────────────────────────

/** Call at the top of every page module's init function. */
export async function bootstrap() {
  initLangToggle()
  markActiveNav()
  await initSRS()
  initAuth()  // non-blocking: registers auth listener + sync hook
}
