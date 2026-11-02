import { Award, HeartHandshake, Sparkles, ChefHat } from 'lucide-react';

export default function OurStory() {
  const pillars = [
    {
      icon: ChefHat,
      title: "Artisanal Technique",
      description: "French patisserie discipline combined with vibrant, modern celebration cake artistry. Never premixes or shortcuts.",
    },
    {
      icon: Sparkles,
      title: "Finest Natural Ingredients",
      description: "Pure farmhouse dairy butter, Callebaut Belgian chocolate, fragrant Bourbon vanilla pods, and organic fruit compotes.",
    },
    {
      icon: HeartHandshake,
      title: "Tailored to Your Vision",
      description: "Every celebration is unique. We consult directly with you on colour palettes, flavours, and themes via WhatsApp.",
    },
    {
      icon: Award,
      title: "eMalahleni Proud",
      description: "Crafted locally on Mandela Street, serving cherished weddings, birthdays, and milestones across the Mpumalanga Highveld.",
    },
  ];

  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#EFE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C6D58] block mb-3">
            Our Heritage & Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B14] mb-6 tracking-tight">
            From our eMalahleni studio to your table.
          </h2>
          <p className="text-base text-[#5A4339] leading-relaxed">
            At Chef’s Boutique — Baking Creations, baking is not merely a recipe; it is an intimate expression of celebration, texture, and sensory delight.
          </p>
        </div>

        {/* Story Grid: Editorial narrative + imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-6 space-y-5 text-[#5A4339] text-base leading-relaxed">
            <p className="font-display text-xl sm:text-2xl text-[#2D1B14] font-medium italic border-l-2 border-[#C5A059] pl-4 my-4">
              "We believe that every milestone deserves a centerpiece that looks like a work of gallery art and tastes like an unforgettable dream."
            </p>
            <p>
              Founded in the heart of eMalahleni (Witbank), Chef’s Boutique was born out of an uncompromising obsession with classical confectionery. We recognized that discerning hosts in our region longed for patisserie-grade desserts without having to travel to Pretoria or Johannesburg.
            </p>
            <p>
              Whether you are planning an intimate bridal shower in Reyno Ridge, an estate wedding in Bankenveld, or a luxury birthday celebration, we collaborate with you step-by-step. From mood boards and flavour pairings to careful delivery and presentation, our kitchen treats every creation with devout care.
            </p>
          </div>

          {/* Right: Dual Image Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-[#EFE8E1]">
                {/* REPLACE: Bakery Craft Detail 1 */}
                <img
                  src="/src/assets/images/signature_artisan_cupcakes_1793581515171.jpg"
                  alt="Handcrafted gourmet cupcakes with rose gold piping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8DFD8]">
                <p className="font-serif font-bold text-[#2D1B14] text-sm">Scratch-Baked</p>
                <p className="text-xs text-[#7A6155]">Fresh on the morning of your event</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-xl bg-white border border-[#E8DFD8]">
                <p className="font-serif font-bold text-[#2D1B14] text-sm">Real Belgian Chocolate</p>
                <p className="text-xs text-[#7A6155]">Rich Callebaut couverture ganache</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-[#EFE8E1]">
                {/* REPLACE: Bakery Craft Detail 2 */}
                <img
                  src="/src/assets/images/signature_wedding_cake_1793581514453.jpg"
                  alt="Chef sculpting wedding cake tiers with sugar florals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E8DFD8] shadow-xs hover:border-[#C5A059] hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center text-[#A67C52] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2D1B14] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6155] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
