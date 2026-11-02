import { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/bakeryData';
import { GalleryItem } from '../types/bakery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Pastry Works' },
    { id: 'cakes', label: 'Celebration Cakes' },
    { id: 'cupcakes', label: 'Gourmet Cupcakes' },
    { id: 'dessert-tables', label: 'Dessert Tables' },
    { id: 'confectionery', label: 'Confectionery' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, filteredItems]);

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setActiveItem(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveItem(filteredItems[prevIndex]);
    }
  };

  const handleInquireOnDesign = (item: GalleryItem) => {
    const text = encodeURIComponent(
      `Hello Chef's Boutique! I saw your gallery piece "${item.title}" (${item.occasion}) and I would love to order something similar for an event in eMalahleni. Can we discuss dates & custom options?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F6EFE9] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C6D58] block mb-3">
            Portfolio of Celebrations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B14] mb-4 tracking-tight">
            The Gallery of Past Creations
          </h2>
          <p className="text-sm sm:text-base text-[#5A4339]">
            Every confection tells an intimate story. Browse through recent bespoke creations handcrafted for our patrons across eMalahleni and Highveld estates.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-1.5 p-1.5 bg-[#FAF7F2] rounded-2xl w-fit mx-auto mb-12 border border-[#E0D5CC]/80 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-white text-[#2D1B14] shadow-xs font-semibold'
                  : 'text-[#6C554B] hover:text-[#2D1B14]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8DFD8] shadow-xs hover:shadow-xl cursor-pointer transition-all duration-300"
            >
              <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#EFE8E1]">
                {/* REPLACE: Gallery Image (${item.title}) */}
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Glassmorphic hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B14]/85 via-[#2D1B14]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F3E5AB] mb-1">
                  {item.categoryLabel} · {item.occasion}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-200 line-clamp-2 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                  <Maximize2 className="w-3.5 h-3.5 text-[#F3E5AB]" />
                  <span>Click to view & order design</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-[#FAF7F2] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#E8DFD8] grid grid-cols-1 md:grid-cols-12 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev Arrow */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-[#2D1B14] hover:bg-white shadow-md transition-colors"
              aria-label="Previous Creation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right/Next Arrow */}
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 md:right-[calc(41.666%+1rem)] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-[#2D1B14] hover:bg-white shadow-md transition-colors"
              aria-label="Next Creation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Preview Column */}
            <div className="md:col-span-7 bg-[#2D1B14] flex items-center justify-center aspect-[4/3] md:aspect-auto">
              <img
                src={activeItem.image}
                alt={activeItem.imageAlt}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Details Column */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9C6D58]">
                  <span>{activeItem.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeItem.occasion}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2D1B14]">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-[#5A4339] leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] space-y-1 text-xs text-[#7A6155]">
                  <p className="font-semibold text-[#2D1B14]">Custom Orders & Sizing</p>
                  <p>
                    Each creation can be customized in terms of tier height, flavour profiles, and custom sugar flower colourways to harmonize with your event.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-[#E8DFD8] mt-6">
                <button
                  onClick={() => handleInquireOnDesign(activeItem)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire for this Design on WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-[#7A6155] mt-2">
                  Opens WhatsApp with design details pre-filled
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
