import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../types';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'mobile';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'navbar' }) => {
  const { currentLanguage, currentOption, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className="pt-2 pb-2">
        <div className="text-xs font-bold text-slate-500 mb-2 flex items-center gap-1.5 px-1">
          <Globe className="w-3.5 h-3.5 text-sky-600" />
          <span>اختر اللغة / Select Language:</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {availableLanguages.map((lang) => {
            const isSelected = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? 'bg-sky-50 text-sky-800 border-sky-300 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </span>
                {isSelected && <Check className="w-3.5 h-3.5 text-sky-600" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-right" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-sky-50/80 border border-slate-200 hover:border-sky-200 transition-all cursor-pointer shadow-xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="تغيير لغة الموقع / Change Language"
      >
        <span className="text-base leading-none">{currentOption.flag}</span>
        <span className="font-semibold text-slate-800 hidden md:inline">{currentOption.nativeName}</span>
        <Globe className="w-3.5 h-3.5 text-sky-600" />
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 sm:right-auto sm:left-0 rtl:right-0 rtl:left-auto mt-2 w-48 rounded-2xl bg-white shadow-xl border border-sky-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 border-b border-slate-100">
            اللغة / Language
          </div>
          <div className="p-1 space-y-0.5">
            {availableLanguages.map((lang) => {
              const isSelected = currentLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-right ${
                    isSelected
                      ? 'bg-sky-50 text-sky-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <div className="flex flex-col text-start">
                      <span className="text-xs">{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-400">{lang.name}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-sky-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
