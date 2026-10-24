import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  Clock,
  Building
} from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t } = useLanguage();

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.mobile);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3">
            <MessageCircle className="w-4 h-4 text-sky-600" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-gradient-to-b from-emerald-50/50 to-white rounded-3xl p-7 border-2 border-emerald-100 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-start">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 fill-emerald-500 text-emerald-100" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                {t.contact.whatsappBadge}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{t.contact.whatsappTitle}</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                {t.contact.whatsappDesc}
              </p>
              
              <div dir="ltr" className="font-mono text-xl font-black text-slate-900 mb-4 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 text-center select-all">
                {CONTACT_INFO.whatsapp}
              </div>
            </div>

            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <span>{t.contact.whatsappAction}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Mobile Call */}
          <div className="bg-gradient-to-b from-sky-50/50 to-white rounded-3xl p-7 border-2 border-sky-100 hover:border-sky-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-start">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
                {t.contact.mobileBadge}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{t.contact.mobileTitle}</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                {t.contact.mobileDesc}
              </p>

              <div dir="ltr" className="font-mono text-xl font-black text-slate-900 mb-4 bg-sky-50/60 p-3 rounded-xl border border-sky-100 text-center select-all">
                {CONTACT_INFO.mobile}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={`tel:${CONTACT_INFO.mobile}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>{t.contact.mobileCallAction}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                title={t.contact.mobileCopyAction}
                className="p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-gradient-to-b from-blue-50/50 to-white rounded-3xl p-7 border-2 border-blue-100 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-start">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                {t.contact.locationBadge}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{t.contact.locationTitle}</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                {t.contact.locationDesc}
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2 mb-4">
                {t.contact.addressLines.map((line, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-800 text-sm font-bold">
                    <Building className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50 text-blue-900 text-xs font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{t.contact.hours}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
