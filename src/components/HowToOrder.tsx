import { Calendar, MessageCircle, Truck, HelpCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function HowToOrder() {
  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: "Choose Your Confection & Date",
      description: "Explore our signature cake styles, cupcake boxes, or dessert tables. Check your celebration calendar and plan at least 3–5 days ahead for custom cakes.",
    },
    {
      step: "02",
      icon: MessageCircle,
      title: "WhatsApp Your Details & Inspo",
      description: "Send us a message at +27 74 027 4842 with your guest count, preferred flavour, and any colour palettes or Pinterest references. We'll provide a transparent quote.",
    },
    {
      step: "03",
      icon: Truck,
      title: "Fresh Baked & Delivered or Collected",
      description: "We scratch-bake on the morning of your event. Collect at 95 Mandela St, Ext 10, or relax while our temperature-controlled driver delivers across eMalahleni.",
    },
  ];

  const faqs = [
    {
      q: "How much advance notice is required?",
      a: "For custom celebration cakes and tiered wedding cakes, we recommend 3–7 days notice. Cupcake boxes and treats can often be accommodated within 24–48 hours depending on studio capacity.",
    },
    {
      q: "Do you require a deposit?",
      a: "Yes, a 50% booking deposit via EFT or card secures your date in our baking calendar. The remaining balance is payable upon collection or before delivery dispatch.",
    },
    {
      q: "Where do you deliver in eMalahleni (Witbank)?",
      a: "We deliver throughout eMalahleni, including Witbank Central, Reyno Ridge, Die Heuwel, Modelpark, Del Judor, Bankenveld, Tasbet Park, and Highveld estates.",
    },
    {
      q: "Can I bring my own Pinterest design or theme?",
      a: "Absolutely! We love bespoke briefs. Send your photos, invitation swatches, or sketches over WhatsApp, and our chef will translate them into patisserie perfection.",
    },
  ];

  return (
    <section id="how-to-order" className="py-20 lg:py-28 bg-[#F6EFE9] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C6D58] block mb-3">
            Effortless Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B14] mb-4 tracking-tight">
            How to Order in 3 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-[#5A4339]">
            We keep bespoke cake ordering personal, transparent, and direct through WhatsApp consultation.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 border border-[#E8DFD8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl font-bold text-[#D4AF37]/50">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center text-[#A67C52]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2D1B14] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#7A6155] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE4] flex items-center gap-2 text-xs font-medium text-[#25D366]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Simple WhatsApp communication</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick FAQs */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFD8] shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-[#9C6D58]">
            <HelpCircle className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif text-xl font-bold text-[#2D1B14]">
              Common Ordering Questions
            </h3>
          </div>

          <div className="space-y-6 divide-y divide-[#F2ECE4]">
            {faqs.map((faq, i) => (
              <div key={i} className={i !== 0 ? 'pt-6' : ''}>
                <h4 className="font-bold text-sm sm:text-base text-[#2D1B14] mb-1.5">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-[#7A6155] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#F2ECE4] text-center">
            <p className="text-xs text-[#7A6155] mb-4">
              Have a custom request or specific allergen question?
            </p>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent("Hello Chef's Boutique! I have a question about placing a custom bakery order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366]" />
              <span>Ask us directly on WhatsApp (+27 74 027 4842)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
