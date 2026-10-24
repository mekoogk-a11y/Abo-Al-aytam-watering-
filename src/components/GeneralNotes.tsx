import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const GeneralNotes: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="notes" className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/70 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Box Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          
          {/* Subtle water-themed accent line */}
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-emerald-500" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-50 text-sky-700 border border-sky-100 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-start">
                <span className="text-xs font-bold text-sky-600 tracking-wider block">{t.notes.tag}</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">{t.notes.title}</h3>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold self-start md:self-auto">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t.notes.badge}</span>
            </div>
          </div>

          {/* Notes items as requested verbatim */}
          <div className="mt-8 space-y-5">
            {t.notes.items.map((note, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-sky-50/40 border border-slate-100 transition-colors text-start"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <div className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                  {note}
                </div>
              </div>
            ))}
          </div>

          {/* Technical factors pill grid */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs text-slate-600">
            {t.notes.factors.map((factor, fIdx) => (
              <div key={fIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-800 block mb-0.5">{factor.title}</span>
                <span>{factor.desc}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
