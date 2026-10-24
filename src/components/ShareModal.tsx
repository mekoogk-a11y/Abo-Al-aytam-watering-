import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share2, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `«${t.hero.title} - ${t.orgName}»\n${t.hero.slogan}\n${t.hero.description}\n`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareViaWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${currentUrl}`)}`;
    window.open(url, '_blank');
  };

  const shareViaTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 text-start border border-slate-100 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-lg">
              {t.shareModal.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
          {t.shareModal.description}
        </p>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={shareViaWhatsApp}
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm border border-emerald-200 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>{t.shareModal.viaWhatsapp}</span>
          </button>

          <button
            onClick={shareViaTelegram}
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-sm border border-sky-200 transition-colors cursor-pointer"
          >
            <Send className="w-5 h-5 text-sky-600" />
            <span>{t.shareModal.viaTelegram}</span>
          </button>
        </div>

        {/* Copy Link box */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-2">
            {t.shareModal.linkLabel}
          </label>
          <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-transparent border-none text-xs text-slate-600 px-2 focus:outline-hidden truncate font-mono text-left"
              dir="ltr"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-sky-600 hover:bg-sky-700 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.shareModal.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{t.shareModal.copyLink}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
          >
            {t.shareModal.close}
          </button>
        </div>

      </div>
    </div>
  );
};
