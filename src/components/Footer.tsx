import { MessageCircle, Heart, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function Footer() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Chef's Boutique! I would like to enquire about ordering bespoke cakes or treats.");
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#20120C] text-[#E8DFD8] pt-16 pb-12 border-t border-[#3D251C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D251C]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                Chef’s Boutique
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
                Baking Creations
              </span>
            </div>
            <p className="text-sm text-[#B6A095] max-w-sm leading-relaxed">
              Luxury artisanal celebration cakes, bespoke cupcakes, and high-end dessert tables handcrafted to order in eMalahleni (Witbank), South Africa.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+27 74 027 4842)</span>
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#story" className="text-[#B6A095] hover:text-white transition-colors">Our Story & Heritage</a>
              </li>
              <li>
                <a href="#creations" className="text-[#B6A095] hover:text-white transition-colors">Signature Confections</a>
              </li>
              <li>
                <a href="#gallery" className="text-[#B6A095] hover:text-white transition-colors">Celebration Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="text-[#B6A095] hover:text-white transition-colors">Customer Testimonials</a>
              </li>
              <li>
                <a href="#how-to-order" className="text-[#B6A095] hover:text-white transition-colors">How to Order (3 Steps)</a>
              </li>
              <li>
                <a href="#order-enquiry" className="text-[#B6A095] hover:text-white transition-colors">Enquiry Form</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Studio & Orders
            </h4>
            <div className="space-y-2 text-sm text-[#B6A095]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>95 Mandela St, Ext 10, eMalahleni, 1034</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>+27 74 027 4842 (Calls & WhatsApp)</span>
              </div>
              <p className="text-xs text-[#8F786E] pt-2">
                Tuesday – Friday: 08:30 – 17:30<br />
                Saturday: 08:30 – 15:00<br />
                Sunday: 09:00 – 13:00 (Collections)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F786E]">
          <p>
            © {new Date().getFullYear()} Chef's Boutique — Baking Creations. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>in eMalahleni (Witbank), South Africa</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
