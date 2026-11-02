import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Creations', href: '#creations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Customer Love', href: '#reviews' },
    { name: 'How to Order', href: '#how-to-order' },
    { name: 'Contact & Studio', href: '#contact' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Chef's Boutique! I would like to enquire about ordering custom cakes / confectionery.");
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD8] py-3.5'
          : 'bg-[#FAF7F2]/80 backdrop-blur-xs py-5 border-b border-[#E8DFD8]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col items-start whitespace-nowrap shrink-0 text-decoration-none"
            aria-label="Chef's Boutique Baking Creations - Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D1B14] group-hover:text-[#9C6D58] transition-colors">
              Chef’s Boutique
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#A67C52] font-medium -mt-0.5">
              Baking Creations
            </span>
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5A4339]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#A67C52] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A67C52] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
              aria-label="Chat and order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="p-2 rounded-full text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2D1B14] hover:bg-[#F2ECE4] focus:outline-hidden transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD8] px-4 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#2D1B14] hover:bg-[#F2ECE4] hover:text-[#A67C52] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8DFD8] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-[#7A6155] px-3">
                <MapPin className="w-3.5 h-3.5 text-[#A67C52] shrink-0" />
                <span>95 Mandela St, Ext 10, eMalahleni</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#7A6155] px-3">
                <Clock className="w-3.5 h-3.5 text-[#A67C52] shrink-0" />
                <span>Tue–Sat: 08:30 – 17:30 · Sun: 09:00 – 13:00</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+27 74 027 4842)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
