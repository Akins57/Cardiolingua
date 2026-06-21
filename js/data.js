// js/data.js
// ─────────────────────────────────────────────────────────────────────────────
// ALL study content lives here.
// Structure: Discipline → Subdiscipline → Topic → { note, cards }
//
// Claude Code adds new topics to this file when the user requests them.
// The app auto-discovers new cards on refresh and initialises their SRS state.
//
// NOTE SECTIONS: each section has { title, body, type }
//   type: 'text'  → body is a string (paragraphs separated by \n\n)
//   type: 'list'  → body is an array of strings (bullet points)
//
// CARD IDs: must be unique and NEVER changed after first review session.
// ─────────────────────────────────────────────────────────────────────────────

export const DATA = [
  {
    slug: 'cardiovascular-surgery',
    title_en: 'Cardiovascular Surgery',
    title_ru: 'Сердечно-сосудистая хирургия',
    subdisciplines: [
      {
        slug: 'sample-subdiscipline',
        title_en: 'Sample Subdiscipline',
        title_ru: 'Пример подраздела',
        topics: [
          {
            slug: 'sample-topic',
            title_en: 'Sample Topic',
            title_ru: 'Пример темы',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'This is a placeholder topic. Ask Claude Code to add a real topic and it will be written here with full bilingual content.',
                    type: 'text'
                  },
                  {
                    title: 'Key Points',
                    body: [
                      'Topic notes will appear in this section',
                      'Each bullet point is a high-yield fact',
                      'Toggle the tab above to see the Russian version'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Это тема-заполнитель. Попросите Claude Code добавить реальную тему, и она будет написана здесь с полным двуязычным содержанием.',
                    type: 'text'
                  },
                  {
                    title: 'Ключевые пункты',
                    body: [
                      'Заметки по теме появятся в этом разделе',
                      'Каждый пункт — это важный клинический факт',
                      'Переключите вкладку выше, чтобы увидеть английскую версию'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'sample-topic-001',
                question_en: 'This is a sample flashcard. What will real cards look like?',
                question_ru: 'Это пример карточки. Как будут выглядеть настоящие карточки?',
                answer_en: 'Real cards will have precise clinical questions and answers in both English and Russian, covering key facts from each topic\'s note.',
                answer_ru: 'Настоящие карточки будут содержать точные клинические вопросы и ответы на английском и русском языках, охватывающие ключевые факты из каждой темы.'
              },
              {
                id: 'sample-topic-002',
                question_en: 'How do I add new topics to this app?',
                question_ru: 'Как добавить новые темы в это приложение?',
                answer_en: 'Ask Claude Code: "Add a note and flashcards for [topic name]". Claude will write the content directly into data.js. Refresh the app and the topic appears.',
                answer_ru: 'Попросите Claude Code: "Добавь заметку и карточки для [название темы]". Claude запишет содержание прямо в data.js. Обновите приложение — тема появится.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ── VASCULAR SURGERY ────────────────────────────────────────────────────────
  {
    slug: 'vascular-surgery',
    title_en: 'Vascular Surgery',
    title_ru: 'Сосудистая хирургия',
    subdisciplines: [
      {
        slug: 'anatomy',
        title_en: 'Anatomy',
        title_ru: 'Анатомия',
        topics: [


          // ── Topic: Arterial Supply of the Head & Neck ───────────────────────────
          {
            slug: 'arterial-supply-venous-drainage-head-neck',
            title_en: 'Arterial Supply of the Head & Neck',
            title_ru: 'Артериальное кровоснабжение головы и шеи',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The head and neck receive arterial supply from the common carotid arteries (CCA) and the vertebral arteries. The CCA bifurcates into the external carotid artery (ECA) and internal carotid artery (ICA). The vertebral arteries unite to form the basilar artery, which links to the Circle of Willis.',
                    type: 'text'
                  },
                  {
                    title: 'Common Carotid Artery',
                    body: [
                      'Right CCA arises from the brachiocephalic trunk',
                      'Left CCA arises directly from the aortic arch',
                      'Both travel in the carotid sheath with the internal jugular vein (IJV) laterally and vagus nerve (CN X) posteriorly',
                      'Bifurcate at C3–C4 (upper border of thyroid cartilage) into ECA and ICA',
                      'Carotid sinus at bifurcation: baroreceptor, innervated by CN IX',
                      'Carotid body at bifurcation: chemoreceptor — detects changes in O₂, CO₂, pH'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'External Carotid Artery (ECA) — Branches by Region',
                    body: [
                      'ECA lies medial to the ICA at the bifurcation',
                      'Terminal branches: superficial temporal artery + maxillary artery',
                      'Anterior branches: superior thyroid artery, lingual artery, facial artery',
                      'Medial (deep) branch: ascending pharyngeal artery',
                      'Posterior branches: occipital artery, posterior auricular artery',
                      'Mnemonic — SALFOPMS (Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, Superficial temporal)',
                      'Left gastric gives gastric + esophageal branches',
                      'Middle meningeal artery: branch of maxillary artery; supplies dura mater via foramen spinosum'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Internal Carotid Artery (ICA)',
                    body: 'No branches in the cervical part. Segments: Cervical → Petrous → Lacerum → Cavernous → Clinoid → Ophthalmic → Communicating.\n\nKey intracranial branches: ophthalmic artery (first intracranial branch; supplies the eye via optic canal), posterior communicating artery (connects to posterior circulation), anterior choroidal artery (supplies choroid plexus, optic tract, internal capsule).\n\nTerminal branches: Middle Cerebral Artery (MCA) and Anterior Cerebral Artery (ACA). The MCA supplies the lateral cerebral cortex; the ACA supplies the medial frontal lobe.',
                    type: 'text'
                  },
                  {
                    title: 'Vertebral Arteries & Basilar Artery',
                    body: [
                      'Vertebral arteries: first branch of the subclavian artery bilaterally',
                      'Enter transverse foramina at C6 (occasionally C7); ascend through C6–C1',
                      'Enter skull via foramen magnum',
                      'Vertebral artery branch: anterior spinal artery (supplies anterior 2/3 of spinal cord)',
                      'The two vertebral arteries unite at the lower border of the pons to form the basilar artery',
                      'Basilar artery is the main blood supply to the brain stem',
                      'Basilar artery branches: anterior inferior cerebellar artery (AICA), superior cerebellar artery (SCA), posterior cerebral arteries (PCA)',
                      'Basilar also gives median pontine branches to the pons',
                      'PCAs connect to the Circle of Willis via posterior communicating arteries',
                      'Basilar + carotid systems anastomose at Circle of Willis'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Carotid endarterectomy (CEA): indicated for symptomatic stenosis ≥50% or asymptomatic ≥60–70% (AHA/ASA)',
                      'During CEA: protect CN XII (hypoglossal), CN X (vagus in sheath), superior laryngeal nerve, ansa cervicalis',
                      'Carotid body tumour: arises at bifurcation, splays ECA from ICA — "lyre sign" on angiography',
                      'Subclavian steal syndrome: proximal subclavian stenosis → retrograde vertebral flow → posterior fossa ischaemia',
                      'IJV cannulation: medial border of SCM at thyroid cartilage level; right side preferred (direct path to SVC)'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Голова и шея получают артериальное кровоснабжение от общих сонных артерий (ОСА) и позвоночных артерий. ОСА делится на наружную сонную артерию (НСА) и внутреннюю сонную артерию (ВСА). Позвоночные артерии сливаются, образуя базилярную артерию, которая входит в Виллизиев круг.',
                    type: 'text'
                  },
                  {
                    title: 'Общая сонная артерия',
                    body: [
                      'Правая ОСА отходит от плечеголовного ствола',
                      'Левая ОСА отходит непосредственно от дуги аорты',
                      'Обе проходят в сонном влагалище: внутренняя яремная вена (ВЯВ) — латерально, блуждающий нерв (ЧН X) — кзади',
                      'Бифуркация на уровне С3–С4 (верхний край щитовидного хряща) на НСА и ВСА',
                      'Каротидный синус в области бифуркации: барорецептор, иннервируется ЧН IX',
                      'Каротидное тело: хеморецептор — реагирует на изменения O₂, CO₂, pH'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Наружная сонная артерия (НСА) — ветви по регионам',
                    body: [
                      'НСА располагается медиальнее ВСА в области бифуркации',
                      'Конечные ветви: поверхностная височная артерия + верхнечелюстная артерия',
                      'Передние ветви: верхняя щитовидная, язычная, лицевая артерии',
                      'Медиальная (глубокая) ветвь: восходящая глоточная артерия',
                      'Задние ветви: затылочная артерия, задняя ушная артерия',
                      'Мнемоника — SALFOPMS (Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, Superficial temporal)',
                      'Средняя менингеальная артерия: ветвь верхнечелюстной артерии; кровоснабжает твёрдую мозговую оболочку через остистое отверстие'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Внутренняя сонная артерия (ВСА)',
                    body: 'В шейной части ветвей не имеет. Сегменты: шейный → каменистый → рваный → кавернозный → клиновидный → глазной → коммуникантный.\n\nОсновные внутричерепные ветви: глазная артерия (первая внутричерепная ветвь; кровоснабжает глаз через зрительный канал), задняя соединительная артерия (связь с задним кровообращением), передняя ворсинчатая артерия (кровоснабжает сосудистое сплетение, зрительный тракт, внутреннюю капсулу).\n\nКонечные ветви: средняя мозговая артерия (СМА) и передняя мозговая артерия (ПМА). СМА кровоснабжает латеральную кору; ПМА — медиальную лобную долю.',
                    type: 'text'
                  },
                  {
                    title: 'Позвоночные артерии и базилярная артерия',
                    body: [
                      'Позвоночные артерии: первая ветвь подключичной артерии с обеих сторон',
                      'Входят в поперечные отверстия на уровне С6 (иногда С7); поднимаются через С6–С1',
                      'Входят в череп через большое затылочное отверстие',
                      'Ветвь позвоночной артерии: передняя спинномозговая артерия (кровоснабжает передние 2/3 спинного мозга)',
                      'Две позвоночные артерии сливаются у нижнего края моста в базилярную артерию',
                      'Базилярная артерия — основное кровоснабжение ствола мозга',
                      'Ветви базилярной артерии: передняя нижняя мозжечковая артерия (ПНМА), верхняя мозжечковая артерия (ВМА), задние мозговые артерии (ЗМА)',
                      'Базилярная артерия также даёт медианные ветви к мосту',
                      'ЗМА соединяются с Виллизиевым кругом через задние соединительные артерии',
                      'Каротидная и базилярная системы анастомозируют в Виллизиевом круге'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические ориентиры',
                    body: [
                      'Каротидная эндартерэктомия (КЭА): показана при симптоматическом стенозе ≥50% или асимптомном ≥60–70% (AHA/ASA)',
                      'При КЭА: защищать ЧН XII (подъязычный), ЧН X (блуждающий во влагалище), верхний гортанный нерв, петлю шейного нерва',
                      'Опухоль каротидного тела: возникает в области бифуркации, раздвигает ВСА и НСА — признак «лиры» на ангиографии',
                      'Синдром подключичного обкрадывания: проксимальный стеноз подключичной → ретроградный кровоток в позвоночной → ишемия задней ямки',
                      'Катетеризация ВЯВ: у медиального края ГКСМ на уровне щитовидного хряща; предпочтительна правая сторона (прямой путь к ВПВ)'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'head-neck-anat-001',
                question_en: 'Right CCA origin?',
                question_ru: 'Откуда отходит правая ОСА?',
                answer_en: 'Brachiocephalic trunk',
                answer_ru: 'Плечеголовной ствол'
              },
              {
                id: 'head-neck-anat-002',
                question_en: 'Left CCA origin?',
                question_ru: 'Откуда отходит левая ОСА?',
                answer_en: 'Aortic arch',
                answer_ru: 'Дуга аорты'
              },
              {
                id: 'head-neck-anat-003',
                question_en: 'CCA bifurcation vertebral level?',
                question_ru: 'Уровень бифуркации ОСА?',
                answer_en: 'C3–C4',
                answer_ru: 'С3–С4'
              },
              {
                id: 'head-neck-anat-004',
                question_en: 'ECA terminal branches?',
                question_ru: 'Конечные ветви НСА?',
                answer_en: 'Temporal, maxillary',
                answer_ru: 'Височная, верхнечелюстная'
              },
              {
                id: 'head-neck-anat-005',
                question_en: 'ECA anterior branches (3)?',
                question_ru: 'Передние ветви НСА (3)?',
                answer_en: 'Thyroid, lingual, facial',
                answer_ru: 'Щитовидная, язычная, лицевая'
              },
              {
                id: 'head-neck-anat-006',
                question_en: 'ECA medial (deep) branch?',
                question_ru: 'Медиальная ветвь НСА?',
                answer_en: 'Ascending pharyngeal',
                answer_ru: 'Восходящая глоточная'
              },
              {
                id: 'head-neck-anat-007',
                question_en: 'ECA posterior branches (2)?',
                question_ru: 'Задние ветви НСА (2)?',
                answer_en: 'Occipital, posterior auricular',
                answer_ru: 'Затылочная, задняя ушная'
              },
              {
                id: 'head-neck-anat-008',
                question_en: 'Middle meningeal artery origin?',
                question_ru: 'Откуда отходит средняя менингеальная артерия?',
                answer_en: 'Maxillary artery',
                answer_ru: 'Верхнечелюстная артерия'
              },
              {
                id: 'head-neck-anat-009',
                question_en: 'ICA cervical branches?',
                question_ru: 'Шейные ветви ВСА?',
                answer_en: 'None',
                answer_ru: 'Отсутствуют'
              },
              {
                id: 'head-neck-anat-010',
                question_en: 'ICA terminal branches?',
                question_ru: 'Конечные ветви ВСА?',
                answer_en: 'MCA, ACA',
                answer_ru: 'СМА, ПМА'
              },
              {
                id: 'head-neck-anat-011',
                question_en: 'First intracranial branch of ICA?',
                question_ru: 'Первая внутричерепная ветвь ВСА?',
                answer_en: 'Ophthalmic artery',
                answer_ru: 'Глазная артерия'
              },
              {
                id: 'head-neck-anat-012',
                question_en: 'ICA branch connecting to posterior circle?',
                question_ru: 'Ветвь ВСА к заднему кровообращению?',
                answer_en: 'Posterior communicating',
                answer_ru: 'Задняя соединительная'
              },
              {
                id: 'head-neck-anat-013',
                question_en: 'ICA branch to choroid plexus?',
                question_ru: 'Ветвь ВСА к сосудистому сплетению?',
                answer_en: 'Anterior choroidal',
                answer_ru: 'Передняя ворсинчатая'
              },
              {
                id: 'head-neck-anat-014',
                question_en: 'Vertebral arteries unite where?',
                question_ru: 'Где сливаются позвоночные артерии?',
                answer_en: 'Lower border of pons',
                answer_ru: 'Нижний край моста'
              },
              {
                id: 'head-neck-anat-015',
                question_en: 'Structure formed when vertebrals unite?',
                question_ru: 'Что образуется при слиянии позвоночных артерий?',
                answer_en: 'Basilar artery',
                answer_ru: 'Базилярная артерия'
              },
              {
                id: 'head-neck-anat-016',
                question_en: 'Vertebral artery branch to spinal cord?',
                question_ru: 'Ветвь позвоночной артерии к спинному мозгу?',
                answer_en: 'Anterior spinal',
                answer_ru: 'Передняя спинномозговая'
              },
              {
                id: 'head-neck-anat-017',
                question_en: 'First branch of subclavian artery?',
                question_ru: 'Первая ветвь подключичной артерии?',
                answer_en: 'Vertebral artery',
                answer_ru: 'Позвоночная артерия'
              },
              {
                id: 'head-neck-anat-018',
                question_en: 'Basilar artery lower cerebellar branch?',
                question_ru: 'Нижняя мозжечковая ветвь базилярной артерии?',
                answer_en: 'AICA',
                answer_ru: 'ПНМА'
              },
              {
                id: 'head-neck-anat-019',
                question_en: 'Basilar artery upper cerebellar branch?',
                question_ru: 'Верхняя мозжечковая ветвь базилярной артерии?',
                answer_en: 'Superior cerebellar',
                answer_ru: 'Верхняя мозжечковая'
              },
              {
                id: 'head-neck-anat-020',
                question_en: 'Basilar artery terminal branches?',
                question_ru: 'Конечные ветви базилярной артерии?',
                answer_en: 'Posterior cerebral arteries',
                answer_ru: 'Задние мозговые артерии'
              },
              {
                id: 'head-neck-anat-021',
                question_en: 'PICA arises from which artery?',
                question_ru: 'Откуда отходит ЗНМА?',
                answer_en: 'Vertebral artery',
                answer_ru: 'Позвоночная артерия'
              },
              {
                id: 'head-neck-anat-022',
                question_en: 'Carotid sinus function?',
                question_ru: 'Функция каротидного синуса?',
                answer_en: 'Baroreceptor',
                answer_ru: 'Барорецептор'
              },
              {
                id: 'head-neck-anat-023',
                question_en: 'Carotid body function?',
                question_ru: 'Функция каротидного тела?',
                answer_en: 'Chemoreceptor',
                answer_ru: 'Хеморецептор'
              },
              {
                id: 'head-neck-anat-024',
                question_en: 'ECA position relative to ICA at bifurcation?',
                question_ru: 'Положение НСА относительно ВСА у бифуркации?',
                answer_en: 'Medial to ICA',
                answer_ru: 'Медиальнее ВСА'
              },
              {
                id: 'head-neck-anat-025',
                question_en: 'Vertebral artery enters transverse foramina at?',
                question_ru: 'На каком уровне позвоночная артерия входит в поперечные отверстия?',
                answer_en: 'C6',
                answer_ru: 'С6'
              },
              {
                id: 'head-neck-anat-026',
                question_en: 'ECA mnemonic (8 branches)?',
                question_ru: 'Мнемоника для 8 ветвей НСА?',
                answer_en: 'SALFOPMS',
                answer_ru: 'SALFOPMS'
              },
              {
                id: 'head-neck-anat-027',
                question_en: 'Carotid sinus innervation?',
                question_ru: 'Иннервация каротидного синуса?',
                answer_en: 'CN IX (glossopharyngeal)',
                answer_ru: 'ЧН IX (языкоглоточный)'
              },
              {
                id: 'head-neck-anat-028',
                question_en: 'Carotid sheath contents?',
                question_ru: 'Содержимое сонного влагалища?',
                answer_en: 'CCA, IJV, vagus',
                answer_ru: 'ОСА, ВЯВ, блуждающий'
              },
              {
                id: 'head-neck-anat-029',
                question_en: 'Basilar artery pontine branches?',
                question_ru: 'Ветви базилярной артерии к мосту?',
                answer_en: 'Median pontine branches',
                answer_ru: 'Медианные ветви моста'
              },
              {
                id: 'head-neck-anat-030',
                question_en: 'MCA supplies which cortex region?',
                question_ru: 'Какой регион коры кровоснабжает СМА?',
                answer_en: 'Lateral cerebral cortex',
                answer_ru: 'Латеральная кора'
              }
            ]
          },

          // ── Topic: Aorta & Coronary Arteries ────────────────────────────────────
          {
            slug: 'vascular-anatomy-thorax',
            title_en: 'Aorta & Coronary Arteries',
            title_ru: 'Аорта и коронарные артерии',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview — Aortic Segments',
                    body: 'The aorta arises from the left ventricle as the aortic root, then becomes the ascending aorta, continues as the aortic arch, and then the descending thoracic aorta. The descending thoracic aorta begins at T4 and exits the thorax through the aortic hiatus in the diaphragm at T12, continuing as the abdominal aorta.',
                    type: 'text'
                  },
                  {
                    title: 'Aortic Arch — Three Branches',
                    body: [
                      'Brachiocephalic trunk (innominate): first and largest branch → divides into right common carotid artery (CCA) and right subclavian artery',
                      'Left common carotid artery: second branch, arises directly from arch',
                      'Left subclavian artery: third branch',
                      'A useful note: the right-sided vessels (CCA + subclavian) share the brachiocephalic trunk; left-sided vessels arise directly from the arch'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Descending Thoracic Aorta — Branches',
                    body: [
                      'Starts at T4; exits at T12 via aortic hiatus',
                      '9 pairs of posterior intercostal arteries: 3rd through 11th intercostal spaces',
                      '1 pair of subcostal arteries: below the 12th rib',
                      '1 pair of superior phrenic arteries: to the diaphragm',
                      'Note: 1st and 2nd intercostal spaces are supplied by the superior intercostal artery (a branch of the costocervical trunk from the subclavian artery — not directly from the thoracic aorta)',
                      'Other branches: oesophageal arteries, mediastinal arteries, bronchial arteries',
                      'Bronchial arteries: typically 2 left + 1 right (or 1 each side) — variable'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Right Coronary Artery (RCA)',
                    body: [
                      'Arises from the right aortic sinus (right coronary sinus)',
                      'Courses along the right atrioventricular (AV) groove',
                      'Acute marginal branches: supply the right ventricular free wall',
                      'Posterior descending artery (PDA): supplies the inferior interventricular septum and inferior LV wall — arises from RCA in right-dominant circulation (85%)',
                      'Posterolateral ventricular branches: supply the posterior left ventricle in right dominance',
                      'Right dominant circulation: RCA gives PDA (85% of people)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Left Coronary Artery (LCA)',
                    body: [
                      'Left main coronary artery (LMCA) arises from the left aortic sinus',
                      'Bifurcates into: Left Anterior Descending (LAD) artery + Left Circumflex (LCx) artery',
                      'LAD: runs in the anterior interventricular groove; gives septal branches (perforators to interventricular septum) and diagonal branches (to anterolateral LV wall)',
                      'LAD supplies: anterior LV wall, anterior 2/3 of interventricular septum, apex',
                      'LCx: runs in the left AV groove; gives obtuse marginal (OM) branches to the lateral LV wall',
                      'Left dominant circulation (15%): LCx gives the PDA instead of the RCA'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Coarctation of aorta: typically at aortic isthmus (just distal to origin of left subclavian)',
                      'Aortic dissection: Type A (involves ascending ± arch) — surgical emergency; Type B (descending only) — medical or endovascular',
                      'CABG targets: LAD (most commonly LIMA), RCA, LCx OM branches',
                      'PDA from RCA → right dominance (most common); PDA from LCx → left dominance'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор — Сегменты аорты',
                    body: 'Аорта берёт начало из левого желудочка как аортальный корень, затем переходит в восходящую аорту, дугу аорты и нисходящую грудную аорту. Нисходящая грудная аорта начинается на уровне T4 и выходит из грудной клетки через аортальное отверстие диафрагмы на уровне T12, продолжаясь как брюшная аорта.',
                    type: 'text'
                  },
                  {
                    title: 'Дуга аорты — три ветви',
                    body: [
                      'Плечеголовной ствол (безымянная артерия): первая и наиболее крупная ветвь → делится на правую общую сонную артерию (ОСА) и правую подключичную артерию',
                      'Левая общая сонная артерия: вторая ветвь, отходит непосредственно от дуги',
                      'Левая подключичная артерия: третья ветвь',
                      'Примечание: правые сосуды (ОСА + подключичная) разделяют плечеголовной ствол; левые отходят непосредственно от дуги'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Нисходящая грудная аорта — ветви',
                    body: [
                      'Начинается на уровне T4; выходит через аортальное отверстие на уровне T12',
                      '9 пар задних межрёберных артерий: 3–11 межрёберные промежутки',
                      '1 пара подрёберных артерий: ниже XII ребра',
                      '1 пара верхних диафрагмальных артерий: к диафрагме',
                      'Примечание: 1-е и 2-е межрёберные промежутки кровоснабжаются верхней межрёберной артерией (ветвь реберно-шейного ствола от подключичной артерии)',
                      'Другие ветви: пищеводные артерии, медиастинальные артерии, бронхиальные артерии',
                      'Бронхиальные артерии: как правило, 2 левые + 1 правая (вариабельно)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Правая коронарная артерия (ПКА)',
                    body: [
                      'Отходит от правого аортального синуса (правый коронарный синус)',
                      'Проходит по правой предсердно-желудочковой борозде',
                      'Острые краевые ветви: кровоснабжают свободную стенку правого желудочка',
                      'Задняя межжелудочковая артерия (ЗМЖА): кровоснабжает нижнюю часть МЖП и нижнюю стенку ЛЖ — отходит от ПКА при правом типе кровоснабжения (85%)',
                      'Заднебоковые ветви: кровоснабжают заднюю стенку ЛЖ при правом типе',
                      'Правый тип кровоснабжения: ПКА даёт ЗМЖА (85% людей)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Левая коронарная артерия (ЛКА)',
                    body: [
                      'Ствол левой коронарной артерии (СЛКА) отходит от левого аортального синуса',
                      'Делится на: переднюю межжелудочковую артерию (ПМЖА / LAD) + огибающую артерию (ОА / LCx)',
                      'LAD: проходит в передней межжелудочковой борозде; даёт септальные ветви (перфораторы к МЖП) и диагональные ветви (к переднебоковой стенке ЛЖ)',
                      'LAD кровоснабжает: переднюю стенку ЛЖ, передние 2/3 МЖП, верхушку',
                      'LCx: проходит в левой предсердно-желудочковой борозде; даёт тупые краевые (ТК) ветви к боковой стенке ЛЖ',
                      'Левый тип кровоснабжения (15%): LCx даёт ЗМЖА вместо ПКА'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические ориентиры',
                    body: [
                      'Коарктация аорты: как правило, в области аортального перешейка (дистальнее левой подключичной артерии)',
                      'Расслоение аорты: тип А (восходящая ± дуга) — хирургическая экстренность; тип Б (только нисходящая) — консервативно или эндоваскулярно',
                      'Мишени АКШ: LAD (чаще всего ЛВГА), ПКА, ветви ОА ТК',
                      'ЗМЖА от ПКА → правый тип (наиболее частый); ЗМЖА от LCx → левый тип'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'thorax-anat-001',
                question_en: 'Aorta arises from?',
                question_ru: 'Откуда берёт начало аорта?',
                answer_en: 'Left ventricle',
                answer_ru: 'Левый желудочек'
              },
              {
                id: 'thorax-anat-002',
                question_en: 'Aortic segments in order?',
                question_ru: 'Сегменты аорты по порядку?',
                answer_en: 'Root, ascending, arch, descending',
                answer_ru: 'Корень, восходящая, дуга, нисходящая'
              },
              {
                id: 'thorax-anat-003',
                question_en: 'Number of aortic arch branches?',
                question_ru: 'Количество ветвей дуги аорты?',
                answer_en: 'Three',
                answer_ru: 'Три'
              },
              {
                id: 'thorax-anat-004',
                question_en: 'First aortic arch branch?',
                question_ru: 'Первая ветвь дуги аорты?',
                answer_en: 'Brachiocephalic trunk',
                answer_ru: 'Плечеголовной ствол'
              },
              {
                id: 'thorax-anat-005',
                question_en: 'Brachiocephalic trunk divides into?',
                question_ru: 'На что делится плечеголовной ствол?',
                answer_en: 'R CCA, R subclavian',
                answer_ru: 'Правая ОСА, правая подключичная'
              },
              {
                id: 'thorax-anat-006',
                question_en: 'Descending thoracic aorta starts at?',
                question_ru: 'На каком уровне начинается нисходящая грудная аорта?',
                answer_en: 'T4',
                answer_ru: 'T4'
              },
              {
                id: 'thorax-anat-007',
                question_en: 'Aortic hiatus level?',
                question_ru: 'Уровень аортального отверстия диафрагмы?',
                answer_en: 'T12',
                answer_ru: 'T12'
              },
              {
                id: 'thorax-anat-008',
                question_en: 'Pairs of posterior intercostal arteries from thoracic aorta?',
                question_ru: 'Пар задних межрёберных артерий от грудной аорты?',
                answer_en: '9 pairs (3rd–11th)',
                answer_ru: '9 пар (3–11)'
              },
              {
                id: 'thorax-anat-009',
                question_en: '1st and 2nd intercostals arise from?',
                question_ru: 'От чего отходят 1-е и 2-е межрёберные артерии?',
                answer_en: 'Superior intercostal artery',
                answer_ru: 'Верхняя межрёберная артерия'
              },
              {
                id: 'thorax-anat-010',
                question_en: 'Superior intercostal artery is a branch of?',
                question_ru: 'Ветвью какого ствола является верхняя межрёберная артерия?',
                answer_en: 'Costocervical trunk',
                answer_ru: 'Рёберно-шейный ствол'
              },
              {
                id: 'thorax-anat-011',
                question_en: 'Bronchial artery arrangement?',
                question_ru: 'Количество бронхиальных артерий?',
                answer_en: 'Two (left + right)',
                answer_ru: 'Две (левая + правая)'
              },
              {
                id: 'thorax-anat-012',
                question_en: 'RCA courses along which groove?',
                question_ru: 'По какой борозде проходит ПКА?',
                answer_en: 'AV groove',
                answer_ru: 'Предсердно-желудочковая борозда'
              },
              {
                id: 'thorax-anat-013',
                question_en: 'RCA branches (name 3)?',
                question_ru: 'Ветви ПКА (назвать 3)?',
                answer_en: 'PDA, acute marginal, posterolateral',
                answer_ru: 'ЗМЖА, острые краевые, заднебоковые'
              },
              {
                id: 'thorax-anat-014',
                question_en: 'Left main bifurcates into?',
                question_ru: 'На что делится ствол ЛКА?',
                answer_en: 'LAD, circumflex',
                answer_ru: 'LAD, огибающая'
              },
              {
                id: 'thorax-anat-015',
                question_en: 'LAD branches?',
                question_ru: 'Ветви LAD?',
                answer_en: 'Septal, diagonal',
                answer_ru: 'Септальные, диагональные'
              },
              {
                id: 'thorax-anat-016',
                question_en: 'Circumflex artery branches?',
                question_ru: 'Ветви огибающей артерии?',
                answer_en: 'Obtuse marginal',
                answer_ru: 'Тупые краевые'
              },
              {
                id: 'thorax-anat-017',
                question_en: 'PDA arises from RCA in which dominance?',
                question_ru: 'При каком типе кровоснабжения ЗМЖА отходит от ПКА?',
                answer_en: 'Right dominance (85%)',
                answer_ru: 'Правый тип (85%)'
              },
              {
                id: 'thorax-anat-018',
                question_en: 'LAD territory?',
                question_ru: 'Зона кровоснабжения LAD?',
                answer_en: 'Anterior LV, septum',
                answer_ru: 'Передняя стенка ЛЖ, МЖП'
              },
              {
                id: 'thorax-anat-019',
                question_en: 'Circumflex territory?',
                question_ru: 'Зона кровоснабжения огибающей?',
                answer_en: 'Lateral LV wall',
                answer_ru: 'Боковая стенка ЛЖ'
              },
              {
                id: 'thorax-anat-020',
                question_en: 'RCA territory in right dominance?',
                question_ru: 'Зона ПКА при правом типе?',
                answer_en: 'Inferior LV, posterior septum',
                answer_ru: 'Нижняя стенка ЛЖ, задняя МЖП'
              },
              {
                id: 'thorax-anat-021',
                question_en: 'Left dominant circulation — PDA from?',
                question_ru: 'При левом типе ЗМЖА отходит от?',
                answer_en: 'Left circumflex',
                answer_ru: 'Огибающая артерия'
              },
              {
                id: 'thorax-anat-022',
                question_en: 'Coarctation typically at?',
                question_ru: 'Типичное место коарктации аорты?',
                answer_en: 'Aortic isthmus',
                answer_ru: 'Аортальный перешеек'
              },
              {
                id: 'thorax-anat-023',
                question_en: 'Type A aortic dissection involves?',
                question_ru: 'Какие отделы затрагивает расслоение типа А?',
                answer_en: 'Ascending aorta',
                answer_ru: 'Восходящая аорта'
              },
              {
                id: 'thorax-anat-024',
                question_en: 'Second aortic arch branch?',
                question_ru: 'Вторая ветвь дуги аорты?',
                answer_en: 'Left CCA',
                answer_ru: 'Левая ОСА'
              },
              {
                id: 'thorax-anat-025',
                question_en: 'Third aortic arch branch?',
                question_ru: 'Третья ветвь дуги аорты?',
                answer_en: 'Left subclavian',
                answer_ru: 'Левая подключичная'
              },
              {
                id: 'thorax-anat-026',
                question_en: 'Subcostal arteries arise from?',
                question_ru: 'Откуда отходят подрёберные артерии?',
                answer_en: 'Descending thoracic aorta',
                answer_ru: 'Нисходящая грудная аорта'
              },
              {
                id: 'thorax-anat-027',
                question_en: 'LAD runs in which groove?',
                question_ru: 'По какой борозде проходит LAD?',
                answer_en: 'Anterior interventricular',
                answer_ru: 'Передняя межжелудочковая'
              },
              {
                id: 'thorax-anat-028',
                question_en: 'Diagonal branches arise from?',
                question_ru: 'От чего отходят диагональные ветви?',
                answer_en: 'LAD',
                answer_ru: 'LAD'
              },
              {
                id: 'thorax-anat-029',
                question_en: 'Obtuse marginal branches arise from?',
                question_ru: 'От чего отходят тупые краевые ветви?',
                answer_en: 'Left circumflex',
                answer_ru: 'Огибающая артерия'
              },
              {
                id: 'thorax-anat-030',
                question_en: 'Acute marginal branches arise from?',
                question_ru: 'От чего отходят острые краевые ветви?',
                answer_en: 'RCA',
                answer_ru: 'ПКА'
              }
            ]
          },

          // ── Topic: Vascular Anatomy of the Upper Limb ───────────────────────────
          {
            slug: 'vascular-anatomy-upper-limb',
            title_en: 'Vascular Anatomy of the Upper Limb',
            title_ru: 'Сосудистая анатомия верхней конечности',
            note: {
              en: {
                sections: [
                  {
                    title: 'Subclavian Artery — 3 Parts (divided by Scalenus Anterior)',
                    body: [
                      'Part 1 (medial to scalenus anterior) — 3 branches:',
                      '  1. Vertebral artery: enters transverse foramina at C6',
                      '  2. Internal thoracic (mammary) artery: descends behind costal cartilages; used for CABG',
                      '  3. Thyrocervical trunk → 3 branches: suprascapular artery, inferior thyroid artery, transverse cervical artery',
                      'Part 2 (behind scalenus anterior) — 1 branch:',
                      '  Costocervical trunk → superior intercostal artery (supplies 1st + 2nd intercostal spaces) + deep cervical artery',
                      'Part 3 (lateral to scalenus anterior) — 1 branch:',
                      '  Dorsal scapular artery'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Axillary Artery — 3 Parts (divided by Pectoralis Minor)',
                    body: [
                      'Begins at outer border of the 1st rib; ends at lower border of teres major',
                      'Part 1 (medial to pectoralis minor) — 1 branch:',
                      '  Superior thoracic artery',
                      'Part 2 (behind pectoralis minor) — 2 branches:',
                      '  Thoracoacromial artery → 4 branches: pectoral, acromial, clavicular, deltoid',
                      '  Lateral thoracic artery',
                      'Part 3 (lateral to pectoralis minor) — 3 branches:',
                      '  Subscapular artery',
                      '  Anterior humeral circumflex artery (AHCA)',
                      '  Posterior humeral circumflex artery (PHCA)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Brachial Artery',
                    body: [
                      'Begins at lower border of teres major; terminates at the radial neck as it bifurcates',
                      'Branches: profunda brachii (deep brachial) artery — accompanies radial nerve in spiral groove',
                      'Superior ulnar collateral artery',
                      'Inferior ulnar collateral artery',
                      'Terminates by dividing into: radial artery + ulnar artery'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Radial Artery',
                    body: [
                      'Branches: radial recurrent artery (anastomoses at elbow), superficial palmar branch',
                      'Continues at the wrist as the deep palmar arch (passes through anatomical snuffbox between 1st and 2nd metacarpal bases)',
                      'Deep palmar arch branches: princeps pollicis artery (to thumb), radialis indicis artery (to index finger lateral side)',
                      'Deep palmar arch anastomoses with the deep branch of the ulnar artery'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Ulnar Artery',
                    body: [
                      'Branches: anterior ulnar recurrent artery, posterior ulnar recurrent artery',
                      'Common interosseous artery → 3 branches: anterior interosseous artery, posterior interosseous artery, recurrent interosseous artery',
                      'At the wrist, the ulnar artery divides into superficial and deep branches',
                      'Superficial branch → superficial palmar arch → 4 common palmar digital arteries → proper palmar digital arteries',
                      'Deep branch → anastomoses with radial artery to complete deep palmar arch'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Palmar Arches — Summary',
                    body: [
                      'Superficial palmar arch: mainly from ulnar artery (superficial branch); completed by superficial palmar branch of radial artery → gives 4 common palmar digital arteries → proper palmar digital arteries',
                      'Deep palmar arch: mainly from radial artery (terminal); completed by deep branch of ulnar → gives princeps pollicis + radialis indicis + palmar metacarpal arteries',
                      'Deep arch lies approximately 1 cm proximal to superficial arch'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Подключичная артерия — 3 части (разделяет передняя лестничная мышца)',
                    body: [
                      'Часть 1 (медиальнее передней лестничной мышцы) — 3 ветви:',
                      '  1. Позвоночная артерия: входит в поперечные отверстия на уровне С6',
                      '  2. Внутренняя грудная (молочная) артерия: нисходит позади рёберных хрящей; используется для АКШ',
                      '  3. Щито-шейный ствол → 3 ветви: надлопаточная артерия, нижняя щитовидная артерия, поперечная артерия шеи',
                      'Часть 2 (позади передней лестничной мышцы) — 1 ветвь:',
                      '  Рёберно-шейный ствол → верхняя межрёберная артерия (1-й и 2-й межрёберные промежутки) + глубокая шейная артерия',
                      'Часть 3 (латеральнее передней лестничной мышцы) — 1 ветвь:',
                      '  Дорсальная артерия лопатки'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Подмышечная артерия — 3 части (разделяет малая грудная мышца)',
                    body: [
                      'Начинается у наружного края I ребра; заканчивается у нижнего края большой круглой мышцы',
                      'Часть 1 (медиальнее малой грудной мышцы) — 1 ветвь:',
                      '  Верхняя грудная артерия',
                      'Часть 2 (позади малой грудной мышцы) — 2 ветви:',
                      '  Грудоакромиальный ствол → 4 ветви: грудная, акромиальная, ключичная, дельтовидная',
                      '  Латеральная грудная артерия',
                      'Часть 3 (латеральнее малой грудной мышцы) — 3 ветви:',
                      '  Подлопаточная артерия',
                      '  Передняя артерия огибающая плечо (ПАОП)',
                      '  Задняя артерия огибающая плечо (ЗАОП)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Плечевая артерия',
                    body: [
                      'Начинается у нижнего края большой круглой мышцы; заканчивается бифуркацией',
                      'Ветви: глубокая артерия плеча — сопровождает лучевой нерв в спиральном канале',
                      'Верхняя локтевая коллатеральная артерия',
                      'Нижняя локтевая коллатеральная артерия',
                      'Делится на: лучевую артерию + локтевую артерию'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Лучевая артерия',
                    body: [
                      'Ветви: возвратная лучевая артерия (анастомоз в области локтя), поверхностная ладонная ветвь',
                      'На запястье продолжается как глубокая ладонная дуга (проходит через анатомическую табакерку)',
                      'Ветви глубокой ладонной дуги: артерия большого пальца кисти, лучевая артерия указательного пальца',
                      'Глубокая ладонная дуга анастомозирует с глубокой ветвью локтевой артерии'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Локтевая артерия',
                    body: [
                      'Ветви: передняя возвратная локтевая артерия, задняя возвратная локтевая артерия',
                      'Общая межкостная артерия → 3 ветви: передняя межкостная, задняя межкостная, возвратная межкостная артерии',
                      'На запястье делится на поверхностную и глубокую ветви',
                      'Поверхностная ветвь → поверхностная ладонная дуга → 4 общие ладонные пальцевые артерии → собственные ладонные пальцевые артерии',
                      'Глубокая ветвь → анастомозирует с лучевой артерией для завершения глубокой ладонной дуги'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Ладонные дуги — резюме',
                    body: [
                      'Поверхностная ладонная дуга: преимущественно из локтевой артерии (поверхностная ветвь); дополняется поверхностной ладонной ветвью лучевой → 4 общие ладонные пальцевые → собственные пальцевые артерии',
                      'Глубокая ладонная дуга: преимущественно из лучевой артерии (конечная); дополняется глубокой ветвью локтевой → артерия большого пальца + лучевая артерия указательного пальца + пястные артерии',
                      'Глубокая дуга располагается примерно на 1 см проксимальнее поверхностной'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'upper-limb-anat-001',
                question_en: 'Structure dividing subclavian into 3 parts?',
                question_ru: 'Структура, делящая подключичную на 3 части?',
                answer_en: 'Scalenus anterior',
                answer_ru: 'Передняя лестничная мышца'
              },
              {
                id: 'upper-limb-anat-002',
                question_en: 'Subclavian part 1 — how many branches?',
                question_ru: 'Сколько ветвей у 1-й части подключичной?',
                answer_en: 'Three',
                answer_ru: 'Три'
              },
              {
                id: 'upper-limb-anat-003',
                question_en: 'Subclavian part 1, branch 1?',
                question_ru: '1-я ветвь 1-й части подключичной?',
                answer_en: 'Vertebral artery',
                answer_ru: 'Позвоночная артерия'
              },
              {
                id: 'upper-limb-anat-004',
                question_en: 'Subclavian part 1, branch 2?',
                question_ru: '2-я ветвь 1-й части подключичной?',
                answer_en: 'Internal thoracic artery',
                answer_ru: 'Внутренняя грудная артерия'
              },
              {
                id: 'upper-limb-anat-005',
                question_en: 'Subclavian part 1, branch 3?',
                question_ru: '3-я ветвь 1-й части подключичной?',
                answer_en: 'Thyrocervical trunk',
                answer_ru: 'Щито-шейный ствол'
              },
              {
                id: 'upper-limb-anat-006',
                question_en: 'Thyrocervical trunk branches (3)?',
                question_ru: 'Ветви щито-шейного ствола (3)?',
                answer_en: 'Suprascapular, inf thyroid, transverse cervical',
                answer_ru: 'Надлопаточная, нижняя щитовидная, поперечная шеи'
              },
              {
                id: 'upper-limb-anat-007',
                question_en: 'Subclavian part 2 branch?',
                question_ru: 'Ветвь 2-й части подключичной?',
                answer_en: 'Costocervical trunk',
                answer_ru: 'Рёберно-шейный ствол'
              },
              {
                id: 'upper-limb-anat-008',
                question_en: 'Costocervical trunk branches?',
                question_ru: 'Ветви рёберно-шейного ствола?',
                answer_en: 'Superior intercostal, deep cervical',
                answer_ru: 'Верхняя межрёберная, глубокая шейная'
              },
              {
                id: 'upper-limb-anat-009',
                question_en: 'Subclavian part 3 branch?',
                question_ru: 'Ветвь 3-й части подключичной?',
                answer_en: 'Dorsal scapular',
                answer_ru: 'Дорсальная артерия лопатки'
              },
              {
                id: 'upper-limb-anat-010',
                question_en: 'Structure dividing axillary into 3 parts?',
                question_ru: 'Структура, делящая подмышечную на 3 части?',
                answer_en: 'Pectoralis minor',
                answer_ru: 'Малая грудная мышца'
              },
              {
                id: 'upper-limb-anat-011',
                question_en: 'Axillary artery begins at?',
                question_ru: 'Откуда начинается подмышечная артерия?',
                answer_en: 'Outer border 1st rib',
                answer_ru: 'Наружный край I ребра'
              },
              {
                id: 'upper-limb-anat-012',
                question_en: 'Axillary artery ends at?',
                question_ru: 'Где заканчивается подмышечная артерия?',
                answer_en: 'Lower border teres major',
                answer_ru: 'Нижний край большой круглой мышцы'
              },
              {
                id: 'upper-limb-anat-013',
                question_en: 'Axillary part 1 branch?',
                question_ru: 'Ветвь 1-й части подмышечной?',
                answer_en: 'Superior thoracic',
                answer_ru: 'Верхняя грудная'
              },
              {
                id: 'upper-limb-anat-014',
                question_en: 'Thoracoacromial trunk branches (4)?',
                question_ru: 'Ветви грудоакромиального ствола (4)?',
                answer_en: 'Pectoral, acromial, clavicular, deltoid',
                answer_ru: 'Грудная, акромиальная, ключичная, дельтовидная'
              },
              {
                id: 'upper-limb-anat-015',
                question_en: 'Axillary part 3 branches (3)?',
                question_ru: 'Ветви 3-й части подмышечной (3)?',
                answer_en: 'Subscapular, AHCA, PHCA',
                answer_ru: 'Подлопаточная, ПАОП, ЗАОП'
              },
              {
                id: 'upper-limb-anat-016',
                question_en: 'Brachial artery begins at?',
                question_ru: 'Откуда начинается плечевая артерия?',
                answer_en: 'Lower border teres major',
                answer_ru: 'Нижний край большой круглой мышцы'
              },
              {
                id: 'upper-limb-anat-017',
                question_en: 'Profunda brachii accompanies which nerve?',
                question_ru: 'С каким нервом проходит глубокая артерия плеча?',
                answer_en: 'Radial nerve',
                answer_ru: 'Лучевой нерв'
              },
              {
                id: 'upper-limb-anat-018',
                question_en: 'Brachial artery terminates into?',
                question_ru: 'На что делится плечевая артерия?',
                answer_en: 'Radial + ulnar arteries',
                answer_ru: 'Лучевая + локтевая артерии'
              },
              {
                id: 'upper-limb-anat-019',
                question_en: 'Common interosseous artery branches (3)?',
                question_ru: 'Ветви общей межкостной артерии (3)?',
                answer_en: 'Anterior, posterior, recurrent interosseous',
                answer_ru: 'Передняя, задняя, возвратная межкостная'
              },
              {
                id: 'upper-limb-anat-020',
                question_en: 'Superficial palmar arch mainly from?',
                question_ru: 'Из чего преимущественно образована поверхностная ладонная дуга?',
                answer_en: 'Ulnar artery',
                answer_ru: 'Локтевая артерия'
              },
              {
                id: 'upper-limb-anat-021',
                question_en: 'Deep palmar arch mainly from?',
                question_ru: 'Из чего преимущественно образована глубокая ладонная дуга?',
                answer_en: 'Radial artery',
                answer_ru: 'Лучевая артерия'
              },
              {
                id: 'upper-limb-anat-022',
                question_en: 'Superficial palmar arch gives rise to?',
                question_ru: 'Что даёт поверхностная ладонная дуга?',
                answer_en: '4 common palmar digital arteries',
                answer_ru: '4 общие ладонные пальцевые'
              },
              {
                id: 'upper-limb-anat-023',
                question_en: 'Common palmar digital arteries give rise to?',
                question_ru: 'Что дают общие ладонные пальцевые артерии?',
                answer_en: 'Proper palmar digital arteries',
                answer_ru: 'Собственные пальцевые артерии'
              },
              {
                id: 'upper-limb-anat-024',
                question_en: 'Deep palmar arch gives (named arteries)?',
                question_ru: 'Именные ветви глубокой ладонной дуги?',
                answer_en: 'Princeps pollicis, radialis indicis',
                answer_ru: 'Артерия большого пальца, лучевая указательного'
              },
              {
                id: 'upper-limb-anat-025',
                question_en: 'Radial artery continues at wrist as?',
                question_ru: 'В что продолжается лучевая артерия на запястье?',
                answer_en: 'Deep palmar arch',
                answer_ru: 'Глубокая ладонная дуга'
              },
              {
                id: 'upper-limb-anat-026',
                question_en: 'Ulnar artery branch at elbow level?',
                question_ru: 'Ветвь локтевой артерии на уровне локтя?',
                answer_en: 'Common interosseous',
                answer_ru: 'Общая межкостная'
              },
              {
                id: 'upper-limb-anat-027',
                question_en: 'Axillary part 2 branches (2)?',
                question_ru: 'Ветви 2-й части подмышечной (2)?',
                answer_en: 'Thoracoacromial, lateral thoracic',
                answer_ru: 'Грудоакромиальный ствол, латеральная грудная'
              },
              {
                id: 'upper-limb-anat-028',
                question_en: 'Brachial artery collateral branches (2)?',
                question_ru: 'Коллатеральные ветви плечевой артерии (2)?',
                answer_en: 'Superior + inferior ulnar collateral',
                answer_ru: 'Верхняя + нижняя локтевая коллатеральная'
              },
              {
                id: 'upper-limb-anat-029',
                question_en: 'Ulnar recurrent artery branches?',
                question_ru: 'Ветви возвратной локтевой артерии?',
                answer_en: 'Anterior + posterior',
                answer_ru: 'Передняя + задняя'
              },
              {
                id: 'upper-limb-anat-030',
                question_en: 'Internal thoracic artery CABG use?',
                question_ru: 'Применение внутренней грудной артерии в АКШ?',
                answer_en: 'LIMA graft to LAD',
                answer_ru: 'Кондуит ЛВГА к LAD'
              }
            ]
          },

          // ── Topic: Abdominal Aorta & Iliac Arteries ─────────────────────────────
          {
            slug: 'vascular-anatomy-abdomen-pelvis',
            title_en: 'Abdominal Aorta & Iliac Arteries',
            title_ru: 'Брюшная аорта и подвздошные артерии',
            note: {
              en: {
                sections: [
                  {
                    title: 'Abdominal Aorta — Overview & Branches',
                    body: 'The abdominal aorta begins at the aortic hiatus in the diaphragm (T12) and extends to its bifurcation into the common iliac arteries at L4. Branches are grouped as: (1) paired lateral abdominal wall, (2) paired lateral visceral, (3) three single anterior visceral, and (4) one single posterior terminal branch.',
                    type: 'text'
                  },
                  {
                    title: 'Paired Lateral Branches',
                    body: [
                      'Abdominal wall (5 paired): inferior phrenic artery (1 pair) + 4 lumbar arteries',
                      '  Inferior phrenic artery → gives superior suprarenal artery (to adrenal gland)',
                      'Lateral visceral (3 paired): middle suprarenal artery, renal artery, gonadal artery (testicular or ovarian)',
                      '  Renal artery → gives inferior suprarenal artery (to adrenal gland)',
                      'Median sacral artery: small single posterior branch of the distal abdominal aorta'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Single Anterior Visceral Branches',
                    body: [
                      'Coeliac trunk (T12): supplies liver, stomach, abdominal oesophagus, spleen, superior half of duodenum and pancreas (embryonic foregut)',
                      'Superior mesenteric artery / SMA (L1): supplies lower duodenum through 2/3 of transverse colon + pancreas (embryonic midgut)',
                      'Inferior mesenteric artery / IMA (L3): supplies splenic flexure to upper rectum including descending and sigmoid colon (embryonic hindgut)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Coeliac Trunk Branches',
                    body: [
                      'Left gastric artery → gastric branches + oesophageal branches',
                      'Splenic artery → pancreatic artery, short gastric arteries, left gastroepiploic artery',
                      'Common hepatic artery → proper hepatic artery + gastroduodenal artery + right gastric artery',
                      '  Proper hepatic → left hepatic + right hepatic (right hepatic → cystic artery)',
                      '  Gastroduodenal → superior pancreaticoduodenal artery + right gastroepiploic artery',
                      '  Right gastric artery: runs along the lesser curvature of the stomach'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'SMA Branches',
                    body: [
                      'Inferior pancreaticoduodenal artery',
                      'Jejunal arteries (multiple)',
                      'Ileal arteries (multiple)',
                      'Ileocolic artery → anterior caecal + posterior caecal artery',
                      '  Appendicular artery: branch of the posterior caecal artery',
                      'Right colic artery',
                      'Middle colic artery'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'IMA Branches',
                    body: [
                      'Left colic artery',
                      'Sigmoid arteries (2–3 branches)',
                      'Superior rectal artery: direct continuation of the IMA'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Iliac Arteries',
                    body: [
                      'Common iliac artery divides into: external iliac artery + internal iliac artery',
                      'External iliac artery: inferior epigastric artery + deep circumflex iliac artery (supply lower abdominal wall); continues under inguinal ligament as common femoral artery',
                      'Internal iliac — Posterior division (3 branches): iliolumbar artery, lateral sacral artery, superior gluteal artery',
                      'Internal iliac — Anterior division: umbilical artery → superior vesicular artery; obturator artery; inferior vesicular artery (male) / vaginal artery (female); middle rectal artery; internal pudendal artery; inferior gluteal artery',
                      'Females only (additional branch from anterior division): uterine artery'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Брюшная аорта — обзор и ветви',
                    body: 'Брюшная аорта начинается у аортального отверстия диафрагмы (T12) и продолжается до бифуркации в общие подвздошные артерии на уровне L4. Ветви делятся на: (1) парные боковые ветви брюшной стенки, (2) парные боковые висцеральные, (3) три непарные передние висцеральные, (4) одна непарная задняя терминальная ветвь.',
                    type: 'text'
                  },
                  {
                    title: 'Парные боковые ветви',
                    body: [
                      'Ветви брюшной стенки (5 пар): нижняя диафрагмальная артерия (1 пара) + 4 поясничные артерии',
                      '  Нижняя диафрагмальная → даёт верхнюю надпочечниковую артерию',
                      'Боковые висцеральные (3 пары): средняя надпочечниковая, почечная, гонадная (яичковая или яичниковая) артерии',
                      '  Почечная артерия → даёт нижнюю надпочечниковую артерию',
                      'Средняя крестцовая артерия: небольшая непарная задняя ветвь дистального отдела брюшной аорты'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Непарные передние висцеральные ветви',
                    body: [
                      'Чревный ствол (T12): кровоснабжает печень, желудок, брюшной пищевод, селезёнку, верхнюю половину двенадцатиперстной кишки и поджелудочной железы (эмбриональная передняя кишка)',
                      'Верхняя брыжеечная артерия / ВБА (L1): кровоснабжает нижние отделы двенадцатиперстной кишки, тощую кишку, подвздошную кишку до 2/3 поперечной ободочной кишки + поджелудочную железу (эмбриональная средняя кишка)',
                      'Нижняя брыжеечная артерия / НБА (L3): кровоснабжает от селезёночного изгиба до верхнего отдела прямой кишки, включая нисходящую и сигмовидную кишку (эмбриональная задняя кишка)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Ветви чревного ствола',
                    body: [
                      'Левая желудочная артерия → желудочные ветви + пищеводные ветви',
                      'Селезёночная артерия → поджелудочные ветви, короткие желудочные артерии, левая желудочно-сальниковая артерия',
                      'Общая печёночная артерия → собственная печёночная + желудочно-двенадцатиперстная + правая желудочная артерия',
                      '  Собственная печёночная → левая печёночная + правая печёночная (правая печёночная → пузырная артерия)',
                      '  Желудочно-двенадцатиперстная → верхняя панкреатодуоденальная + правая желудочно-сальниковая',
                      '  Правая желудочная: проходит по малой кривизне желудка'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Ветви ВБА',
                    body: [
                      'Нижняя панкреатодуоденальная артерия',
                      'Тощекишечные артерии (множественные)',
                      'Подвздошно-кишечные артерии (множественные)',
                      'Подвздошно-ободочная артерия → передняя слепокишечная + задняя слепокишечная',
                      '  Аппендикулярная артерия: ветвь задней слепокишечной артерии',
                      'Правая ободочная артерия',
                      'Средняя ободочная артерия'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Ветви НБА',
                    body: [
                      'Левая ободочная артерия',
                      'Сигмовидные артерии (2–3 ветви)',
                      'Верхняя прямокишечная артерия: прямое продолжение НБА'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Подвздошные артерии',
                    body: [
                      'Общая подвздошная артерия делится на: наружную + внутреннюю подвздошные артерии',
                      'Наружная подвздошная: нижняя надчревная артерия + глубокая артерия, огибающая подвздошную кость (кровоснабжают нижнюю брюшную стенку); продолжается под паховой связкой как общая бедренная артерия',
                      'Внутренняя подвздошная — задний ствол (3 ветви): подвздошно-поясничная артерия, латеральная крестцовая артерия, верхняя ягодичная артерия',
                      'Внутренняя подвздошная — передний ствол: пупочная артерия → верхняя мочепузырная; запирательная; нижняя мочепузырная (у мужчин) / влагалищная (у женщин); средняя прямокишечная; внутренняя половая; нижняя ягодичная артерии',
                      'Только у женщин (дополнительная ветвь переднего ствола): маточная артерия'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'abdomen-anat-001',
                question_en: 'Abdominal aorta begins at?',
                question_ru: 'Откуда начинается брюшная аорта?',
                answer_en: 'T12 aortic hiatus',
                answer_ru: 'T12, аортальное отверстие'
              },
              {
                id: 'abdomen-anat-002',
                question_en: 'Abdominal aorta bifurcates at?',
                question_ru: 'На каком уровне бифурцирует брюшная аорта?',
                answer_en: 'L4',
                answer_ru: 'L4'
              },
              {
                id: 'abdomen-anat-003',
                question_en: 'Coeliac trunk vertebral level?',
                question_ru: 'Уровень чревного ствола?',
                answer_en: 'T12',
                answer_ru: 'T12'
              },
              {
                id: 'abdomen-anat-004',
                question_en: 'SMA vertebral level?',
                question_ru: 'Уровень ВБА?',
                answer_en: 'L1',
                answer_ru: 'L1'
              },
              {
                id: 'abdomen-anat-005',
                question_en: 'IMA vertebral level?',
                question_ru: 'Уровень НБА?',
                answer_en: 'L3',
                answer_ru: 'L3'
              },
              {
                id: 'abdomen-anat-006',
                question_en: 'Coeliac trunk branches (3)?',
                question_ru: 'Ветви чревного ствола (3)?',
                answer_en: 'Left gastric, splenic, hepatic',
                answer_ru: 'Левая желудочная, селезёночная, печёночная'
              },
              {
                id: 'abdomen-anat-007',
                question_en: 'Coeliac trunk embryonic territory?',
                question_ru: 'Эмбриональная область чревного ствола?',
                answer_en: 'Foregut',
                answer_ru: 'Передняя кишка'
              },
              {
                id: 'abdomen-anat-008',
                question_en: 'SMA embryonic territory?',
                question_ru: 'Эмбриональная область ВБА?',
                answer_en: 'Midgut',
                answer_ru: 'Средняя кишка'
              },
              {
                id: 'abdomen-anat-009',
                question_en: 'IMA embryonic territory?',
                question_ru: 'Эмбриональная область НБА?',
                answer_en: 'Hindgut',
                answer_ru: 'Задняя кишка'
              },
              {
                id: 'abdomen-anat-010',
                question_en: 'Inferior phrenic artery branch to adrenal?',
                question_ru: 'Ветвь нижней диафрагмальной к надпочечнику?',
                answer_en: 'Superior suprarenal',
                answer_ru: 'Верхняя надпочечниковая'
              },
              {
                id: 'abdomen-anat-011',
                question_en: 'Renal artery branch to adrenal?',
                question_ru: 'Ветвь почечной артерии к надпочечнику?',
                answer_en: 'Inferior suprarenal',
                answer_ru: 'Нижняя надпочечниковая'
              },
              {
                id: 'abdomen-anat-012',
                question_en: 'Common hepatic → which 3 branches?',
                question_ru: 'На что делится общая печёночная (3 ветви)?',
                answer_en: 'Proper hepatic, gastroduodenal, right gastric',
                answer_ru: 'Собственная печёночная, желудочно-двенадцатиперстная, правая желудочная'
              },
              {
                id: 'abdomen-anat-013',
                question_en: 'Right hepatic artery branch?',
                question_ru: 'Ветвь правой печёночной артерии?',
                answer_en: 'Cystic artery',
                answer_ru: 'Пузырная артерия'
              },
              {
                id: 'abdomen-anat-014',
                question_en: 'Gastroduodenal artery branches?',
                question_ru: 'Ветви желудочно-двенадцатиперстной артерии?',
                answer_en: 'Superior pancreaticoduodenal, right gastroepiploic',
                answer_ru: 'Верхняя панкреатодуоденальная, правая желудочно-сальниковая'
              },
              {
                id: 'abdomen-anat-015',
                question_en: 'Appendicular artery arises from?',
                question_ru: 'От чего отходит аппендикулярная артерия?',
                answer_en: 'Posterior caecal artery',
                answer_ru: 'Задняя слепокишечная артерия'
              },
              {
                id: 'abdomen-anat-016',
                question_en: 'Posterior caecal artery arises from?',
                question_ru: 'От чего отходит задняя слепокишечная артерия?',
                answer_en: 'Ileocolic artery',
                answer_ru: 'Подвздошно-ободочная артерия'
              },
              {
                id: 'abdomen-anat-017',
                question_en: 'IMA direct continuation?',
                question_ru: 'Прямое продолжение НБА?',
                answer_en: 'Superior rectal artery',
                answer_ru: 'Верхняя прямокишечная артерия'
              },
              {
                id: 'abdomen-anat-018',
                question_en: 'Median sacral artery — type?',
                question_ru: 'Средняя крестцовая — парная или непарная?',
                answer_en: 'Single posterior branch',
                answer_ru: 'Непарная задняя ветвь'
              },
              {
                id: 'abdomen-anat-019',
                question_en: 'Common iliac divides into?',
                question_ru: 'На что делится общая подвздошная артерия?',
                answer_en: 'External + internal iliac',
                answer_ru: 'Наружная + внутренняя подвздошные'
              },
              {
                id: 'abdomen-anat-020',
                question_en: 'External iliac continues as?',
                question_ru: 'В что продолжается наружная подвздошная?',
                answer_en: 'Common femoral artery',
                answer_ru: 'Общая бедренная артерия'
              },
              {
                id: 'abdomen-anat-021',
                question_en: 'External iliac branches (2)?',
                question_ru: 'Ветви наружной подвздошной (2)?',
                answer_en: 'Inferior epigastric, deep circumflex iliac',
                answer_ru: 'Нижняя надчревная, глубокая огибающая подвздошную кость'
              },
              {
                id: 'abdomen-anat-022',
                question_en: 'Internal iliac posterior division branches (3)?',
                question_ru: 'Ветви заднего ствола внутренней подвздошной (3)?',
                answer_en: 'Iliolumbar, lateral sacral, superior gluteal',
                answer_ru: 'Подвздошно-поясничная, латеральная крестцовая, верхняя ягодичная'
              },
              {
                id: 'abdomen-anat-023',
                question_en: 'Superior gluteal arises from?',
                question_ru: 'Откуда отходит верхняя ягодичная артерия?',
                answer_en: 'Posterior division',
                answer_ru: 'Задний ствол'
              },
              {
                id: 'abdomen-anat-024',
                question_en: 'Female-only internal iliac branch?',
                question_ru: 'Ветвь внутренней подвздошной только у женщин?',
                answer_en: 'Uterine artery',
                answer_ru: 'Маточная артерия'
              },
              {
                id: 'abdomen-anat-025',
                question_en: 'Inferior vesicular artery in male — equivalent in female?',
                question_ru: 'Мужской эквивалент нижней мочепузырной у женщин?',
                answer_en: 'Vaginal artery',
                answer_ru: 'Влагалищная артерия'
              },
              {
                id: 'abdomen-anat-026',
                question_en: 'Splenic artery branches (3 named)?',
                question_ru: 'Ветви селезёночной артерии (3 именные)?',
                answer_en: 'Short gastric, left gastroepiploic, pancreatic',
                answer_ru: 'Короткие желудочные, левая желудочно-сальниковая, поджелудочные'
              },
              {
                id: 'abdomen-anat-027',
                question_en: 'Left gastric artery branches?',
                question_ru: 'Ветви левой желудочной артерии?',
                answer_en: 'Gastric + oesophageal',
                answer_ru: 'Желудочные + пищеводные'
              },
              {
                id: 'abdomen-anat-028',
                question_en: 'Paired lateral visceral branches (3)?',
                question_ru: 'Парные боковые висцеральные ветви (3)?',
                answer_en: 'Middle suprarenal, renal, gonadal',
                answer_ru: 'Средняя надпочечниковая, почечная, гонадная'
              },
              {
                id: 'abdomen-anat-029',
                question_en: 'Number of lumbar arteries?',
                question_ru: 'Количество поясничных артерий?',
                answer_en: '4 pairs',
                answer_ru: '4 пары'
              },
              {
                id: 'abdomen-anat-030',
                question_en: 'Umbilical artery gives rise to?',
                question_ru: 'Что даёт пупочная артерия?',
                answer_en: 'Superior vesicular artery',
                answer_ru: 'Верхняя мочепузырная артерия'
              }
            ]
          },

          // ── Topic: Vascular Anatomy of the Lower Limb ───────────────────────────
          {
            slug: 'vascular-anatomy-lower-limb',
            title_en: 'Vascular Anatomy of the Lower Limb',
            title_ru: 'Сосудистая анатомия нижней конечности',
            note: {
              en: {
                sections: [
                  {
                    title: 'Common Femoral Artery (CFA)',
                    body: [
                      'Continuation of the external iliac artery from the inguinal ligament',
                      'Branches before giving off profunda femoris:',
                      '  Superficial epigastric artery',
                      '  Superficial external pudendal artery',
                      '  Deep external pudendal artery',
                      '  Superficial circumflex iliac artery',
                      'After giving off these branches, the CFA divides into the profunda femoris artery and the superficial femoral artery (SFA)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Profunda Femoris Artery (Deep Femoral)',
                    body: [
                      'Arises from the common femoral artery (lateral and posterior)',
                      'Lateral circumflex femoral artery: supplies anterior thigh and hip',
                      'Medial circumflex femoral artery: supplies posterior thigh; critical supply to femoral head',
                      '4 perforating branches: pierce adductor magnus to supply posterior thigh compartment and provide collateral pathways',
                      'The profunda is the dominant collateral pathway in SFA occlusion'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Superficial Femoral Artery (SFA) → Popliteal',
                    body: [
                      'Runs in the adductor (Hunter\'s) canal with the femoral vein and saphenous nerve',
                      'Gives off the descending genicular artery before entering the adductor hiatus',
                      'At the adductor hiatus (hiatus magnus), becomes the popliteal artery',
                      'The most common site of atherosclerotic occlusion in the lower limb is the distal SFA at the adductor hiatus'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Popliteal Artery',
                    body: [
                      'Runs through the popliteal fossa (deepest structure)',
                      'Gives off: geniculate branches (superior and inferior medial, superior and inferior lateral, middle genicular) to the knee joint',
                      'Ends at the lower border of the popliteus muscle by dividing into:',
                      '  Anterior tibial artery',
                      '  Tibioperoneal (tibio-fibular) trunk'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Anterior Tibial → Dorsalis Pedis',
                    body: [
                      'Passes through the interosseous membrane to the anterior compartment of the leg',
                      'When it crosses the anterior aspect of the ankle joint (inferior extensor retinaculum), it becomes the dorsalis pedis artery',
                      'Dorsalis pedis: runs between extensor hallucis longus and extensor digitorum longus tendons',
                      'Gives rise to the deep plantar branch which passes between 1st and 2nd metatarsal bases to form the plantar arch'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Tibioperoneal Trunk → Posterior Tibial & Peroneal',
                    body: [
                      'Tibioperoneal trunk: short segment that divides into posterior tibial artery + peroneal (fibular) artery',
                      'Posterior tibial artery: passes posterior to the medial malleolus (palpable pulse site)',
                      '  Gives medial plantar artery + lateral plantar artery',
                      '  Lateral plantar artery anastomoses with the deep plantar branch of the dorsalis pedis to form the plantar arch',
                      'Peroneal (fibular) artery: runs in the posterior compartment along the fibula; terminates as perforating and communicating branches at the ankle'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Plantar Arch',
                    body: [
                      'Formed by: lateral plantar artery + deep plantar branch of dorsalis pedis',
                      'Lies deep in the foot (beneath flexor tendons)',
                      'Supplies the toes via plantar metatarsal arteries → plantar digital arteries',
                      'Analogous to the deep palmar arch in the hand'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Общая бедренная артерия (ОБА)',
                    body: [
                      'Продолжение наружной подвздошной артерии от паховой связки',
                      'Ветви до отхождения глубокой артерии бедра:',
                      '  Поверхностная надчревная артерия',
                      '  Поверхностная наружная половая артерия',
                      '  Глубокая наружная половая артерия',
                      '  Поверхностная артерия, огибающая подвздошную кость',
                      'После этих ветвей ОБА делится на глубокую артерию бедра (ГАБ) и поверхностную бедренную артерию (ПБА)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Глубокая артерия бедра (ГАБ)',
                    body: [
                      'Отходит от общей бедренной артерии (латерально и кзади)',
                      'Латеральная артерия, огибающая бедро: кровоснабжает переднюю поверхность бедра и тазобедренный сустав',
                      'Медиальная артерия, огибающая бедро: кровоснабжает заднюю поверхность бедра; критическое кровоснабжение головки бедренной кости',
                      '4 прободающие ветви: прободают большую приводящую мышцу, кровоснабжают заднее ложе бедра и формируют коллатеральные пути',
                      'ГАБ — основной коллатеральный путь при окклюзии ПБА'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Поверхностная бедренная артерия (ПБА) → Подколенная',
                    body: [
                      'Проходит в приводящем (гунтеровом) канале с бедренной веной и подкожным нервом',
                      'Даёт нисходящую артерию колена перед вхождением в сухожильное отверстие',
                      'В сухожильном отверстии (hiatus magnus) становится подколенной артерией',
                      'Наиболее частое место атеросклеротической окклюзии — дистальная ПБА у сухожильного отверстия'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Подколенная артерия',
                    body: [
                      'Проходит через подколенную ямку (самая глубокая структура)',
                      'Даёт: суставные ветви (верхние и нижние медиальные, верхние и нижние латеральные, средняя суставная) к коленному суставу',
                      'Заканчивается у нижнего края подколенной мышцы делением на:',
                      '  Переднюю большеберцовую артерию',
                      '  Малоберцово-большеберцовый ствол (МББС)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Передняя большеберцовая → Тыльная артерия стопы',
                    body: [
                      'Проходит через межкостную перепонку в переднее ложе голени',
                      'Пересекая переднюю поверхность голеностопного сустава, становится тыльной артерией стопы (ТАС)',
                      'ТАС проходит между сухожилиями длинного разгибателя большого пальца и длинного разгибателя пальцев',
                      'Даёт глубокую подошвенную ветвь, которая проходит между основаниями 1-й и 2-й плюсневых костей, формируя подошвенную дугу'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Малоберцово-большеберцовый ствол → Задняя большеберцовая и Малоберцовая',
                    body: [
                      'МББС: короткий сегмент, делящийся на заднюю большеберцовую + малоберцовую (фибулярную) артерии',
                      'Задняя большеберцовая артерия: проходит позади медиальной лодыжки (место пальпации пульса)',
                      '  Даёт медиальную подошвенную + латеральную подошвенную артерии',
                      '  Латеральная подошвенная анастомозирует с глубокой подошвенной ветвью ТАС, образуя подошвенную дугу',
                      'Малоберцовая артерия: проходит в заднем ложе вдоль малоберцовой кости; заканчивается прободающими и соединительными ветвями у лодыжки'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Подошвенная дуга',
                    body: [
                      'Образована: латеральной подошвенной артерией + глубокой подошвенной ветвью ТАС',
                      'Расположена глубоко в стопе (под сухожилиями сгибателей)',
                      'Кровоснабжает пальцы через подошвенные плюсневые → подошвенные пальцевые артерии',
                      'Аналог глубокой ладонной дуги кисти'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'lower-limb-anat-001',
                question_en: 'Common femoral artery begins at?',
                question_ru: 'Откуда начинается общая бедренная артерия?',
                answer_en: 'Inguinal ligament',
                answer_ru: 'Паховая связка'
              },
              {
                id: 'lower-limb-anat-002',
                question_en: 'Superficial branches of CFA (4)?',
                question_ru: 'Поверхностные ветви ОБА (4)?',
                answer_en: 'Epigastric, pudendal (x2), circumflex iliac',
                answer_ru: 'Надчревная, половые (×2), огибающая подвздошную'
              },
              {
                id: 'lower-limb-anat-003',
                question_en: 'CFA divides into?',
                question_ru: 'На что делится ОБА?',
                answer_en: 'SFA + profunda femoris',
                answer_ru: 'ПБА + ГАБ'
              },
              {
                id: 'lower-limb-anat-004',
                question_en: 'Profunda femoris branches (named, 2)?',
                question_ru: 'Именные ветви ГАБ (2)?',
                answer_en: 'Lateral + medial circumflex femoral',
                answer_ru: 'Латеральная + медиальная огибающие бедро'
              },
              {
                id: 'lower-limb-anat-005',
                question_en: 'Profunda femoris perforating branches?',
                question_ru: 'Прободающие ветви ГАБ?',
                answer_en: '4 perforators',
                answer_ru: '4 прободающие'
              },
              {
                id: 'lower-limb-anat-006',
                question_en: 'SFA runs within?',
                question_ru: 'В каком канале проходит ПБА?',
                answer_en: 'Adductor canal',
                answer_ru: 'Приводящий канал'
              },
              {
                id: 'lower-limb-anat-007',
                question_en: 'SFA last branch before hiatus magnus?',
                question_ru: 'Последняя ветвь ПБА перед hiatus magnus?',
                answer_en: 'Descending genicular artery',
                answer_ru: 'Нисходящая артерия колена'
              },
              {
                id: 'lower-limb-anat-008',
                question_en: 'SFA becomes popliteal at?',
                question_ru: 'Где ПБА переходит в подколенную?',
                answer_en: 'Adductor hiatus (hiatus magnus)',
                answer_ru: 'Сухожильное отверстие'
              },
              {
                id: 'lower-limb-anat-009',
                question_en: 'Popliteal artery ends at?',
                question_ru: 'Где заканчивается подколенная артерия?',
                answer_en: 'Lower border popliteus',
                answer_ru: 'Нижний край подколенной мышцы'
              },
              {
                id: 'lower-limb-anat-010',
                question_en: 'Popliteal terminates into?',
                question_ru: 'На что делится подколенная артерия?',
                answer_en: 'Anterior tibial + tibioperoneal trunk',
                answer_ru: 'Передняя большеберцовая + МББС'
              },
              {
                id: 'lower-limb-anat-011',
                question_en: 'Tibioperoneal trunk divides into?',
                question_ru: 'На что делится МББС?',
                answer_en: 'Posterior tibial + peroneal',
                answer_ru: 'Задняя большеберцовая + малоберцовая'
              },
              {
                id: 'lower-limb-anat-012',
                question_en: 'Anterior tibial becomes at ankle?',
                question_ru: 'В что переходит передняя большеберцовая у лодыжки?',
                answer_en: 'Dorsalis pedis artery',
                answer_ru: 'Тыльная артерия стопы'
              },
              {
                id: 'lower-limb-anat-013',
                question_en: 'Posterior tibial passes behind?',
                question_ru: 'Позади чего проходит задняя большеберцовая?',
                answer_en: 'Medial malleolus',
                answer_ru: 'Медиальная лодыжка'
              },
              {
                id: 'lower-limb-anat-014',
                question_en: 'Posterior tibial terminal branches?',
                question_ru: 'Конечные ветви задней большеберцовой?',
                answer_en: 'Medial + lateral plantar',
                answer_ru: 'Медиальная + латеральная подошвенная'
              },
              {
                id: 'lower-limb-anat-015',
                question_en: 'Plantar arch formed by?',
                question_ru: 'Из чего образована подошвенная дуга?',
                answer_en: 'Lateral plantar + deep plantar branch',
                answer_ru: 'Латеральная подошвенная + глубокая подошвенная ветвь'
              },
              {
                id: 'lower-limb-anat-016',
                question_en: 'Deep plantar branch arises from?',
                question_ru: 'Откуда отходит глубокая подошвенная ветвь?',
                answer_en: 'Dorsalis pedis artery',
                answer_ru: 'Тыльная артерия стопы'
              },
              {
                id: 'lower-limb-anat-017',
                question_en: 'Medial circumflex femoral supplies?',
                question_ru: 'Что кровоснабжает медиальная артерия, огибающая бедро?',
                answer_en: 'Femoral head (posterior)',
                answer_ru: 'Головка бедренной кости'
              },
              {
                id: 'lower-limb-anat-018',
                question_en: 'Most common SFA occlusion site?',
                question_ru: 'Наиболее частое место окклюзии ПБА?',
                answer_en: 'Adductor hiatus',
                answer_ru: 'Сухожильное отверстие'
              },
              {
                id: 'lower-limb-anat-019',
                question_en: 'Main collateral in SFA occlusion?',
                question_ru: 'Основной коллатеральный путь при окклюзии ПБА?',
                answer_en: 'Profunda femoris',
                answer_ru: 'Глубокая артерия бедра'
              },
              {
                id: 'lower-limb-anat-020',
                question_en: 'Dorsalis pedis lies between which tendons?',
                question_ru: 'Между какими сухожилиями проходит тыльная артерия стопы?',
                answer_en: 'EHL + EDL tendons',
                answer_ru: 'Сухожилия длинного разгибателя большого пальца и пальцев'
              },
              {
                id: 'lower-limb-anat-021',
                question_en: 'Plantar arch analogy in the hand?',
                question_ru: 'Аналог подошвенной дуги в кисти?',
                answer_en: 'Deep palmar arch',
                answer_ru: 'Глубокая ладонная дуга'
              },
              {
                id: 'lower-limb-anat-022',
                question_en: 'Peroneal artery runs along?',
                question_ru: 'Вдоль чего проходит малоберцовая артерия?',
                answer_en: 'Fibula (posterior compartment)',
                answer_ru: 'Малоберцовая кость (заднее ложе)'
              },
              {
                id: 'lower-limb-anat-023',
                question_en: 'CFA pulse palpation site?',
                question_ru: 'Место пальпации пульса ОБА?',
                answer_en: 'Below inguinal ligament',
                answer_ru: 'Ниже паховой связки'
              },
              {
                id: 'lower-limb-anat-024',
                question_en: 'Popliteal artery in fossa — relation?',
                question_ru: 'Отношение подколенной артерии к другим структурам в ямке?',
                answer_en: 'Deepest structure in fossa',
                answer_ru: 'Самая глубокая структура'
              },
              {
                id: 'lower-limb-anat-025',
                question_en: 'SFA canal companions?',
                question_ru: 'Структуры рядом с ПБА в канале?',
                answer_en: 'Femoral vein, saphenous nerve',
                answer_ru: 'Бедренная вена, подкожный нерв'
              },
              {
                id: 'lower-limb-anat-026',
                question_en: 'Deep external pudendal origin?',
                question_ru: 'Откуда отходит глубокая наружная половая артерия?',
                answer_en: 'Common femoral artery',
                answer_ru: 'Общая бедренная артерия'
              },
              {
                id: 'lower-limb-anat-027',
                question_en: 'Lateral circumflex femoral supplies?',
                question_ru: 'Что кровоснабжает латеральная артерия, огибающая бедро?',
                answer_en: 'Anterior thigh, hip',
                answer_ru: 'Передняя поверхность бедра, тазобедренный сустав'
              },
              {
                id: 'lower-limb-anat-028',
                question_en: 'Profunda femoris — origin from CFA?',
                question_ru: 'ГАБ отходит от ОБА — с какой стороны?',
                answer_en: 'Lateral and posterior',
                answer_ru: 'Латерально и кзади'
              },
              {
                id: 'lower-limb-anat-029',
                question_en: 'Posterior tibial pulse location?',
                question_ru: 'Место пульса задней большеберцовой?',
                answer_en: 'Behind medial malleolus',
                answer_ru: 'Позади медиальной лодыжки'
              },
              {
                id: 'lower-limb-anat-030',
                question_en: 'Geniculate branches arise from?',
                question_ru: 'От чего отходят суставные ветви?',
                answer_en: 'Popliteal artery',
                answer_ru: 'Подколенная артерия'
              }
            ]
          }


        ]
      },

      // ── PERIPHERAL ARTERIAL DISEASE & LOWER LIMB ────────────────────────────
      {
        slug: 'peripheral-arterial-disease',
        title_en: 'Peripheral Arterial Disease & Lower Limb',
        title_ru: 'Периферический атеросклероз и заболевания нижних конечностей',
        topics: [

          // ── Topic: Acute Limb Ischaemia ──────────────────────────────────────
          {
            slug: 'acute-limb-ischaemia',
            title_en: 'Acute Limb Ischaemia',
            title_ru: 'Острая ишемия конечности',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Acute limb ischaemia (ALI) is a sudden reduction in limb perfusion that threatens viability, defined by onset within 14 days. It is a vascular emergency. Aetiology: thrombosis in situ (~60%), embolism (~30%), trauma, iatrogenic injury, or dissection. Without prompt revascularisation, the risk of major amputation and death is high.',
                    type: 'text'
                  },
                  {
                    title: 'The 6 Ps — Clinical Presentation',
                    body: 'Pain (sudden, severe), Pallor, Pulselessness, Paraesthesia (pins and needles → numbness), Paralysis (inability to move foot), Poikilothermia (cold limb).\n\nParaesthesia and paralysis indicate ischaemia of nerve and muscle — the limb is threatened or irreversibly damaged. Paralysis is the most sinister sign and mandates emergency intervention.',
                    type: 'text'
                  },
                  {
                    title: 'Rutherford Classification',
                    body: [
                      'Class I — Viable: no sensory or motor loss; Doppler signals audible (arterial and venous); no immediate threat',
                      'Class IIa — Marginally threatened: minimal sensory loss (toes only); no motor deficit; arterial Doppler often absent',
                      'Class IIb — Immediately threatened: sensory loss beyond toes + mild motor deficit; urgent revascularisation required',
                      'Class III — Irreversible: profound paralysis and anaesthesia; major tissue loss inevitable; primary amputation'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Embolism vs Thrombosis',
                    body: 'Embolism: sudden dramatic onset; contralateral pulses present (no background PAD); cardiac source — most commonly atrial fibrillation (AF) or recent myocardial infarction (MI); treatment = Fogarty balloon embolectomy.\n\nThrombosis: gradual or stuttering onset; absent or reduced contralateral pulses (background PAD); atherosclerotic plaque rupture or hypercoagulable state; treatment = catheter-directed thrombolysis (CDT) or surgical bypass. Always obtain a 12-lead ECG to exclude AF.',
                    type: 'text'
                  },
                  {
                    title: 'Management',
                    body: [
                      'All classes immediately: IV heparin 5,000 IU bolus → infusion; analgesia; IV access; 12-lead ECG; urgent CT angiography (CTA)',
                      'Rutherford IIa/IIb: CDT (alteplase or urokinase via intra-arterial catheter) OR surgical embolectomy/bypass',
                      'Rutherford IIb urgent or failed thrombolysis: surgical revascularisation — Fogarty embolectomy or bypass',
                      'Fogarty embolectomy: balloon catheter via common femoral artery incision under local anaesthesia',
                      'Class III: primary amputation — revascularisation risks fatal reperfusion injury'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Reperfusion Injury & Fasciotomy',
                    body: 'Reperfusion after prolonged ischaemia releases myoglobin and potassium into the circulation, causing hyperkalaemia, myoglobinuria, acute kidney injury (AKI), and cardiac arrhythmia. Monitor K⁺, creatinine, and urine output post-revascularisation.\n\nFasciotomy is indicated when compartment syndrome develops: compartment pressure >30 mmHg (or within 30 mmHg of diastolic BP), or after revascularisation following >6 hours of ischaemia. Perform a 4-compartment fasciotomy of the lower leg (anterior, lateral, superficial posterior, deep posterior).',
                    type: 'text'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Give heparin immediately on clinical diagnosis — do not delay for imaging if limb is threatened',
                      'Fogarty catheter sizing: 4F for femoral artery; 3F for popliteal and tibial vessels',
                      'CDT contraindications: recent stroke (<3 months), active haemorrhage, recent major surgery (<10 days)',
                      'After embolic ALI: lifelong anticoagulation (warfarin or DOAC) and treatment of the source (e.g. AF cardioversion / rate control)',
                      '4-compartment lower leg fasciotomy: anterior, lateral, superficial posterior, deep posterior compartments',
                      'Severity mnemonic: paralysis > paraesthesia > pain — escalating urgency of ischaemic nerve involvement'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Острая ишемия конечности (ОИК) — внезапное уменьшение перфузии конечности, угрожающее её жизнеспособности, с развитием в течение 14 дней. Это сосудистая катастрофа. Этиология: тромбоз in situ (~60%), эмболия (~30%), травма, ятрогенное повреждение, расслоение. Без своевременной реваскуляризации риск ампутации и летального исхода высок.',
                    type: 'text'
                  },
                  {
                    title: '6 П — Клиническая картина',
                    body: 'Боль (Pain — внезапная, интенсивная), Бледность (Pallor), Отсутствие пульса (Pulselessness), Парестезия (Paraesthesia — покалывание → онемение), Паралич (Paralysis — невозможность шевелить стопой), Пойкилотермия (Poikilothermia — холодная конечность).\n\nПарестезия и паралич свидетельствуют об ишемии нерва и мышц — конечность под угрозой или необратимо повреждена. Паралич — наиболее грозный признак, требующий экстренного вмешательства.',
                    type: 'text'
                  },
                  {
                    title: 'Классификация по Резерфорду',
                    body: [
                      'Класс I — Жизнеспособная: нет сенсорных и двигательных нарушений; допплеровские сигналы слышимы (артериальные и венозные); непосредственной угрозы нет',
                      'Класс IIa — Умеренная угроза: минимальная потеря чувствительности (только пальцы); двигательных нарушений нет; артериальный сигнал по допплеру часто отсутствует',
                      'Класс IIb — Непосредственная угроза: нарушение чувствительности выше пальцев + лёгкий двигательный дефицит; требуется срочная реваскуляризация',
                      'Класс III — Необратимая: глубокий паралич и анестезия; обширная потеря тканей неизбежна; первичная ампутация'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Эмболия vs тромбоз',
                    body: 'Эмболия: внезапное начало; контралатеральный пульс сохранён (нет фонового облитерирующего атеросклероза, ОА); сердечный источник — чаще всего фибрилляция предсердий (ФП) или перенесённый инфаркт миокарда (ИМ); лечение = эмболэктомия баллонным катетером Фогарти.\n\nТромбоз: постепенное или ступенчатое начало; контралатеральный пульс ослаблен или отсутствует (фоновый ОА); разрыв атеросклеротической бляшки или гиперкоагуляция; лечение = катетер-направленный тромболизис или шунтирование. Обязательно снять ЭКГ в 12 отведениях для исключения ФП.',
                    type: 'text'
                  },
                  {
                    title: 'Лечение',
                    body: [
                      'Немедленно (все классы): гепарин в/в 5000 МЕ болюсно → инфузия; обезболивание; в/в доступ; ЭКГ в 12 отведениях; экстренная КТ-ангиография (КТА)',
                      'Резерфорд IIa/IIb: катетер-направленный тромболизис (алтеплаза или урокиназа через внутриартериальный катетер) ИЛИ хирургическая эмболэктомия/шунтирование',
                      'Резерфорд IIb срочно или неэффективный тромболизис: хирургическая реваскуляризация — эмболэктомия по Фогарти или шунтирование',
                      'Эмболэктомия по Фогарти: баллонный катетер через разрез бедренной артерии под местной анестезией',
                      'Класс III: первичная ампутация — реваскуляризация несёт риск фатального реперфузионного синдрома'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Реперфузионное повреждение и фасциотомия',
                    body: 'Реперфузия после длительной ишемии высвобождает миоглобин и калий в кровоток, вызывая гиперкалиемию, миоглобинурию, острое повреждение почек (ОПП) и сердечные аритмии. После реваскуляризации контролировать К⁺, креатинин и диурез.\n\nФасциотомия показана при развитии компартмент-синдрома: давление в футляре >30 мм рт. ст. (или в пределах 30 мм рт. ст. от диастолического АД), либо после реваскуляризации при ишемии более 6 часов. Выполняется 4-компартментная фасциотомия голени (переднее, латеральное, поверхностное заднее, глубокое заднее ложа).',
                    type: 'text'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'Гепарин вводить сразу после клинического диагноза — не ждать визуализации при угрозе конечности',
                      'Размеры катетера Фогарти: 4F для бедренной артерии; 3F для подколенной и большеберцовых артерий',
                      'Противопоказания к тромболизису: перенесённый инсульт (<3 месяцев), активное кровотечение, недавняя большая операция (<10 дней)',
                      'После эмболической ОИК: пожизненная антикоагуляция (варфарин или пероральные антикоагулянты, ПОАК) и лечение источника (например, контроль ФП)',
                      '4-компартментная фасциотомия голени: переднее, латеральное, поверхностное заднее, глубокое заднее ложа',
                      'Мнемоника тяжести: паралич > парестезия > боль — нарастающая срочность ишемического поражения нерва'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'acute-limb-ischaemia-001',
                question_en: 'ALI defined by onset within?',
                question_ru: 'ОИК определяется появлением в течение?',
                answer_en: '14 days',
                answer_ru: '14 дней'
              },
              {
                id: 'acute-limb-ischaemia-002',
                question_en: 'Most common cause of ALI?',
                question_ru: 'Наиболее частая причина ОИК?',
                answer_en: 'Thrombosis in situ',
                answer_ru: 'Тромбоз in situ'
              },
              {
                id: 'acute-limb-ischaemia-003',
                question_en: 'Most common embolic source in ALI?',
                question_ru: 'Наиболее частый источник эмболии при ОИК?',
                answer_en: 'Atrial fibrillation',
                answer_ru: 'Фибрилляция предсердий'
              },
              {
                id: 'acute-limb-ischaemia-004',
                question_en: 'Most sinister Ps in ALI?',
                question_ru: 'Наиболее грозные симптомы «П» при ОИК?',
                answer_en: 'Paralysis, paraesthesia',
                answer_ru: 'Паралич, парестезия'
              },
              {
                id: 'acute-limb-ischaemia-005',
                question_en: 'Rutherford class III treatment?',
                question_ru: 'Лечение при Резерфорде III?',
                answer_en: 'Primary amputation',
                answer_ru: 'Первичная ампутация'
              },
              {
                id: 'acute-limb-ischaemia-006',
                question_en: 'Rutherford IIb treatment?',
                question_ru: 'Лечение при Резерфорде IIb?',
                answer_en: 'Urgent revascularisation',
                answer_ru: 'Срочная реваскуляризация'
              },
              {
                id: 'acute-limb-ischaemia-007',
                question_en: 'First drug given in ALI?',
                question_ru: 'Первый препарат при ОИК?',
                answer_en: 'IV heparin',
                answer_ru: 'Гепарин в/в'
              },
              {
                id: 'acute-limb-ischaemia-008',
                question_en: 'Heparin bolus dose in ALI?',
                question_ru: 'Болюсная доза гепарина при ОИК?',
                answer_en: '5,000 IU',
                answer_ru: '5000 МЕ'
              },
              {
                id: 'acute-limb-ischaemia-009',
                question_en: 'Contralateral pulses in embolism?',
                question_ru: 'Контралатеральный пульс при эмболии?',
                answer_en: 'Present',
                answer_ru: 'Сохранён'
              },
              {
                id: 'acute-limb-ischaemia-010',
                question_en: 'Device used for embolectomy?',
                question_ru: 'Устройство для эмболэктомии?',
                answer_en: 'Fogarty catheter',
                answer_ru: 'Катетер Фогарти'
              },
              {
                id: 'acute-limb-ischaemia-011',
                question_en: 'CDT thrombolytic agent?',
                question_ru: 'Тромболитик при катетер-направленном тромболизисе?',
                answer_en: 'Alteplase',
                answer_ru: 'Алтеплаза'
              },
              {
                id: 'acute-limb-ischaemia-012',
                question_en: 'Dangerous electrolyte in reperfusion?',
                question_ru: 'Опасный электролит при реперфузии?',
                answer_en: 'Hyperkalaemia',
                answer_ru: 'Гиперкалиемия'
              },
              {
                id: 'acute-limb-ischaemia-013',
                question_en: 'Myoglobinuria organ target?',
                question_ru: 'Орган-мишень миоглобинурии?',
                answer_en: 'Acute kidney injury',
                answer_ru: 'Острое повреждение почек'
              },
              {
                id: 'acute-limb-ischaemia-014',
                question_en: 'Fasciotomy threshold pressure?',
                question_ru: 'Пороговое давление для фасциотомии?',
                answer_en: '>30 mmHg',
                answer_ru: '>30 мм рт. ст.'
              },
              {
                id: 'acute-limb-ischaemia-015',
                question_en: 'Lower leg fasciotomy compartments?',
                question_ru: 'Компартментов при фасциотомии голени?',
                answer_en: '4',
                answer_ru: '4'
              },
              {
                id: 'acute-limb-ischaemia-016',
                question_en: 'CDT stroke contraindication window?',
                question_ru: 'Инсульт — противопоказание к тромболизису при сроке?',
                answer_en: '<3 months',
                answer_ru: '<3 месяцев'
              },
              {
                id: 'acute-limb-ischaemia-017',
                question_en: 'Rutherford I: Doppler signals?',
                question_ru: 'Резерфорд I: допплеровские сигналы?',
                answer_en: 'Audible',
                answer_ru: 'Слышимые'
              },
              {
                id: 'acute-limb-ischaemia-018',
                question_en: 'ALI imaging modality of choice?',
                question_ru: 'Метод визуализации выбора при ОИК?',
                answer_en: 'CT angiography',
                answer_ru: 'КТ-ангиография'
              },
              {
                id: 'acute-limb-ischaemia-019',
                question_en: 'Long-term Rx after embolic ALI?',
                question_ru: 'Длительное лечение после эмболической ОИК?',
                answer_en: 'Anticoagulation',
                answer_ru: 'Антикоагуляция'
              },
              {
                id: 'acute-limb-ischaemia-020',
                question_en: 'Fogarty embolectomy incision site?',
                question_ru: 'Место разреза при эмболэктомии по Фогарти?',
                answer_en: 'Common femoral artery',
                answer_ru: 'Общая бедренная артерия'
              }
            ]
          },

          // ── Topic: Intermittent Claudication ─────────────────────────────────
          {
            slug: 'intermittent-claudication',
            title_en: 'Intermittent Claudication',
            title_ru: 'Перемежающаяся хромота',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Intermittent claudication (IC) is reproducible ischaemic muscle pain brought on by exercise and relieved by rest, caused by inadequate perfusion of exercising muscle in the setting of peripheral arterial disease (PAD). It is the classic symptomatic presentation of stable PAD. Both the Fontaine and Rutherford classifications define IC within the wider spectrum of PAD severity.',
                    type: 'text'
                  },
                  {
                    title: 'Pathophysiology & Localisation',
                    body: 'Atherosclerotic stenosis or occlusion reduces resting blood flow. Flow is adequate at rest but insufficient during exercise, causing lactate accumulation and ischaemic muscle cramp.\n\nSite of claudication predicts the level of disease: calf → SFA or popliteal artery; thigh → iliac or common femoral artery; buttock + erectile dysfunction → aorto-iliac occlusion (Leriche syndrome).',
                    type: 'text'
                  },
                  {
                    title: 'Clinical Assessment — ABPI',
                    body: 'The ankle-brachial pressure index (ABPI) is the ratio of ankle to brachial systolic pressure: normal ≥0.9; IC: 0.5–0.9; critical limb ischaemia (CLI): <0.5; non-compressible (calcified) vessels: >1.3 → use toe-brachial index (TBI) instead.\n\nClaude distance: >200 m = Fontaine IIa (mild); ≤200 m = Fontaine IIb (disabling). History should also document rest pain (Fontaine III) and tissue loss (Fontaine IV).',
                    type: 'text'
                  },
                  {
                    title: 'Fontaine Classification',
                    body: [
                      'Stage I — Asymptomatic: PAD on investigation only',
                      'Stage IIa — Mild claudication: walking distance >200 m',
                      'Stage IIb — Disabling claudication: walking distance ≤200 m',
                      'Stage III — Rest pain: ischaemic pain at rest, worse at night, relieved by dependency',
                      'Stage IV — Tissue loss: ischaemic ulceration or gangrene'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Medical Management (Best Medical Therapy)',
                    body: [
                      'Smoking cessation — single most effective intervention; reduces progression and cardiovascular mortality',
                      'Antiplatelet: aspirin 75–100 mg/day OR clopidogrel 75 mg/day (CAPRIE trial — clopidogrel marginally superior in PAD; AHA/ACC 2016)',
                      'Statin: high-intensity — atorvastatin 40–80 mg/day regardless of baseline LDL; AHA/ACC 2013',
                      'Supervised exercise training (SET): ≥30–45 min, 3×/week for ≥12 weeks; improves maximum walking distance by 100–150%; first-line non-invasive treatment (NICE TA223)',
                      'Cilostazol 100 mg BD (phosphodiesterase-3 inhibitor) — improves walking distance; contraindicated in heart failure (NICE TA223)',
                      'ACE inhibitor if hypertensive; tight glycaemic control (HbA1c <53 mmol/mol) in diabetes'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Indications for Intervention',
                    body: 'Disabling claudication unresponsive to ≥3 months of best medical therapy plus SET. Imaging first: duplex ultrasound (first-line); CT angiography (CTA) for complex anatomy planning.\n\nTASC II A/B lesions (short segment, single): endovascular — percutaneous transluminal angioplasty (PTA) ± stent. TASC II C/D lesions (long, complex, multi-level): surgical bypass preferred. Aorto-iliac TASC D: aortobifemoral bypass (gold standard).',
                    type: 'text'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'IC carries low annual limb loss risk (~1–2%/year) but ~30% 5-year mortality — generalised atherosclerosis driving MI and stroke',
                      'Smoking cessation outperforms any drug or operation — cessation doubles walking distance independent of intervention',
                      'ABPI >1.3: non-compressible calcified vessels — measure TBI (normal >0.7) instead',
                      'Duplex USS is the first imaging step before any intervention; CTA reserved for surgical planning',
                      'TASC II A/B → endovascular; TASC II C/D → surgical bypass',
                      'After aortobifemoral bypass: lifelong antiplatelet therapy; monitor graft with annual duplex surveillance'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Перемежающаяся хромота (ПХ) — воспроизводимая ишемическая боль в мышцах, возникающая при физической нагрузке и проходящая в покое вследствие недостаточного кровоснабжения работающих мышц при облитерирующем атеросклерозе артерий нижних конечностей (ОА АНК). Это классическое симптоматическое проявление стабильного ОА АНК. Классификации Фонтена и Резерфорда определяют место ПХ в спектре тяжести заболевания.',
                    type: 'text'
                  },
                  {
                    title: 'Патофизиология и локализация',
                    body: 'Атеросклеротический стеноз или окклюзия снижают кровоток. Перфузия достаточна в покое, но недостаточна при нагрузке — это приводит к накоплению лактата и ишемическому мышечному спазму.\n\nЛокализация ПХ предсказывает уровень поражения: икра → поверхностная бедренная артерия (ПБА) или подколенная артерия; бедро → подвздошная или общая бедренная артерия; ягодица + эректильная дисфункция → аорто-подвздошная окклюзия (синдром Лериша).',
                    type: 'text'
                  },
                  {
                    title: 'Клиническая оценка — ЛПИ',
                    body: 'Лодыжечно-плечевой индекс (ЛПИ) — отношение систолического давления на лодыжке к плечевому: норма ≥0,9; ПХ: 0,5–0,9; критическая ишемия конечности (КИК): <0,5; несжимаемые (кальцинированные) сосуды: >1,3 → использовать пальцево-плечевой индекс (ППИ, норма >0,7).\n\nДистанция ходьбы: >200 м = Фонтен IIa (умеренная); ≤200 м = Фонтен IIb (инвалидизирующая). При сборе анамнеза уточнить наличие боли покоя (Фонтен III) и потери тканей (Фонтен IV).',
                    type: 'text'
                  },
                  {
                    title: 'Классификация по Фонтену',
                    body: [
                      'Стадия I — Бессимптомная: ОА АНК только по данным обследования',
                      'Стадия IIa — Умеренная ПХ: дистанция ходьбы >200 м',
                      'Стадия IIb — Инвалидизирующая ПХ: дистанция ходьбы ≤200 м',
                      'Стадия III — Боль покоя: ишемическая боль в покое, усиливается ночью, уменьшается при опускании конечности',
                      'Стадия IV — Потеря тканей: ишемическое изъязвление или гангрена'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Медикаментозное лечение',
                    body: [
                      'Отказ от курения — наиболее эффективное вмешательство; снижает прогрессирование и сердечно-сосудистую смертность',
                      'Антиагреганты: аспирин 75–100 мг/сут ИЛИ клопидогрел 75 мг/сут (исследование CAPRIE — клопидогрел незначительно превосходит аспирин при ОА АНК; AHA/ACC 2016)',
                      'Статины высокой интенсивности: аторвастатин 40–80 мг/сут независимо от исходного уровня ЛПНП; AHA/ACC 2013',
                      'Супервизированные физические тренировки (СФТ): ≥30–45 мин 3 раза в неделю в течение ≥12 недель; увеличивают максимальную дистанцию ходьбы на 100–150%; метод первой линии (NICE TA223)',
                      'Цилостазол 100 мг 2 раза в сут (ингибитор фосфодиэстеразы-3, ФДЭ-3) — улучшает дистанцию ходьбы; противопоказан при сердечной недостаточности (NICE TA223)',
                      'Ингибитор АПФ при артериальной гипертензии; строгий гликемический контроль (HbA1c <53 ммоль/моль) при сахарном диабете'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Показания к вмешательству',
                    body: 'Инвалидизирующая ПХ, не поддающаяся ≥3 месяцам оптимального консервативного лечения и СФТ. Визуализация: дуплексное ультразвуковое сканирование (ДУЗС) — первый этап; КТ-ангиография (КТА) — при сложной анатомии.\n\nПоражения TASC II A/B (короткие, одиночные): эндоваскулярное лечение — чрескожная транслюминальная ангиопластика (ЧТА) ± стентирование. Поражения TASC II C/D (протяжённые, многоуровневые): предпочтительно хирургическое шунтирование. Аорто-подвздошное поражение класса D: аорто-бифеморальное шунтирование (АБФШ) — золотой стандарт.',
                    type: 'text'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'ПХ: низкий риск потери конечности (~1–2%/год), но ~30% 5-летняя летальность — генерализованный атеросклероз с инфарктом миокарда и инсультом',
                      'Отказ от курения превосходит любой препарат или операцию — удвоение дистанции ходьбы независимо от вмешательства',
                      'ЛПИ >1,3: несжимаемые кальцинированные сосуды — использовать ППИ (норма >0,7)',
                      'ДУЗС — первый метод визуализации перед вмешательством; КТА — для планирования операции',
                      'TASC II A/B → эндоваскулярное лечение; TASC II C/D → хирургическое шунтирование',
                      'После АБФШ: пожизненная антиагрегантная терапия; ежегодный дуплексный мониторинг шунта'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'intermittent-claudication-001',
                question_en: 'IC: pain relieved by?',
                question_ru: 'ПХ: боль проходит при?',
                answer_en: 'Rest',
                answer_ru: 'Покое'
              },
              {
                id: 'intermittent-claudication-002',
                question_en: 'Calf claudication: vessel level?',
                question_ru: 'Икроножная ПХ: уровень поражения?',
                answer_en: 'SFA or popliteal',
                answer_ru: 'ПБА или подколенная'
              },
              {
                id: 'intermittent-claudication-003',
                question_en: 'Buttock claudication + impotence: syndrome?',
                question_ru: 'ПХ ягодиц + импотенция: синдром?',
                answer_en: 'Leriche syndrome',
                answer_ru: 'Синдром Лериша'
              },
              {
                id: 'intermittent-claudication-004',
                question_en: 'ABPI range for claudication?',
                question_ru: 'Диапазон ЛПИ при ПХ?',
                answer_en: '0.5–0.9',
                answer_ru: '0,5–0,9'
              },
              {
                id: 'intermittent-claudication-005',
                question_en: 'ABPI >1.3 indicates?',
                question_ru: 'ЛПИ >1,3 указывает на?',
                answer_en: 'Non-compressible vessels',
                answer_ru: 'Несжимаемые сосуды'
              },
              {
                id: 'intermittent-claudication-006',
                question_en: 'Fontaine IIb walking distance?',
                question_ru: 'Дистанция ходьбы при Фонтене IIb?',
                answer_en: '≤200 metres',
                answer_ru: '≤200 метров'
              },
              {
                id: 'intermittent-claudication-007',
                question_en: 'First-line non-invasive treatment for IC?',
                question_ru: 'Метод первой линии при ПХ (неинвазивный)?',
                answer_en: 'Supervised exercise training',
                answer_ru: 'Супервизированные тренировки'
              },
              {
                id: 'intermittent-claudication-008',
                question_en: 'SET minimum duration?',
                question_ru: 'Минимальная продолжительность СФТ?',
                answer_en: '12 weeks',
                answer_ru: '12 недель'
              },
              {
                id: 'intermittent-claudication-009',
                question_en: 'Preferred antiplatelet in PAD (CAPRIE)?',
                question_ru: 'Предпочтительный антиагрегант при ОА АНК (CAPRIE)?',
                answer_en: 'Clopidogrel',
                answer_ru: 'Клопидогрел'
              },
              {
                id: 'intermittent-claudication-010',
                question_en: 'Clopidogrel dose in PAD?',
                question_ru: 'Доза клопидогрела при ОА АНК?',
                answer_en: '75 mg/day',
                answer_ru: '75 мг/сут'
              },
              {
                id: 'intermittent-claudication-011',
                question_en: 'PAD statin of choice and dose?',
                question_ru: 'Статин выбора и доза при ОА АНК?',
                answer_en: 'Atorvastatin 40–80 mg',
                answer_ru: 'Аторвастатин 40–80 мг'
              },
              {
                id: 'intermittent-claudication-012',
                question_en: 'Cilostazol mechanism?',
                question_ru: 'Механизм действия цилостазола?',
                answer_en: 'PDE-3 inhibitor',
                answer_ru: 'Ингибитор ФДЭ-3'
              },
              {
                id: 'intermittent-claudication-013',
                question_en: 'Cilostazol contraindication?',
                question_ru: 'Противопоказание к цилостазолу?',
                answer_en: 'Heart failure',
                answer_ru: 'Сердечная недостаточность'
              },
              {
                id: 'intermittent-claudication-014',
                question_en: 'TASC A/B: preferred treatment?',
                question_ru: 'TASC A/B: предпочтительное лечение?',
                answer_en: 'Endovascular (PTA/stent)',
                answer_ru: 'Эндоваскулярное (ЧТА/стент)'
              },
              {
                id: 'intermittent-claudication-015',
                question_en: 'Aorto-iliac TASC D gold standard?',
                question_ru: 'Золотой стандарт при TASC D аорто-подвздошном?',
                answer_en: 'Aortobifemoral bypass',
                answer_ru: 'Аорто-бифеморальное шунтирование'
              },
              {
                id: 'intermittent-claudication-016',
                question_en: 'IC 5-year mortality?',
                question_ru: '5-летняя летальность при ПХ?',
                answer_en: '~30%',
                answer_ru: '~30%'
              },
              {
                id: 'intermittent-claudication-017',
                question_en: 'IC annual limb loss risk?',
                question_ru: 'Годовой риск потери конечности при ПХ?',
                answer_en: '1–2% per year',
                answer_ru: '1–2% в год'
              },
              {
                id: 'intermittent-claudication-018',
                question_en: 'Single most effective IC treatment?',
                question_ru: 'Наиболее эффективное лечение ПХ?',
                answer_en: 'Smoking cessation',
                answer_ru: 'Отказ от курения'
              },
              {
                id: 'intermittent-claudication-019',
                question_en: 'Fontaine III symptom?',
                question_ru: 'Симптом Фонтена III?',
                answer_en: 'Rest pain',
                answer_ru: 'Боль покоя'
              },
              {
                id: 'intermittent-claudication-020',
                question_en: 'First imaging before IC intervention?',
                question_ru: 'Первичная визуализация перед вмешательством при ПХ?',
                answer_en: 'Duplex ultrasound',
                answer_ru: 'Дуплексное УЗИ'
              }
            ]
          },

          // ── Topic: Chronic Limb-Threatening Ischaemia ────────────────────────
          {
            slug: 'chronic-limb-threatening-ischaemia',
            title_en: 'Chronic Limb-Threatening Ischaemia',
            title_ru: 'Хроническая ишемия, угрожающая конечности',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Chronic limb-threatening ischaemia (CLTI) is the end-stage of peripheral arterial disease (PAD), encompassing ischaemic rest pain persisting >2 weeks and ischaemic tissue loss (ulceration or gangrene). The term replaced "critical limb ischaemia" (CLI) in the 2019 Global Vascular Guidelines (GVG). Without revascularisation: 1-year major amputation rate ~30%; 1-year mortality ~20%. CLTI demands urgent multidisciplinary assessment.',
                    type: 'text'
                  },
                  {
                    title: 'Fontaine-Pokrovsky Classification',
                    body: 'In Russian and post-Soviet medical practice the Fontaine classification is used as the Fontaine-Pokrovsky (Фонтена–Покровского) classification, with identical stages but Stage I explicitly defined by a >1000 m claudication threshold:',
                    type: 'text'
                  },
                  {
                    title: 'Fontaine-Pokrovsky Stages',
                    body: [
                      'Stage I (Pokrovsky I) — Asymptomatic: no symptoms at rest or walking; claudication threshold >1000 m',
                      'Stage IIa (Pokrovsky IIa) — Mild claudication: walking distance >200 m before pain',
                      'Stage IIb (Pokrovsky IIb) — Disabling claudication: walking distance ≤200 m',
                      'Stage III (Pokrovsky III) — Rest pain: ischaemic night/rest pain requiring analgesia; limb dependency for relief',
                      'Stage IV (Pokrovsky IV) — Trophic disorders: ischaemic ulceration, necrosis, or gangrene',
                      'CLTI = Stages III + IV'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Haemodynamic Criteria for CLTI (GVG 2019)',
                    body: [
                      'Rest pain: ABPI ≤0.4 OR ankle pressure <50 mmHg OR toe pressure <30 mmHg OR TcPO₂ <30 mmHg',
                      'Tissue loss: ABPI ≤0.6 OR ankle pressure <70 mmHg OR toe pressure <50 mmHg OR TcPO₂ <30 mmHg',
                      'ABPI >1.3 (non-compressible): use toe pressure or TcPO₂ instead'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'WIfI Classification (SVS 2014 / GVG 2019)',
                    body: 'WIfI scores Wound (W 0–3), Ischaemia (I 0–3), and foot Infection (fI 0–3). Each scored 0 (none/mild) to 3 (severe). The composite WIfI score predicts 1-year amputation risk and magnitude of benefit from revascularisation — high scores identify patients who gain most from urgent intervention.',
                    type: 'text'
                  },
                  {
                    title: 'Management',
                    body: [
                      'Best medical therapy (BMT) in all patients: antiplatelet, high-intensity statin, ACE inhibitor, wound care, infection control',
                      'Revascularisation: endovascular first (EVT) — percutaneous transluminal angioplasty (PTA) ± drug-coated balloon (DCB) ± stent for suitable lesions',
                      'Infrapopliteal (below-knee) vessels: balloon angioplasty is first-line endovascular approach',
                      'Surgical bypass: autologous great saphenous vein (GSV) is the conduit of choice — superior long-term patency over prosthetic (PTFE)',
                      'Femoro-distal / femoro-pedal bypass: GSV is essential; PTFE is not suitable for tibial/pedal targets',
                      'No-option CLTI (not fit for/failed revascularisation): iloprost IV 0.5–2 ng/kg/min × 6 h/day for 14–28 days',
                      'Major amputation (BKA or AKA) when irreversible tissue loss or sepsis; prefer below-knee amputation (BKA) for superior rehabilitation'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'BKA healing requires popliteal artery pressure >50 mmHg and stump length ≥8 cm; if popliteal inflow inadequate, AKA is safer',
                      'GSV bypass: always map vein pre-operatively with duplex — minimum diameter 3 mm; do not use varicosed segments',
                      'Iloprost: prostacyclin analogue — vasodilates, inhibits platelet aggregation; contraindicated in severe cardiac failure and recent MI',
                      'Post-revascularisation duplex graft surveillance: 6 weeks, 3 months, 6 months, then annually — detects restenosis before occlusion',
                      'WIfI guides triage: low wound + low ischaemia + no infection may heal with wound care alone; high all three = urgent revascularisation',
                      'CLTI in diabetics: neuropathy masks pain — tissue loss may be the first presentation; always screen foot pulses in diabetic patients'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Хроническая ишемия, угрожающая конечности (ХИУК), — конечная стадия облитерирующего атеросклероза артерий нижних конечностей (ОА АНК), включающая ишемическую боль покоя длительностью >2 недель и ишемическую потерю тканей (изъязвление или гангрену). Термин пришёл на смену «критической ишемии конечности» (КИК) в Глобальных сосудистых рекомендациях (ГСР) 2019 года. Без реваскуляризации: годовой риск ампутации ~30%; годовая летальность ~20%. ХИУК требует срочной мультидисциплинарной оценки.',
                    type: 'text'
                  },
                  {
                    title: 'Классификация Фонтена–Покровского',
                    body: 'В российской и постсоветской медицинской практике классификация Фонтена применяется как классификация Фонтена–Покровского с идентичными стадиями, однако стадия I чётко определена порогом дистанции ходьбы >1000 м:',
                    type: 'text'
                  },
                  {
                    title: 'Стадии по Фонтену–Покровскому',
                    body: [
                      'Стадия I (Покровский I) — Бессимптомная: нет симптомов в покое и при ходьбе; порог перемежающейся хромоты (ПХ) >1000 м',
                      'Стадия IIa (Покровский IIa) — Умеренная ПХ: дистанция ходьбы до боли >200 м',
                      'Стадия IIb (Покровский IIb) — Инвалидизирующая ПХ: дистанция ходьбы ≤200 м',
                      'Стадия III (Покровский III) — Боль покоя: ишемическая ночная/болевая ишемия покоя, требующая анальгетиков; облегчение при опускании конечности',
                      'Стадия IV (Покровский IV) — Трофические расстройства: ишемическое изъязвление, некроз или гангрена',
                      'ХИУК = стадии III + IV'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Гемодинамические критерии ХИУК (ГСР 2019)',
                    body: [
                      'Боль покоя: лодыжечно-плечевой индекс (ЛПИ) ≤0,4 ИЛИ давление на лодыжке <50 мм рт. ст. ИЛИ пальцевое давление <30 мм рт. ст. ИЛИ транскутанное напряжение кислорода (ТсРО₂) <30 мм рт. ст.',
                      'Потеря тканей: ЛПИ ≤0,6 ИЛИ давление на лодыжке <70 мм рт. ст. ИЛИ пальцевое давление <50 мм рт. ст. ИЛИ ТсРО₂ <30 мм рт. ст.',
                      'ЛПИ >1,3 (несжимаемые сосуды): использовать пальцевое давление или ТсРО₂'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Классификация WIfI (SVS 2014 / ГСР 2019)',
                    body: 'WIfI оценивает Рану (W 0–3), Ишемию (I 0–3) и инфекцию стопы (fI 0–3). Каждый компонент оценивается от 0 (нет/минимально) до 3 (тяжело). Суммарный балл WIfI прогнозирует годовой риск ампутации и степень пользы от реваскуляризации — высокие баллы выявляют пациентов, получающих наибольшую выгоду от срочного вмешательства.',
                    type: 'text'
                  },
                  {
                    title: 'Лечение',
                    body: [
                      'Оптимальная консервативная терапия (ОКТ) у всех пациентов: антиагреганты, статины высокой интенсивности, ингибиторы АПФ, уход за раной, контроль инфекции',
                      'Реваскуляризация: приоритет эндоваскулярному лечению — чрескожная транслюминальная ангиопластика (ЧТА) ± баллон с лекарственным покрытием (БЛП) ± стент при подходящих поражениях',
                      'Инфрапоплитеальные артерии (ниже колена): баллонная ангиопластика — метод первой линии',
                      'Хирургическое шунтирование: аутологичная большая подкожная вена (БПВ) — кондуит выбора с превосходящей долгосрочной проходимостью по сравнению с протезом (политетрафторэтилен, ПТФЭ)',
                      'Бедренно-дистальное / бедренно-педальное шунтирование: БПВ обязательна; ПТФЭ непригоден для большеберцовых/педальных целевых артерий',
                      'ХИУК без вариантов реваскуляризации: илопрост в/в 0,5–2 нг/кг/мин × 6 ч/сут в течение 14–28 дней',
                      'Ампутация (ниже колена, АНК, или выше колена, АВК) при необратимой потере тканей или сепсисе; предпочтительна АНК для лучшей реабилитации'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'АНК: для заживления раны необходимо давление в подколенной артерии >50 мм рт. ст. и длина культи ≥8 см; при недостаточном притоке — АВК',
                      'Шунтирование из БПВ: предоперационное дуплексное картирование вены обязательно — минимальный диаметр 3 мм; варикозные сегменты не использовать',
                      'Илопрост — аналог простациклина: вазодилататор, ингибитор агрегации тромбоцитов; противопоказан при тяжёлой сердечной недостаточности и недавнем ИМ',
                      'Дуплексный мониторинг шунта после реваскуляризации: через 6 недель, 3 месяца, 6 месяцев, затем ежегодно — выявляет рестеноз до окклюзии',
                      'WIfI определяет тактику: низкие W + I + fI — возможно заживление без вмешательства; высокие по всем трём — срочная реваскуляризация',
                      'ХИУК у диабетиков: нейропатия маскирует боль — потеря тканей может быть первым проявлением; всегда исследовать пульс на стопе у диабетических больных'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'clti-001',
                question_en: 'CLTI former name?',
                question_ru: 'Прежнее название ХИУК?',
                answer_en: 'Critical limb ischaemia',
                answer_ru: 'Критическая ишемия конечности'
              },
              {
                id: 'clti-002',
                question_en: 'CLTI = Fontaine-Pokrovsky stages?',
                question_ru: 'ХИУК = стадии Фонтена–Покровского?',
                answer_en: 'III and IV',
                answer_ru: 'III и IV'
              },
              {
                id: 'clti-003',
                question_en: 'Fontaine-Pokrovsky I: claudication threshold?',
                question_ru: 'Фонтен–Покровский I: порог дистанции ходьбы?',
                answer_en: '>1000 metres',
                answer_ru: '>1000 метров'
              },
              {
                id: 'clti-004',
                question_en: 'Fontaine-Pokrovsky IV: findings?',
                question_ru: 'Фонтен–Покровский IV: проявления?',
                answer_en: 'Ulceration or gangrene',
                answer_ru: 'Изъязвление или гангрена'
              },
              {
                id: 'clti-005',
                question_en: 'ABPI threshold for CLTI rest pain?',
                question_ru: 'ЛПИ при ХИУК с болью покоя?',
                answer_en: '≤0.4',
                answer_ru: '≤0,4'
              },
              {
                id: 'clti-006',
                question_en: 'Ankle pressure for CLTI rest pain?',
                question_ru: 'Давление на лодыжке при ХИУК (боль покоя)?',
                answer_en: '<50 mmHg',
                answer_ru: '<50 мм рт. ст.'
              },
              {
                id: 'clti-007',
                question_en: 'Toe pressure threshold for tissue loss?',
                question_ru: 'Пальцевое давление при потере тканей?',
                answer_en: '<50 mmHg',
                answer_ru: '<50 мм рт. ст.'
              },
              {
                id: 'clti-008',
                question_en: 'WIfI: W stands for?',
                question_ru: 'WIfI: W расшифровывается как?',
                answer_en: 'Wound',
                answer_ru: 'Рана'
              },
              {
                id: 'clti-009',
                question_en: 'WIfI: fI stands for?',
                question_ru: 'WIfI: fI расшифровывается как?',
                answer_en: 'Foot infection',
                answer_ru: 'Инфекция стопы'
              },
              {
                id: 'clti-010',
                question_en: 'WIfI predicts?',
                question_ru: 'WIfI прогнозирует?',
                answer_en: 'Amputation risk',
                answer_ru: 'Риск ампутации'
              },
              {
                id: 'clti-011',
                question_en: 'Bypass conduit of choice in CLTI?',
                question_ru: 'Кондуит выбора при шунтировании при ХИУК?',
                answer_en: 'Great saphenous vein',
                answer_ru: 'Большая подкожная вена'
              },
              {
                id: 'clti-012',
                question_en: 'No-option CLTI: drug of choice?',
                question_ru: 'ХИУК без вариантов реваскуляризации: препарат?',
                answer_en: 'Iloprost',
                answer_ru: 'Илопрост'
              },
              {
                id: 'clti-013',
                question_en: 'Iloprost drug class?',
                question_ru: 'Класс препарата илопрост?',
                answer_en: 'Prostacyclin analogue',
                answer_ru: 'Аналог простациклина'
              },
              {
                id: 'clti-014',
                question_en: 'Iloprost course duration?',
                question_ru: 'Продолжительность курса илопроста?',
                answer_en: '14–28 days',
                answer_ru: '14–28 дней'
              },
              {
                id: 'clti-015',
                question_en: 'Preferred amputation level in CLTI?',
                question_ru: 'Предпочтительный уровень ампутации при ХИУК?',
                answer_en: 'Below-knee (BKA)',
                answer_ru: 'Ниже колена (АНК)'
              },
              {
                id: 'clti-016',
                question_en: 'BKA: popliteal pressure required?',
                question_ru: 'АНК: необходимое давление в подколенной?',
                answer_en: '>50 mmHg',
                answer_ru: '>50 мм рт. ст.'
              },
              {
                id: 'clti-017',
                question_en: 'CLTI 1-year amputation rate without intervention?',
                question_ru: 'Годовой риск ампутации ХИУК без лечения?',
                answer_en: '~30%',
                answer_ru: '~30%'
              },
              {
                id: 'clti-018',
                question_en: 'CLTI 1-year mortality?',
                question_ru: 'Годовая летальность ХИУК?',
                answer_en: '~20%',
                answer_ru: '~20%'
              },
              {
                id: 'clti-019',
                question_en: 'Infrapopliteal endovascular first approach?',
                question_ru: 'Первичный эндоваскулярный метод для инфрапоплитеальных артерий?',
                answer_en: 'Balloon angioplasty',
                answer_ru: 'Баллонная ангиопластика'
              },
              {
                id: 'clti-020',
                question_en: 'First post-bypass duplex surveillance?',
                question_ru: 'Первый дуплексный контроль после шунтирования?',
                answer_en: '6 weeks',
                answer_ru: '6 недель'
              }
            ]
          },

          // ── Topic: Open Surgical Procedures for PAD ──────────────────────────
          {
            slug: 'open-surgical-pad',
            title_en: 'Open Surgical Procedures for PAD',
            title_ru: 'Открытые хирургические вмешательства при ЗПА',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Open surgical revascularisation for peripheral arterial disease (PAD) is indicated when endovascular therapy is unsuitable, has failed, or anatomy favours a surgical approach. TASC II C/D lesions of the aortoiliac and femoropopliteal segments are the primary domain of open surgery. Core procedures: aorto-bifemoral bypass (ABF), femoro-popliteal bypass (FPB), femoro-distal bypass, and common femoral endarterectomy (CFE) ± profundaplasty. Optimal medical therapy (OMT) must be established before elective surgery: aspirin 75–100 mg daily, atorvastatin 40–80 mg daily, ACE inhibitor, and smoking cessation. The ESVS 2019 guideline recommends revascularisation for all CLTI patients with suitable anatomy.',
                    type: 'text'
                  },
                  {
                    title: 'Preoperative Assessment',
                    body: [
                      'ABI < 0.9 confirms PAD; ABI < 0.4 suggests CLTI; ABI > 1.3 (non-compressible vessels) → measure toe-brachial index (TBI); TBI < 0.7 is abnormal',
                      'Duplex ultrasound: first-line imaging; maps anatomy and identifies conduit veins',
                      'CT angiography (CTA): whole aorta-to-foot run-off; gold standard for operative planning',
                      'DSA (digital subtraction angiography): reserved for equivocal CTA or hybrid intervention planning',
                      'Cardiac risk: PAD patients have ~30% prevalence of significant CAD; assess with CPET or dobutamine stress echocardiography (AHA/ACC guideline)',
                      'Renal function: pre-hydrate if eGFR < 60 mL/min/1.73 m² before contrast administration'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Conduit Selection',
                    body: [
                      'Great saphenous vein (GSV): gold standard for all below-knee targets; 5-year primary patency ~65% (GSV) vs ~35% (prosthetic) below knee',
                      'Arm vein (cephalic or basilic): second-line autologous conduit if GSV unavailable or inadequate',
                      'PTFE: preferred prosthetic for above-knee femoro-popliteal bypass; 5-year patency comparable to vein above knee (~55%)',
                      'Dacron: preferred for ABF (16–18 mm bifurcated graft)',
                      'Vein cuff (Miller cuff / Taylor patch): mandatory adjunct when prosthetic graft anastomosed below the knee; improves distal patency'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Aorto-Bifemoral Bypass',
                    body: [
                      'Indication: Leriche syndrome (bilateral claudication, impotence, absent femoral pulses) from TASC II C/D aortoiliac disease unsuitable for endovascular repair',
                      'GA; arterial line + central venous access; urinary catheter',
                      'Lower midline laparotomy (or retroperitoneal left-flank approach in high-risk patients)',
                      'Expose infrarenal aorta: divide posterior peritoneum; identify left renal vein crossing anteriorly — ligate adrenal/gonadal tributaries to mobilise if needed',
                      'Both groins: longitudinal incisions; expose CFA, SFA, and profunda femoris artery',
                      'Systemic heparin 100 IU/kg IV; target ACT > 250 s',
                      'Aortic anastomosis: end-to-end preferred (reduces distal embolisation); end-to-side if aorta is patent and IMA/pelvic flow must be preserved',
                      '16–18 mm bifurcated Dacron graft tunnelled retroperitoneally then under the inguinal ligament to each groin',
                      'Femoral anastomosis: end-to-side to CFA with bevelled hood extending to profunda orifice (profundaplasty effect); 5-0 or 6-0 Prolene',
                      'Close peritoneum over graft to prevent aorto-enteric fistula',
                      'Outcomes (ESVS 2019): operative mortality 2–5%; 5-year primary patency 80–90%'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Femoro-Popliteal Bypass',
                    body: [
                      'Indication: SFA/popliteal disease causing CLTI or incapacitating claudication failing OMT; TASC II C/D femoropopliteal lesions',
                      'GA or spinal/epidural anaesthesia',
                      'Harvest reversed GSV via medial thigh incision; ligate tributaries; flush with heparinised saline; check for strictures',
                      'Above-knee (AK) popliteal: medial thigh incision in groove between vastus medialis and sartorius',
                      'Below-knee (BK) popliteal: medial incision in popliteal fossa between tibia and gastrocnemius heads',
                      'Heparin 100 IU/kg IV; proximal anastomosis end-to-side to CFA at SFA origin; 5-0 Prolene',
                      'Tunnel subcutaneously medially (deep to sartorius for AK; between gastrocnemius heads for BK)',
                      'Distal anastomosis end-to-side to popliteal; 6-0 Prolene; confirm no vein twist before flow restoration',
                      'Outcomes: AK-GSV ~70%; BK-GSV ~65%; AK-prosthetic ~55%; BK-prosthetic ~35% at 5 years'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Femoro-Distal Bypass & Common Femoral Endarterectomy',
                    body: [
                      'Femoro-distal bypass: targets posterior tibial, anterior tibial, or peroneal artery for CLTI when popliteal artery is unsuitable; GSV mandatory; 6-0 or 7-0 Prolene; 5-year primary patency ~50–60%; limb salvage ~70–80%',
                      'CFE ± profundaplasty: endarterectomy of CFA and profunda origin for focal femoral disease; patch angioplasty (vein or bovine pericardium) prevents restenosis; profundaplasty improves profunda inflow and distal perfusion',
                      'Hybrid procedure: CFE + ipsilateral iliac stenting in the same setting; avoids laparotomy while addressing multi-level disease'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Complications',
                    body: [
                      'Early — Wound infection / lymphocele: most common groin complication; prevented by meticulous haemostasis and wound care',
                      'Early — Graft thrombosis: usually technical (kinking, intimal flap, conduit mismatch); re-explore urgently',
                      'Early — Haemorrhage: anastomotic leak or diffuse coagulopathy',
                      'Early — Systemic: MI (1–3%), AKI, DVT/PE, pneumonia',
                      'Late — Anastomotic pseudoaneurysm: commonest at femoral anastomosis; repair electively when > 2 cm',
                      'Late — Graft infection (1–3% lifetime): PTFE most susceptible; requires graft excision ± extra-anatomic bypass (obturator bypass for aortoiliac grafts)',
                      'Late — Aorto-enteric fistula: rare but fatal; classic presentation — herald GI bleed then massive haemorrhage; emergency graft excision + bowel repair + extra-anatomic bypass',
                      'Late — Graft stenosis: PSV ratio > 2.5 on duplex = haemodynamically significant → angioplasty or jump graft before occlusion'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surveillance & Alternatives',
                    body: [
                      'Surveillance (SVS guideline): duplex at 6 weeks, 3 months, 6 months, then annually; ABI at each visit; PSV ratio > 2.5 = significant stenosis requiring re-intervention',
                      'Endovascular first for TASC II A/B: balloon angioplasty ± stenting; drug-coated balloon (DCB) improves durability vs plain balloon for femoropopliteal disease (AHA/ACC 2016)',
                      'Hybrid: CFE + iliac stenting avoids laparotomy while treating multi-level disease',
                      'Amputation (BKA or AKA): for unsalvageable limb, failed revascularisation, or prohibitive surgical risk; BKA preferred over AKA for rehabilitation potential'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Открытая хирургическая реваскуляризация при заболеваниях периферических артерий (ЗПА) показана, если эндоваскулярное лечение неприменимо, потерпело неудачу или анатомия благоприятствует хирургическому подходу. Поражения TASC II C/D аорто-подвздошного и бедренно-подколенного сегментов — основная область открытой хирургии. Основные операции: аорто-бифеморальное шунтирование (АБФШ), бедренно-подколенное шунтирование (БПШ), бедренно-дистальное шунтирование и эндартерэктомия из общей бедренной артерии (ОБА) ± профундопластика. До плановой операции необходима оптимальная медикаментозная терапия (ОМТ): аспирин 75–100 мг/сут, аторвастатин 40–80 мг/сут, ингибитор АПФ и отказ от курения. Руководство ESVS 2019 рекомендует реваскуляризацию всем пациентам с хронической ишемией, угрожающей конечности (ХИУК), при подходящей анатомии.',
                    type: 'text'
                  },
                  {
                    title: 'Предоперационная оценка',
                    body: [
                      'Лодыжечно-плечевой индекс (ЛПИ) < 0,9 подтверждает ЗПА; ЛПИ < 0,4 указывает на ХИУК; ЛПИ > 1,3 (некомпрессируемые сосуды) → измерить пальцево-плечевой индекс (ППИ); ППИ < 0,7 — патологическое значение',
                      'Дуплексное сканирование: метод первой линии; картирует анатомию и определяет пригодные кондуиты',
                      'КТ-ангиография (КТА): от аорты до стоп; золотой стандарт предоперационного планирования',
                      'Дигитальная субтракционная ангиография (ДСА): при неопределённых данных КТА или при планировании гибридного вмешательства',
                      'Кардиальный риск: у пациентов с ЗПА ~30% имеют значимую ишемическую болезнь сердца (ИБС); оценка с помощью кардиопульмонального нагрузочного теста (КПНТ) или добутаминовой стресс-эхокардиографии (рекомендации AHA/ACC)',
                      'Функция почек: предгидратация при скорости клубочковой фильтрации (СКФ) < 60 мл/мин/1,73 м² перед введением контраста'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Выбор кондуита',
                    body: [
                      'Большая подкожная вена (БПВ): золотой стандарт для всех целей ниже колена; 5-летняя первичная проходимость ~65% (БПВ) против ~35% (протез) ниже колена',
                      'Вена руки (головная или основная): аутологичный кондуит второй линии при непригодности БПВ',
                      'ПТФЭ (политетрафторэтилен): предпочтительный синтетический кондуит для надколенного бедренно-подколенного шунтирования; 5-летняя проходимость сопоставима с веной (~55%)',
                      'Дакрон: предпочтителен для бифуркационного протеза при АБФШ (16–18 мм)',
                      'Венозная манжетка (манжетка Миллера / заплата Тейлора): обязательное дополнение при протезном анастомозе ниже колена; улучшает дистальную проходимость'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Аорто-бифеморальное шунтирование',
                    body: [
                      'Показание: синдром Лериша (двусторонняя перемежающаяся хромота, импотенция, отсутствие пульса на бедренных артериях) при поражениях TASC II C/D аорто-подвздошного сегмента, не пригодных для эндоваскулярной реконструкции',
                      'Общая анестезия (ОА); инвазивный мониторинг АД + центральный венозный катетер; катетер мочевого пузыря',
                      'Нижняя срединная лапаротомия (или забрюшинный левобоковой доступ у пациентов высокого риска)',
                      'Выделение инфраренальной аорты: разрез заднего листка брюшины; левая почечная вена пересекает аорту спереди — при необходимости мобилизовать путём лигирования надпочечниковых/гонадных притоков',
                      'Оба паха: продольные разрезы; выделить общую бедренную артерию (ОБА), поверхностную бедренную артерию (ПБА) и глубокую артерию бедра (ГАБ)',
                      'Системный гепарин 100 МЕ/кг в/в; целевое активированное время свёртывания (АВС) > 250 с',
                      'Аортальный анастомоз: «конец в конец» предпочтительно (снижает риск дистальной эмболизации); «конец в бок» — если аорта проходима и необходимо сохранить кровоток по нижней брыжеечной артерии / в малый таз',
                      'Бифуркационный дакроновый протез 16–18 мм проводят забрюшинно, затем под паховой связкой к каждому паху',
                      'Бедренный анастомоз: «конец в бок» к ОБА с косым язычком до устья ГАБ (эффект профундопластики); пролен 5-0 или 6-0',
                      'Брюшину ушивают над протезом для профилактики аорто-кишечного свища',
                      'Результаты (ESVS 2019): операционная летальность 2–5%; 5-летняя первичная проходимость 80–90%'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Бедренно-подколенное шунтирование',
                    body: [
                      'Показание: поражение поверхностной бедренной / подколенной артерии (ПБА/ПоА) с ХИУК или изнурительной перемежающейся хромотой, не поддающейся ОМТ; поражения TASC II C/D бедренно-подколенного сегмента',
                      'Общая или спинальная/эпидуральная анестезия',
                      'Забор БПВ в обращённом виде через медиальный разрез на бедре; лигировать притоки; промыть гепаринизированным физраствором; проверить на стриктуры',
                      'Надколенный (НК) доступ к подколенной артерии (ПоА): борозда между широкой медиальной мышцей и портняжной мышцей',
                      'Подколенный (ПК) доступ: медиальная подколенная ямка между большеберцовой костью и головками икроножной мышцы',
                      'Гепарин 100 МЕ/кг в/в; проксимальный анастомоз «конец в бок» к ОБА у начала ПБА; пролен 5-0',
                      'Тоннель подкожно медиально (под портняжной мышцей — НК; между головками икроножной — ПК)',
                      'Дистальный анастомоз «конец в бок» к ПоА; пролен 6-0; убедиться в отсутствии перекрута вены до пуска кровотока',
                      'Результаты: НК-БПВ ~70%; ПК-БПВ ~65%; НК-протез ~55%; ПК-протез ~35% через 5 лет'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Бедренно-дистальное шунтирование и эндартерэктомия из ОБА',
                    body: [
                      'Бедренно-дистальное шунтирование: цель — задняя большеберцовая, передняя большеберцовая или малоберцовая артерия при ХИУК, когда ПоА непригодна; БПВ обязательна; пролен 6-0 или 7-0; 5-летняя первичная проходимость ~50–60%; сохранение конечности ~70–80%',
                      'Эндартерэктомия из ОБА ± профундопластика: удаление бляшки из ОБА и устья ГАБ при локальном бедренном поражении; пластика заплатой (венозной или из бычьего перикарда) предотвращает рестеноз; профундопластика улучшает приток по ГАБ и дистальное перфузионное давление',
                      'Гибридная операция: эндартерэктомия из ОБА + ипсилатеральное стентирование подвздошной артерии за одну сессию; исключает лапаротомию при многоуровневом поражении'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Осложнения',
                    body: [
                      'Ранние — Раневая инфекция / лимфоцеле: наиболее частое паховое осложнение; профилактика — тщательный гемостаз и уход за раной',
                      'Ранние — Тромбоз шунта: как правило, технический (перегиб, интимальный лоскут, несоответствие диаметров); показана экстренная ревизия',
                      'Ранние — Кровотечение: из анастомоза или диффузная коагулопатия',
                      'Ранние — Системные: инфаркт миокарда (ИМ) (1–3%), острое повреждение почек (ОПП), тромбоз глубоких вен (ТГВ)/тромбоэмболия лёгочной артерии (ТЭЛА), пневмония',
                      'Поздние — Ложная аневризма анастомоза: наиболее часто в зоне бедренного анастомоза; плановое вмешательство при диаметре > 2 см',
                      'Поздние — Инфекция протеза (1–3% за жизнь): ПТФЭ наиболее подвержен; требует удаления протеза ± внеанатомического шунтирования (обтураторный обход при аорто-подвздошных протезах)',
                      'Поздние — Аорто-кишечный свищ: редко, но фатально; классика — предвестниковое желудочно-кишечное (ЖК) кровотечение, затем массивное; экстренное удаление протеза + ушивание кишки + внеанатомическое шунтирование',
                      'Поздние — Стеноз шунта: соотношение пиковых систолических скоростей (СПСС) > 2,5 при дуплексном сканировании = гемодинамически значимый стеноз → ангиопластика или прыжковый шунт до окклюзии'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Наблюдение и альтернативы',
                    body: [
                      'Наблюдение (рекомендации SVS): дуплексное сканирование через 6 недель, 3 месяца, 6 месяцев, затем ежегодно; ЛПИ при каждом визите; СПСС > 2,5 = значимый стеноз, требующий вмешательства',
                      'Эндоваскулярный метод — первый выбор при поражениях TASC II A/B: баллонная ангиопластика ± стентирование; баллон с лекарственным покрытием (БЛП) улучшает долгосрочную проходимость по сравнению с простым баллоном в бедренно-подколенном сегменте (AHA/ACC 2016)',
                      'Гибридная операция: эндартерэктомия из ОБА + стентирование подвздошной артерии исключает лапаротомию при многоуровневом поражении',
                      'Ампутация (голени или бедра): при некурабельной ишемии конечности, неудаче реваскуляризации или запредельном хирургическом риске; ампутация голени предпочтительна ввиду лучшего реабилитационного потенциала'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'open-surgical-pad-001',
                question_en: 'TASC II C/D lesions: preferred treatment?',
                question_ru: 'Поражения TASC II C/D: предпочтительное лечение?',
                answer_en: 'Open surgery',
                answer_ru: 'Открытая операция'
              },
              {
                id: 'open-surgical-pad-002',
                question_en: 'ABI indicating CLTI?',
                question_ru: 'ЛПИ, указывающий на ХИУК?',
                answer_en: '<0.4',
                answer_ru: '<0,4'
              },
              {
                id: 'open-surgical-pad-003',
                question_en: 'Non-compressible vessels: ABI alternative?',
                question_ru: 'Некомпрессируемые сосуды: альтернатива ЛПИ?',
                answer_en: 'Toe-brachial index',
                answer_ru: 'Пальцево-плечевой индекс'
              },
              {
                id: 'open-surgical-pad-004',
                question_en: 'Abnormal TBI threshold?',
                question_ru: 'Патологический порог ППИ?',
                answer_en: '<0.7',
                answer_ru: '<0,7'
              },
              {
                id: 'open-surgical-pad-005',
                question_en: 'Gold standard imaging for PAD operative planning?',
                question_ru: 'Золотой стандарт визуализации при планировании операции при ЗПА?',
                answer_en: 'CT angiography',
                answer_ru: 'КТ-ангиография'
              },
              {
                id: 'open-surgical-pad-006',
                question_en: 'Intraoperative heparin dose for bypass?',
                question_ru: 'Интраоперационная доза гепарина при шунтировании?',
                answer_en: '100 IU/kg IV',
                answer_ru: '100 МЕ/кг в/в'
              },
              {
                id: 'open-surgical-pad-007',
                question_en: 'Target ACT during vascular bypass?',
                question_ru: 'Целевое АВС при сосудистом шунтировании?',
                answer_en: '>250 seconds',
                answer_ru: '>250 секунд'
              },
              {
                id: 'open-surgical-pad-008',
                question_en: 'Leriche syndrome cause?',
                question_ru: 'Причина синдрома Лериша?',
                answer_en: 'Aortoiliac occlusion',
                answer_ru: 'Аорто-подвздошная окклюзия'
              },
              {
                id: 'open-surgical-pad-009',
                question_en: 'ABF graft material?',
                question_ru: 'Материал протеза при АБФШ?',
                answer_en: 'Bifurcated Dacron',
                answer_ru: 'Бифуркационный дакрон'
              },
              {
                id: 'open-surgical-pad-010',
                question_en: 'ABF: aortic anastomosis preference?',
                question_ru: 'АБФШ: предпочтительный тип аортального анастомоза?',
                answer_en: 'End-to-end',
                answer_ru: 'Конец в конец'
              },
              {
                id: 'open-surgical-pad-011',
                question_en: 'Structure crossing infrarenal aorta anteriorly?',
                question_ru: 'Структура, пересекающая инфраренальную аорту спереди?',
                answer_en: 'Left renal vein',
                answer_ru: 'Левая почечная вена'
              },
              {
                id: 'open-surgical-pad-012',
                question_en: 'ABF femoral anastomosis type?',
                question_ru: 'Тип бедренного анастомоза при АБФШ?',
                answer_en: 'End-to-side CFA',
                answer_ru: 'Конец в бок ОБА'
              },
              {
                id: 'open-surgical-pad-013',
                question_en: 'ABF femoral hood extends to?',
                question_ru: 'Язычок бедренного анастомоза АБФШ доходит до?',
                answer_en: 'Profunda orifice',
                answer_ru: 'Устья ГАБ'
              },
              {
                id: 'open-surgical-pad-014',
                question_en: 'Reason to close peritoneum over ABF graft?',
                question_ru: 'Цель ушивания брюшины над протезом АБФШ?',
                answer_en: 'Prevent aortoenteric fistula',
                answer_ru: 'Профилактика аорто-кишечного свища'
              },
              {
                id: 'open-surgical-pad-015',
                question_en: 'ABF operative mortality?',
                question_ru: 'Операционная летальность АБФШ?',
                answer_en: '2–5%',
                answer_ru: '2–5%'
              },
              {
                id: 'open-surgical-pad-016',
                question_en: 'ABF 5-year primary patency?',
                question_ru: '5-летняя первичная проходимость АБФШ?',
                answer_en: '80–90%',
                answer_ru: '80–90%'
              },
              {
                id: 'open-surgical-pad-017',
                question_en: 'Preferred conduit for below-knee bypass?',
                question_ru: 'Предпочтительный кондуит для шунтирования ниже колена?',
                answer_en: 'Great saphenous vein',
                answer_ru: 'Большая подкожная вена'
              },
              {
                id: 'open-surgical-pad-018',
                question_en: 'GSV below-knee bypass 5-year patency?',
                question_ru: '5-летняя проходимость шунта из БПВ ниже колена?',
                answer_en: '~65%',
                answer_ru: '~65%'
              },
              {
                id: 'open-surgical-pad-019',
                question_en: 'Prosthetic below-knee bypass 5-year patency?',
                question_ru: '5-летняя проходимость протезного шунта ниже колена?',
                answer_en: '~35%',
                answer_ru: '~35%'
              },
              {
                id: 'open-surgical-pad-020',
                question_en: 'Prosthetic distal anastomosis adjunct?',
                question_ru: 'Дополнение при протезном дистальном анастомозе?',
                answer_en: 'Vein cuff',
                answer_ru: 'Венозная манжетка'
              },
              {
                id: 'open-surgical-pad-021',
                question_en: 'Above-knee popliteal access: muscle groove?',
                question_ru: 'Надколенный доступ к ПоА: между какими мышцами?',
                answer_en: 'Vastus / sartorius',
                answer_ru: 'Vastus / sartorius'
              },
              {
                id: 'open-surgical-pad-022',
                question_en: 'Femoro-distal bypass: mandatory conduit?',
                question_ru: 'Бедренно-дистальное шунтирование: обязательный кондуит?',
                answer_en: 'Autologous vein',
                answer_ru: 'Аутовенозный кондуит'
              },
              {
                id: 'open-surgical-pad-023',
                question_en: 'Profundaplasty indication?',
                question_ru: 'Показание к профундопластике?',
                answer_en: 'Profunda origin stenosis',
                answer_ru: 'Стеноз устья ГАБ'
              },
              {
                id: 'open-surgical-pad-024',
                question_en: 'CFE: reason for patch angioplasty?',
                question_ru: 'Эндартерэктомия из ОБА: цель пластики заплатой?',
                answer_en: 'Prevent restenosis',
                answer_ru: 'Профилактика рестеноза'
              },
              {
                id: 'open-surgical-pad-025',
                question_en: 'Most common early groin bypass complication?',
                question_ru: 'Наиболее частое раннее осложнение при паховом шунтировании?',
                answer_en: 'Wound infection',
                answer_ru: 'Раневая инфекция'
              },
              {
                id: 'open-surgical-pad-026',
                question_en: 'PSV ratio indicating graft stenosis?',
                question_ru: 'СПСС, указывающее на стеноз шунта?',
                answer_en: '>2.5',
                answer_ru: '>2,5'
              },
              {
                id: 'open-surgical-pad-027',
                question_en: 'First post-bypass duplex timing?',
                question_ru: 'Срок первого дуплексного контроля после шунтирования?',
                answer_en: '6 weeks',
                answer_ru: '6 недель'
              },
              {
                id: 'open-surgical-pad-028',
                question_en: 'Anastomotic pseudoaneurysm: repair threshold?',
                question_ru: 'Ложная аневризма анастомоза: порог для вмешательства?',
                answer_en: '>2 cm',
                answer_ru: '>2 см'
              },
              {
                id: 'open-surgical-pad-029',
                question_en: 'Graft infection: surgical treatment?',
                question_ru: 'Инфекция протеза: хирургическое лечение?',
                answer_en: 'Graft excision',
                answer_ru: 'Удаление протеза'
              },
              {
                id: 'open-surgical-pad-030',
                question_en: 'Aortoenteric fistula hallmark symptom?',
                question_ru: 'Патогномоничный симптом аорто-кишечного свища?',
                answer_en: 'Herald GI bleed',
                answer_ru: 'Предвестниковое ЖК-кровотечение'
              }
            ]
          }

        ]
      }
    ]
  }
]
