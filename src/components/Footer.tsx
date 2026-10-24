import React from 'react';
import { Droplet, ChevronUp, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onShareClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShareClick }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-sky-600">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Water droplet icon badge */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 p-0.5 shadow-lg flex items-center justify-center">
          <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
            <Droplet className="w-8 h-8 text-sky-400 fill-sky-400" />
          </div>
        </div>

        {/* Verbatim Organization Name */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
          {t.footer.orgName}
        </h3>

        {/* Slogan Statement */}
        <p className="text-lg sm:text-xl font-bold text-sky-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          {t.footer.sloganStatement}
        </p>

        {/* Dua / Statement 2 */}
        <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed bg-slate-800/60 py-4 px-6 rounded-2xl border border-slate-700/60">
          {t.footer.duaStatement}
        </p>

        {/* Hadith citation callout */}
        <div className="mb-10 text-xs text-sky-400/90 font-medium">
          {t.footer.hadithQuote}
        </div>

        {/* Quick Links & Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400 pt-6 border-t border-slate-800">
          <a href="#hero" className="hover:text-white transition-colors">{t.nav.home}</a>
          <span>•</span>
          <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
          <span>•</span>
          <a href="#notes" className="hover:text-white transition-colors">{t.nav.notes}</a>
          <span>•</span>
          <a href="#bank-accounts" className="hover:text-white transition-colors">{t.nav.bankAccounts}</a>
          <span>•</span>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          <span>•</span>
          <button 
            onClick={onShareClick} 
            className="hover:text-sky-400 inline-flex items-center gap-1 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{t.footer.sharePage}</span>
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            {t.footer.rightsReserved} © {new Date().getFullYear()} {t.footer.orgName}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Elegant Gold Developer & Organization Rights Credit */}
        <div className="mt-8 pt-6 border-t border-amber-500/20">
          <div className="inline-block py-2.5 px-5 rounded-2xl bg-amber-500/5 border border-amber-400/20 backdrop-blur-xs shadow-xs">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 leading-relaxed text-center">
              تم تصميم وبرمجة الموقع بواسطة{' '}
              <span className="font-bold text-amber-300">كمال جعفر زكريا</span>{' '}
              واتساب{' '}
              <a 
                href="https://wa.me/249919980435" 
                target="_blank" 
                rel="noopener noreferrer"
                dir="ltr"
                className="font-mono font-bold text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-amber-400/50 transition-colors inline-block mx-1"
              >
                00249919980435
              </a>
              . جميع الحقوق محفوظة لمنظمة ابو الايتام لرعاية وكفالة الايتام.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
