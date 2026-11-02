import { useState, useMemo } from 'react';
import { MessageCircle, Send, Copy, Check, Sparkles, Calendar, User, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO, FLAVOUR_MENU } from '../data/bakeryData';

export default function OrderEnquiryForm() {
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    dateNeeded: tomorrow,
    confectionType: 'Couture Celebration Cake',
    servings: '15–20 guests (Classic Tier)',
    flavour: 'Madagascar Vanilla & Salted Caramel',
    deliveryOption: 'pickup',
    deliveryAddress: '',
    notes: '',
  });

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const confectionOptions = [
    'Couture Celebration Cake',
    'Artisanal Cupcake Box (6 / 12 / 24)',
    'Luxury Tiered Wedding Cake',
    'Grand Dessert Table & Installation',
    'French Macaron Gift Box / Tower',
    'Custom Confectionery & Treats',
  ];

  const servingOptions = [
    '6–8 guests (Bento / Small)',
    '15–20 guests (Single Tier)',
    '25–35 guests (2-Tier Mini)',
    '40–60 guests (2-Tier Grand)',
    '70–100+ guests (3-Tier Wedding)',
    'Box of 6 Cupcakes',
    'Box of 12 Cupcakes',
    'Box of 24 Cupcakes',
    'Full Dessert Buffet (30+ guests)',
  ];

  const generatedWhatsAppMessage = useMemo(() => {
    let msg = `🎂 *NEW ORDER ENQUIRY — CHEF'S BOUTIQUE*\n\n`;
    msg += `• *Name:* ${formData.fullName.trim() || '[Your Name]'}\n`;
    msg += `• *Contact:* ${formData.phone.trim() || '[Your Phone]'}\n`;
    msg += `• *Date Needed:* ${formData.dateNeeded || '[Date]'}\n`;
    msg += `• *Confection:* ${formData.confectionType}\n`;
    msg += `• *Estimated Servings:* ${formData.servings}\n`;
    msg += `• *Preferred Flavour:* ${formData.flavour}\n`;
    msg += `• *Collection / Delivery:* ${formData.deliveryOption === 'delivery' ? `Delivery to: ${formData.deliveryAddress.trim() || 'eMalahleni Address'}` : 'Collection at 95 Mandela St, Ext 10'}\n`;
    if (formData.notes.trim()) {
      msg += `• *Theme / Inspo Notes:* ${formData.notes.trim()}\n`;
    }
    msg += `\nPlease let me know your availability and quotation! ✨`;
    return msg;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const encoded = encodeURIComponent(generatedWhatsAppMessage);
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="order-enquiry" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C6D58] block mb-3">
            Bespoke Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B14] mb-4 tracking-tight">
            Order Enquiry & Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#5A4339]">
            Complete your celebration details below. Our builder will format your brief and connect you instantly with our pastry chef on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DFD8] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A67C52] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Lerato Sithole"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#A67C52] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 074 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Date Needed & Confection Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dateNeeded" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                    Date Needed *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#A67C52] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="dateNeeded"
                      type="date"
                      required
                      min={tomorrow}
                      value={formData.dateNeeded}
                      onChange={(e) => setFormData({ ...formData, dateNeeded: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confectionType" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                    Confection Category *
                  </label>
                  <select
                    id="confectionType"
                    value={formData.confectionType}
                    onChange={(e) => setFormData({ ...formData, confectionType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors"
                  >
                    {confectionOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Servings & Flavour */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="servings" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                    Guest Count / Servings
                  </label>
                  <select
                    id="servings"
                    value={formData.servings}
                    onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors"
                  >
                    {servingOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="flavour" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                    Preferred Flavour Profile
                  </label>
                  <select
                    id="flavour"
                    value={formData.flavour}
                    onChange={(e) => setFormData({ ...formData, flavour: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors"
                  >
                    {FLAVOUR_MENU.map((f) => (
                      <option key={f.name} value={f.name}>{f.name}</option>
                    ))}
                    <option value="Chef's Choice / Surprise me">Chef's Choice / Surprise me</option>
                    <option value="Custom Flavour Pairing">Custom Flavour Pairing</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Delivery Options */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                  Order Collection or Delivery
                </label>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryOption: 'pickup' })}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                      formData.deliveryOption === 'pickup'
                        ? 'border-[#2D1B14] bg-[#2D1B14] text-white shadow-xs'
                        : 'border-[#E0D5CC] bg-[#FAF7F2] text-[#5A4339] hover:bg-white'
                    }`}
                  >
                    Collect in Ext 10
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryOption: 'delivery' })}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                      formData.deliveryOption === 'delivery'
                        ? 'border-[#2D1B14] bg-[#2D1B14] text-white shadow-xs'
                        : 'border-[#E0D5CC] bg-[#FAF7F2] text-[#5A4339] hover:bg-white'
                    }`}
                  >
                    Doorstep Delivery in eMalahleni
                  </button>
                </div>

                {formData.deliveryOption === 'delivery' && (
                  <div className="relative mt-2">
                    <MapPin className="w-4 h-4 text-[#A67C52] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Delivery street address and suburb in eMalahleni..."
                      value={formData.deliveryAddress}
                      onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Row 5: Notes & Inspiration */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#5A4339] mb-2">
                  Inspiration, Colours & Special Requests
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="e.g. Sage green and blush palette, gold leaf detailing, 'Happy 30th Lerato' topper, nut-free requirement..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-4 rounded-xl border border-[#E0D5CC] bg-[#FAF7F2] text-[#2D1B14] text-sm focus:outline-hidden focus:border-[#A67C52] focus:bg-white transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-[#7A6155] mt-2">
                  Connects to +27 74 027 4842 with your details ready. No payment required until order is confirmed.
                </p>
              </div>

            </form>
          </div>

          {/* WhatsApp Live Preview Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1F2C34] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#2A3942] relative overflow-hidden">
              
              {/* WhatsApp Mock Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2A3942] mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center text-white font-serif font-bold text-sm">
                    CB
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-stone-100">Chef's Boutique</p>
                    <p className="text-[11px] text-[#25D366]">Official WhatsApp · Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#128C7E]/40 px-2.5 py-1 rounded-full text-[11px] text-emerald-300">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>Live Preview</span>
                </div>
              </div>

              {/* Message Bubble */}
              <div className="bg-[#005D4B] text-stone-100 rounded-2xl rounded-tl-xs p-4 sm:p-5 text-xs sm:text-sm font-sans whitespace-pre-wrap leading-relaxed shadow-sm">
                {generatedWhatsAppMessage}
              </div>

              {/* Copy Message Action */}
              <div className="mt-5 pt-4 border-t border-[#2A3942] flex items-center justify-between">
                <span className="text-xs text-stone-400">
                  Prefer to paste manually?
                </span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#2A3942] hover:bg-[#374955] text-xs font-semibold text-stone-200 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-300" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Quick Guarantees Box */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD8] space-y-3">
              <h4 className="font-serif font-bold text-base text-[#2D1B14]">
                Our Booking Commitment
              </h4>
              <ul className="text-xs text-[#7A6155] space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A67C52] shrink-0 mt-0.5" />
                  <span>Transparent itemized quote provided before any payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A67C52] shrink-0 mt-0.5" />
                  <span>Direct dietary & allergy accommodations addressed by our chef</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A67C52] shrink-0 mt-0.5" />
                  <span>Secure date booking with simple EFT payment verification</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
