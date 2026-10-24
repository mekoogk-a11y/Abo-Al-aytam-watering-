import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Sun, 
  Wrench, 
  Droplet, 
  Layers, 
  HeartHandshake,
  MessageCircle,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';

export const WaterProjects: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Droplet className="w-6 h-6 text-sky-600 fill-sky-600" />;
      case 1:
        return <Sun className="w-6 h-6 text-amber-500" />;
      case 2:
        return <Wrench className="w-6 h-6 text-blue-600" />;
      default:
        return <Droplet className="w-6 h-6 text-sky-600" />;
    }
  };

  const projectImages = [
    'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  ];

  const getWhatsAppInquiryMessage = (projectTitle: string, cost: number) => {
    switch (currentLanguage) {
      case 'en':
        return `Hello, I would like to inquire about contributing to (${projectTitle}) with an estimated cost of $${cost.toLocaleString()} at Abu Al-Aytam Organization.`;
      case 'fr':
        return `Bonjour, je souhaite me renseigner pour contribuer au projet (${projectTitle}) d'un coût estimé à ${cost.toLocaleString()} $ auprès de l'Organisation Abu Al-Aytam.`;
      case 'tr':
        return `Merhaba, Abu Al-Aytam Derneği bünyesindeki (${projectTitle}) - tahmini ${cost.toLocaleString()} $ maliyetli proje hakkında bilgi ve bağışta bulunmak istiyorum.`;
      case 'zh':
        return `您好，我想咨询并资助阿布·艾塔姆组织的（${projectTitle}）项目，预估费用为${cost.toLocaleString()}美元。`;
      default:
        return `السلام عليكم ورحمة الله، أود الاستفسار والمساهمة في (${projectTitle}) بتكلفة تقديرية ${cost.toLocaleString()}$ لدى منظمة أبو الأيتام.`;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3">
            <Droplet className="w-4 h-4 fill-sky-500 text-sky-500" />
            <span>{t.projects.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t.projects.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.projects.items.map((project, index: number) => {
            const isFeatured = index === 0;
            const image = projectImages[index] || projectImages[0];

            return (
              <div
                key={project.id}
                className={`flex flex-col rounded-3xl overflow-hidden transition-all duration-300 relative ${
                  isFeatured 
                    ? 'border-2 border-sky-500 shadow-xl shadow-sky-900/10 ring-4 ring-sky-500/10' 
                    : 'border border-slate-200 shadow-sm hover:shadow-lg hover:border-sky-300'
                } bg-white`}
              >
                {/* Featured Ribbon */}
                {isFeatured && (
                  <div className="bg-sky-600 text-white text-xs font-black py-1.5 px-4 text-center tracking-wide uppercase">
                    {t.projects.featuredBadge}
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 end-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm">
                      {getProjectIcon(index)}
                      <span>{project.tag}</span>
                    </span>
                  </div>

                  {/* Title on Image bottom */}
                  <div className="absolute bottom-4 end-4 start-4 text-white text-start">
                    <div className="text-xs font-semibold text-sky-300 mb-1">{project.badge}</div>
                    <h3 className="text-xl sm:text-2xl font-black leading-snug">{project.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-start">
                  <div>
                    {/* Estimated Cost Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                      <div className="text-xs font-bold text-slate-500 mb-1">{t.projects.costLabel}</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-sky-800 font-mono">
                          {project.cost.toLocaleString('en-US')}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-slate-700">{t.projects.usdLabel}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {t.projects.costDisclaimer}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 mb-6">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-100">
                        <Layers className="w-4 h-4 text-sky-600" />
                        <span>{t.projects.includesLabel}</span>
                      </div>

                      <ul className="space-y-3">
                        {project.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Note alert for Project 3 if solar is excluded */}
                    {project.notes && (
                      <div className="mb-6 p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 flex items-start gap-2.5 text-xs font-medium leading-relaxed">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>{project.notes}</div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <a
                      href="#bank-accounts"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-xs ${
                        isFeatured
                          ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <HeartHandshake className="w-4 h-4 shrink-0" />
                      <span>{t.projects.contributeBtn}</span>
                    </a>

                    <a
                      href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
                        getWhatsAppInquiryMessage(project.title, project.cost)
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>{t.projects.inquireWhatsappBtn}</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Micro Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-sky-50/60 border border-sky-100 text-center max-w-2xl mx-auto">
          <p className="text-xs text-sky-900 font-medium leading-relaxed">
            {t.projects.bottomTip}
          </p>
        </div>

      </div>
    </section>
  );
};
