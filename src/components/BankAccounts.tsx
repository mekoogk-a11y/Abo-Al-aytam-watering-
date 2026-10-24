import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  HeartHandshake, 
  ShieldCheck, 
  MessageSquareShare, 
  Landmark
} from 'lucide-react';
import { CONTACT_INFO } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';

export const BankAccounts: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { t, currentLanguage } = useLanguage();

  const handleCopy = (accountNumber: string, id: string) => {
    const cleanNumber = accountNumber.trim();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(cleanNumber);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = cleanNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const getReceiptTransferMessage = (bankName: string, accountNumber: string) => {
    switch (currentLanguage) {
      case 'en':
        return `Hello, I have made a contribution transfer for the Water Relief Projects via (${bankName}) - Account Number: (${accountNumber}). I am attaching my transfer receipt.`;
      case 'fr':
        return `Bonjour, j'ai effectué un virement de contribution pour les projets d'eau via (${bankName}) - Numéro de compte : (${accountNumber}). Voici le reçu.`;
      case 'tr':
        return `Merhaba, Su Kuyusu Projeleri için (${bankName}) - Hesap No: (${accountNumber}) üzerinden bağış transferimi gerçekleştirdim. Dekontu iletiyorum.`;
      case 'zh':
        return `您好，我已通过（${bankName}）- 账号：（${accountNumber}）完成饮用水项目的爱心捐款，现附上汇款凭证。`;
      default:
        return `السلام عليكم ورحمة الله، قمت بتحويل مساهمة لمشاريع السقيا عبر (${bankName}) - رقم الحساب (${accountNumber})، وأرغب في إرسال إشعار التحويل.`;
    }
  };

  return (
    <section id="bank-accounts" className="py-20 md:py-28 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold mb-4">
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            <span>{t.bankAccounts.badge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t.bankAccounts.title}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {t.bankAccounts.subtitle}
          </p>
        </div>

        {/* 2 Bank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.bankAccounts.accounts.map((bank) => {
            const isCopied = copiedId === bank.id;

            return (
              <div
                key={bank.id}
                className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-sky-100 hover:border-sky-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group text-start"
              >
                {/* Accent top banner */}
                <div 
                  className={`absolute top-0 right-0 left-0 h-2 bg-gradient-to-r ${bank.logoColor}`} 
                />

                <div>
                  {/* Bank Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100 shadow-xs shrink-0">
                        <Landmark className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400 block">{t.bankAccounts.officialAccount}</span>
                        <h3 className="text-2xl font-black text-slate-900">{bank.bankName}</h3>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0">
                      {bank.bankSub}
                    </span>
                  </div>

                  {/* Account Name */}
                  <div className="mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-xs text-slate-500 block mb-0.5">{t.bankAccounts.accountHolderLabel}</span>
                    <span className="text-sm font-bold text-slate-800">{bank.holderName}</span>
                  </div>

                  {/* Account Number Box */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold text-slate-600 mb-2">
                      {t.bankAccounts.accountNumberLabel}
                    </label>

                    <div className="relative flex items-center justify-between p-4 bg-sky-50/70 hover:bg-sky-50 border-2 border-sky-200 rounded-2xl transition-colors">
                      <span 
                        dir="ltr"
                        className="font-mono text-xl sm:text-2xl font-black text-sky-950 tracking-wider select-all"
                      >
                        {bank.accountNumber}
                      </span>

                      <button
                        onClick={() => handleCopy(bank.accountNumber, bank.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs ${
                          isCopied
                            ? 'bg-emerald-600 text-white scale-105'
                            : 'bg-white hover:bg-sky-600 text-sky-800 hover:text-white border border-sky-200 hover:border-transparent'
                        }`}
                        aria-label={`Copy ${bank.bankName} account number`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span>{t.bankAccounts.copiedBtn}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>{t.bankAccounts.copyBtn}</span>
                          </>
                        )}
                      </button>
                    </div>

                    {isCopied && (
                      <p className="text-xs font-semibold text-emerald-600 mt-2 flex items-center gap-1.5 animate-in fade-in">
                        <Check className="w-3.5 h-3.5" />
                        <span>{t.bankAccounts.copiedSuccess}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Direct transfer verification action */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(
                      getReceiptTransferMessage(bank.bankName, bank.accountNumber)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-bold border border-slate-200 hover:border-emerald-200 transition-colors"
                  >
                    <MessageSquareShare className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t.bankAccounts.sendReceiptBtn}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Security & Authenticity Guarantee */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4 text-start">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 shrink-0 mt-0.5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-bold block mb-1">
              {t.bankAccounts.securityTitle}
            </strong>
            {t.bankAccounts.securityText}
          </div>
        </div>

      </div>
    </section>
  );
};
