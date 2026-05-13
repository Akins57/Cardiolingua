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

          // ── Topic: Arterial Supply & Venous Drainage of the Head and Neck ──
          {
            slug: 'arterial-supply-venous-drainage-head-neck',
            title_en: 'Arterial Supply & Venous Drainage of the Head and Neck',
            title_ru: 'Артериальное кровоснабжение и венозный отток головы и шеи',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The head and neck receive arterial supply primarily from the common carotid arteries (CCA) and vertebral arteries. Venous drainage is principally via the internal jugular veins (IJV). This anatomy is fundamental to carotid endarterectomy (CEA), central venous access, and vascular tumours of the neck.',
                    type: 'text'
                  },
                  {
                    title: 'Common Carotid Arteries',
                    body: 'The right CCA arises from the brachiocephalic trunk behind the right sternoclavicular joint; the left CCA arises directly from the aortic arch (longer mediastinal course). Both travel within the carotid sheath with the IJV (lateral) and vagus nerve (posterior).\n\nBifurcate at C3–C4 (upper border of thyroid cartilage) into the external and internal carotid arteries. At the bifurcation: the carotid sinus (baroreceptors, innervated by CN IX — glossopharyngeal nerve) monitors blood pressure; the carotid body (chemoreceptors) detects changes in O₂, CO₂, and pH.',
                    type: 'text'
                  },
                  {
                    title: 'External Carotid Artery — 8 Branches (SALFOPMS)',
                    body: [
                      'Superior thyroid artery — thyroid gland, larynx',
                      'Ascending pharyngeal artery — pharynx, meninges',
                      'Lingual artery — tongue, floor of mouth',
                      'Facial artery — face; crosses mandible at anterior border of masseter',
                      'Occipital artery — posterior scalp',
                      'Posterior auricular artery — pinna, posterior scalp',
                      'Maxillary artery — deep face; its branch, the middle meningeal artery, supplies the dura mater',
                      'Superficial temporal artery — temporal scalp; palpable anterior to the tragus (terminal branch)',
                      'The ECA lies medial to the ICA at the bifurcation'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Internal Carotid Artery',
                    body: 'No branches in the neck. Segments: Cervical → Petrous → Lacerum → Cavernous → Clinoid → Ophthalmic → Communicating.\n\nFirst intracranial branch: ophthalmic artery (enters orbit via optic canal; supplies the eye). Terminates as the anterior cerebral artery (ACA) and middle cerebral artery (MCA). Supplies the ipsilateral cerebral hemisphere and eye. Lies lateral and posterior to the ECA at the bifurcation.',
                    type: 'text'
                  },
                  {
                    title: 'Vertebral Arteries',
                    body: 'First branch of the subclavian artery bilaterally. Enter the transverse foramina at C6 (occasionally C7). Ascend through C6–C1, then enter the skull via the foramen magnum.\n\nThe two vertebral arteries unite at the lower border of the pons to form the basilar artery, which continues to the Circle of Willis via the posterior cerebral arteries (PCA). Key branches: PICA (posterior inferior cerebellar artery — from the vertebral artery); AICA (anterior inferior cerebellar artery — from the basilar artery).',
                    type: 'text'
                  },
                  {
                    title: 'Venous Drainage',
                    body: 'Internal Jugular Vein (IJV): Continuation of the sigmoid sinus at the jugular foramen. Principal drainage of brain, face, and neck. Lies lateral to the CCA within the carotid sheath. Tributaries: facial, lingual, pharyngeal, superior and middle thyroid veins. Joins the subclavian vein behind the sternoclavicular joint to form the brachiocephalic vein. Right IJV is preferred for central venous access — straight path to the SVC.\n\nExternal Jugular Vein (EJV): Formed by the junction of the posterior division of the retromandibular vein and the posterior auricular vein. Crosses SCM superficially and drains into the subclavian vein. Used clinically to assess jugular venous pressure (JVP).\n\nAnterior Jugular Vein: Drains the anterior neck; communicates across the midline via the jugular venous arch.\n\nVertebral Veins: Accompany the vertebral arteries in the transverse foramina; drain into the brachiocephalic vein.',
                    type: 'text'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Carotid stenosis: atherosclerosis at bifurcation → TIA/stroke. CEA indicated for symptomatic stenosis ≥50% or asymptomatic stenosis ≥60–70% (AHA/ASA guidelines)',
                      'During CEA: protect hypoglossal nerve (CN XII) crossing the ICA/ECA, vagus nerve (CN X) in the sheath, superior laryngeal nerve, and ansa cervicalis',
                      'Carotid body tumour (paraganglioma): arises at bifurcation, splays ICA from ECA — "lyre sign" on angiography',
                      'Subclavian steal syndrome: proximal subclavian artery stenosis → retrograde flow in ipsilateral vertebral artery',
                      'IJV cannulation landmark: medial border of SCM at the level of the thyroid cartilage; right side preferred (direct path to SVC)'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Голова и шея получают артериальное кровоснабжение преимущественно от общих сонных артерий (ОСА) и позвоночных артерий. Венозный отток осуществляется главным образом через внутренние яремные вены (ВЯВ). Данная анатомия является основой каротидной эндартерэктомии (КЭА), центрального венозного доступа и хирургии сосудистых опухолей шеи.',
                    type: 'text'
                  },
                  {
                    title: 'Общие сонные артерии',
                    body: 'Правая ОСА отходит от плечеголовного ствола позади правого грудино-ключичного сустава; левая ОСА отходит непосредственно от дуги аорты (более длинный медиастинальный отрезок). Обе проходят в сонном влагалище совместно с ВЯВ (латерально) и блуждающим нервом (кзади).\n\nБифурцируют на уровне С3–С4 (верхний край щитовидного хряща) на наружную и внутреннюю сонные артерии. В области бифуркации: каротидный синус (барорецепторы, иннервируется ЧН IX — языкоглоточным нервом) контролирует артериальное давление; каротидное тело (хеморецепторы) реагирует на изменения O₂, CO₂ и pH.',
                    type: 'text'
                  },
                  {
                    title: 'Наружная сонная артерия — 8 ветвей (SALFOPMS)',
                    body: [
                      'Верхняя щитовидная артерия — щитовидная железа, гортань',
                      'Восходящая глоточная артерия — глотка, мозговые оболочки',
                      'Язычная артерия — язык, дно полости рта',
                      'Лицевая артерия — лицо; пересекает нижнюю челюсть у переднего края жевательной мышцы',
                      'Затылочная артерия — задняя волосистая часть головы',
                      'Задняя ушная артерия — ушная раковина, задняя часть скальпа',
                      'Верхнечелюстная артерия — глубокие структуры лица; её ветвь — средняя менингеальная артерия — кровоснабжает твёрдую мозговую оболочку',
                      'Поверхностная височная артерия — висок, скальп; пальпируется кпереди от козелка (конечная ветвь)',
                      'НСА располагается медиальнее ВСА в области бифуркации'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Внутренняя сонная артерия',
                    body: 'Ветви в шее отсутствуют. Сегменты: шейный → каменистый → рваного отверстия → пещеристый → клиновидный → глазничный → коммуникантный.\n\nПервая внутричерепная ветвь: глазная артерия (входит в глазницу через зрительный канал; кровоснабжает глаз). Делится на переднюю мозговую артерию (ПМА) и среднюю мозговую артерию (СМА). Кровоснабжает ипсилатеральное полушарие головного мозга и глаз. В области бифуркации располагается латеральнее и кзади от НСА.',
                    type: 'text'
                  },
                  {
                    title: 'Позвоночные артерии',
                    body: 'Первая ветвь подключичной артерии с обеих сторон. Входят в поперечные отверстия на уровне С6 (реже С7). Поднимаются через уровни С6–С1, затем входят в полость черепа через большое затылочное отверстие.\n\nОбе позвоночные артерии сливаются у нижнего края моста, образуя базилярную артерию, которая через задние мозговые артерии (ЗМА) продолжается к виллизиевому кругу. Основные ветви: ЗНМА (задняя нижняя мозжечковая артерия — от позвоночной артерии); ПНМА (передняя нижняя мозжечковая артерия — от базилярной артерии).',
                    type: 'text'
                  },
                  {
                    title: 'Венозный отток',
                    body: 'Внутренняя яремная вена (ВЯВ): продолжение сигмовидного синуса от яремного отверстия. Основной коллектор венозного оттока от головного мозга, лица и шеи. Располагается латеральнее ОСА в сонном влагалище. Притоки: лицевая, язычная, глоточные, верхняя и средняя щитовидные вены. Сливается с подключичной веной позади грудино-ключичного сустава, образуя плечеголовную вену. Правая ВЯВ предпочтительна для центрального венозного доступа — прямой путь к ВПВ.\n\nНаружная яремная вена (НЯВ): образована слиянием задней ветви занижнечелюстной вены и задней ушной вены. Пересекает ГКСМ поверхностно и впадает в подключичную вену. Используется клинически для оценки яремного венозного давления (ЯВД).\n\nПередняя яремная вена: дренирует переднюю поверхность шеи; соединяется с противоположной стороной через яремную венозную дугу.\n\nПозвоночные вены: сопровождают позвоночные артерии в поперечных отверстиях; впадают в плечеголовную вену.',
                    type: 'text'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'Стеноз сонной артерии: атеросклероз в области бифуркации → ТИА/инсульт. КЭА показана при симптоматическом стенозе ≥50% или бессимптомном стенозе ≥60–70% (рекомендации AHA/ASA)',
                      'При КЭА: защитить подъязычный нерв (ЧН XII), пересекающий ВСА/НСА, блуждающий нерв (ЧН X) в сонном влагалище, верхний гортанный нерв и шейную петлю',
                      'Параганглиома сонной артерии: расположена в области бифуркации, раздвигает ВСА и НСА — симптом «лиры» на ангиографии',
                      'Синдром подключичного обкрадывания: проксимальный стеноз подключичной артерии → ретроградный кровоток в ипсилатеральной позвоночной артерии',
                      'Катетеризация ВЯВ: ориентир — медиальный край ГКСМ на уровне щитовидного хряща; предпочтительна правая сторона (прямой путь к ВПВ)'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'arterial-head-neck-001',
                question_en: 'Right CCA origin?',
                question_ru: 'Откуда отходит правая ОСА?',
                answer_en: 'Brachiocephalic trunk',
                answer_ru: 'Плечеголовной ствол'
              },
              {
                id: 'arterial-head-neck-002',
                question_en: 'Left CCA origin?',
                question_ru: 'Откуда отходит левая ОСА?',
                answer_en: 'Aortic arch',
                answer_ru: 'Дуга аорты'
              },
              {
                id: 'arterial-head-neck-003',
                question_en: 'CCA bifurcation level?',
                question_ru: 'Уровень бифуркации ОСА?',
                answer_en: 'C3–C4',
                answer_ru: 'С3–С4'
              },
              {
                id: 'arterial-head-neck-004',
                question_en: 'Carotid sinus function?',
                question_ru: 'Функция каротидного синуса?',
                answer_en: 'Baroreceptor',
                answer_ru: 'Барорецептор'
              },
              {
                id: 'arterial-head-neck-005',
                question_en: 'Nerve innervating the carotid sinus?',
                question_ru: 'Нерв каротидного синуса?',
                answer_en: 'Glossopharyngeal nerve',
                answer_ru: 'Языкоглоточный нерв'
              },
              {
                id: 'arterial-head-neck-006',
                question_en: 'Carotid body function?',
                question_ru: 'Функция каротидного тела?',
                answer_en: 'Chemoreceptor',
                answer_ru: 'Хеморецептор'
              },
              {
                id: 'arterial-head-neck-007',
                question_en: 'Number of ECA branches?',
                question_ru: 'Количество ветвей НСА?',
                answer_en: 'Eight',
                answer_ru: 'Восемь'
              },
              {
                id: 'arterial-head-neck-008',
                question_en: 'ECA position relative to ICA at bifurcation?',
                question_ru: 'Положение НСА относительно ВСА в области бифуркации?',
                answer_en: 'Medial to ICA',
                answer_ru: 'Медиальнее ВСА'
              },
              {
                id: 'arterial-head-neck-011',
                question_en: 'ECA branch supplying the dura mater?',
                question_ru: 'Ветвь НСА, кровоснабжающая твёрдую мозговую оболочку?',
                answer_en: 'Middle meningeal artery',
                answer_ru: 'Средняя менингеальная артерия'
              },
              {
                id: 'arterial-head-neck-014',
                question_en: 'ICA branches in the neck?',
                question_ru: 'Ветви ВСА в шее?',
                answer_en: 'None',
                answer_ru: 'Отсутствуют'
              },
              {
                id: 'arterial-head-neck-015',
                question_en: 'First intracranial branch of the ICA?',
                question_ru: 'Первая внутричерепная ветвь ВСА?',
                answer_en: 'Ophthalmic artery',
                answer_ru: 'Глазная артерия'
              },
              {
                id: 'arterial-head-neck-016',
                question_en: 'ICA terminal branches?',
                question_ru: 'Конечные ветви ВСА?',
                answer_en: 'ACA and MCA',
                answer_ru: 'ПМА и СМА'
              },
              {
                id: 'arterial-head-neck-017',
                question_en: 'Vertebral artery origin?',
                question_ru: 'Откуда отходит позвоночная артерия?',
                answer_en: 'Subclavian artery',
                answer_ru: 'Подключичная артерия'
              },
              {
                id: 'arterial-head-neck-018',
                question_en: 'Vertebral artery enters transverse foramen at?',
                question_ru: 'Позвоночная артерия входит в поперечное отверстие на уровне?',
                answer_en: 'C6',
                answer_ru: 'С6'
              },
              {
                id: 'arterial-head-neck-019',
                question_en: 'Both vertebral arteries unite to form?',
                question_ru: 'Слияние обеих позвоночных артерий образует?',
                answer_en: 'Basilar artery',
                answer_ru: 'Базилярная артерия'
              },
              {
                id: 'arterial-head-neck-024',
                question_en: 'IJV position within the carotid sheath?',
                question_ru: 'Положение ВЯВ в сонном влагалище?',
                answer_en: 'Lateral to CCA',
                answer_ru: 'Латеральнее ОСА'
              },
              {
                id: 'arterial-head-neck-026',
                question_en: 'Preferred side for IJV cannulation?',
                question_ru: 'Предпочтительная сторона для катетеризации ВЯВ?',
                answer_en: 'Right side',
                answer_ru: 'Правая сторона'
              },
              {
                id: 'arterial-head-neck-029',
                question_en: 'CEA threshold for symptomatic stenosis?',
                question_ru: 'Порог КЭА при симптоматическом стенозе?',
                answer_en: '≥50%',
                answer_ru: '≥50%'
              },
              {
                id: 'arterial-head-neck-030',
                question_en: 'CEA threshold for asymptomatic stenosis?',
                question_ru: 'Порог КЭА при бессимптомном стенозе?',
                answer_en: '≥60–70%',
                answer_ru: '≥60–70%'
              },
              {
                id: 'arterial-head-neck-031',
                question_en: 'Cranial nerve crossing ICA/ECA during CEA?',
                question_ru: 'Черепной нерв, пересекающий ВСА/НСА при КЭА?',
                answer_en: 'Hypoglossal (CN XII)',
                answer_ru: 'Подъязычный (ЧН XII)'
              }
            ]
          },

          // ── Topic: Vascular Anatomy of the Thorax ──
          {
            slug: 'vascular-anatomy-thorax',
            title_en: 'Vascular Anatomy of the Thorax',
            title_ru: 'Сосудистая анатомия грудной клетки',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The thoracic vasculature consists of the thoracic aorta and its branches, the superior and inferior venae cavae, the azygos venous system, and the thoracic duct. This anatomy underpins surgery for thoracic aortic aneurysm (TAA), aortic dissection, coarctation repair, traumatic aortic injury (TAI), and mediastinal tumour resection.',
                    type: 'text'
                  },
                  {
                    title: 'Thoracic Aorta',
                    body: 'Ascending aorta: from the aortic valve annulus to the origin of the brachiocephalic trunk (~5 cm); normal diameter ≤3.5 cm.\n\nAortic arch: three branches — brachiocephalic (innominate) trunk, left common carotid artery, and left subclavian artery. The aortic isthmus is the segment immediately distal to the left subclavian artery, just proximal to the ligamentum arteriosum. It is the most common site of traumatic aortic injury (deceleration mechanism) and the typical site of aortic coarctation.\n\nDescending thoracic aorta: begins at T4 (sternal angle / angle of Louis) and passes through the aortic hiatus at T12 with the thoracic duct and azygos vein. Along its course it gives off posterior intercostal arteries, bronchial arteries, and oesophageal branches. The artery of Adamkiewicz (arteria radicularis magna) — the dominant anterior radicular artery, usually arising T8–L2, most commonly T9–T11 on the left — supplies the anterior 2/3 of the spinal cord via the anterior spinal artery; it is the critical vessel at risk during thoracoabdominal aortic surgery.',
                    type: 'text'
                  },
                  {
                    title: 'Aortic Arch Branches',
                    body: [
                      'Brachiocephalic (innominate) trunk: first and largest branch; divides behind the right sternoclavicular joint into the right common carotid artery and right subclavian artery',
                      'Left common carotid artery: second branch; arises directly from the arch; longer mediastinal course than the right',
                      'Left subclavian artery: third branch; gives rise to the left vertebral artery',
                      'Left recurrent laryngeal nerve (RLN) loops around the ligamentum arteriosum (remnant of the ductus arteriosus) at the level of the aortic arch; at risk in mediastinal surgery and Type B dissection repair'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Superior Vena Cava & Tributaries',
                    body: 'The SVC is formed by the junction of the left and right brachiocephalic veins behind the right first costal cartilage. The left brachiocephalic vein (~6 cm) is longer than the right (~2–3 cm) and crosses the midline anterior to the aortic arch. The SVC enters the right atrium at T3.\n\nKey tributaries: azygos vein (arches over the right main bronchus at T4 and enters the SVC posteriorly), internal thoracic veins, and pericardiophrenic veins.',
                    type: 'text'
                  },
                  {
                    title: 'Azygos System & Thoracic Duct',
                    body: [
                      'Azygos vein: right-sided; formed from the right ascending lumbar and right subcostal veins; ascends along the right side of the vertebral column, arches over the right main bronchus at T4, drains into the SVC',
                      'Hemiazygos vein: left-sided, drains T9–T12 intercostal spaces; crosses midline at T9 to drain into the azygos',
                      'Accessory hemiazygos vein: left-sided, drains T5–T8 spaces; drains into the azygos or hemiazygos',
                      'Thoracic duct: originates from the cisterna chyli at L2; enters the thorax via the aortic hiatus at T12; ascends in the posterior mediastinum; crosses to the left at ~T5; drains into the left venous angle (junction of left IJV and left subclavian vein)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Coarctation of the aorta: juxtaductal (at or near the aortic isthmus, adjacent to the ligamentum arteriosum); repair by resection and end-to-end anastomosis, subclavian flap, or stent (ESC guidelines)',
                      'Traumatic aortic injury (TAI): most common site is the isthmus (deceleration/shear injury); TEVAR is first-line for most cases (AAST/SVS guidelines)',
                      'Thoracoabdominal aortic surgery: Adamkiewicz artery at risk → anterior spinal syndrome (paraplegia); protective measures: distal aortic perfusion, CSF drainage, hypothermia',
                      'Thoracic duct injury (left neck dissection, mediastinal surgery) → chylothorax; management: low-fat diet ± octreotide; surgical ligation if refractory'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Сосудистая система грудной клетки включает грудную аорту с ветвями, верхнюю и нижнюю полые вены, непарно-полунепарную венозную систему и грудной проток. Эта анатомия лежит в основе хирургии аневризм грудной аорты (АГА), расслоения аорты, коррекции коарктации, травматических повреждений аорты (ТПА) и резекции опухолей средостения.',
                    type: 'text'
                  },
                  {
                    title: 'Грудная аорта',
                    body: 'Восходящая аорта: от фиброзного кольца аортального клапана до начала плечеголовного ствола (~5 см); нормальный диаметр ≤3,5 см.\n\nДуга аорты: три ветви — плечеголовной (безымянный) ствол, левая общая сонная артерия и левая подключичная артерия. Аортальный перешеек — участок дуги аорты сразу дистальнее левой подключичной артерии, проксимальнее артериальной связки. Это наиболее частое место травматического повреждения аорты (механизм резкого замедления) и типичная локализация коарктации.\n\nНисходящая грудная аорта: начинается на уровне T4 (угол Людовика) и проходит через аортальное отверстие диафрагмы на уровне T12 вместе с грудным протоком и непарной веной. На своём протяжении она отдаёт задние межрёберные артерии, бронхиальные и пищеводные ветви. Артерия Адамкевича (arteria radicularis magna) — доминирующая передняя корешковая артерия, обычно отходящая от уровней T8–L2, чаще всего T9–T11 слева — кровоснабжает передние 2/3 спинного мозга через переднюю спинальную артерию; это критически важный сосуд, уязвимый при торакоабдоминальной хирургии аорты.',
                    type: 'text'
                  },
                  {
                    title: 'Ветви дуги аорты',
                    body: [
                      'Плечеголовной (безымянный) ствол: первая и наиболее крупная ветвь; делится позади правого грудино-ключичного сустава на правую общую сонную артерию и правую подключичную артерию',
                      'Левая общая сонная артерия: вторая ветвь; отходит непосредственно от дуги; медиастинальный отрезок длиннее, чем у правой',
                      'Левая подключичная артерия: третья ветвь; является источником левой позвоночной артерии',
                      'Левый возвратный гортанный нерв (ВГН) огибает артериальную связку (остаток артериального протока) на уровне дуги аорты; подвергается риску при операциях на средостении и при коррекции расслоения типа В'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Верхняя полая вена и её притоки',
                    body: 'ВПВ образуется при слиянии левой и правой плечеголовных вен позади хряща первого правого ребра. Левая плечеголовная вена (~6 см) длиннее правой (~2–3 см) и пересекает среднюю линию кпереди от дуги аорты. ВПВ впадает в правое предсердие на уровне T3.\n\nОсновные притоки: непарная вена (огибает правый главный бронх на уровне T4 и впадает в ВПВ сзади), внутренние грудные вены и перикардодиафрагмальные вены.',
                    type: 'text'
                  },
                  {
                    title: 'Непарно-полунепарная система и грудной проток',
                    body: [
                      'Непарная вена: правосторонняя; образуется из правой восходящей поясничной и правой подрёберной вен; поднимается вдоль правой стороны позвоночного столба, огибает правый главный бронх на уровне T4, впадает в ВПВ',
                      'Полунепарная вена: левосторонняя, дренирует межрёберные промежутки T9–T12; пересекает среднюю линию на уровне T9 и впадает в непарную вену',
                      'Добавочная полунепарная вена: левосторонняя, дренирует промежутки T5–T8; впадает в непарную или полунепарную вену',
                      'Грудной проток: начинается от цистерны грудного протока на уровне L2; входит в грудную клетку через аортальное отверстие на уровне T12; поднимается в заднем средостении; переходит влево приблизительно на уровне T5; впадает в левый венозный угол (место слияния левой ВЯВ и левой подключичной вены)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'Коарктация аорты: юкстадуктальная локализация (на уровне аортального перешейка, рядом с артериальной связкой); коррекция: резекция с анастомозом конец-в-конец, лоскут из подключичной артерии или стентирование (рекомендации ESC)',
                      'Травматическое повреждение аорты (ТПА): наиболее частое место — перешеек (механизм сдвига при резком замедлении); TEVAR — метод выбора в большинстве случаев (рекомендации AAST/SVS)',
                      'Торакоабдоминальная хирургия аорты: риск повреждения артерии Адамкевича → передний спинальный синдром (параплегия); защитные меры: дистальная перфузия аорты, дренирование ЦСЖ, гипотермия',
                      'Повреждение грудного протока (диссекция на шее слева, операции на средостении) → хилоторакс; лечение: жиронеограниченная диета ± октреотид; хирургическое лигирование при неэффективности'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'thoracic-vascular-001',
                question_en: 'Branches of the aortic arch?',
                question_ru: 'Сколько ветвей у дуги аорты?',
                answer_en: 'Three',
                answer_ru: 'Три'
              },
              {
                id: 'thoracic-vascular-002',
                question_en: 'First aortic arch branch?',
                question_ru: 'Первая ветвь дуги аорты?',
                answer_en: 'Brachiocephalic trunk',
                answer_ru: 'Плечеголовной ствол'
              },
              {
                id: 'thoracic-vascular-003',
                question_en: 'Brachiocephalic trunk divides into?',
                question_ru: 'На что делится плечеголовной ствол?',
                answer_en: 'R. CCA, subclavian',
                answer_ru: 'Пр. ОСА, подключичная'
              },
              {
                id: 'thoracic-vascular-004',
                question_en: 'Third aortic arch branch?',
                question_ru: 'Третья ветвь дуги аорты?',
                answer_en: 'Left subclavian artery',
                answer_ru: 'Левая подключичная артерия'
              },
              {
                id: 'thoracic-vascular-005',
                question_en: 'Aortic isthmus location?',
                question_ru: 'Расположение аортального перешейка?',
                answer_en: 'Distal to left subclavian',
                answer_ru: 'Дистальнее левой подключичной'
              },
              {
                id: 'thoracic-vascular-006',
                question_en: 'Most common site of traumatic aortic injury?',
                question_ru: 'Наиболее частое место травматического разрыва аорты?',
                answer_en: 'Aortic isthmus',
                answer_ru: 'Аортальный перешеек'
              },
              {
                id: 'thoracic-vascular-007',
                question_en: 'Descending aorta begins at vertebral level?',
                question_ru: 'Уровень начала нисходящей аорты?',
                answer_en: 'T4',
                answer_ru: 'T4'
              },
              {
                id: 'thoracic-vascular-008',
                question_en: 'Aortic hiatus vertebral level?',
                question_ru: 'Уровень аортального отверстия диафрагмы?',
                answer_en: 'T12',
                answer_ru: 'T12'
              },
              {
                id: 'thoracic-vascular-009',
                question_en: 'Adamkiewicz artery typical vertebral level?',
                question_ru: 'Типичный уровень артерии Адамкевича?',
                answer_en: 'T8–L2',
                answer_ru: 'T8–L2'
              },
              {
                id: 'thoracic-vascular-010',
                question_en: 'Adamkiewicz artery supplies?',
                question_ru: 'Что кровоснабжает артерия Адамкевича?',
                answer_en: 'Anterior spinal cord',
                answer_ru: 'Передний спинной мозг'
              },
              {
                id: 'thoracic-vascular-011',
                question_en: 'Adamkiewicz artery injury causes?',
                question_ru: 'Повреждение артерии Адамкевича вызывает?',
                answer_en: 'Paraplegia',
                answer_ru: 'Параплегию'
              },
              {
                id: 'thoracic-vascular-012',
                question_en: 'SVC formed by?',
                question_ru: 'Из чего образована ВПВ?',
                answer_en: 'Bilateral brachiocephalic veins',
                answer_ru: 'Плечеголовные вены'
              },
              {
                id: 'thoracic-vascular-013',
                question_en: 'Longer brachiocephalic vein?',
                question_ru: 'Какая плечеголовная вена длиннее?',
                answer_en: 'Left',
                answer_ru: 'Левая'
              },
              {
                id: 'thoracic-vascular-014',
                question_en: 'Azygos vein drains into?',
                question_ru: 'Куда впадает непарная вена?',
                answer_en: 'SVC',
                answer_ru: 'ВПВ'
              },
              {
                id: 'thoracic-vascular-015',
                question_en: 'Azygos vein arches over right main bronchus at?',
                question_ru: 'Непарная вена огибает правый главный бронх на уровне?',
                answer_en: 'T4',
                answer_ru: 'T4'
              },
              {
                id: 'thoracic-vascular-016',
                question_en: 'Thoracic duct drains into?',
                question_ru: 'Куда впадает грудной проток?',
                answer_en: 'Left venous angle',
                answer_ru: 'Левый венозный угол'
              },
              {
                id: 'thoracic-vascular-017',
                question_en: 'Thoracic duct enters thorax via?',
                question_ru: 'Грудной проток входит в грудную клетку через?',
                answer_en: 'Aortic hiatus',
                answer_ru: 'Аортальное отверстие'
              },
              {
                id: 'thoracic-vascular-018',
                question_en: 'Left RLN loops around?',
                question_ru: 'Вокруг чего огибает левый возвратный гортанный нерв?',
                answer_en: 'Ligamentum arteriosum',
                answer_ru: 'Артериальная связка'
              },
              {
                id: 'thoracic-vascular-019',
                question_en: 'Ligamentum arteriosum is remnant of?',
                question_ru: 'Артериальная связка — остаток чего?',
                answer_en: 'Ductus arteriosus',
                answer_ru: 'Артериального протока'
              },
              {
                id: 'thoracic-vascular-020',
                question_en: 'Typical site of aortic coarctation?',
                question_ru: 'Типичное место коарктации аорты?',
                answer_en: 'Aortic isthmus',
                answer_ru: 'Аортальный перешеек'
              }
            ]
          },

          // ── Topic: Vascular Anatomy of the Upper Limb ──
          {
            slug: 'vascular-anatomy-upper-limb',
            title_en: 'Vascular Anatomy of the Upper Limb',
            title_ru: 'Сосудистая анатомия верхней конечности',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The upper limb receives arterial supply from the subclavian artery, which continues as the axillary artery, then the brachial artery. The brachial bifurcates into the radial and ulnar arteries at the cubital fossa. Venous drainage is via deep veins (paired venae comitantes) and superficial veins (cephalic, basilic). Surgical relevance: upper limb arterial trauma, thoracic outlet syndrome (TOS), dialysis access (AVF), and radial artery harvest as a CABG conduit.',
                    type: 'text'
                  },
                  {
                    title: 'Subclavian & Axillary Artery',
                    body: 'The right subclavian artery arises from the brachiocephalic trunk; the left arises directly from the aortic arch. The scalenus anterior muscle divides it into three parts.\n\nPart 1 (medial to scalenus anterior) — three branches: vertebral artery, internal thoracic artery, thyrocervical trunk. Part 2 (posterior) — costocervical trunk. Part 3 (lateral) — dorsal scapular artery. The subclavian becomes the axillary artery at the lateral border of the first rib.\n\nThe axillary artery is divided into three parts by pectoralis minor. Part 1: superior thoracic artery. Part 2: thoracoacromial trunk, lateral thoracic artery. Part 3: subscapular artery, anterior and posterior circumflex humeral arteries. It becomes the brachial artery at the inferior border of teres major.',
                    type: 'text'
                  },
                  {
                    title: 'Brachial Artery',
                    body: 'Continuation of the axillary artery from the inferior border of teres major. It lies medial to the biceps tendon in the antecubital fossa — the standard site for blood pressure measurement and arterial cannulation.\n\nFirst major branch: deep brachial artery (profunda brachii), which accompanies the radial nerve in the spiral groove of the humerus and supplies the posterior compartment.\n\nThe brachial artery bifurcates at the level of the radial neck (cubital fossa) into the radial artery (lateral) and ulnar artery (medial).',
                    type: 'text'
                  },
                  {
                    title: 'Forearm & Hand Arteries',
                    body: [
                      'Radial artery: lateral forearm; enters the hand via the anatomical snuff-box; forms the deep palmar arch (predominantly radial); terminal branch is the princeps pollicis artery',
                      'Ulnar artery: medial forearm; gives off the common interosseous artery; passes through Guyon\'s canal at the wrist; forms the superficial palmar arch (predominantly ulnar)',
                      'Superficial palmar arch: predominantly ulnar; gives off the common palmar digital arteries supplying fingers 2–5',
                      'Deep palmar arch: predominantly radial; lies on the metacarpal bases; gives off palmar metacarpal arteries'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Venous Drainage',
                    body: [
                      'Deep veins: paired venae comitantes accompany the arteries and drain into the axillary vein → subclavian vein',
                      'Cephalic vein: arises from the dorsal venous arch; runs along the lateral forearm and arm; pierces the clavipectoral fascia at the deltopectoral groove to empty into the axillary vein',
                      'Basilic vein: medial forearm and arm; pierces the deep fascia at mid-arm; joins the brachial venae comitantes to form the axillary vein',
                      'Median cubital vein: connects the cephalic and basilic veins across the antecubital fossa; preferred site for venepuncture and peripheral IV cannulation'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Thoracic outlet syndrome (TOS): compression of the subclavian artery/vein or brachial plexus between the clavicle and first rib, or by a cervical rib; vascular TOS may cause subclavian artery aneurysm or thromboembolic upper limb ischaemia',
                      'Radial artery CABG conduit: second-line arterial graft after the left internal thoracic artery; Allen\'s test mandatory pre-harvest to confirm adequate ulnar collateral circulation',
                      'Dialysis access — preferred sites (KDOQI): (1) radiocephalic AVF at the wrist (Brescia-Cimino), (2) brachiocephalic AVF at the elbow, (3) brachiobasilic AVF with transposition',
                      'Brachial artery injury: supracondylar humerus fracture is the most common cause in children; risk of Volkmann\'s ischaemic contracture if forearm compartment syndrome is missed',
                      'Radial arterial line: placed at the wrist; modified Allen\'s test confirms ulnar collateral patency before insertion'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Верхняя конечность получает артериальное кровоснабжение от подключичной артерии, которая продолжается как подмышечная, а затем как плечевая артерия. Плечевая артерия делится на лучевую и локтевую в локтевой ямке. Венозный отток осуществляется через глубокие вены (парные вены-спутницы) и поверхностные вены (головная, основная). Хирургическое значение: травмы артерий верхней конечности, синдром грудного выхода (СГВ), формирование артериовенозной фистулы (АВФ) для гемодиализа и забор лучевой артерии как кондуита при АКШ.',
                    type: 'text'
                  },
                  {
                    title: 'Подключичная и подмышечная артерии',
                    body: 'Правая подключичная артерия отходит от плечеголовного ствола; левая — непосредственно от дуги аорты. Передняя лестничная мышца делит её на три части.\n\nЧасть 1 (медиальнее передней лестничной мышцы) — три ветви: позвоночная артерия, внутренняя грудная артерия, щито-шейный ствол. Часть 2 (позади) — рёберно-шейный ствол. Часть 3 (латеральнее) — дорсальная артерия лопатки. На уровне наружного края первого ребра подключичная артерия переходит в подмышечную.\n\nМалая грудная мышца делит подмышечную артерию на три части. Часть 1: верхняя грудная артерия. Часть 2: грудо-акромиальный ствол, латеральная грудная артерия. Часть 3: подлопаточная артерия, передняя и задняя артерии, огибающие плечевую кость. На нижнем крае большой круглой мышцы подмышечная артерия переходит в плечевую.',
                    type: 'text'
                  },
                  {
                    title: 'Плечевая артерия',
                    body: 'Продолжение подмышечной артерии от нижнего края большой круглой мышцы. Располагается медиальнее сухожилия двуглавой мышцы в локтевой ямке — стандартное место измерения артериального давления и катетеризации артерии.\n\nПервая крупная ветвь: глубокая артерия плеча (a. profunda brachii), которая сопровождает лучевой нерв в спиральном канале плечевой кости и кровоснабжает заднее фасциальное ложе.\n\nПлечевая артерия делится на уровне шейки лучевой кости (локтевая ямка) на лучевую артерию (латерально) и локтевую артерию (медиально).',
                    type: 'text'
                  },
                  {
                    title: 'Артерии предплечья и кисти',
                    body: [
                      'Лучевая артерия: латеральная поверхность предплечья; входит в кисть через анатомическую табакерку; формирует глубокую ладонную дугу (преимущественно лучевую); конечная ветвь — собственная артерия большого пальца',
                      'Локтевая артерия: медиальная поверхность предплечья; отдаёт общую межкостную артерию; проходит через канал Гийона у запястья; формирует поверхностную ладонную дугу (преимущественно локтевую)',
                      'Поверхностная ладонная дуга: преимущественно локтевая; отдаёт общие ладонные пальцевые артерии, кровоснабжающие II–V пальцы',
                      'Глубокая ладонная дуга: преимущественно лучевая; располагается на основаниях пястных костей; отдаёт ладонные пястные артерии'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Венозный отток',
                    body: [
                      'Глубокие вены: парные вены-спутницы сопровождают артерии и впадают в подмышечную вену → подключичную вену',
                      'Головная вена (v. cephalica): начинается от тыльной венозной дуги кисти; проходит по латеральной поверхности предплечья и плеча; прободает ключично-грудную фасцию в дельтопекторальной борозде и впадает в подмышечную вену',
                      'Основная вена (v. basilica): медиальная поверхность предплечья и плеча; прободает глубокую фасцию в средней трети плеча; сливается с плечевыми венами-спутницами, образуя подмышечную вену',
                      'Срединная вена локтя (v. mediana cubiti): соединяет головную и основную вены в области локтевой ямки; предпочтительное место для венепункции и постановки периферического венозного катетера'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'Синдром грудного выхода (СГВ): компрессия подключичной артерии/вены или плечевого сплетения между ключицей и первым ребром либо шейным ребром; сосудистый СГВ может вызвать аневризму подключичной артерии или тромбоэмболическую ишемию верхней конечности',
                      'Лучевая артерия как кондуит для АКШ: второй по предпочтению артериальный кондуит после левой внутренней грудной артерии; проба Аллена обязательна перед забором для подтверждения коллатерального кровоснабжения от локтевой артерии',
                      'Доступ для гемодиализа — предпочтительные места (KDOQI): (1) лучево-головная АВФ на запястье (Brescia–Cimino), (2) плечо-головная АВФ на локте, (3) плечо-основная АВФ с транспозицией',
                      'Повреждение плечевой артерии: надмыщелковый перелом плечевой кости — наиболее частая причина у детей; риск ишемической контрактуры Фолькмана при пропущенном компартмент-синдроме предплечья',
                      'Артериальный катетер лучевой артерии: устанавливается на запястье; модифицированная проба Аллена подтверждает проходимость коллатерального кровоснабжения от локтевой артерии перед катетеризацией'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'upper-limb-vascular-001',
                question_en: 'Right subclavian artery origin?',
                question_ru: 'Откуда отходит правая подключичная артерия?',
                answer_en: 'Brachiocephalic trunk',
                answer_ru: 'Плечеголовной ствол'
              },
              {
                id: 'upper-limb-vascular-002',
                question_en: 'Left subclavian artery origin?',
                question_ru: 'Откуда отходит левая подключичная артерия?',
                answer_en: 'Aortic arch',
                answer_ru: 'Дуга аорты'
              },
              {
                id: 'upper-limb-vascular-003',
                question_en: 'Muscle dividing subclavian artery into 3 parts?',
                question_ru: 'Мышца, делящая подключичную артерию на 3 части?',
                answer_en: 'Scalenus anterior',
                answer_ru: 'Передняя лестничная'
              },
              {
                id: 'upper-limb-vascular-004',
                question_en: 'Subclavian becomes axillary artery at?',
                question_ru: 'Подключичная переходит в подмышечную артерию у?',
                answer_en: 'Lateral border, 1st rib',
                answer_ru: 'Наружного края I ребра'
              },
              {
                id: 'upper-limb-vascular-005',
                question_en: 'Muscle dividing axillary artery into 3 parts?',
                question_ru: 'Мышца, делящая подмышечную артерию на 3 части?',
                answer_en: 'Pectoralis minor',
                answer_ru: 'Малая грудная мышца'
              },
              {
                id: 'upper-limb-vascular-006',
                question_en: 'Axillary becomes brachial artery at?',
                question_ru: 'Подмышечная переходит в плечевую артерию у?',
                answer_en: 'Inferior border, teres major',
                answer_ru: 'Нижнего края большой круглой'
              },
              {
                id: 'upper-limb-vascular-007',
                question_en: 'First major branch of brachial artery?',
                question_ru: 'Первая крупная ветвь плечевой артерии?',
                answer_en: 'Profunda brachii',
                answer_ru: 'Глубокая артерия плеча'
              },
              {
                id: 'upper-limb-vascular-008',
                question_en: 'Nerve accompanying profunda brachii in spiral groove?',
                question_ru: 'Нерв, сопровождающий глубокую артерию плеча в спиральном канале?',
                answer_en: 'Radial nerve',
                answer_ru: 'Лучевой нерв'
              },
              {
                id: 'upper-limb-vascular-009',
                question_en: 'Brachial artery bifurcates at?',
                question_ru: 'Уровень бифуркации плечевой артерии?',
                answer_en: 'Cubital fossa',
                answer_ru: 'Локтевая ямка'
              },
              {
                id: 'upper-limb-vascular-010',
                question_en: 'Radial artery enters hand via?',
                question_ru: 'Лучевая артерия входит в кисть через?',
                answer_en: 'Anatomical snuff-box',
                answer_ru: 'Анатомическую табакерку'
              },
              {
                id: 'upper-limb-vascular-011',
                question_en: 'Ulnar artery passes through at wrist?',
                question_ru: 'Локтевая артерия проходит у запястья через?',
                answer_en: "Guyon's canal",
                answer_ru: 'Канал Гийона'
              },
              {
                id: 'upper-limb-vascular-012',
                question_en: 'Predominantly radial palmar arch?',
                question_ru: 'Преимущественно лучевая ладонная дуга?',
                answer_en: 'Deep palmar arch',
                answer_ru: 'Глубокая ладонная дуга'
              },
              {
                id: 'upper-limb-vascular-013',
                question_en: 'Predominantly ulnar palmar arch?',
                question_ru: 'Преимущественно локтевая ладонная дуга?',
                answer_en: 'Superficial palmar arch',
                answer_ru: 'Поверхностная ладонная дуга'
              },
              {
                id: 'upper-limb-vascular-014',
                question_en: 'Cephalic vein drains into?',
                question_ru: 'Куда впадает головная вена?',
                answer_en: 'Axillary vein',
                answer_ru: 'Подмышечная вена'
              },
              {
                id: 'upper-limb-vascular-015',
                question_en: 'Basilic vein joins to form?',
                question_ru: 'Основная вена сливается, образуя?',
                answer_en: 'Axillary vein',
                answer_ru: 'Подмышечную вену'
              },
              {
                id: 'upper-limb-vascular-016',
                question_en: 'Best vein for antecubital venepuncture?',
                question_ru: 'Предпочтительная вена для венепункции в локтевой ямке?',
                answer_en: 'Median cubital vein',
                answer_ru: 'Срединная вена локтя'
              },
              {
                id: 'upper-limb-vascular-017',
                question_en: 'Pre-radial artery harvest test?',
                question_ru: 'Проба перед забором лучевой артерии?',
                answer_en: "Allen's test",
                answer_ru: 'Проба Аллена'
              },
              {
                id: 'upper-limb-vascular-018',
                question_en: 'First-choice AVF site (KDOQI)?',
                question_ru: 'Приоритетное место АВФ по KDOQI?',
                answer_en: 'Radiocephalic, wrist',
                answer_ru: 'Лучево-головная, запястье'
              },
              {
                id: 'upper-limb-vascular-019',
                question_en: 'Most common cause of brachial artery injury in children?',
                question_ru: 'Наиболее частая причина повреждения плечевой артерии у детей?',
                answer_en: 'Supracondylar fracture',
                answer_ru: 'Надмыщелковый перелом'
              },
              {
                id: 'upper-limb-vascular-020',
                question_en: 'Missed brachial artery injury risks?',
                question_ru: 'Риск при пропущенном повреждении плечевой артерии?',
                answer_en: "Volkmann's contracture",
                answer_ru: 'Контрактура Фолькмана'
              }
            ]
          },

          // ── Topic: Vascular Anatomy of the Abdomen and Pelvis ──
          {
            slug: 'vascular-anatomy-abdomen-pelvis',
            title_en: 'Vascular Anatomy of the Abdomen and Pelvis',
            title_ru: 'Сосудистая анатомия живота и таза',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The abdominal aorta enters the abdomen at T12 via the aortic hiatus and bifurcates at L4 into the common iliac arteries. It supplies the abdominal viscera via unpaired anterior branches (coeliac trunk, SMA, IMA) and paired lateral branches (renal, gonadal, lumbar). The IVC forms at L5, lies to the right of the aorta, and drains through the caval hiatus at T8. The portal venous system drains the GI tract to the liver. Key surgical relevance: AAA repair, renal artery stenosis, mesenteric ischaemia, and pelvic vascular surgery.',
                    type: 'text'
                  },
                  {
                    title: 'Abdominal Aorta & Branches',
                    body: 'The abdominal aorta enters at T12 and lies just left of midline on the vertebral bodies. It bifurcates at L4 into the right and left common iliac arteries; the left common iliac vein crosses behind the right common iliac artery at this level.\n\nUnpaired visceral branches (anterior): coeliac trunk (T12), superior mesenteric artery / SMA (L1), inferior mesenteric artery / IMA (L3).\n\nPaired branches: inferior phrenic arteries (T12), middle suprarenal arteries, renal arteries (L1–L2), gonadal arteries — testicular/ovarian (L2), and four pairs of lumbar arteries.',
                    type: 'text'
                  },
                  {
                    title: 'Visceral Branches',
                    body: [
                      'Coeliac trunk (T12): trifurcates into left gastric, splenic, and common hepatic arteries; supplies the foregut (lower oesophagus to proximal duodenum / ampulla of Vater)',
                      'Superior mesenteric artery — SMA (L1): arises behind the neck of the pancreas; supplies the midgut (distal duodenum to the mid-transverse colon); the superior mesenteric vein lies to its right',
                      'Inferior mesenteric artery — IMA (L3): supplies the hindgut (left transverse colon to upper rectum); the marginal artery of Drummond provides the SMA–IMA anastomotic connection along the mesenteric border of the colon',
                      'Renal arteries (L1–L2): the right renal artery is longer and passes posterior to the IVC and right renal vein; accessory renal arteries are present in ~25% and must be identified before aortic surgery or nephrectomy'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Iliac Arteries',
                    body: 'The common iliac arteries (L4–L5) each divide into external and internal iliac arteries anterior to the sacroiliac joint.\n\nExternal iliac artery: continues beneath the inguinal ligament at the mid-inguinal point (midpoint between ASIS and pubic symphysis) to become the common femoral artery. Before the ligament it gives off the inferior epigastric and deep circumflex iliac arteries.\n\nInternal iliac artery (hypogastric): anterior division supplies pelvic organs (superior vesical, uterine or inferior vesical, middle rectal, internal pudendal, inferior gluteal); posterior division supplies the gluteal region and posterior pelvic wall (superior gluteal, iliolumbar, lateral sacral arteries).',
                    type: 'text'
                  },
                  {
                    title: 'IVC & Portal System',
                    body: [
                      'IVC: formed at L5 by the union of the right and left common iliac veins; lies to the right of the aorta; receives renal, hepatic, and lumbar veins; passes through the caval hiatus at T8 to enter the right atrium',
                      'Left renal vein: longer than the right; crosses the aorta anteriorly; receives the left gonadal, left suprarenal, and left inferior phrenic veins; compressed between aorta and SMA in nutcracker syndrome',
                      'Portal vein: formed behind the neck of the pancreas at L2 by the union of the superior mesenteric vein (SMV) and the splenic vein; the inferior mesenteric vein typically drains into the splenic vein',
                      'Portosystemic anastomoses: oesophageal (left gastric ↔ azygos), rectal (superior rectal ↔ middle/inferior rectal), paraumbilical (portal ↔ epigastric), retroperitoneal (colic ↔ renal/lumbar veins)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'AAA: aortic diameter ≥3.0 cm = aneurysm; elective repair threshold ≥5.5 cm in men, ≥5.0 cm in women, or growth >1.0 cm/year (SVS/ESVS guidelines); EVAR preferred over open repair in eligible anatomy',
                      'Renal artery stenosis: atherosclerotic (ostial/proximal, elderly) vs fibromuscular dysplasia (FMD — distal/mid artery, beaded appearance, young women); FMD treated by percutaneous transluminal angioplasty (PTA)',
                      'Acute mesenteric ischaemia: SMA embolus is the most common cause (~50%); presents with sudden severe periumbilical pain disproportionate to examination; CT angiography is diagnostic; revascularisation ± bowel resection',
                      'May-Thurner (Cockett) syndrome: left common iliac vein compressed by the overlying right common iliac artery → left iliofemoral DVT; treated by catheter-directed thrombolysis + iliac vein stenting',
                      'Leriche syndrome: aortic bifurcation occlusion (atherosclerosis) → bilateral lower limb claudication, absent femoral pulses, and erectile dysfunction in men'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Брюшная аорта входит в брюшную полость на уровне T12 через аортальное отверстие диафрагмы и делится на уровне L4 на общие подвздошные артерии. Она кровоснабжает органы брюшной полости через непарные передние ветви (чревный ствол, ВБА, НБА) и парные боковые ветви (почечные, гонадные, поясничные). НПВ образуется на уровне L5, располагается справа от аорты и проходит через кавальное отверстие диафрагмы на уровне T8. Система воротной вены дренирует желудочно-кишечный тракт в печень. Ключевое хирургическое значение: коррекция аневризмы аорты, стеноз почечных артерий, мезентериальная ишемия и операции на сосудах таза.',
                    type: 'text'
                  },
                  {
                    title: 'Брюшная аорта и её ветви',
                    body: 'Брюшная аорта входит на уровне T12 и располагается несколько левее средней линии на телах позвонков. Делится на уровне L4 на правую и левую общие подвздошные артерии; на этом уровне левая общая подвздошная вена пересекает правую общую подвздошную артерию сзади.\n\nНепарные висцеральные ветви (передние): чревный ствол (T12), верхняя брыжеечная артерия / ВБА (L1), нижняя брыжеечная артерия / НБА (L3).\n\nПарные ветви: нижние диафрагмальные артерии (T12), средние надпочечниковые артерии, почечные артерии (L1–L2), гонадные артерии — яичковые/яичниковые (L2) и четыре пары поясничных артерий.',
                    type: 'text'
                  },
                  {
                    title: 'Висцеральные ветви',
                    body: [
                      'Чревный ствол (T12): трифуркируется на левую желудочную, селезёночную и общую печёночную артерии; кровоснабжает переднюю кишку (нижний отдел пищевода до проксимальной части двенадцатиперстной кишки / ампулы Фатера)',
                      'Верхняя брыжеечная артерия — ВБА (L1): отходит позади шейки поджелудочной железы; кровоснабжает среднюю кишку (от дистального отдела двенадцатиперстной кишки до середины поперечной ободочной кишки); верхняя брыжеечная вена располагается справа от неё',
                      'Нижняя брыжеечная артерия — НБА (L3): кровоснабжает заднюю кишку (левая поперечная ободочная кишка до верхней трети прямой кишки); краевая артерия Дрюммона обеспечивает анастомотическое соединение ВБА и НБА вдоль брыжеечного края толстой кишки',
                      'Почечные артерии (L1–L2): правая почечная артерия длиннее и проходит позади НПВ и правой почечной вены; добавочные почечные артерии встречаются примерно в 25% случаев и должны быть выявлены до операций на аорте или нефрэктомии'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Подвздошные артерии',
                    body: 'Общие подвздошные артерии (L4–L5) делятся на наружную и внутреннюю подвздошные артерии кпереди от крестцово-подвздошного сустава.\n\nНаружная подвздошная артерия: проходит под паховой связкой на уровне середины паховой связки (midpoint between ASIS and pubic symphysis) и переходит в общую бедренную артерию. Непосредственно перед паховой связкой отдаёт нижнюю надчревную и глубокую огибающую подвздошную артерии.\n\nВнутренняя подвздошная артерия (подчревная): передний ствол кровоснабжает органы таза (верхняя пузырная, маточная или нижняя пузырная, средняя прямокишечная, внутренняя половая, нижняя ягодичная артерии); задний ствол кровоснабжает ягодичную область и заднюю стенку таза (верхняя ягодичная, подвздошно-поясничная, латеральные крестцовые артерии).',
                    type: 'text'
                  },
                  {
                    title: 'НПВ и система воротной вены',
                    body: [
                      'НПВ: образуется на уровне L5 слиянием правой и левой общих подвздошных вен; располагается справа от аорты; принимает почечные, печёночные и поясничные вены; проходит через кавальное отверстие диафрагмы на уровне T8 и впадает в правое предсердие',
                      'Левая почечная вена: длиннее правой; пересекает аорту кпереди; принимает левую гонадную, левую надпочечниковую и левую нижнюю диафрагмальную вены; сдавливается между аортой и ВБА при синдроме щелкунчика',
                      'Воротная вена: образуется позади шейки поджелудочной железы на уровне L2 слиянием верхней брыжеечной вены (ВБВ) и селезёночной вены; нижняя брыжеечная вена обычно впадает в селезёночную вену',
                      'Портосистемные анастомозы: пищеводные (левая желудочная ↔ непарная), прямокишечные (верхняя прямокишечная ↔ средняя/нижняя прямокишечные), параумбиликальные (воротная ↔ надчревные), забрюшинные (ободочнокишечные ↔ почечные/поясничные вены)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'Аневризма брюшной аорты (АБА): диаметр аорты ≥3,0 см = аневризма; показание к плановой коррекции — ≥5,5 см у мужчин, ≥5,0 см у женщин или рост >1,0 см/год (рекомендации SVS/ESVS); EVAR предпочтительнее открытой операции при подходящей анатомии',
                      'Стеноз почечной артерии: атеросклеротический (устье/проксимальный отдел, пожилые) и фибромышечная дисплазия (ФМД — дистальный/средний отдел, чёткообразный вид, молодые женщины); ФМД лечится чрескожной транслюминальной ангиопластикой (ЧТА)',
                      'Острая мезентериальная ишемия: эмболия ВБА — наиболее частая причина (~50%); проявляется внезапной интенсивной болью в параумбиликальной области, непропорциональной данным осмотра; КТ-ангиография — диагностический метод выбора; реваскуляризация ± резекция кишки',
                      'Синдром Мэй–Тёрнера (Кокетта): левая общая подвздошная вена сдавливается правой общей подвздошной артерией → левосторонний илеофеморальный тромбоз; лечение: катетер-направленный тромболизис + стентирование подвздошной вены',
                      'Синдром Лериша: окклюзия бифуркации аорты (атеросклероз) → двусторонняя перемежающаяся хромота, отсутствие бедренного пульса и эректильная дисфункция у мужчин'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'abdominal-pelvic-vascular-001',
                question_en: 'Aortic hiatus vertebral level?',
                question_ru: 'Уровень аортального отверстия диафрагмы?',
                answer_en: 'T12',
                answer_ru: 'T12'
              },
              {
                id: 'abdominal-pelvic-vascular-002',
                question_en: 'Abdominal aorta bifurcation level?',
                question_ru: 'Уровень бифуркации брюшной аорты?',
                answer_en: 'L4',
                answer_ru: 'L4'
              },
              {
                id: 'abdominal-pelvic-vascular-003',
                question_en: 'Coeliac trunk vertebral level?',
                question_ru: 'Уровень отхождения чревного ствола?',
                answer_en: 'T12',
                answer_ru: 'T12'
              },
              {
                id: 'abdominal-pelvic-vascular-004',
                question_en: 'Coeliac trunk gut territory?',
                question_ru: 'Территория кровоснабжения чревного ствола?',
                answer_en: 'Foregut',
                answer_ru: 'Передняя кишка'
              },
              {
                id: 'abdominal-pelvic-vascular-005',
                question_en: 'SMA vertebral level?',
                question_ru: 'Уровень отхождения ВБА?',
                answer_en: 'L1',
                answer_ru: 'L1'
              },
              {
                id: 'abdominal-pelvic-vascular-006',
                question_en: 'SMA gut territory?',
                question_ru: 'Территория кровоснабжения ВБА?',
                answer_en: 'Midgut',
                answer_ru: 'Средняя кишка'
              },
              {
                id: 'abdominal-pelvic-vascular-007',
                question_en: 'IMA vertebral level?',
                question_ru: 'Уровень отхождения НБА?',
                answer_en: 'L3',
                answer_ru: 'L3'
              },
              {
                id: 'abdominal-pelvic-vascular-008',
                question_en: 'IMA gut territory?',
                question_ru: 'Территория кровоснабжения НБА?',
                answer_en: 'Hindgut',
                answer_ru: 'Задняя кишка'
              },
              {
                id: 'abdominal-pelvic-vascular-009',
                question_en: 'SMA–IMA anastomotic arcade?',
                question_ru: 'Анастомоз между ВБА и НБА?',
                answer_en: 'Marginal artery, Drummond',
                answer_ru: 'Краевая артерия Дрюммона'
              },
              {
                id: 'abdominal-pelvic-vascular-010',
                question_en: 'Right renal artery passes posterior to?',
                question_ru: 'Правая почечная артерия проходит позади?',
                answer_en: 'IVC',
                answer_ru: 'НПВ'
              },
              {
                id: 'abdominal-pelvic-vascular-011',
                question_en: 'External iliac becomes femoral artery at?',
                question_ru: 'Наружная подвздошная переходит в бедренную у?',
                answer_en: 'Inguinal ligament',
                answer_ru: 'Паховой связки'
              },
              {
                id: 'abdominal-pelvic-vascular-012',
                question_en: 'IVC formation vertebral level?',
                question_ru: 'Уровень образования НПВ?',
                answer_en: 'L5',
                answer_ru: 'L5'
              },
              {
                id: 'abdominal-pelvic-vascular-013',
                question_en: 'IVC passes through diaphragm at?',
                question_ru: 'НПВ проходит через диафрагму на уровне?',
                answer_en: 'T8',
                answer_ru: 'T8'
              },
              {
                id: 'abdominal-pelvic-vascular-014',
                question_en: 'Left renal vein crosses in front of?',
                question_ru: 'Левая почечная вена пересекает кпереди?',
                answer_en: 'Aorta',
                answer_ru: 'Аорту'
              },
              {
                id: 'abdominal-pelvic-vascular-015',
                question_en: 'Portal vein formed by?',
                question_ru: 'Воротная вена образована слиянием?',
                answer_en: 'SMV, splenic vein',
                answer_ru: 'ВБВ и селезёночной'
              },
              {
                id: 'abdominal-pelvic-vascular-016',
                question_en: 'AAA elective repair threshold in men?',
                question_ru: 'Порог плановой коррекции АБА у мужчин?',
                answer_en: '≥5.5 cm',
                answer_ru: '≥5,5 см'
              },
              {
                id: 'abdominal-pelvic-vascular-017',
                question_en: 'AAA elective repair threshold in women?',
                question_ru: 'Порог плановой коррекции АБА у женщин?',
                answer_en: '≥5.0 cm',
                answer_ru: '≥5,0 см'
              },
              {
                id: 'abdominal-pelvic-vascular-018',
                question_en: 'Most common cause of acute mesenteric ischaemia?',
                question_ru: 'Наиболее частая причина острой мезентериальной ишемии?',
                answer_en: 'SMA embolus',
                answer_ru: 'Эмболия ВБА'
              },
              {
                id: 'abdominal-pelvic-vascular-019',
                question_en: 'May-Thurner syndrome: compressed vein?',
                question_ru: 'Синдром Мэй–Тёрнера: сдавленная вена?',
                answer_en: 'Left common iliac',
                answer_ru: 'Левая подвздошная'
              },
              {
                id: 'abdominal-pelvic-vascular-020',
                question_en: 'Leriche syndrome cause?',
                question_ru: 'Причина синдрома Лериша?',
                answer_en: 'Aortic bifurcation occlusion',
                answer_ru: 'Окклюзия бифуркации аорты'
              }
            ]
          },

          // ── Topic: Vascular Anatomy of the Lower Limb ──────────────────────
          {
            slug: 'vascular-anatomy-lower-limb',
            title_en: 'Vascular Anatomy of the Lower Limb',
            title_ru: 'Сосудистая анатомия нижней конечности',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The lower limb receives arterial supply from the distal aorta via the iliac and femoral systems. Venous drainage is via paired deep veins accompanying the arteries and two major superficial trunks — the great saphenous vein (GSV) and small saphenous vein (SSV) — linked to the deep system through named perforating veins. This anatomy underpins infrainguinal bypass, varicose vein and endovenous ablation surgery, fasciotomy, and limb salvage procedures.',
                    type: 'text'
                  },
                  {
                    title: 'Aorto-Iliac & Femoral Segments',
                    body: 'The aorta bifurcates at L4 into the right and left common iliac arteries (CIA). Each CIA divides at the sacroiliac joint into the external iliac artery (EIA) and internal iliac artery (IIA). The EIA becomes the common femoral artery (CFA) at the mid-inguinal point — midway between the anterior superior iliac spine (ASIS) and the pubic symphysis (not the midpoint of the inguinal ligament itself). The CFA bifurcates 3–4 cm below the inguinal ligament.',
                    type: 'text'
                  },
                  {
                    title: 'Femoral Triangle',
                    body: 'Boundaries: superior — inguinal ligament; lateral — sartorius; medial — adductor longus. Floor: iliopsoas (lateral), pectineus (medial). Roof: cribriform fascia / fascia lata. Contents (lateral → medial): femoral nerve (outside the femoral sheath), femoral artery, femoral vein, femoral canal. The femoral sheath encloses three compartments; the medial (femoral canal) contains Cloquet\'s node — the sentinel lymph node for the lower limb and genitalia — and is the path for femoral hernias.\n\nThe CFA bifurcates at 3–4 cm into the superficial femoral artery (SFA) and profunda femoris artery (PFA).',
                    type: 'text'
                  },
                  {
                    title: 'Profunda Femoris Artery',
                    body: 'Arises posterolaterally from the CFA 3–4 cm below the inguinal ligament. Principal blood supply to the thigh muscles. Branches:\n\nLateral circumflex femoral artery (LCFA): ascending branch (anastomoses with superior gluteal artery); transverse branch (trochanteric anastomosis); descending branch (anastomoses with genicular branches — key collateral in SFA occlusion).\n\nMedial circumflex femoral artery (MCFA): deep branch enters the hip capsule posteriorly via retinacular vessels — principal supply to the femoral head. MCFA disruption (intracapsular fracture, dislocation) → avascular necrosis (AVN). Transverse and ascending branches also present.\n\nPerforating arteries (3–4): pierce adductor magnus to supply the hamstrings; first perforator supplies adductor brevis. The profunda femoris is the dominant collateral route in SFA occlusion via the descending LCFA and perforators reconstituting the popliteal.',
                    type: 'text'
                  },
                  {
                    title: 'SFA, Adductor Canal & Popliteal Artery',
                    body: 'The SFA enters the adductor (Hunter\'s) canal at the femoral triangle apex. Canal boundaries: anterolateral — vastus medialis; posteromedial — adductor longus then adductor magnus; roof — vasto-adductor membrane (sartorius overlies). Contents: SFA, femoral vein, saphenous nerve (sensory branch of femoral nerve — no motor fibres; injury during below-knee GSV harvest → medial leg and foot numbness).\n\nThe SFA exits via the adductor hiatus → becomes the popliteal artery, which is the deepest structure in the popliteal fossa (semimembranosus/semitendinosus medially, biceps femoris laterally, gastrocnemius heads inferiorly).',
                    type: 'text'
                  },
                  {
                    title: 'Popliteal Branches & Trifurcation',
                    body: 'Branches before trifurcation: superior medial and lateral genicular arteries; middle genicular artery (pierces the oblique popliteal ligament → cruciate ligaments and joint capsule); inferior medial and lateral genicular arteries; sural arteries (medial and lateral — supply gastrocnemius and soleus). Together these form the genicular anastomosis — critical collateral network during knee surgery or popliteal occlusion.\n\nTrifurcation occurs at the lower border of popliteus into: anterior tibial artery (ATA), posterior tibial artery (PTA), and peroneal (fibular) artery.',
                    type: 'text'
                  },
                  {
                    title: 'Tibial & Pedal Arteries',
                    body: 'ATA: passes anteriorly through the interosseous membrane → runs with the deep peroneal nerve in the anterior compartment → becomes the dorsalis pedis artery at the ankle, palpable between the extensor hallucis longus (EHL) and extensor digitorum longus (EDL) tendons. Continues as the arcuate artery → dorsal metatarsal arteries.\n\nPTA: larger trunk; descends with the tibial nerve → passes posterior to the medial malleolus (between flexor digitorum longus and flexor hallucis longus tendons) → divides into medial and lateral plantar arteries. The lateral plantar artery forms the plantar arch (completes with the first dorsal metatarsal branch of the dorsalis pedis).\n\nPeroneal artery: arises from the proximal PTA → descends along the fibula in the deep posterior compartment → terminates as perforating branch (pierces interosseous membrane distally, communicates with ATA) and calcaneal branches.',
                    type: 'text'
                  },
                  {
                    title: 'Deep Venous System',
                    body: 'Paired veins (venae comitantes) accompany all named arteries. Plantar veins → posterior tibial veins; joined by anterior tibial and peroneal veins → popliteal vein at the trifurcation level. The popliteal vein also receives the sural veins and the SSV at the saphenopopliteal junction (SPJ). It continues as the femoral vein through the adductor canal, then receives the deep femoral (profunda femoris) vein just below the inguinal ligament → common femoral vein (CFV) → external iliac vein.',
                    type: 'text'
                  },
                  {
                    title: 'GSV — Course & SFJ Tributaries',
                    body: 'The GSV is the longest vein in the body. Origin: medial dorsal venous arch → passes anterior to the medial malleolus (1 cm anterior, 1 cm superior — key surgical landmark) → ascends medially with the saphenous nerve → anterior to the medial femoral condyle → joins the CFV at the saphenofemoral junction (SFJ), 3–4 cm inferolateral to the pubic tubercle.\n\nFive constant tributaries at the SFJ ("crow\'s foot"): (1) superficial epigastric vein, (2) superficial circumflex iliac vein, (3) superficial external pudendal vein, (4) deep external pudendal vein, (5) anterior/posterior accessory saphenous vein. All five must be individually ligated at high saphenous ligation to prevent recurrence.\n\nPosterior arch vein (Leonardo\'s vein): runs posteromedially and joins the GSV at knee level; drains the Cockett perforators into the GSV.',
                    type: 'text'
                  },
                  {
                    title: 'SSV & Giacomini Vein',
                    body: 'The SSV originates from the lateral dorsal venous arch, posterior to the lateral malleolus → ascends with the sural nerve in the posterior compartment → drains into the popliteal vein at the SPJ (typically 3–8 cm above the popliteal crease; highly variable — always mark with duplex before surgery). Variants: SSV may drain into the GSV, profunda femoris vein, or extend proximally as the Giacomini vein.\n\nGiacomini vein: thigh extension of the SSV that communicates with the GSV in the posterior thigh — SSV reflux can propagate to the GSV via this route, creating a source of varicose vein recurrence if not addressed.',
                    type: 'text'
                  },
                  {
                    title: 'Named Perforating Veins',
                    body: [
                      'Cockett I — 7 cm above the medial malleolus: drains posterior arch vein (Leonardo\'s vein) into posterior tibial veins',
                      'Cockett II — 13.5 cm above the medial malleolus: same drainage pathway',
                      'Cockett III — 18.5 cm above the medial malleolus: same drainage pathway',
                      'Boyd\'s perforator — medial knee (~10 cm below joint line): connects GSV to popliteal/posterior tibial vein',
                      'Dodd\'s and Hunterian perforators — mid and distal thigh: connect GSV to femoral vein',
                      'Incompetent perforators → venous hypertension → CEAP C4–C6 disease (hyperpigmentation, lipodermatosclerosis, venous ulcers)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Mid-inguinal point (CFA pulse site) ≠ midpoint of inguinal ligament (deep inguinal ring) — do not confuse when accessing the CFA',
                      'GSV stripping: strip groin to knee only — stripping below the knee risks saphenous nerve injury → chronic medial leg numbness',
                      'EVLA/RFA: heat applied 2 cm distal to SFJ; tumescent anaesthesia compresses vein and protects overlying skin from thermal injury',
                      'SFJ ligation: individually ligate all five tributaries flush with CFV — any stump or missed tributary enables re-canalisation and recurrence',
                      'Dorsalis pedis pulse: palpated between EHL and EDL tendons at dorsum of foot — absent in advanced PAD or ATA occlusion',
                      'Popliteal aneurysm: most common peripheral artery aneurysm; 50% bilateral; thrombosis → acute limb ischaemia; repair via medial approach',
                      'Profunda femoris is the principal collateral in SFA occlusion; preserve it during CFA endarterectomy',
                      'Posterior knee dislocation carries 7–20% risk of popliteal artery injury — mandatory ABI and vascular assessment'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Нижняя конечность получает артериальное кровоснабжение от дистальной аорты через подвздошные и бедренные сосуды. Венозный отток осуществляется парными глубокими венами, сопровождающими артерии, и двумя крупными поверхностными стволами — большой подкожной веной (БПВ) и малой подкожной веной (МПВ) — связанными с глубокой системой через именные перфорантные вены. Знание этой анатомии необходимо для дистального шунтирования, флебохирургии и эндовенозных операций, фасциотомии и спасения конечности.',
                    type: 'text'
                  },
                  {
                    title: 'Аорто-подвздошный и бедренный сегменты',
                    body: 'Аорта бифуркирует на уровне L4 на правую и левую общие подвздошные артерии (ОПА). Каждая ОПА делится на уровне крестцово-подвздошного сочленения на наружную подвздошную артерию (НПА) и внутреннюю подвздошную артерию (ВПА). НПА становится общей бедренной артерией (ОБА) на уровне средней паховой точки — середина расстояния между передней верхней подвздошной остью (ПВПО) и лонным симфизом (не середина паховой связки). ОБА бифуркирует в 3–4 см ниже паховой связки.',
                    type: 'text'
                  },
                  {
                    title: 'Бедренный треугольник',
                    body: 'Границы: сверху — паховая связка; латерально — портняжная мышца; медиально — длинная приводящая мышца. Дно: подвздошно-поясничная (латерально), гребенчатая (медиально). Крыша: решётчатая фасция / широкая фасция. Содержимое (снаружи внутрь): бедренный нерв (вне бедренного влагалища), бедренная артерия, бедренная вена, бедренный канал. Бедренное влагалище включает три отдела; медиальный (бедренный канал) содержит лимфатический узел Клоке — сторожевой узел нижней конечности и гениталий — и является путём для бедренных грыж.\n\nОБА бифуркирует в 3–4 см на поверхностную бедренную артерию (ПБА) и глубокую артерию бедра (ГАБ).',
                    type: 'text'
                  },
                  {
                    title: 'Глубокая артерия бедра',
                    body: 'Отходит заднелатерально от ОБА в 3–4 см ниже паховой связки. Основной источник кровоснабжения мышц бедра. Ветви:\n\nЛатеральная огибающая бедренную кость артерия (ЛОБКА): восходящая ветвь (анастомоз с верхней ягодичной артерией); поперечная ветвь (вертельный анастомоз); нисходящая ветвь (анастомоз с коленными ветвями — ключевой коллатеральный путь при окклюзии ПБА).\n\nМедиальная огибающая бедренную кость артерия (МОБКА): глубокая ветвь входит в капсулу тазобедренного сустава через ретинакулярные сосуды — основное кровоснабжение головки бедренной кости. Повреждение МОБКА (внутрикапсульный перелом, вывих) → асептический некроз (АН). Также присутствуют поперечная и восходящая ветви.\n\nПрободающие артерии (3–4): проходят через большую приводящую мышцу к задней группе мышц бедра; первая прободающая кровоснабжает короткую приводящую мышцу. ГАБ — основной коллатеральный путь при окклюзии ПБА через нисходящую ЛОБКА и прободающие артерии, восстанавливающие кровоток в подколенной артерии.',
                    type: 'text'
                  },
                  {
                    title: 'ПБА, Гунтеров канал и подколенная артерия',
                    body: 'ПБА входит в Гунтеров (бедренно-подколенный) канал на вершине бедренного треугольника. Границы канала: переднелатерально — медиальная широкая мышца; задне-медиально — длинная и большая приводящие мышцы; крыша — вастоаддукторная мембрана (сверху — портняжная мышца). Содержимое: ПБА, бедренная вена, подкожный нерв (чувствительная ветвь бедренного нерва — двигательных волокон нет; повреждение при заборе БПВ ниже колена → онемение медиальной поверхности голени и стопы).\n\nПБА выходит через hiatus adductorius → становится подколенной артерией — наиболее глубокой структурой подколенной ямки (медиально — полуперепончатая и полусухожильная мышцы, латерально — двуглавая мышца бедра, снизу — головки икроножной мышцы).',
                    type: 'text'
                  },
                  {
                    title: 'Ветви подколенной артерии и трифуркация',
                    body: 'Ветви до трифуркации: верхние медиальная и латеральная коленные артерии; средняя коленная артерия (пронизывает косую подколенную связку → крестообразные связки и капсулу сустава); нижние медиальная и латеральная коленные артерии; икроножные артерии (медиальная и латеральная — кровоснабжают икроножную и камбаловидную мышцы). Вместе образуют коленную артериальную сеть — критически важную коллатеральную сеть при операциях на колене или окклюзии подколенной артерии.\n\nТрифуркация происходит у нижнего края подколенной мышцы: передняя большеберцовая артерия (ПББА), задняя большеберцовая артерия (ЗББА) и малоберцовая артерия.',
                    type: 'text'
                  },
                  {
                    title: 'Большеберцовые и педальные артерии',
                    body: 'ПББА: проходит кпереди через межкостную мембрану → следует с глубоким малоберцовым нервом в переднем ложе → становится тыльной артерией стопы на уровне голеностопного сустава, пальпируемой между сухожилиями длинного разгибателя большого пальца (ДРБП) и длинного разгибателя пальцев (ДРП). Продолжается как дугообразная артерия → тыльные плюсневые артерии.\n\nЗББА: более крупный ствол; следует с большеберцовым нервом → кзади от медиальной лодыжки (между сухожилиями длинного сгибателя пальцев и длинного сгибателя большого пальца) → делится на медиальную и латеральную подошвенные артерии. Латеральная подошвенная артерия формирует подошвенную дугу (завершается первой тыльной плюсневой ветвью тыльной артерии стопы).\n\nМалоберцовая артерия: отходит от проксимального отдела ЗББА → следует вдоль малоберцовой кости в глубоком заднем ложе → заканчивается прободающей ветвью (через межкостную мембрану дистально, анастомоз с ПББА) и пяточными ветвями.',
                    type: 'text'
                  },
                  {
                    title: 'Глубокая венозная система',
                    body: 'Парные вены (venae comitantes) сопровождают все именные артерии. Подошвенные вены → задние большеберцовые вены; к ним присоединяются передние большеберцовые и малоберцовые вены → подколенная вена на уровне трифуркации. Подколенная вена также принимает икроножные вены и МПВ в сафено-поплитеальном соустье (СПС). Продолжается как бедренная вена через Гунтеров канал, затем принимает глубокую бедренную (ГАБ) вену непосредственно ниже паховой связки → общая бедренная вена (ОБВ) → наружная подвздошная вена.',
                    type: 'text'
                  },
                  {
                    title: 'БПВ — ход и притоки в СФС',
                    body: 'БПВ — самая длинная вена тела. Начало: медиальная тыльная венозная дуга стопы → кпереди от медиальной лодыжки (на 1 см кпереди и 1 см кверху — хирургический ориентир) → поднимается медиально с подкожным нервом → кпереди от медиального надмыщелка бедра → впадает в ОБВ в сафено-феморальном соустье (СФС) на 3–4 см нижнелатеральнее лонного бугорка.\n\nПять постоянных притоков в СФС («гусиная лапка»): (1) поверхностная надчревная вена, (2) поверхностная огибающая подвздошную кость вена, (3) поверхностная наружная половая вена, (4) глубокая наружная половая вена, (5) передняя/задняя добавочная подкожная вена. Все пять необходимо индивидуально перевязать при высоком лигировании БПВ для профилактики рецидива.\n\nЗадняя дуговая вена (вена Леонардо): проходит по задне-медиальной поверхности и впадает в БПВ на уровне коленного сустава; дренирует перфоранты Кокета в БПВ.',
                    type: 'text'
                  },
                  {
                    title: 'МПВ и вена Джакомини',
                    body: 'МПВ: начало — латеральная тыльная венозная дуга стопы, кзади от латеральной лодыжки → поднимается с икроножным нервом в заднем ложе → впадает в подколенную вену в СПС (обычно 3–8 см выше подколенной складки; очень вариабельно — всегда маркировать дуплексом перед операцией). Варианты: МПВ может впадать в БПВ, глубокую вену бедра или продолжаться проксимально как вена Джакомини.\n\nВена Джакомини: бедренное продолжение МПВ, соединяющееся с БПВ на задней поверхности бедра — рефлюкс из МПВ может распространяться на БПВ через этот путь, становясь источником рецидива варикозной болезни при отсутствии коррекции.',
                    type: 'text'
                  },
                  {
                    title: 'Именные перфорантные вены',
                    body: [
                      'Кокет I — 7 см выше медиальной лодыжки: дренирует заднюю дуговую вену (вену Леонардо) в задние большеберцовые вены',
                      'Кокет II — 13,5 см выше медиальной лодыжки: тот же путь дренирования',
                      'Кокет III — 18,5 см выше медиальной лодыжки: тот же путь дренирования',
                      'Перфорант Бойда — медиальное колено (~10 см ниже суставной щели): соединяет БПВ с подколенной/задней большеберцовой веной',
                      'Перфоранты Додда и Гунтера — средняя и дистальная треть бедра: соединяют БПВ с бедренной веной',
                      'Несостоятельные перфоранты → венозная гипертензия → заболевание класса C4–C6 по классификации CEAP (пигментация, липодерматосклероз, венозные язвы)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'Средняя паховая точка (пульс ОБА) ≠ середина паховой связки (глубокое паховое кольцо) — не путать при доступе к ОБА',
                      'Стриппинг БПВ: только от паха до колена — стриппинг ниже колена угрожает повреждением подкожного нерва → хроническое онемение медиальной поверхности голени',
                      'ЭВЛТ/РЧА: энергия подаётся в 2 см дистальнее СФС; тумесцентная анестезия сдавливает вену и защищает кожу от термической травмы',
                      'Лигирование СФС: индивидуальная перевязка всех пяти притоков заподлицо с ОБВ — любая культя или пропущенный приток обеспечивает реканализацию и рецидив',
                      'Пульс тыльной артерии стопы: пальпируется между сухожилиями ДРБП и ДРП на тыле стопы — отсутствует при выраженном ОА АНК или окклюзии ПББА',
                      'Аневризма подколенной артерии: наиболее частая аневризма периферических артерий; в 50% двусторонняя; тромбоз → острая ишемия конечности; коррекция медиальным доступом',
                      'ГАБ — основной коллатеральный путь при окклюзии ПБА; сохранять при эндартерэктомии из ОБА',
                      'Задний вывих голени: риск повреждения подколенной артерии 7–20% — обязательный контроль лодыжечно-плечевого индекса (ЛПИ) и сосудистая оценка'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'lower-limb-vascular-001',
                question_en: 'Aortic bifurcation vertebral level?',
                question_ru: 'Уровень бифуркации аорты?',
                answer_en: 'L4',
                answer_ru: 'L4'
              },
              {
                id: 'lower-limb-vascular-002',
                question_en: 'CFA arises from?',
                question_ru: 'ОБА отходит от?',
                answer_en: 'External iliac artery',
                answer_ru: 'Наружной подвздошной артерии'
              },
              {
                id: 'lower-limb-vascular-003',
                question_en: 'CFA bifurcation distance below inguinal ligament?',
                question_ru: 'Расстояние бифуркации ОБА от паховой связки?',
                answer_en: '3–4 cm',
                answer_ru: '3–4 см'
              },
              {
                id: 'lower-limb-vascular-004',
                question_en: 'Femoral triangle medial border?',
                question_ru: 'Медиальная граница бедренного треугольника?',
                answer_en: 'Adductor longus',
                answer_ru: 'Длинная приводящая мышца'
              },
              {
                id: 'lower-limb-vascular-005',
                question_en: 'Femoral sheath contents (lateral→medial)?',
                question_ru: 'Содержимое бедренного влагалища (снаружи внутрь)?',
                answer_en: 'Artery, vein, canal',
                answer_ru: 'Артерия, вена, канал'
              },
              {
                id: 'lower-limb-vascular-006',
                question_en: 'Profunda femoris origin from CFA?',
                question_ru: 'ГАБ отходит от ОБА на уровне?',
                answer_en: '3–4 cm below',
                answer_ru: '3–4 см ниже'
              },
              {
                id: 'lower-limb-vascular-007',
                question_en: 'MCFA injury leads to?',
                question_ru: 'Повреждение МОБКА ведёт к?',
                answer_en: 'Femoral head AVN',
                answer_ru: 'АН головки бедра'
              },
              {
                id: 'lower-limb-vascular-008',
                question_en: 'Adductor canal contents?',
                question_ru: 'Содержимое Гунтерова канала?',
                answer_en: 'SFA, vein, nerve',
                answer_ru: 'ПБА, вена, нерв'
              },
              {
                id: 'lower-limb-vascular-009',
                question_en: 'SFA becomes popliteal at?',
                question_ru: 'ПБА становится подколенной на уровне?',
                answer_en: 'Adductor hiatus',
                answer_ru: 'Hiatus adductorius'
              },
              {
                id: 'lower-limb-vascular-010',
                question_en: 'Popliteal trifurcation vessels?',
                question_ru: 'Сосуды трифуркации подколенной артерии?',
                answer_en: 'ATA, PTA, peroneal',
                answer_ru: 'ПББА, ЗББА, малоберцовая'
              },
              {
                id: 'lower-limb-vascular-011',
                question_en: 'ATA continues at ankle as?',
                question_ru: 'ПББА продолжается у голеностопа как?',
                answer_en: 'Dorsalis pedis artery',
                answer_ru: 'Тыльная артерия стопы'
              },
              {
                id: 'lower-limb-vascular-012',
                question_en: 'Plantar arch formed by?',
                question_ru: 'Подошвенная дуга образована?',
                answer_en: 'Lateral plantar artery',
                answer_ru: 'Латеральной подошвенной артерией'
              },
              {
                id: 'lower-limb-vascular-013',
                question_en: 'GSV drains into?',
                question_ru: 'БПВ впадает в?',
                answer_en: 'Common femoral vein',
                answer_ru: 'Общую бедренную вену'
              },
              {
                id: 'lower-limb-vascular-014',
                question_en: 'SFJ location relative to pubic tubercle?',
                question_ru: 'Положение СФС относительно лонного бугорка?',
                answer_en: '3–4 cm inferolateral',
                answer_ru: '3–4 см нижнелатеральнее'
              },
              {
                id: 'lower-limb-vascular-015',
                question_en: 'SSV drains into?',
                question_ru: 'МПВ впадает в?',
                answer_en: 'Popliteal vein',
                answer_ru: 'Подколенную вену'
              },
              {
                id: 'lower-limb-vascular-016',
                question_en: 'LCFA descending branch role in SFA occlusion?',
                question_ru: 'Роль нисходящей ветви ЛОБКА при окклюзии ПБА?',
                answer_en: 'Key collateral route',
                answer_ru: 'Ключевой коллатеральный путь'
              },
              {
                id: 'lower-limb-vascular-017',
                question_en: 'Middle genicular artery supplies?',
                question_ru: 'Средняя коленная артерия кровоснабжает?',
                answer_en: 'Cruciate ligaments',
                answer_ru: 'Крестообразные связки'
              },
              {
                id: 'lower-limb-vascular-018',
                question_en: 'Posterior knee dislocation risks?',
                question_ru: 'Задний вывих голени угрожает?',
                answer_en: 'Popliteal artery injury',
                answer_ru: 'Повреждению подколенной артерии'
              },
              {
                id: 'lower-limb-vascular-019',
                question_en: 'GSV conduit used for?',
                question_ru: 'БПВ используется как кондуит для?',
                answer_en: 'CABG and bypass',
                answer_ru: 'АКШ и шунтирования'
              },
              {
                id: 'lower-limb-vascular-020',
                question_en: 'Femoral hernias pass through?',
                question_ru: 'Бедренные грыжи проходят через?',
                answer_en: 'Femoral canal',
                answer_ru: 'Бедренный канал'
              },
              {
                id: 'lower-limb-vascular-021',
                question_en: 'SFJ tributary count ("crow\'s foot")?',
                question_ru: 'Число притоков в СФС («гусиная лапка»)?',
                answer_en: 'Five',
                answer_ru: 'Пять'
              },
              {
                id: 'lower-limb-vascular-022',
                question_en: 'Posterior arch vein eponym?',
                question_ru: 'Эпоним задней дуговой вены?',
                answer_en: 'Leonardo\'s vein',
                answer_ru: 'Вена Леонардо'
              },
              {
                id: 'lower-limb-vascular-023',
                question_en: 'Giacomini vein connects?',
                question_ru: 'Вена Джакомини соединяет?',
                answer_en: 'SSV to GSV',
                answer_ru: 'МПВ с БПВ'
              },
              {
                id: 'lower-limb-vascular-024',
                question_en: 'Cockett I height above medial malleolus?',
                question_ru: 'Высота перфоранта Кокет I над медиальной лодыжкой?',
                answer_en: '7 cm',
                answer_ru: '7 см'
              },
              {
                id: 'lower-limb-vascular-025',
                question_en: 'Cockett III height above medial malleolus?',
                question_ru: 'Высота перфоранта Кокет III над медиальной лодыжкой?',
                answer_en: '18.5 cm',
                answer_ru: '18,5 см'
              },
              {
                id: 'lower-limb-vascular-026',
                question_en: 'Safe GSV stripping lower limit?',
                question_ru: 'Безопасная нижняя граница стриппинга БПВ?',
                answer_en: 'Knee only',
                answer_ru: 'До колена'
              },
              {
                id: 'lower-limb-vascular-027',
                question_en: 'Saphenous nerve travels with GSV where?',
                question_ru: 'Подкожный нерв сопровождает БПВ где?',
                answer_en: 'Below knee',
                answer_ru: 'Ниже колена'
              },
              {
                id: 'lower-limb-vascular-028',
                question_en: 'Popliteal fossa: deepest structure?',
                question_ru: 'Самая глубокая структура подколенной ямки?',
                answer_en: 'Popliteal artery',
                answer_ru: 'Подколенная артерия'
              },
              {
                id: 'lower-limb-vascular-029',
                question_en: 'Dorsalis pedis: palpated between?',
                question_ru: 'Тыльная артерия стопы пальпируется между?',
                answer_en: 'EHL and EDL tendons',
                answer_ru: 'Сухожилиями ДРБП и ДРП'
              },
              {
                id: 'lower-limb-vascular-030',
                question_en: 'SSV accompanies which nerve?',
                question_ru: 'МПВ сопровождает какой нерв?',
                answer_en: 'Sural nerve',
                answer_ru: 'Икроножный нерв'
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
          }

        ]
      }
    ]
  }
]
