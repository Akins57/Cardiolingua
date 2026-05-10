// js/sm2.js
// Spaced Repetition Algorithm
//
// Rating scale:
//   0 = Again  (resets all progress)
//   2 = Hard   (first review → 1 day;  subsequent → slight reduction)
//   3 = Good   (first review → 2 days; subsequent → interval × easeFactor)
//   5 = Easy   (first review → 3 days; subsequent → interval × easeFactor × 1.3)
//
// "Again" is handled in review-page.js via newState() — not inside sm2().

/**
 * Update an SRS state object after a passing review (Hard / Good / Easy).
 * @param {object} state  - current SRS state
 * @param {number} rating - 2 (Hard), 3 (Good), or 5 (Easy)
 * @returns {object} updated state (mutated in place)
 */
export function sm2(state, rating) {
  if (state.repetitions === 0) {
    // First ever review — fixed starting intervals
    if (rating === 5)      state.interval = 3   // Easy  → 3 days
    else if (rating === 3) state.interval = 2   // Good  → 2 days
    else                   state.interval = 1   // Hard  → 1 day
  } else {
    // Subsequent reviews — grow by ease factor
    if (rating === 5)      state.interval = Math.round(state.interval * state.easeFactor * 1.3)
    else if (rating === 3) state.interval = Math.round(state.interval * state.easeFactor)
    else                   state.interval = Math.max(1, Math.round(state.interval * 0.8))
  }

  state.repetitions += 1

  // Adjust ease factor (standard SM-2 formula, clamped ≥ 1.3)
  state.easeFactor = Math.max(
    1.3,
    state.easeFactor + 0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02)
  )

  state.dueDate    = new Date(Date.now() + state.interval * 86400000).toISOString()
  state.lastReview = new Date().toISOString()

  return state
}

/**
 * Create a fresh (fully reset) SRS state for a card.
 * @param {string} id - card id
 * @returns {object} new SRS state
 */
export function newState(id) {
  return {
    id,
    easeFactor:   2.5,
    interval:     1,
    repetitions:  0,
    dueDate:      new Date().toISOString(),  // due immediately
    lastReview:   null
  }
}

/**
 * Preview the next interval for each rating without mutating state.
 * @param {object} state
 * @returns {{ again: string, hard: string, good: string, easy: string }}
 */
export function previewIntervals(state) {
  const calc = (rating) => {
    if (state.repetitions === 0) {
      if (rating === 5) return 3
      if (rating === 3) return 2
      return 1
    }
    if (rating === 5) return Math.round(state.interval * state.easeFactor * 1.3)
    if (rating === 3) return Math.round(state.interval * state.easeFactor)
    return Math.max(1, Math.round(state.interval * 0.8))
  }

  const fmt = (days) => {
    if (days === 1) return '1d'
    if (days < 7)  return `${days}d`
    const w = Math.round(days / 7)
    if (w < 5)     return `${w}w`
    return `${Math.round(days / 30)}mo`
  }

  return {
    again: '↻ Reset',
    hard:  fmt(calc(2)),
    good:  fmt(calc(3)),
    easy:  fmt(calc(5))
  }
}

/**
 * Human-readable label for a card's SRS status.
 * @param {object} state
 * @returns {{ label: string, cls: string }}
 */
export function srsStatus(state) {
  if (!state.lastReview) {
    return { label: 'New', cls: 'badge-new' }
  }
  const due = new Date(state.dueDate)
  const now = new Date()
  if (due <= now) {
    return { label: 'Due', cls: 'badge-due' }
  }
  const days = Math.round((due - now) / 86400000)
  if (days === 1) return { label: 'Tomorrow', cls: 'badge-scheduled' }
  return { label: `In ${days}d`, cls: 'badge-scheduled' }
}
