# CardioLingua — Content Writing Instructions

These rules apply every time a new topic is added to `js/data.js`.

---

## Summary Notes

- **Length**: Detailed surgical-level summary. Maximum 1,200 words. Written for a cardiovascular surgery trainee (CT1–CT3 equivalent) — include named structures, specific measurements, anatomical relationships, named classifications, and operative detail where relevant.
- **Currency**: Content must reflect current medical guidelines (AHA, ESC, ACC, ESVS, SVS, etc.). State the guideline source inline when citing a threshold or recommendation.
- **Medications**: If any drug is mentioned, its dose and regimen must also be stated (e.g., "aspirin 75–100 mg daily").
- **Structure**: Use sections appropriate to the topic. Common sections include: Overview, [Anatomy / Pathophysiology / Classification], Surgical Approach / Management, Complications, Surgical Correlates / Key Points.
- **Style**: Concise, clinical, point-form where appropriate. No introductory filler. For anatomy topics, include named branches, tributaries, perforators, anatomical variants, and surgical landmarks.

---

## Flashcards

- **Source**: Generated directly from the note — every clinically significant fact in the note must have a corresponding card.
- **Limit**: Maximum **20 cards per topic**. This produces 40 virtual cards per topic (20 EN + 20 RU). Prioritise the highest-yield clinical facts if the note exceeds 20 card-worthy items.
- **Answer length**: ≤ 3 words per answer. Frame questions so that a precise, short answer is possible.
- **Coverage**: Comprehensive within the 20-card limit. If a fact appears in the note, there should be a card for it — trim only the lowest-yield items to stay at or under 20.
- **Format per card**:
  ```
  question_en: "Clinical question in English?"
  answer_en:   "Short answer"          ← max 3 words

  question_ru: "Direct Russian translation of the question?"
  answer_ru:   "Прямой перевод ответа" ← max 3 words
  ```

---

## Bilingual Format

- **Russian = direct translation** of the English version. No paraphrasing, no additions.
- Use correct Russian medical terminology throughout (not lay terms).
- Mnemonics in English (e.g., SALFOPMS) may be kept in English in the Russian note with a parenthetical Russian label if helpful; do not fabricate a Russian mnemonic.
- Abbreviations: introduce both the English abbreviation and its Russian equivalent where relevant (e.g., "ОСА / CCA", "КЭА / CEA").
- **Russian abbreviations — spell out first**: Every Russian medical term must be written in full before its abbreviation in brackets on first use — e.g., "верхняя брыжеечная артерия (ВБА)", never just "ВБА" on its own. Subsequent uses within the same section may use the abbreviation alone.
- **Russian flashcard abbreviations — always full form**: In Russian flashcard questions and answers (`question_ru`, `answer_ru`), abbreviations must **always** include the full form, every time, without exception — e.g., "лодыжечно-плечевой индекс (ЛПИ)", never just "ЛПИ". Each card stands alone and has no prior context, so the full term must always be present.

---

## Card ID Convention

Card IDs are permanent — they key SRS state in IndexedDB and must **never change** after first use.

Format: `[topic-slug]-[zero-padded number]`
Example: `arterial-head-neck-001`, `arterial-head-neck-002`, …

---

## Example Card Pair

```js
{
  id: 'arterial-head-neck-001',
  question_en: 'Right CCA origin?',
  question_ru: 'Откуда отходит правая ОСА?',
  answer_en:   'Brachiocephalic trunk',
  answer_ru:   'Плечеголовной ствол'
}
```

---

## Note Section Types

```js
// Prose paragraph(s) — separate paragraphs with \n\n
{ title: 'Overview', body: 'First paragraph.\n\nSecond paragraph.', type: 'text' }

// Bullet list
{ title: 'Key Points', body: ['Point one', 'Point two'], type: 'list' }
```
