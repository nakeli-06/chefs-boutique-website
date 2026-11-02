import { useState } from 'react';
import { MessageCircle, BookOpen, Clock, Users, ArrowUpRight } from 'lucide-react';
import { SIGNATURE_CREATIONS, BUSINESS_INFO } from '../data/bakeryData';
import FlavourGuideModal from './FlavourGuideModal';

export default function SignatureCreations() {
  const [activeTab, setActiveTab] = useState<'all' | 'cakes' | 'cupcakes' | 'dessert-tables' | 'confectionery'>('all');
  const [isFlavourModalOpen, setIsFlavourModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'cakes', label: 'Celebration Cakes' },
    { id: 'cupcakes', label: 'Gourmet Cupcakes' },
    { id: 'dessert-tables', label: 'Dessert Tables' },
    { id: 'confectionery', label: 'Fine Treats' },
  ] as const;

  const filteredCreations = activeTab === 'all'
    ? SIGNATURE_CREATIONS
    : SIGNATURE_CREATIONS.filter((item) => item.category === activeTab);

  const handleProductWhatsApp = (productName: string, category: string) => {
    const text = encodeURIComponent(
      `Hello Chef's Boutique! I am interested in ordering the "${productName}" (${category}) from your boutique in eMalahleni. Could you please share availability and pricing details?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="creations" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C6D58] block mb-3">
              Curated Pastry Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B14] tracking-tight">
              Signature Confections
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFlavourModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#2D1B14] bg-white border border-[#E0D5CC] hover:border-[#C5A059] shadow-2xs hover:bg-[#FAF7F2] transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#A67C52]" />
              <span>Explore Flavour Guide</span>
            </button>
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#EFE8E1] rounded-2xl w-fit max-w-full overflow-x-auto mb-10 border border-[#E0D5CC]/60">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-[#2D1B14] shadow-xs font-semibold'
                  : 'text-[#6C554B] hover:text-[#2D1B14] hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCreations.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8DFD8] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8E1]">
                  {/* REPLACE: Signature Creation Image (${item.name}) */}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#A67C52] border border-[#E8DFD8] shadow-2xs">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Clean unboxed metadata with aligned starting price */}
                  <div className="flex items-center justify-between text-xs text-[#9C6D58] mb-2 font-medium">
                    <span className="uppercase tracking-wider text-[11px] font-semibold text-[#8C5D48]">{item.categoryLabel}</span>
                    <span className="font-semibold text-[#2D1B14] tabular-nums bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E8DFD8]">
                      {item.startingPrice}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2D1B14] group-hover:text-[#9C6D58] transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#7A6155] leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Specs Pill List */}
                  <div className="space-y-1.5 text-[11px] text-[#6C554B] border-t border-[#F2ECE4] pt-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#A67C52] shrink-0" />
                      <span>{item.leadTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#A67C52] shrink-0" />
                      <span>{item.servings}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleProductWhatsApp(item.name, item.categoryLabel)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#2D1B14] bg-[#FAF7F2] hover:bg-[#25D366] hover:text-white border border-[#E0D5CC] hover:border-[#25D366] transition-colors duration-200 cursor-pointer group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover/btn:text-white group-hover/btn:fill-white transition-colors" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Flavour Guide Modal */}
      <FlavourGuideModal
        isOpen={isFlavourModalOpen}
        onClose={() => setIsFlavourModalOpen(false)}
      />
    </section>
  );
}
