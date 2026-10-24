import React, { useState } from 'react';
import { Droplets, HeartHandshake, Share2, Menu, X } from 'lucide-react';
import { OrgLogo } from './OrgLogo';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onShareClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShareClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, direction } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.notes, href: '#notes' },
    { label: t.nav.bankAccounts, href: '#bank-accounts' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <OrgLogo size="sm" />
            <div className="flex flex-col text-start">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                {t.orgName}
              </span>
              <span className="text-[11px] text-sky-700 font-medium flex items-center gap-1">
                <Droplets className="w-3 h-3 text-sky-500 fill-sky-500 shrink-0" />
                <span>{t.subHeader}</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50/70 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons & Language Selector */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <LanguageSelector variant="navbar" />

            <button
              onClick={onShareClick}
              title={t.nav.share}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-sky-600 hover:bg-sky-50/50 hover:border-sky-200 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden xl:inline">{t.nav.share}</span>
            </button>

            <a
              href="#bank-accounts"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <HeartHandshake className="w-4 h-4 shrink-0" />
              <span>{t.nav.contributeNow}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSelector variant="navbar" />

            <button
              onClick={onShareClick}
              aria-label={t.nav.share}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="القائمة / Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-sky-100 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors text-start"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Language Selector inside drawer */}
          <div className="pt-2 border-t border-slate-100">
            <LanguageSelector variant="mobile" />
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#bank-accounts"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white font-bold text-center shadow-xs"
            >
              <HeartHandshake className="w-5 h-5 shrink-0" />
              <span>{t.hero.contributeBtn}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
