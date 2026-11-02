import { MessageCircle, Sparkles, ArrowRight, ShieldCheck, Truck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function Hero() {
  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent("Hello Chef's Boutique! I would like to enquire about ordering a custom cake / cupcakes for an upcoming event in eMalahleni.");
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6EFE9] to-[#FAF7F2]">
      {/* Subtle ambient decorative backdrop glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8C5B0]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Elegant metadata kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9C6D58] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Bespoke Patisserie</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A67C52]">eMalahleni</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2D1B14] leading-[1.12] mb-6 max-w-2xl text-balance">
              Artisanal cakes & luxury treats, baked to celebrate{' '}
              <span className="italic font-display font-medium text-[#9C6D58]">
                life’s sweetest chapters.
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-[#5A4339] leading-relaxed mb-8 max-w-xl font-light">
              From sculpted wedding tiers with 24k edible gold leaf to velvety handcrafted cupcakes and opulent dessert tables. Crafted to order in our Witbank boutique with genuine Belgian chocolate and pure Madagascar vanilla.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleWhatsAppOrder}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                aria-label="Order ahead via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </button>

              <a
                href="#creations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#2D1B14] bg-white hover:bg-[#F2ECE4] border border-[#E0D5CC] shadow-xs hover:border-[#C5A059] transition-all duration-200"
              >
                <span>Explore Creations</span>
                <ArrowRight className="w-4 h-4 text-[#A67C52]" />
              </a>
            </div>

            {/* Quiet Trust Signals */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#7A6155] border-t border-[#E8DFD8] pt-6 w-full">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C5A059]" />
                <span>100% Scratch-Baked Daily</span>
              </div>
              <span className="hidden sm:inline text-[#D8BDB0]" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C5A059]" />
                <span>Doorstep Delivery Across eMalahleni</span>
              </div>
              <span className="hidden sm:inline text-[#D8BDB0]" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Pre-Order via WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative backdrop frame */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#E8C5B0]/40 to-[#D4AF37]/20 rounded-3xl transform rotate-2 -z-10" />

              {/* Main Luxury Cake Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[4/5] bg-[#EFE8E1]">
                {/* REPLACE: Hero Cake Showcase Image */}
                <img
                  src="/src/assets/images/hero_luxury_celebration_cake_1793581513968.jpg"
                  alt="Chef's Boutique artisanal multi-tier celebration cake on marble pedestal"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B14]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-sm sm:text-base font-bold text-[#2D1B14]">
                        The Signature Rose & Gold Tier
                      </p>
                      <p className="text-xs text-[#7A6155]">
                        Swiss Meringue Buttercream · 24K Gold Leaf
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#A67C52] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E8DFD8]">
                      Custom Order
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Little Badge (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-xl shadow-lg border border-[#E8DFD8] p-3 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-5 h-5 fill-[#D4AF37]/30" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2D1B14]">95 Mandela St</p>
                  <p className="text-[11px] text-[#7A6155]">eMalahleni Boutique</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
