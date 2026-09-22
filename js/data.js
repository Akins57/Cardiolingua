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
      // ── Cardiac Surgery ───────────────────────────────────────────────────────
      {
        slug: 'cardiac-surgery',
        title_en: 'Cardiac Surgery',
        title_ru: 'Кардиохирургия',
        topics: [
          {
            slug: 'cardiac-surgery-anatomy',
            title_en: 'Cardiac Surgery Anatomy',
            title_ru: 'Анатомия сердца в кардиохирургии',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'The heart lies in the middle mediastinum enclosed within the fibrous pericardium, tilted so that the apex points inferiorly, anteriorly, and to the left (surface marking: 5th intercostal space, midclavicular line). The pericardium consists of two layers: an outer fibrous pericardium and an inner serous pericardium (parietal and visceral/epicardium layers); the pericardial cavity normally contains 15–50 mL of serous fluid. During cardiac surgery the pericardium is opened with a longitudinal incision anterior to the left phrenic nerve, which runs along the lateral aspect of the pericardium bilaterally and must be protected throughout.',
                    type: 'text'
                  },
                  {
                    title: 'Chambers & Great Vessels',
                    body: [
                      'Right atrium (RA): receives systemic venous return via the superior vena cava (SVC) and inferior vena cava (IVC); internal features include the crista terminalis, pectinate muscles, fossa ovalis (remnant of the foramen ovale), and the coronary sinus ostium guarded by the Thebesian valve',
                      'Right ventricle (RV): anterior and rightward; consists of inlet (tricuspid valve), trabecular, and outlet (infundibulum → pulmonary valve) components; the moderator band (septomarginal trabecula) carries the right bundle branch (RBB) to the anterior papillary muscle',
                      'Left atrium (LA): posterior chamber; receives four pulmonary veins; smooth-walled body with a laterally placed auricle; the mitral valve orifice opens into its floor',
                      'Left ventricle (LV): ellipsoid, thick-walled (8–12 mm); anteromedial and posterolateral papillary muscles support the mitral valve via chordae tendineae; the left ventricular outflow tract (LVOT) is in fibrous continuity with the anterior (aortic) mitral leaflet — the aorto-mitral curtain',
                      'Ascending aorta (~5 cm): arises from the LV; left and right coronary ostia arise from the left and right aortic sinuses of Valsalva respectively; the posterior sinus is the non-coronary sinus',
                      'Pulmonary trunk: arises anterior to the aorta from the RV infundibulum; bifurcates beneath the aortic arch into right and left pulmonary arteries'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Valves',
                    body: [
                      'Aortic valve: 3 semilunar cusps — right coronary cusp (most anterior), left coronary cusp, and non-coronary cusp (posterior); the bundle of His runs beneath the commissure between the non-coronary and right coronary cusps and is at risk during aortic valve replacement (AVR)',
                      'Mitral valve: 2 leaflets — anterior (aortic, larger) and posterior (mural); D-shaped annulus; the left circumflex artery (LCx) runs in the left atrioventricular groove directly behind the mitral annulus and is at risk during mitral annuloplasty or replacement',
                      'Tricuspid valve: 3 leaflets — anterior, posterior, and septal; the septal leaflet overlies the membranous septum and the atrioventricular (AV) node — at risk during ventricular septal defect (VSD) patch repair; the annulus is larger and more apical than the mitral annulus',
                      'Pulmonary valve: 3 semilunar cusps — anterior, right, and left; has no named coronary ostia; protected position beneath the sternum'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Coronary Arteries',
                    body: [
                      'Left main coronary artery (LMCA): arises from the left aortic sinus of Valsalva; ~10–15 mm long; bifurcates into the left anterior descending artery (LAD) and the left circumflex artery (LCx); a ramus intermedius is present in ~20% of cases',
                      'Left anterior descending artery (LAD): runs in the anterior interventricular groove to the apex; supplies the anterior left ventricular (LV) wall, anterior two-thirds of the interventricular septum, and apex via septal perforators and diagonal branches',
                      'Left circumflex artery (LCx): runs in the left atrioventricular groove; gives obtuse marginal (OM) branches; supplies the lateral and posterior LV wall in left-dominant systems',
                      'Right coronary artery (RCA): runs in the right atrioventricular groove; gives the sinoatrial (SA) nodal artery in ~60% of cases, acute marginal branches, and the posterior descending artery (PDA) in right-dominant systems; supplies the atrioventricular (AV) node in 85–90% of cases',
                      'Coronary dominance: defined by which vessel gives rise to the posterior descending artery (PDA). Right dominant: ~70%; co-dominant: ~15%; left dominant: ~15%'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Conduction System',
                    body: [
                      'Sinoatrial (SA) node: crescent-shaped structure at the junction of the superior vena cava (SVC) and right atrium (RA), at the superior end of the crista terminalis (sulcus terminalis); the cardiac pacemaker; blood supply: SA nodal artery (60% from right coronary artery (RCA), 40% from left circumflex artery (LCx))',
                      'Atrioventricular (AV) node: located in the triangle of Koch, bounded by the tendon of Todaro, the septal leaflet of the tricuspid valve, and the coronary sinus ostium; blood supply: AV nodal artery (branch of RCA in 85–90% of cases)',
                      'Bundle of His: passes through the central fibrous body and runs along the inferior edge of the membranous interventricular septum — at risk during aortic valve replacement (AVR) and ventricular septal defect (VSD) repair',
                      'Left bundle branch (LBB): broad fan of fibres on the left side of the interventricular septum; divides into anterior and posterior fascicles',
                      'Right bundle branch (RBB): narrow cord running in the moderator band (septomarginal trabecula) to the anterior papillary muscle of the right ventricle (RV)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Landmarks',
                    body: [
                      'Aortic cannulation: ascending aorta, proximal to the brachiocephalic trunk; avoid calcified or atherosclerotic areas',
                      'Venous cannulation: bicaval (superior vena cava (SVC) and inferior vena cava (IVC)) for open-heart procedures; single right atrial (RA) cannula for coronary artery bypass grafting (CABG)',
                      'Cardioplegia: antegrade via aortic root cannula (proximal to the aortic cross-clamp); retrograde via coronary sinus catheter inserted through the right atrial (RA) wall',
                      'Transverse pericardial sinus: pericardial recess posterior to the ascending aorta and pulmonary trunk, anterior to the atria — the aortic cross-clamp is placed through this space',
                      'Oblique pericardial sinus: blind-ended recess posterior to the left atrium (LA), bounded by the pulmonary veins; relevant during posterior pericardial dissection',
                      'Phrenic nerve: runs bilaterally on the lateral pericardium, anterior to the lung hilum; protected by staying anterior to it when opening the pericardium; also at risk during internal thoracic artery (ITA) / internal mammary artery harvest'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Сердце расположено в среднем средостении, заключено в фиброзный перикард; верхушка направлена вниз, вперёд и влево (проекция на поверхность: V межреберье по среднеключичной линии). Перикард состоит из двух слоёв: наружного фиброзного перикарда и внутреннего серозного перикарда (париетального и висцерального/эпикарда); в норме полость перикарда содержит 15–50 мл серозной жидкости. В ходе кардиохирургической операции перикард вскрывают продольным разрезом кпереди от левого диафрагмального нерва, который проходит вдоль боковой поверхности перикарда с обеих сторон и должен быть защищён на всём протяжении.',
                    type: 'text'
                  },
                  {
                    title: 'Камеры сердца и магистральные сосуды',
                    body: [
                      'Правое предсердие (ПП): принимает системный венозный возврат через верхнюю полую вену (ВПВ) и нижнюю полую вену (НПВ); внутренние структуры: пограничный гребень (crista terminalis), гребенчатые мышцы, овальная ямка (fossa ovalis; остаток овального отверстия) и устье венечного синуса, прикрытое клапаном Тебезия',
                      'Правый желудочек (ПЖ): расположен спереди и правее; состоит из входного (трёхстворчатый клапан), трабекулярного и выходного (инфундибулум → клапан лёгочной артерии) отделов; модераторный пучок (перегородочно-краевая трабекула) несёт правую ножку пучка Гиса (ПНПГ) к передней сосочковой мышце',
                      'Левое предсердие (ЛП): задняя камера; принимает четыре лёгочные вены; гладкостенное тело с ушком, расположенным латерально; митральный клапан открывается в его дно',
                      'Левый желудочек (ЛЖ): эллипсоидный, толстостенный (8–12 мм); переднемедиальная и заднелатеральная сосочковые мышцы удерживают митральный клапан посредством хорд; выходной тракт левого желудочка (ВТЛЖ) находится в фиброзной преемственности с передней (аортальной) створкой митрального клапана — аортально-митральный контакт',
                      'Восходящая аорта (~5 см): отходит от ЛЖ; устья левой и правой коронарных артерий расположены в левом и правом синусах Вальсальвы соответственно; задний синус — некоронарный',
                      'Лёгочный ствол: отходит кпереди от аорты из инфундибулума ПЖ; делится под дугой аорты на правую и левую лёгочные артерии'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Клапаны сердца',
                    body: [
                      'Аортальный клапан: 3 полулунные створки — правая коронарная (наиболее передняя), левая коронарная и некоронарная (задняя); пучок Гиса проходит под комиссурой некоронарной и правой коронарной створок и подвергается риску при протезировании аортального клапана (ПАК)',
                      'Митральный клапан: 2 створки — передняя (аортальная, большая) и задняя (пристеночная); D-образное фиброзное кольцо; левая огибающая артерия (ЛОА) проходит в левой предсердно-желудочковой борозде непосредственно за митральным кольцом и подвергается риску при аннулопластике или протезировании митрального клапана',
                      'Трёхстворчатый клапан: 3 створки — передняя, задняя и перегородочная; перегородочная створка прикрывает перепончатую часть межжелудочковой перегородки и предсердно-желудочковый (АВ) узел — риск повреждения при пластике дефекта межжелудочковой перегородки (ДМЖП); кольцо клапана крупнее и расположено апикальнее, чем митральное',
                      'Клапан лёгочной артерии: 3 полулунные створки — передняя, правая и левая; коронарных устьев нет; защищённое положение под грудиной'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Коронарные артерии',
                    body: [
                      'Ствол левой коронарной артерии (СЛКА): отходит из левого синуса Вальсальвы; длина ~10–15 мм; делится на переднюю межжелудочковую артерию (ПМЖА) и левую огибающую артерию (ЛОА); промежуточная ветвь (ramus intermedius) присутствует примерно в 20% случаев',
                      'Передняя межжелудочковая артерия (ПМЖА): проходит в передней межжелудочковой борозде к верхушке; кровоснабжает переднюю стенку левого желудочка (ЛЖ), передние 2/3 межжелудочковой перегородки и верхушку через септальные перфораторы и диагональные ветви',
                      'Левая огибающая артерия (ЛОА): проходит в левой предсердно-желудочковой борозде; отдаёт ветви тупого края; кровоснабжает боковую и заднюю стенки ЛЖ при левом типе доминирования',
                      'Правая коронарная артерия (ПКА): проходит в правой предсердно-желудочковой борозде; отдаёт артерию синусно-предсердного (СА) узла примерно в 60% случаев, ветви острого края и заднюю межжелудочковую артерию (ЗМЖА) при правом типе доминирования; кровоснабжает предсердно-желудочковый (АВ) узел в 85–90% случаев',
                      'Тип доминирования коронарного кровоснабжения: определяется тем, от какого сосуда отходит задняя межжелудочковая артерия (ЗМЖА). Правый тип: ~70%; сбалансированный: ~15%; левый тип: ~15%'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Проводящая система сердца',
                    body: [
                      'Синусно-предсердный (СА) узел: серповидная структура в месте соединения верхней полой вены (ВПВ) и правого предсердия (ПП), у верхнего конца пограничного гребня (sulcus terminalis); водитель ритма сердца; кровоснабжение: артерия СА-узла (60% от правой коронарной артерии (ПКА), 40% от левой огибающей артерии (ЛОА))',
                      'Предсердно-желудочковый (АВ) узел: расположен в треугольнике Коха, ограниченном сухожилием Тодаро, перегородочной створкой трёхстворчатого клапана и устьем венечного синуса; кровоснабжение: артерия АВ-узла (ветвь ПКА в 85–90% случаев)',
                      'Пучок Гиса: проходит через центральное фиброзное тело и следует вдоль нижнего края перепончатой части межжелудочковой перегородки — подвергается риску при протезировании аортального клапана (ПАК) и пластике дефекта межжелудочковой перегородки (ДМЖП)',
                      'Левая ножка пучка Гиса (ЛНПГ): широкий веер волокон на левой поверхности межжелудочковой перегородки; делится на переднюю и заднюю ветви',
                      'Правая ножка пучка Гиса (ПНПГ): тонкий тяж, проходящий в модераторном пучке (перегородочно-краевой трабекуле) к передней сосочковой мышце правого желудочка (ПЖ)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические ориентиры',
                    body: [
                      'Аортальная канюляция: восходящая аорта, проксимально от плечеголовного ствола; избегать кальцинированных и атеросклеротических участков',
                      'Венозная канюляция: бикавальная (верхняя полая вена (ВПВ) и нижняя полая вена (НПВ)) — при операциях с открытым сердцем; одна канюля в правое предсердие (ПП) — при аортокоронарном шунтировании (АКШ)',
                      'Кардиоплегия: антеградная — через канюлю в корне аорты (проксимально от аортального зажима); ретроградная — через катетер в венечном синусе, введённый через стенку правого предсердия (ПП)',
                      'Поперечный перикардиальный синус: перикардиальный карман позади восходящей аорты и лёгочного ствола, кпереди от предсердий — аортальный зажим накладывается через это пространство',
                      'Косой перикардиальный синус: слепой карман позади левого предсердия (ЛП), ограниченный лёгочными венами; актуален при заднем перикардиальном доступе',
                      'Диафрагмальный нерв: с обеих сторон проходит по боковой поверхности перикарда, кпереди от корня лёгкого; защищается смещением разреза кпереди; также подвергается риску при заборе внутренней грудной артерии (ВГА) / внутренней молочной артерии'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'cardiac-surgery-anatomy-001',
                question_en: 'What are the two main layers of the pericardium?',
                question_ru: 'Из каких двух основных слоёв состоит перикард?',
                answer_en: 'Fibrous and serous',
                answer_ru: 'Фиброзный и серозный'
              },
              {
                id: 'cardiac-surgery-anatomy-002',
                question_en: 'What is the normal pericardial fluid volume?',
                question_ru: 'Каков нормальный объём жидкости в перикардиальной полости?',
                answer_en: '15–50 mL',
                answer_ru: '15–50 мл'
              },
              {
                id: 'cardiac-surgery-anatomy-003',
                question_en: 'On which surface of the pericardium does the phrenic nerve run, placing it at risk during pericardiotomy?',
                question_ru: 'По какой поверхности перикарда проходит диафрагмальный нерв, подвергаясь риску при перикардиотомии?',
                answer_en: 'Lateral pericardium',
                answer_ru: 'Боковая поверхность перикарда'
              },
              {
                id: 'cardiac-surgery-anatomy-004',
                question_en: 'How many semilunar cusps does the aortic valve have?',
                question_ru: 'Сколько полулунных створок имеет аортальный клапан?',
                answer_en: 'Three',
                answer_ru: 'Три'
              },
              {
                id: 'cardiac-surgery-anatomy-005',
                question_en: 'Which conduction structure runs beneath the non-coronary and right coronary cusp commissure of the aortic valve, placing it at risk during aortic valve replacement (AVR)?',
                question_ru: 'Какая структура проводящей системы проходит под комиссурой некоронарной и правой коронарной створок аортального клапана и подвергается риску при протезировании аортального клапана (ПАК)?',
                answer_en: 'Bundle of His',
                answer_ru: 'Пучок Гиса'
              },
              {
                id: 'cardiac-surgery-anatomy-006',
                question_en: 'Where is the sinoatrial (SA) node located in the right atrium (RA)?',
                question_ru: 'Где расположен синусно-предсердный (СА) узел в правом предсердии (ПП)?',
                answer_en: 'Sulcus terminalis (SVC–RA junction)',
                answer_ru: 'Sulcus terminalis (соединение ВПВ–ПП)'
              },
              {
                id: 'cardiac-surgery-anatomy-007',
                question_en: 'From which artery does the sinoatrial (SA) node most commonly receive its blood supply (~60%)?',
                question_ru: 'От какой артерии чаще всего (~60%) кровоснабжается синусно-предсердный (СА) узел?',
                answer_en: 'Right coronary artery (RCA)',
                answer_ru: 'Правая коронарная артерия (ПКА)'
              },
              {
                id: 'cardiac-surgery-anatomy-008',
                question_en: 'In which anatomical triangle is the atrioventricular (AV) node located?',
                question_ru: 'В каком анатомическом треугольнике расположен предсердно-желудочковый (АВ) узел?',
                answer_en: 'Triangle of Koch',
                answer_ru: 'Треугольник Коха'
              },
              {
                id: 'cardiac-surgery-anatomy-009',
                question_en: 'From which artery is the atrioventricular (AV) node supplied in 85–90% of hearts?',
                question_ru: 'От какой артерии кровоснабжается предсердно-желудочковый (АВ) узел в 85–90% случаев?',
                answer_en: 'Right coronary artery (RCA)',
                answer_ru: 'Правая коронарная артерия (ПКА)'
              },
              {
                id: 'cardiac-surgery-anatomy-010',
                question_en: 'How is coronary dominance defined in cardiac surgery?',
                question_ru: 'Как определяется тип доминирования коронарного кровоснабжения в кардиохирургии?',
                answer_en: 'Posterior descending artery (PDA) origin',
                answer_ru: 'Источник задней межжелудочковой артерии (ЗМЖА)'
              },
              {
                id: 'cardiac-surgery-anatomy-011',
                question_en: 'What percentage of hearts have right coronary artery (RCA) dominance?',
                question_ru: 'В каком проценте случаев наблюдается правый тип доминирования (правая коронарная артерия (ПКА) даёт заднюю межжелудочковую артерию (ЗМЖА))?',
                answer_en: '~70%',
                answer_ru: '~70%'
              },
              {
                id: 'cardiac-surgery-anatomy-012',
                question_en: 'What is the approximate length of the left main coronary artery (LMCA)?',
                question_ru: 'Какова приблизительная длина ствола левой коронарной артерии (СЛКА)?',
                answer_en: '10–15 mm',
                answer_ru: '10–15 мм'
              },
              {
                id: 'cardiac-surgery-anatomy-013',
                question_en: 'Which artery runs in the left atrioventricular groove and is at risk during mitral valve surgery?',
                question_ru: 'Какая артерия проходит в левой предсердно-желудочковой борозде и подвергается риску при операциях на митральном клапане?',
                answer_en: 'Left circumflex artery (LCx)',
                answer_ru: 'Левая огибающая артерия (ЛОА)'
              },
              {
                id: 'cardiac-surgery-anatomy-014',
                question_en: 'What does passage through the transverse pericardial sinus allow during cardiac surgery?',
                question_ru: 'Что обеспечивает прохождение через поперечный перикардиальный синус во время кардиохирургической операции?',
                answer_en: 'Aortic cross-clamp placement',
                answer_ru: 'Наложение аортального зажима'
              },
              {
                id: 'cardiac-surgery-anatomy-015',
                question_en: 'Into which chamber does the coronary sinus drain?',
                question_ru: 'В какую камеру сердца впадает венечный синус?',
                answer_en: 'Right atrium (RA)',
                answer_ru: 'Правое предсердие (ПП)'
              },
              {
                id: 'cardiac-surgery-anatomy-016',
                question_en: 'Via which route is retrograde cardioplegia delivered during cardiac surgery?',
                question_ru: 'Каким путём доставляется ретроградная кардиоплегия во время кардиохирургической операции?',
                answer_en: 'Coronary sinus catheter',
                answer_ru: 'Катетер венечного синуса'
              },
              {
                id: 'cardiac-surgery-anatomy-017',
                question_en: 'Which two papillary muscles support the mitral valve via chordae tendineae?',
                question_ru: 'Какие две сосочковые мышцы поддерживают митральный клапан посредством хорд?',
                answer_en: 'Anteromedial and posterolateral',
                answer_ru: 'Переднемедиальная и заднелатеральная'
              },
              {
                id: 'cardiac-surgery-anatomy-018',
                question_en: 'Which cardiac structure carries the right bundle branch (RBB) to the anterior papillary muscle of the right ventricle (RV)?',
                question_ru: 'Какая структура сердца несёт правую ножку пучка Гиса (ПНПГ) к передней сосочковой мышце правого желудочка (ПЖ)?',
                answer_en: 'Moderator band',
                answer_ru: 'Модераторный пучок'
              },
              {
                id: 'cardiac-surgery-anatomy-019',
                question_en: 'What is the fossa ovalis in the interatrial septum?',
                question_ru: 'Что представляет собой овальная ямка (fossa ovalis) в межпредсердной перегородке?',
                answer_en: 'Foramen ovale remnant',
                answer_ru: 'Остаток овального отверстия'
              },
              {
                id: 'cardiac-surgery-anatomy-020',
                question_en: 'Which structure in the right ventricle (RV) separates the inlet from the outlet compartment and is important in congenital heart surgery?',
                question_ru: 'Какая структура правого желудочка (ПЖ) разделяет входной и выходной отделы и важна в хирургии врождённых пороков сердца?',
                answer_en: 'Infundibulum (conus arteriosus)',
                answer_ru: 'Инфундибулум (конус артериозус)'
              }
            ]
          },

          // ── coronary-artery-disease ─────────────────────────────────────────
          {
            slug: 'coronary-artery-disease',
            title_en: 'Coronary Artery Disease — Pathophysiology & Indications for CABG',
            title_ru: 'Ишемическая болезнь сердца — патофизиология и показания к АКШ',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Coronary artery disease (CAD) is atherosclerotic narrowing of the epicardial coronary arteries causing myocardial ischaemia. It is the leading cause of mortality in the Western world. Significant stenosis is defined as ≥50% diameter reduction in the left main coronary artery (LMCA) or ≥70% in other vessels. Haemodynamic significance is confirmed intra-procedurally by fractional flow reserve (FFR) ≤0.80. Coronary artery bypass grafting (CABG) remains the gold standard revascularisation strategy for multi-vessel and complex coronary disease.',
                    type: 'text'
                  },
                  {
                    title: 'Pathophysiology',
                    body: [
                      'Atherosclerosis: subendothelial lipid deposition → foam cell formation → fibrous cap → stable plaque (thick cap) or vulnerable plaque (thin cap, lipid-rich, prone to rupture)',
                      'Stable CAD: fixed stenosis → supply-demand mismatch with exertion → stable angina; no plaque disruption',
                      'Ischaemic cascade: diastolic dysfunction appears first → systolic dysfunction → electrocardiogram (ECG) changes → chest pain (angina); imaging detects ischaemia before symptoms',
                      'Acute coronary syndrome (ACS): plaque rupture or erosion → platelet activation → coronary thrombus:',
                      '  • Unstable angina (UA): no myocardial necrosis, troponin negative',
                      '  • Non-ST-elevation myocardial infarction (NSTEMI): subendocardial necrosis, troponin positive, no ST elevation on ECG',
                      '  • ST-elevation myocardial infarction (STEMI): transmural occlusion, ST elevation on ECG, troponin positive',
                      'LMCA disease (≥50% stenosis): supplies >70% of left ventricular (LV) myocardium in right-dominant systems; critical territory — Class I indication for CABG regardless of symptom status'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Clinical Presentation & Classification',
                    body: [
                      'Typical angina: substernal chest pressure/heaviness, radiation to left arm or jaw, provoked by exertion/cold/stress, relieved within minutes by rest or glyceryl trinitrate (GTN)',
                      'Canadian Cardiovascular Society (CCS) angina classification:',
                      '  • CCS I: angina only with strenuous/prolonged exertion',
                      '  • CCS II: slight limitation — angina on climbing >1 flight of stairs or walking >2 blocks on the flat',
                      '  • CCS III: marked limitation — angina on minimal exertion (1 flat block, 1 flight of stairs)',
                      '  • CCS IV: angina at rest or inability to perform any activity without symptoms',
                      'Risk factors: hypertension, dyslipidaemia, diabetes mellitus (DM), smoking, family history (first-degree relative, male <55 years / female <65 years), age, male sex, chronic kidney disease (CKD), obesity'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Investigations',
                    body: [
                      'ECG (electrocardiogram): resting ECG (may be normal in stable CAD); exercise treadmill test (ETT) — ≥1 mm horizontal or downsloping ST depression = positive',
                      'Echocardiogram (transthoracic echocardiography, TTE): left ventricular ejection fraction (LVEF), regional wall motion abnormalities (RWMA), valvular co-pathology',
                      'CT coronary angiography (CTCA): non-invasive; high negative predictive value; Agatston calcium score quantifies atherosclerotic burden',
                      'Invasive coronary angiography (ICA): gold standard; defines lesion location, severity, and anatomy for revascularisation planning; fractional flow reserve (FFR) measurement (wire-based) confirms haemodynamic significance: FFR ≤0.80 = significant',
                      'Myocardial perfusion imaging (MPI): single-photon emission CT (SPECT) or stress MRI; quantifies ischaemic burden and viability; hibernating myocardium = viable but chronically ischaemic LV territory that recovers contractile function after revascularisation',
                      'LVEF is the single most important prognostic marker; CABG provides survival benefit over medical therapy when LVEF <35% with hibernating myocardium (STICH trial — 10-year follow-up)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Indications for CABG',
                    body: [
                      'LMCA stenosis ≥50%: Class I — CABG preferred over PCI (percutaneous coronary intervention) regardless of SYNTAX (Synergy between PCI with Taxus and Cardiac Surgery) score (ESC 2018)',
                      'Three-vessel CAD (3VD) with SYNTAX score >22: Class I for CABG; PCI acceptable only for low SYNTAX score (<22)',
                      'Three-vessel CAD + diabetes mellitus (DM): CABG strongly preferred — FREEDOM trial showed significant reduction in death, myocardial infarction (MI), and stroke vs PCI at 5 years',
                      'Two-vessel CAD involving proximal left anterior descending artery (LAD): CABG preferred when anatomy is suitable',
                      'LV dysfunction (LVEF <35%) with viable myocardium: Class I for CABG — STICH trial demonstrated 10-year all-cause mortality benefit vs medical therapy alone',
                      'Concomitant valve surgery: CABG indicated (Class I) if ≥70% stenosis in any major epicardial vessel at time of valve operation',
                      'Failed or anatomically unfeasible PCI: CABG as rescue or planned alternative'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'CABG vs PCI — Decision Making',
                    body: [
                      'SYNTAX score: angiographic complexity score based on lesion number, location, and characteristics. Low <22 → PCI acceptable; intermediate 23–32 → individualise; high >32 → CABG preferred',
                      'EuroSCORE II (European System for Cardiac Operative Risk Evaluation): predicts 30-day operative mortality; used for patient counselling and consent',
                      'Heart team decision: mandatory multidisciplinary review (interventional cardiologist + cardiac surgeon + cardiologist) for all complex CAD — ESC/AHA Class I recommendation',
                      'CABG advantages: more complete revascularisation; bypasses diseased vessel entirely; long-term graft patency protects against future proximal disease progression; superior in DM, 3VD, LMCA disease, and LV dysfunction',
                      'PCI advantages: no sternotomy, local anaesthesia option, faster recovery, appropriate for single-vessel/focal disease or high surgical risk patients'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Ишемическая болезнь сердца (ИБС) — атеросклеротическое сужение эпикардиальных коронарных артерий, вызывающее ишемию миокарда. ИБС является ведущей причиной смертности в западных странах. Гемодинамически значимым считается стеноз ≥50% по диаметру для ствола левой коронарной артерии (СЛКА) и ≥70% для остальных сосудов. Гемодинамическая значимость подтверждается интраоперационно измерением фракционного резерва кровотока (ФРК) ≤0,80. Аортокоронарное шунтирование (АКШ) остаётся золотым стандартом реваскуляризации при многососудистом и сложном поражении коронарных артерий.',
                    type: 'text'
                  },
                  {
                    title: 'Патофизиология',
                    body: [
                      'Атеросклероз: субэндотелиальное отложение липидов → образование пенистых клеток → формирование фиброзной капсулы → стабильная бляшка (толстая капсула) или нестабильная бляшка (тонкая капсула, богатая липидами, склонная к разрыву)',
                      'Стабильная ИБС: фиксированный стеноз → дисбаланс между доставкой и потребностью при нагрузке → стабильная стенокардия; разрыва бляшки нет',
                      'Ишемический каскад: первым появляется диастолическая дисфункция → затем систолическая дисфункция → изменения на электрокардиограмме (ЭКГ) → боль в груди (стенокардия); визуализирующие методы выявляют ишемию раньше симптомов',
                      'Острый коронарный синдром (ОКС): разрыв или эрозия бляшки → активация тромбоцитов → коронарный тромбоз:',
                      '  • Нестабильная стенокардия (НС): некроза миокарда нет, тропонин отрицательный',
                      '  • Инфаркт миокарда без подъёма сегмента ST (ИМбпST): субэндокардиальный некроз, тропонин положительный, подъёма ST на ЭКГ нет',
                      '  • Инфаркт миокарда с подъёмом сегмента ST (ИМпST): трансмуральная окклюзия, подъём ST на ЭКГ, тропонин положительный',
                      'Стеноз СЛКА (≥50%): кровоснабжает >70% миокарда левого желудочка (ЛЖ) при правом типе доминирования; критическая зона — показание I класса для АКШ вне зависимости от выраженности симптомов'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Клиническая картина и классификация',
                    body: [
                      'Типичная стенокардия: давящая/сжимающая боль за грудиной, иррадиация в левую руку или нижнюю челюсть, провоцируется нагрузкой/холодом/стрессом, проходит в покое или после приёма нитроглицерина (НТГ)',
                      'Классификация стенокардии по Канадскому сердечно-сосудистому обществу (ССО):',
                      '  • ССО I: стенокардия только при интенсивной или длительной нагрузке',
                      '  • ССО II: незначительное ограничение — стенокардия при подъёме более одного пролёта лестницы или ходьбе более двух кварталов по ровной поверхности',
                      '  • ССО III: выраженное ограничение — стенокардия при минимальной нагрузке (один квартал, один пролёт лестницы)',
                      '  • ССО IV: стенокардия в покое или невозможность выполнить любую нагрузку без симптомов',
                      'Факторы риска: артериальная гипертензия, дислипидемия, сахарный диабет (СД), курение, отягощённый семейный анамнез (родственник первой степени, мужчина <55 лет / женщина <65 лет), возраст, мужской пол, хроническая болезнь почек (ХБП), ожирение'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Диагностика',
                    body: [
                      'ЭКГ (электрокардиограмма): ЭКГ покоя (может быть нормальной при стабильной ИБС); нагрузочный тест (велоэргометрия/тредмил-тест) — горизонтальная или нисходящая депрессия ST ≥1 мм = положительный результат',
                      'Эхокардиография (трансторакальная эхокардиография, ТТЭ): фракция выброса левого желудочка (ФВЛЖ), региональные нарушения сократимости (РНС), сопутствующая патология клапанов',
                      'КТ-коронарография (КТК): неинвазивный метод; высокая отрицательная прогностическая ценность; кальциевый индекс по Агатстону характеризует атеросклеротическую нагрузку',
                      'Инвазивная коронарная ангиография (ИКА): золотой стандарт; определяет локализацию, степень и анатомию поражения для планирования реваскуляризации; измерение фракционного резерва кровотока (ФРК) (с помощью давящего проводника) подтверждает гемодинамическую значимость: ФРК ≤0,80 = значимый стеноз',
                      'Перфузионная сцинтиграфия миокарда (ПСМ): однофотонная эмиссионная КТ (ОФЭКТ) или стресс-МРТ; количественно оценивает ишемическую нагрузку и жизнеспособность миокарда; «спящий» (гибернирующий) миокард — жизнеспособный, но хронически ишемизированный участок ЛЖ, восстанавливающий сократимость после реваскуляризации',
                      'ФВЛЖ — наиболее важный прогностический показатель; АКШ обеспечивает преимущество в выживаемости над медикаментозной терапией при ФВЛЖ <35% с наличием гибернирующего миокарда (исследование STICH — 10-летнее наблюдение)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Показания к АКШ',
                    body: [
                      'Стеноз СЛКА ≥50%: показание I класса — АКШ предпочтительнее чрескожного коронарного вмешательства (ЧКВ) вне зависимости от индекса SYNTAX (рекомендации ЕОК 2018)',
                      'Трёхсосудистое поражение (ТСП) с индексом SYNTAX >22: показание I класса для АКШ; ЧКВ приемлемо только при низком значении SYNTAX (<22)',
                      'ТСП + сахарный диабет (СД): АКШ настоятельно предпочтительно — исследование FREEDOM показало значительное снижение риска смерти, инфаркта миокарда (ИМ) и инсульта по сравнению с ЧКВ через 5 лет',
                      'Двухсосудистое поражение с вовлечением проксимального отдела передней межжелудочковой артерии (ПМЖА): АКШ предпочтительно при подходящей анатомии',
                      'Дисфункция ЛЖ (ФВЛЖ <35%) с жизнеспособным миокардом: показание I класса для АКШ — исследование STICH продемонстрировало снижение общей смертности через 10 лет по сравнению только с медикаментозной терапией',
                      'Сопутствующая операция на клапане: АКШ показано (I класс) при стенозе ≥70% в любом крупном эпикардиальном сосуде во время клапанной операции',
                      'Неудачное или анатомически невозможное ЧКВ: АКШ в качестве спасительной или плановой альтернативы'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'АКШ vs ЧКВ — выбор метода',
                    body: [
                      'Индекс SYNTAX: ангиографическая оценка сложности поражения. Низкий <22 → ЧКВ приемлемо; промежуточный 23–32 → индивидуальный подход; высокий >32 → предпочтительно АКШ',
                      'EuroSCORE II (Европейская система оценки операционного риска): прогнозирует 30-дневную операционную летальность; используется для консультирования пациента и получения информированного согласия',
                      'Решение кардиологической команды: обязательное мультидисциплинарное обсуждение (интервенционный кардиолог + кардиохирург + кардиолог) при всех сложных поражениях — рекомендация I класса ЕОК/ААС',
                      'Преимущества АКШ: более полная реваскуляризация; шунт полностью обходит поражённый сосуд; долгосрочная проходимость шунта защищает от прогрессирования проксимальной болезни; превосходство при СД, ТСП, поражении СЛКА и дисфункции ЛЖ',
                      'Преимущества ЧКВ: нет стернотомии, возможность местной анестезии, быстрое восстановление, подходит для однососудистого/очагового поражения или пациентов с высоким хирургическим риском'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'coronary-artery-disease-001',
                question_en: 'What is the conventional diameter reduction threshold for a significant left main coronary artery (LMCA) stenosis?',
                question_ru: 'Каков общепринятый порог сужения по диаметру для гемодинамически значимого стеноза ствола левой коронарной артерии (СЛКА)?',
                answer_en: '≥50% diameter reduction',
                answer_ru: 'Сужение ≥50% по диаметру'
              },
              {
                id: 'coronary-artery-disease-002',
                question_en: 'What is the conventional diameter reduction threshold for a significant non-LMCA coronary stenosis?',
                question_ru: 'Каков общепринятый порог сужения по диаметру для значимого стеноза некоронарного (не-СЛКА) сосуда?',
                answer_en: '≥70% diameter reduction',
                answer_ru: 'Сужение ≥70% по диаметру'
              },
              {
                id: 'coronary-artery-disease-003',
                question_en: 'What fractional flow reserve (FFR) value confirms haemodynamic significance of a coronary stenosis at invasive angiography?',
                question_ru: 'Какое значение фракционного резерва кровотока (ФРК) подтверждает гемодинамическую значимость стеноза коронарной артерии при инвазивной ангиографии?',
                answer_en: 'FFR ≤0.80',
                answer_ru: 'ФРК ≤0,80'
              },
              {
                id: 'coronary-artery-disease-004',
                question_en: 'Which Canadian Cardiovascular Society (CCS) class describes angina occurring at rest?',
                question_ru: 'Какой класс по Канадскому сердечно-сосудистому обществу (ССО) соответствует стенокардии в покое?',
                answer_en: 'CCS class IV',
                answer_ru: 'ССО IV класс'
              },
              {
                id: 'coronary-artery-disease-005',
                question_en: 'What is the gold standard investigation for defining coronary anatomy before coronary artery bypass grafting (CABG)?',
                question_ru: 'Какой метод является золотым стандартом для оценки анатомии коронарных артерий перед аортокоронарным шунтированием (АКШ)?',
                answer_en: 'Invasive coronary angiography (ICA)',
                answer_ru: 'Инвазивная коронарная ангиография (ИКА)'
              },
              {
                id: 'coronary-artery-disease-006',
                question_en: 'What left ventricular ejection fraction (LVEF) threshold defines severe LV dysfunction relevant to CABG decision-making?',
                question_ru: 'Какой порог фракции выброса левого желудочка (ФВЛЖ) определяет тяжёлую дисфункцию ЛЖ, важную для решения вопроса об АКШ?',
                answer_en: 'LVEF <35%',
                answer_ru: 'ФВЛЖ <35%'
              },
              {
                id: 'coronary-artery-disease-007',
                question_en: 'Which trial demonstrated a 10-year all-cause mortality benefit of CABG over medical therapy in patients with left ventricular ejection fraction (LVEF) <35%?',
                question_ru: 'Какое исследование продемонстрировало снижение общей смертности через 10 лет при АКШ по сравнению с медикаментозной терапией у пациентов с ФВЛЖ <35%?',
                answer_en: 'STICH trial',
                answer_ru: 'Исследование STICH'
              },
              {
                id: 'coronary-artery-disease-008',
                question_en: 'Which angiographic scoring system quantifies coronary complexity and guides the CABG vs PCI (percutaneous coronary intervention) decision?',
                question_ru: 'Какая ангиографическая система оценки количественно характеризует сложность коронарного поражения и помогает выбрать между АКШ и ЧКВ (чрескожным коронарным вмешательством)?',
                answer_en: 'SYNTAX score',
                answer_ru: 'Индекс SYNTAX'
              },
              {
                id: 'coronary-artery-disease-009',
                question_en: 'Above which SYNTAX score is CABG preferred over PCI (percutaneous coronary intervention) for three-vessel coronary artery disease (3VD)?',
                question_ru: 'При каком значении индекса SYNTAX АКШ предпочтительнее ЧКВ при трёхсосудистом поражении коронарных артерий?',
                answer_en: 'SYNTAX score >22',
                answer_ru: 'Индекс SYNTAX >22'
              },
              {
                id: 'coronary-artery-disease-010',
                question_en: 'Which patient subgroup shows the greatest survival benefit from CABG over PCI (percutaneous coronary intervention) in multi-vessel coronary artery disease (MVD)?',
                question_ru: 'У какой группы пациентов с многососудистым поражением коронарных артерий наибольший выигрыш в выживаемости при АКШ по сравнению с ЧКВ?',
                answer_en: 'Diabetes mellitus (DM)',
                answer_ru: 'Сахарный диабет (СД)'
              },
              {
                id: 'coronary-artery-disease-011',
                question_en: 'Which randomised trial showed CABG superiority over PCI (percutaneous coronary intervention) in diabetic patients with multi-vessel coronary artery disease (MVD)?',
                question_ru: 'Какое рандомизированное исследование показало превосходство АКШ над ЧКВ у пациентов с сахарным диабетом и многососудистым поражением коронарных артерий?',
                answer_en: 'FREEDOM trial',
                answer_ru: 'Исследование FREEDOM'
              },
              {
                id: 'coronary-artery-disease-012',
                question_en: 'Left main coronary artery (LMCA) stenosis ≥50% is a Class I indication for which revascularisation procedure (ESC 2018 guidelines)?',
                question_ru: 'Стеноз СЛКА ≥50% является показанием I класса для какой процедуры реваскуляризации (рекомендации ЕОК 2018)?',
                answer_en: 'CABG (coronary artery bypass grafting)',
                answer_ru: 'АКШ (аортокоронарное шунтирование)'
              },
              {
                id: 'coronary-artery-disease-013',
                question_en: 'What is the mandatory ESC/AHA Class I recommendation for decision-making in complex coronary artery disease (CAD)?',
                question_ru: 'Что является обязательной рекомендацией I класса ЕОК/ААС при принятии решения по поводу сложной ишемической болезни сердца (ИБС)?',
                answer_en: 'Heart team discussion',
                answer_ru: 'Обсуждение кардиологической командой'
              },
              {
                id: 'coronary-artery-disease-014',
                question_en: 'In the ischaemic cascade, which ventricular dysfunction appears first — diastolic or systolic?',
                question_ru: 'В ишемическом каскаде какая дисфункция желудочка появляется первой — диастолическая или систолическая?',
                answer_en: 'Diastolic dysfunction',
                answer_ru: 'Диастолическая дисфункция'
              },
              {
                id: 'coronary-artery-disease-015',
                question_en: 'Which type of acute coronary syndrome (ACS) is characterised by a positive troponin with no ST elevation on the electrocardiogram (ECG)?',
                question_ru: 'Какой тип острого коронарного синдрома (ОКС) характеризуется положительным тропонином без подъёма ST на электрокардиограмме (ЭКГ)?',
                answer_en: 'NSTEMI (non-ST-elevation MI)',
                answer_ru: 'ИМбпST (инфаркт миокарда без подъёма ST)'
              },
              {
                id: 'coronary-artery-disease-016',
                question_en: 'What percentage of left ventricular (LV) myocardium does the left main coronary artery (LMCA) supply in a right-dominant coronary system?',
                question_ru: 'Какой процент миокарда левого желудочка (ЛЖ) кровоснабжает СЛКА при правом типе коронарного доминирования?',
                answer_en: '>70% LV myocardium',
                answer_ru: '>70% миокарда ЛЖ'
              },
              {
                id: 'coronary-artery-disease-017',
                question_en: 'What is the minimum ST depression on exercise treadmill test (ETT) that constitutes a positive result for coronary artery disease (CAD)?',
                question_ru: 'Какова минимальная депрессия ST при нагрузочном тредмил-тесте, считающаяся положительным результатом на ИБС?',
                answer_en: '≥1 mm ST depression',
                answer_ru: 'Депрессия ST ≥1 мм'
              },
              {
                id: 'coronary-artery-disease-018',
                question_en: 'At the time of valve surgery, what coronary stenosis threshold is a Class I indication to perform concomitant CABG (coronary artery bypass grafting)?',
                question_ru: 'Какой порог стеноза коронарной артерии является показанием I класса для одновременного АКШ при клапанной операции?',
                answer_en: '≥70% in any major vessel',
                answer_ru: '≥70% в любом крупном сосуде'
              },
              {
                id: 'coronary-artery-disease-019',
                question_en: 'What term describes chronically ischaemic but viable left ventricular (LV) myocardium that recovers contractile function after revascularisation?',
                question_ru: 'Как называется хронически ишемизированный, но жизнеспособный миокард левого желудочка (ЛЖ), восстанавливающий сократимость после реваскуляризации?',
                answer_en: 'Hibernating myocardium',
                answer_ru: 'Гибернирующий миокард'
              },
              {
                id: 'coronary-artery-disease-020',
                question_en: 'What is the mechanism of stable angina in fixed coronary artery disease (CAD)?',
                question_ru: 'Каков механизм стабильной стенокардии при фиксированном стенозе коронарной артерии?',
                answer_en: 'Supply-demand mismatch',
                answer_ru: 'Дисбаланс доставки и потребности'
              }
            ]
          }
        ]
      },

      // ── Anatomy ────────────────────────────────────────────────────────────────
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
          },


          // ── Topic: Venous Drainage — Head, Neck & Upper Limb ────────────────────
          {
            slug: 'venous-head-neck-upper-limb',
            title_en: 'Venous Drainage — Head, Neck & Upper Limb',
            title_ru: 'Венозный отток — голова, шея и верхняя конечность',
            note: {
              en: {
                sections: [
                  {
                    title: 'Internal Jugular Vein (IJV)',
                    body: [
                      'Continuation of the sigmoid sinus at the jugular foramen',
                      'Runs within the carotid sheath, lateral to the common carotid artery (CCA) and vagus nerve (CN X)',
                      'Tributaries: facial vein, lingual vein, pharyngeal veins, superior thyroid vein, middle thyroid vein',
                      'Joins the subclavian vein behind the sternoclavicular joint to form the brachiocephalic vein',
                      'Right IJV is preferred for central venous access — provides the most direct (straight) route to the SVC and right atrium',
                      'Landmark: medial border of SCM at the level of the thyroid cartilage'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'External Jugular Vein (EJV)',
                    body: [
                      'Formed by the junction of the posterior division of the retromandibular vein and the posterior auricular vein',
                      'Crosses the sternocleidomastoid (SCM) muscle superficially',
                      'Pierces deep fascia to drain into the subclavian vein',
                      'Clinical use: assessment of jugular venous pressure (JVP) — normally not visible above clavicle with patient at 45°',
                      'Anterior jugular vein: paired veins draining the anterior neck; communicate across the midline via the jugular venous arch just above the sternum'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Brachiocephalic Veins & SVC',
                    body: [
                      'Brachiocephalic (innominate) vein = IJV + subclavian vein union behind the sternoclavicular joint',
                      'Right brachiocephalic vein: short, vertical course (~2.5 cm)',
                      'Left brachiocephalic vein: longer, crosses the midline horizontally behind the manubrium (~6 cm)',
                      'Superior Vena Cava (SVC): formed by the union of the two brachiocephalic veins at the level of the right 1st costal cartilage; drains into the right atrium',
                      'Vertebral veins: descend through the transverse foramina accompanying the vertebral artery; drain into the brachiocephalic veins',
                      'SVC syndrome: obstruction of SVC (thrombus, lung cancer, lymphoma) → facial and upper limb oedema, raised JVP, dilated chest wall collaterals'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Upper Limb Deep Veins',
                    body: [
                      'Radial veins and ulnar veins (venae comitantes): paired deep veins accompanying radial and ulnar arteries',
                      'Brachial veins (venae comitantes): paired, accompanying the brachial artery; unite to form the axillary vein at the lower border of teres major',
                      'Axillary vein: continuation of the brachial vein; becomes the subclavian vein at the outer border of the 1st rib',
                      'Subclavian vein: crosses anterior to scalenus anterior (artery is posterior); joins IJV → brachiocephalic'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Upper Limb Superficial Veins',
                    body: [
                      'Cephalic vein: arises from lateral end of dorsal venous arch of hand; runs along lateral forearm and arm; passes through deltopectoral groove; drains into the axillary vein; used for IV access and PICC lines',
                      'Basilic vein: arises from medial end of dorsal venous arch; runs along medial forearm and arm; pierces deep fascia at mid-arm; joins brachial vein to form axillary vein; used for brachiobasilic AV fistula',
                      'Median cubital vein: connects cephalic and basilic veins in the antecubital fossa; most commonly used vein for venepuncture and IV cannulation',
                      'Median antebrachial vein: runs on anterior forearm; variable; may drain into median cubital or separately into cephalic/basilic'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Paget-Schroetter syndrome: effort thrombosis of axillary-subclavian vein — thoracic outlet compression; treat with thrombolysis + rib resection',
                      'AV fistula creation: radiocephalic (wrist), brachiocephalic (elbow), brachiobasilic (basilic transposition) in order of preference',
                      'PICC lines: via cephalic or basilic vein; tip should lie at SVC-RA junction',
                      'IJV cannulation complications: carotid artery puncture, pneumothorax, haemothorax, air embolism, infection'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Внутренняя яремная вена (ВЯВ)',
                    body: [
                      'Продолжение сигмовидного синуса у яремного отверстия',
                      'Проходит в сонном влагалище, латеральнее общей сонной артерии (ОСА) и блуждающего нерва (ЧН X)',
                      'Притоки: лицевая, язычная, глоточные, верхняя щитовидная, средняя щитовидная вены',
                      'Сливается с подключичной веной позади грудино-ключичного сустава, образуя плечеголовную вену',
                      'Правая ВЯВ предпочтительна для центрального венозного доступа — прямой путь к ВПВ и правому предсердию',
                      'Ориентир: медиальный край грудино-ключично-сосцевидной мышцы (ГКСМ) на уровне щитовидного хряща'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Наружная яремная вена (НЯВ)',
                    body: [
                      'Образуется слиянием задней ветви занижнечелюстной вены и задней ушной вены',
                      'Проходит поверхностно по ГКСМ',
                      'Прободает глубокую фасцию, впадая в подключичную вену',
                      'Клиническое значение: оценка венозного давления в яремных венах (ВДЯ) — в норме не видна выше ключицы при угле 45°',
                      'Передняя яремная вена: парные вены, дренирующие переднюю поверхность шеи; соединяются по средней линии через яремную венозную дугу над грудиной'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Плечеголовные вены и верхняя полая вена',
                    body: [
                      'Плечеголовная (безымянная) вена = слияние ВЯВ и подключичной вены позади грудино-ключичного сустава',
                      'Правая плечеголовная вена: короткая, вертикальная (~2,5 см)',
                      'Левая плечеголовная вена: более длинная, горизонтальный ход позади рукоятки грудины (~6 см)',
                      'Верхняя полая вена (ВПВ): образуется при слиянии двух плечеголовных вен на уровне правого I рёберного хряща; впадает в правое предсердие',
                      'Позвоночные вены: спускаются через поперечные отверстия рядом с позвоночной артерией; впадают в плечеголовные вены',
                      'Синдром ВПВ: обструкция (тромбоз, рак лёгкого, лимфома) → отёк лица и верхних конечностей, повышение ВДЯ, расширение коллатералей грудной стенки'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Глубокие вены верхней конечности',
                    body: [
                      'Лучевые и локтевые вены (venae comitantes): парные, сопровождают одноимённые артерии',
                      'Плечевые вены (venae comitantes): парные, сопровождают плечевую артерию; сливаются, образуя подмышечную вену у нижнего края большой круглой мышцы',
                      'Подмышечная вена: продолжение плечевых вен; переходит в подключичную у наружного края I ребра',
                      'Подключичная вена: проходит кпереди от передней лестничной мышцы (артерия — кзади); сливается с ВЯВ → плечеголовная вена'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Поверхностные вены верхней конечности',
                    body: [
                      'Головная вена: начинается от латерального конца тыльной венозной дуги кисти; проходит по латеральной поверхности предплечья и плеча; через дельтопекторальную борозду впадает в подмышечную вену; используется для в/в доступа и ПИКК-катетеров',
                      'Основная вена: начинается от медиального конца тыльной дуги; проходит по медиальной поверхности предплечья и плеча; прободает фасцию на середине плеча; вливается в плечевые вены → подмышечная; используется для брахиобазилической АВФ',
                      'Срединная локтевая вена: соединяет головную и основную в локтевой ямке; наиболее часто используется для венепункции',
                      'Срединная вена предплечья: проходит по передней поверхности предплечья; вариабельна'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические ориентиры',
                    body: [
                      'Синдром Педжета–Шреттера: усилиетромбоз подключично-подмышечной вены — компрессия в грудном выходе; лечение: тромболизис + резекция ребра',
                      'Создание АВФ: лучезапястная (лучевая–головная), брахиоцефалическая (локтевая), брахиобазилическая (транспозиция основной) — в порядке предпочтения',
                      'ПИКК-катетеры: через головную или основную вену; кончик должен находиться у ВПВ–ПП соединения',
                      'Осложнения катетеризации ВЯВ: пункция сонной артерии, пневмоторакс, гемоторакс, воздушная эмболия, инфекция'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'venous-head-neck-001',
                question_en: 'IJV is the continuation of?',
                question_ru: 'ВЯВ является продолжением?',
                answer_en: 'Sigmoid sinus',
                answer_ru: 'Сигмовидный синус'
              },
              {
                id: 'venous-head-neck-002',
                question_en: 'IJV position in carotid sheath?',
                question_ru: 'Положение ВЯВ в сонном влагалище?',
                answer_en: 'Lateral to CCA',
                answer_ru: 'Латеральнее ОСА'
              },
              {
                id: 'venous-head-neck-003',
                question_en: 'IJV tributaries (4 named)?',
                question_ru: 'Притоки ВЯВ (4 именных)?',
                answer_en: 'Facial, lingual, pharyngeal, thyroid',
                answer_ru: 'Лицевая, язычная, глоточные, щитовидные'
              },
              {
                id: 'venous-head-neck-004',
                question_en: 'IJV + subclavian form?',
                question_ru: 'ВЯВ + подключичная образуют?',
                answer_en: 'Brachiocephalic vein',
                answer_ru: 'Плечеголовную вену'
              },
              {
                id: 'venous-head-neck-005',
                question_en: 'Why right IJV preferred for CVC?',
                question_ru: 'Почему правая ВЯВ предпочтительна для ЦВК?',
                answer_en: 'Straight path to SVC',
                answer_ru: 'Прямой путь к ВПВ'
              },
              {
                id: 'venous-head-neck-006',
                question_en: 'EJV formed by?',
                question_ru: 'Из чего образуется НЯВ?',
                answer_en: 'Retromandibular + posterior auricular',
                answer_ru: 'Занижнечелюстная + задняя ушная'
              },
              {
                id: 'venous-head-neck-007',
                question_en: 'EJV drains to?',
                question_ru: 'В что впадает НЯВ?',
                answer_en: 'Subclavian vein',
                answer_ru: 'Подключичная вена'
              },
              {
                id: 'venous-head-neck-008',
                question_en: 'EJV clinical use?',
                question_ru: 'Клиническое применение НЯВ?',
                answer_en: 'JVP assessment',
                answer_ru: 'Оценка ВДЯ'
              },
              {
                id: 'venous-head-neck-009',
                question_en: 'Right brachiocephalic vein course?',
                question_ru: 'Ход правой плечеголовной вены?',
                answer_en: 'Short, vertical',
                answer_ru: 'Короткая, вертикальная'
              },
              {
                id: 'venous-head-neck-010',
                question_en: 'Left brachiocephalic vein course?',
                question_ru: 'Ход левой плечеголовной вены?',
                answer_en: 'Long, horizontal',
                answer_ru: 'Длинная, горизонтальная'
              },
              {
                id: 'venous-head-neck-011',
                question_en: 'SVC formed at which level?',
                question_ru: 'На каком уровне образуется ВПВ?',
                answer_en: 'Right 1st costal cartilage',
                answer_ru: 'Правый I рёберный хрящ'
              },
              {
                id: 'venous-head-neck-012',
                question_en: 'SVC drains to?',
                question_ru: 'ВПВ впадает в?',
                answer_en: 'Right atrium',
                answer_ru: 'Правое предсердие'
              },
              {
                id: 'venous-head-neck-013',
                question_en: 'SVC syndrome cardinal feature?',
                question_ru: 'Кардинальный признак синдрома ВПВ?',
                answer_en: 'Facial oedema + raised JVP',
                answer_ru: 'Отёк лица + повышение ВДЯ'
              },
              {
                id: 'venous-head-neck-014',
                question_en: 'Axillary vein begins at?',
                question_ru: 'Откуда начинается подмышечная вена?',
                answer_en: 'Lower border teres major',
                answer_ru: 'Нижний край большой круглой мышцы'
              },
              {
                id: 'venous-head-neck-015',
                question_en: 'Axillary vein becomes subclavian at?',
                question_ru: 'Где подмышечная переходит в подключичную?',
                answer_en: 'Outer border 1st rib',
                answer_ru: 'Наружный край I ребра'
              },
              {
                id: 'venous-head-neck-016',
                question_en: 'Cephalic vein drains into?',
                question_ru: 'В что впадает головная вена?',
                answer_en: 'Axillary vein',
                answer_ru: 'Подмышечная вена'
              },
              {
                id: 'venous-head-neck-017',
                question_en: 'Cephalic vein route at shoulder?',
                question_ru: 'Путь головной вены у плеча?',
                answer_en: 'Deltopectoral groove',
                answer_ru: 'Дельтопекторальная борозда'
              },
              {
                id: 'venous-head-neck-018',
                question_en: 'Basilic vein drains into?',
                question_ru: 'В что впадает основная вена?',
                answer_en: 'Brachial → axillary vein',
                answer_ru: 'Плечевые → подмышечная вена'
              },
              {
                id: 'venous-head-neck-019',
                question_en: 'Basilic vein used for?',
                question_ru: 'Для чего используется основная вена?',
                answer_en: 'Brachiobasilic AV fistula',
                answer_ru: 'Брахиобазилическая АВФ'
              },
              {
                id: 'venous-head-neck-020',
                question_en: 'Median cubital vein connects?',
                question_ru: 'Что соединяет срединная локтевая вена?',
                answer_en: 'Cephalic + basilic veins',
                answer_ru: 'Головная + основная вены'
              },
              {
                id: 'venous-head-neck-021',
                question_en: 'Best vein for venepuncture?',
                question_ru: 'Лучшая вена для венепункции?',
                answer_en: 'Median cubital vein',
                answer_ru: 'Срединная локтевая вена'
              },
              {
                id: 'venous-head-neck-022',
                question_en: 'AV fistula first choice?',
                question_ru: 'АВФ первый выбор?',
                answer_en: 'Radiocephalic (wrist)',
                answer_ru: 'Лучезапястная (лучевая–головная)'
              },
              {
                id: 'venous-head-neck-023',
                question_en: 'AV fistula second choice?',
                question_ru: 'АВФ второй выбор?',
                answer_en: 'Brachiocephalic (elbow)',
                answer_ru: 'Брахиоцефалическая (локтевая)'
              },
              {
                id: 'venous-head-neck-024',
                question_en: 'Paget-Schroetter syndrome involves which vein?',
                question_ru: 'Какая вена поражается при синдроме Педжета–Шреттера?',
                answer_en: 'Axillary-subclavian vein',
                answer_ru: 'Подмышечно-подключичная вена'
              },
              {
                id: 'venous-head-neck-025',
                question_en: 'Vertebral veins drain to?',
                question_ru: 'В что впадают позвоночные вены?',
                answer_en: 'Brachiocephalic vein',
                answer_ru: 'Плечеголовная вена'
              },
              {
                id: 'venous-head-neck-026',
                question_en: 'Subclavian vein relation to scalenus anterior?',
                question_ru: 'Отношение подключичной вены к передней лестничной?',
                answer_en: 'Anterior to scalenus',
                answer_ru: 'Кпереди от лестничной мышцы'
              },
              {
                id: 'venous-head-neck-027',
                question_en: 'Anterior jugular veins communicate via?',
                question_ru: 'Через что соединяются передние яремные вены?',
                answer_en: 'Jugular venous arch',
                answer_ru: 'Яремная венозная дуга'
              },
              {
                id: 'venous-head-neck-028',
                question_en: 'IJV cannulation landmark?',
                question_ru: 'Ориентир для катетеризации ВЯВ?',
                answer_en: 'Medial border SCM, thyroid level',
                answer_ru: 'Медиальный край ГКСМ, уровень щитовидного хряща'
              },
              {
                id: 'venous-head-neck-029',
                question_en: 'SVC syndrome most common cause?',
                question_ru: 'Наиболее частая причина синдрома ВПВ?',
                answer_en: 'Lung cancer / lymphoma',
                answer_ru: 'Рак лёгкого / лимфома'
              },
              {
                id: 'venous-head-neck-030',
                question_en: 'PICC tip target location?',
                question_ru: 'Целевое положение кончика ПИКК-катетера?',
                answer_en: 'SVC–RA junction',
                answer_ru: 'ВПВ–ПП соединение'
              }
            ]
          },

          // ── Topic: Venous Drainage — Thorax & Abdomen ───────────────────────────
          {
            slug: 'venous-thorax-abdomen',
            title_en: 'Venous Drainage — Thorax & Abdomen',
            title_ru: 'Венозный отток — грудная клетка и живот',
            note: {
              en: {
                sections: [
                  {
                    title: 'Azygos Venous System',
                    body: [
                      'Azygos vein (right side): begins at T12 from the right ascending lumbar vein / right subcostal vein; ascends in the posterior mediastinum; arches over the right main bronchus to drain into the SVC at T4',
                      'Receives: right posterior intercostal veins (3rd–11th), right bronchial veins, right subcostal vein, hemiazygos and accessory hemiazygos via cross-communications',
                      'Hemiazygos vein (left, lower): begins at T9 from the left ascending lumbar / left subcostal; crosses the midline at T9 to drain into the azygos; receives: left lower posterior intercostals (9th–11th)',
                      'Accessory hemiazygos vein (left, upper): spans T4–T8; crosses midline at T7 to drain into the azygos; receives: left upper posterior intercostals (4th–8th)',
                      'The 1st and 2nd intercostal spaces drain via the superior intercostal vein → brachiocephalic vein',
                      'Clinical importance: the azygos system forms a collateral pathway when the IVC or SVC is obstructed'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Inferior Vena Cava (IVC)',
                    body: [
                      'Formed at L5 by the union of the two common iliac veins',
                      'Passes through the IVC foramen in the diaphragm at T8 to drain into the right atrium',
                      'Right-sided tributaries draining directly: right lumbar veins, right gonadal vein (testicular/ovarian), right suprarenal vein, right renal vein, hepatic veins',
                      'Left-sided exceptions — drain indirectly: left gonadal vein → left renal vein; left suprarenal vein → left renal vein',
                      'Left renal vein is longer than right because it must cross the aorta anteriorly (between aorta and SMA) — important surgical landmark; can be ligated at the aorta without renal loss due to collaterals',
                      'Hepatic veins (right, middle, left): drain directly into IVC just below the diaphragm (T8)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Portal Venous System',
                    body: [
                      'Portal vein: formed by the union of the superior mesenteric vein (SMV) + splenic vein, behind the neck of the pancreas (at L1)',
                      'Inferior mesenteric vein (IMV) typically drains into the splenic vein (occasionally SMV or at the angle of union)',
                      'Portal vein carries nutrient-rich blood from the GI tract and spleen to the liver',
                      'Divides into right and left portal vein branches within the porta hepatis',
                      'Portal hypertension: elevated portal pressure (>10–12 mmHg) → varices (oesophageal, gastric, rectal, caput medusae), splenomegaly, ascites',
                      'Porto-systemic anastomoses (sites of varices): lower oesophagus (left gastric ↔ azygos), rectum (superior rectal ↔ middle/inferior rectal), umbilicus (paraumbilical ↔ epigastric), retroperitoneum (Retzius veins)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Iliac Veins',
                    body: [
                      'External iliac vein: continuation of femoral vein from the inguinal ligament; joins internal iliac → common iliac',
                      'Internal iliac vein: drains pelvic viscera; tributaries correspond to internal iliac artery branches',
                      'Common iliac veins unite at L5 to form the IVC',
                      'Right common iliac vein is shorter; crossed by right ureter',
                      'May-Thurner (Cockett) syndrome: left common iliac vein compressed between the right common iliac artery and the lumbar vertebra → left iliac DVT; treat with catheter-directed thrombolysis + iliac stenting'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Система непарной вены',
                    body: [
                      'Непарная вена (справа): начинается на уровне T12 от правой восходящей поясничной / правой подрёберной вены; поднимается в заднем средостении; огибает правый главный бронх и впадает в ВПВ на уровне T4',
                      'Получает: правые задние межрёберные вены (3–11), правые бронхиальные, правую подрёберную, полунепарную и добавочную полунепарную через перекрёстные анастомозы',
                      'Полунепарная вена (слева, нижняя): начинается на T9; пересекает срединную линию на T9, впадая в непарную; получает: левые нижние задние межрёберные (9–11)',
                      'Добавочная полунепарная вена (слева, верхняя): уровень T4–T8; пересекает срединную линию на T7, впадая в непарную; получает: левые верхние задние межрёберные (4–8)',
                      '1-й и 2-й межрёберные промежутки дренируются через верхнюю межрёберную вену → плечеголовная вена',
                      'Клиническое значение: система непарной вены формирует коллатеральный путь при обструкции НПВ или ВПВ'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Нижняя полая вена (НПВ)',
                    body: [
                      'Образуется на уровне L5 слиянием двух общих подвздошных вен',
                      'Проходит через отверстие НПВ в диафрагме на уровне T8, впадая в правое предсердие',
                      'Правосторонние притоки (прямые): правые поясничные, правая гонадная (яичковая/яичниковая), правая надпочечниковая, правая почечная, печёночные вены',
                      'Левосторонние исключения — дренируются косвенно: левая гонадная → левая почечная; левая надпочечниковая → левая почечная',
                      'Левая почечная вена длиннее правой, так как пересекает аорту спереди (между аортой и ВБА) — важный хирургический ориентир; может быть перевязана у аорты без потери почки благодаря коллатералям',
                      'Печёночные вены (правая, средняя, левая): впадают непосредственно в НПВ чуть ниже диафрагмы (T8)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Система воротной вены',
                    body: [
                      'Воротная вена: образуется слиянием верхней брыжеечной (ВБВ) + селезёночной вены позади шейки поджелудочной железы (на уровне L1)',
                      'Нижняя брыжеечная вена (НБВ) обычно впадает в селезёночную (реже в ВБВ или в угол слияния)',
                      'Воротная вена несёт обогащённую питательными веществами кровь из желудочно-кишечного тракта и селезёнки в печень',
                      'Делится на правую и левую воротные ветви в воротах печени',
                      'Портальная гипертензия: давление >10–12 мм рт.ст. → варикоз (пищеводный, желудочный, ректальный, голова медузы), спленомегалия, асцит',
                      'Портосистемные анастомозы (места варикоза): нижний пищевод (левая желудочная ↔ непарная), прямая кишка (верхняя прямокишечная ↔ средняя/нижняя), пуп (околопупочные ↔ надчревные), забрюшинное пространство (вены Ретциуса)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Подвздошные вены',
                    body: [
                      'Наружная подвздошная вена: продолжение бедренной вены от паховой связки; соединяется с внутренней подвздошной → общая подвздошная',
                      'Внутренняя подвздошная вена: дренирует органы таза; притоки соответствуют ветвям внутренней подвздошной артерии',
                      'Общие подвздошные вены сливаются на уровне L5, образуя НПВ',
                      'Правая общая подвздошная вена короче; пересекается правым мочеточником',
                      'Синдром Мэй–Тёрнера (Кокетта): сдавление левой общей подвздошной вены между правой общей подвздошной артерией и поясничным позвонком → ТГВ левой подвздошной вены; лечение: катетер-направленный тромболизис + стентирование подвздошной вены'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'venous-thorax-001',
                question_en: 'Azygos vein drains into?',
                question_ru: 'В что впадает непарная вена?',
                answer_en: 'SVC at T4',
                answer_ru: 'ВПВ на уровне T4'
              },
              {
                id: 'venous-thorax-002',
                question_en: 'Azygos vein begins at?',
                question_ru: 'Откуда начинается непарная вена?',
                answer_en: 'T12 (ascending lumbar)',
                answer_ru: 'T12 (восходящая поясничная)'
              },
              {
                id: 'venous-thorax-003',
                question_en: 'Hemiazygos crosses midline at?',
                question_ru: 'На каком уровне полунепарная пересекает среднюю линию?',
                answer_en: 'T9',
                answer_ru: 'T9'
              },
              {
                id: 'venous-thorax-004',
                question_en: 'Accessory hemiazygos level?',
                question_ru: 'Уровень добавочной полунепарной вены?',
                answer_en: 'T4–T8',
                answer_ru: 'T4–T8'
              },
              {
                id: 'venous-thorax-005',
                question_en: 'Accessory hemiazygos crosses midline at?',
                question_ru: 'Добавочная полунепарная пересекает среднюю линию на?',
                answer_en: 'T7',
                answer_ru: 'T7'
              },
              {
                id: 'venous-thorax-006',
                question_en: 'IVC formed at vertebral level?',
                question_ru: 'На каком уровне позвоночника образуется НПВ?',
                answer_en: 'L5',
                answer_ru: 'L5'
              },
              {
                id: 'venous-thorax-007',
                question_en: 'IVC passes through diaphragm at?',
                question_ru: 'НПВ проходит через диафрагму на уровне?',
                answer_en: 'T8',
                answer_ru: 'T8'
              },
              {
                id: 'venous-thorax-008',
                question_en: 'Left gonadal vein drains to?',
                question_ru: 'В что впадает левая гонадная вена?',
                answer_en: 'Left renal vein',
                answer_ru: 'Левая почечная вена'
              },
              {
                id: 'venous-thorax-009',
                question_en: 'Right gonadal vein drains to?',
                question_ru: 'В что впадает правая гонадная вена?',
                answer_en: 'IVC directly',
                answer_ru: 'НПВ напрямую'
              },
              {
                id: 'venous-thorax-010',
                question_en: 'Left suprarenal vein drains to?',
                question_ru: 'В что впадает левая надпочечниковая вена?',
                answer_en: 'Left renal vein',
                answer_ru: 'Левая почечная вена'
              },
              {
                id: 'venous-thorax-011',
                question_en: 'Why is left renal vein longer?',
                question_ru: 'Почему левая почечная вена длиннее?',
                answer_en: 'Crosses aorta anteriorly',
                answer_ru: 'Пересекает аорту спереди'
              },
              {
                id: 'venous-thorax-012',
                question_en: 'Hepatic veins drain to?',
                question_ru: 'В что впадают печёночные вены?',
                answer_en: 'IVC below diaphragm',
                answer_ru: 'НПВ ниже диафрагмы'
              },
              {
                id: 'venous-thorax-013',
                question_en: 'Portal vein formed by?',
                question_ru: 'Из чего образуется воротная вена?',
                answer_en: 'SMV + splenic vein',
                answer_ru: 'ВБВ + селезёночная вена'
              },
              {
                id: 'venous-thorax-014',
                question_en: 'Portal vein formed behind?',
                question_ru: 'Воротная вена образуется позади?',
                answer_en: 'Neck of pancreas',
                answer_ru: 'Шейка поджелудочной железы'
              },
              {
                id: 'venous-thorax-015',
                question_en: 'IMV typically drains to?',
                question_ru: 'В что обычно впадает НБВ?',
                answer_en: 'Splenic vein',
                answer_ru: 'Селезёночная вена'
              },
              {
                id: 'venous-thorax-016',
                question_en: 'Portal hypertension threshold pressure?',
                question_ru: 'Пороговое давление при портальной гипертензии?',
                answer_en: '>10–12 mmHg',
                answer_ru: '>10–12 мм рт.ст.'
              },
              {
                id: 'venous-thorax-017',
                question_en: 'Porto-systemic site at oesophagus?',
                question_ru: 'Портосистемный анастомоз у пищевода?',
                answer_en: 'Left gastric ↔ azygos',
                answer_ru: 'Левая желудочная ↔ непарная'
              },
              {
                id: 'venous-thorax-018',
                question_en: 'Porto-systemic site at rectum?',
                question_ru: 'Портосистемный анастомоз у прямой кишки?',
                answer_en: 'Superior rectal ↔ middle/inferior rectal',
                answer_ru: 'Верхняя прямокишечная ↔ средняя/нижняя'
              },
              {
                id: 'venous-thorax-019',
                question_en: 'Common iliac veins join at?',
                question_ru: 'Общие подвздошные вены сливаются на уровне?',
                answer_en: 'L5',
                answer_ru: 'L5'
              },
              {
                id: 'venous-thorax-020',
                question_en: 'May-Thurner syndrome: vein compressed?',
                question_ru: 'Синдром Мэй–Тёрнера: какая вена сдавливается?',
                answer_en: 'Left common iliac vein',
                answer_ru: 'Левая общая подвздошная вена'
              },
              {
                id: 'venous-thorax-021',
                question_en: 'May-Thurner: compressed by which artery?',
                question_ru: 'Мэй–Тёрнер: какой артерией сдавливается вена?',
                answer_en: 'Right common iliac artery',
                answer_ru: 'Правая общая подвздошная артерия'
              },
              {
                id: 'venous-thorax-022',
                question_en: 'May-Thurner treatment?',
                question_ru: 'Лечение синдрома Мэй–Тёрнера?',
                answer_en: 'Thrombolysis + iliac stenting',
                answer_ru: 'Тромболизис + стентирование подвздошной'
              },
              {
                id: 'venous-thorax-023',
                question_en: 'Azygos system collateral role?',
                question_ru: 'Коллатеральная роль системы непарной вены?',
                answer_en: 'Bypass IVC or SVC obstruction',
                answer_ru: 'Обход обструкции НПВ или ВПВ'
              },
              {
                id: 'venous-thorax-024',
                question_en: 'Caput medusae indicates?',
                question_ru: 'О чём свидетельствует голова медузы?',
                answer_en: 'Portal hypertension',
                answer_ru: 'Портальная гипертензия'
              },
              {
                id: 'venous-thorax-025',
                question_en: '1st and 2nd intercostal veins drain to?',
                question_ru: '1-я и 2-я межрёберные вены впадают в?',
                answer_en: 'Superior intercostal → brachiocephalic',
                answer_ru: 'Верхняя межрёберная → плечеголовная'
              },
              {
                id: 'venous-thorax-026',
                question_en: 'IVC foramen in diaphragm at?',
                question_ru: 'Отверстие НПВ в диафрагме на уровне?',
                answer_en: 'T8',
                answer_ru: 'T8'
              },
              {
                id: 'venous-thorax-027',
                question_en: 'Budd-Chiari syndrome involves?',
                question_ru: 'Что поражается при синдроме Бадда–Киари?',
                answer_en: 'Hepatic vein occlusion',
                answer_ru: 'Окклюзия печёночных вен'
              },
              {
                id: 'venous-thorax-028',
                question_en: 'Hemiazygos drains which intercostals?',
                question_ru: 'Какие межрёберные вены дренирует полунепарная?',
                answer_en: 'Left lower (9th–11th)',
                answer_ru: 'Левые нижние (9–11)'
              },
              {
                id: 'venous-thorax-029',
                question_en: 'Accessory hemiazygos drains which intercostals?',
                question_ru: 'Какие межрёберные дренирует добавочная полунепарная?',
                answer_en: 'Left upper (4th–8th)',
                answer_ru: 'Левые верхние (4–8)'
              },
              {
                id: 'venous-thorax-030',
                question_en: 'Left renal vein passes between?',
                question_ru: 'Между чем проходит левая почечная вена?',
                answer_en: 'Aorta and SMA',
                answer_ru: 'Аорта и ВБА'
              }
            ]
          },

          // ── Topic: Venous Anatomy of the Lower Limb ─────────────────────────────
          {
            slug: 'venous-lower-limb',
            title_en: 'Venous Anatomy of the Lower Limb',
            title_ru: 'Венозная анатомия нижней конечности',
            note: {
              en: {
                sections: [
                  {
                    title: 'Great Saphenous Vein (GSV)',
                    body: [
                      'The longest vein in the body',
                      'Origin: medial end of the dorsal venous arch of the foot',
                      'Course: passes anterior to the medial malleolus; runs up the medial leg and thigh in the subcutaneous plane',
                      'Termination: drains into the femoral vein at the saphenofemoral junction (SFJ), located 3–4 cm below and lateral to the pubic tubercle',
                      'At the SFJ, the GSV receives 4 named tributaries: superficial epigastric vein, superficial external pudendal vein, deep external pudendal vein, superficial circumflex iliac vein',
                      'Other named tributaries: anterior accessory saphenous, posterior accessory saphenous (forms the "arch" at the calf)',
                      'Clinical uses: conduit for CABG and lower limb bypass grafts; SFJ incompetence → primary varicose veins'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Short (Small) Saphenous Vein (SSV)',
                    body: [
                      'Origin: lateral end of the dorsal venous arch of the foot',
                      'Course: passes posterior to the lateral malleolus; runs up the posterior midline of the calf between the two heads of gastrocnemius',
                      'Termination: drains into the popliteal vein at the saphenopopliteal junction (SPJ) — variable level but typically in the popliteal fossa behind the knee',
                      'SPJ level must be confirmed pre-operatively with duplex ultrasound',
                      'The SSV may have a thigh extension (vein of Giacomini) that connects to the GSV'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Perforating (Communicating) Veins',
                    body: [
                      'Connect the superficial (saphenous) system to the deep (axial) veins',
                      'Normal direction of flow: superficial → deep (inward)',
                      'Incompetent perforators: valves fail → reverse flow (outward) → superficial venous hypertension → varicose veins, lipodermatosclerosis, venous ulcers',
                      'Named groups (high-yield):',
                      '  Cockett\'s perforators (posterior tibial group): medial lower leg above medial malleolus — most clinically important (related to venous ulcers at gaiter zone)',
                      '  Boyd\'s perforator: medial, just below the knee',
                      '  Dodd\'s (Hunter\'s) perforators: medial mid-thigh',
                      '  May\'s perforator: posterior calf / SSV territory'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Deep Venous System',
                    body: [
                      'Plantar veins → posterior tibial + anterior tibial + peroneal veins (venae comitantes — paired)',
                      'Posterior tibial + peroneal → tibioperoneal trunk → popliteal vein',
                      'Anterior tibial vein (from dorsalis pedis) → popliteal vein',
                      'Popliteal vein: lies superficial to the popliteal artery in the popliteal fossa',
                      'At the adductor hiatus → femoral vein (SFA companion)',
                      'Femoral vein + deep femoral vein → common femoral vein',
                      'Common femoral vein → external iliac vein at the inguinal ligament'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surgical Correlates',
                    body: [
                      'Varicose veins: most commonly due to SFJ incompetence → GSV reflux; treated by high ligation + stripping, EVLA, RFA, foam sclerotherapy',
                      'GSV harvest for CABG: "reversed" technique (invert vein to correct valve direction) or "in-situ" technique (valves destroyed with valvulotome)',
                      'Deep vein thrombosis (DVT): most commonly starts in calf veins; propagates proximally; risk of PE; treat with anticoagulation (LMWH/DOAC)',
                      'Venous ulcers: at the gaiter zone (medial lower leg, over medial malleolus) — site of Cockett\'s perforators; treat with compression therapy',
                      'Varicose vein CEAP classification: C0 (no signs) to C6 (active venous ulcer)',
                      'Chronic venous insufficiency: caused by venous hypertension from reflux and/or obstruction'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Большая подкожная вена (БПВ)',
                    body: [
                      'Самая длинная вена в организме',
                      'Начало: медиальный конец тыльной венозной дуги стопы',
                      'Ход: проходит кпереди от медиальной лодыжки; поднимается по медиальной поверхности голени и бедра в подкожной клетчатке',
                      'Окончание: впадает в бедренную вену в сафено-феморальном соустье (СФС) на 3–4 см ниже и латеральнее лобкового бугорка',
                      'В области СФС БПВ принимает 4 именных притока: поверхностную надчревную, поверхностную наружную половую, глубокую наружную половую, поверхностную артерию, огибающую подвздошную кость',
                      'Другие притоки: передняя добавочная подкожная, задняя добавочная подкожная (образует «дугу» на голени)',
                      'Клиническое применение: кондуит для АКШ и шунтирования нижних конечностей; несостоятельность СФС → варикозная болезнь'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Малая подкожная вена (МПВ)',
                    body: [
                      'Начало: латеральный конец тыльной венозной дуги стопы',
                      'Ход: проходит позади латеральной лодыжки; поднимается по задней средней линии голени между двумя головками икроножной мышцы',
                      'Окончание: впадает в подколенную вену в сафено-подколенном соустье (СПС) — уровень вариабелен, как правило в подколенной ямке',
                      'Уровень СПС необходимо уточнить предоперационно при дуплексном сканировании',
                      'МПВ может иметь бедренное продолжение (вена Джакомини), соединяющееся с БПВ'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Перфорантные (коммуникантные) вены',
                    body: [
                      'Соединяют поверхностную (подкожную) и глубокую (аксиальную) системы',
                      'Нормальное направление кровотока: поверхностная → глубокая (кнутри)',
                      'Несостоятельные перфоранты: клапаны не работают → обратный ток (кнаружи) → венозная гипертензия → варикоз, липодерматосклероз, венозные язвы',
                      'Именные группы (высокий приоритет):',
                      '  Перфоранты Кокетта (задняя большеберцовая группа): медиальная поверхность нижней голени выше медиальной лодыжки — наибольшее клиническое значение (венозные язвы в «гетровой» зоне)',
                      '  Перфорант Бойда: медиальная поверхность, чуть ниже колена',
                      '  Перфоранты Додда (Хантера): медиальная поверхность середины бедра',
                      '  Перфорант Мэя: задняя поверхность голени / зона МПВ'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Глубокая венозная система',
                    body: [
                      'Подошвенные вены → задние большеберцовые + передние большеберцовые + малоберцовые вены (venae comitantes — парные)',
                      'Задние большеберцовые + малоберцовые → малоберцово-большеберцовый ствол → подколенная вена',
                      'Передняя большеберцовая вена (от тыльной вены стопы) → подколенная вена',
                      'Подколенная вена: расположена поверхностнее подколенной артерии в подколенной ямке',
                      'В сухожильном отверстии → бедренная вена (спутник ПБА)',
                      'Бедренная вена + глубокая вена бедра → общая бедренная вена',
                      'Общая бедренная вена → наружная подвздошная вена у паховой связки'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Хирургические ориентиры',
                    body: [
                      'Варикозная болезнь: чаще всего из-за несостоятельности СФС → рефлюкс по БПВ; лечение: высокая перевязка + стриппинг, ЭВЛК, РЧА, пенная склеротерапия',
                      'Забор БПВ для АКШ: «реверсная» техника (переворот вены) или «in situ» (разрушение клапанов вальвулотомом)',
                      'Тромбоз глубоких вен (ТГВ): чаще начинается в венах голени; распространяется проксимально; риск ТЭЛА; лечение: антикоагулянты (НМГ/ПОАК)',
                      'Венозные язвы: в «гетровой» зоне (медиальная поверхность нижней голени, над медиальной лодыжкой) — зона перфорантов Кокетта; лечение: компрессионная терапия',
                      'Классификация CEAP: C0 (нет признаков) – C6 (активная венозная язва)',
                      'Хроническая венозная недостаточность (ХВН): венозная гипертензия вследствие рефлюкса и/или обструкции'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'venous-lower-limb-001',
                question_en: 'Longest vein in the body?',
                question_ru: 'Самая длинная вена в организме?',
                answer_en: 'Great saphenous vein',
                answer_ru: 'Большая подкожная вена'
              },
              {
                id: 'venous-lower-limb-002',
                question_en: 'GSV begins at?',
                question_ru: 'БПВ начинается от?',
                answer_en: 'Medial dorsal venous arch',
                answer_ru: 'Медиальный конец тыльной дуги'
              },
              {
                id: 'venous-lower-limb-003',
                question_en: 'GSV passes anterior to?',
                question_ru: 'БПВ проходит кпереди от?',
                answer_en: 'Medial malleolus',
                answer_ru: 'Медиальная лодыжка'
              },
              {
                id: 'venous-lower-limb-004',
                question_en: 'GSV drains into?',
                question_ru: 'БПВ впадает в?',
                answer_en: 'Femoral vein at SFJ',
                answer_ru: 'Бедренная вена в СФС'
              },
              {
                id: 'venous-lower-limb-005',
                question_en: 'SFJ location?',
                question_ru: 'Расположение СФС?',
                answer_en: '3–4 cm below pubic tubercle',
                answer_ru: '3–4 см ниже лобкового бугорка'
              },
              {
                id: 'venous-lower-limb-006',
                question_en: 'GSV tributaries at groin (4)?',
                question_ru: 'Притоки БПВ в паху (4)?',
                answer_en: 'Epigastric, pudendal ×2, circumflex iliac',
                answer_ru: 'Надчревная, половые ×2, огибающая подвздошную'
              },
              {
                id: 'venous-lower-limb-007',
                question_en: 'SSV origin?',
                question_ru: 'Начало МПВ?',
                answer_en: 'Lateral dorsal venous arch',
                answer_ru: 'Латеральный конец тыльной дуги'
              },
              {
                id: 'venous-lower-limb-008',
                question_en: 'SSV passes posterior to?',
                question_ru: 'МПВ проходит кзади от?',
                answer_en: 'Lateral malleolus',
                answer_ru: 'Латеральная лодыжка'
              },
              {
                id: 'venous-lower-limb-009',
                question_en: 'SSV drains into?',
                question_ru: 'МПВ впадает в?',
                answer_en: 'Popliteal vein at SPJ',
                answer_ru: 'Подколенная вена в СПС'
              },
              {
                id: 'venous-lower-limb-010',
                question_en: 'SSV thigh extension called?',
                question_ru: 'Бедренное продолжение МПВ называется?',
                answer_en: 'Vein of Giacomini',
                answer_ru: 'Вена Джакомини'
              },
              {
                id: 'venous-lower-limb-011',
                question_en: 'Normal perforator flow direction?',
                question_ru: 'Нормальное направление кровотока в перфорантах?',
                answer_en: 'Superficial to deep',
                answer_ru: 'Поверхностная → глубокая'
              },
              {
                id: 'venous-lower-limb-012',
                question_en: 'Cockett\'s perforators location?',
                question_ru: 'Расположение перфорантов Кокетта?',
                answer_en: 'Medial lower leg (gaiter zone)',
                answer_ru: 'Медиальная нижняя голень (гетровая зона)'
              },
              {
                id: 'venous-lower-limb-013',
                question_en: 'Boyd\'s perforator location?',
                question_ru: 'Расположение перфоранта Бойда?',
                answer_en: 'Medial, below knee',
                answer_ru: 'Медиальная, ниже колена'
              },
              {
                id: 'venous-lower-limb-014',
                question_en: 'Dodd\'s perforators location?',
                question_ru: 'Расположение перфорантов Додда?',
                answer_en: 'Medial mid-thigh',
                answer_ru: 'Медиальная середина бедра'
              },
              {
                id: 'venous-lower-limb-015',
                question_en: 'Popliteal vein position in fossa?',
                question_ru: 'Положение подколенной вены в ямке?',
                answer_en: 'Superficial to popliteal artery',
                answer_ru: 'Поверхностнее подколенной артерии'
              },
              {
                id: 'venous-lower-limb-016',
                question_en: 'Common femoral vein formed by?',
                question_ru: 'Из чего образуется общая бедренная вена?',
                answer_en: 'Femoral + deep femoral vein',
                answer_ru: 'Бедренная + глубокая вена бедра'
              },
              {
                id: 'venous-lower-limb-017',
                question_en: 'Varicose veins most common cause?',
                question_ru: 'Наиболее частая причина варикозной болезни?',
                answer_en: 'SFJ incompetence',
                answer_ru: 'Несостоятельность СФС'
              },
              {
                id: 'venous-lower-limb-018',
                question_en: 'Venous ulcer typical site?',
                question_ru: 'Типичное место венозной язвы?',
                answer_en: 'Gaiter zone (medial malleolus)',
                answer_ru: 'Гетровая зона (медиальная лодыжка)'
              },
              {
                id: 'venous-lower-limb-019',
                question_en: 'CEAP C6 means?',
                question_ru: 'CEAP C6 означает?',
                answer_en: 'Active venous ulcer',
                answer_ru: 'Активная венозная язва'
              },
              {
                id: 'venous-lower-limb-020',
                question_en: 'GSV surgical uses (2)?',
                question_ru: 'Хирургическое применение БПВ (2)?',
                answer_en: 'CABG conduit, bypass graft',
                answer_ru: 'Кондуит АКШ, шунт'
              },
              {
                id: 'venous-lower-limb-021',
                question_en: 'DVT most commonly starts in?',
                question_ru: 'ТГВ чаще всего начинается в?',
                answer_en: 'Calf (deep) veins',
                answer_ru: 'Вены голени (глубокие)'
              },
              {
                id: 'venous-lower-limb-022',
                question_en: 'DVT first-line treatment?',
                question_ru: 'Лечение ТГВ первой линии?',
                answer_en: 'LMWH or DOAC',
                answer_ru: 'НМГ или ПОАК'
              },
              {
                id: 'venous-lower-limb-023',
                question_en: 'Varicose vein treatments (3 minimally invasive)?',
                question_ru: 'Малоинвазивные методы лечения варикоза (3)?',
                answer_en: 'EVLA, RFA, foam sclerotherapy',
                answer_ru: 'ЭВЛК, РЧА, пенная склеротерапия'
              },
              {
                id: 'venous-lower-limb-024',
                question_en: 'SPJ level must be confirmed by?',
                question_ru: 'Уровень СПС подтверждается с помощью?',
                answer_en: 'Duplex ultrasound',
                answer_ru: 'Дуплексное сканирование'
              },
              {
                id: 'venous-lower-limb-025',
                question_en: 'Incompetent perforators cause?',
                question_ru: 'Что вызывают несостоятельные перфоранты?',
                answer_en: 'Superficial venous hypertension',
                answer_ru: 'Поверхностная венозная гипертензия'
              },
              {
                id: 'venous-lower-limb-026',
                question_en: 'Popliteal vein at adductor hiatus becomes?',
                question_ru: 'В что переходит подколенная вена в сухожильном отверстии?',
                answer_en: 'Femoral vein',
                answer_ru: 'Бедренная вена'
              },
              {
                id: 'venous-lower-limb-027',
                question_en: 'GSV in-situ bypass — valves destroyed by?',
                question_ru: 'БПВ in situ — клапаны разрушаются с помощью?',
                answer_en: 'Valvulotome',
                answer_ru: 'Вальвулотом'
              },
              {
                id: 'venous-lower-limb-028',
                question_en: 'Venous ulcer first-line treatment?',
                question_ru: 'Лечение венозной язвы первой линии?',
                answer_en: 'Compression therapy',
                answer_ru: 'Компрессионная терапия'
              },
              {
                id: 'venous-lower-limb-029',
                question_en: 'Both saphenous veins arise from?',
                question_ru: 'Обе подкожные вены берут начало от?',
                answer_en: 'Dorsal venous arch',
                answer_ru: 'Тыльная венозная дуга'
              },
              {
                id: 'venous-lower-limb-030',
                question_en: 'Common femoral vein continues as?',
                question_ru: 'В что продолжается общая бедренная вена?',
                answer_en: 'External iliac vein',
                answer_ru: 'Наружная подвздошная вена'
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
          },

          // ── Topic: Endovascular Procedures for PAD ──────────────────────────────
          {
            slug: 'endovascular-pad',
            title_en: 'Endovascular Procedures for PAD (PTA, Stenting, Atherectomy)',
            title_ru: 'Эндоваскулярные вмешательства при ХАН (ЧТА, стентирование, атерэктомия)',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Endovascular therapy (EVT) is the preferred first-line revascularisation strategy for most aorto-iliac and femoro-popliteal lesions due to lower procedural risk and equivalent medium-term outcomes compared to open surgery in suitable anatomy. Lesion complexity is stratified by TASC II classification (A–D), guiding the choice between endovascular and surgical approaches. Techniques include percutaneous transluminal angioplasty (PTA), bare-metal stenting (BMS), drug-eluting stenting (DES), drug-coated balloons (DCB), subintimal angioplasty, and atherectomy.',
                    type: 'text'
                  },
                  {
                    title: 'TASC II Classification',
                    body: [
                      'Type A: short stenoses/occlusions — endovascular preferred',
                      'Type B: longer lesions — endovascular preferred if operator experienced',
                      'Type C: complex lesions — surgery preferred if good surgical risk',
                      'Type D: chronic total occlusions, diffuse disease — surgery preferred',
                      'Applies separately to aorto-iliac and femoro-popliteal segments'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Aorto-Iliac Disease',
                    body: [
                      'Access: ipsilateral antegrade or contralateral retrograde common femoral artery puncture',
                      'Common iliac stenting: primary stenting preferred over PTA alone (lower dissection, higher patency)',
                      '"Kissing stents" technique: simultaneous bilateral iliac stents deployed into distal aorta for bifurcation disease — prevents "snow-plough" effect',
                      'Iliac stent 5-year primary patency: ~75–80% (BMS); covered stents preferred for occlusions',
                      'Aortic occlusion (Leriche): endovascular feasible but complex; open ABF often superior for TASC D'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Femoro-Popliteal Disease',
                    body: [
                      'PTA alone: acceptable for short lesions <5 cm; re-stenosis rate 40–60% at 1 year for longer lesions',
                      'Self-expanding nitinol stent: preferred for SFA due to vessel tortuosity and compression — superior to PTA alone for lesions >5 cm',
                      'Drug-coated balloon (DCB): paclitaxel-coated; inhibits neo-intimal hyperplasia; 12-month primary patency ~20% higher than plain PTA (IN.PACT SFA trial)',
                      'Drug-eluting stent (DES): paclitaxel or everolimus-eluting; reduces re-stenosis; Zilver PTX trial: 5-year primary patency ~66% vs 43% for PTA',
                      'SFA stent 1-year re-stenosis: ~20–30%; long lesions and calcification worsen outcomes',
                      'Subintimal angioplasty: traverses chronic total occlusion (CTO) in subintimal plane; re-entry via Outback or Pioneer catheter'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Infrapopliteal Disease',
                    body: [
                      'Primarily for limb salvage in CLTI — not for claudication',
                      'PTA preferred over stenting (vessel calibre too small for most stents)',
                      'Angiosome-directed revascularisation: target artery feeding the wound angiosome when possible',
                      'Retrograde tibial access (pedal loop): used when antegrade wiring fails',
                      'DCB for tibial disease: DEBATE-BTK and BIOLUX-II trials show reduced re-stenosis',
                      'Technical success rates >90% but 1-year patency 50–60% due to calcification and distal disease'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Atherectomy',
                    body: [
                      'Directional atherectomy (HawkOne): shaves plaque into collection chamber; best for focal non-calcified lesions',
                      'Rotational atherectomy (Rotarex, JetStream): pulverises calcified plaque; also used for in-stent re-stenosis',
                      'Laser atherectomy (Turbo-Elite): vaporises plaque using ultraviolet laser; used for CTO and in-stent re-stenosis',
                      'Often combined with DCB ("atherectomy + DCB") to optimise lumen and drug delivery',
                      'No consistent long-term patency benefit over PTA/DCB alone in RCTs'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Procedural Details',
                    body: [
                      'Anticoagulation: IV heparin 70–100 IU/kg; target ACT >250 s',
                      'Antiplatelet: DAPT (aspirin 75 mg + clopidogrel 75 mg) for 1–3 months after BMS; lifelong single antiplatelet thereafter',
                      'DCB/DES: DAPT 1–3 months minimum; clopidogrel 75 mg loading dose 300–600 mg pre-procedure',
                      'Contrast: use iso-osmolar contrast; limit volume to ≤3 mL/kg; pre-hydrate in CKD patients',
                      'CO₂ angiography: alternative in severe renal impairment',
                      'Distal embolic protection devices: consider for below-knee interventions and subintimal recanalisations'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Complications',
                    body: [
                      'Access site haematoma/pseudoaneurysm: most common; manage with ultrasound-guided compression or thrombin injection',
                      'Vessel dissection: treat with prolonged balloon inflation or stenting',
                      'Distal embolisation: thrombus aspiration catheter or IA thrombolysis',
                      'Vessel perforation/rupture: covered stent (endograft) deployment',
                      'Contrast nephropathy: hydration, N-acetylcysteine, CO₂ in CKD',
                      'In-stent re-stenosis: DCB or laser atherectomy + DCB'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Surveillance',
                    body: [
                      'Duplex ultrasound at 1 month, 6 months, then annually',
                      'Peak systolic velocity ratio (PSVR) >2.5 at stent/anastomosis = haemodynamically significant re-stenosis',
                      'ABI at each visit; >0.15 drop from post-procedure baseline indicates re-stenosis',
                      'Re-intervention for symptomatic re-stenosis with PSVR >3.5 or ABI drop + symptoms'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Эндоваскулярное лечение (ЭВЛ) является предпочтительной стратегией первой линии реваскуляризации при большинстве аорто-подвздошных и бедренно-подколенных поражений благодаря меньшему операционному риску и сопоставимым среднесрочным результатам по сравнению с открытой хирургией при подходящей анатомии. Сложность поражений стратифицируется по классификации TASC II (A–D), что определяет выбор между эндоваскулярным и хирургическим подходом. Методы включают чрескожную транслюминальную ангиопластику (ЧТА), имплантацию непокрытых металлических стентов (НМС), стентов с лекарственным покрытием (СЛП), баллонов с лекарственным покрытием (БЛП), субинтимальную ангиопластику и атерэктомию.',
                    type: 'text'
                  },
                  {
                    title: 'Классификация TASC II',
                    body: [
                      'Тип A: короткие стенозы/окклюзии — предпочтительно ЭВЛ',
                      'Тип B: более протяжённые поражения — предпочтительно ЭВЛ при опытном операторе',
                      'Тип C: сложные поражения — предпочтительна операция при удовлетворительном хирургическом риске',
                      'Тип D: хронические тотальные окклюзии, диффузное поражение — предпочтительна операция',
                      'Применяется отдельно для аорто-подвздошного и бедренно-подколенного сегментов'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Аорто-подвздошное поражение',
                    body: [
                      'Доступ: ипсилатеральная антеградная или контралатеральная ретроградная пункция общей бедренной артерии (ОБА)',
                      'Стентирование подвздошной артерии: первичное стентирование предпочтительнее ЧТА (меньше диссекций, выше проходимость)',
                      'Техника "целующихся стентов" (kissing stents): одновременное билатеральное стентирование подвздошных артерий в дистальную аорту при бифуркационном поражении — предотвращает смещение бляшки',
                      'Первичная проходимость подвздошного стента через 5 лет: ~75–80% (НМС); покрытые стенты предпочтительны при окклюзиях',
                      'Окклюзия аорты (синдром Лериша): ЭВЛ возможно, но технически сложно; открытое АБФ-шунтирование часто предпочтительнее при TASC D'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Бедренно-подколенное поражение',
                    body: [
                      'ЧТА: приемлема при коротких поражениях <5 см; рестеноз 40–60% в год при более протяжённых',
                      'Самораскрывающийся нитиноловый стент: предпочтителен для ПБА из-за извитости и компрессии сосуда — превосходит ЧТА при поражениях >5 см',
                      'Баллон с лекарственным покрытием (БЛП): покрытие паклитакселем; подавляет неоинтимальную гиперплазию; первичная проходимость через 12 мес. выше на ~20% по сравнению с обычной ЧТА (исследование IN.PACT SFA)',
                      'Стент с лекарственным покрытием (СЛП): паклитаксель или эверолимус; снижает рестеноз; исследование Zilver PTX: 5-летняя первичная проходимость ~66% против 43% при ЧТА',
                      'Рестеноз стента ПБА через 1 год: ~20–30%; протяжённые поражения и кальциноз ухудшают результаты',
                      'Субинтимальная ангиопластика: проведение через хроническую тотальную окклюзию (ХТО) в субинтимальной плоскости; реканализация с помощью катетеров Outback или Pioneer'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Инфрапоплитеальное поражение',
                    body: [
                      'Преимущественно для спасения конечности при хронической угрожающей ишемии конечности (ХУИК) — не при перемежающейся хромоте',
                      'ЧТА предпочтительнее стентирования (калибр сосудов слишком мал)',
                      'Реваскуляризация, направленная на ангиосому: целевая артерия должна кровоснабжать ангиосому раны',
                      'Ретроградный тибиальный доступ (педальная петля): применяется при неудачном антеградном проведении проводника',
                      'БЛП при тибиальном поражении: исследования DEBATE-BTK и BIOLUX-II демонстрируют снижение рестеноза',
                      'Технический успех >90%, но проходимость через 1 год 50–60% из-за кальциноза и дистального поражения'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Атерэктомия',
                    body: [
                      'Направленная атерэктомия (HawkOne): срезает бляшку в коллекционную камеру; оптимальна при фокальных некальцинированных поражениях',
                      'Ротационная атерэктомия (Rotarex, JetStream): измельчает кальцинированную бляшку; применяется также при рестенозе в стенте',
                      'Лазерная атерэктомия (Turbo-Elite): испаряет бляшку ультрафиолетовым лазером; используется при ХТО и рестенозе в стенте',
                      'Часто комбинируется с БЛП ("атерэктомия + БЛП") для оптимизации просвета и доставки препарата',
                      'В РКИ не показано стабильного долгосрочного преимущества по проходимости над ЧТА/БЛП'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Детали процедуры',
                    body: [
                      'Антикоагуляция: гепарин в/в 70–100 МЕ/кг; целевое активированное время свёртывания (АВС) >250 с',
                      'Антиагреганты: двойная антиагрегантная терапия (ДАТ) — аспирин 75 мг + клопидогрел 75 мг на 1–3 мес. после НМС; пожизненная монотерапия в дальнейшем',
                      'БЛП/СЛП: ДАТ минимум 1–3 месяца; нагрузочная доза клопидогрела 300–600 мг до процедуры',
                      'Контраст: использовать изоосмолярный контраст; ограничить объём до ≤3 мл/кг; предварительная гидратация при хронической болезни почек (ХБП)',
                      'Ангиография с CO₂: альтернатива при выраженной почечной недостаточности',
                      'Устройства дистальной эмболической защиты: рассмотреть при вмешательствах ниже колена и субинтимальных реканализациях'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Осложнения',
                    body: [
                      'Гематома/ложная аневризма в месте доступа: наиболее частое; лечение — компрессия под УЗ-контролем или инъекция тромбина',
                      'Диссекция сосуда: длительная баллонная инфляция или стентирование',
                      'Дистальная эмболизация: аспирационный катетер или интраартериальный тромболизис',
                      'Перфорация/разрыв сосуда: имплантация покрытого стента (эндографта)',
                      'Контраст-индуцированная нефропатия: гидратация, N-ацетилцистеин, CO₂ при ХБП',
                      'Рестеноз в стенте: БЛП или лазерная атерэктомия + БЛП'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Наблюдение',
                    body: [
                      'Дуплексное УЗИ через 1 месяц, 6 месяцев, затем ежегодно',
                      'Соотношение пиковых систолических скоростей (СПСС) >2,5 в зоне стента/анастомоза = гемодинамически значимый рестеноз',
                      'ЛПИ при каждом визите; снижение >0,15 от послеоперационного уровня указывает на рестеноз',
                      'Повторное вмешательство при симптомном рестенозе с СПСС >3,5 или снижении ЛПИ + симптомы'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'endovascular-pad-001',
                question_en: 'TASC II A/B iliac disease: preferred treatment?',
                question_ru: 'TASC II A/B подвздошное поражение: предпочтительное лечение?',
                answer_en: 'Endovascular',
                answer_ru: 'Эндоваскулярное'
              },
              {
                id: 'endovascular-pad-002',
                question_en: 'TASC II D aorto-iliac disease: preferred treatment?',
                question_ru: 'TASC II D аорто-подвздошное поражение: предпочтительное лечение?',
                answer_en: 'Open surgery',
                answer_ru: 'Открытая операция'
              },
              {
                id: 'endovascular-pad-003',
                question_en: '"Kissing stents" indication?',
                question_ru: 'Показание к технике "целующихся стентов"?',
                answer_en: 'Aortic bifurcation disease',
                answer_ru: 'Поражение бифуркации аорты'
              },
              {
                id: 'endovascular-pad-004',
                question_en: 'Iliac BMS 5-year primary patency?',
                question_ru: '5-летняя первичная проходимость НМС подвздошной артерии?',
                answer_en: '~75–80%',
                answer_ru: '~75–80%'
              },
              {
                id: 'endovascular-pad-005',
                question_en: 'Preferred SFA stent type?',
                question_ru: 'Предпочтительный тип стента для ПБА?',
                answer_en: 'Self-expanding nitinol',
                answer_ru: 'Самораскрывающийся нитиноловый'
              },
              {
                id: 'endovascular-pad-006',
                question_en: 'DCB mechanism of action?',
                question_ru: 'Механизм действия БЛП?',
                answer_en: 'Paclitaxel antiproliferative',
                answer_ru: 'Паклитаксель антипролиферативный'
              },
              {
                id: 'endovascular-pad-007',
                question_en: 'DCB vs PTA: 12-month patency advantage?',
                question_ru: 'БЛП vs ЧТА: преимущество проходимости через 12 мес.?',
                answer_en: '~20% higher',
                answer_ru: 'Выше на ~20%'
              },
              {
                id: 'endovascular-pad-008',
                question_en: 'SFA stent 1-year re-stenosis rate?',
                question_ru: 'Рестеноз стента ПБА через 1 год?',
                answer_en: '20–30%',
                answer_ru: '20–30%'
              },
              {
                id: 'endovascular-pad-009',
                question_en: 'Subintimal angioplasty re-entry catheter examples?',
                question_ru: 'Примеры катетеров для реканализации при субинтимальной ангиопластике?',
                answer_en: 'Outback / Pioneer',
                answer_ru: 'Outback / Pioneer'
              },
              {
                id: 'endovascular-pad-010',
                question_en: 'Infrapopliteal EVT: indication (not claudication)?',
                question_ru: 'ЭВЛ инфрапоплитеального сегмента: показание (не ПХ)?',
                answer_en: 'Limb salvage (CLTI)',
                answer_ru: 'Спасение конечности (ХУИК)'
              },
              {
                id: 'endovascular-pad-011',
                question_en: 'Heparin dose for EVT?',
                question_ru: 'Доза гепарина при ЭВЛ?',
                answer_en: '70–100 IU/kg',
                answer_ru: '70–100 МЕ/кг'
              },
              {
                id: 'endovascular-pad-012',
                question_en: 'Target ACT during EVT?',
                question_ru: 'Целевое АВС во время ЭВЛ?',
                answer_en: '>250 seconds',
                answer_ru: '>250 секунд'
              },
              {
                id: 'endovascular-pad-013',
                question_en: 'DAPT duration after iliac BMS?',
                question_ru: 'Длительность ДАТ после НМС подвздошной артерии?',
                answer_en: '1–3 months',
                answer_ru: '1–3 месяца'
              },
              {
                id: 'endovascular-pad-014',
                question_en: 'EVT access site complication: ultrasound treatment?',
                question_ru: 'Осложнение в месте доступа: УЗ-лечение?',
                answer_en: 'Thrombin injection',
                answer_ru: 'Инъекция тромбина'
              },
              {
                id: 'endovascular-pad-015',
                question_en: 'Vessel perforation during EVT: endovascular fix?',
                question_ru: 'Перфорация сосуда при ЭВЛ: эндоваскулярное решение?',
                answer_en: 'Covered stent',
                answer_ru: 'Покрытый стент'
              },
              {
                id: 'endovascular-pad-016',
                question_en: 'Distal embolisation during EVT: first step?',
                question_ru: 'Дистальная эмболизация при ЭВЛ: первый шаг?',
                answer_en: 'Thrombus aspiration',
                answer_ru: 'Аспирация тромба'
              },
              {
                id: 'endovascular-pad-017',
                question_en: 'PSVR indicating haemodynamically significant re-stenosis?',
                question_ru: 'СПСС, указывающее на гемодинамически значимый рестеноз?',
                answer_en: '>2.5',
                answer_ru: '>2,5'
              },
              {
                id: 'endovascular-pad-018',
                question_en: 'Post-EVT duplex: first surveillance timing?',
                question_ru: 'Дуплекс после ЭВЛ: первый контрольный срок?',
                answer_en: '1 month',
                answer_ru: '1 месяц'
              },
              {
                id: 'endovascular-pad-019',
                question_en: 'Contrast volume limit to reduce nephropathy?',
                question_ru: 'Ограничение объёма контраста для профилактики нефропатии?',
                answer_en: '≤3 mL/kg',
                answer_ru: '≤3 мл/кг'
              },
              {
                id: 'endovascular-pad-020',
                question_en: 'Alternative to iodinated contrast in severe CKD?',
                question_ru: 'Альтернатива йодированному контрасту при тяжёлой ХБП?',
                answer_en: 'CO₂ angiography',
                answer_ru: 'Ангиография с CO₂'
              }
            ]
          },

          // ── Topic: Diabetic Foot, Wound Classification & Amputation ────────────
          {
            slug: 'diabetic-foot',
            title_en: 'Diabetic Foot, Wound Classification & Amputation',
            title_ru: 'Диабетическая стопа, классификация ран и ампутация',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Diabetic foot disease results from a triad of peripheral neuropathy, peripheral arterial disease (PAD), and susceptibility to infection. It is the leading cause of non-traumatic lower limb amputation worldwide. Early multidisciplinary assessment — vascular, podiatric, infectious disease, and orthopaedic — is essential to achieve limb salvage. Revascularisation, infection control, offloading, and structured wound care are the four pillars of management.',
                    type: 'text'
                  },
                  {
                    title: 'Pathophysiology — The Triad',
                    body: [
                      'Peripheral neuropathy: sensory loss → undetected trauma and pressure injury; motor loss → intrinsic muscle wasting → claw toes, abnormal load distribution; autonomic loss → anhidrosis → dry, fissured skin',
                      'Most common site for neuropathic ulcer: plantar surface of the first metatarsophalangeal (MTP) joint',
                      'PAD: present in 50% of diabetic foot ulcers; macrovascular (tibial/peroneal occlusion) + microvascular dysfunction',
                      'Infection: impaired neutrophil function + hyperglycaemia → polymicrobial in moderate/severe; most common mild isolate: Staphylococcus aureus',
                      'Charcot neuropathic osteoarthropathy: acute — warm, swollen, red foot in a neuropathic patient; must exclude infection; most commonly affects Lisfranc (tarsometatarsal) joint'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Wound Classification',
                    body: [
                      'Wagner grading (anatomical depth): 0 = at-risk foot, no ulcer; 1 = superficial ulcer; 2 = deep ulcer to tendon/capsule/bone; 3 = deep ulcer + abscess/osteomyelitis; 4 = forefoot gangrene; 5 = whole foot gangrene',
                      'University of Texas (UT) classification: two axes — Grade (0–3: depth) × Stage (A = clean; B = infected; C = ischaemic; D = infected + ischaemic)',
                      'WIfI classification (SVS 2014): three components — Wound (0–3), Ischaemia (0–3), foot Infection (0–3); predicts 1-year amputation risk and benefit of revascularisation',
                      'WIfI is preferred for CLTI/diabetic foot as it integrates all three pathological axes',
                      'Probe-to-bone (PTB) test: positive = high specificity for osteomyelitis; PPV ~89% in high-prevalence setting'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Vascular & Neurological Assessment',
                    body: [
                      'ABI: <0.5 or ankle pressure <70 mmHg → revascularisation likely needed for healing',
                      'Toe pressure: <30 mmHg → healing unlikely without revascularisation',
                      'TcPO₂ (transcutaneous oxygen pressure): <30 mmHg → poor healing; >40 mmHg → adequate for healing',
                      'MRI: gold standard for osteomyelitis; bone biopsy + culture guides antibiotic choice',
                      'Plain X-ray: may show cortical destruction, periosteal reaction, gas in soft tissue (gas-forming infection = surgical emergency)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Infection Management (IDSA Guidelines)',
                    body: [
                      'Mild DFI (localised, <2 cm cellulitis, no systemic signs): oral amoxicillin-clavulanate or cefalexin',
                      'Moderate–severe DFI: IV piperacillin-tazobactam or carbapenem if ESBL risk; add MRSA cover (vancomycin or linezolid) if risk factors present',
                      'MRSA risk factors: prior MRSA colonisation/infection, chronic wound, recent hospitalisation, nasal carriage',
                      'Duration: mild 1–2 weeks; moderate/severe 2–4 weeks; osteomyelitis 6 weeks (IV then oral step-down)',
                      'Surgical debridement: all necrotic and infected tissue must be excised; do not close primarily if infection present'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Offloading & Wound Care',
                    body: [
                      'Total contact cast (TCC): gold standard for neuropathic plantar ulcer offloading; reduces plantar pressure by ~80%',
                      'Removable cast walker (RCW): acceptable alternative; compliance dependent',
                      'Moist wound healing: hydrocolloid/foam dressings; debridement (sharp, enzymatic, or larval therapy)',
                      'Negative pressure wound therapy (NPWT): accelerates granulation; useful post-debridement and for preparing amputation stumps',
                      'Hyperbaric oxygen (HBO): consider for Wagner 3–4 with adequate perfusion and no revascularisation option'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Amputation Levels',
                    body: [
                      'Minor amputation: preserves weight-bearing function — digit/ray amputation, transmetatarsal amputation (TMA), Lisfranc/Chopart disarticulation',
                      'TMA: amputates all metatarsals; preserves plantar flexion; requires good perfusion of plantar flap; best functional outcome for forefoot gangrene',
                      'Syme amputation: disarticulation at ankle with heel pad preservation; allows end-bearing; rarely performed',
                      'Below-knee amputation (BKA / transtibial): preferred major amputation when knee can be preserved; better rehabilitation than AKA; requires ABI ≥0.5 at popliteal or TcPO₂ >20 mmHg at proposed level',
                      'Above-knee amputation (AKA / transfemoral): when BKA not feasible; 5-year survival ~50%; only 30–40% of AKA patients become community ambulators',
                      'Guillotine amputation: open, level not yet defined; used for severe sepsis to achieve rapid source control; formal closure after infection resolved',
                      'Revascularise before major amputation if feasible — even marginal perfusion improvement may allow a more distal level'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Charcot Foot Management',
                    body: [
                      'Acute phase: total offloading with TCC until skin temperature normalises (within 2°C of contralateral foot) — typically 3–6 months',
                      'Bisphosphonates (e.g., pamidronate): reduce osteoclast activity; evidence limited but considered in acute phase',
                      'Reconstruction (exostectomy / arthrodesis): for chronic deformity with ulceration or instability — only when acute phase resolved',
                      'Radiological: "rocker-bottom" deformity on lateral X-ray; fragmentation and dislocation in acute phase'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Синдром диабетической стопы (СДС) является следствием триады: периферическая нейропатия, периферический атеросклероз и повышенная восприимчивость к инфекции. СДС — ведущая причина нетравматических ампутаций нижних конечностей в мире. Необходима ранняя мультидисциплинарная оценка (сосудистый хирург, подиатр, специалист по инфекционным болезням, ортопед) для сохранения конечности. Четыре основных направления: реваскуляризация, контроль инфекции, разгрузка и структурированный уход за раной.',
                    type: 'text'
                  },
                  {
                    title: 'Патофизиология — триада',
                    body: [
                      'Периферическая нейропатия: потеря чувствительности → незамеченная травма и повреждения от давления; двигательные нарушения → атрофия внутренних мышц стопы → когтеобразные пальцы, аномальное распределение нагрузки; вегетативные нарушения → ангидроз → сухая, растрескавшаяся кожа',
                      'Наиболее частая локализация нейропатической язвы: подошвенная поверхность первого плюснефалангового сустава (ПФС)',
                      'Периферический атеросклероз: присутствует у 50% больных с язвами диабетической стопы; макрососудистое поражение (окклюзия большеберцовых/малоберцовых артерий) + микрососудистая дисфункция',
                      'Инфекция: нарушение функции нейтрофилов + гипергликемия → полимикробная при умеренной/тяжёлой форме; наиболее частый возбудитель при лёгкой форме: Staphylococcus aureus',
                      'Нейроостеоартропатия Шарко: острая фаза — тёплая, отёчная, красная стопа у пациента с нейропатией; необходимо исключить инфекцию; чаще всего поражается сустав Лисфранка (предплюсне-плюсневой)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Классификация ран',
                    body: [
                      'Классификация Вагнера (анатомическая глубина): 0 = стопа в группе риска, нет язвы; 1 = поверхностная язва; 2 = глубокая язва до сухожилия/капсулы/кости; 3 = глубокая язва + абсцесс/остеомиелит; 4 = гангрена переднего отдела стопы; 5 = гангрена всей стопы',
                      'Классификация Техасского университета (ТУ): две оси — Степень (0–3: глубина) × Стадия (A = чистая; B = инфицированная; C = ишемическая; D = инфицированная + ишемическая)',
                      'Классификация WIfI (SVS, 2014): три компонента — рана (Wound, 0–3), ишемия (Ischaemia, 0–3), инфекция стопы (foot Infection, 0–3); прогнозирует риск ампутации в течение 1 года и пользу реваскуляризации',
                      'WIfI предпочтительна при хронической угрожающей ишемии конечности (ХУИК)/диабетической стопе, так как объединяет все три патологических оси',
                      'Проба "зонд до кости" (probe-to-bone): положительная = высокая специфичность для остеомиелита; прогностическая ценность положительного результата ~89% в условиях высокой распространённости'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Сосудистая и неврологическая оценка',
                    body: [
                      'ЛПИ (лодыжечно-плечевой индекс): <0,5 или давление на лодыжке <70 мм рт. ст. → реваскуляризация, вероятно, необходима для заживления',
                      'Давление на первом пальце стопы: <30 мм рт. ст. → заживление маловероятно без реваскуляризации',
                      'TcPO₂ (транскутанное парциальное давление кислорода): <30 мм рт. ст. → плохое заживление; >40 мм рт. ст. → достаточное для заживления',
                      'МРТ: золотой стандарт диагностики остеомиелита; биопсия кости + посев определяют выбор антибиотика',
                      'Рентгенография: деструкция кортикального слоя, периостальная реакция, газ в мягких тканях (газообразующая инфекция = хирургическая экстренность)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Лечение инфекции (рекомендации IDSA)',
                    body: [
                      'Лёгкая диабетическая инфекция стопы (ДИС) (локальная, <2 см целлюлита, нет системных признаков): амоксициллин-клавуланат или цефалексин внутрь',
                      'Умеренная–тяжёлая ДИС: пиперациллин-тазобактам в/в или карбапенем при риске БЛРС; добавить покрытие против метициллинорезистентного Staphylococcus aureus (МРСА) — ванкомицин или линезолид — при наличии факторов риска',
                      'Факторы риска МРСА: предшествующая колонизация/инфекция МРСА, хроническая рана, недавняя госпитализация, носительство в носоглотке',
                      'Длительность: лёгкая — 1–2 нед.; умеренная/тяжёлая — 2–4 нед.; остеомиелит — 6 нед. (в/в с переходом на пероральный приём)',
                      'Хирургическая обработка: иссечение всех некротических и инфицированных тканей; первичное ушивание недопустимо при наличии инфекции'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Разгрузка и уход за раной',
                    body: [
                      'Тотальный контактный гипс (ТКГ): золотой стандарт разгрузки нейропатической подошвенной язвы; снижает подошвенное давление на ~80%',
                      'Съёмный разгрузочный ботинок (RCW): приемлемая альтернатива; зависит от соблюдения режима',
                      'Влажное заживление раны: гидроколлоидные/пенные повязки; дебридмент (острый, ферментный или личиночная терапия)',
                      'Терапия отрицательным давлением (ТОД): ускоряет грануляцию; применяется после дебридмента и при подготовке культи',
                      'Гипербарическая оксигенация (ГБО): рассматривать при Вагнер 3–4 с достаточной перфузией при отсутствии возможности реваскуляризации'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Уровни ампутации',
                    body: [
                      'Малые ампутации: сохраняют опорную функцию — ампутация пальца/луча, трансметатарзальная ампутация (ТМА), экзартикуляция по Лисфранку/Шопару',
                      'ТМА: резекция всех плюсневых костей; сохраняет подошвенное сгибание; требует достаточной перфузии подошвенного лоскута; лучший функциональный результат при гангрене переднего отдела стопы',
                      'Ампутация по Сайму: экзартикуляция в голеностопном суставе с сохранением пяточной жировой подушки; позволяет опираться на торец культи; выполняется редко',
                      'Ампутация ниже колена (АНК / транстибиальная): предпочтительная большая ампутация при сохранении коленного сустава; лучше реабилитируется; требует ЛПИ ≥0,5 на уровне подколенной артерии или TcPO₂ >20 мм рт. ст. на предполагаемом уровне',
                      'Ампутация выше колена (АВК / трансфеморальная): при невозможности АНК; 5-летняя выживаемость ~50%; лишь 30–40% пациентов после АВК становятся амбулаторными',
                      'Гильотинная ампутация: открытая, уровень не определён окончательно; применяется при тяжёлом сепсисе для быстрого устранения очага инфекции; окончательное закрытие — после купирования инфекции',
                      'Реваскуляризация до большой ампутации при возможности — даже незначительное улучшение перфузии может позволить выполнить ампутацию на более дистальном уровне'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Лечение стопы Шарко',
                    body: [
                      'Острая фаза: полная разгрузка с ТКГ до нормализации температуры кожи (разница <2°C с контралатеральной стопой) — как правило, 3–6 месяцев',
                      'Бисфосфонаты (например, памидронат): снижают активность остеокластов; доказательная база ограничена, но применяются в острой фазе',
                      'Реконструкция (экзостэктомия/артродез): при хронической деформации с изъязвлением или нестабильностью — только после разрешения острой фазы',
                      'Рентгенологически: деформация "качалки" на боковой рентгенограмме; фрагментация и вывих в острой фазе'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'diabetic-foot-001',
                question_en: 'Three components of diabetic foot triad?',
                question_ru: 'Три компонента триады диабетической стопы?',
                answer_en: 'Neuropathy, ischaemia, infection',
                answer_ru: 'Нейропатия, ишемия, инфекция'
              },
              {
                id: 'diabetic-foot-002',
                question_en: 'Most common site for neuropathic plantar ulcer?',
                question_ru: 'Наиболее частая локализация нейропатической подошвенной язвы?',
                answer_en: 'First MTP joint',
                answer_ru: 'Первый ПФС'
              },
              {
                id: 'diabetic-foot-003',
                question_en: 'Wagner grade 3 definition?',
                question_ru: 'Определение Вагнер степень 3?',
                answer_en: 'Deep ulcer + osteomyelitis',
                answer_ru: 'Глубокая язва + остеомиелит'
              },
              {
                id: 'diabetic-foot-004',
                question_en: 'Wagner grade 5 definition?',
                question_ru: 'Определение Вагнер степень 5?',
                answer_en: 'Whole foot gangrene',
                answer_ru: 'Гангрена всей стопы'
              },
              {
                id: 'diabetic-foot-005',
                question_en: 'WIfI classification: three components?',
                question_ru: 'Классификация WIfI: три компонента?',
                answer_en: 'Wound, ischaemia, foot infection',
                answer_ru: 'Рана, ишемия, инфекция стопы'
              },
              {
                id: 'diabetic-foot-006',
                question_en: 'Probe-to-bone test positive: diagnosis?',
                question_ru: 'Положительная проба "зонд до кости": диагноз?',
                answer_en: 'Osteomyelitis',
                answer_ru: 'Остеомиелит'
              },
              {
                id: 'diabetic-foot-007',
                question_en: 'Gold standard imaging for osteomyelitis?',
                question_ru: 'Золотой стандарт визуализации остеомиелита?',
                answer_en: 'MRI',
                answer_ru: 'МРТ'
              },
              {
                id: 'diabetic-foot-008',
                question_en: 'Toe pressure below which healing unlikely?',
                question_ru: 'Давление на пальце, ниже которого заживление маловероятно?',
                answer_en: '<30 mmHg',
                answer_ru: '<30 мм рт. ст.'
              },
              {
                id: 'diabetic-foot-009',
                question_en: 'TcPO₂ below which healing unlikely?',
                question_ru: 'TcPO₂, ниже которого заживление маловероятно?',
                answer_en: '<30 mmHg',
                answer_ru: '<30 мм рт. ст.'
              },
              {
                id: 'diabetic-foot-010',
                question_en: 'Gold standard offloading for neuropathic ulcer?',
                question_ru: 'Золотой стандарт разгрузки нейропатической язвы?',
                answer_en: 'Total contact cast',
                answer_ru: 'Тотальный контактный гипс'
              },
              {
                id: 'diabetic-foot-011',
                question_en: 'First-line antibiotic for mild DFI (IDSA)?',
                question_ru: 'Антибиотик первой линии при лёгкой ДИС (IDSA)?',
                answer_en: 'Amoxicillin-clavulanate',
                answer_ru: 'Амоксициллин-клавуланат'
              },
              {
                id: 'diabetic-foot-012',
                question_en: 'MRSA cover antibiotic in severe DFI?',
                question_ru: 'Антибиотик против МРСА при тяжёлой ДИС?',
                answer_en: 'Vancomycin or linezolid',
                answer_ru: 'Ванкомицин или линезолид'
              },
              {
                id: 'diabetic-foot-013',
                question_en: 'Osteomyelitis antibiotic duration?',
                question_ru: 'Длительность антибиотикотерапии при остеомиелите?',
                answer_en: '6 weeks',
                answer_ru: '6 недель'
              },
              {
                id: 'diabetic-foot-014',
                question_en: 'TMA: functional advantage preserved?',
                question_ru: 'ТМА: сохраняемая функциональная способность?',
                answer_en: 'Plantar flexion',
                answer_ru: 'Подошвенное сгибание'
              },
              {
                id: 'diabetic-foot-015',
                question_en: 'AKA 5-year survival?',
                question_ru: '5-летняя выживаемость после АВК?',
                answer_en: '~50%',
                answer_ru: '~50%'
              },
              {
                id: 'diabetic-foot-016',
                question_en: 'Gas in soft tissues on X-ray: urgency?',
                question_ru: 'Газ в мягких тканях на рентгенограмме: срочность?',
                answer_en: 'Surgical emergency',
                answer_ru: 'Хирургическая экстренность'
              },
              {
                id: 'diabetic-foot-017',
                question_en: 'Charcot foot most commonly affected joint?',
                question_ru: 'Наиболее часто поражаемый сустав при стопе Шарко?',
                answer_en: 'Lisfranc (tarsometatarsal)',
                answer_ru: 'Лисфранка (предплюсне-плюсневой)'
              },
              {
                id: 'diabetic-foot-018',
                question_en: 'Acute Charcot: offloading duration?',
                question_ru: 'Острая стопа Шарко: длительность разгрузки?',
                answer_en: '3–6 months',
                answer_ru: '3–6 месяцев'
              },
              {
                id: 'diabetic-foot-019',
                question_en: 'Guillotine amputation indication?',
                question_ru: 'Показание к гильотинной ампутации?',
                answer_en: 'Severe sepsis control',
                answer_ru: 'Контроль тяжёлого сепсиса'
              },
              {
                id: 'diabetic-foot-020',
                question_en: 'Preferred major amputation when knee preserved?',
                question_ru: 'Предпочтительная большая ампутация при сохранении колена?',
                answer_en: 'Below-knee (BKA)',
                answer_ru: 'Ниже колена (АНК)'
              }
            ]
          }

        ]
      },

      // ── VENOUS & LYMPHATIC ───────────────────────────────────────────────────
      {
        slug: 'venous-lymphatic',
        title_en: 'Venous & Lymphatic',
        title_ru: 'Венозная и лимфатическая система',
        topics: [

          // ── Topic: Chronic Venous Insufficiency & Varicose Veins ─────────────
          {
            slug: 'chronic-venous-insufficiency',
            title_en: 'Chronic Venous Insufficiency & Varicose Veins',
            title_ru: 'Хроническая венозная недостаточность и варикозная болезнь',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Chronic venous insufficiency (CVI) results from sustained venous hypertension due to valvular incompetence, venous obstruction, or both. Varicose veins (dilated, tortuous superficial veins) are the most visible manifestation. CVI spans a clinical spectrum from cosmetic telangiectasias to active venous ulceration and affects approximately 30% of adults. The great saphenous vein (GSV) is the most commonly affected trunk.',
                    type: 'text'
                  },
                  {
                    title: 'Pathophysiology',
                    body: [
                      'Primary CVI: intrinsic valvular weakness → venous reflux → sustained ambulatory venous hypertension → capillary leak → lipodermatosclerosis → ulceration',
                      'Secondary CVI: post-thrombotic syndrome (PTS) after deep vein thrombosis (DVT); venous outflow obstruction + reflux',
                      'Venous reflux defined as: reversed flow >0.5 seconds on duplex ultrasound with Valsalva or cuff deflation',
                      'Ambulatory venous pressure (AVP): normally <30 mmHg; CVI patients may have AVP >80 mmHg',
                      'GSV drains via the saphenofemoral junction (SFJ) into the common femoral vein at the level of the inguinal ligament',
                      'Short saphenous vein (SSV) drains via the saphenopopliteal junction (SPJ) into the popliteal vein in the popliteal fossa',
                      'Perforating veins: connect superficial to deep systems; incompetent perforators (Cockett, Boyd, Dodd) transmit deep venous pressure to superficial system'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'CEAP Classification',
                    body: [
                      'C0: no visible or palpable signs',
                      'C1: telangiectasias or reticular veins',
                      'C2: varicose veins (≥3 mm diameter)',
                      'C3: oedema of venous origin',
                      'C4a: pigmentation or eczema; C4b: lipodermatosclerosis or atrophie blanche',
                      'C5: healed venous ulcer',
                      'C6: active venous ulcer',
                      'Suffix A (asymptomatic) or S (symptomatic); E (aetiology), A (anatomy), P (pathophysiology) components also classified'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Clinical Assessment',
                    body: [
                      'Symptoms: aching, heaviness, itching, restless legs — worse at end of day and with prolonged standing; relieved by leg elevation',
                      'Venous ulcer: most common at medial gaiter area (above medial malleolus); shallow, irregular, sloughy base; surrounding lipodermatosclerosis',
                      'Trendelenburg test: tourniquet at SFJ level — vein refills slowly after standing → SFJ incompetence confirmed when vein fills rapidly on tourniquet release',
                      'Duplex ultrasound: gold standard; maps reflux in GSV, SSV, perforators, and deep system; essential before any intervention',
                      'Exclude arterial disease: ABI (лодыжечно-плечевой индекс — ЛПИ) before compression therapy; ABI <0.8 → modified compression; ABI <0.5 → compression contraindicated'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Conservative Management',
                    body: [
                      'Compression hosiery: mainstay; Class 1 (14–17 mmHg) for mild; Class 2 (18–24 mmHg) for moderate CVI/varicose veins; Class 3 (25–35 mmHg) for severe CVI',
                      'Venous ulcer compression: four-layer compression bandaging (e.g., Profore) or equivalent; 40 mmHg at ankle; heals ~70% of ulcers within 24 weeks',
                      'Leg elevation: above heart level; reduces ambulatory venous pressure',
                      'Exercise: calf muscle pump activation; walking programme',
                      'Venoactive drugs (e.g., diosmin/hesperidin 500 mg twice daily): reduce oedema and symptoms; adjunct only'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Interventional & Surgical Management',
                    body: [
                      'Endovenous laser ablation (EVLA): laser fibre inserted into GSV/SSV under duplex guidance; thermal energy ablates vein wall; tumescent anaesthesia injected perivenously as heat sink and nerve protection; comparable outcomes to surgery (NICE guidelines)',
                      'Radiofrequency ablation (RFA / ClosureFast): radiofrequency energy via catheter; similar outcomes to EVLA; less postoperative bruising',
                      'Foam sclerotherapy: sodium tetradecyl sulphate (STS) 1–3% or polidocanol foam injected under duplex guidance; used for truncal veins, tributaries, and perforators; multiple sessions often needed',
                      'High ligation and stripping: SFJ flush ligation + inversion stripping of GSV to knee; gold standard historically; higher recurrence from neovascularisation vs thermal techniques',
                      'Subfascial endoscopic perforator surgery (SEPS): divides incompetent perforators endoscopically; used for recalcitrant perforator incompetence with ulceration',
                      'Phlebectomy (avulsions): ambulatory removal of varicose tributaries via 2–3 mm stab incisions; adjunct to thermal ablation',
                      'Recurrence after treatment: most commonly due to neovascularisation at the SFJ (after stripping) or technical failure; reassess with duplex'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Complications',
                    body: [
                      'Superficial thrombophlebitis: inflammation ± thrombus in varicose vein; treat with NSAIDs + fondaparinux 2.5 mg daily for 45 days if >5 cm or near SFJ (CALISTO trial)',
                      'Venous ulcer infection: clinical diagnosis; swab only if not improving; systemic antibiotics if cellulitis present',
                      'Thermal ablation complications: endovenous heat-induced thrombosis (EHIT) — thrombus extending into deep vein; monitor with duplex; anticoagulate if EHIT class ≥2',
                      'DVT risk: low with modern thermal techniques; NICE recommends prophylactic LMWH for high-risk patients undergoing varicose vein surgery'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Хроническая венозная недостаточность (ХВН) возникает вследствие стойкой венозной гипертензии, обусловленной несостоятельностью клапанов, венозной обструкцией или их сочетанием. Варикозное расширение вен — дилатация и извитость поверхностных вен — является наиболее видимым проявлением. ХВН охватывает клинический спектр от косметических телеангиэктазий до активных венозных язв и встречается примерно у 30% взрослых. Большая подкожная вена (БПВ) поражается наиболее часто.',
                    type: 'text'
                  },
                  {
                    title: 'Патофизиология',
                    body: [
                      'Первичная хроническая венозная недостаточность (ХВН): внутренняя слабость клапанов → венозный рефлюкс → стойкая амбулаторная венозная гипертензия → капиллярная экссудация → липодерматосклероз → изъязвление',
                      'Вторичная ХВН: посттромботический синдром (ПТС) после тромбоза глубоких вен (ТГВ); обструкция венозного оттока + рефлюкс',
                      'Венозный рефлюкс определяется как обратный кровоток длительностью >0,5 сек при дуплексном УЗИ (проба Вальсальвы или компрессионный манжеточный тест)',
                      'Амбулаторное венозное давление (АВД): в норме <30 мм рт. ст.; при ХВН АВД может превышать 80 мм рт. ст.',
                      'Большая подкожная вена (БПВ) впадает через сафено-феморальное соустье (СФС) в общую бедренную вену на уровне паховой связки',
                      'Малая подкожная вена (МПВ) впадает через сафено-поплитеальное соустье (СПС) в подколенную вену в подколенной ямке',
                      'Перфорантные вены: соединяют поверхностную и глубокую системы; несостоятельные перфоранты (Кокетта, Бойда, Додда) передают глубокое венозное давление в поверхностную систему'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Классификация CEAP',
                    body: [
                      'C0: нет видимых или пальпируемых признаков',
                      'C1: телеангиэктазии или ретикулярные вены',
                      'C2: варикозно расширенные вены (диаметр ≥3 мм)',
                      'C3: отёк венозного происхождения',
                      'C4a: пигментация или экзема; C4b: липодерматосклероз или белая атрофия кожи',
                      'C5: зажившая венозная язва',
                      'C6: активная венозная язва',
                      'Суффикс A (бессимптомная) или S (симптомная); также классифицируются компоненты E (этиология), A (анатомия), P (патофизиология)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Клиническая оценка',
                    body: [
                      'Симптомы: боль, тяжесть, зуд, синдром беспокойных ног — усиливаются к концу дня и при длительном стоянии; облегчаются при подъёме ног',
                      'Венозная язва: наиболее часто располагается в области медиальной гетры (выше медиальной лодыжки); поверхностная, неправильной формы, с покрытым налётом дном; окружающий липодерматосклероз',
                      'Проба Тренделенбурга: жгут на уровне сафено-феморального соустья (СФС) — медленное наполнение вены после вставания → быстрое наполнение при снятии жгута подтверждает несостоятельность СФС',
                      'Дуплексное УЗИ: золотой стандарт; картирует рефлюкс в большой подкожной вене (БПВ), малой подкожной вене (МПВ), перфорантах и глубокой системе; обязательно перед любым вмешательством',
                      'Исключить артериальную патологию: лодыжечно-плечевой индекс (ЛПИ) до назначения компрессии; ЛПИ <0,8 → модифицированная компрессия; ЛПИ <0,5 → компрессия противопоказана'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Консервативное лечение',
                    body: [
                      'Компрессионный трикотаж: основа лечения; класс 1 (14–17 мм рт. ст.) при лёгкой форме; класс 2 (18–24 мм рт. ст.) при умеренной ХВН/варикозе; класс 3 (25–35 мм рт. ст.) при тяжёлой ХВН',
                      'Компрессия при венозной язве: четырёхслойное компрессионное бинтование (например, Profore) или эквивалент; 40 мм рт. ст. на уровне лодыжки; обеспечивает заживление ~70% язв в течение 24 недель',
                      'Возвышенное положение конечности: выше уровня сердца; снижает амбулаторное венозное давление (АВД)',
                      'Физическая активность: активация мышечно-венозной помпы голени; ходьба',
                      'Венотонические препараты (например, диосмин/гесперидин 500 мг дважды в сутки): уменьшают отёк и симптомы; только вспомогательный эффект'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Интервенционное и хирургическое лечение',
                    body: [
                      'Эндовенозная лазерная абляция (ЭВЛА): лазерный световод вводится в большую подкожную вену (БПВ)/малую подкожную вену (МПВ) под контролем дуплексного УЗИ; термическая энергия облитерирует стенку вены; тумесцентная анестезия вводится перивенозно — теплоотвод и защита нервов; сопоставимые результаты с операцией (рекомендации NICE)',
                      'Радиочастотная абляция (РЧА / ClosureFast): радиочастотная энергия через катетер; результаты сопоставимы с ЭВЛА; меньше послеоперационных гематом',
                      'Пенная склеротерапия: пена натрия тетрадецилсульфата (NTS) 1–3% или полидоканола вводится под контролем дуплексного УЗИ; применяется для стволовых вен, притоков и перфорантов; как правило, требуется несколько сеансов',
                      'Высокое лигирование и стриппинг: флеш-лигирование сафено-феморального соустья (СФС) + инвагинационный стриппинг БПВ до уровня колена; исторически золотой стандарт; более высокая частота рецидивов вследствие неоваскуляризации по сравнению с термическими методами',
                      'Субфасциальная эндоскопическая диссекция перфорантов (СЭДП): эндоскопическое пересечение несостоятельных перфорантных вен; применяется при рефрактерной несостоятельности перфорантов с изъязвлением',
                      'Минифлебэктомия (авульсия): амбулаторное удаление варикозных притоков через разрезы 2–3 мм; дополнение к термической абляции',
                      'Рецидив после лечения: наиболее часто обусловлен неоваскуляризацией в области сафено-феморального соустья (СФС) (после стриппинга) или технической неудачей; повторное дуплексное исследование'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Осложнения',
                    body: [
                      'Поверхностный тромбофлебит: воспаление ± тромбоз варикозной вены; лечение — НПВС + фондапаринукс 2,5 мг/сут в течение 45 дней при протяжённости >5 см или близости к СФС (исследование CALISTO)',
                      'Инфекция венозной язвы: клинический диагноз; посев — только при отсутствии улучшения; системные антибиотики при наличии целлюлита',
                      'Осложнения термической абляции: эндовенозный термоиндуцированный тромбоз (ЭТИТ) — распространение тромба в глубокую вену; контроль дуплексным УЗИ; антикоагуляция при ЭТИТ класса ≥2',
                      'Риск тромбоза глубоких вен (ТГВ): низкий при современных термических методах; NICE рекомендует профилактический низкомолекулярный гепарин (НМГ) для пациентов с высоким риском, подвергающихся операции по поводу варикозной болезни'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'chronic-venous-insufficiency-001',
                question_en: 'CEAP C2 definition?',
                question_ru: 'Определение CEAP C2?',
                answer_en: 'Varicose veins',
                answer_ru: 'Варикозные вены'
              },
              {
                id: 'chronic-venous-insufficiency-002',
                question_en: 'CEAP C6 definition?',
                question_ru: 'Определение CEAP C6?',
                answer_en: 'Active venous ulcer',
                answer_ru: 'Активная венозная язва'
              },
              {
                id: 'chronic-venous-insufficiency-003',
                question_en: 'GSV drains into which junction?',
                question_ru: 'Большая подкожная вена (БПВ) впадает через какое соустье?',
                answer_en: 'Saphenofemoral junction (SFJ)',
                answer_ru: 'Сафено-феморальное соустье (СФС)'
              },
              {
                id: 'chronic-venous-insufficiency-004',
                question_en: 'SFJ anatomical level?',
                question_ru: 'Анатомический уровень сафено-феморального соустья (СФС)?',
                answer_en: 'Inguinal ligament',
                answer_ru: 'Паховая связка'
              },
              {
                id: 'chronic-venous-insufficiency-005',
                question_en: 'Duplex reflux: minimum reverse flow duration?',
                question_ru: 'Дуплекс: минимальная длительность обратного кровотока для рефлюкса?',
                answer_en: '>0.5 seconds',
                answer_ru: '>0,5 секунды'
              },
              {
                id: 'chronic-venous-insufficiency-006',
                question_en: 'Gold standard investigation for CVI?',
                question_ru: 'Золотой стандарт диагностики хронической венозной недостаточности (ХВН)?',
                answer_en: 'Duplex ultrasound',
                answer_ru: 'Дуплексное УЗИ'
              },
              {
                id: 'chronic-venous-insufficiency-007',
                question_en: 'ABI below which compression is contraindicated?',
                question_ru: 'Лодыжечно-плечевой индекс (ЛПИ), ниже которого компрессия противопоказана?',
                answer_en: '<0.5',
                answer_ru: '<0,5'
              },
              {
                id: 'chronic-venous-insufficiency-008',
                question_en: 'Compression class for active venous ulcer?',
                question_ru: 'Класс компрессии при активной венозной язве?',
                answer_en: 'Class 3 / four-layer',
                answer_ru: 'Класс 3 / четырёхслойное'
              },
              {
                id: 'chronic-venous-insufficiency-009',
                question_en: 'Most common site for venous ulcer?',
                question_ru: 'Наиболее частая локализация венозной язвы?',
                answer_en: 'Medial gaiter area',
                answer_ru: 'Медиальная гетра'
              },
              {
                id: 'chronic-venous-insufficiency-010',
                question_en: 'Four-layer compression: ulcer healing rate at 24 weeks?',
                question_ru: 'Четырёхслойная компрессия: частота заживления язвы за 24 недели?',
                answer_en: '~70%',
                answer_ru: '~70%'
              },
              {
                id: 'chronic-venous-insufficiency-011',
                question_en: 'EVLA: perivenous injection purpose?',
                question_ru: 'Эндовенозная лазерная абляция (ЭВЛА): цель перивенозной инъекции?',
                answer_en: 'Heat sink / nerve protection',
                answer_ru: 'Теплоотвод / защита нервов'
              },
              {
                id: 'chronic-venous-insufficiency-012',
                question_en: 'Foam sclerotherapy agent?',
                question_ru: 'Препарат для пенной склеротерапии?',
                answer_en: 'STS or polidocanol',
                answer_ru: 'Натрия тетрадецилсульфат или полидоканол'
              },
              {
                id: 'chronic-venous-insufficiency-013',
                question_en: 'SSV drains via which junction?',
                question_ru: 'Малая подкожная вена (МПВ) впадает через какое соустье?',
                answer_en: 'Saphenopopliteal junction (SPJ)',
                answer_ru: 'Сафено-поплитеальное соустье (СПС)'
              },
              {
                id: 'chronic-venous-insufficiency-014',
                question_en: 'Most common cause of varicose vein recurrence after stripping?',
                question_ru: 'Наиболее частая причина рецидива варикоза после стриппинга?',
                answer_en: 'Neovascularisation',
                answer_ru: 'Неоваскуляризация'
              },
              {
                id: 'chronic-venous-insufficiency-015',
                question_en: 'Superficial thrombophlebitis near SFJ: drug treatment?',
                question_ru: 'Поверхностный тромбофлебит вблизи сафено-феморального соустья (СФС): медикаментозное лечение?',
                answer_en: 'Fondaparinux 2.5 mg × 45 days',
                answer_ru: 'Фондапаринукс 2,5 мг × 45 дней'
              },
              {
                id: 'chronic-venous-insufficiency-016',
                question_en: 'Trendelenburg test: what does it assess?',
                question_ru: 'Проба Тренделенбурга: что она оценивает?',
                answer_en: 'SFJ incompetence',
                answer_ru: 'Несостоятельность сафено-феморального соустья (СФС)'
              },
              {
                id: 'chronic-venous-insufficiency-017',
                question_en: 'EHIT: when to anticoagulate?',
                question_ru: 'Эндовенозный термоиндуцированный тромбоз (ЭТИТ): когда начинать антикоагуляцию?',
                answer_en: 'Class ≥2',
                answer_ru: 'Класс ≥2'
              },
              {
                id: 'chronic-venous-insufficiency-018',
                question_en: 'Normal ambulatory venous pressure?',
                question_ru: 'Нормальное амбулаторное венозное давление (АВД)?',
                answer_en: '<30 mmHg',
                answer_ru: '<30 мм рт. ст.'
              },
              {
                id: 'chronic-venous-insufficiency-019',
                question_en: 'CEAP C4b: skin change?',
                question_ru: 'CEAP C4b: изменение кожи?',
                answer_en: 'Lipodermatosclerosis',
                answer_ru: 'Липодерматосклероз'
              },
              {
                id: 'chronic-venous-insufficiency-020',
                question_en: 'Perforator incompetence endoscopic treatment?',
                question_ru: 'Эндоскопическое лечение несостоятельности перфорантных вен?',
                answer_en: 'SEPS',
                answer_ru: 'Субфасциальная эндоскопическая диссекция перфорантов (СЭДП)'
              }
            ]
          },

          // ── Topic: Venous Ulcers & Wound Care ───────────────────────────────
          {
            slug: 'venous-ulcers',
            title_en: 'Venous Ulcers & Wound Care',
            title_ru: 'Венозные язвы и уход за ранами',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Venous leg ulcers (VLU) are the most common cause of chronic lower limb ulceration, accounting for 70–80% of all leg ulcers. They arise from sustained ambulatory venous hypertension caused by valvular incompetence, post-thrombotic damage, or venous obstruction. Without structured compression therapy, recurrence rates exceed 70% within 3 years. Management is multidisciplinary: compression, wound care, address the underlying venous pathology, and treat any infective or arterial component.',
                    type: 'text'
                  },
                  {
                    title: 'Pathophysiology',
                    body: [
                      'Venous hypertension → capillary leak → fibrin cuff deposition around capillaries → impaired oxygen diffusion → tissue hypoxia → ulceration',
                      'White cell trapping hypothesis: leucocytes trapped in capillaries → degranulation → inflammatory mediators → tissue damage',
                      'Lipodermatosclerosis: chronic fibrotic induration of subcutaneous fat; precedes or accompanies ulceration',
                      'Atrophie blanche: white, avascular scar tissue; marker of severe microvascular disease; not an ulcer itself but high-risk area',
                      'Post-thrombotic syndrome (PTS): combination of reflux + obstruction after deep vein thrombosis (DVT); produces the most severe and refractory ulcers'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Clinical Features & Diagnosis',
                    body: [
                      'Site: medial gaiter area (above medial malleolus) is classical; lateral ulcers or atypical sites — consider arterial, vasculitic, or malignant aetiology',
                      'Appearance: shallow, irregular edges, sloughy or granulating base; surrounding haemosiderin pigmentation, lipodermatosclerosis, varicose eczema',
                      'Symptoms: aching, heaviness, exudate; painless in pure neuropathy; painful in arterial/mixed or infected ulcers',
                      'Differential: arterial ulcer (punched-out, painful, pale base, distal), neuropathic (plantar, painless), malignant (Marjolin ulcer — suspect if non-healing >3 months or raised edges)',
                      'ABI (ankle-brachial index) mandatory before compression: ABI >0.8 → full compression safe; 0.5–0.8 → modified compression (20–25 mmHg); <0.5 → compression contraindicated, refer vascular',
                      'Duplex ultrasound: assess for superficial and deep reflux, perforator incompetence, and DVT/obstruction',
                      'Wound swab: only if signs of clinical infection (erythema, warmth, purulence, pain); routine swabbing does not guide treatment'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Wound Bed Preparation (TIME Principle)',
                    body: [
                      'T — Tissue: debride non-viable, sloughy, or necrotic tissue (sharp, larval, enzymatic, or autolytic)',
                      'I — Infection/Inflammation: identify and treat clinical infection; do not treat colonisation',
                      'M — Moisture balance: match dressing absorbency to exudate level; avoid maceration and desiccation',
                      'E — Edge: non-advancing wound edge → exclude infection, check ABI, reassess compression; consider biopsy if >3 months'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Dressing Selection',
                    body: [
                      'Low exudate: hydrocolloid (e.g., Duoderm) or hydrogel',
                      'Moderate exudate: foam dressing (e.g., Mepilex, Allevyn)',
                      'High exudate: alginate or hydrofibre (e.g., Aquacel) — absorptive, haemostatic',
                      'Infected wound: silver-containing dressing (e.g., Aquacel Ag) or iodine-based (Inadine) — short-term only',
                      'Larval therapy (maggots): Lucilia sericata larvae; highly effective debridement of sloughy wounds; also antimicrobial',
                      'Negative pressure wound therapy (NPWT / VAC): accelerates granulation, reduces oedema; useful post-debridement or for large cavities',
                      'Avoid: adhesive dressings on fragile skin; antiseptic solutions (e.g., hydrogen peroxide, povidone-iodine in open wounds) — cytotoxic to granulation tissue'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Compression Therapy',
                    body: [
                      'Cornerstone of VLU healing and prevention of recurrence',
                      'Four-layer compression bandaging (e.g., Profore): 40 mmHg at ankle, reduces to 17 mmHg at knee; heals ~70% of ulcers in 24 weeks (RCT evidence)',
                      'Two-layer compression (e.g., Coban 2): equivalent efficacy to four-layer; easier to apply',
                      'Compression hosiery (Class 2–3) after healing: reduces recurrence from 70% to <30% at 5 years',
                      'Intermittent pneumatic compression (IPC): adjunct when hosiery poorly tolerated; also used for mixed ulcers when ABI 0.5–0.8',
                      'ABPI reassess at each visit; if healing plateaus, reassess venous anatomy and consider intervention'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Adjunctive & Surgical Treatment',
                    body: [
                      'Pentoxifylline 400 mg three times daily: improves ulcer healing when added to compression; Cochrane evidence supports use (OR 1.7 vs placebo)',
                      'Skin grafting: split-thickness skin graft (SSG) for large, clean, non-healing ulcers; fails without adequate compression; meshed graft allows drainage',
                      'Bioengineered skin substitutes (e.g., Apligraf, Dermagraft): growth factor delivery; used when SSG not possible',
                      'Hyperbaric oxygen (HBO): limited evidence for VLU; consider refractory cases',
                      'Treat underlying venous disease: EVLA (endovenous laser ablation) or foam sclerotherapy of incompetent superficial veins accelerates ulcer healing (ESCHAR trial: no improvement in healing rate but significant reduction in recurrence)',
                      'ESCHAR trial key result: superficial venous surgery + compression did not heal ulcers faster than compression alone, but reduced 4-year recurrence from 56% to 31%'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Infection Management',
                    body: [
                      'Clinical infection signs: increased pain, erythema >2 cm from wound edge, warmth, purulence, systemic features',
                      'Mild cellulitis: oral flucloxacillin 500 mg four times daily for 5–7 days; add doxycycline if penicillin-allergic',
                      'Severe/spreading cellulitis: IV flucloxacillin 1–2 g four times daily; MRSA cover if risk factors',
                      'Biofilm: not visible clinically; suspect if wound plateaus despite good care; treat with antimicrobial dressings + debridement',
                      'Osteomyelitis: rare in VLU; MRI if suspected; requires prolonged antibiotic course ± surgical debridement'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Венозные язвы нижних конечностей (ВЯ) являются наиболее частой причиной хронических язв нижних конечностей и составляют 70–80% всех язв ног. Они возникают вследствие стойкой амбулаторной венозной гипертензии, обусловленной несостоятельностью клапанов, посттромботическим поражением или венозной обструкцией. Без структурированной компрессионной терапии частота рецидивов превышает 70% в течение 3 лет. Лечение — мультидисциплинарное: компрессия, уход за раной, устранение основной венозной патологии, лечение инфекционного или артериального компонента.',
                    type: 'text'
                  },
                  {
                    title: 'Патофизиология',
                    body: [
                      'Венозная гипертензия → капиллярная экссудация → отложение фибриновых манжет вокруг капилляров → нарушение диффузии кислорода → тканевая гипоксия → изъязвление',
                      'Гипотеза захвата лейкоцитов: лейкоциты задерживаются в капиллярах → дегрануляция → воспалительные медиаторы → повреждение тканей',
                      'Липодерматосклероз: хроническая фиброзная индурация подкожной жировой клетчатки; предшествует изъязвлению или сопровождает его',
                      'Белая атрофия кожи: белая, аваскулярная рубцовая ткань; признак тяжёлого микрососудистого заболевания; сама по себе не является язвой, но представляет зону высокого риска',
                      'Посттромботический синдром (ПТС): сочетание рефлюкса и обструкции после тромбоза глубоких вен (ТГВ); обусловливает наиболее тяжёлые и резистентные язвы'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Клиническая картина и диагностика',
                    body: [
                      'Локализация: медиальная гетра (выше медиальной лодыжки) — классическое расположение; латеральные язвы или атипичные локализации — исключить артериальный, васкулитный или злокачественный генез',
                      'Вид: поверхностная, неправильные края, покрытое налётом или гранулирующее дно; окружающая гемосидериновая пигментация, липодерматосклероз, варикозная экзема',
                      'Симптомы: боль, тяжесть, экссудат; безболезненная при чистой нейропатии; болезненная при артериальной/смешанной этиологии или инфицировании',
                      'Дифференциальный диагноз: артериальная язва (пробойник, болезненная, бледное дно, дистальная), нейропатическая (подошва, безболезненная), злокачественная (язва Маржолена — подозрение при незаживлении >3 мес. или приподнятых краях)',
                      'Лодыжечно-плечевой индекс (ЛПИ) обязателен перед компрессией: ЛПИ >0,8 → полная компрессия безопасна; 0,5–0,8 → модифицированная компрессия (20–25 мм рт. ст.); <0,5 → компрессия противопоказана, направить к сосудистому хирургу',
                      'Дуплексное УЗИ: оценка поверхностного и глубокого рефлюкса, несостоятельности перфорантов, тромбоза глубоких вен (ТГВ)/обструкции',
                      'Мазок из раны: только при признаках клинической инфекции (эритема, тепло, гнойное отделяемое, боль); рутинный посев не определяет тактику лечения'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Подготовка раневого ложа (принцип TIME)',
                    body: [
                      'T — Ткань (Tissue): дебридмент нежизнеспособных, покрытых налётом или некротических тканей (острый, личиночный, ферментный или аутолитический)',
                      'I — Инфекция/Воспаление (Infection/Inflammation): выявить и лечить клиническую инфекцию; колонизацию не лечить',
                      'M — Влажный баланс (Moisture balance): подобрать повязку по уровню абсорбции к количеству экссудата; избегать мацерации и высыхания',
                      'E — Край (Edge): незаживающий край раны → исключить инфекцию, проверить лодыжечно-плечевой индекс (ЛПИ), пересмотреть компрессию; биопсия при незаживлении >3 мес.'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Выбор повязки',
                    body: [
                      'Малый экссудат: гидроколлоид (например, Duoderm) или гидрогель',
                      'Умеренный экссудат: пенная повязка (например, Mepilex, Allevyn)',
                      'Обильный экссудат: альгинат или гидрофибра (например, Aquacel) — абсорбирующие, гемостатические',
                      'Инфицированная рана: повязка с серебром (например, Aquacel Ag) или на основе йода (Inadine) — только краткосрочно',
                      'Личиночная терапия (магготы): личинки Lucilia sericata; высокоэффективный дебридмент покрытых налётом ран; также антимикробный эффект',
                      'Терапия отрицательным давлением (ТОД / VAC): ускоряет грануляцию, уменьшает отёк; применяется после дебридмента или при больших полостях',
                      'Избегать: клейких повязок на хрупкой коже; антисептических растворов (перекись водорода, повидон-йод в открытых ранах) — цитотоксичны для грануляционной ткани'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Компрессионная терапия',
                    body: [
                      'Краеугольный камень заживления венозных язв нижних конечностей (ВЯ) и профилактики рецидивов',
                      'Четырёхслойное компрессионное бинтование (например, Profore): 40 мм рт. ст. на лодыжке, снижается до 17 мм рт. ст. на колене; заживление ~70% язв за 24 недели (данные рандомизированных контролируемых исследований)',
                      'Двухслойная компрессия (например, Coban 2): эффективность сопоставима с четырёхслойной; проще наносить',
                      'Компрессионный трикотаж (класс 2–3) после заживления: снижает рецидивы с 70% до <30% за 5 лет',
                      'Переменная пневматическая компрессия (ППК): вспомогательный метод при плохой переносимости трикотажа; применяется также при смешанных язвах при лодыжечно-плечевом индексе (ЛПИ) 0,5–0,8',
                      'ЛПИ переоценивать при каждом визите; при плато в заживлении — переоценить венозную анатомию и рассмотреть вмешательство'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Вспомогательное и хирургическое лечение',
                    body: [
                      'Пентоксифиллин 400 мг три раза в сутки: улучшает заживление язвы в сочетании с компрессией; данные Cochrane подтверждают применение (отношение шансов — ОШ 1,7 против плацебо)',
                      'Кожная пластика: расщеплённый кожный трансплантат (РКТ) при обширных, чистых, незаживающих язвах; не эффективен без компрессии; сетчатый трансплантат обеспечивает дренирование',
                      'Биоинженерные кожные субституты (например, Apligraf, Dermagraft): доставка факторов роста; применяются при невозможности использования расщеплённого кожного трансплантата (РКТ)',
                      'Гипербарическая оксигенация (ГБО): ограниченные данные при венозных язвах нижних конечностей (ВЯ); рассмотреть при рефрактерных случаях',
                      'Лечение основного венозного заболевания: эндовенозная лазерная абляция (ЭВЛА) или пенная склеротерапия несостоятельных поверхностных вен ускоряет заживление язвы (исследование ESCHAR: без улучшения скорости заживления, но значительное снижение рецидивов)',
                      'Ключевой результат исследования ESCHAR: хирургия поверхностных вен + компрессия не ускоряла заживление по сравнению с только компрессией, но снизила 4-летние рецидивы с 56% до 31%'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Лечение инфекции',
                    body: [
                      'Признаки клинической инфекции: усиление боли, эритема >2 см от края раны, тепло, гнойное отделяемое, системные проявления',
                      'Лёгкий целлюлит: флуклоксациллин 500 мг внутрь четыре раза в сутки 5–7 дней; при аллергии на пенициллин — доксициклин',
                      'Тяжёлый/распространяющийся целлюлит: флуклоксациллин 1–2 г в/в четыре раза в сутки; покрытие против метициллинорезистентного Staphylococcus aureus (МРСА) при наличии факторов риска',
                      'Биоплёнка: клинически не видна; подозревать при плато в заживлении, несмотря на правильный уход; лечение — антимикробные повязки + дебридмент',
                      'Остеомиелит: редко при венозных язвах нижних конечностей (ВЯ); МРТ при подозрении; требует длительного курса антибиотиков ± хирургического дебридмента'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'venous-ulcers-001',
                question_en: 'Proportion of leg ulcers due to venous disease?',
                question_ru: 'Доля язв нижних конечностей венозного генеза?',
                answer_en: '70–80%',
                answer_ru: '70–80%'
              },
              {
                id: 'venous-ulcers-002',
                question_en: 'Classical site for venous leg ulcer?',
                question_ru: 'Классическая локализация венозной язвы нижней конечности?',
                answer_en: 'Medial gaiter area',
                answer_ru: 'Медиальная гетра'
              },
              {
                id: 'venous-ulcers-003',
                question_en: 'ABI below which compression is contraindicated?',
                question_ru: 'Лодыжечно-плечевой индекс (ЛПИ), ниже которого компрессия противопоказана?',
                answer_en: '<0.5',
                answer_ru: '<0,5'
              },
              {
                id: 'venous-ulcers-004',
                question_en: 'ABI range for modified compression?',
                question_ru: 'Диапазон лодыжечно-плечевого индекса (ЛПИ) для модифицированной компрессии?',
                answer_en: '0.5–0.8',
                answer_ru: '0,5–0,8'
              },
              {
                id: 'venous-ulcers-005',
                question_en: 'Four-layer bandage ankle pressure target?',
                question_ru: 'Целевое давление на лодыжке при четырёхслойном бинтовании?',
                answer_en: '40 mmHg',
                answer_ru: '40 мм рт. ст.'
              },
              {
                id: 'venous-ulcers-006',
                question_en: 'Four-layer compression: ulcer healing at 24 weeks?',
                question_ru: 'Четырёхслойная компрессия: заживление язвы за 24 недели?',
                answer_en: '~70%',
                answer_ru: '~70%'
              },
              {
                id: 'venous-ulcers-007',
                question_en: 'TIME principle — T stands for?',
                question_ru: 'Принцип TIME — T означает?',
                answer_en: 'Tissue (debridement)',
                answer_ru: 'Ткань (дебридмент)'
              },
              {
                id: 'venous-ulcers-008',
                question_en: 'High-exudate wound: dressing choice?',
                question_ru: 'Рана с обильным экссудатом: выбор повязки?',
                answer_en: 'Alginate or hydrofibre',
                answer_ru: 'Альгинат или гидрофибра'
              },
              {
                id: 'venous-ulcers-009',
                question_en: 'Larval therapy organism used?',
                question_ru: 'Организм, используемый в личиночной терапии?',
                answer_en: 'Lucilia sericata',
                answer_ru: 'Lucilia sericata'
              },
              {
                id: 'venous-ulcers-010',
                question_en: 'Pentoxifylline dose for VLU?',
                question_ru: 'Доза пентоксифиллина при венозных язвах нижних конечностей (ВЯ)?',
                answer_en: '400 mg three times daily',
                answer_ru: '400 мг три раза в сутки'
              },
              {
                id: 'venous-ulcers-011',
                question_en: 'ESCHAR trial: venous surgery effect on healing rate?',
                question_ru: 'Исследование ESCHAR: влияние операции на поверхностных венах на скорость заживления?',
                answer_en: 'No improvement',
                answer_ru: 'Без улучшения'
              },
              {
                id: 'venous-ulcers-012',
                question_en: 'ESCHAR trial: 4-year recurrence with surgery + compression vs compression alone?',
                question_ru: 'Исследование ESCHAR: рецидивы за 4 года — операция + компрессия против только компрессии?',
                answer_en: '31% vs 56%',
                answer_ru: '31% против 56%'
              },
              {
                id: 'venous-ulcers-013',
                question_en: 'Atrophie blanche: significance?',
                question_ru: 'Белая атрофия кожи: клиническое значение?',
                answer_en: 'Severe microvascular disease',
                answer_ru: 'Тяжёлое микрососудистое заболевание'
              },
              {
                id: 'venous-ulcers-014',
                question_en: 'VLU recurrence without compression at 3 years?',
                question_ru: 'Рецидив венозных язв нижних конечностей (ВЯ) без компрессии за 3 года?',
                answer_en: '>70%',
                answer_ru: '>70%'
              },
              {
                id: 'venous-ulcers-015',
                question_en: 'Wound swab: when indicated in VLU?',
                question_ru: 'Мазок из раны: когда показан при венозных язвах нижних конечностей (ВЯ)?',
                answer_en: 'Signs of infection only',
                answer_ru: 'Только при признаках инфекции'
              },
              {
                id: 'venous-ulcers-016',
                question_en: 'Mild cellulitis around VLU: antibiotic?',
                question_ru: 'Лёгкий целлюлит вокруг венозной язвы нижней конечности (ВЯ): антибиотик?',
                answer_en: 'Flucloxacillin 500 mg QDS',
                answer_ru: 'Флуклоксациллин 500 мг четыре раза в сутки'
              },
              {
                id: 'venous-ulcers-017',
                question_en: 'Skin graft for VLU: prerequisite?',
                question_ru: 'Кожная пластика при венозных язвах нижних конечностей (ВЯ): обязательное условие?',
                answer_en: 'Adequate compression',
                answer_ru: 'Достаточная компрессия'
              },
              {
                id: 'venous-ulcers-018',
                question_en: 'Compression hosiery class after VLU healing: recurrence reduction?',
                question_ru: 'Компрессионный трикотаж после заживления венозной язвы нижней конечности (ВЯ): снижение рецидивов?',
                answer_en: '70% → <30% at 5 years',
                answer_ru: '70% → <30% за 5 лет'
              },
              {
                id: 'venous-ulcers-019',
                question_en: 'Non-advancing ulcer edge >3 months: action?',
                question_ru: 'Незаживающий край язвы >3 месяцев: действие?',
                answer_en: 'Biopsy',
                answer_ru: 'Биопсия'
              },
              {
                id: 'venous-ulcers-020',
                question_en: 'Post-thrombotic syndrome cause of ulcer?',
                question_ru: 'Причина язвы при посттромботическом синдроме (ПТС)?',
                answer_en: 'Reflux + obstruction',
                answer_ru: 'Рефлюкс + обструкция'
              }
            ]
          },

          // ── Topic: SVC Syndrome & Central Venous Obstruction ─────────────────
          {
            slug: 'svc-syndrome',
            title_en: 'SVC Syndrome & Central Venous Obstruction',
            title_ru: 'Синдром верхней полой вены и центральная венозная обструкция',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Superior vena cava (SVC) syndrome results from obstruction of blood flow through the SVC, causing elevated venous pressure in the head, neck, and upper extremities. Malignancy — most commonly lung cancer and lymphoma — accounts for 60–85% of cases. The remainder are benign, predominantly caused by intravascular devices (central venous catheters, pacemaker leads). Severity ranges from mild facial oedema to life-threatening airway compromise; management depends on aetiology, severity, and prognosis.',
                    type: 'text'
                  },
                  {
                    title: 'Aetiology',
                    body: [
                      'Malignant (60–85%): non-small cell lung cancer (NSCLC) and small cell lung cancer (SCLC) — most common; mediastinal lymphoma (Hodgkin and non-Hodgkin); metastatic disease; thymoma; germ cell tumours',
                      'Benign (15–40%): central venous catheter (CVC) or pacemaker/ICD lead thrombosis — most common benign cause; fibrosing mediastinitis (histoplasmosis, TB); goitre; thoracic aortic aneurysm; post-radiation fibrosis',
                      'Device-related thrombosis: incidence 1–4% per CVC; left-sided leads carry higher risk due to longer course across SVC',
                      'SCLC: most likely to cause rapid-onset SVC syndrome due to rapid tumour growth'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Clinical Features',
                    body: [
                      'Facial oedema and plethora: worse on waking, improves on sitting upright',
                      'Arm oedema: bilateral or ipsilateral to dominant vessel obstruction',
                      'Dilated collateral veins: anterior chest wall, neck, upper arms — Pemberton\'s sign: raise arms above head → facial congestion worsens if thoracic inlet compression',
                      'Dyspnoea: laryngeal/tracheal oedema; can progress to stridor',
                      'Headache, visual disturbance, confusion: raised intracranial venous pressure',
                      'Symptoms worsen on bending forward or lying flat'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Grading (Yu et al. / CTCAE)',
                    body: [
                      'Grade 0: asymptomatic radiological finding',
                      'Grade 1: oedema of head/neck — does not require treatment',
                      'Grade 2: moderate oedema — functional impairment; medication indicated',
                      'Grade 3: severe oedema with cerebral and/or laryngeal oedema; urgent treatment required',
                      'Grade 4: life-threatening — stridor, coma; emergency intervention'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Investigation',
                    body: [
                      'CT chest with IV contrast: first-line — identifies level and extent of obstruction, collateral pathways, and likely aetiology; assess airway',
                      'MRI venography: alternative if contrast contraindicated; better soft tissue detail',
                      'Histological diagnosis mandatory before chemotherapy/radiotherapy — CT-guided biopsy, bronchoscopy, or mediastinoscopy',
                      'Do NOT delay tissue diagnosis in stable patients — treatment without diagnosis may mask lymphoma and prevent cure',
                      'Venography: reserved for endovascular planning',
                      'Echo: assess cardiac tamponade if pericardial effusion present'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Management — Malignant SVC Syndrome',
                    body: [
                      'Urgent measures: sit upright; dexamethasone 8–16 mg IV/oral — reduces peritumoral oedema; diuretics for oedema (limited evidence)',
                      'Endovascular stenting: treatment of choice for rapid symptom relief regardless of aetiology; self-expanding metallic stent (SEMS) placed under fluoroscopy; symptom relief in >90% within 24–72 hours; preferred over radiotherapy for urgent relief',
                      'SCLC: highly chemosensitive — systemic chemotherapy is definitive treatment; stent first if grade ≥3 then chemotherapy',
                      'NSCLC: radiotherapy (external beam) or stenting + radiotherapy; stent provides faster symptom relief',
                      'Lymphoma: chemotherapy ± radiotherapy; excellent response — stenting rarely needed',
                      'Anticoagulation: recommended if thrombus present on imaging; LMWH (low molecular weight heparin) or DOAC (direct oral anticoagulant)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Management — Benign SVC Syndrome',
                    body: [
                      'Device-related thrombosis: remove device if no longer needed + anticoagulation; catheter-directed thrombolysis (CDT) for acute thrombosis (<14 days); stenting if thrombolysis fails or chronic',
                      'Catheter-directed thrombolysis (CDT): urokinase or alteplase via catheter directly into thrombus; reduces clot burden; follow with angioplasty ± stenting',
                      'Balloon venoplasty: for non-thrombotic stenosis (e.g., post-radiation, fibrosing mediastinitis); stenting if recurrent',
                      'Surgical bypass: SVC bypass using PTFE or autologous vein (e.g., femoral vein or spiral saphenous graft) — reserved for benign disease where endovascular options fail or recur; good long-term patency in benign disease',
                      'Fibrosing mediastinitis: most challenging — medical treatment with antifungals (histoplasmosis) may halt progression; endovascular stenting for symptomatic relief'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Prognosis',
                    body: [
                      'Malignant SVC syndrome: median survival 6 months (NSCLC), longer for SCLC and lymphoma if chemo-responsive',
                      'Stent patency: ~90% at 1 year for malignant disease; re-stenting for in-stent re-stenosis',
                      'Benign SVC syndrome: good long-term outcome after stenting or bypass; 5-year patency of surgical bypass ~70%'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Синдром верхней полой вены (СВПВ) возникает вследствие нарушения кровотока через верхнюю полую вену (ВПВ), что приводит к повышению венозного давления в области головы, шеи и верхних конечностей. Злокачественные новообразования — преимущественно рак лёгкого и лимфома — составляют 60–85% случаев. Оставшаяся часть носит доброкачественный характер и обусловлена преимущественно внутрисосудистыми устройствами (центральные венозные катетеры, электроды кардиостимуляторов). Тяжесть варьирует от умеренного отёка лица до угрожающей жизни обструкции дыхательных путей; тактика определяется этиологией, степенью тяжести и прогнозом.',
                    type: 'text'
                  },
                  {
                    title: 'Этиология',
                    body: [
                      'Злокачественная (60–85%): немелкоклеточный рак лёгкого (НМРЛ) и мелкоклеточный рак лёгкого (МРЛ) — наиболее частая причина; медиастинальная лимфома (болезнь Ходжкина и неходжкинская); метастатическое поражение; тимома; герминогенные опухоли',
                      'Доброкачественная (15–40%): тромбоз центрального венозного катетера (ЦВК) или электродов кардиостимулятора/имплантируемого кардиовертера-дефибриллятора (ИКД) — наиболее частая доброкачественная причина; фиброзный медиастинит (гистоплазмоз, туберкулёз); зоб; аневризма грудной аорты; постлучевой фиброз',
                      'Тромбоз, связанный с устройствами: частота 1–4% на каждый центральный венозный катетер (ЦВК); левосторонние электроды несут более высокий риск из-за более длинного пути через верхнюю полую вену (ВПВ)',
                      'Мелкоклеточный рак лёгкого (МРЛ): наиболее вероятная причина быстро развивающегося синдрома верхней полой вены (СВПВ) вследствие быстрого роста опухоли'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Клиническая картина',
                    body: [
                      'Отёк и полнокровие лица: усиливаются при пробуждении, уменьшаются в положении сидя',
                      'Отёк рук: двусторонний или ипсилатеральный при доминирующей обструкции сосуда',
                      'Расширенные коллатеральные вены: передняя грудная стенка, шея, верхние конечности; признак Пембертона: подъём рук выше головы → усиление застоя на лице при компрессии грудного выхода',
                      'Одышка: отёк гортани/трахеи; может прогрессировать до стридора',
                      'Головная боль, нарушения зрения, спутанность сознания: повышение внутричерепного венозного давления',
                      'Симптомы усиливаются при наклоне вперёд или в положении лёжа'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Степени тяжести (шкала Ю и соавт. / CTCAE)',
                    body: [
                      'Степень 0: бессимптомная рентгенологическая находка',
                      'Степень 1: отёк головы/шеи — лечения не требует',
                      'Степень 2: умеренный отёк — функциональные нарушения; показана медикаментозная терапия',
                      'Степень 3: выраженный отёк с отёком мозга и/или гортани; необходимо срочное лечение',
                      'Степень 4: угроза жизни — стридор, кома; экстренное вмешательство'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Диагностика',
                    body: [
                      'КТ органов грудной клетки с в/в контрастом: первая линия — определяет уровень и протяжённость обструкции, коллатеральные пути и вероятную этиологию; оценка дыхательных путей',
                      'МР-венография: альтернатива при противопоказаниях к контрасту; лучшая детализация мягких тканей',
                      'Гистологическая верификация обязательна до начала химио-/лучевой терапии — КТ-биопсия, бронхоскопия или медиастиноскопия',
                      'НЕ откладывать морфологическую диагностику у стабильных пациентов — лечение без диагноза может маскировать лимфому и препятствовать излечению',
                      'Флебография: только при планировании эндоваскулярного вмешательства',
                      'ЭхоКГ: исключить тампонаду сердца при наличии перикардиального выпота'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Лечение — злокачественный синдром верхней полой вены',
                    body: [
                      'Неотложные меры: положение сидя; дексаметазон 8–16 мг в/в или внутрь — уменьшает перитуморальный отёк; диуретики при отёке (ограниченные данные)',
                      'Эндоваскулярное стентирование: метод выбора для быстрого купирования симптомов вне зависимости от этиологии; самораскрывающийся металлический стент (СРМС) под рентгеноскопическим контролем; облегчение симптомов >90% в течение 24–72 часов; предпочтительнее лучевой терапии для срочного облегчения',
                      'Мелкоклеточный рак лёгкого (МРЛ): высокочувствителен к химиотерапии — системная химиотерапия является основным методом лечения; стентирование сначала при степени ≥3, затем химиотерапия',
                      'Немелкоклеточный рак лёгкого (НМРЛ): лучевая терапия (дистанционная) или стентирование + лучевая терапия; стент обеспечивает более быстрое облегчение симптомов',
                      'Лимфома: химиотерапия ± лучевая терапия; отличный ответ — стентирование редко необходимо',
                      'Антикоагуляция: рекомендуется при наличии тромба на изображениях; низкомолекулярный гепарин (НМГ) или прямые оральные антикоагулянты (ПОАК)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Лечение — доброкачественный синдром верхней полой вены',
                    body: [
                      'Тромбоз, связанный с устройством: удаление устройства при отсутствии необходимости в нём + антикоагуляция; катетер-направленный тромболизис (КНТ) при остром тромбозе (<14 дней); стентирование при неудаче тромболизиса или хроническом поражении',
                      'Катетер-направленный тромболизис (КНТ): урокиназа или альтеплаза через катетер непосредственно в тромб; уменьшает тромботическую нагрузку; далее ангиопластика ± стентирование',
                      'Баллонная венопластика: при нетромботических стенозах (например, постлучевых, при фиброзном медиастините); стентирование при рецидиве',
                      'Хирургическое шунтирование верхней полой вены (ВПВ): с использованием политетрафторэтилена (ПТФЭ) или аутовены (бедренная вена или спиральный трансплантат из большой подкожной вены (БПВ)) — резерв при доброкачественном поражении при неэффективности или рецидиве эндоваскулярных методов; хорошая долгосрочная проходимость',
                      'Фиброзный медиастинит: наиболее сложный случай — противогрибковые препараты (гистоплазмоз) могут замедлить прогрессирование; эндоваскулярное стентирование для симптоматического облегчения'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Прогноз',
                    body: [
                      'Злокачественный синдром верхней полой вены (СВПВ): медиана выживаемости 6 месяцев (немелкоклеточный рак лёгкого — НМРЛ), дольше при мелкоклеточном раке лёгкого (МРЛ) и химиочувствительной лимфоме',
                      'Проходимость стента: ~90% в течение 1 года при злокачественном поражении; ре-стентирование при рестенозе в стенте',
                      'Доброкачественный синдром верхней полой вены (СВПВ): благоприятный долгосрочный исход после стентирования или шунтирования; 5-летняя проходимость хирургического шунта ~70%'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'svc-syndrome-001',
                question_en: 'Most common cause of SVC syndrome overall?',
                question_ru: 'Наиболее частая причина синдрома верхней полой вены (СВПВ) в целом?',
                answer_en: 'Lung cancer',
                answer_ru: 'Рак лёгкого'
              },
              {
                id: 'svc-syndrome-002',
                question_en: 'Proportion of SVC syndrome caused by malignancy?',
                question_ru: 'Доля злокачественных причин синдрома верхней полой вены (СВПВ)?',
                answer_en: '60–85%',
                answer_ru: '60–85%'
              },
              {
                id: 'svc-syndrome-003',
                question_en: 'Most common benign cause of SVC syndrome?',
                question_ru: 'Наиболее частая доброкачественная причина синдрома верхней полой вены (СВПВ)?',
                answer_en: 'CVC / pacemaker lead thrombosis',
                answer_ru: 'Тромбоз центрального венозного катетера (ЦВК) / электрода кардиостимулятора'
              },
              {
                id: 'svc-syndrome-004',
                question_en: 'Pemberton\'s sign: how to elicit?',
                question_ru: 'Признак Пембертона: как вызвать?',
                answer_en: 'Raise arms above head',
                answer_ru: 'Поднять руки выше головы'
              },
              {
                id: 'svc-syndrome-005',
                question_en: 'First-line imaging for SVC syndrome?',
                question_ru: 'Первая линия визуализации при синдроме верхней полой вены (СВПВ)?',
                answer_en: 'CT chest with contrast',
                answer_ru: 'КТ грудной клетки с контрастом'
              },
              {
                id: 'svc-syndrome-006',
                question_en: 'Treatment of choice for rapid symptom relief in SVC syndrome?',
                question_ru: 'Метод выбора для быстрого купирования симптомов синдрома верхней полой вены (СВПВ)?',
                answer_en: 'Endovascular stenting',
                answer_ru: 'Эндоваскулярное стентирование'
              },
              {
                id: 'svc-syndrome-007',
                question_en: 'Stent symptom relief: time to effect?',
                question_ru: 'Стентирование: время до наступления эффекта?',
                answer_en: '24–72 hours',
                answer_ru: '24–72 часа'
              },
              {
                id: 'svc-syndrome-008',
                question_en: 'SCLC SVC syndrome: definitive treatment?',
                question_ru: 'Синдром верхней полой вены (СВПВ) при мелкоклеточном раке лёгкого (МРЛ): основное лечение?',
                answer_en: 'Systemic chemotherapy',
                answer_ru: 'Системная химиотерапия'
              },
              {
                id: 'svc-syndrome-009',
                question_en: 'Steroid used for urgent SVC oedema?',
                question_ru: 'Стероид для срочного лечения отёка при синдроме верхней полой вены (СВПВ)?',
                answer_en: 'Dexamethasone',
                answer_ru: 'Дексаметазон'
              },
              {
                id: 'svc-syndrome-010',
                question_en: 'Why obtain tissue diagnosis before treating malignant SVC syndrome?',
                question_ru: 'Почему необходима морфологическая верификация до лечения злокачественного синдрома верхней полой вены (СВПВ)?',
                answer_en: 'Prevent masking curable lymphoma',
                answer_ru: 'Не маскировать излечимую лимфому'
              },
              {
                id: 'svc-syndrome-011',
                question_en: 'Grade 4 SVC syndrome features?',
                question_ru: 'Признаки синдрома верхней полой вены (СВПВ) 4 степени?',
                answer_en: 'Stridor or coma',
                answer_ru: 'Стридор или кома'
              },
              {
                id: 'svc-syndrome-012',
                question_en: 'Device-related SVC thrombosis <14 days: treatment?',
                question_ru: 'Тромбоз верхней полой вены (ВПВ), связанный с устройством, <14 дней: лечение?',
                answer_en: 'Catheter-directed thrombolysis',
                answer_ru: 'Катетер-направленный тромболизис (КНТ)'
              },
              {
                id: 'svc-syndrome-013',
                question_en: 'Surgical SVC bypass conduit options?',
                question_ru: 'Варианты кондуита для хирургического шунтирования верхней полой вены (ВПВ)?',
                answer_en: 'PTFE or autologous vein',
                answer_ru: 'Политетрафторэтилен (ПТФЭ) или аутовена'
              },
              {
                id: 'svc-syndrome-014',
                question_en: 'Benign SVC bypass 5-year patency?',
                question_ru: '5-летняя проходимость шунта при доброкачественном синдроме верхней полой вены (СВПВ)?',
                answer_en: '~70%',
                answer_ru: '~70%'
              },
              {
                id: 'svc-syndrome-015',
                question_en: 'Fibrosing mediastinitis: most common infectious cause?',
                question_ru: 'Фиброзный медиастинит: наиболее частая инфекционная причина?',
                answer_en: 'Histoplasmosis',
                answer_ru: 'Гистоплазмоз'
              },
              {
                id: 'svc-syndrome-016',
                question_en: 'Malignant SVC stent 1-year patency?',
                question_ru: '1-летняя проходимость стента при злокачественном синдроме верхней полой вены (СВПВ)?',
                answer_en: '~90%',
                answer_ru: '~90%'
              },
              {
                id: 'svc-syndrome-017',
                question_en: 'Malignant SVC syndrome (NSCLC) median survival?',
                question_ru: 'Медиана выживаемости при злокачественном синдроме верхней полой вены (СВПВ) (немелкоклеточный рак лёгкого — НМРЛ)?',
                answer_en: '~6 months',
                answer_ru: '~6 месяцев'
              },
              {
                id: 'svc-syndrome-018',
                question_en: 'Pericardial effusion with SVC syndrome: investigation?',
                question_ru: 'Перикардиальный выпот при синдроме верхней полой вены (СВПВ): исследование?',
                answer_en: 'Echocardiography',
                answer_ru: 'Эхокардиография (ЭхоКГ)'
              },
              {
                id: 'svc-syndrome-019',
                question_en: 'Lymphoma SVC syndrome: preferred treatment?',
                question_ru: 'Синдром верхней полой вены (СВПВ) при лимфоме: предпочтительное лечение?',
                answer_en: 'Chemotherapy ± radiotherapy',
                answer_ru: 'Химиотерапия ± лучевая терапия'
              },
              {
                id: 'svc-syndrome-020',
                question_en: 'Non-thrombotic SVC stenosis: endovascular treatment?',
                question_ru: 'Нетромботический стеноз верхней полой вены (ВПВ): эндоваскулярное лечение?',
                answer_en: 'Balloon venoplasty ± stenting',
                answer_ru: 'Баллонная венопластика ± стентирование'
              }
            ]
          },

          // ── Topic: DVT & PE ───────────────────────────────────────────────────
          {
            slug: 'dvt-pe',
            title_en: 'Deep Vein Thrombosis & Pulmonary Embolism',
            title_ru: 'Тромбоз глубоких вен (ТГВ) и тромбоэмболия лёгочной артерии (ТЭЛА)',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Venous thromboembolism (VTE) encompasses deep vein thrombosis (DVT) and pulmonary embolism (PE). DVT is thrombus formation within the deep venous system (most commonly lower limb); PE results from embolisation of thrombus to the pulmonary circulation. VTE affects ~1–3 per 1,000 per year; incidence doubles with each decade after 40. Untreated proximal DVT carries ~50% risk of PE. Case fatality of massive PE is 30–50%. Understanding risk stratification, diagnosis, and evidence-based treatment is central to vascular and cardiac surgical practice.',
                    type: 'text'
                  },
                  {
                    title: 'Pathophysiology — Virchow\'s Triad',
                    body: [
                      'Stasis: immobility, heart failure, venous obstruction, pregnancy — reduces venous return and creates turbulence-free laminar flow favouring clot formation',
                      'Endothelial injury: surgery, trauma, central venous catheters, inflammation — exposes subendothelial collagen and tissue factor → platelet adhesion and coagulation cascade activation',
                      'Hypercoagulability: inherited thrombophilias (Factor V Leiden — most common inherited; Prothrombin G20210A; Protein C/S deficiency; antithrombin III deficiency) or acquired (malignancy, antiphospholipid syndrome, OCP, HRT, pregnancy)',
                      'DVT classification: proximal (iliac, femoral, popliteal — highest PE risk) vs distal (calf); upper limb (axillary/subclavian — effort thrombosis / Paget-Schroetter syndrome in young athletes)',
                      'Provoked vs unprovoked: provoked = identifiable transient risk factor (surgery, trauma, hospitalisation, OCP); unprovoked = no identifiable cause → higher recurrence risk'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'DVT — Diagnosis',
                    body: [
                      'Wells score (pre-test probability): active cancer +1; paralysis/cast +1; bedridden >3 days or surgery ≤12 weeks +1; localised tenderness +1; entire leg swollen +1; calf >3 cm difference +1; pitting oedema +1; collateral superficials +1; previous DVT +1; alternative diagnosis as likely −2. Score ≥2: high probability; <2: low/moderate probability',
                      'D-dimer: highly sensitive (>95%), low specificity; if low pre-test probability AND D-dimer negative → DVT excluded; do NOT use if high pre-test probability or in hospital inpatients',
                      'Duplex ultrasound: gold standard; non-compressibility of vein = DVT; assess extent and chronicity; sensitivity >95% for proximal DVT, ~75% for distal',
                      'CT venography / MRI: for central (iliac, IVC) or pelvic DVT not seen on USS; useful in May-Thurner syndrome workup',
                      'Phlegmasia cerulea dolens: massive ilio-femoral DVT with venous gangrene risk; limb blue, painful, oedematous — surgical emergency'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'DVT — Treatment',
                    body: [
                      'Anticoagulation — start immediately on clinical suspicion (do not await imaging if high probability): DOACs preferred (NICE/ESC/ACCP): rivaroxaban 15 mg BD × 21 days then 20 mg OD; OR apixaban 10 mg BD × 7 days then 5 mg BD',
                      'LMWH (enoxaparin 1.5 mg/kg SC OD or 1 mg/kg BD) + warfarin (INR 2–3): if DOAC contraindicated (severe renal impairment, antiphospholipid syndrome); LMWH monotherapy preferred in active cancer (CLOT trial)',
                      'Duration: provoked (transient risk factor) = 3 months; unprovoked first episode = ≥3 months, consider extended; second unprovoked = indefinite; cancer-associated = indefinite until cancer resolved',
                      'IVC filter: if anticoagulation absolutely contraindicated with proximal DVT/PE; use retrievable filter; does NOT reduce PE mortality; increases DVT recurrence',
                      'Catheter-directed thrombolysis (CDT): acute massive ilio-femoral DVT or phlegmasia; ATTRACT trial (2017): CDT reduced PTS severity but not overall incidence — use selectively in young, fit patients with severe symptoms within 14 days',
                      'Compression: graduated compression stockings (30–40 mmHg) post-DVT; SOX trial (2014): did not prevent PTS — ACCP/NICE no longer routinely recommend for PTS prevention',
                      'Post-thrombotic syndrome (PTS): chronic venous insufficiency from valve damage; occurs in 20–50% after DVT; Villalta score used to grade severity (0–4 per symptom/sign; ≥5 = PTS)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'PE — Classification & Diagnosis',
                    body: [
                      'Massive (high-risk PE): haemodynamic instability — SBP <90 mmHg or drop ≥40 mmHg for >15 min, cardiac arrest, or obstructive shock; requires immediate reperfusion',
                      'Submassive (intermediate-risk): haemodynamically stable + RV dysfunction on echo/CT + elevated troponin or BNP/NT-proBNP; monitor closely for deterioration',
                      'Low-risk PE: haemodynamically stable, no RV dysfunction, normal biomarkers; PESI score class I–II → outpatient treatment (HESTIA criteria)',
                      'Wells PE score: DVT signs/symptoms +3; PE most likely diagnosis +3; HR >100 +1.5; immobilisation/surgery ≤4 weeks +1.5; prior DVT/PE +1.5; haemoptysis +1; malignancy +1. ≤4 = PE unlikely; >4 = PE likely',
                      'CT pulmonary angiography (CTPA): gold standard — sensitivity/specificity >95%; provides RV:LV ratio for risk stratification',
                      'V/Q scan: when CTPA contraindicated (renal failure, contrast allergy, pregnancy); normal V/Q excludes PE; high-probability = segmental defects with normal ventilation',
                      'ECG: sinus tachycardia (most common); S1Q3T3 (10–15% — right heart strain pattern); new right bundle branch block (RBBB); right axis deviation',
                      'Echocardiography (TTE/TOE): RV dilatation and hypokinesia; McConnell\'s sign — RV free wall akinesia with preserved apical contraction (highly specific for acute PE); paradoxical septal motion; tricuspid regurgitation',
                      'Biomarkers: troponin I/T (myocardial injury from RV strain); BNP/NT-proBNP (wall stress); elevated = worse prognosis and intermediate/high-risk category'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'PE — Treatment',
                    body: [
                      'Massive PE: systemic thrombolysis — alteplase 100 mg IV over 2 hours; contraindicated if recent surgery <10 days, prior intracranial haemorrhage, active bleeding; if thrombolysis contraindicated or fails → surgical pulmonary embolectomy (on cardiopulmonary bypass); ECMO as bridge',
                      'Intermediate-risk PE: therapeutic anticoagulation + monitoring in HDU/ICU; escalate to catheter-directed therapy (PERT — pulmonary embolism response team) or systemic thrombolysis if deterioration',
                      'Low-risk PE: therapeutic anticoagulation; HESTIA criteria for outpatient eligibility; PESI class I–II supports early discharge',
                      'Anticoagulation: same agents as DVT; rivaroxaban or apixaban preferred; duration: provoked = 3 months; unprovoked = ≥3 months, consider indefinite; cancer-associated = indefinite',
                      'Chronic thromboembolic pulmonary hypertension (CTEPH): occurs in ~2–4% after PE; presents as progressive dyspnoea >3 months post-PE; diagnose with V/Q scan (perfusion defects) then right heart catheterisation; mPAP ≥25 mmHg; treatment: pulmonary endarterectomy (PEA — surgical standard); riociguat (medical); balloon pulmonary angioplasty (BPA — for inoperable CTEPH)'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Венозный тромбоэмболизм (ВТЭ) включает тромбоз глубоких вен (ТГВ) и тромбоэмболию лёгочной артерии (ТЭЛА). ТГВ — формирование тромба в системе глубоких вен (чаще всего нижних конечностей); ТЭЛА возникает вследствие эмболизации тромба в лёгочное кровообращение. Частота ВТЭ составляет ~1–3 на 1 000 в год; удваивается с каждым десятилетием после 40 лет. Нелечёный проксимальный ТГВ несёт ~50% риск ТЭЛА. Летальность массивной ТЭЛА — 30–50%.',
                    type: 'text'
                  },
                  {
                    title: 'Патофизиология — триада Вирхова',
                    body: [
                      'Стаз: иммобилизация, сердечная недостаточность, венозная обструкция, беременность',
                      'Повреждение эндотелия: хирургия, травма, центральные венозные катетеры, воспаление — обнажение субэндотелиального коллагена и тканевого фактора',
                      'Гиперкоагуляция: наследственные тромбофилии (мутация фактора V Лейдена — наиболее частая; мутация протромбина G20210A; дефицит протеина C/S; дефицит антитромбина III) или приобретённые (злокачественные новообразования, антифосфолипидный синдром, ОКП, заместительная гормональная терапия / ЗГТ, беременность)',
                      'Классификация ТГВ: проксимальный (подвздошные, бедренные, подколенные вены — наибольший риск ТЭЛА) и дистальный (вены голени); ТГВ верхней конечности (подмышечная/подключичная — синдром Педжета–Шреттера у спортсменов)',
                      'Провоцированный и непровоцированный ТГВ: провоцированный — выявляемый преходящий фактор риска (операция, травма, госпитализация, ОКП); непровоцированный — нет выявляемой причины → выше риск рецидива'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'ТГВ — Диагностика',
                    body: [
                      'Шкала Уэллса (предтестовая вероятность): активный рак +1; паралич/гипс +1; постельный режим >3 дней или операция ≤12 нед +1; локальная болезненность +1; отёк всей ноги +1; разница окружности голени >3 см +1; ямочный отёк +1; коллатеральные поверхностные вены +1; ТГВ в анамнезе +1; альтернативный диагноз более вероятен −2. Счёт ≥2: высокая вероятность',
                      'Д-димер: высокая чувствительность (>95%), низкая специфичность; низкая предтестовая вероятность + отрицательный Д-димер → ТГВ исключён',
                      'Дуплексное УЗИ: золотой стандарт; несжимаемость вены = ТГВ; чувствительность >95% для проксимального ТГВ, ~75% для дистального',
                      'КТ-венография / МРТ: для центрального (подвздошного, нижняя полая вена / НПВ) или тазового ТГВ',
                      'Флегмазия цеурулеа (синяя флегмазия): массивный илиофеморальный тромбоз с риском венозной гангрены — хирургическая экстренная ситуация'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'ТГВ — Лечение',
                    body: [
                      'Антикоагуляция — начать немедленно при клиническом подозрении: предпочтительны прямые оральные антикоагулянты (ПОАК): ривароксабан 15 мг 2 раза/сут × 21 день, затем 20 мг 1 раз/сут; или апиксабан 10 мг 2 раза/сут × 7 дней, затем 5 мг 2 раза/сут',
                      'Низкомолекулярный гепарин (НМГ) (эноксапарин 1,5 мг/кг п/к 1 раз/сут или 1 мг/кг 2 раза/сут) + варфарин (международное нормализованное отношение / МНО 2–3): при противопоказаниях к ПОАК; НМГ-монотерапия предпочтительна при активном раке (исследование CLOT)',
                      'Длительность: провоцированный (преходящий фактор) = 3 мес; первый непровоцированный ≥3 мес, рассмотреть продлённую терапию; второй непровоцированный = бессрочно; при раке = бессрочно до ремиссии',
                      'Кава-фильтр: при абсолютных противопоказаниях к антикоагуляции + проксимальный ТГВ/ТЭЛА; использовать извлекаемый фильтр',
                      'Катетерный тромболизис (КТ): острый массивный илиофеморальный ТГВ или флегмазия; исследование ATTRACT (2017): снижает тяжесть постромботического синдрома (ПТС), но не его частоту',
                      'Постромботический синдром (ПТС): хроническая венозная недостаточность от повреждения клапанов; возникает у 20–50% после ТГВ; оценка по шкале Виллальта'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'ТЭЛА — Классификация и диагностика',
                    body: [
                      'Массивная (высокого риска): гемодинамическая нестабильность — систолическое артериальное давление (сАД) <90 мм рт. ст. или снижение ≥40 мм рт. ст. >15 мин, остановка сердца; требует немедленной реперфузии',
                      'Субмассивная (промежуточного риска): гемодинамически стабильная + дисфункция правого желудочка (ПЖ) по ЭхоКГ/КТ + повышенный тропонин или мозговой натрийуретический пептид (МНУП / BNP)',
                      'Низкого риска: гемодинамически стабильная, нет дисфункции ПЖ, нормальные биомаркеры; шкала PESI класс I–II → амбулаторное лечение',
                      'КТ-ангиография лёгочных артерий (КТАЛ): золотой стандарт — чувствительность/специфичность >95%',
                      'Вентиляционно-перфузионная (В/П) сцинтиграфия: при противопоказаниях к КТАЛ (почечная недостаточность, аллергия на контраст, беременность)',
                      'ЭКГ: синусовая тахикардия (наиболее часто); паттерн S1Q3T3 (10–15%); новая блокада правой ножки пучка Гиса (БПНПГ); отклонение электрической оси вправо',
                      'Эхокардиография (ЭхоКГ): признак МакКоннелла — акинез свободной стенки ПЖ при сохранённой подвижности верхушки (высокоспецифичен для острой ТЭЛА); дилатация ПЖ',
                      'Биомаркеры: тропонин I/T; МНУП / BNP или NT-proBNP; повышение = ухудшение прогноза'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'ТЭЛА — Лечение',
                    body: [
                      'Массивная ТЭЛА: системный тромболизис — альтеплаза 100 мг в/в за 2 ч; при противопоказаниях или неэффективности → хирургическая тромбэктомия из лёгочной артерии (на аппарате искусственного кровообращения / АИК); экстракорпоральная мембранная оксигенация (ЭКМО / ECMO) как мост',
                      'Промежуточного риска: терапевтическая антикоагуляция + мониторинг в отделении реанимации и интенсивной терапии (ОРИТ); при ухудшении — катетерный тромболизис (мультидисциплинарная команда по ТЭЛА / PERT)',
                      'Низкого риска: антикоагуляция; критерии HESTIA для амбулаторного лечения',
                      'Антикоагуляция: ПОАК предпочтительны; ривароксабан или апиксабан; длительность: провоцированная = 3 мес; непровоцированная = ≥3 мес, рассмотреть бессрочно',
                      'Хроническая тромбоэмболическая лёгочная гипертензия (ХТЭЛГ / CTEPH): ~2–4% после ТЭЛА; прогрессирующая одышка >3 мес; диагностика: В/П сцинтиграфия + катетеризация правых отделов сердца; среднее давление в лёгочной артерии (сДЛА) ≥25 мм рт. ст.; лечение: лёгочная эндартерэктомия (ЛЭЭ) — хирургический стандарт; риоцигуат; баллонная ангиопластика лёгочных артерий (БАЛЛА) при неоперабельной форме'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'dvt-pe-001',
                question_en: 'Most common inherited thrombophilia?',
                question_ru: 'Наиболее частая наследственная тромбофилия?',
                answer_en: 'Factor V Leiden',
                answer_ru: 'Мутация фактора V Лейдена'
              },
              {
                id: 'dvt-pe-002',
                question_en: 'DVT gold standard diagnosis?',
                question_ru: 'Золотой стандарт диагностики тромбоза глубоких вен (ТГВ)?',
                answer_en: 'Duplex ultrasound',
                answer_ru: 'Дуплексное УЗИ'
              },
              {
                id: 'dvt-pe-003',
                question_en: 'DVT Wells score: alternative diagnosis as likely = ?',
                question_ru: 'Шкала Уэллса при тромбозе глубоких вен (ТГВ): альтернативный диагноз более вероятен = ?',
                answer_en: '−2 points',
                answer_ru: '−2 балла'
              },
              {
                id: 'dvt-pe-004',
                question_en: 'D-dimer: clinical value?',
                question_ru: 'Д-димер: клиническое значение?',
                answer_en: 'Excludes DVT/PE if negative',
                answer_ru: 'Исключает тромбоз глубоких вен (ТГВ)/тромбоэмболию лёгочной артерии (ТЭЛА) при отрицательном результате'
              },
              {
                id: 'dvt-pe-005',
                question_en: 'Rivaroxaban initial DVT dose?',
                question_ru: 'Начальная доза ривароксабана при тромбозе глубоких вен (ТГВ)?',
                answer_en: '15 mg BD × 21 days',
                answer_ru: '15 мг 2 раза/сут × 21 день'
              },
              {
                id: 'dvt-pe-006',
                question_en: 'DVT treatment duration (provoked)?',
                question_ru: 'Длительность лечения провоцированного тромбоза глубоких вен (ТГВ)?',
                answer_en: '3 months',
                answer_ru: '3 месяца'
              },
              {
                id: 'dvt-pe-007',
                question_en: 'Cancer DVT: preferred anticoagulant (trial)?',
                question_ru: 'Тромбоз глубоких вен (ТГВ) при раке: предпочтительный антикоагулянт (исследование)?',
                answer_en: 'LMWH (CLOT trial)',
                answer_ru: 'Низкомолекулярный гепарин (НМГ) (исследование CLOT)'
              },
              {
                id: 'dvt-pe-008',
                question_en: 'Massive PE haemodynamic instability threshold?',
                question_ru: 'Порог гемодинамической нестабильности при массивной тромбоэмболии лёгочной артерии (ТЭЛА)?',
                answer_en: 'SBP <90 mmHg',
                answer_ru: 'сАД <90 мм рт. ст.'
              },
              {
                id: 'dvt-pe-009',
                question_en: 'PE gold standard imaging?',
                question_ru: 'Золотой стандарт визуализации при тромбоэмболии лёгочной артерии (ТЭЛА)?',
                answer_en: 'CTPA',
                answer_ru: 'КТ-ангиография лёгочных артерий (КТАЛ)'
              },
              {
                id: 'dvt-pe-010',
                question_en: 'Most common PE ECG finding?',
                question_ru: 'Наиболее частая находка на ЭКГ при тромбоэмболии лёгочной артерии (ТЭЛА)?',
                answer_en: 'Sinus tachycardia',
                answer_ru: 'Синусовая тахикардия'
              },
              {
                id: 'dvt-pe-011',
                question_en: 'McConnell\'s sign: what is it?',
                question_ru: 'Признак МакКоннелла: что это?',
                answer_en: 'RV free wall akinesia',
                answer_ru: 'Акинез свободной стенки правого желудочка (ПЖ)'
              },
              {
                id: 'dvt-pe-012',
                question_en: 'Massive PE: systemic thrombolytic agent & dose?',
                question_ru: 'Массивная тромбоэмболия лёгочной артерии (ТЭЛА): системный тромболитик и доза?',
                answer_en: 'Alteplase 100 mg/2h',
                answer_ru: 'Альтеплаза 100 мг за 2 ч'
              },
              {
                id: 'dvt-pe-013',
                question_en: 'When is V/Q scan preferred over CTPA?',
                question_ru: 'Когда В/П сцинтиграфия предпочтительнее КТ-ангиографии лёгочных артерий (КТАЛ)?',
                answer_en: 'Contrast contraindicated',
                answer_ru: 'Противопоказание к контрасту'
              },
              {
                id: 'dvt-pe-014',
                question_en: 'IVC filter main indication?',
                question_ru: 'Основное показание к кава-фильтру?',
                answer_en: 'Anticoagulation contraindicated',
                answer_ru: 'Противопоказание к антикоагуляции'
              },
              {
                id: 'dvt-pe-015',
                question_en: 'Post-thrombotic syndrome severity scale?',
                question_ru: 'Шкала тяжести постромботического синдрома (ПТС)?',
                answer_en: 'Villalta score',
                answer_ru: 'Шкала Виллальта'
              },
              {
                id: 'dvt-pe-016',
                question_en: 'CTEPH incidence after PE?',
                question_ru: 'Частота хронической тромбоэмболической лёгочной гипертензии (ХТЭЛГ) после тромбоэмболии лёгочной артерии (ТЭЛА)?',
                answer_en: '~2–4%',
                answer_ru: '~2–4%'
              },
              {
                id: 'dvt-pe-017',
                question_en: 'CTEPH surgical treatment?',
                question_ru: 'Хирургическое лечение хронической тромбоэмболической лёгочной гипертензии (ХТЭЛГ)?',
                answer_en: 'Pulmonary endarterectomy',
                answer_ru: 'Лёгочная эндартерэктомия (ЛЭЭ)'
              },
              {
                id: 'dvt-pe-018',
                question_en: 'Phlegmasia cerulea dolens: cause?',
                question_ru: 'Синяя флегмазия: причина?',
                answer_en: 'Massive ilio-femoral DVT',
                answer_ru: 'Массивный илиофеморальный тромбоз глубоких вен (ТГВ)'
              },
              {
                id: 'dvt-pe-019',
                question_en: 'ATTRACT trial (2017): conclusion on CDT for DVT?',
                question_ru: 'Исследование ATTRACT (2017): вывод о катетерном тромболизисе (КТ) при тромбозе глубоких вен (ТГВ)?',
                answer_en: 'Reduced PTS severity, not incidence',
                answer_ru: 'Снижает тяжесть постромботического синдрома (ПТС), не частоту'
              },
              {
                id: 'dvt-pe-020',
                question_en: 'Virchow\'s triad components?',
                question_ru: 'Составляющие триады Вирхова?',
                answer_en: 'Stasis, injury, hypercoagulability',
                answer_ru: 'Стаз, повреждение, гиперкоагуляция'
              }
            ]
          }

        ]
      },

      // ── AORTIC & VASCULAR ────────────────────────────────────────────────────
      {
        slug: 'aortic-vascular',
        title_en: 'Aortic & Vascular',
        title_ru: 'Аортальная и сосудистая хирургия',
        topics: [

          // ── Topic: AAA — Open Repair ─────────────────────────────────────────
          {
            slug: 'aaa-open',
            title_en: 'AAA — Open Repair',
            title_ru: 'Аневризма брюшной аорты (АБА) — открытое хирургическое лечение',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'An abdominal aortic aneurysm (AAA) is a permanent focal dilatation of the infrarenal aorta ≥3 cm (1.5× normal diameter). Open repair remains the gold standard for juxtarenal and pararenal aneurysms, anatomically hostile EVAR cases, young fit patients requiring durable repair, and haemodynamically unstable ruptured AAA. Elective open repair carries ~2–3% mortality in high-volume centres; emergency repair for rupture carries 30–50% mortality.',
                    type: 'text'
                  },
                  {
                    title: 'Indications for Repair (ESVS 2019 / SVS Guidelines)',
                    body: [
                      'Diameter ≥5.5 cm in men (Class I, Level A — ESVS 2019)',
                      'Diameter ≥5.0 cm in women (Class IIa)',
                      'Rapid expansion >1.0 cm/year regardless of size',
                      'Symptomatic AAA: abdominal/back pain, tenderness, distal embolisation — repair regardless of size',
                      'Ruptured AAA — surgical emergency',
                      'Anatomically unsuitable for EVAR: short or angled neck, bilateral iliac occlusion, prior groin surgery precluding femoral access',
                      'Connective tissue disorders (Marfan syndrome, Ehlers-Danlos type IV) — open preferred due to risk of proximal seal zone failure with EVAR'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Pre-operative Assessment',
                    body: [
                      'CT angiography (CTA): mandatory — defines neck length (≥10–15 mm required infrarenally), neck angulation, iliac anatomy, accessory renals, IMA patency',
                      'Cardiac: ECG; transthoracic echocardiography (TTE) if symptomatic or poor functional status (MET <4); consider stress testing/coronary imaging if high risk',
                      'Renal function: baseline eGFR — influences clamp level choice and contrast load',
                      'Respiratory: spirometry if significant respiratory history; FEV₁ <50% predicted increases risk',
                      'Optimise: antihypertensives (target SBP <140 mmHg), statin (high-intensity: atorvastatin 40–80 mg), antiplatelet (aspirin 75–100 mg daily — continue perioperatively)',
                      'Smoking cessation: each year of cessation reduces aneurysm growth rate by ~15%',
                      'Group & save / cross-match; cell salvage (intraoperative autologous transfusion)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Operative Technique',
                    body: [
                      'Anaesthesia: general anaesthesia ± epidural (reduces postoperative ileus, aids analgesia); arterial line + central venous catheter + urinary catheter; cell salvage active throughout',
                      'Approach — midline laparotomy (most common): xiphoid-to-pubis incision; bowels retracted right; good access to entire aorta and iliac vessels',
                      'Approach — left retroperitoneal (flank): for re-do procedures, obese patients, hostile abdomen, juxtarenal AAA, horseshoe kidney; associated with less ileus and better respiratory outcomes; limited access to right iliac',
                      'Exposure: divide ligament of Treitz; identify infrarenal aortic neck; mobilise left renal vein (may need division if juxtarenal — first ligate adrenal, gonadal and lumbar tributaries to preserve renal drainage via collaterals)',
                      'Distal control: dissect common iliac arteries (or external + internal iliac separately if iliac aneurysm); avoid hypogastric plexus on anterior surface of aortic bifurcation (risk: retrograde ejaculation)',
                      'Heparinisation: unfractionated heparin 100 IU/kg IV before clamping; confirm ACT >200–250 s',
                      'Clamping: proximal clamp below renal arteries first (suprarenal or supraceliac if juxtarenal/emergency), then distal clamps',
                      'Aortotomy: open sac longitudinally; evacuate thrombus; oversew back-bleeding lumbar arteries (2-0 or 3-0 prolene); assess IMA',
                      'Proximal anastomosis: end-to-end; 2-0 prolene continuous suture to aortic neck',
                      'Graft selection: tube graft (aorto-aortic) if no significant iliac disease; bifurcated (trouser) graft to common iliacs for iliac aneurysm or occlusive disease; material — Dacron (most common) or ePTFE',
                      'IMA management: ligate if: patent arc of Riolan, IMA <3 mm, normal Doppler signal in sigmoid. Reimplant (Carrel patch technique) if: absent arc of Riolan, IMA >3 mm, signs of sigmoid ischaemia',
                      'Declamping: release distal clamps first to flush debris, then proximal; anticipate declamping hypotension (vasodilation, acidosis release — communicate with anaesthetist)',
                      'Closure: close aneurysm sac over graft (prevents aorto-enteric fistula); peritonealise if possible; mass closure of abdomen'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Complications',
                    body: [
                      'Intraoperative haemorrhage: venous injuries most hazardous — left renal vein, iliac veins, inferior vena cava (IVC); control with pressure, proximal balloon, direct repair',
                      'Colonic ischaemia (2–3%): most serious early complication; results from IMA ligation ± internal iliac compromise; presents with bloody diarrhoea within 24–72 h; diagnose by sigmoidoscopy; mild (mucosal) — conservative; transmural — Hartmann\'s procedure',
                      'Renal impairment: prolonged suprarenal clamping >30 min increases risk; aim infrarenal clamp time <60 min; perioperative renal protection: maintain euvolaemia, avoid nephrotoxins',
                      'Spinal cord ischaemia (<1% infrarenal): anterior spinal artery syndrome (motor loss, preserved proprioception); higher risk with thoracoabdominal extension; CSF drainage if developed',
                      'Sexual dysfunction: retrograde ejaculation (10–15%) and impotence from hypogastric plexus injury; minimise by hugging aortic bifurcation during dissection',
                      'Aorto-enteric fistula (AEF): late complication (months–years); presents with "herald bleed" — small GI haemorrhage preceding massive haemorrhage; CT shows perigraft gas/fluid; treatment: aortic reconstruction + bowel repair',
                      'Graft infection (1–2%): fever, elevated CRP, perigraft fluid on CT; treatment: graft excision + extra-anatomic bypass (axillo-bifemoral) or in-situ reconstruction with rifampicin-soaked Dacron or cryopreserved allograft',
                      'Para-anastomotic aneurysm: false aneurysm at suture line; surveillance CT recommended at 5 years post-repair'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Ruptured AAA — Emergency Management',
                    body: [
                      'Classic triad: hypotension, acute abdominal/back pain, pulsatile abdominal mass — present together in only ~50% of cases',
                      'Retroperitoneal rupture: contained by retroperitoneum — patient may be haemodynamically stable; allows time for CT and transfer',
                      'Free intraperitoneal rupture: immediate exsanguination; CT contraindicated if haemodynamically unstable — proceed directly to theatre',
                      'Permissive hypotension: target systolic BP 50–70 mmHg until aortic control achieved — prevent clot disruption; avoid aggressive resuscitation',
                      'REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta): placed in Zone I (supraceliac) via femoral access; bridges to definitive repair in haemodynamically unstable patients',
                      'Mortality: 30–50% overall; <10% if patient reaches theatre without cardiac arrest'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Аневризма брюшной аорты (АБА) — постоянное локальное расширение инфраренального отдела аорты ≥3 см (в 1,5 раза больше нормального диаметра). Открытое хирургическое вмешательство остаётся золотым стандартом при юкстаренальных и параренальных аневризмах, анатомически неблагоприятных для эндоваскулярного протезирования аорты (ЭВПА / EVAR) случаях, у молодых пациентов с хорошим соматическим статусом, требующих долгосрочного результата, а также при гемодинамически нестабильном разрыве АБА. Плановое открытое вмешательство сопровождается летальностью ~2–3% в высокообъёмных центрах; при экстренном лечении разрыва летальность составляет 30–50%.',
                    type: 'text'
                  },
                  {
                    title: 'Показания к вмешательству (ESVS 2019 / SVS)',
                    body: [
                      'Диаметр ≥5,5 см у мужчин (класс I, уровень A — ESVS 2019)',
                      'Диаметр ≥5,0 см у женщин (класс IIa)',
                      'Быстрый рост >1,0 см/год вне зависимости от размера',
                      'Симптомная АБА: боль в животе/спине, болезненность при пальпации, дистальная эмболизация — вмешательство вне зависимости от размера',
                      'Разрыв АБА — хирургическая экстренная ситуация',
                      'Анатомически неблагоприятные условия для ЭВПА: короткая или угловатая шейка аорты, двусторонняя окклюзия подвздошных артерий',
                      'Наследственные заболевания соединительной ткани (синдром Марфана, тип IV синдрома Элерса–Данлоса) — предпочтительно открытое вмешательство'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Предоперационная подготовка',
                    body: [
                      'Компьютерно-томографическая ангиография (КТА): обязательна — определяет длину шейки (≥10–15 мм инфраренально), угол шейки, анатомию подвздошных артерий, добавочные почечные артерии, проходимость нижней брыжеечной артерии (НБА)',
                      'Сердце: электрокардиография (ЭКГ); трансторакальная эхокардиография (ТТЭхо) при симптомах или низкой функциональной нагрузке (метаболический эквивалент задачи / МЭТ <4)',
                      'Функция почек: исходная скорость клубочковой фильтрации (СКФ) — влияет на выбор уровня пережатия',
                      'Дыхательная система: спирометрия при значимом анамнезе; объём форсированного выдоха за 1 с (ОФВ₁) <50% от должного повышает риск',
                      'Оптимизация: антигипертензивные препараты (целевое систолическое артериальное давление / сАД <140 мм рт. ст.), статины (высокоинтенсивная терапия: аторвастатин 40–80 мг), антиагреганты (аспирин 75–100 мг/сут — продолжать периоперационно)',
                      'Отказ от курения; аппаратная аутотрансфузия (реинфузия клеток) в ходе операции'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Оперативная техника',
                    body: [
                      'Анестезия: общая ± эпидуральная; артериальная линия, центральный венозный катетер (ЦВК), мочевой катетер; аппаратная аутотрансфузия',
                      'Доступ — срединная лапаротомия (наиболее частый): разрез от мечевидного отростка до лобка; тонкая кишка отводится вправо',
                      'Доступ — левый забрюшинный (фланговый): повторные операции, ожирение, враждебный живот, юкстаренальная АБА; меньше пареза кишечника, лучшие дыхательные результаты; ограниченный доступ к правой подвздошной артерии',
                      'Экспозиция: пересечение связки Трейтца; выделение инфраренальной шейки аорты; мобилизация левой почечной вены (при необходимости — пересечение после лигирования надпочечниковой, гонадной и поясничной ветвей)',
                      'Дистальный контроль: выделение общих подвздошных артерий; избегать гипогастрального сплетения на передней поверхности бифуркации аорты (риск: ретроградная эякуляция)',
                      'Гепаринизация: нефракционированный гепарин (НФГ) 100 МЕ/кг внутривенно перед пережатием; контроль активированного времени свёртывания (АВС) >200–250 с',
                      'Пережатие: проксимально ниже почечных артерий, затем дистально',
                      'Вскрытие мешка: эвакуация тромботических масс; прошивание поясничных артерий (2-0 или 3-0 пролен); оценка НБА',
                      'Проксимальный анастомоз: конец-в-конец; непрерывный шов пролен 2-0 к шейке аорты',
                      'Выбор протеза: прямой (аорто-аортальный) при отсутствии поражения подвздошных артерий; бифуркационный («брюки») — при аневризме или окклюзии подвздошных; материал — дакрон (наиболее часто) или политетрафторэтилен (ПТФЭ / ePTFE)',
                      'НБА: лигировать при: проходимой дуге Риолана, диаметре НБА <3 мм, нормальном допплеровском сигнале в сигме. Реимплантировать по методике заплаты Каррела при: отсутствии дуги Риолана, диаметре НБА >3 мм, признаках ишемии сигмовидной кишки',
                      'Снятие зажимов: сначала дистально, затем проксимально; ожидать гипотензию после деблокирования',
                      'Закрытие: укрытие протеза стенкой мешка (профилактика аорто-кишечного свища); ушивание брюшины; послойное закрытие раны'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Осложнения',
                    body: [
                      'Интраоперационное кровотечение: наиболее опасны венозные повреждения — левая почечная вена, подвздошные вены, нижняя полая вена (НПВ)',
                      'Ишемия ободочной кишки (2–3%): наиболее серьёзное раннее осложнение; кровавый стул в течение 24–72 ч; диагностика — сигмоидоскопия; лёгкая (слизистая) — консервативно; трансмуральная — операция Хартмана',
                      'Почечная недостаточность: длительное супраренальное пережатие >30 мин; цель — время пережатия инфраренально <60 мин',
                      'Ишемия спинного мозга (<1% при инфраренальной АБА): синдром передней спинномозговой артерии (двигательный дефицит при сохранённой проприоцепции)',
                      'Половая дисфункция: ретроградная эякуляция (10–15%) и импотенция при повреждении гипогастрального сплетения; минимизировать диссекцию у бифуркации',
                      'Аорто-кишечный свищ (АКС): позднее осложнение; «сигнальное» кровотечение, предшествующее массивному; лечение: реконструкция аорты + ушивание кишки',
                      'Инфекция протеза (1–2%): удаление протеза + экстраанатомическое шунтирование или реконструкция протезом, пропитанным рифампицином',
                      'Параанастомотическая аневризма: ложная аневризма по линии анастомоза; КТ-наблюдение через 5 лет после операции'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Разрыв АБА — Экстренное лечение',
                    body: [
                      'Классическая триада: гипотензия, острая боль в животе/спине, пульсирующее образование в животе — присутствует одновременно лишь у ~50% пациентов',
                      'Забрюшинный разрыв: отграничен забрюшинным пространством — пациент может быть гемодинамически стабилен; допускает КТ и транспортировку',
                      'Свободный внутрибрюшинный разрыв: немедленная экзсангвинация; КТ противопоказана при нестабильной гемодинамике — немедленно в операционную',
                      'Допустимая гипотензия: целевое систолическое артериальное давление (сАД) 50–70 мм рт. ст. до достижения аортального контроля',
                      'REBOA (эндоваскулярная баллонная окклюзия аорты при реанимации): устанавливается в зону I (надчревная) через бедренный доступ у гемодинамически нестабильных пациентов',
                      'Летальность: 30–50% в целом; <10% при поступлении в операционную без остановки сердца'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'aaa-open-001',
                question_en: 'Elective AAA repair threshold (men)?',
                question_ru: 'Порог планового вмешательства при аневризме брюшной аорты (АБА) у мужчин?',
                answer_en: '≥5.5 cm',
                answer_ru: '≥5,5 см'
              },
              {
                id: 'aaa-open-002',
                question_en: 'Elective AAA repair threshold (women)?',
                question_ru: 'Порог планового вмешательства при аневризме брюшной аорты (АБА) у женщин?',
                answer_en: '≥5.0 cm',
                answer_ru: '≥5,0 см'
              },
              {
                id: 'aaa-open-003',
                question_en: 'Growth rate threshold mandating repair?',
                question_ru: 'Темп роста аневризмы брюшной аорты (АБА), требующий вмешательства?',
                answer_en: '>1 cm/year',
                answer_ru: '>1 см/год'
              },
              {
                id: 'aaa-open-004',
                question_en: 'Elective open AAA repair mortality?',
                question_ru: 'Летальность планового открытого вмешательства при аневризме брюшной аорты (АБА)?',
                answer_en: '~2–3%',
                answer_ru: '~2–3%'
              },
              {
                id: 'aaa-open-005',
                question_en: 'Ruptured AAA mortality?',
                question_ru: 'Летальность при разрыве аневризмы брюшной аорты (АБА)?',
                answer_en: '30–50%',
                answer_ru: '30–50%'
              },
              {
                id: 'aaa-open-006',
                question_en: 'Heparin dose before aortic clamping?',
                question_ru: 'Доза гепарина перед пережатием аорты?',
                answer_en: '100 IU/kg IV',
                answer_ru: '100 МЕ/кг внутривенно'
              },
              {
                id: 'aaa-open-007',
                question_en: 'Classic ruptured AAA triad?',
                question_ru: 'Классическая триада разрыва аневризмы брюшной аорты (АБА)?',
                answer_en: 'Hypotension, pain, mass',
                answer_ru: 'Гипотензия, боль, пульсация'
              },
              {
                id: 'aaa-open-008',
                question_en: 'Most serious early post-op complication?',
                question_ru: 'Наиболее серьёзное раннее послеоперационное осложнение?',
                answer_en: 'Colonic ischaemia',
                answer_ru: 'Ишемия ободочной кишки'
              },
              {
                id: 'aaa-open-009',
                question_en: 'How to confirm colonic ischaemia post-AAA repair?',
                question_ru: 'Как подтвердить ишемию кишки после вмешательства на аневризме брюшной аорты (АБА)?',
                answer_en: 'Sigmoidoscopy',
                answer_ru: 'Сигмоидоскопия'
              },
              {
                id: 'aaa-open-010',
                question_en: 'Aorto-enteric fistula: hallmark presentation?',
                question_ru: 'Аорто-кишечный свищ: характерный симптом?',
                answer_en: 'Herald bleed',
                answer_ru: '«Сигнальное» кровотечение'
              },
              {
                id: 'aaa-open-011',
                question_en: 'Target clamp time to minimise renal injury?',
                question_ru: 'Целевое время пережатия для минимизации почечного повреждения?',
                answer_en: '<60 min',
                answer_ru: '<60 мин'
              },
              {
                id: 'aaa-open-012',
                question_en: 'Nerve plexus damaged causing sexual dysfunction?',
                question_ru: 'Какое нервное сплетение повреждается, вызывая половую дисфункцию?',
                answer_en: 'Hypogastric plexus',
                answer_ru: 'Гипогастральное сплетение'
              },
              {
                id: 'aaa-open-013',
                question_en: 'Vein most at risk of intraoperative injury?',
                question_ru: 'Вена, наиболее подверженная интраоперационному повреждению?',
                answer_en: 'Left renal vein',
                answer_ru: 'Левая почечная вена'
              },
              {
                id: 'aaa-open-014',
                question_en: 'Proximal anastomosis suture material?',
                question_ru: 'Шовный материал для проксимального анастомоза?',
                answer_en: '2-0 prolene',
                answer_ru: 'Пролен 2-0'
              },
              {
                id: 'aaa-open-015',
                question_en: 'IMA reimplantation technique?',
                question_ru: 'Техника реимплантации нижней брыжеечной артерии (НБА)?',
                answer_en: 'Carrel patch',
                answer_ru: 'Заплата Каррела'
              },
              {
                id: 'aaa-open-016',
                question_en: 'Retroperitoneal approach advantage vs midline?',
                question_ru: 'Преимущество забрюшинного доступа перед срединным?',
                answer_en: 'Less ileus/respiratory',
                answer_ru: 'Меньше пареза/дыхательных осложнений'
              },
              {
                id: 'aaa-open-017',
                question_en: 'REBOA zone for ruptured AAA?',
                question_ru: 'Зона установки баллонной окклюзии аорты (REBOA) при разрыве аневризмы брюшной аорты (АБА)?',
                answer_en: 'Zone I',
                answer_ru: 'Зона I'
              },
              {
                id: 'aaa-open-018',
                question_en: 'Permissive hypotension target in rupture?',
                question_ru: 'Целевое систолическое артериальное давление (сАД) при допустимой гипотензии при разрыве?',
                answer_en: 'SBP 50–70 mmHg',
                answer_ru: 'сАД 50–70 мм рт. ст.'
              },
              {
                id: 'aaa-open-019',
                question_en: 'Graft materials used in open AAA repair?',
                question_ru: 'Материалы протеза при открытом вмешательстве на аневризме брюшной аорты (АБА)?',
                answer_en: 'Dacron or ePTFE',
                answer_ru: 'Дакрон или политетрафторэтилен (ПТФЭ)'
              },
              {
                id: 'aaa-open-020',
                question_en: 'Minimum infrarenal neck length for open repair?',
                question_ru: 'Минимальная длина инфраренальной шейки аорты для открытого вмешательства?',
                answer_en: '≥10–15 mm',
                answer_ru: '≥10–15 мм'
              }
            ]
          },

          // ── aaa-evar ──────────────────────────────────────────────────────────
          {
            slug: 'aaa-evar',
            title_en: 'AAA — EVAR',
            title_ru: 'АБА — ЭВАР',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Endovascular aneurysm repair (EVAR) is the deployment of a stent-graft within the aortic lumen to exclude an abdominal aortic aneurysm (AAA) from arterial pressure, preventing rupture. First described by Parodi in 1991. EVAR now accounts for >70% of elective AAA repairs in the UK. It offers lower 30-day mortality than open repair (0.5–1.5% vs 3–5%) and shorter hospital stay (2–3 days vs 7–10 days), but requires lifelong surveillance due to ongoing device-related complications.',
                    type: 'text'
                  },
                  {
                    title: 'Anatomical Prerequisites & Patient Selection',
                    body: [
                      'Infrarenal neck: length ≥15 mm (absolute minimum 10 mm), diameter 17–32 mm (device-dependent); neck angulation <60°; suprarenal angulation <45°; no heavy circumferential thrombus or calcification; no conical (reverse-taper) neck',
                      'Access vessels: bilateral common iliac artery (CIA) diameter ≥7 mm for sheath delivery; iliac tortuosity must be traversable; severe aorto-iliac occlusive disease may preclude EVAR',
                      'Iliac landing zones: common iliac artery (CIA) diameter ≤20 mm for distal seal; internal iliac artery (IIA) must be preserved on at least one side — bilateral IIA occlusion risks pelvic ischaemia (buttock claudication, erectile dysfunction, colonic ischaemia)',
                      'Fenestrated EVAR (FEVAR): indicated for juxtarenal or pararenal AAA with an infrarenal neck <10 mm; requires pre-operative CT planning and custom-manufactured graft with fenestrations/branches for renal and mesenteric vessels',
                      'Branched EVAR (BEVAR): for thoraco-abdominal aneurysms involving the visceral segment'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'EVAR Procedure',
                    body: [
                      'Anaesthesia: general, regional (spinal/epidural), or local with sedation — EVAR allows regional/local anaesthesia unlike open repair',
                      'Access: bilateral common femoral artery (CFA) surgical cut-down or large-bore percutaneous access (MANTA or ProGlide closure devices)',
                      'Deployment: bifurcated endograft main body deployed from ipsilateral (right) access via a large-bore delivery sheath (14–26 Fr); contralateral limb snared from left via cross-over wire; performed under fluoroscopic guidance',
                      'Graft oversizing: 10–20% relative to aortic neck diameter to ensure adequate radial force and proximal seal',
                      'Completion angiogram: confirms position below renal arteries, absence of endoleak, and patency of iliac limbs',
                      'Contrast: iodinated contrast carries risk of contrast-induced nephropathy (CIN); CO₂ angiography can substitute in patients with renal impairment'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Endoleaks',
                    body: [
                      'Type I — attachment zone leak: perigraft flow at proximal (Ia) or distal (Ib) fixation; continued AAA pressurisation → ALWAYS requires intervention (balloon moulding, Palmaz stent, extension cuff, or conversion to open)',
                      'Type II — collateral backflow: retrograde filling of sac from patent inferior mesenteric artery (IMA) or lumbar arteries; most common endoleak type; does NOT always require intervention — treat if sac expands ≥5 mm over 6 months (transarterial or translumbar embolisation)',
                      'Type III — structural failure: graft fabric tear (IIIa) or modular junctional disconnection (IIIb); re-pressurises sac → requires intervention (re-lining)',
                      'Type IV — graft porosity: microporous bleeding through fabric within 30 days; now rare with modern low-porosity grafts; self-limiting',
                      'Type V (endotension): sac expansion without demonstrable endoleak on imaging; mechanism uncertain (possibly transmitted pressure through mural thrombus); treat if significant sac growth'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Complications & Surveillance',
                    body: [
                      'Post-implantation syndrome: fever + raised C-reactive protein (CRP) at 2–5 days post-EVAR; self-limiting inflammatory response to graft material; distinguish from infection; treat symptomatically',
                      'Graft limb thrombosis: unilateral lower limb ischaemia; treated by thrombectomy + stenting or femoro-femoral crossover bypass',
                      'Graft migration: loss of proximal seal → Type I endoleak; risk with neck dilatation over time or undersizing',
                      'Sac rupture: can still occur if endoleak re-pressurises sac',
                      'EVAR surveillance protocol: CT angiography (CTA) at 1 month post-op, 12 months, then annually; duplex ultrasound (DUS) can substitute CTA in stable patients to reduce radiation and contrast exposure',
                      'Secondary interventions: required in 10–20% of patients by 5 years (endoleak treatment, limb extension, open conversion)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Key Trials',
                    body: [
                      'EVAR 1 trial (UK, 2004): EVAR vs open repair in fit patients — EVAR had lower 30-day mortality but no late survival advantage; similar all-cause mortality at 8 years; EVAR had higher re-intervention rate',
                      'OVER trial (USA, 2012): confirmed EVAR 1 findings — early mortality benefit of EVAR lost by 5–9 years',
                      'EVAR 2 trial (UK): EVAR vs no repair in surgically unfit patients — no survival benefit for EVAR due to high perioperative mortality and late device-related deaths; best medical therapy comparable',
                      'IMPROVE trial (UK, 2014): emergency EVAR (REVAR) vs open repair for ruptured AAA — no significant 30-day mortality difference overall; EVAR group had shorter hospital stay; local expertise is the key determinant'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Эндоваскулярное аортальное протезирование (ЭВАР) — имплантация стент-графта в просвет аорты для выключения аневризмы брюшной аорты (АБА) из артериального кровотока и предотвращения разрыва. Впервые описано Пароди в 1991 году. В настоящее время ЭВАР составляет >70% плановых вмешательств по поводу АБА в Великобритании. Метод обеспечивает более низкую 30-дневную летальность по сравнению с открытой операцией (0,5–1,5% против 3–5%) и более короткий период госпитализации (2–3 дня против 7–10 дней), однако требует пожизненного динамического наблюдения в связи с возможными осложнениями, связанными с устройством.',
                    type: 'text'
                  },
                  {
                    title: 'Анатомические требования и отбор пациентов',
                    body: [
                      'Инфраренальная шейка: длина ≥15 мм (абсолютный минимум 10 мм), диаметр 17–32 мм (зависит от устройства); угол изгиба шейки <60°; наддиафрагмальный угол <45°; отсутствие выраженного циркулярного тромба или кальциноза; отсутствие конической (обратно-конусной) шейки',
                      'Доступные артерии: диаметр общей подвздошной артерии (ОПА) ≥7 мм для проведения интродьюсера; извитость подвздошных артерий должна быть преодолимой; выраженная аортоподвздошная окклюзия может исключать ЭВАР',
                      'Дистальные зоны фиксации: диаметр ОПА ≤20 мм для обеспечения герметичности; необходимо сохранить внутреннюю подвздошную артерию (ВПА) хотя бы с одной стороны — двусторонняя окклюзия ВПА грозит ишемией органов таза (перемежающаяся хромота ягодиц, эректильная дисфункция, ишемия ободочной кишки)',
                      'Фенестрированный ЭВАР (ФЭВАР): показан при юкстаренальной или параренальной АБА с инфраренальной шейкой <10 мм; требует предоперационного КТ-планирования и изготовления стент-графта на заказ с фенестрами/браншами для почечных и мезентериальных сосудов',
                      'Ветвистый ЭВАР (ВЭВАР): применяется при торакоабдоминальных аневризмах с вовлечением висцерального сегмента'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Техника ЭВАР',
                    body: [
                      'Анестезия: общая, регионарная (спинальная/эпидуральная) или местная с седацией — ЭВАР, в отличие от открытой операции, позволяет применять регионарную/местную анестезию',
                      'Доступ: хирургическое выделение общей бедренной артерии (ОБА) с обеих сторон или пункционный доступ большого диаметра (устройства закрытия MANTA или ProGlide)',
                      'Имплантация: основное тело бифуркационного эндографта вводится через ипсилатеральный (правый) доступ по интродьюсеру большого диаметра (14–26 Fr); контралатеральная браншa захватывается проводником через контралатеральный доступ; выполняется под рентгеноскопическим контролем',
                      'Овердайзинг: стент-графт превышает диаметр шейки аорты на 10–20% для обеспечения достаточной радиальной силы и проксимальной герметичности',
                      'Контрольная ангиография: подтверждает расположение ниже почечных артерий, отсутствие эндолика и проходимость подвздошных браншей',
                      'Контрастное вещество: йодсодержащий контраст несёт риск контраст-индуцированной нефропатии (КИН); CO₂-ангиография может использоваться вместо него у пациентов с нарушением функции почек'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Эндолики',
                    body: [
                      'Тип I — утечка в зонах фиксации: периграфтный кровоток у проксимального (Ia) или дистального (Ib) края; продолжающееся давление на мешок аневризмы — ВСЕГДА требует вмешательства (баллонная ремоделировка, стент Palmaz, удлиняющая манжета или конверсия в открытую операцию)',
                      'Тип II — ретроградный коллатеральный кровоток: ретроградное заполнение мешка из проходимой нижней брыжеечной артерии (НБА) или поясничных артерий; наиболее распространённый тип эндолика; вмешательство не всегда требуется — лечить при расширении мешка ≥5 мм за 6 месяцев (трансартериальная или транслюмбарная эмболизация)',
                      'Тип III — структурная несостоятельность: разрыв ткани графта (IIIa) или разъединение модульных стыков (IIIb); давление в мешке восстанавливается — требует вмешательства (реэндоваскуляризация)',
                      'Тип IV — пористость графта: микропористое просачивание через ткань в первые 30 дней; редок при современных низкопористых графтах; самоустраняется',
                      'Тип V (эндотензия): расширение мешка при отсутствии визуализируемого эндолика; механизм неясен (возможно, давление передаётся через пристеночный тромб); лечение при значительном росте мешка'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Осложнения и динамическое наблюдение',
                    body: [
                      'Постимплантационный синдром: лихорадка + повышение C-реактивного белка (СРБ) на 2–5-е сутки после ЭВАР; самоограничивающаяся воспалительная реакция на материал графта; дифференцировать с инфекцией; лечение симптоматическое',
                      'Тромбоз браншей графта: острая ишемия нижней конечности на стороне поражения; лечится тромбэктомией + стентированием или бедренно-бедренным обходным шунтированием',
                      'Миграция графта: потеря проксимальной герметичности → эндолик типа I; риск увеличивается при дилатации шейки аорты или недостаточном овердайзинге',
                      'Разрыв мешка: возможен при восстановлении давления в мешке на фоне эндолика',
                      'Протокол наблюдения после ЭВАР: КТ-ангиография (КТА) через 1 месяц после операции, через 12 месяцев, затем ежегодно; дуплексное ультразвуковое сканирование (ДУЗС) может заменять КТА у стабильных пациентов для уменьшения лучевой нагрузки и введения контраста',
                      'Повторные вмешательства: требуются у 10–20% пациентов в течение 5 лет (устранение эндолика, имплантация удлиняющей бранши, конверсия в открытую операцию)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Ключевые исследования',
                    body: [
                      'EVAR 1 (Великобритания, 2004): ЭВАР против открытой операции у сохранных пациентов — ЭВАР показал более низкую 30-дневную летальность, однако не имел преимуществ в долгосрочной выживаемости; к 8 годам показатели общей смертности сравнялись; у ЭВАР выше частота повторных вмешательств',
                      'OVER (США, 2012): подтвердил результаты EVAR 1 — раннее преимущество ЭВАР в летальности нивелируется к 5–9 годам',
                      'EVAR 2 (Великобритания): ЭВАР против консервативной терапии у неоперабельных пациентов — ЭВАР не улучшил выживаемость из-за высокой периоперационной летальности и поздних осложнений устройства; результаты сопоставимы с наилучшей медикаментозной терапией',
                      'IMPROVE (Великобритания, 2014): экстренный ЭВАР против открытой операции при разрыве АБА — достоверного различия в 30-дневной летальности не выявлено; в группе ЭВАР — более короткая госпитализация; ключевым фактором является опыт конкретного центра'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'aaa-evar-001',
                question_en: 'What is the minimum infrarenal aortic neck length required for standard endovascular aneurysm repair (EVAR)?',
                question_ru: 'Какова минимальная длина инфраренальной шейки аорты, необходимая для стандартного эндоваскулярного аортального протезирования (ЭВАР)?',
                answer_en: '≥15 mm',
                answer_ru: '≥15 мм'
              },
              {
                id: 'aaa-evar-002',
                question_en: 'What is the minimum common iliac artery (CIA) diameter required for endovascular aneurysm repair (EVAR) device sheath delivery?',
                question_ru: 'Каков минимальный диаметр общей подвздошной артерии (ОПА), необходимый для проведения интродьюсера при ЭВАР?',
                answer_en: '≥7 mm',
                answer_ru: '≥7 мм'
              },
              {
                id: 'aaa-evar-003',
                question_en: 'By what percentage is an endovascular aneurysm repair (EVAR) stent-graft oversized relative to the aortic neck diameter?',
                question_ru: 'На какой процент стент-графт при ЭВАР превышает диаметр шейки аорты (овердайзинг)?',
                answer_en: '10–20%',
                answer_ru: '10–20%'
              },
              {
                id: 'aaa-evar-004',
                question_en: 'What is the maximum aortic neck angulation permitted for standard endovascular aneurysm repair (EVAR)?',
                question_ru: 'Каков максимально допустимый угол изгиба шейки аорты для стандартного ЭВАР?',
                answer_en: '<60°',
                answer_ru: '<60°'
              },
              {
                id: 'aaa-evar-005',
                question_en: 'Which endoleak type after endovascular aneurysm repair (EVAR) involves retrograde flow into the aneurysm sac from the inferior mesenteric artery (IMA) or lumbar arteries?',
                question_ru: 'Какой тип эндолика после ЭВАР характеризуется ретроградным заполнением мешка аневризмы из нижней брыжеечной артерии (НБА) или поясничных артерий?',
                answer_en: 'Type II endoleak',
                answer_ru: 'Эндолик типа II'
              },
              {
                id: 'aaa-evar-006',
                question_en: 'Which endoleak type after endovascular aneurysm repair (EVAR) involves perigraft flow at the proximal or distal attachment zones and always requires intervention?',
                question_ru: 'Какой тип эндолика после ЭВАР характеризуется периграфтным кровотоком в проксимальной или дистальной зонах фиксации и всегда требует вмешательства?',
                answer_en: 'Type I endoleak',
                answer_ru: 'Эндолик типа I'
              },
              {
                id: 'aaa-evar-007',
                question_en: 'Which endoleak type after endovascular aneurysm repair (EVAR) is caused by structural graft failure — fabric tear or modular disconnection?',
                question_ru: 'Какой тип эндолика после ЭВАР обусловлен структурной несостоятельностью — разрывом ткани или разъединением модульных стыков графта?',
                answer_en: 'Type III endoleak',
                answer_ru: 'Эндолик типа III'
              },
              {
                id: 'aaa-evar-008',
                question_en: 'What is the most common endoleak type after endovascular aneurysm repair (EVAR)?',
                question_ru: 'Какой тип эндолика является наиболее распространённым после ЭВАР?',
                answer_en: 'Type II endoleak',
                answer_ru: 'Эндолик типа II'
              },
              {
                id: 'aaa-evar-009',
                question_en: 'What is endotension (Type V endoleak) after endovascular aneurysm repair (EVAR)?',
                question_ru: 'Что такое эндотензия (эндолик типа V) после ЭВАР?',
                answer_en: 'Sac expansion, no leak',
                answer_ru: 'Рост мешка без эндолика'
              },
              {
                id: 'aaa-evar-010',
                question_en: 'When does a Type II endoleak after endovascular aneurysm repair (EVAR) require intervention?',
                question_ru: 'В каком случае эндолик типа II после ЭВАР требует вмешательства?',
                answer_en: 'Sac expansion ≥5 mm',
                answer_ru: 'Рост мешка ≥5 мм'
              },
              {
                id: 'aaa-evar-011',
                question_en: 'At what time point is the first post-operative CT angiography (CTA) performed after endovascular aneurysm repair (EVAR)?',
                question_ru: 'В какой срок выполняется первая послеоперационная КТ-ангиография (КТА) после ЭВАР?',
                answer_en: '1 month post-op',
                answer_ru: 'Через 1 месяц после операции'
              },
              {
                id: 'aaa-evar-012',
                question_en: 'What is the approximate 30-day mortality of elective endovascular aneurysm repair (EVAR)?',
                question_ru: 'Какова приблизительная 30-дневная летальность при плановом ЭВАР?',
                answer_en: '0.5–1.5%',
                answer_ru: '0,5–1,5%'
              },
              {
                id: 'aaa-evar-013',
                question_en: 'What is the typical hospital stay after endovascular aneurysm repair (EVAR) compared to open abdominal aortic aneurysm (AAA) repair?',
                question_ru: 'Какова типичная продолжительность госпитализации после ЭВАР по сравнению с открытой операцией при АБА?',
                answer_en: '2–3 days vs 7–10',
                answer_ru: '2–3 дня против 7–10'
              },
              {
                id: 'aaa-evar-014',
                question_en: 'What is post-implantation syndrome after endovascular aneurysm repair (EVAR) characterised by?',
                question_ru: 'Чем характеризуется постимплантационный синдром после ЭВАР?',
                answer_en: 'Fever, raised CRP',
                answer_ru: 'Лихорадка, рост СРБ'
              },
              {
                id: 'aaa-evar-015',
                question_en: 'Which UK trial compared endovascular aneurysm repair (EVAR) versus open repair in fit patients and found no late survival advantage for EVAR?',
                question_ru: 'Какое британское исследование сравнивало ЭВАР с открытой операцией у сохранных пациентов и не выявило преимуществ ЭВАР в долгосрочной выживаемости?',
                answer_en: 'EVAR 1 trial',
                answer_ru: 'Исследование EVAR 1'
              },
              {
                id: 'aaa-evar-016',
                question_en: 'What did the EVAR 2 trial show about endovascular aneurysm repair (EVAR) in surgically unfit patients?',
                question_ru: 'Что показало исследование EVAR 2 относительно ЭВАР у пациентов с высоким хирургическим риском?',
                answer_en: 'No survival benefit',
                answer_ru: 'Нет преимущества в выживаемости'
              },
              {
                id: 'aaa-evar-017',
                question_en: 'When is fenestrated endovascular aneurysm repair (FEVAR) indicated instead of standard EVAR?',
                question_ru: 'В каких случаях показан фенестрированный ЭВАР (ФЭВАР) вместо стандартного ЭВАР?',
                answer_en: 'Juxtarenal AAA (short neck)',
                answer_ru: 'Юкстаренальная АБА (короткая шейка)'
              },
              {
                id: 'aaa-evar-018',
                question_en: 'What vascular complication results from bilateral internal iliac artery (IIA) occlusion during endovascular aneurysm repair (EVAR)?',
                question_ru: 'Какое сосудистое осложнение возникает при двусторонней окклюзии внутренней подвздошной артерии (ВПА) во время ЭВАР?',
                answer_en: 'Pelvic ischaemia',
                answer_ru: 'Ишемия органов таза'
              },
              {
                id: 'aaa-evar-019',
                question_en: 'What aortic neck diameter range is suitable for standard endovascular aneurysm repair (EVAR) device sizing?',
                question_ru: 'Какой диаметр шейки аорты соответствует диапазону стандартных устройств для ЭВАР?',
                answer_en: '17–32 mm',
                answer_ru: '17–32 мм'
              },
              {
                id: 'aaa-evar-020',
                question_en: 'Which UK trial compared emergency endovascular aneurysm repair (EVAR) versus open repair for ruptured abdominal aortic aneurysm (AAA)?',
                question_ru: 'Какое британское исследование сравнивало экстренный ЭВАР с открытой операцией при разрыве АБА?',
                answer_en: 'IMPROVE trial',
                answer_ru: 'Исследование IMPROVE'
              }
            ]
          }

        ]
      },

      // ── PHARMACOLOGY & CRITICAL CARE ─────────────────────────────────────────
      {
        slug: 'pharmacology-critical-care',
        title_en: 'Pharmacology & Critical Care',
        title_ru: 'Фармакология и интенсивная терапия',
        topics: [

          // ── Topic: Anticoagulation ───────────────────────────────────────────
          {
            slug: 'anticoagulation',
            title_en: 'Anticoagulation (Heparin, LMWH, Warfarin, DOACs, Reversal Agents)',
            title_ru: 'Антикоагуляция (гепарин, НМГ, варфарин, ПОАК, антидоты)',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Anticoagulation is central to vascular and cardiac surgery — for prevention and treatment of venous thromboembolism (VTE), management of atrial fibrillation (AF), bridging peri-operatively, and during endovascular and cardiac procedures. The main classes are: unfractionated heparin (UFH), low molecular weight heparin (LMWH), vitamin K antagonists (VKA — warfarin), direct oral anticoagulants (DOACs), and parenteral direct thrombin inhibitors. Each has distinct mechanisms, monitoring requirements, and reversal agents.',
                    type: 'text'
                  },
                  {
                    title: 'Unfractionated Heparin (UFH)',
                    body: [
                      'Mechanism: binds antithrombin III (AT III) → irreversibly inhibits thrombin (factor IIa) and factor Xa; also inhibits IXa, XIa, XIIa',
                      'Route: IV infusion (therapeutic) or SC (prophylactic); immediate onset',
                      'Monitoring: activated partial thromboplastin time (APTT) — target 1.5–2.5× control; or activated clotting time (ACT) during procedures (target >250 s for PCI, >300 s for bypass)',
                      'Intraoperative dose: 70–100 IU/kg bolus for EVT; 300 IU/kg for cardiopulmonary bypass (CPB)',
                      'Reversal: protamine sulphate 1 mg per 100 IU heparin given in last 2–3 hours; risk of protamine reaction (hypotension, pulmonary hypertension) in fish-allergic or prior protamine-exposed patients',
                      'Heparin-induced thrombocytopenia (HIT): platelet drop >50% after 5–10 days → stop all heparin; diagnose with 4T score + anti-PF4 antibody (ELISA); treat with argatroban or fondaparinux',
                      'HIT type II: immune-mediated; thrombotic complications; mortality ~10–20% if untreated'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Low Molecular Weight Heparin (LMWH)',
                    body: [
                      'Mechanism: predominantly inhibits factor Xa > thrombin (IIa); anti-Xa:anti-IIa ratio ~4:1 (enoxaparin)',
                      'Examples: enoxaparin (Clexane), dalteparin (Fragmin), tinzaparin (Innohep)',
                      'Route: subcutaneous (SC); predictable pharmacokinetics; once or twice daily dosing',
                      'Monitoring: not routinely required; anti-Xa level in renal impairment, pregnancy, extremes of weight',
                      'Therapeutic dose (enoxaparin): 1 mg/kg SC twice daily or 1.5 mg/kg SC once daily',
                      'VTE prophylaxis: enoxaparin 40 mg SC once daily (20 mg if eGFR <30)',
                      'Renal clearance: accumulates in CKD (eGFR <30) — use UFH instead or monitor anti-Xa',
                      'Reversal: protamine partially reverses (neutralises anti-IIa, ~60% anti-Xa activity); no complete reversal agent'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Warfarin (Vitamin K Antagonist)',
                    body: [
                      'Mechanism: inhibits vitamin K epoxide reductase → blocks γ-carboxylation of factors II, VII, IX, X and proteins C and S',
                      'Monitoring: INR (international normalised ratio); therapeutic range 2.0–3.0 for most indications; 2.5–3.5 for mechanical mitral valve',
                      'Onset: 3–5 days (factor VII depleted first — shortest half-life); full effect 5–7 days',
                      'Interactions: extensive — potentiated by amiodarone, metronidazole, fluconazole, NSAIDs; inhibited by rifampicin, carbamazepine, alcohol (chronic)',
                      'Reversal for urgent surgery: vitamin K 5–10 mg IV (effect in 6–12 h) + four-factor prothrombin complex concentrate (4F-PCC, e.g., Beriplex) for immediate reversal',
                      'Reversal for life-threatening bleeding: 4F-PCC + vitamin K IV',
                      'Bridging: for high-risk patients (mechanical valves, AF with high CHA₂DS₂-VASc) peri-operatively — LMWH while warfarin held; evidence for bridging in AF is weak (BRIDGE trial: no benefit, more bleeding)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Direct Oral Anticoagulants (DOACs)',
                    body: [
                      'Direct factor Xa inhibitors: rivaroxaban, apixaban, edoxaban — inhibit free and clot-bound Xa directly',
                      'Direct thrombin (IIa) inhibitor: dabigatran — directly inhibits thrombin',
                      'Advantages over warfarin: fixed dosing, no routine monitoring, fewer interactions, faster onset/offset, lower intracranial haemorrhage rate',
                      'Monitoring: not routinely required; anti-Xa level (for Xa inhibitors) or thrombin time/ecarin clotting time (for dabigatran) in emergencies',
                      'Renal excretion: dabigatran 80% renal — contraindicated if eGFR <30; rivaroxaban/apixaban less renally dependent',
                      'Reversal: idarucizumab (Praxbind) — monoclonal antibody fragment; reverses dabigatran immediately; andexanet alfa — reverses Xa inhibitors (rivaroxaban, apixaban); 4F-PCC: off-label but used for Xa inhibitors when andexanet not available'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Parenteral Direct Thrombin Inhibitors',
                    body: [
                      'Argatroban: IV direct thrombin inhibitor; hepatic metabolism (use in renal failure); monitored by APTT; drug of choice for HIT',
                      'Bivalirudin: IV; used during PCI and cardiac surgery as heparin alternative in HIT; short half-life (~25 min); monitored by ACT',
                      'Fondaparinux: selective anti-Xa; SC; no HIT risk (does not bind PF4); used for VTE prophylaxis/treatment and as HIT alternative'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Peri-operative Management',
                    body: [
                      'Warfarin: stop 5 days before elective surgery; check INR day before; target INR <1.5 for most procedures',
                      'DOACs: stop 24–48 h before low-bleeding-risk procedures; 48–72 h before high-risk (renal function dependent for dabigatran)',
                      'LMWH bridging: give last dose 24 h before surgery; restart 24–48 h post-op when haemostasis secure',
                      'Emergency reversal — heparin: protamine; warfarin: 4F-PCC + vit K; dabigatran: idarucizumab; Xa inhibitors: andexanet alfa or 4F-PCC',
                      'Re-starting anticoagulation post-op: balance bleeding vs thrombosis risk; most guidelines recommend 24–72 h for VTE prophylaxis, longer for therapeutic'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Антикоагуляция занимает центральное место в сосудистой и кардиохирургии — для профилактики и лечения венозной тромбоэмболии (ВТЭ), ведения фибрилляции предсердий (ФП), периоперационного перехода (bridging) и при проведении эндоваскулярных и кардиохирургических вмешательств. Основные классы: нефракционированный гепарин (НФГ), низкомолекулярный гепарин (НМГ), антагонисты витамина K (АВК — варфарин), прямые оральные антикоагулянты (ПОАК) и парентеральные прямые ингибиторы тромбина. Каждый из них имеет свой механизм действия, требования к мониторингу и антидоты.',
                    type: 'text'
                  },
                  {
                    title: 'Нефракционированный гепарин (НФГ)',
                    body: [
                      'Механизм: связывается с антитромбином III (АТ III) → необратимо ингибирует тромбин (фактор IIa) и фактор Xa; также ингибирует IXa, XIa, XIIa',
                      'Путь введения: в/в инфузия (терапевтическая) или п/к (профилактическая); немедленное начало действия',
                      'Мониторинг: активированное частичное тромбопластиновое время (АЧТВ) — целевой показатель 1,5–2,5× контроль; или активированное время свёртывания (АВС) во время процедур (>250 с при ЧКВ, >300 с при искусственном кровообращении — ИК)',
                      'Интраоперационная доза: 70–100 МЕ/кг болюс при эндоваскулярных вмешательствах; 300 МЕ/кг при искусственном кровообращении (ИК)',
                      'Антидот: протамина сульфат 1 мг на 100 МЕ гепарина, введённого за последние 2–3 часа; риск реакции на протамин (гипотензия, лёгочная гипертензия) у пациентов с аллергией на рыбу или ранее получавших протамин',
                      'Гепарин-индуцированная тромбоцитопения (ГИТ): снижение тромбоцитов >50% через 5–10 дней → отменить весь гепарин; диагностика по шкале 4T + антитела к тромбоцитарному фактору 4 (ТФ-4) методом ИФА (ELISA); лечение: аргатробан или фондапаринукс',
                      'ГИТ II типа: иммуноопосредованная; тромботические осложнения; смертность ~10–20% без лечения'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Низкомолекулярный гепарин (НМГ)',
                    body: [
                      'Механизм: преимущественно ингибирует фактор Xa > тромбин (IIa); соотношение анти-Xa:анти-IIa активности ~4:1 (эноксапарин)',
                      'Примеры: эноксапарин (Клексан), далтепарин (Фрагмин), тинзапарин (Иннохеп)',
                      'Путь введения: подкожно (п/к); предсказуемая фармакокинетика; введение один или два раза в сутки',
                      'Мониторинг: рутинно не требуется; уровень анти-Xa при почечной недостаточности, беременности, крайних значениях массы тела',
                      'Терапевтическая доза (эноксапарин): 1 мг/кг п/к дважды в сутки или 1,5 мг/кг п/к один раз в сутки',
                      'Профилактика венозной тромбоэмболии (ВТЭ): эноксапарин 40 мг п/к один раз в сутки (20 мг при скорости клубочковой фильтрации — СКФ <30)',
                      'Почечный клиренс: накапливается при хронической болезни почек (ХБП) (СКФ <30) — применять нефракционированный гепарин (НФГ) или мониторировать уровень анти-Xa',
                      'Антидот: протамин частично нейтрализует (нейтрализует анти-IIa активность, ~60% анти-Xa активности); полного антидота нет'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Варфарин (антагонист витамина K)',
                    body: [
                      'Механизм: ингибирует эпоксид-редуктазу витамина K → блокирует γ-карбоксилирование факторов II, VII, IX, X и протеинов C и S',
                      'Мониторинг: международное нормализованное отношение (МНО); терапевтический диапазон 2,0–3,0 при большинстве показаний; 2,5–3,5 при механическом митральном клапане',
                      'Начало действия: 3–5 дней (первым истощается фактор VII — наименьший период полувыведения); полный эффект через 5–7 дней',
                      'Взаимодействия: многочисленные — усиливается амиодароном, метронидазолом, флуконазолом, нестероидными противовоспалительными средствами (НПВС); ослабляется рифампицином, карбамазепином, хроническим употреблением алкоголя',
                      'Нейтрализация при экстренной операции: витамин K 5–10 мг в/в (эффект через 6–12 ч) + концентрат четырёхфакторного протромбинового комплекса (КПК-4Ф, например, Берипекс) для немедленного устранения антикоагуляции',
                      'Нейтрализация при угрожающем жизни кровотечении: КПК-4Ф + витамин K в/в',
                      'Периоперационный переход (bridging): для пациентов высокого риска (механические клапаны, фибрилляция предсердий — ФП с высоким индексом CHA₂DS₂-VASc) — низкомолекулярный гепарин (НМГ) на время отмены варфарина; эффективность bridging при ФП не доказана (исследование BRIDGE: нет пользы, больше кровотечений)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Прямые оральные антикоагулянты (ПОАК)',
                    body: [
                      'Прямые ингибиторы фактора Xa: ривароксабан, апиксабан, эдоксабан — напрямую ингибируют свободный и связанный с тромбом Xa',
                      'Прямой ингибитор тромбина (IIa): дабигатран — непосредственно ингибирует тромбин',
                      'Преимущества перед варфарином: фиксированная доза, рутинный мониторинг не требуется, меньше взаимодействий, более быстрое начало/окончание действия, более низкая частота внутричерепных кровоизлияний',
                      'Мониторинг: рутинно не требуется; уровень анти-Xa (для ингибиторов Xa) или тромбиновое время/время свёртывания по экарину (для дабигатрана) — при экстренных ситуациях',
                      'Почечная экскреция: дабигатран 80% почечный — противопоказан при СКФ <30; ривароксабан/апиксабан менее зависимы от почечной функции',
                      'Антидоты: идаруцизумаб (Праксбайнд) — фрагмент моноклонального антитела; немедленно нейтрализует дабигатран; андексанет альфа — нейтрализует ингибиторы Xa (ривароксабан, апиксабан); КПК-4Ф: применяется вне инструкции для ингибиторов Xa при отсутствии андексанета'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Парентеральные прямые ингибиторы тромбина',
                    body: [
                      'Аргатробан: в/в прямой ингибитор тромбина; печёночный метаболизм (применять при почечной недостаточности); мониторинг по активированному частичному тромбопластиновому времени (АЧТВ); препарат выбора при гепарин-индуцированной тромбоцитопении (ГИТ)',
                      'Бивалирудин: в/в; применяется при чрескожном коронарном вмешательстве (ЧКВ) и кардиохирургии как альтернатива гепарину при ГИТ; короткий период полувыведения (~25 мин); мониторинг по активированному времени свёртывания (АВС)',
                      'Фондапаринукс: селективный ингибитор анти-Xa; п/к; не вызывает ГИТ (не связывается с тромбоцитарным фактором 4 — ТФ-4); применяется для профилактики/лечения венозной тромбоэмболии (ВТЭ) и как альтернатива при ГИТ'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Периоперационное ведение',
                    body: [
                      'Варфарин: отменить за 5 дней до плановой операции; проверить МНО накануне; целевой МНО <1,5 для большинства вмешательств',
                      'Прямые оральные антикоагулянты (ПОАК): отменить за 24–48 ч до процедур с низким риском кровотечения; за 48–72 ч до высокорискованных (в зависимости от почечной функции для дабигатрана)',
                      'Bridging с НМГ: последняя доза за 24 ч до операции; возобновить через 24–48 ч после операции при надёжном гемостазе',
                      'Экстренная нейтрализация: НФГ — протамин; варфарин — КПК-4Ф + витамин K; дабигатран — идаруцизумаб; ингибиторы Xa — андексанет альфа или КПК-4Ф',
                      'Возобновление антикоагуляции после операции: баланс риска кровотечения и тромбоза; большинство руководств рекомендуют 24–72 ч для профилактики ВТЭ, дольше — для терапевтических доз'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'anticoagulation-001',
                question_en: 'UFH mechanism of action?',
                question_ru: 'Механизм действия нефракционированного гепарина (НФГ)?',
                answer_en: 'Binds AT III → inhibits IIa + Xa',
                answer_ru: 'Связывает АТ III → ингибирует IIa + Xa'
              },
              {
                id: 'anticoagulation-002',
                question_en: 'UFH monitoring test?',
                question_ru: 'Тест мониторинга нефракционированного гепарина (НФГ)?',
                answer_en: 'APTT (target 1.5–2.5× control)',
                answer_ru: 'АЧТВ (целевое 1,5–2,5× контроль)'
              },
              {
                id: 'anticoagulation-003',
                question_en: 'UFH reversal agent?',
                question_ru: 'Антидот нефракционированного гепарина (НФГ)?',
                answer_en: 'Protamine sulphate',
                answer_ru: 'Протамина сульфат'
              },
              {
                id: 'anticoagulation-004',
                question_en: 'HIT diagnosis: score + confirmatory test?',
                question_ru: 'Диагностика гепарин-индуцированной тромбоцитопении (ГИТ): шкала + подтверждающий тест?',
                answer_en: '4T score + anti-PF4 ELISA',
                answer_ru: 'Шкала 4T + антитела к ТФ-4 (ИФА)'
              },
              {
                id: 'anticoagulation-005',
                question_en: 'HIT: platelet drop threshold and timing?',
                question_ru: 'Гепарин-индуцированная тромбоцитопения (ГИТ): порог снижения тромбоцитов и сроки?',
                answer_en: '>50% drop, days 5–10',
                answer_ru: 'Снижение >50%, дни 5–10'
              },
              {
                id: 'anticoagulation-006',
                question_en: 'HIT treatment: anticoagulant of choice?',
                question_ru: 'Лечение гепарин-индуцированной тромбоцитопении (ГИТ): антикоагулянт выбора?',
                answer_en: 'Argatroban or fondaparinux',
                answer_ru: 'Аргатробан или фондапаринукс'
              },
              {
                id: 'anticoagulation-007',
                question_en: 'LMWH: main factor inhibited?',
                question_ru: 'Низкомолекулярный гепарин (НМГ): основной ингибируемый фактор?',
                answer_en: 'Factor Xa',
                answer_ru: 'Фактор Xa'
              },
              {
                id: 'anticoagulation-008',
                question_en: 'LMWH: when to monitor anti-Xa?',
                question_ru: 'Низкомолекулярный гепарин (НМГ): когда мониторировать анти-Xa?',
                answer_en: 'Renal impairment / pregnancy',
                answer_ru: 'Почечная недостаточность / беременность'
              },
              {
                id: 'anticoagulation-009',
                question_en: 'Enoxaparin therapeutic dose (twice daily)?',
                question_ru: 'Терапевтическая доза эноксапарина (два раза в сутки)?',
                answer_en: '1 mg/kg SC BD',
                answer_ru: '1 мг/кг п/к дважды в сутки'
              },
              {
                id: 'anticoagulation-010',
                question_en: 'Warfarin mechanism?',
                question_ru: 'Механизм действия варфарина?',
                answer_en: 'Inhibits vitamin K epoxide reductase',
                answer_ru: 'Ингибирует эпоксид-редуктазу витамина K'
              },
              {
                id: 'anticoagulation-011',
                question_en: 'Warfarin target INR for most indications?',
                question_ru: 'Целевое МНО при большинстве показаний к варфарину?',
                answer_en: '2.0–3.0',
                answer_ru: '2,0–3,0'
              },
              {
                id: 'anticoagulation-012',
                question_en: 'Warfarin reversal for emergency surgery?',
                question_ru: 'Нейтрализация варфарина при экстренной операции?',
                answer_en: '4F-PCC + vitamin K IV',
                answer_ru: 'КПК-4Ф + витамин K в/в'
              },
              {
                id: 'anticoagulation-013',
                question_en: 'BRIDGE trial conclusion on warfarin bridging in AF?',
                question_ru: 'Вывод исследования BRIDGE о периоперационном переходе (bridging) при фибрилляции предсердий (ФП)?',
                answer_en: 'No benefit, more bleeding',
                answer_ru: 'Нет пользы, больше кровотечений'
              },
              {
                id: 'anticoagulation-014',
                question_en: 'Dabigatran reversal agent?',
                question_ru: 'Антидот дабигатрана?',
                answer_en: 'Idarucizumab',
                answer_ru: 'Идаруцизумаб'
              },
              {
                id: 'anticoagulation-015',
                question_en: 'Rivaroxaban / apixaban reversal agent?',
                question_ru: 'Антидот ривароксабана / апиксабана?',
                answer_en: 'Andexanet alfa',
                answer_ru: 'Андексанет альфа'
              },
              {
                id: 'anticoagulation-016',
                question_en: 'Dabigatran: contraindicated below which eGFR?',
                question_ru: 'Дабигатран: противопоказан при скорости клубочковой фильтрации (СКФ) ниже какого значения?',
                answer_en: 'eGFR <30 mL/min',
                answer_ru: 'СКФ <30 мл/мин'
              },
              {
                id: 'anticoagulation-017',
                question_en: 'Argatroban: clinical use?',
                question_ru: 'Аргатробан: клиническое применение?',
                answer_en: 'HIT anticoagulation',
                answer_ru: 'Антикоагуляция при гепарин-индуцированной тромбоцитопении (ГИТ)'
              },
              {
                id: 'anticoagulation-018',
                question_en: 'Fondaparinux: why no HIT risk?',
                question_ru: 'Фондапаринукс: почему нет риска гепарин-индуцированной тромбоцитопении (ГИТ)?',
                answer_en: 'Does not bind PF4',
                answer_ru: 'Не связывается с тромбоцитарным фактором 4 (ТФ-4)'
              },
              {
                id: 'anticoagulation-019',
                question_en: 'Warfarin: stop how many days before elective surgery?',
                question_ru: 'Варфарин: за сколько дней отменить до плановой операции?',
                answer_en: '5 days',
                answer_ru: '5 дней'
              },
              {
                id: 'anticoagulation-020',
                question_en: 'ACT target during cardiopulmonary bypass?',
                question_ru: 'Целевое активированное время свёртывания (АВС) при искусственном кровообращении (ИК)?',
                answer_en: '>300 seconds',
                answer_ru: '>300 секунд'
              }
            ]
          },

          // ── Topic: Antiplatelet & Thrombolytic Therapy ───────────────────────
          {
            slug: 'antiplatelet-thrombolytics',
            title_en: 'Antiplatelet & Thrombolytic Therapy',
            title_ru: 'Антиагрегантная и тромболитическая терапия',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Antiplatelet agents inhibit platelet activation and aggregation, reducing arterial thrombosis. They are cornerstone therapy in coronary artery disease (CAD), peripheral arterial disease (PAD), stroke prevention, and post-endovascular intervention. Thrombolytics (fibrinolytics) dissolve established thrombus by activating plasminogen to plasmin; they are used in acute limb ischaemia, stroke, pulmonary embolism (PE), and myocardial infarction (MI). Understanding mechanisms, indications, contraindications, and bleeding risk is essential in vascular and cardiac surgical practice.',
                    type: 'text'
                  },
                  {
                    title: 'Antiplatelet Agents — Mechanisms',
                    body: [
                      'Aspirin (acetylsalicylic acid): irreversibly inhibits cyclo-oxygenase-1 (COX-1) → blocks thromboxane A₂ (TXA₂) synthesis → reduces platelet aggregation; effect lasts platelet lifespan (~7–10 days)',
                      'Clopidogrel (P2Y₁₂ inhibitor): prodrug → hepatic conversion by CYP2C19 to active metabolite → irreversibly blocks ADP-mediated P2Y₁₂ receptor → inhibits ADP-induced platelet aggregation',
                      'Ticagrelor (P2Y₁₂ inhibitor): direct-acting (not prodrug); reversible P2Y₁₂ inhibition; faster onset and greater potency than clopidogrel; metabolised by CYP3A4',
                      'Prasugrel (P2Y₁₂ inhibitor): prodrug; irreversible; more potent than clopidogrel; higher bleeding risk; contraindicated in prior stroke/TIA and age >75 years',
                      'Dipyridamole: inhibits phosphodiesterase → increases cAMP → reduces platelet aggregation; also inhibits adenosine uptake; used in combination with aspirin (Aggrenox) for secondary stroke prevention',
                      'Cilostazol: phosphodiesterase-3 inhibitor; increases cAMP in platelets and vascular smooth muscle → antiplatelet + vasodilatory; used for intermittent claudication'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Clinical Use of Antiplatelet Agents',
                    body: [
                      'Single antiplatelet therapy (SAPT): aspirin 75 mg daily — lifelong after any arterial revascularisation (bypass, endovascular), MI, stroke/TIA, PAD',
                      'Dual antiplatelet therapy (DAPT): aspirin + P2Y₁₂ inhibitor; mandatory after coronary stenting (DES: 12 months; BMS: 1 month minimum); after peripheral stenting: 1–3 months; after ACS: ticagrelor preferred over clopidogrel (PLATO trial: lower MACE, higher bleeding)',
                      'Clopidogrel resistance: CYP2C19 poor metabolisers (~30% of population) → reduced active metabolite → higher risk of stent thrombosis; platelet function testing (VerifyNow) can guide therapy',
                      'Pre-operative management: aspirin — continue for most vascular procedures (reduces thrombotic events); DAPT — ideally continue, but surgeon-anaesthetist consensus needed; stop clopidogrel 5 days, ticagrelor 3–5 days, prasugrel 7 days before elective surgery if high bleeding risk',
                      'Carotid endarterectomy (CEA): aspirin 75–300 mg peri-operatively reduces stroke and MI risk; continue lifelong'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Thrombolytics — Mechanisms & Agents',
                    body: [
                      'Mechanism: all activate plasminogen → plasmin → fibrinolysis (clot dissolution); also degrade fibrinogen, factors V and VIII',
                      'Alteplase (tPA — tissue plasminogen activator): recombinant; fibrin-selective; short half-life (~5 min); most widely used; IV or intra-arterial',
                      'Tenecteplase (TNK-tPA): modified tPA; longer half-life; single IV bolus; fibrin-selective; used in STEMI',
                      'Urokinase: non-fibrin-selective; no antibody formation; preferred for catheter-directed thrombolysis (CDT) in peripheral arterial and venous disease',
                      'Streptokinase: derived from streptococci; antigenic (antibodies after 5 days); rarely used now',
                      'Reteplase: double-bolus IV; used in STEMI'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Catheter-Directed Thrombolysis (CDT)',
                    body: [
                      'Indication: acute limb ischaemia (ALI) Rutherford IIa (threatened but salvageable) — native vessel or graft occlusion; acute DVT (ilio-femoral, <14 days); SVC/subclavian vein thrombosis',
                      'Agent: urokinase or alteplase infused via multi-sidehole catheter positioned within thrombus under fluoroscopic guidance',
                      'Typical regimen: alteplase 0.5–1 mg/h for 12–24 h; check-angiogram at 12–24 h; concurrent UFH infusion to maintain catheter patency (not therapeutic anticoagulation)',
                      'Advantages over surgical embolectomy in ALI: traverses distal thrombus; unmasks underlying stenosis for treatment; avoids general anaesthesia',
                      'STILE trial / TOPAS trial: CDT vs surgery for ALI — CDT has lower amputation rate at 1 year for native vessel occlusion; surgery faster for severely threatened limb',
                      'Contraindications to thrombolysis: active internal bleeding, recent stroke <3 months, intracranial surgery/trauma <3 months, intracranial neoplasm, severe hypertension (>185/110 mmHg uncontrolled), recent major surgery <10 days'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Systemic Thrombolysis',
                    body: [
                      'Ischaemic stroke: IV alteplase 0.9 mg/kg (max 90 mg) within 4.5 hours of symptom onset; absolute contraindication: haemorrhagic stroke, anticoagulation, recent major surgery',
                      'STEMI (ST-elevation myocardial infarction): when primary PCI not available within 120 min; tenecteplase single weight-based IV bolus',
                      'Massive pulmonary embolism (PE): alteplase 100 mg IV over 2 hours; indicated for haemodynamically unstable PE (SBP <90 mmHg); catheter-directed thrombolysis (CDT) for submassive PE or when systemic lysis contraindicated',
                      'Bleeding risk: intracranial haemorrhage (ICH) ~0.5–1% with systemic lysis; higher in elderly, hypertensive, anticoagulated patients'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Reversal & Bleeding Management',
                    body: [
                      'No specific reversal agent for antiplatelet agents; transfuse platelets if major bleeding — 1–2 pools (or apheresis); desmopressin (DDAVP) may partially restore platelet function',
                      'Thrombolytic bleeding: stop infusion immediately; cryoprecipitate (fibrinogen source) 10 units — target fibrinogen >1.5 g/L; fresh frozen plasma (FFP); tranexamic acid (antifibrinolytic) 1 g IV',
                      'Aspirin-related GI bleeding: stop aspirin; PPI (proton pump inhibitor); restart aspirin once bleeding controlled if high cardiovascular risk',
                      'Platelet transfusion threshold: major surgery <50 × 10⁹/L; neurosurgery <100 × 10⁹/L'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Антиагрегантные препараты ингибируют активацию и агрегацию тромбоцитов, снижая риск артериального тромбоза. Они являются основой терапии при ишемической болезни сердца (ИБС), заболеваниях периферических артерий (ЗПА), профилактике инсульта и после эндоваскулярных вмешательств. Тромболитики (фибринолитики) растворяют уже сформировавшийся тромб, активируя плазминоген до плазмина; применяются при острой ишемии конечностей, инсульте, тромбоэмболии лёгочной артерии (ТЭЛА) и инфаркте миокарда (ИМ). Знание механизмов действия, показаний, противопоказаний и риска кровотечений принципиально важно в сосудистой и кардиохирургической практике.',
                    type: 'text'
                  },
                  {
                    title: 'Антиагрегантные препараты — механизмы действия',
                    body: [
                      'Аспирин (ацетилсалициловая кислота): необратимо ингибирует циклооксигеназу-1 (ЦОГ-1) → блокирует синтез тромбоксана A₂ (ТXA₂) → снижает агрегацию тромбоцитов; эффект сохраняется в течение жизни тромбоцита (~7–10 дней)',
                      'Клопидогрел (ингибитор P2Y₁₂): пролекарство → печёночное превращение ферментом CYP2C19 в активный метаболит → необратимо блокирует АДФ-опосредованный рецептор P2Y₁₂ → ингибирует АДФ-индуцированную агрегацию тромбоцитов',
                      'Тикагрелор (ингибитор P2Y₁₂): прямого действия (не пролекарство); обратимое ингибирование P2Y₁₂; более быстрое начало и большая эффективность по сравнению с клопидогрелем; метаболизируется CYP3A4',
                      'Прасугрел (ингибитор P2Y₁₂): пролекарство; необратимое ингибирование; более мощный, чем клопидогрел; выше риск кровотечений; противопоказан при инсульте/транзиторной ишемической атаке (ТИА) в анамнезе и возрасте >75 лет',
                      'Дипиридамол: ингибирует фосфодиэстеразу → повышает цАМФ → снижает агрегацию тромбоцитов; также ингибирует захват аденозина; применяется в комбинации с аспирином (Агренокс) для вторичной профилактики инсульта',
                      'Цилостазол: ингибитор фосфодиэстеразы-3; повышает цАМФ в тромбоцитах и гладкомышечных клетках сосудов → антиагрегантный + вазодилататорный эффект; применяется при перемежающейся хромоте'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Клиническое применение антиагрегантов',
                    body: [
                      'Монотерапия антиагрегантом (МАТ): аспирин 75 мг/сут — пожизненно после любой артериальной реваскуляризации (шунтирование, эндоваскулярное вмешательство), инфаркта миокарда (ИМ), инсульта/транзиторной ишемической атаки (ТИА), заболеваний периферических артерий (ЗПА)',
                      'Двойная антиагрегантная терапия (ДАТ): аспирин + ингибитор P2Y₁₂; обязательна после коронарного стентирования (стент с лекарственным покрытием — СЛП: 12 месяцев; непокрытый металлический стент — НМС: минимум 1 месяц); после периферического стентирования: 1–3 месяца; после острого коронарного синдрома (ОКС): тикагрелор предпочтительнее клопидогрела (исследование PLATO: меньше нежелательных сердечно-сосудистых событий, больше кровотечений)',
                      'Резистентность к клопидогрелу: слабые метаболизаторы CYP2C19 (~30% популяции) → снижение активного метаболита → выше риск тромбоза стента; тест функции тромбоцитов (VerifyNow) может определять тактику',
                      'Периоперационное ведение: аспирин — продолжать при большинстве сосудистых операций (снижает тромботические осложнения); двойная антиагрегантная терапия (ДАТ) — в идеале продолжать, но требуется консенсус хирурга и анестезиолога; отменить клопидогрел за 5 дней, тикагрелор за 3–5 дней, прасугрел за 7 дней до плановой операции при высоком риске кровотечения',
                      'Каротидная эндартерэктомия (КЭА): аспирин 75–300 мг периоперационно снижает риск инсульта и инфаркта миокарда (ИМ); продолжать пожизненно'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Тромболитики — механизмы и препараты',
                    body: [
                      'Механизм: все активируют плазминоген → плазмин → фибринолиз (лизис тромба); также разрушают фибриноген, факторы V и VIII',
                      'Алтеплаза (тканевой активатор плазминогена — тАП): рекомбинантный; фибрин-селективный; короткий период полувыведения (~5 мин); наиболее широко применяемый; в/в или внутриартериально',
                      'Тенектеплаза (ТНК-тАП): модифицированный тАП; более длительный период полувыведения; однократный в/в болюс с учётом массы тела; фибрин-селективный; применяется при инфаркте миокарда с подъёмом ST (ИМпST)',
                      'Урокиназа: нефибрин-селективная; не вызывает образования антител; предпочтительна для катетер-направленного тромболизиса (КНТ) при периферических артериальных и венозных окклюзиях',
                      'Стрептокиназа: получена из стрептококков; антигенная (антитела образуются через 5 дней); в настоящее время применяется редко',
                      'Ретеплаза: двойной в/в болюс; применяется при инфаркте миокарда с подъёмом ST (ИМпST)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Катетер-направленный тромболизис (КНТ)',
                    body: [
                      'Показание: острая ишемия конечности (ОИК) Rutherford IIa (под угрозой, но жизнеспособна) — окклюзия нативного сосуда или шунта; острый тромбоз глубоких вен (ТГВ) (подвздошно-бедренный, <14 дней); тромбоз верхней полой вены (ВПВ)/подключичной вены',
                      'Препарат: урокиназа или алтеплаза, вводимая через многоотверстный катетер, установленный в тромб под рентгеноскопическим контролем',
                      'Типичный режим: алтеплаза 0,5–1 мг/ч в течение 12–24 ч; контрольная ангиография через 12–24 ч; параллельная инфузия нефракционированного гепарина (НФГ) для поддержания проходимости катетера (не терапевтическая антикоагуляция)',
                      'Преимущества перед хирургической эмболэктомией при острой ишемии конечности (ОИК): лизирует дистальный тромб; выявляет лежащий в основе стеноз для последующего лечения; избегает общей анестезии',
                      'Исследования STILE / TOPAS: катетер-направленный тромболизис (КНТ) против операции при острой ишемии конечности (ОИК) — КНТ имеет меньшую частоту ампутаций через 1 год при окклюзии нативного сосуда; операция быстрее при тяжёлой угрозе конечности',
                      'Противопоказания к тромболизису: активное внутреннее кровотечение, инсульт <3 месяцев назад, нейрохирургическая операция/травма головы <3 месяцев, внутричерепная опухоль, тяжёлая гипертензия (>185/110 мм рт. ст. неконтролируемая), крупная операция <10 дней назад'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Системный тромболизис',
                    body: [
                      'Ишемический инсульт: в/в алтеплаза 0,9 мг/кг (максимум 90 мг) в течение 4,5 часов от начала симптомов; абсолютные противопоказания: геморрагический инсульт, антикоагуляция, крупная операция в недавнем анамнезе',
                      'Инфаркт миокарда с подъёмом ST (ИМпST): при невозможности первичного чрескожного коронарного вмешательства (ЧКВ) в течение 120 мин; тенектеплаза — однократный в/в болюс с учётом массы тела',
                      'Массивная тромбоэмболия лёгочной артерии (ТЭЛА): алтеплаза 100 мг в/в в течение 2 часов; показана при гемодинамически нестабильной ТЭЛА (систолическое артериальное давление — САД <90 мм рт. ст.); катетер-направленный тромболизис (КНТ) при субмассивной ТЭЛА или противопоказаниях к системному тромболизису',
                      'Риск кровотечения: внутричерепное кровоизлияние (ВЧК) ~0,5–1% при системном тромболизисе; выше у пожилых, гипертоников, пациентов на антикоагулянтах'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Нейтрализация и лечение кровотечений',
                    body: [
                      'Специфического антидота для антиагрегантов нет; при значительном кровотечении — переливание тромбоцитов (1–2 дозы или аферезный концентрат); десмопрессин (ДДАВП) может частично восстановить функцию тромбоцитов',
                      'Кровотечение при тромболизисе: немедленно прекратить инфузию; криопреципитат (источник фибриногена) 10 единиц — целевой фибриноген >1,5 г/л; свежезамороженная плазма (СЗП); транексамовая кислота (антифибринолитик) 1 г в/в',
                      'Желудочно-кишечное кровотечение на фоне аспирина: отменить аспирин; ингибитор протонной помпы (ИПП); возобновить аспирин после остановки кровотечения при высоком сердечно-сосудистом риске',
                      'Пороговый уровень тромбоцитов для переливания: большая операция <50 × 10⁹/л; нейрохирургия <100 × 10⁹/л'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'antiplatelet-thrombolytics-001',
                question_en: 'Aspirin mechanism of antiplatelet action?',
                question_ru: 'Механизм антиагрегантного действия аспирина?',
                answer_en: 'Irreversible COX-1 inhibition → ↓TXA₂',
                answer_ru: 'Необратимое ингибирование ЦОГ-1 → ↓ТXA₂'
              },
              {
                id: 'antiplatelet-thrombolytics-002',
                question_en: 'Aspirin effect duration?',
                question_ru: 'Длительность эффекта аспирина?',
                answer_en: 'Platelet lifespan (7–10 days)',
                answer_ru: 'Жизнь тромбоцита (7–10 дней)'
              },
              {
                id: 'antiplatelet-thrombolytics-003',
                question_en: 'Clopidogrel receptor target?',
                question_ru: 'Рецептор-мишень клопидогрела?',
                answer_en: 'P2Y₁₂ (ADP receptor)',
                answer_ru: 'P2Y₁₂ (рецептор АДФ)'
              },
              {
                id: 'antiplatelet-thrombolytics-004',
                question_en: 'Clopidogrel: enzyme required for activation?',
                question_ru: 'Клопидогрел: фермент, необходимый для активации?',
                answer_en: 'CYP2C19',
                answer_ru: 'CYP2C19'
              },
              {
                id: 'antiplatelet-thrombolytics-005',
                question_en: 'Ticagrelor vs clopidogrel: reversibility?',
                question_ru: 'Тикагрелор против клопидогрела: обратимость?',
                answer_en: 'Ticagrelor reversible',
                answer_ru: 'Тикагрелор — обратимый'
              },
              {
                id: 'antiplatelet-thrombolytics-006',
                question_en: 'PLATO trial: ticagrelor vs clopidogrel in ACS outcome?',
                question_ru: 'Исследование PLATO: тикагрелор против клопидогрела при остром коронарном синдроме (ОКС)?',
                answer_en: 'Lower MACE, higher bleeding',
                answer_ru: 'Меньше нежелательных сердечно-сосудистых событий, больше кровотечений'
              },
              {
                id: 'antiplatelet-thrombolytics-007',
                question_en: 'DAPT duration after DES coronary stent?',
                question_ru: 'Длительность двойной антиагрегантной терапии (ДАТ) после стента с лекарственным покрытием (СЛП)?',
                answer_en: '12 months',
                answer_ru: '12 месяцев'
              },
              {
                id: 'antiplatelet-thrombolytics-008',
                question_en: 'Stop clopidogrel how many days before elective surgery?',
                question_ru: 'За сколько дней отменить клопидогрел до плановой операции?',
                answer_en: '5 days',
                answer_ru: '5 дней'
              },
              {
                id: 'antiplatelet-thrombolytics-009',
                question_en: 'Cilostazol: indication in vascular disease?',
                question_ru: 'Цилостазол: показание в сосудистой патологии?',
                answer_en: 'Intermittent claudication',
                answer_ru: 'Перемежающаяся хромота'
              },
              {
                id: 'antiplatelet-thrombolytics-010',
                question_en: 'Thrombolytics mechanism?',
                question_ru: 'Механизм действия тромболитиков?',
                answer_en: 'Activate plasminogen → plasmin',
                answer_ru: 'Активируют плазминоген → плазмин'
              },
              {
                id: 'antiplatelet-thrombolytics-011',
                question_en: 'Preferred agent for catheter-directed thrombolysis (CDT)?',
                question_ru: 'Предпочтительный препарат для катетер-направленного тромболизиса (КНТ)?',
                answer_en: 'Urokinase or alteplase',
                answer_ru: 'Урокиназа или алтеплаза'
              },
              {
                id: 'antiplatelet-thrombolytics-012',
                question_en: 'CDT indication in acute limb ischaemia (ALI): Rutherford class?',
                question_ru: 'Показание катетер-направленного тромболизиса (КНТ) при острой ишемии конечности (ОИК): класс по Рутерфорду?',
                answer_en: 'Rutherford IIa',
                answer_ru: 'Рутерфорд IIa'
              },
              {
                id: 'antiplatelet-thrombolytics-013',
                question_en: 'IV alteplase dose for ischaemic stroke?',
                question_ru: 'Доза в/в алтеплазы при ишемическом инсульте?',
                answer_en: '0.9 mg/kg (max 90 mg)',
                answer_ru: '0,9 мг/кг (максимум 90 мг)'
              },
              {
                id: 'antiplatelet-thrombolytics-014',
                question_en: 'Time window for alteplase in ischaemic stroke?',
                question_ru: 'Временное окно для алтеплазы при ишемическом инсульте?',
                answer_en: '4.5 hours',
                answer_ru: '4,5 часа'
              },
              {
                id: 'antiplatelet-thrombolytics-015',
                question_en: 'Systemic thrombolysis for massive PE: alteplase dose?',
                question_ru: 'Системный тромболизис при массивной тромбоэмболии лёгочной артерии (ТЭЛА): доза алтеплазы?',
                answer_en: '100 mg IV over 2 hours',
                answer_ru: '100 мг в/в за 2 часа'
              },
              {
                id: 'antiplatelet-thrombolytics-016',
                question_en: 'Thrombolysis absolute contraindication: recent stroke?',
                question_ru: 'Абсолютное противопоказание к тромболизису: недавний инсульт?',
                answer_en: '<3 months',
                answer_ru: '<3 месяцев'
              },
              {
                id: 'antiplatelet-thrombolytics-017',
                question_en: 'Thrombolytic bleeding: fibrinogen replacement?',
                question_ru: 'Кровотечение при тромболизисе: восполнение фибриногена?',
                answer_en: 'Cryoprecipitate',
                answer_ru: 'Криопреципитат'
              },
              {
                id: 'antiplatelet-thrombolytics-018',
                question_en: 'Antifibrinolytic to reverse thrombolytic bleeding?',
                question_ru: 'Антифибринолитик при кровотечении на фоне тромболизиса?',
                answer_en: 'Tranexamic acid',
                answer_ru: 'Транексамовая кислота'
              },
              {
                id: 'antiplatelet-thrombolytics-019',
                question_en: 'Platelet transfusion threshold for major surgery?',
                question_ru: 'Пороговый уровень тромбоцитов для переливания при большой операции?',
                answer_en: '<50 × 10⁹/L',
                answer_ru: '<50 × 10⁹/л'
              },
              {
                id: 'antiplatelet-thrombolytics-020',
                question_en: 'Prasugrel: two contraindications?',
                question_ru: 'Прасугрел: два противопоказания?',
                answer_en: 'Prior stroke/TIA; age >75',
                answer_ru: 'Инсульт/транзиторная ишемическая атака (ТИА) в анамнезе; возраст >75 лет'
              }
            ]
          },

          // ── Topic: Perioperative Antibiotics ─────────────────────────────────
          {
            slug: 'perioperative-antibiotics',
            title_en: 'Perioperative Antibiotics in Cardiovascular Surgery',
            title_ru: 'Периоперационная антибиотикотерапия в сердечно-сосудистой хирургии',
            note: {
              en: {
                sections: [
                  {
                    title: 'Overview',
                    body: 'Surgical site infection (SSI) is a major source of morbidity in cardiovascular surgery. Sternal wound infection (including mediastinitis) carries 10–47% mortality. Prosthetic vascular graft infection is limb- and life-threatening. Antibiotic prophylaxis — correctly timed, dosed, and chosen — is the primary preventive strategy. UK practice follows NICE guideline NG125 (2019) and individual institutional protocols aligned with local microbiology.',
                    type: 'text'
                  },
                  {
                    title: 'Principles of Surgical Antibiotic Prophylaxis',
                    body: [
                      'Timing: administer within 60 minutes before skin incision (within 30 minutes for glycopeptides — vancomycin / teicoplanin — due to slower infusion); intraoperative re-dosing if procedure >4 hours or blood loss >1.5 L',
                      'Route: intravenous (IV) only for prophylaxis — oral absorption unreliable in the perioperative setting',
                      'Duration: single dose at induction is sufficient for most clean cardiovascular procedures (NICE NG125); additional doses within 24 hours acceptable for high-risk cases; prophylaxis beyond 24 hours is NOT recommended and drives resistance',
                      'Spectrum: cover skin flora (Staphylococcus aureus, Staphylococcus epidermidis) plus bowel flora for abdominal vascular cases (Gram-negative enteric organisms)',
                      'MRSA (methicillin-resistant Staphylococcus aureus) risk: screen elective patients preoperatively; if MRSA-positive → decolonise (chlorhexidine wash, mupirocin nasal ointment × 5 days) and use glycopeptide prophylaxis'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'First-Line Prophylactic Agents',
                    body: [
                      'Co-amoxiclav (amoxicillin + clavulanate) 1.2 g IV at induction: first-line in most UK cardiac and vascular centres; broad spectrum covering staphylococci, streptococci, and Gram-negative organisms; contraindicated in penicillin allergy',
                      'Cefuroxime 1.5 g IV at induction: second-generation cephalosporin; alternative to co-amoxiclav; also covers most staphylococci and Gram-negatives; avoid in severe penicillin allergy (cross-reactivity ~1–2%)',
                      'Flucloxacillin 1 g IV + gentamicin 1.5 mg/kg IV: used in some centres for cardiac surgery; excellent anti-staphylococcal cover; gentamicin adds Gram-negative cover',
                      'Teicoplanin 400–800 mg IV (slow infusion ≥30 min before incision): for MRSA-positive patients or penicillin/cephalosporin allergy; glycopeptide — covers MRSA but NOT Gram-negatives; add gentamicin 1.5 mg/kg for Gram-negative cover',
                      'Vancomycin 15–20 mg/kg IV (infuse over ≥60 min, start 90–120 min before incision): alternative glycopeptide; red man syndrome if infused too fast; monitor levels if renal impairment',
                      'Metronidazole 500 mg IV: added for abdominal aortic surgery (bowel flora coverage — Bacteroides spp.); combined with cefuroxime or co-amoxiclav'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Procedure-Specific Regimens',
                    body: [
                      'Cardiac surgery (coronary artery bypass grafting / CABG, valve surgery): co-amoxiclav 1.2 g IV at induction ± repeat at 4 h; MRSA-positive → teicoplanin 800 mg IV + gentamicin 1.5 mg/kg; wound irrigation with dilute povidone-iodine before sternal closure reduces mediastinitis rate',
                      'Open abdominal aortic aneurysm (AAA) repair / aorto-iliac surgery: co-amoxiclav 1.2 g IV at induction; if penicillin-allergic → cefuroxime 1.5 g + metronidazole 500 mg IV; graft soaking in rifampicin 60 mg/60 mL saline NOT recommended routinely (reserved for graft infection treatment)',
                      'Carotid endarterectomy (CEA): co-amoxiclav 1.2 g IV at induction; single dose sufficient; low SSI risk but patch infection is catastrophic',
                      'Lower limb bypass / peripheral vascular surgery: co-amoxiclav 1.2 g IV; groin incisions have higher SSI risk (skin flora + proximity to bowel); continue prophylaxis for 24 h in some protocols',
                      'Endovascular aortic repair (EVAR) / TEVAR: single dose co-amoxiclav at induction; evidence for prolonged prophylaxis after stent-graft implantation is lacking'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Sternal Wound Infection & Mediastinitis',
                    body: [
                      'Incidence: superficial SSI ~5%; deep sternal wound infection (DSWI) / mediastinitis ~1–3% after cardiac surgery',
                      'Causative organisms: Staphylococcus aureus and Staphylococcus epidermidis (~60–70%); Gram-negative organisms (Pseudomonas, Klebsiella) in immunocompromised; polymicrobial in diabetics',
                      'Risk factors: diabetes mellitus, obesity (body mass index / BMI >30), bilateral internal mammary artery (BIMA) harvest (impairs sternal blood supply), reoperation, prolonged cardiopulmonary bypass (CPB) time, postoperative low cardiac output',
                      'Diagnosis: fever, sternal instability ("clicking"), wound erythema/discharge, elevated C-reactive protein (CRP) / white cell count (WCC); CT chest confirms mediastinal gas/fluid',
                      'Treatment: urgent surgical debridement + vacuum-assisted closure (VAC) dressing (negative pressure wound therapy / NPWT) → delayed primary closure or omental/pectoralis muscle flap; prolonged IV antibiotics guided by cultures (typically 6 weeks)',
                      'Mortality: 10–47% (mediastinitis); prevention is paramount'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Vascular Graft Infection',
                    body: [
                      'Incidence: aortic graft 0.5–2%; peripheral bypass graft up to 5% (groin anastomosis highest risk)',
                      'Causative organisms: Staphylococcus epidermidis (late, indolent — forms biofilm on graft); Staphylococcus aureus (early, aggressive); Gram-negatives (early aortic); Candida (immunocompromised)',
                      'Presentation: early (<4 months) — fever, wound breakdown, perigraft abscess; late — false aneurysm at anastomosis, aorto-enteric fistula (AEF — herald bleed)',
                      'Diagnosis: CT (perigraft gas/fluid, false aneurysm); FDG-PET-CT (metabolic activity); labelled white cell scan; blood cultures',
                      'Treatment: graft excision + extra-anatomic bypass (axillo-bifemoral / obturator bypass) — gold standard for aortic graft infection; OR in-situ reconstruction with rifampicin-soaked Dacron, cryopreserved allograft, or silver-impregnated graft; prolonged IV antibiotics (≥6 weeks) then oral suppression'
                    ],
                    type: 'list'
                  }
                ]
              },
              ru: {
                sections: [
                  {
                    title: 'Обзор',
                    body: 'Инфекция в области хирургического вмешательства (ИОХВ) — одна из ведущих причин осложнений в сердечно-сосудистой хирургии. Инфекция грудинной раны (включая медиастинит) сопровождается летальностью 10–47%. Инфекция синтетического сосудистого протеза угрожает как конечности, так и жизни пациента. Антибиотикопрофилактика — правильно выбранная, своевременно введённая и правильно дозированная — является основной стратегией профилактики.',
                    type: 'text'
                  },
                  {
                    title: 'Принципы хирургической антибиотикопрофилактики',
                    body: [
                      'Сроки: ввести внутривенно в течение 60 минут до разреза кожи (в течение 30 минут для гликопептидов — ванкомицин / тейкопланин — в связи с медленным введением); повторное интраоперационное введение при операции >4 ч или кровопотере >1,5 л',
                      'Путь введения: только внутривенный (в/в) — всасывание при пероральном приёме ненадёжно в периоперационном периоде',
                      'Продолжительность: однократная доза на вводном наркозе достаточна для большинства чистых сердечно-сосудистых операций (NICE NG125); дополнительные дозы в течение 24 ч допустимы при высоком риске; профилактика свыше 24 ч НЕ рекомендована и способствует резистентности',
                      'Спектр: перекрывает флору кожи (Staphylococcus aureus, Staphylococcus epidermidis); при абдоминальной сосудистой хирургии — также кишечная флора (грамотрицательные)',
                      'Метициллинрезистентный золотистый стафилококк (MRSA): скрининг плановых пациентов до операции; при MRSA-положительном статусе → деколонизация (хлоргексидин, мупироцин назальная мазь × 5 дней) + гликопептид для профилактики'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Препараты первой линии для профилактики',
                    body: [
                      'Ко-амоксиклав (амоксициллин + клавуланат) 1,2 г в/в на вводном наркозе: препарат первой линии в большинстве кардиохирургических и сосудистых центров Великобритании; противопоказан при аллергии на пенициллин',
                      'Цефуроксим 1,5 г в/в на вводном наркозе: цефалоспорин второго поколения; альтернатива ко-амоксиклаву; избегать при тяжёлой аллергии на пенициллин (перекрёстная реактивность ~1–2%)',
                      'Тейкопланин 400–800 мг в/в (медленная инфузия ≥30 мин до разреза): для MRSA-положительных пациентов или при аллергии на пенициллин/цефалоспорины; гликопептид — перекрывает MRSA, НЕ перекрывает грамотрицательные; добавить гентамицин 1,5 мг/кг',
                      'Ванкомицин 15–20 мг/кг в/в (инфузия ≥60 мин, начать за 90–120 мин до разреза): альтернативный гликопептид; синдром «красного человека» при быстром введении; контролировать уровень при почечной недостаточности',
                      'Метронидазол 500 мг в/в: добавляется при абдоминальной аортальной хирургии (покрытие кишечной флоры — Bacteroides spp.)'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Режимы по видам операций',
                    body: [
                      'Кардиохирургия (коронарное шунтирование / КШ, операции на клапанах): ко-амоксиклав 1,2 г в/в на вводном наркозе ± повтор через 4 ч; при MRSA → тейкопланин 800 мг в/в + гентамицин 1,5 мг/кг',
                      'Открытое лечение аневризмы брюшной аорты (АБА) / аорто-подвздошная хирургия: ко-амоксиклав 1,2 г в/в; при аллергии на пенициллин → цефуроксим 1,5 г + метронидазол 500 мг в/в',
                      'Каротидная эндартерэктомия (КЭА): ко-амоксиклав 1,2 г в/в, однократно; низкий риск ИОХВ, но инфекция заплаты — катастрофическое осложнение',
                      'Шунтирование нижних конечностей: ко-амоксиклав 1,2 г в/в; паховые разрезы имеют повышенный риск ИОХВ',
                      'Эндоваскулярное протезирование аорты (ЭВПА): однократная доза ко-амоксиклава на вводном наркозе'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Инфекция грудинной раны и медиастинит',
                    body: [
                      'Частота: поверхностная ИОХВ ~5%; глубокая инфекция грудинной раны (ГИГР) / медиастинит ~1–3% после кардиохирургических операций',
                      'Возбудители: Staphylococcus aureus и Staphylococcus epidermidis (~60–70%); грамотрицательные у иммунокомпрометированных; полимикробная флора у диабетиков',
                      'Факторы риска: сахарный диабет (СД), ожирение (индекс массы тела / ИМТ >30), забор обеих внутренних грудных артерий (ОВГА), повторная операция, длительное искусственное кровообращение (ИК)',
                      'Диагностика: лихорадка, нестабильность грудины, эритема/отделяемое раны, повышение С-реактивного белка (СРБ) / лейкоцитоз; компьютерная томография (КТ) грудной клетки подтверждает медиастинальный газ/жидкость',
                      'Лечение: срочная хирургическая обработка + вакуум-ассистированное закрытие (ВАЗ / VAC) → отсроченное первичное закрытие или лоскутная пластика; длительная в/в антибиотикотерапия под контролем посевов (~6 нед)',
                      'Летальность: 10–47% при медиастините'
                    ],
                    type: 'list'
                  },
                  {
                    title: 'Инфекция сосудистого протеза',
                    body: [
                      'Частота: аортальный протез 0,5–2%; периферическое шунтирование до 5% (наибольший риск — паховый анастомоз)',
                      'Возбудители: Staphylococcus epidermidis (поздняя, вялая — биоплёнка); Staphylococcus aureus (ранняя, агрессивная); грамотрицательные (ранняя аортальная); Candida у иммунокомпрометированных',
                      'Проявления: ранняя (<4 мес) — лихорадка, расхождение раны, перипротезный абсцесс; поздняя — ложная аневризма анастомоза, аорто-кишечный свищ (АКС)',
                      'Диагностика: КТ (газ/жидкость вокруг протеза); ПЭТ-КТ с ФДГ; сцинтиграфия с мечеными лейкоцитами; гемокультура',
                      'Лечение: удаление протеза + экстраанатомическое шунтирование (подмышечно-бедренное / запирательное) — золотой стандарт при аортальной инфекции; или реконструкция in situ протезом, пропитанным рифампицином, криосохранённым аллографтом или серебросодержащим протезом; в/в антибиотики ≥6 нед с последующей пероральной супрессивной терапией'
                    ],
                    type: 'list'
                  }
                ]
              }
            },
            cards: [
              {
                id: 'perioperative-antibiotics-001',
                question_en: 'First-line antibiotic prophylaxis for cardiac surgery in the UK?',
                question_ru: 'Антибиотик первой линии для профилактики в кардиохирургии в Великобритании?',
                answer_en: 'Co-amoxiclav 1.2 g IV',
                answer_ru: 'Ко-амоксиклав 1,2 г в/в'
              },
              {
                id: 'perioperative-antibiotics-002',
                question_en: 'Timing of antibiotic prophylaxis before skin incision?',
                question_ru: 'Сроки введения антибиотикопрофилактики до разреза кожи?',
                answer_en: 'Within 60 minutes',
                answer_ru: 'В течение 60 минут'
              },
              {
                id: 'perioperative-antibiotics-003',
                question_en: 'Glycopeptide infusion timing before skin incision (cardiovascular surgery prophylaxis)?',
                question_ru: 'Сроки инфузии гликопептида до разреза кожи (профилактика в сердечно-сосудистой хирургии)?',
                answer_en: 'Within 30 minutes',
                answer_ru: 'В течение 30 минут'
              },
              {
                id: 'perioperative-antibiotics-004',
                question_en: 'Maximum recommended duration of prophylactic antibiotics after cardiovascular surgery (NICE NG125)?',
                question_ru: 'Максимальная рекомендованная продолжительность антибиотикопрофилактики после сердечно-сосудистых операций (NICE NG125)?',
                answer_en: '24 hours',
                answer_ru: '24 часа'
              },
              {
                id: 'perioperative-antibiotics-005',
                question_en: 'When should intraoperative re-dosing of prophylactic antibiotics occur during cardiovascular surgery?',
                question_ru: 'Когда выполняется повторное интраоперационное введение антибиотиков при сердечно-сосудистых операциях?',
                answer_en: '>4 h or >1.5 L blood loss',
                answer_ru: '>4 ч или кровопотеря >1,5 л'
              },
              {
                id: 'perioperative-antibiotics-006',
                question_en: 'Antibiotic prophylaxis for MRSA-positive patients undergoing cardiovascular surgery?',
                question_ru: 'Антибиотикопрофилактика у MRSA-положительных пациентов при сердечно-сосудистых операциях?',
                answer_en: 'Teicoplanin + gentamicin',
                answer_ru: 'Тейкопланин + гентамицин'
              },
              {
                id: 'perioperative-antibiotics-007',
                question_en: 'MRSA decolonisation regimen before elective cardiovascular surgery?',
                question_ru: 'Схема деколонизации MRSA перед плановой сердечно-сосудистой операцией?',
                answer_en: 'Chlorhexidine wash + mupirocin',
                answer_ru: 'Хлоргексидин + мупироцин назально'
              },
              {
                id: 'perioperative-antibiotics-008',
                question_en: 'Additional antibiotic added for open abdominal aortic surgery to cover bowel flora?',
                question_ru: 'Дополнительный антибиотик при открытой операции на брюшной аорте для перекрытия кишечной флоры?',
                answer_en: 'Metronidazole 500 mg IV',
                answer_ru: 'Метронидазол 500 мг в/в'
              },
              {
                id: 'perioperative-antibiotics-009',
                question_en: 'Vancomycin: main adverse effect of rapid infusion during cardiovascular surgery prophylaxis?',
                question_ru: 'Ванкомицин: основной побочный эффект быстрой инфузии при профилактике в сердечно-сосудистой хирургии?',
                answer_en: 'Red man syndrome',
                answer_ru: 'Синдром «красного человека»'
              },
              {
                id: 'perioperative-antibiotics-010',
                question_en: 'Deep sternal wound infection (mediastinitis) incidence after cardiac surgery?',
                question_ru: 'Частота глубокой инфекции грудинной раны (медиастинита) после кардиохирургических операций?',
                answer_en: '1–3%',
                answer_ru: '1–3%'
              },
              {
                id: 'perioperative-antibiotics-011',
                question_en: 'Mortality of mediastinitis after cardiac surgery?',
                question_ru: 'Летальность медиастинита после кардиохирургических операций?',
                answer_en: '10–47%',
                answer_ru: '10–47%'
              },
              {
                id: 'perioperative-antibiotics-012',
                question_en: 'Most common organism causing deep sternal wound infection after cardiac surgery?',
                question_ru: 'Наиболее частый возбудитель глубокой инфекции грудинной раны после кардиохирургических операций?',
                answer_en: 'Staphylococcus aureus',
                answer_ru: 'Staphylococcus aureus'
              },
              {
                id: 'perioperative-antibiotics-013',
                question_en: 'Surgical treatment of deep sternal wound infection after cardiac surgery?',
                question_ru: 'Хирургическое лечение глубокой инфекции грудинной раны после кардиохирургических операций?',
                answer_en: 'Debridement + VAC dressing',
                answer_ru: 'Хирургическая обработка + вакуум-ассистированное закрытие (ВАЗ)'
              },
              {
                id: 'perioperative-antibiotics-014',
                question_en: 'Risk factor for deep sternal wound infection: bilateral internal mammary artery (BIMA) harvest — why?',
                question_ru: 'Фактор риска глубокой инфекции грудинной раны: забор обеих внутренних грудных артерий (ОВГА) — почему?',
                answer_en: 'Impairs sternal blood supply',
                answer_ru: 'Нарушает кровоснабжение грудины'
              },
              {
                id: 'perioperative-antibiotics-015',
                question_en: 'Incidence of vascular graft infection after aortic surgery?',
                question_ru: 'Частота инфекции сосудистого протеза после аортальной хирургии?',
                answer_en: '0.5–2%',
                answer_ru: '0,5–2%'
              },
              {
                id: 'perioperative-antibiotics-016',
                question_en: 'Most common organism in late vascular graft infection (biofilm-forming)?',
                question_ru: 'Наиболее частый возбудитель поздней инфекции сосудистого протеза (образующий биоплёнку)?',
                answer_en: 'Staphylococcus epidermidis',
                answer_ru: 'Staphylococcus epidermidis'
              },
              {
                id: 'perioperative-antibiotics-017',
                question_en: 'Gold standard treatment for infected aortic graft?',
                question_ru: 'Золотой стандарт лечения инфицированного аортального протеза?',
                answer_en: 'Excision + extra-anatomic bypass',
                answer_ru: 'Удаление + экстраанатомическое шунтирование'
              },
              {
                id: 'perioperative-antibiotics-018',
                question_en: 'Duration of intravenous antibiotics for vascular graft infection?',
                question_ru: 'Продолжительность в/в антибиотикотерапии при инфекции сосудистого протеза?',
                answer_en: '≥6 weeks',
                answer_ru: '≥6 недель'
              },
              {
                id: 'perioperative-antibiotics-019',
                question_en: 'Highest-risk peripheral bypass site for surgical site infection (SSI)?',
                question_ru: 'Наиболее частое место для инфекции в области хирургического вмешательства (ИОХВ) при периферическом шунтировании?',
                answer_en: 'Groin anastomosis',
                answer_ru: 'Паховый анастомоз'
              },
              {
                id: 'perioperative-antibiotics-020',
                question_en: 'In-situ aortic reconstruction options for infected aortic graft?',
                question_ru: 'Варианты реконструкции in situ аорты при инфекции аортального протеза?',
                answer_en: 'Rifampicin Dacron; allograft; silver graft',
                answer_ru: 'Дакрон с рифампицином; аллографт; серебросодержащий протез'
              }
            ]
          }

        ]
      }
    ]
  }
]
