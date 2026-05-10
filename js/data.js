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
                    body: 'The lower limb receives arterial supply from the distal aorta via the iliac and femoral systems. Detailed knowledge of this anatomy is essential for peripheral arterial disease (PAD) intervention, infrainguinal bypass surgery, and limb salvage procedures.',
                    type: 'text'
                  },
                  {
                    title: 'Aorto-Iliac Segment',
                    body: 'The aorta bifurcates at L4 into the right and left common iliac arteries (CIA). Each CIA divides at the sacroiliac joint into the external iliac artery (EIA) and internal iliac artery (IIA). The EIA becomes the common femoral artery (CFA) as it passes beneath the inguinal ligament at the midpoint between the anterior superior iliac spine (ASIS) and pubic symphysis.',
                    type: 'text'
                  },
                  {
                    title: 'Femoral Triangle',
                    body: 'Boundaries: superior — inguinal ligament; lateral — sartorius; medial — adductor longus. Floor: iliopsoas and pectineus. Contents lateral to medial: femoral nerve (outside the femoral sheath), femoral artery, femoral vein, femoral canal (containing Cloquet\'s lymph node).\n\nThe CFA bifurcates approximately 4 cm below the inguinal ligament into the superficial femoral artery (SFA) and profunda femoris artery (PFA).',
                    type: 'text'
                  },
                  {
                    title: 'Profunda Femoris Artery',
                    body: 'Principal blood supply to the thigh muscles; first major branch of the CFA. Branches: lateral circumflex femoral artery (LCFA) — anterior thigh and descending genicular anastomoses; medial circumflex femoral artery (MCFA) — femoral head (MCFA injury → avascular necrosis, AVN); perforating arteries (3–4) — pierce adductor magnus to supply the posterior thigh.',
                    type: 'text'
                  },
                  {
                    title: 'SFA, Adductor Canal, and Popliteal Artery',
                    body: 'The SFA descends the anteromedial thigh within the adductor (Hunter\'s) canal, bounded by vastus medialis, adductor longus/magnus, and sartorius. Contents: SFA, femoral vein, and saphenous nerve (branch of femoral nerve). The SFA becomes the popliteal artery after passing through the adductor hiatus.\n\nThe popliteal artery is the deepest structure in the popliteal fossa. It trifurcates below the knee into the anterior tibial artery (ATA), posterior tibial artery (PTA), and peroneal (fibular) artery. The ATA crosses the interosseous membrane and continues as the dorsalis pedis artery at the ankle. The PTA descends to the medial malleolus and divides into medial and lateral plantar arteries; the lateral plantar artery forms the plantar arch.',
                    type: 'text'
                  },
                  {
                    title: 'Venous Drainage',
                    body: 'Deep veins accompany the arteries. The popliteal vein continues as the femoral vein through the adductor canal, then becomes the common femoral vein (CFV) in the femoral triangle, draining into the external iliac vein at the inguinal ligament.\n\nGreat saphenous vein (GSV): ascends medially from the dorsal venous arch, passing anterior to the medial malleolus, and joins the CFV at the saphenofemoral junction (SFJ) 3–4 cm below the inguinal ligament. The GSV is the conduit of choice for coronary artery bypass grafting (CABG) and infrainguinal bypass.\n\nSmall saphenous vein (SSV): originates posterior to the lateral malleolus and drains into the popliteal vein at the saphenopopliteal junction (SPJ).',
                    type: 'text'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Aortic bifurcation at L4: landmark for aorto-iliac occlusive disease (Leriche syndrome — bilateral claudication, impotence, absent femoral pulses)',
                      'ABI (ankle-brachial index): >1.0 normal; <0.9 PAD; <0.5 critical limb ischaemia (CLI) — AHA/ACC 2016',
                      'Posterior knee dislocation carries 7–20% risk of popliteal artery injury — mandatory vascular assessment',
                      'GSV: do not harvest in a vascular patient without clear indication — it is the primary infrainguinal bypass conduit',
                      'Femoral canal is the medial compartment of the femoral sheath; femoral hernias pass through here',
                      'Profunda femoris is the main collateral pathway when the SFA is occluded'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Нижняя конечность получает артериальное кровоснабжение от дистальной аорты через подвздошные и бедренные сосуды. Детальное знание этой анатомии необходимо для лечения облитерирующего атеросклероза артерий нижних конечностей (ОА АНК), дистального шунтирования и операций по спасению конечности.',
                    type: 'text'
                  },
                  {
                    title: 'Аорто-подвздошный сегмент',
                    body: 'Аорта бифуркирует на уровне L4 на правую и левую общие подвздошные артерии (ОПА). Каждая ОПА делится на уровне крестцово-подвздошного сочленения на наружную подвздошную артерию (НПА) и внутреннюю подвздошную артерию (ВПА). НПА становится общей бедренной артерией (ОБА) при прохождении под паховой связкой в точке, соответствующей середине расстояния между передней верхней подвздошной остью (ПВПО) и лонным симфизом.',
                    type: 'text'
                  },
                  {
                    title: 'Бедренный треугольник',
                    body: 'Границы: сверху — паховая связка; латерально — портняжная мышца; медиально — длинная приводящая мышца. Дно: подвздошно-поясничная и гребенчатая мышцы. Содержимое (снаружи внутрь): бедренный нерв (вне бедренного фасциального влагалища), бедренная артерия, бедренная вена, бедренный канал (содержит лимфатический узел Клоке).\n\nОБА бифуркирует приблизительно в 4 см дистальнее паховой связки на поверхностную бедренную артерию (ПБА) и глубокую артерию бедра (ГАБ).',
                    type: 'text'
                  },
                  {
                    title: 'Глубокая артерия бедра',
                    body: 'Основной источник кровоснабжения мышц бедра; первая крупная ветвь ОБА. Ветви: латеральная огибающая бедренную кость артерия (ЛОБКА) — переднее бедро и нисходящие анастомозы вокруг коленного сустава; медиальная огибающая бедренную кость артерия (МОБКА) — головка бедренной кости (повреждение МОБКА → асептический некроз, АН); прободающие артерии (3–4) — проходят через большую приводящую мышцу, кровоснабжая заднее бедро.',
                    type: 'text'
                  },
                  {
                    title: 'ПБА, Гунтеров канал и подколенная артерия',
                    body: 'ПБА проходит по переднемедиальной поверхности бедра в Гунтеровом (бедренно-подколенном) канале, ограниченном медиальной широкой мышцей, длинной/большой приводящими мышцами и портняжной мышцей. Содержимое: ПБА, бедренная вена и подкожный нерв (ветвь бедренного нерва). ПБА становится подколенной артерией после прохождения через hiatus adductorius.\n\nПодколенная артерия — наиболее глубокая структура подколенной ямки. Ниже коленного сустава она трифуркирует на переднюю большеберцовую артерию (ПББА), заднюю большеберцовую артерию (ЗББА) и малоберцовую артерию. ПББА проходит через межкостную мембрану и продолжается как тыльная артерия стопы на уровне голеностопного сустава. ЗББА спускается к медиальной лодыжке и делится на медиальную и латеральную подошвенные артерии; латеральная подошвенная артерия формирует подошвенную артериальную дугу.',
                    type: 'text'
                  },
                  {
                    title: 'Венозный отток',
                    body: 'Глубокие вены сопровождают артерии. Подколенная вена продолжается как бедренная вена через Гунтеров канал, затем становится общей бедренной веной (ОБВ) в бедренном треугольнике и впадает в наружную подвздошную вену на уровне паховой связки.\n\nБольшая подкожная вена (БПВ): поднимается медиально от тыльной венозной дуги стопы, проходя кпереди от медиальной лодыжки, и впадает в ОБВ в сафено-феморальном соустье (СФС) на 3–4 см дистальнее паховой связки. БПВ — кондуит выбора для аортокоронарного шунтирования (АКШ) и дистального шунтирования.\n\nМалая подкожная вена (МПВ): начинается кзади от латеральной лодыжки и впадает в подколенную вену в сафено-поплитеальном соустье (СПС).',
                    type: 'text'
                  },
                  {
                    title: 'Хирургические корреляты',
                    body: [
                      'Бифуркация аорты на уровне L4: ориентир при аорто-подвздошной окклюзионной болезни (синдром Лериша — перемежающаяся хромота, импотенция, отсутствие бедренных пульсов)',
                      'Лодыжечно-плечевой индекс (ЛПИ): >1,0 — норма; <0,9 — ОА АНК; <0,5 — критическая ишемия конечности (КИК) — AHA/ACC 2016',
                      'Задний вывих голени: риск повреждения подколенной артерии 7–20% — обязательная сосудистая оценка',
                      'БПВ: не иссекать у сосудистого больного без чёткого показания — основной кондуит для дистального шунтирования',
                      'Бедренный канал — медиальный отдел бедренного фасциального влагалища, через него проходят бедренные грыжи',
                      'ГАБ — основной коллатеральный путь при окклюзии ПБА'
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
                question_en: 'CFA bifurcates into?',
                question_ru: 'ОБА делится на?',
                answer_en: 'SFA and profunda',
                answer_ru: 'ПБА и ГАБ'
              },
              {
                id: 'lower-limb-vascular-004',
                question_en: 'Superior border of femoral triangle?',
                question_ru: 'Верхняя граница бедренного треугольника?',
                answer_en: 'Inguinal ligament',
                answer_ru: 'Паховая связка'
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
                question_en: 'Profunda femoris arises from?',
                question_ru: 'ГАБ отходит от?',
                answer_en: 'Common femoral artery',
                answer_ru: 'Общей бедренной артерии'
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
                question_en: 'Popliteal artery trifurcation?',
                question_ru: 'Трифуркация подколенной артерии?',
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
                question_en: 'GSV–CFV junction name?',
                question_ru: 'Название соустья БПВ–ОБВ?',
                answer_en: 'Saphenofemoral junction',
                answer_ru: 'Сафено-феморальное соустье'
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
                question_en: 'ABI threshold for PAD?',
                question_ru: 'Порог ЛПИ при ОА АНК?',
                answer_en: '<0.9',
                answer_ru: '<0,9'
              },
              {
                id: 'lower-limb-vascular-017',
                question_en: 'ABI indicating critical limb ischaemia?',
                question_ru: 'ЛПИ при критической ишемии конечности?',
                answer_en: '<0.5',
                answer_ru: '<0,5'
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
              }
            ]
          }

        ]
      }
    ]
  }
]
