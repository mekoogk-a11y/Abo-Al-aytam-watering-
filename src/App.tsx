/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WaterProjects } from './components/WaterProjects';
import { GeneralNotes } from './components/GeneralNotes';
import { BankAccounts } from './components/BankAccounts';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { HeartHandshake, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from './data/projectsData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainAppContent() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { t, direction } = useLanguage();

  return (
    <div 
      className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white relative"
      dir={direction}
    >
      {/* Top Banner Notice */}
      <aside aria-label="Official Announcement Bar" className="bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white text-xs py-2 px-4 text-center border-b border-sky-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-medium">
            {t.topBarText}
          </span>
        </div>
      </aside>

      {/* Navigation */}
      <Navbar onShareClick={() => setShareModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: Water Projects (3 projects) */}
        <WaterProjects />

        {/* Section 4: General Notes */}
        <GeneralNotes />

        {/* Section 5: Bank Accounts & Contribution */}
        <BankAccounts />

        {/* Section 6: Contact & Location */}
        <ContactSection />
      </main>

      {/* Section 7: Footer */}
      <Footer onShareClick={() => setShareModalOpen(true)} />

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      {/* Floating Mobile Fast Actions (Sticky Bottom on small screens) */}
      <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden flex items-center gap-2 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-sky-100">
        <a
          href="#bank-accounts"
          className="flex-1 py-3 px-3 rounded-xl bg-sky-600 active:bg-sky-700 text-white text-xs font-black text-center flex items-center justify-center gap-1.5 shadow-xs"
        >
          <HeartHandshake className="w-4 h-4 shrink-0" />
          <span>{t.mobileBar.bankAccounts}</span>
        </a>

        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-1 shadow-xs"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>{t.mobileBar.whatsapp}</span>
        </a>

        <a
          href={`tel:${CONTACT_INFO.mobile}`}
          className="p-3 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center"
          aria-label="Call"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
