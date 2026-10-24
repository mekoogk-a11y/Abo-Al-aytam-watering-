import { SupportedLanguage, LanguageOption } from '../types';

export const LANGUAGES: LanguageOption[] = [
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇩', direction: 'rtl' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', direction: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', direction: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', direction: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', direction: 'ltr' },
];

export interface TranslationData {
  topBarText: string;
  orgName: string;
  subHeader: string;
  nav: {
    home: string;
    projects: string;
    notes: string;
    bankAccounts: string;
    contact: string;
    share: string;
    contributeNow: string;
  };
  hero: {
    bismillah: string;
    title: string;
    orgSubtitle: string;
    slogan: string;
    description: string;
    exploreBtn: string;
    contributeBtn: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  projects: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    featuredBadge: string;
    costLabel: string;
    usdLabel: string;
    costDisclaimer: string;
    includesLabel: string;
    contributeBtn: string;
    inquireWhatsappBtn: string;
    bottomTip: string;
    items: {
      id: string;
      title: string;
      subtitle: string;
      badge: string;
      tag: string;
      cost: number;
      features: string[];
      notes?: string;
    }[];
  };
  notes: {
    tag: string;
    title: string;
    badge: string;
    items: string[];
    factors: { title: string; desc: string }[];
  };
  bankAccounts: {
    badge: string;
    title: string;
    subtitle: string;
    officialAccount: string;
    accountHolderLabel: string;
    accountNumberLabel: string;
    copyBtn: string;
    copiedBtn: string;
    copiedSuccess: string;
    sendReceiptBtn: string;
    securityTitle: string;
    securityText: string;
    accounts: {
      id: string;
      bankName: string;
      bankSub: string;
      accountNumber: string;
      holderName: string;
      logoColor: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappBadge: string;
    whatsappDesc: string;
    whatsappAction: string;
    mobileTitle: string;
    mobileBadge: string;
    mobileDesc: string;
    mobileCallAction: string;
    mobileCopyAction: string;
    locationTitle: string;
    locationBadge: string;
    locationDesc: string;
    hours: string;
    addressLines: string[];
  };
  footer: {
    orgName: string;
    sloganStatement: string;
    duaStatement: string;
    hadithQuote: string;
    rightsReserved: string;
    backToTop: string;
    sharePage: string;
  };
  shareModal: {
    title: string;
    description: string;
    viaWhatsapp: string;
    viaTelegram: string;
    linkLabel: string;
    copyLink: string;
    copied: string;
    close: string;
  };
  mobileBar: {
    bankAccounts: string;
    whatsapp: string;
  };
}

export const translations: Record<SupportedLanguage, TranslationData> = {
  ar: {
    topBarText: 'الموقع الرسمي لتوثيق وعرض مشاريع السقيا وحفر الآبار بالطاقة الشمسية · منظمة أبو الأيتام',
    orgName: 'منظمة أبو الأيتام لكفالة ورعاية الأيتام',
    subHeader: 'مشاريع السقيا والآبار بالطاقة الشمسية',
    nav: {
      home: 'الرئيسية',
      projects: 'مشاريع السقيا',
      notes: 'الملاحظات الفنية',
      bankAccounts: 'الحسابات البنكية',
      contact: 'التواصل والموقع',
      share: 'مشاركة',
      contributeNow: 'ساهم في السقيا',
    },
    hero: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      title: 'مشاريع السقيا',
      orgSubtitle: 'بمنظمة أبو الأيتام لكفالة ورعاية الأيتام',
      slogan: '«الماء أساس الحياة»',
      description: 'معاً لتوفير مياه الشرب النظيفة، ودعم المجتمعات المحتاجة، والمساهمة في إنشاء وصيانة الآبار وتشغيلها بالطاقة الشمسية.',
      exploreBtn: 'استعرض مشاريع السقيا',
      contributeBtn: 'ساهم في مشاريع السقيا',
      pillar1Title: 'مياه نقية وصالحة للشرب',
      pillar1Desc: 'تأمين مياه عذبة مستدامة للقرى والمحتاجين',
      pillar2Title: 'طاقة شمسية مستدامة',
      pillar2Desc: 'تشغيل مستمر وخالٍ من تكاليف الوقود',
      pillar3Title: 'إشراف هندسي وتنفيذي',
      pillar3Desc: 'دراسات فنية دقيقة ومعاينة ميدانية موثقة',
    },
    projects: {
      sectionBadge: 'خيارات مشاريع السقيا وتكاليفها',
      sectionTitle: 'مشاريع السقيا المقترحة',
      sectionSubtitle: 'ثلاثة نماذج هندسية مدروسة لحفر الآبار وصيانتها وتزويدها بالطاقة الشمسية، لتلبية حاجة القرى والمجتمعات العطشى بمصادر مياه نقية ومستدامة.',
      featuredBadge: 'المشروع الأكثر شمولاً وتأثيراً',
      costLabel: 'التكلفة التقديرية:',
      usdLabel: 'دولار أمريكي',
      costDisclaimer: '* تكلفة تقديرية خاضعة للمقايسة الفنية وموقع التنفيذ',
      includesLabel: 'يشمل المشروع:',
      contributeBtn: 'ساهم في هذا المشروع',
      inquireWhatsappBtn: 'استفسر عن تفاصيل المشروع عبر واتساب',
      bottomTip: '💡 يمكن للمتبرع أو الجهة المانحة التكفل بالمشروع كاملاً أو المساهمة بأي مبلغ جزئي ميسور ضمن مساهمات السقيا الجارية.',
      items: [
        {
          id: 'project-1',
          title: 'حفر بئر جديد متكامل',
          subtitle: 'مشروع استراتيجي مستدام يخدم قرية أو مجتمعاً محلياً بالكامل',
          badge: 'المشروع الأول · الأكثر استدامة ونفعاً',
          tag: 'مشروع متكامل',
          cost: 13000,
          features: [
            'حفر بئر جديد لتوفير مياه الشرب.',
            'تركيب منظومة طاقة شمسية لتشغيل البئر.',
            'إنشاء سور لحماية البئر ومرافقه.',
            'إنشاء صهاريج لتجميع وتخزين المياه.',
          ],
        },
        {
          id: 'project-2',
          title: 'صيانة بئر وإضافة الطاقة الشمسية',
          subtitle: 'إعادة إحياء بئر متعطل وترقيته ليعمل بالطاقة النظيفة والمتجددة',
          badge: 'المشروع الثاني · تحديث بالطاقة الشمسية',
          tag: 'صيانة وطاقة',
          cost: 4500,
          features: [
            'صيانة البئر القائم ومعالجة الأعطال التي تؤثر في تشغيله.',
            'تركيب منظومة طاقة شمسية لتشغيل البئر وضخ المياه.',
          ],
        },
        {
          id: 'project-3',
          title: 'صيانة بئر قائم فقط',
          subtitle: 'معالجة الأعطال وإعادة تدفق المياه الصالحة للشرب للأهالي',
          badge: 'المشروع الثالث · صيانة فنية وإعادة تأهيل',
          tag: 'صيانة فنية',
          cost: 2800,
          features: [
            'إجراء أعمال الصيانة اللازمة للبئر القائم.',
            'معالجة الأعطال الفنية وفقاً لحالة البئر.',
            'إعادة البئر إلى الخدمة بحسب نتائج الفحص الفني.',
          ],
          notes: 'تنبيه: لا يشمل المشروع الثالث إضافة منظومة طاقة شمسية.',
        },
      ],
    },
    notes: {
      tag: 'الشفافية والدراسة الفنية',
      title: 'ملاحظات عامة',
      badge: 'إرشادات هندسية وتنفيذية للمتبرعين',
      items: [
        'جميع المبالغ الواردة في هذه الدراسة تقديرية وقابلة للتغيير وفقاً لظروف التنفيذ.',
        'تختلف التكلفة بحسب موقع المشروع وعمق البئر وطبيعة التربة وحالة المعدات وحجم منظومة الطاقة الشمسية وتكاليف الإنشاءات والنقل.',
        'يُحدد نطاق العمل النهائي والتكلفة الفعلية بعد المعاينة الفنية وإعداد المقايسة التفصيلية.',
      ],
      factors: [
        { title: 'عمق البئر وطبقات الأرض', desc: 'تحديد عمق الحفر الجوفي' },
        { title: 'سعة الطاقة الشمسية', desc: 'حجم الألواح والمضخة الغاطسة' },
        { title: 'حجم الإنشاءات والصهاريج', desc: 'السور والمناهل وحاويات التخزين' },
        { title: 'النقل واللوجستيات', desc: 'مسافة الموقع وطبيعة الطرق' },
      ],
    },
    bankAccounts: {
      badge: 'باب الخير والمساهمة',
      title: 'ساهم في توفير الماء... واجعل مساهمتك سبباً في استمرار الحياة.',
      subtitle: 'تُستقبل المساهمات الكريمة لدعم مشاريع حفر وصيانة الآبار مباشرة عبر الحسابات البنكية الرسمية المعتمدة للمنظمة.',
      officialAccount: 'الحساب البنكي الرسمي',
      accountHolderLabel: 'اسم صاحب الحساب:',
      accountNumberLabel: 'رقم الحساب:',
      copyBtn: 'نسخ الرقم',
      copiedBtn: 'تم النسخ!',
      copiedSuccess: 'تم نسخ رقم الحساب بنجاح إلى الحافظة.',
      sendReceiptBtn: 'إرسال إشعار التحويل للمنظمة عبر واتساب',
      securityTitle: 'تنويه أمان وضمان الشفافية:',
      securityText: 'الحسابات أعلاه في (بنك البركة وبنك الخرطوم) هي الحسابات الرسمية المعتمدة لمنظمة أبو الأيتام لكفالة ورعاية الأيتام لمشاريع السقيا. لا توجد أي حسابات أو وسائل دفع أخرى غير المذكورة أعلاه.',
      accounts: [
        {
          id: 'albaraka',
          bankName: 'بنك البركة',
          bankSub: 'Al Baraka Bank',
          accountNumber: '16019797970001',
          holderName: 'منظمة أبو الأيتام لكفالة ورعاية الأيتام',
          logoColor: 'from-amber-600 to-amber-700',
        },
        {
          id: 'khartoum',
          bankName: 'بنك الخرطوم',
          bankSub: 'Bank of Khartoum (BOK)',
          accountNumber: '1337031',
          holderName: 'منظمة أبو الأيتام لكفالة ورعاية الأيتام',
          logoColor: 'from-blue-700 to-sky-800',
        },
      ],
    },
    contact: {
      badge: 'فريق المنظمة في خدمتكم',
      title: 'للاستفسار والتواصل',
      subtitle: 'يسعدنا الإجابة على استفساراتكم وتقديم كافة التفاصيل الفنية والتقارير الميدانية لمشاريع السقيا.',
      whatsappTitle: 'واتساب',
      whatsappBadge: 'محادثة فورية مباشرة',
      whatsappDesc: 'تواصل مباشر وسريع للاستفسار، وطلب التقارير، وإرسال إشعارات التحويل.',
      whatsappAction: 'مراسلة عبر واتساب',
      mobileTitle: 'موبايل',
      mobileBadge: 'الاتصال الهاتفي المباشر',
      mobileDesc: 'متاح لاستقبال المكالمات الهاتفية والاستفسارات خلال ساعات العمل الرسمية.',
      mobileCallAction: 'اتصال الآن',
      mobileCopyAction: 'نسخ الرقم',
      locationTitle: 'موقع المنظمة',
      locationBadge: 'المقر الرئيسي للمنظمة',
      locationDesc: 'نرحب بزيارة المتبرعين الكرام وأصحاب المبادرات في مقر المنظمة بالخرطوم:',
      hours: 'مواعيد العمل: من الأحد إلى الخميس (صباحاً حتى بعد الظهر)',
      addressLines: [
        'السودان – الخرطوم – السوق العربي',
        'عمارة عبد الرحمن أبو حسبو – الطابق الأول.',
      ],
    },
    footer: {
      orgName: 'منظمة أبو الأيتام لكفالة ورعاية الأيتام',
      sloganStatement: 'الماء أساس الحياة، والمساهمة في توفيره باب من أبواب الخير العظيم.',
      duaStatement: 'نسأل الله أن يبارك في جهود أهل الخير، وأن يجعل مساهماتهم في موازين حسناتهم.',
      hadithQuote: 'قال رسول الله ﷺ: «أَفْضَلُ الصَّدَقَةِ سَقْيُ الْمَاءِ»',
      rightsReserved: 'جميع الحقوق محفوظة',
      backToTop: 'العودة للأعلى',
      sharePage: 'نشر الصفحة',
    },
    shareModal: {
      title: 'مشاركة صفحة مشاريع السقيا',
      description: 'الدال على الخير كفاعله.. شارك رابط مشاريع السقيا مع الأهل والأصدقاء ومجموعات الخير لتكون سبباً في سقيا المحتاجين.',
      viaWhatsapp: 'عبر واتساب',
      viaTelegram: 'عبر تيليجرام',
      linkLabel: 'رابط الصفحة المباشر:',
      copyLink: 'نسخ الرابط',
      copied: 'تم النسخ',
      close: 'إغلاق',
    },
    mobileBar: {
      bankAccounts: 'الحسابات البنكية',
      whatsapp: 'واتساب',
    },
  },

  en: {
    topBarText: 'Official portal for Water Relief & Solar-Powered Well Projects · Abu Al-Aytam Organization',
    orgName: 'Abu Al-Aytam Organization for Sponsorship and Care of Orphans',
    subHeader: 'Water Relief & Solar-Powered Well Projects',
    nav: {
      home: 'Home',
      projects: 'Water Projects',
      notes: 'Technical Notes',
      bankAccounts: 'Bank Accounts',
      contact: 'Contact & Location',
      share: 'Share',
      contributeNow: 'Contribute Now',
    },
    hero: {
      bismillah: 'In the name of Allah, the Most Gracious, the Most Merciful',
      title: 'Water Relief Projects',
      orgSubtitle: 'Abu Al-Aytam Organization for Sponsorship and Care of Orphans',
      slogan: '«Water is the Essence of Life»',
      description: 'Together to provide clean drinking water, support vulnerable communities, and contribute to drilling, maintaining, and operating water wells with solar energy.',
      exploreBtn: 'Explore Water Projects',
      contributeBtn: 'Contribute to Water Projects',
      pillar1Title: 'Clean & Safe Drinking Water',
      pillar1Desc: 'Securing sustainable fresh water for needy communities and villages',
      pillar2Title: 'Sustainable Solar Energy',
      pillar2Desc: 'Continuous pumping free from recurring fuel and operating costs',
      pillar3Title: 'Engineering & Field Supervision',
      pillar3Desc: 'Precise technical assessments and verified on-site field surveys',
    },
    projects: {
      sectionBadge: 'Project Options & Estimated Costs',
      sectionTitle: 'Proposed Water Relief Projects',
      sectionSubtitle: 'Three carefully designed engineering models for drilling, rehabilitating, and powering wells with solar energy to serve thirsty communities.',
      featuredBadge: 'Most Comprehensive & Impactful Project',
      costLabel: 'Estimated Cost:',
      usdLabel: 'USD',
      costDisclaimer: '* Estimated cost subject to technical survey and implementation site conditions',
      includesLabel: 'Project Includes:',
      contributeBtn: 'Contribute to this Project',
      inquireWhatsappBtn: 'Inquire about Project Details via WhatsApp',
      bottomTip: '💡 Donors or funding bodies may sponsor a complete project or contribute any partial donation towards ongoing water relief.',
      items: [
        {
          id: 'project-1',
          title: 'Drilling a New Integrated Well',
          subtitle: 'A strategic, sustainable project serving an entire village or community',
          badge: 'Project 1 · Highest Long-Term Impact',
          tag: 'Integrated Well',
          cost: 13000,
          features: [
            'Drilling a new well to provide clean drinking water.',
            'Installing a complete solar power system to operate the well.',
            'Constructing a protective fence around the well and facilities.',
            'Constructing high-capacity water storage reservoirs.',
          ],
        },
        {
          id: 'project-2',
          title: 'Well Maintenance & Solar System Installation',
          subtitle: 'Rehabilitating a non-functional well and upgrading it to clean solar energy',
          badge: 'Project 2 · Solar Upgrade & Rehabilitation',
          tag: 'Maintenance & Solar',
          cost: 4500,
          features: [
            'Maintaining the existing well and resolving defects affecting operation.',
            'Installing a solar power system for pumping water efficiently.',
          ],
        },
        {
          id: 'project-3',
          title: 'Maintenance of Existing Well Only',
          subtitle: 'Repairing mechanical faults and restoring drinking water supply',
          badge: 'Project 3 · Technical Rehabilitation',
          tag: 'Technical Maintenance',
          cost: 2800,
          features: [
            'Carrying out necessary maintenance on the existing well.',
            'Addressing technical and mechanical issues according to well state.',
            'Returning the well to service based on engineering inspection results.',
          ],
          notes: 'Notice: The third project does not include the installation of a solar power system.',
        },
      ],
    },
    notes: {
      tag: 'Transparency & Technical Study',
      title: 'General Notes',
      badge: 'Engineering & Field Guidelines for Donors',
      items: [
        'All amounts listed in this study are estimates and subject to change according to implementation conditions.',
        'Costs vary depending on project location, well depth, soil geology, equipment condition, solar system capacity, civil works, and transportation logistics.',
        'The final scope of work and actual cost are determined after on-site technical inspection and detailed bill of quantities.',
      ],
      factors: [
        { title: 'Well Depth & Soil Geology', desc: 'Determines underground drilling depth' },
        { title: 'Solar Capacity', desc: 'Panel count and submersible pump size' },
        { title: 'Civil Works & Storage', desc: 'Fence, distribution points and tanks' },
        { title: 'Logistics & Transport', desc: 'Distance and site accessibility' },
      ],
    },
    bankAccounts: {
      badge: 'Gateway of Charity & Giving',
      title: 'Contribute to providing water... and make your contribution a reason for life to continue.',
      subtitle: 'Generous contributions for drilling and maintaining wells are received directly through the organization\'s official bank accounts.',
      officialAccount: 'Official Bank Account',
      accountHolderLabel: 'Account Holder Name:',
      accountNumberLabel: 'Account Number:',
      copyBtn: 'Copy Number',
      copiedBtn: 'Copied!',
      copiedSuccess: 'Account number copied successfully to clipboard.',
      sendReceiptBtn: 'Send Transfer Receipt to Organization via WhatsApp',
      securityTitle: 'Security & Transparency Notice:',
      securityText: 'The above accounts at (Al Baraka Bank and Bank of Khartoum) are the sole official authorized accounts of Abu Al-Aytam Organization for water projects. No other accounts or third-party payment channels exist.',
      accounts: [
        {
          id: 'albaraka',
          bankName: 'Al Baraka Bank',
          bankSub: 'Al Baraka Bank Sudan',
          accountNumber: '16019797970001',
          holderName: 'Abu Al-Aytam Organization for Care and Sponsorship of Orphans',
          logoColor: 'from-amber-600 to-amber-700',
        },
        {
          id: 'khartoum',
          bankName: 'Bank of Khartoum',
          bankSub: 'Bank of Khartoum (BOK)',
          accountNumber: '1337031',
          holderName: 'Abu Al-Aytam Organization for Care and Sponsorship of Orphans',
          logoColor: 'from-blue-700 to-sky-800',
        },
      ],
    },
    contact: {
      badge: 'Our Team is at Your Service',
      title: 'Inquiries & Contact',
      subtitle: 'We are pleased to answer your inquiries and provide complete technical data and field progress reports.',
      whatsappTitle: 'WhatsApp',
      whatsappBadge: 'Direct Instant Chat',
      whatsappDesc: 'Quick direct communication for inquiries, reports, and transfer notifications.',
      whatsappAction: 'Chat on WhatsApp',
      mobileTitle: 'Mobile Call',
      mobileBadge: 'Direct Phone Line',
      mobileDesc: 'Available for phone calls and inquiries during regular working hours.',
      mobileCallAction: 'Call Now',
      mobileCopyAction: 'Copy Number',
      locationTitle: 'Headquarters Location',
      locationBadge: 'Main Organization Office',
      locationDesc: 'We warmly welcome visits from donors and initiative partners at our Khartoum office:',
      hours: 'Working Hours: Sunday to Thursday (Morning to Afternoon)',
      addressLines: [
        'Sudan – Khartoum – The Arab Souq',
        'Abdul Rahman Abu Hasabo Building – 1st Floor.',
      ],
    },
    footer: {
      orgName: 'Abu Al-Aytam Organization for Sponsorship and Care of Orphans',
      sloganStatement: 'Water is the essence of life, and contributing to providing it is among the greatest doors of charity.',
      duaStatement: 'May Allah bless the endeavors of the benevolent donors, and place their contributions in their scales of good deeds.',
      hadithQuote: 'The Prophet ﷺ said: «The best charity is providing drinking water»',
      rightsReserved: 'All rights reserved',
      backToTop: 'Back to Top',
      sharePage: 'Share Page',
    },
    shareModal: {
      title: 'Share Water Relief Page',
      description: 'The one who guides to good is like the one who does it.. Share this water relief campaign with friends and community groups.',
      viaWhatsapp: 'via WhatsApp',
      viaTelegram: 'via Telegram',
      linkLabel: 'Direct Page Link:',
      copyLink: 'Copy Link',
      copied: 'Copied',
      close: 'Close',
    },
    mobileBar: {
      bankAccounts: 'Bank Accounts',
      whatsapp: 'WhatsApp',
    },
  },

  fr: {
    topBarText: 'Portail officiel des projets d\'adduction d\'eau et puits solaires · Organisation Abu Al-Aytam',
    orgName: 'Organisation Abu Al-Aytam pour le Parrainage et la Prise en Charge des Orphelins',
    subHeader: 'Projets d\'adduction d\'eau et puits solaires',
    nav: {
      home: 'Accueil',
      projects: 'Projets d\'Eau',
      notes: 'Notes Techniques',
      bankAccounts: 'Comptes Bancaires',
      contact: 'Contact & Emplacement',
      share: 'Partager',
      contributeNow: 'Contribuer',
    },
    hero: {
      bismillah: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux',
      title: 'Projets d\'Adduction d\'Eau',
      orgSubtitle: 'Organisation Abu Al-Aytam pour le Parrainage et la Prise en Charge des Orphelins',
      slogan: '« L\'Eau est l\'Essence de la Vie »',
      description: 'Ensemble pour fournir de l\'eau potable propre, soutenir les communautés vulnérables et contribuer au forage, à l\'entretien et à l\'alimentation des puits par l\'énergie solaire.',
      exploreBtn: 'Explorer les Projets',
      contributeBtn: 'Contribuer aux Projets',
      pillar1Title: 'Eau Potable Pure et Salubre',
      pillar1Desc: 'Sécuriser un approvisionnement durable pour les villages et personnes dans le besoin',
      pillar2Title: 'Énergie Solaire Durable',
      pillar2Desc: 'Pompage autonome et continu sans coûts récurrents de carburant',
      pillar3Title: 'Supervision Technique et Travaux',
      pillar3Desc: 'Études d\'ingénierie rigoureuses et enquêtes de terrain vérifiées',
    },
    projects: {
      sectionBadge: 'Options et Coûts Estimés des Projets',
      sectionTitle: 'Projets d\'Adduction d\'Eau Proposés',
      sectionSubtitle: 'Trois modèles techniques conçus pour le forage, la réhabilitation et l\'électrification solaire des puits au service des populations.',
      featuredBadge: 'Projet le Plus Complet et Durable',
      costLabel: 'Coût Estimatif :',
      usdLabel: 'Dollars Américains (USD)',
      costDisclaimer: '* Coût estimatif sujet à l\'évaluation technique et aux conditions du site',
      includesLabel: 'Le Projet Comprend :',
      contributeBtn: 'Contribuer à ce Projet',
      inquireWhatsappBtn: 'Demander des Détails via WhatsApp',
      bottomTip: '💡 Les bienfaiteurs peuvent financer l\'intégralité d\'un puits ou verser une contribution partielle.',
      items: [
        {
          id: 'project-1',
          title: 'Forage d\'un Nouveau Puits Intégré',
          subtitle: 'Projet stratégique durable au service d\'un village ou d\'une communauté entière',
          badge: 'Projet 1 · Impact Durable Majeur',
          tag: 'Puits Intégré',
          cost: 13000,
          features: [
            'Forage d\'un nouveau puits pour fournir de l\'eau potable.',
            'Installation d\'un système solaire complet pour actionner la pompe.',
            'Construction d\'une clôture de protection autour du puits.',
            'Construction de réservoirs de stockage d\'eau à haute capacité.',
          ],
        },
        {
          id: 'project-2',
          title: 'Entretien de Puits et Ajout d\'Énergie Solaire',
          subtitle: 'Réhabilitation d\'un puits en panne et modernisation par l\'énergie solaire',
          badge: 'Projet 2 · Rénovation Solaire',
          tag: 'Maintenance & Solaire',
          cost: 4500,
          features: [
            'Maintenance du puits existant et réparation des pannes affectant son fonctionnement.',
            'Installation d\'un système d\'énergie solaire pour pomper l\'eau de manière écologique.',
          ],
        },
        {
          id: 'project-3',
          title: 'Entretien de Puits Existant Uniquement',
          subtitle: 'Réparation technique et rétablissement du débit d\'eau potable',
          badge: 'Projet 3 · Réhabilitation Technique',
          tag: 'Maintenance Seule',
          cost: 2800,
          features: [
            'Réalisation des travaux de maintenance nécessaires sur le puits existant.',
            'Traitement des pannes selon l\'état technique du puits.',
            'Remise en service du puits selon les résultats de l\'inspection technique.',
          ],
          notes: 'Remarque : Le troisième projet n\'inclut pas l\'installation d\'un système d\'énergie solaire.',
        },
      ],
    },
    notes: {
      tag: 'Transparence et Étude Technique',
      title: 'Notes Générales',
      badge: 'Recommandations Techniques pour les Donateurs',
      items: [
        'Tous les montants indiqués dans cette étude sont estimatifs et susceptibles de varier selon les conditions d\'exécution.',
        'Le coût varie en fonction de la localisation, de la profondeur du forage, du sol, de la puissance solaire, des travaux civils et du transport.',
        'Le périmètre définitif des travaux et le coût réel sont fixés après expertise technique sur site et devis quantitatif détaillé.',
      ],
      factors: [
        { title: 'Profondeur & Géologie', desc: 'Détermine la profondeur de forage' },
        { title: 'Capacité Solaire', desc: 'Nombre de panneaux et pompe immergée' },
        { title: 'Génie Civil & Réservoirs', desc: 'Clôture et cuves de stockage' },
        { title: 'Logistique & Transport', desc: 'Distance et accessibilité des pistes' },
      ],
    },
    bankAccounts: {
      badge: 'Voie de la Bienfaisance',
      title: 'Contribuez à fournir de l\'eau... et faites de votre don une source de vie.',
      subtitle: 'Les contributions pour le forage et l\'entretien des puits sont directement reçues sur les comptes bancaires officiels de l\'organisation.',
      officialAccount: 'Compte Bancaire Officiel',
      accountHolderLabel: 'Titulaire du Compte :',
      accountNumberLabel: 'Numéro de Compte :',
      copyBtn: 'Copier',
      copiedBtn: 'Copié !',
      copiedSuccess: 'Numéro de compte copié avec succès dans le presse-papiers.',
      sendReceiptBtn: 'Envoyer le reçu de virement par WhatsApp',
      securityTitle: 'Avis de Sécurité et Garantie de Transparence :',
      securityText: 'Les comptes ci-dessus (Banque Al Baraka et Banque de Khartoum) sont les seuls comptes officiels agréés de l\'Organisation Abu Al-Aytam pour les projets d\'eau.',
      accounts: [
        {
          id: 'albaraka',
          bankName: 'Banque Al Baraka',
          bankSub: 'Al Baraka Bank Sudan',
          accountNumber: '16019797970001',
          holderName: 'Organisation Abu Al-Aytam pour la Prise en Charge des Orphelins',
          logoColor: 'from-amber-600 to-amber-700',
        },
        {
          id: 'khartoum',
          bankName: 'Banque de Khartoum',
          bankSub: 'Bank of Khartoum (BOK)',
          accountNumber: '1337031',
          holderName: 'Organisation Abu Al-Aytam pour la Prise en Charge des Orphelins',
          logoColor: 'from-blue-700 to-sky-800',
        },
      ],
    },
    contact: {
      badge: 'Notre Équipe à Votre Écoute',
      title: 'Renseignements & Contact',
      subtitle: 'Nous sommes à votre disposition pour toute information technique et rapport d\'avancement de terrain.',
      whatsappTitle: 'WhatsApp',
      whatsappBadge: 'Discussion Instantanée',
      whatsappDesc: 'Échange rapide pour toute demande, rapports et justificatifs de virement.',
      whatsappAction: 'Écrire sur WhatsApp',
      mobileTitle: 'Téléphone Mobile',
      mobileBadge: 'Appel Direct',
      mobileDesc: 'Disponible pour les appels pendant les horaires de travail réguliers.',
      mobileCallAction: 'Appeler',
      mobileCopyAction: 'Copier le Numéro',
      locationTitle: 'Emplacement du Siège',
      locationBadge: 'Bureau Principal',
      locationDesc: 'Nous accueillons avec plaisir les donateurs et partenaires à notre siège à Khartoum :',
      hours: 'Horaires : Du dimanche au jeudi (matin jusqu\'en début d\'après-midi)',
      addressLines: [
        'Soudan – Khartoum – Grand Souk Arabe',
        'Immeuble Abdul Rahman Abu Hasabo – 1er Étage.',
      ],
    },
    footer: {
      orgName: 'Organisation Abu Al-Aytam pour le Parrainage et la Prise en Charge des Orphelins',
      sloganStatement: 'L\'eau est l\'essence de la vie, et contribuer à l\'étancher compte parmi les plus grandes œuvres de bienfaisance.',
      duaStatement: 'Qu\'Allah bénisse les généreux donateurs et inscrive leurs aumônes dans la balance de leurs bonnes actions.',
      hadithQuote: 'Le Prophète ﷺ a dit : « La meilleure aumône est d\'abreuver en eau »',
      rightsReserved: 'Tous droits réservés',
      backToTop: 'Haut de page',
      sharePage: 'Partager la page',
    },
    shareModal: {
      title: 'Partager la Page des Projets d\'Eau',
      description: 'Celui qui guide vers une bonne action en a la même récompense. Partagez cette page avec vos proches et groupes caritatifs.',
      viaWhatsapp: 'via WhatsApp',
      viaTelegram: 'via Telegram',
      linkLabel: 'Lien Direct :',
      copyLink: 'Copier le Lien',
      copied: 'Copié',
      close: 'Fermer',
    },
    mobileBar: {
      bankAccounts: 'Comptes Bancaires',
      whatsapp: 'WhatsApp',
    },
  },

  tr: {
    topBarText: 'Güneş Enerjili Su Kuyusu Projeleri Resmi Portalı · Abu Al-Aytam Derneği',
    orgName: 'Yetimleri Koruma ve Destekleme Abu Al-Aytam Derneği',
    subHeader: 'Su Kuyusu ve Güneş Enerjisi Projeleri',
    nav: {
      home: 'Ana Sayfa',
      projects: 'Su Projeleri',
      notes: 'Teknik Notlar',
      bankAccounts: 'Banka Hesapları',
      contact: 'İletişim & Konum',
      share: 'Paylaş',
      contributeNow: 'Bağışta Bulun',
    },
    hero: {
      bismillah: 'Rahmân ve Rahîm olan Allah\'ın adıyla',
      title: 'Su Kuyusu Projeleri',
      orgSubtitle: 'Yetimleri Koruma ve Destekleme Abu Al-Aytam Derneği',
      slogan: '« Su Hayatın Temelidir »',
      description: 'Temiz içme suyu sağlamak, ihtiyaç sahibi toplulukları desteklemek ve güneş enerjisiyle çalışan su kuyuları inşa edip onarmak için el ele.',
      exploreBtn: 'Su Projelerini İnceleyin',
      contributeBtn: 'Su Projelerine Bağış Yapın',
      pillar1Title: 'Temiz ve Güvenli İçme Suyu',
      pillar1Desc: 'Susuz köyler ve ihtiyaç sahipleri için kesintisiz tatlı su temini',
      pillar2Title: 'Sürdürülebilir Güneş Enerjisi',
      pillar2Desc: 'Yakıt ve jeneratör maliyeti olmadan sürekli ve temiz pompalama',
      pillar3Title: 'Mühendislik ve Saha Denetimi',
      pillar3Desc: 'Ayrıntılı teknik etütler ve sahada doğrulanmış uzman denetimi',
    },
    projects: {
      sectionBadge: 'Proje Seçenekleri ve Tahmini Maliyetler',
      sectionTitle: 'Önerilen Su Projeleri',
      sectionSubtitle: 'İhtiyaç sahibi bölgelerin temiz suya kavuşması için titizlikle planlanmış 3 mühendislik modeli.',
      featuredBadge: 'En Kapsamlı ve Kalıcı Proje',
      costLabel: 'Tahmini Maliyet:',
      usdLabel: 'Amerikan Doları (USD)',
      costDisclaimer: '* Saha koşullarına ve teknik etüt raporuna göre değişebilir',
      includesLabel: 'Proje Kapsamı:',
      contributeBtn: 'Bu Projeye Katkıda Bulunun',
      inquireWhatsappBtn: 'WhatsApp Üzerinden Proje Bilgisi Alın',
      bottomTip: '💡 Hayırseverler bir projenin tamamını üstlenebilir veya diledikleri miktarda bağışla ortak olabilirler.',
      items: [
        {
          id: 'project-1',
          title: 'Tam Donanımlı Yeni Kuyu Açılması',
          subtitle: 'Tüm köy veya yerel topluluğa hizmet veren kalıcı ve stratejik su projesi',
          badge: '1. Proje · En Yüksek Fayda ve Kalıcılık',
          tag: 'Entegre Kuyu',
          cost: 13000,
          features: [
            'Temiz içme suyu sağlamak amacıyla yeni bir kuyu açılması.',
            'Kuyuyu çalıştırmak için tam donanımlı güneş enerjisi sisteminin kurulması.',
            'Kuyuyu ve tesisleri korumak için koruyucu güvenlik çiti inşa edilmesi.',
            'Suyu depolamak ve dağıtmak için yüksek kapasiteli su depoları yapılması.',
          ],
        },
        {
          id: 'project-2',
          title: 'Mevcut Kuyunun Bakımı ve Güneş Enerjisi Kurulumu',
          subtitle: 'Atıl durumdaki kuyunun onarılması ve güneş enerjisiyle çalışır hale getirilmesi',
          badge: '2. Proje · Güneş Enerjisi Dönüşümü',
          tag: 'Bakım ve Güneş',
          cost: 4500,
          features: [
            'Mevcut kuyunun bakımı ve su basmasını engelleyen arızaların giderilmesi.',
            'Suyun sürdürülebilir pompalanması için güneş enerjisi sisteminin kurulması.',
          ],
        },
        {
          id: 'project-3',
          title: 'Yalnızca Mevcut Kuyunun Bakımı',
          subtitle: 'Mekanik arızaların giderilmesi ve suyun yeniden akıtılması',
          badge: '3. Proje · Teknik Onarım ve İhya',
          tag: 'Yalnızca Bakım',
          cost: 2800,
          features: [
            'Mevcut kuyu üzerinde gerekli bakım ve yenileme çalışmalarının yapılması.',
            'Kuyunun durumuna göre teknik arızaların giderilmesi.',
            'Saha denetim sonuçlarına göre kuyunun yeniden hizmete alınması.',
          ],
          notes: 'Uyarı: Üçüncü proje güneş enerjisi sistemi kurulumunu içermez.',
        },
      ],
    },
    notes: {
      tag: 'Şeffaflık ve Teknik Değerlendirme',
      title: 'Genel Notlar',
      badge: 'Bağışçılar İçin Mühendislik Rehberi',
      items: [
        'Bu çalışmada yer alan tüm tutarlar tahmini olup, saha uygulama koşullarına göre değişebilir.',
        'Maliyetler proje konumu, kuyu derinliği, toprak yapısı, güneş sistemi kapasitesi, inşaat ve lojistik masraflarına göre farklılık gösterir.',
        'Nihai iş kapsamı ve kesin maliyet, saha teknik incelemesi ve ayrıntılı keşif raporu sonrasında belirlenir.',
      ],
      factors: [
        { title: 'Kuyu Derinliği & Zemin Yapısı', desc: 'Sondaj derinliğini belirler' },
        { title: 'Güneş Sistemi Gücü', desc: 'Panel sayısı ve dalgıç pompa boyutu' },
        { title: 'İnşaat & Depolar', desc: 'Güvenlik çiti ve depolama tankları' },
        { title: 'Lojistik & Nakliye', desc: 'Mesafe ve yol erişim durumu' },
      ],
    },
    bankAccounts: {
      badge: 'Hayır ve Yardımlaşma Kapısı',
      title: 'Su sağlamaya katkıda bulunun... bağışınız hayatın devamına vesile olsun.',
      subtitle: 'Kuyu açma ve bakım bağışları doğrudan derneğimizin yetkili resmi banka hesapları üzerinden kabul edilmektedir.',
      officialAccount: 'Resmi Banka Hesabı',
      accountHolderLabel: 'Hesap Sahibi:',
      accountNumberLabel: 'Hesap Numarası:',
      copyBtn: 'Numarayı Kopyala',
      copiedBtn: 'Kopyalandı!',
      copiedSuccess: 'Hesap numarası panoya başarıyla kopyalandı.',
      sendReceiptBtn: 'Dekontu WhatsApp Üzerinden Gönderin',
      securityTitle: 'Güvenlik ve Şeffaflık Güvencesi:',
      securityText: 'Yukarıdaki (Al Baraka Bank ve Bank of Khartoum) hesapları, Abu Al-Aytam Derneği\'nin su projeleri için tek yetkili resmi hesaplarıdır.',
      accounts: [
        {
          id: 'albaraka',
          bankName: 'Al Baraka Bank',
          bankSub: 'Al Baraka Bank Sudan',
          accountNumber: '16019797970001',
          holderName: 'Yetimleri Koruma ve Destekleme Abu Al-Aytam Derneği',
          logoColor: 'from-amber-600 to-amber-700',
        },
        {
          id: 'khartoum',
          bankName: 'Bank of Khartoum',
          bankSub: 'Bank of Khartoum (BOK)',
          accountNumber: '1337031',
          holderName: 'Yetimleri Koruma ve Destekleme Abu Al-Aytam Derneği',
          logoColor: 'from-blue-700 to-sky-800',
        },
      ],
    },
    contact: {
      badge: 'Ekibimiz Hizmetinizde',
      title: 'Danışma ve İletişim',
      subtitle: 'Sorularınızı yanıtlamaktan ve projelerimize dair teknik ve saha raporlarını sunmaktan memnuniyet duyarız.',
      whatsappTitle: 'WhatsApp',
      whatsappBadge: 'Anlık Doğrudan Mesaj',
      whatsappDesc: 'Sorular, rapor talepleri ve bağış dekontları için hızlı iletişim kanalı.',
      whatsappAction: 'WhatsApp\'tan Yazın',
      mobileTitle: 'Mobil Telefon',
      mobileBadge: 'Doğrudan Telefon Hattı',
      mobileDesc: 'Resmi çalışma saatleri içerisinde telefon aramaları için müsaittir.',
      mobileCallAction: 'Şimdi Ara',
      mobileCopyAction: 'Numarayı Kopyala',
      locationTitle: 'Dernek Genel Merkezi',
      locationBadge: 'Merkez Ofis',
      locationDesc: 'Bağışçılarımızı ve gönüllülerimizi Hartum\'daki merkezimizde ağırlamaktan onur duyarız:',
      hours: 'Çalışma Saatleri: Pazar - Perşembe (Sabah - Öğleden sonra)',
      addressLines: [
        'Sudan – Hartum – Souq Al Arabi',
        'Abdurrahman Abu Hasabo Binası – 1. Kat.',
      ],
    },
    footer: {
      orgName: 'Yetimleri Koruma ve Destekleme Abu Al-Aytam Derneği',
      sloganStatement: 'Su hayatın temelidir; su teminine katkıda bulunmak en büyük hayır kapılarından biridir.',
      duaStatement: 'Yüce Allah hayır sahiplerinin gayretlerini bereketlendirsin ve bağışlarını mizanlarına hayır olarak yazsın.',
      hadithQuote: 'Peygamber Efendimiz ﷺ şöyle buyurdu: «En faziletli sadaka su içirmektir»',
      rightsReserved: 'Tüm hakları saklıdır',
      backToTop: 'Yukarı Çık',
      sharePage: 'Sayfayı Paylaş',
    },
    shareModal: {
      title: 'Su Projeleri Sayfasını Paylaşın',
      description: 'Hayra vesile olan, hayrı yapan gibidir. Bu su kuyusu projelerini aileniz ve hayır gruplarıyla paylaşın.',
      viaWhatsapp: 'WhatsApp ile',
      viaTelegram: 'Telegram ile',
      linkLabel: 'Doğrudan Sayfa Bağlantısı:',
      copyLink: 'Bağlantıyı Kopyala',
      copied: 'Kopyalandı',
      close: 'Kapat',
    },
    mobileBar: {
      bankAccounts: 'Banka Hesapları',
      whatsapp: 'WhatsApp',
    },
  },

  zh: {
    topBarText: '太阳能水井与饮用水援助项目官方门户 · 阿布·艾塔姆孤儿关爱组织',
    orgName: '阿布·艾塔姆孤儿赞助与关爱组织',
    subHeader: '太阳能饮用水井工程项目',
    nav: {
      home: '首页',
      projects: '水井项目',
      notes: '技术说明',
      bankAccounts: '银行账户',
      contact: '联系与地址',
      share: '分享',
      contributeNow: '立即资助',
    },
    hero: {
      bismillah: '奉至仁至慈的安拉之名',
      title: '饮用水援助项目',
      orgSubtitle: '阿布·艾塔姆孤儿赞助与关爱组织',
      slogan: '«水是生命的源泉»',
      description: '携手提供清洁安全饮用水，支持困难社区，共同开凿、维护水井并全面采用太阳能清洁动力。',
      exploreBtn: '浏览水井项目',
      contributeBtn: '资助饮水项目',
      pillar1Title: '洁净安全的饮用水',
      pillar1Desc: '为干旱贫困乡村提供长期可靠的甘甜水源',
      pillar2Title: '可持续太阳能动力',
      pillar2Desc: '无燃油支出，全天候持续稳定抽水与供水',
      pillar3Title: '严格工程与实地监督',
      pillar3Desc: '专业工程实地勘察评估，全流程规范施工',
    },
    projects: {
      sectionBadge: '项目方案与预算估算',
      sectionTitle: '拟建饮用水井项目',
      sectionSubtitle: '针对缺水社区定制的三套专业水井方案，涵盖深井开凿、维护及太阳能改造。',
      featuredBadge: '最全面且最具长远效益的项目',
      costLabel: '预估费用：',
      usdLabel: '美元 (USD)',
      costDisclaimer: '* 预估费用将根据实地地质勘测及现场具体条件确定',
      includesLabel: '工程包含：',
      contributeBtn: '资助本工程',
      inquireWhatsappBtn: '通过WhatsApp咨询工程详情',
      bottomTip: '💡 爱心人士或慈善机构可全资资助单座水井，亦可参与任意善款的部分合资助资。',
      items: [
        {
          id: 'project-1',
          title: '开凿全新综合配套水井',
          subtitle: '服务整个村庄或社区的长效战略供水民生工程',
          badge: '第一项工程 · 最具长远生命力',
          tag: '全套综合水井',
          cost: 13000,
          features: [
            '开凿全新深水井，提供清洁饮用水。',
            '配备安装全套太阳能发电系统运行水泵。',
            '修建水井及附属设施的专业安全防护围栏。',
            '建造大容量储水蓄水罐及分配系统。',
          ],
        },
        {
          id: 'project-2',
          title: '水井检修并加装太阳能系统',
          subtitle: '修复停运水井，并升级为绿色无污染的太阳能提水动力',
          badge: '第二项工程 · 太阳能升级改造',
          tag: '检修与太阳能',
          cost: 4500,
          features: [
            '对现有水井进行全面技术维护，消除影响运行的故障。',
            '安装太阳能发电提水系统，实现高效低成本抽水。',
          ],
        },
        {
          id: 'project-3',
          title: '仅对现有水井进行维护',
          subtitle: '排除机械电气故障，恢复当地居民的饮用水供应',
          badge: '第三项工程 · 技术维护与复原',
          tag: '基础技术检修',
          cost: 2800,
          features: [
            '对现有水井实施必要的工程维护与零件更换。',
            '依据水井实况排除机械与管路故障。',
            '根据现场技术检验报告重新验收通水。',
          ],
          notes: '注意：第三项工程不包含安装太阳能发电系统。',
        },
      ],
    },
    notes: {
      tag: '透明公开与技术调研',
      title: '总体说明',
      badge: '致捐赠善长仁翁的工程须知',
      items: [
        '本调研方案中所列各项费用均为预估金额，施工时根据实际工况可能有所调整。',
        '实际成本受项目具体地理位置、井深、土质岩层、太阳能系统规模、土建及运输成本等因素影响。',
        '最终施工范围和实际预算将在现场专业工程勘测及出具详细工程量清单后正式核定。',
      ],
      factors: [
        { title: '井深与地质构造', desc: '决定钻井深度与难度' },
        { title: '太阳能配置容量', desc: '电池板功率与潜水泵扬程' },
        { title: '土建与蓄水设施', desc: '围栏、出水台与储水罐' },
        { title: '运输与物流条件', desc: '偏远程度与道路通行状况' },
      ],
    },
    bankAccounts: {
      badge: '奉献爱心 · 延续生命',
      title: '资助生命之水……让您的奉献成为延续生命的源泉。',
      subtitle: '所有用于打井与水利项目的爱心善款，均直接汇入本组织官方指定认证的银行账户。',
      officialAccount: '官方指定账户',
      accountHolderLabel: '账户户名：',
      accountNumberLabel: '银行账号：',
      copyBtn: '复制账号',
      copiedBtn: '已复制！',
      copiedSuccess: '银行账号已成功复制至剪贴板。',
      sendReceiptBtn: '通过WhatsApp向组织发送汇款凭证',
      securityTitle: '安全与诚信透明公告：',
      securityText: '上述（阿尔巴拉卡银行 与 喀土穆银行）账户为阿布·艾塔姆孤儿关爱组织唯一认证的水利项目接收账户，绝无其他未经授权的第三方支付方式。',
      accounts: [
        {
          id: 'albaraka',
          bankName: '阿尔巴拉卡银行',
          bankSub: 'Al Baraka Bank Sudan',
          accountNumber: '16019797970001',
          holderName: '阿布·艾塔姆孤儿赞助与关爱组织',
          logoColor: 'from-amber-600 to-amber-700',
        },
        {
          id: 'khartoum',
          bankName: '喀土穆银行',
          bankSub: 'Bank of Khartoum (BOK)',
          accountNumber: '1337031',
          holderName: '阿布·艾塔姆孤儿赞助与关爱组织',
          logoColor: 'from-blue-700 to-sky-800',
        },
      ],
    },
    contact: {
      badge: '竭诚为您服务',
      title: '咨询与联系',
      subtitle: '我们非常荣幸为您提供详细的技术解答、工程预算清单与现场实地执行报告。',
      whatsappTitle: 'WhatsApp 咨询',
      whatsappBadge: '即时在线沟通',
      whatsappDesc: '快速联系以获取工程报告、汇款确认及项目动态。',
      whatsappAction: '发起 WhatsApp 对话',
      mobileTitle: '直拨电话',
      mobileBadge: '官方电话专线',
      mobileDesc: '在常规办公时间内随时接听您的垂询与咨询。',
      mobileCallAction: '立即致电',
      mobileCopyAction: '复制号码',
      locationTitle: '组织总部位置',
      locationBadge: '总部办公室',
      locationDesc: '热忱欢迎海内外爱心人士及合作伙伴莅临我们在喀土穆的总部：',
      hours: '工作时间：周日至周四（早晨至下午）',
      addressLines: [
        '苏丹 – 喀土穆 – 阿拉伯市场 (The Arab Souq)',
        '阿卜杜勒·拉赫曼·阿布·哈萨博大厦 – 1层。',
      ],
    },
    footer: {
      orgName: '阿布·艾塔姆孤儿赞助与关爱组织',
      sloganStatement: '水是生命之源，济贫助水乃是至高无上的大善之举。',
      duaStatement: '祈愿安拉赐福广大善士的崇高善行，并将您的善功载入天秤善念之中。',
      hadithQuote: '圣训记载：先知 ﷺ 说：「最贵重的施舍，莫过于为众人提供饮用水」',
      rightsReserved: '版权所有 · 保留一切权利',
      backToTop: '回到顶部',
      sharePage: '分享此页面',
    },
    shareModal: {
      title: '分享饮用水援助项目页面',
      description: '导人行善者，同享善功。请将此饮水项目分享给亲朋好友及爱心团体，共同造福干旱地区。',
      viaWhatsapp: '通过 WhatsApp 分享',
      viaTelegram: '通过 Telegram 分享',
      linkLabel: '页面直接链接：',
      copyLink: '复制链接',
      copied: '已复制',
      close: '关闭',
    },
    mobileBar: {
      bankAccounts: '银行账户',
      whatsapp: 'WhatsApp',
    },
  },
};
