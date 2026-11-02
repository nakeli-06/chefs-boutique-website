import { MapPin, Phone, MessageCircle, Clock, Truck, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export default function ContactLocation() {
  const handleDirections = () => {
    const addressQuery = encodeURIComponent("95 Mandela St, Ext 10, eMalahleni, 1034, South Africa");
    window.open(`https://www.google.com/maps/search/?api=1&query=${addressQuery}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Chef's Boutique! I'm reaching out from your website and would like to chat about cakes & pastries.");
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C6D58] block mb-3">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B14] mb-4 tracking-tight">
            Our Studio & Delivery Service
          </h2>
          <p className="text-sm sm:text-base text-[#5A4339]">
            Located on Mandela Street in eMalahleni. Come collect your bespoke confections or have them delivered straight to your event venue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DFD8] shadow-sm flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center text-[#A67C52] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2D1B14] mb-1">
                    Boutique Kitchen & Studio
                  </h3>
                  <p className="text-sm text-[#5A4339] leading-relaxed">
                    95 Mandela St, Ext 10<br />
                    eMalahleni (Witbank), 1034<br />
                    Mpumalanga, South Africa
                  </p>
                  <button
                    onClick={handleDirections}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A67C52] hover:text-[#2D1B14] mt-2 transition-colors cursor-pointer"
                  >
                    <span>Get Google Maps directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center text-[#A67C52] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2D1B14] mb-1">
                    Direct Phone & WhatsApp
                  </h3>
                  <p className="text-sm text-[#5A4339] font-medium">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#7A6155] mt-1">
                    WhatsApp is our quickest channel for quotes, image references, and consultations.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={handleWhatsAppChat}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Chat on WhatsApp</span>
                    </button>
                    <a
                      href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#2D1B14] bg-[#FAF7F2] border border-[#E0D5CC] hover:bg-white transition-colors"
                    >
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Trading & Collection Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-center text-[#A67C52] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif font-bold text-lg text-[#2D1B14] mb-2">
                    Studio & Collection Hours
                  </h3>
                  <div className="space-y-1.5 text-xs text-[#7A6155]">
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-[#F2ECE4] pb-1">
                        <span className="font-medium text-[#2D1B14]">{h.days}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Delivery Suburbs Strip */}
            <div className="mt-8 pt-6 border-t border-[#F2ECE4]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2D1B14] mb-2">
                <Truck className="w-4 h-4 text-[#A67C52]" />
                <span>Doorstep Delivery Areas in Witbank</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS_INFO.deliveryAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#6C554B] border border-[#E8DFD8]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E8DFD8] shadow-sm flex flex-col min-h-[420px]">
            {/* Map Top Bar */}
            <div className="p-4 bg-[#FAF7F2] border-b border-[#E8DFD8] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#2D1B14] font-medium">
                <Navigation className="w-3.5 h-3.5 text-[#A67C52]" />
                <span>Mandela Street & Ext 10, eMalahleni (Witbank)</span>
              </div>
              <button
                onClick={handleDirections}
                className="text-xs font-semibold text-[#A67C52] hover:text-[#2D1B14] transition-colors flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative w-full flex-1 min-h-[380px]">
              <iframe
                title="Chef's Boutique Baking Creations Location in eMalahleni"
                src="https://maps.google.com/maps?q=-25.8728,29.2332+(Chef's+Boutique+-+Baking+Creations+95+Mandela+St+Ext+10+eMalahleni)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
