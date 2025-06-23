export const VPU_29_LVIV = {
  // Базова інформація про заклад
  basic_info: {
    full_name: 'ВИЩЕ ПРОФЕСІЙНЕ УЧИЛИЩЕ №29 М.ЛЬВОВА',
    short_name: 'ВПУ №29 м. Львова',
    english_name: 'Lviv Higher Vocational School №29',
    edrpou_code: '02545608',
    edebo_code: '2178',
    founded: 1944,
    years_of_operation: 80,
    graduates_total: 14000,
    current_students: 801,
    teaching_staff: 73,
    total_professions: 17
  },

  // Контактна інформація
  contact_info: {
    legal_address: {
      country: 'Україна',
      postal_code: '79042',
      region: 'Львівська обл.',
      city: 'місто Львів',
      street: 'вулиця Шевченка Т.',
      building: '116'
    },
    phones: {
      main_mobile: '+38 (093) 104-12-46',
      additional: ['+38 (032) 233-25-02', '+38 (032) 233-25-07']
    },
    email: 'lviv_vpu29@ukr.net',
    website: 'https://vpu29.lviv.ua/'
  },

  // Адміністрація
  administration: {
    director: {
      name: 'Стецький Роман Васильович',
      position: 'В.о. директора'
    },
    governing_body: 'Департамент освіти і науки Львівської обласної державної адміністрації',
    founder: 'Львівська обласна рада'
  },

  // Правовий статус - ВАЖЛИВА ІНФОРМАЦІЯ
  legal_status: {
    current_status: 'стан припинення',
    status_date: '2024-11-21',
    founder_change_date: '2024-10-14',
    previous_founder: 'Міністерство освіти і науки України',
    current_founder: 'Львівська обласна рада',
    registration_date: '1999-12-15',
    note: 'Статус "припинення" пов\'язаний з процесом децентралізації - передачею з національного на регіональний рівень управління'
  },

  // Історія розвитку
  historical_timeline: [
    {
      year: 1944,
      event: 'Заснування Ремісничого училища № 3',
      context: 'Відновлення промислового потенціалу після Другої світової війни'
    },
    {
      year: 1955,
      date: '1955-09-01',
      event: 'Реорганізація в Училище № 8',
      context: 'Стандартизація системи професійної освіти'
    },
    {
      year: 1963,
      date: '1963-08-19',
      event: 'Перетворення на Міське професійно-технічне училище № 29',
      context: 'Отримання незмінного номера "29", поглиблення спеціалізації'
    },
    {
      year: 1990,
      date: '1990-03-20',
      event: 'Реорганізація у Вище професійне училище № 29 м. Львова',
      context: 'Підвищення статусу, право на складніші освітні програми'
    },
    {
      year: 1999,
      date: '1999-12-15',
      event: 'Офіційна реєстрація юридичної особи в незалежній Україні'
    }
  ],

  // Сучасні навчально-практичні центри
  training_centers: [
    {
      name: 'НПЦ "Автомобільний транспорт"',
      established: 2020,
      focus: 'Поглиблення підготовки слюсарів з ремонту колісних транспортних засобів та майстрів з діагностики електронного устаткування'
    },
    {
      name: 'НПЦ "Перукарське мистецтво"',
      established: 2021,
      focus: 'Розвиток професій у сфері послуг, інтегровані програми перукарів та візажистів'
    },
    {
      name: 'НПЦ "Інформаційні та цифрові технології"',
      established: 2022,
      focus: 'Відповідь на розвиток ІТ-галузі, підготовка операторів з обробки інформації'
    }
  ],

  // Освітні програми на базі 9-ти класів
  programs_grade_9: [
    {
      professions: ['Слюсар з ремонту колісних транспортних засобів', 'Електрозварник ручного зварювання', 'Водій автотранспортних засобів (категорії "В", "С")'],
      duration: '2 роки 10 місяців',
      includes_secondary_education: true
    },
    {
      professions: ['Слюсар з ремонту колісних транспортних засобів', 'Майстер з діагностики та налагодження електронного устаткування автомобільних засобів'],
      duration: '2 роки 10 місяців',
      includes_secondary_education: true
    },
    {
      professions: ['Оператор з обробки інформації та програмного забезпечення'],
      duration: '2 роки 10 місяців',
      includes_secondary_education: true
    },
    {
      professions: ['Кухар', 'Офіціант'],
      duration: '2 роки 10 місяців',
      includes_secondary_education: true
    },
    {
      professions: ['Кухар', 'Кондитер'],
      duration: '2 роки 10 місяців',
      includes_secondary_education: true
    },
    {
      professions: ['Перукар (перукар-модельєр)', 'Манікюрник'],
      duration: '2 роки 10 місяців',
      includes_secondary_education: true
    },
    {
      professions: ['Перукар (перукар-модельєр)', 'Візажист'],
      duration: '2 роки 10 місяців',
      includes_secondary_education: true
    }
  ],

  // Освітні програми на базі 11-ти класів
  programs_grade_11: [
    {
      professions: ['Кухар', 'Бармен'],
      duration: '1 рік 10 місяців'
    },
    {
      professions: ['Слюсар з ремонту колісних транспортних засобів'],
      duration: '10 місяців'
    },
    {
      professions: ['Перукар (перукар-модельєр)'],
      duration: '10 місяців'
    },
    {
      professions: ['Кондитер'],
      duration: '10 місяців'
    },
    {
      professions: ['Майстер з діагностики та налагодження електронного устаткування автомобільних засобів'],
      duration: '10 місяців'
    }
  ],

  // Програми фахового молодшого бакалавра
  junior_bachelor_programs: [
    {
      field: 'Автомобільний транспорт',
      degree: 'фаховий молодший бакалавр',
      duration: '1 рік 6 місяців',
      admission_basis: 'Диплом кваліфікованого робітника'
    },
    {
      field: 'Харчові технології',
      degree: 'фаховий молодший бакалавр',
      duration: '1 рік 6 місяців',
      admission_basis: 'Диплом кваліфікованого робітника'
    }
  ],

  // Документи для вступу
  admission_documents: [
    'Заява на ім\'я директора (заповнюється в училищі)',
    'Документ про освіту (оригінал) - свідоцтво про закінчення 9-го або 11-го класу',
    'Паспорт громадянина України (ID-картка) - 2 копії',
    'Довідка з місця проживання та про склад сім\'ї',
    'Медичні довідки: форма 086/у, форма 063/о (про щеплення), форма 025-Ю (для юнаків після 9 кл.)',
    'Приписне посвідчення військкомату - копія (для юнаків після 11 кл.)',
    'Фотокартки - 7 штук, розміром 3×4 см',
    'Автобіографія',
    'Характеристика',
    'Ідентифікаційний номер - 3 копії',
    'Конверти з марками - 5 штук',
    'Документи, що підтверджують право на пільги (за наявності)'
  ],

  // Фінансові аспекти
  financial_info: {
    tuition_options: ['Безоплатне (державне/регіональне замовлення)', 'Платне (контрактна основа)'],
    academic_scholarship: {
      amount: 1250,
      currency: 'грн',
      year: 2022
    },
    social_scholarship: 'Доступна для певних категорій учнів',
    paid_internship: true
  },

  // Матеріально-технічна база
  infrastructure: {
    campus_location: 'м. Львів, вул. Шевченка, 116',
    buildings: {
      main_building: 'чотириповерховий головний навчальний корпус',
      additional_buildings: ['два двоповерхові навчальні корпуси', 'соціально-побутовий корпус'],
      capacity: 850
    },
    workshops: [
      'Кузня',
      'Слюсарна майстерня',
      'Майстерня ручного електродугового зварювання',
      'Навчальна майстерня технічного обслуговування автомобілів'
    ],
    computer_labs: {
      count: 2,
      internet_access: true
    },
    additional_facilities: [
      'Навчальний бар "Смак" (вул. Єрошенка, 20)',
      'Гаражі (вул. Кортумівка, 10)'
    ],
    dormitory: {
      capacity: 250,
      type: 'для іногородніх учнів'
    },
    social_facilities: [
      'Їдальня на 120 посадкових місць',
      'Актова зала',
      'Спортивна зала',
      'Тренажерна зала',
      'Бібліотека з читальною залою'
    ]
  },

  // Педагогічний колектив
  teaching_staff: {
    total_staff: 73,
    structure: [
      'Викладачі загальноосвітніх дисциплін',
      'Викладачі професійних дисциплін',
      'Майстри виробничого навчання'
    ],
    department_heads: [
      {
        department: 'Автомобільний транспорт',
        head: 'Шевчук Людмила Іванівна'
      },
      {
        department: 'Харчові технології',
        head: 'Павлишин Оксана Ярославівна'
      },
      {
        department: 'ІТ технології',
        head: 'Чоповський Сергій Сергійович'
      },
      {
        department: 'Сфера обслуговування',
        head: 'Гладиш Ірина Ярославівна'
      }
    ]
  },

  // Партнерські зв'язки
  partnerships: {
    higher_education: [
      'Національний університет "Львівська політехніка"',
      'Львівський національний університет імені Івана Франка'
    ],
    employment_centers: [
      'Львівський обласний центр зайнятості',
      'Львівський міський центр зайнятості'
    ],
    international_programs: [
      'EU4Skills: Кращі навички для сучасної України (фінансується Європейським Союзом)'
    ]
  },

  // Особливості навчання
  educational_features: {
    admission_process: 'Без ЗНО, на основі конкурсу середніх балів',
    additional_tests: 'Для популярних професій можуть проводитися співбесіди або тестування',
    dual_education: true,
    practical_training: 'Оплачувана виробнича практика на підприємствах'
  },

  // Досягнення та активність
  achievements: [
    'Гран-прі на XI Фестивалі технічної творчості за проєкт "Електромобіль ЗАЗ 968 М на електротязі"',
    'Участь у конкурсах "Автентичні страви України"',
    'Участь у телевізійних програмах',
    'Профорієнтаційна робота з початковими школами Львова'
  ],

  // Особливості публічного профілю
  public_profile: {
    review_policy: 'Керівництво не дозволяє публічні оцінки та коментарі на Education.ua',
    transparency_level: 'Обмежена через відсутність відкритих відгуків'
  },

  // Метадані для LLM
  llm_metadata: {
    last_updated: '2024-11-21',
    data_sources: ['Офіційний сайт училища', 'Єдиний державний реєстр', 'Education.ua'],
    completeness: 'Високий рівень деталізації',
    reliability: 'Дані перевірені через офіційні джерела',
    important_warnings: [
      'КРИТИЧНО ВАЖЛИВО: Заклад перебуває у стані припинення в ЄДР з 21.11.2024',
      'Рекомендується зв\'язатися з приймальною комісією для уточнення актуального статусу',
      'Процес децентралізації може впливати на юридичну назву та процедури вступу'
    ]
  }
};

// Допоміжні функції для роботи з даними
export const VPU_29_HELPERS = {
  // Отримати всі професії
  getAllProfessions: () => {
    const professions = new Set();

    VPU_29_LVIV.programs_grade_9.forEach(program => {
      program.professions.forEach(prof => professions.add(prof));
    });

    VPU_29_LVIV.programs_grade_11.forEach(program => {
      program.professions.forEach(prof => professions.add(prof));
    });

    return Array.from(professions);
  },

  // Знайти програму за професією
  findProgramByProfession: (professionName) => {
    const results = [];

    VPU_29_LVIV.programs_grade_9.forEach(program => {
      if (program.professions.some(prof => prof.toLowerCase().includes(professionName.toLowerCase()))) {
        results.push({
          ...program,
          admission_basis: '9 класів',
          includes_secondary: true
        });
      }
    });

    VPU_29_LVIV.programs_grade_11.forEach(program => {
      if (program.professions.some(prof => prof.toLowerCase().includes(professionName.toLowerCase()))) {
        results.push({
          ...program,
          admission_basis: '11 класів',
          includes_secondary: false
        });
      }
    });

    return results;
  },

  // Отримати контактну інформацію
  getContactInfo: () => {
    return {
      address: `${VPU_29_LVIV.contact_info.legal_address.street}, ${VPU_29_LVIV.contact_info.legal_address.building}, ${VPU_29_LVIV.contact_info.legal_address.city}`,
      phone: VPU_29_LVIV.contact_info.phones.main_mobile,
      email: VPU_29_LVIV.contact_info.email,
      website: VPU_29_LVIV.contact_info.website
    };
  },

  // Перевірити актуальний статус
  checkLegalStatus: () => {
    return {
      status: VPU_29_LVIV.legal_status.current_status,
      warning: VPU_29_LVIV.llm_metadata.important_warnings[0],
      recommendation: 'Обов\'язково зв\'яжіться з училищем для уточнення актуального статусу перед подачею документів'
    };
  },

  // Форматувати інформацію про професію
  formatProfessionInfo: (professionName) => {
    const programs = VPU_29_HELPERS.findProgramByProfession(professionName);
    if (programs.length === 0) return null;

    return programs.map(program => ({
      professions: program.professions.join(', '),
      duration: program.duration,
      basis: program.admission_basis,
      secondary: program.includes_secondary ? 'Так' : 'Ні'
    }));
  }
};

export const LEARNING_RESOURCES = {
  websites: [
    {
      name: 'Офіційний сайт ВПУ №29 м. Львова',
      url: 'https://vpu29.lviv.ua/',
      description: 'Головний інформаційний ресурс училища'
    }
  ]
};

// Експорт для використання в LLM системах
export default {
  data: VPU_29_LVIV,
  helpers: VPU_29_HELPERS
};