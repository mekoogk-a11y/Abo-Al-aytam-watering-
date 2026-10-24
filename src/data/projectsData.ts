import { WaterProject, BankAccount, ContactInfo } from '../types';

export const ORGANIZATION_NAME = 'منظمة أبو الأيتام لكفالة ورعاية الأيتام';
export const CAMPAIGN_TITLE = 'مشاريع السقيا بمنظمة أبو الأيتام لكفالة ورعاية الأيتام';
export const SLOGAN = 'الماء أساس الحياة';

export const WATER_PROJECTS: WaterProject[] = [
  {
    id: 'project-1',
    title: 'حفر بئر جديد متكامل',
    subtitle: 'مشروع استراتيجي مستدام يخدم قرية أو مجتمعاً محلياً بالكامل',
    estimatedCostUSD: 13000,
    badge: 'المشروع الأول · الأكثر استدامة ونفعاً',
    solarIncluded: true,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1000&q=80',
    features: [
      'حفر بئر جديد لتوفير مياه الشرب النقية.',
      'تركيب منظومة طاقة شمسية متكاملة لتشغيل البئر وضخ المياه.',
      'إنشاء سور محكم لحماية البئر ومرافقه ومعداته.',
      'إنشاء صهاريج مياه عالية السعة لتجميع وتخزين المياه النقية.'
    ]
  },
  {
    id: 'project-2',
    title: 'صيانة بئر وإضافة الطاقة الشمسية',
    subtitle: 'إعادة إحياء بئر متعطل وترقيته ليعمل بالطاقة النظيفة والمتجددة',
    estimatedCostUSD: 4500,
    badge: 'المشروع الثاني · تحديث بالطاقة الشمسية',
    solarIncluded: true,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    features: [
      'صيانة البئر القائم ومعالجة الأعطال الفنية والميكانيكية التي تؤثر في تشغيله.',
      'تركيب منظومة طاقة شمسية لتشغيل البئر وضخ المياه بكفاءة واستقلالية تامة.'
    ]
  },
  {
    id: 'project-3',
    title: 'صيانة بئر قائم فقط',
    subtitle: 'معالجة الأعطال وإعادة تدفق المياه الصالحة للشرب للأهالي',
    estimatedCostUSD: 2800,
    badge: 'المشروع الثالث · صيانة فنية وإعادة تأهيل',
    solarIncluded: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    features: [
      'إجراء أعمال الصيانة اللازمة للبئر القائم.',
      'معالجة الأعطال الفنية وفقاً لحالة البئر.',
      'إعادة البئر إلى الخدمة بحسب نتائج الفحص الفني الميداني.'
    ],
    notes: 'تنبيه: لا يشمل المشروع الثالث إضافة منظومة طاقة شمسية.'
  }
];

export const GENERAL_NOTES = [
  'جميع المبالغ الواردة في هذه الدراسة تقديرية وقابلة للتغيير وفقاً لظروف التنفيذ.',
  'تختلف التكلفة بحسب موقع المشروع وعمق البئر وطبيعة التربة وحالة المعدات وحجم منظومة الطاقة الشمسية وتكاليف الإنشاءات والنقل.',
  'يُحدد نطاق العمل النهائي والتكلفة الفعلية بعد المعاينة الفنية وإعداد المقايسة التفصيلية.'
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'albaraka',
    bankName: 'بنك البركة',
    accountNumber: '16019797970001',
    currency: 'الجنيه السوداني / العملات المعتمدة',
    holderName: 'منظمة أبو الأيتام لكفالة ورعاية الأيتام',
    logoColor: 'from-amber-600 to-amber-700',
    branch: 'الفرع الرئيسي'
  },
  {
    id: 'khartoum',
    bankName: 'بنك الخرطوم',
    accountNumber: '1337031',
    currency: 'الجنيه السوداني / العملات المعتمدة (بنكك)',
    holderName: 'منظمة أبو الأيتام لكفالة ورعاية الأيتام',
    logoColor: 'from-blue-700 to-sky-800',
    branch: 'الفرع الرئيسي'
  }
];

export const CONTACT_INFO: ContactInfo = {
  whatsapp: '+249 96 602 0666',
  whatsappLink: 'https://wa.me/249966020666',
  mobile: '0123843772',
  addressTitle: 'موقع المنظمة',
  addressDetails: [
    'السودان – الخرطوم – السوق العربي',
    'عمارة عبد الرحمن أبو حسبو – الطابق الأول.'
  ]
};
