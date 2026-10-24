import React from 'react';
import { Droplet, Sun, ArrowDown, HeartHandshake, ShieldCheck } from 'lucide-react';
import { OrgLogo } from './OrgLogo';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28 bg-gradient-to-b from-sky-50 via-slate-50/60 to-white">
      {/* Decorative ambient water ripples and glow */}
      <div className="absolute top-0 inset-x-0 h-96 water-gradient pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Original Logo Section at top */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <OrgLogo size="hero" />
        </div>

        {/* Bismillah */}
        <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100/70 border border-sky-200/80 text-sky-900 text-sm md:text-base font-semibold shadow-xs">
          <span>{t.hero.bismillah}</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-3 mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            {t.hero.title}
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-700 mt-2">
              {t.hero.orgSubtitle}
            </span>
          </h1>

          {/* Slogan */}
          <div className="pt-2">
            <span className="inline-block text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 via-sky-600 to-blue-800">
              {t.hero.slogan}
            </span>
          </div>
        </div>

        {/* Subtitle / Mission Statement */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-10">
          {t.hero.description}
        </p>

        {/* Two Required Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          {/* Button 1: استعرض مشاريع السقيا -> #projects */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-sky-900 font-extrabold text-base sm:text-lg border-2 border-sky-300 hover:border-sky-500 shadow-md hover:shadow-lg transition-all active:scale-98"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowDown className="w-5 h-5 text-sky-600 animate-bounce" />
          </a>

          {/* Button 2: ساهم في مشاريع السقيا -> #bank-accounts */}
          <a
            href="#bank-accounts"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 hover:from-sky-700 hover:to-blue-900 text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl shadow-sky-600/25 transition-all active:scale-98"
          >
            <HeartHandshake className="w-5 h-5 text-amber-300" />
            <span>{t.hero.contributeBtn}</span>
          </a>
        </div>

        {/* Core Pillars preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 text-start">
          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-sky-100 shadow-xs flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 shrink-0">
              <Droplet className="w-6 h-6 fill-sky-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{t.hero.pillar1Title}</h3>
              <p className="text-xs text-slate-600 mt-0.5">{t.hero.pillar1Desc}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-emerald-100 shadow-xs flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{t.hero.pillar2Title}</h3>
              <p className="text-xs text-slate-600 mt-0.5">{t.hero.pillar2Desc}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-blue-100 shadow-xs flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{t.hero.pillar3Title}</h3>
              <p className="text-xs text-slate-600 mt-0.5">{t.hero.pillar3Desc}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
