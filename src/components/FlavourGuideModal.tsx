import { X, Sparkles, Check, Info } from 'lucide-react';
import { FLAVOUR_MENU } from '../data/bakeryData';

interface FlavourGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFlavour?: (flavourName: string) => void;
}

export default function FlavourGuideModal({ isOpen, onClose, onSelectFlavour }: FlavourGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flavour-guide-title"
    >
      <div 
        className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#E8DFD8] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8DFD8] bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9C6D58]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Chef's Signature Palette</span>
            </div>
            <h3 id="flavour-guide-title" className="font-serif text-xl sm:text-2xl font-bold text-[#2D1B14]">
              Flavours & Artisanal Fillings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F2ECE4] text-[#7A6155] hover:text-[#2D1B14] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-sm text-[#5A4339] leading-relaxed">
            All sponges are infused with European dairy butter and baked from raw scratch ingredients. You can mix and match sponges and fillings for multi-tiered orders.
          </p>

          <div className="grid grid-cols-1 gap-3">
            {FLAVOUR_MENU.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E8DFD8] hover:border-[#C5A059] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-base text-[#2D1B14]">
                      {item.name}
                    </span>
                    {item.popular && (
                      <span className="text-[11px] font-semibold text-[#A67C52] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E8DFD8]">
                        Popular
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-[#9C6D58] block">{item.type}</span>
                  <p className="text-xs text-[#7A6155] leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>

                {onSelectFlavour && (
                  <button
                    onClick={() => {
                      onSelectFlavour(item.name);
                      onClose();
                    }}
                    className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E0D5CC] hover:bg-[#FAF7F2] text-[#2D1B14] hover:border-[#A67C52] transition-colors self-start sm:self-center"
                  >
                    Select this Flavour
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Dietary Notes */}
          <div className="mt-6 p-4 rounded-xl bg-[#F4EBE3] border border-[#E3D4C7] flex items-start gap-3 text-xs text-[#5A4339]">
            <Info className="w-4 h-4 text-[#A67C52] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-[#2D1B14]">Dietary & Allergen Guidance</p>
              <p>
                All our items are prepared in a boutique kitchen that handles dairy, eggs, gluten, and tree nuts. We gladly cater to vegetarian diets and alcohol-free requirements upon request. Please specify any allergy requirements when enquiring.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E8DFD8] bg-[#FAF7F2] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#2D1B14] hover:bg-[#3D261C] transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
