import { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Chef's Boutique! I am viewing your website and would like to enquire about ordering custom cakes.");
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble (Desktop only to respect mobile 15% sticky constraint) */}
      {showTooltip && (
        <div className="hidden sm:block mb-3 max-w-xs bg-white rounded-2xl p-4 shadow-xl border border-[#E8DFD8] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 right-2.5 text-[#A67C52] hover:text-[#2D1B14] p-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-bold text-[#2D1B14]">Chef's Boutique WhatsApp</span>
          </div>
          <p className="text-xs text-[#5A4339] leading-relaxed pr-3">
            Planning a celebration in eMalahleni? Chat directly with our pastry team for custom cake quotes!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        aria-label="Chat with Chef's Boutique on WhatsApp (+27 74 027 4842)"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="font-semibold text-xs tracking-wide hidden sm:inline">
          Order on WhatsApp
        </span>
      </button>
    </div>
  );
}
