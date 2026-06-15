// sw.js — Service Worker
// Caches the app shell for offline use.
// data.js is intentionally NOT cached so new topics load immediately.

const CACHE = 'cardiolingua-v21'

const APP_SHELL = [
  './index.html',
  './notes.html',
  './note.html',
  './review.html',
  './cards.html',
  './manifest.json',
  './css/app.css',
  './js/app.js',
  './js/db.js',
  './js/sm2.js',
  './js/index-page.js',
  './js/notes-page.js',
  './js/note-page.js',
  './js/review-page.js',
  './js/cards-page.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
]

// Install: cache app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))
  )
  self.skipWaiting()
})

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

// Fetch: cache-first for app shell, network-first for data.js
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)

  // Always fetch data.js fresh (topics change when Claude Code edits it)
  if (url.pathname.endsWith('/js/data.js')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    )
    return
  }

  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  )
})
