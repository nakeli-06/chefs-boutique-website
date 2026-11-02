import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/bakeryData';

export default function CustomerLove() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative quotes background watermark */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9C6D58] block mb-3">
            Customer Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B14] mb-4 tracking-tight">
            Cherished by eMalahleni Hosts
          </h2>
          <p className="text-sm sm:text-base text-[#5A4339]">
            Read what our patrons in Witbank, Reyno Ridge, and Bankenveld have to say about their custom celebrations.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DFD8] shadow-lg max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Quote className="w-12 h-12 text-[#E8DFD8] absolute top-6 right-8 rotate-180" />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 text-[#D4AF37]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="font-serif text-xl sm:text-2xl text-[#2D1B14] leading-relaxed mb-8 max-w-2xl font-medium italic">
              "{current.comment}"
            </p>

            {/* Reviewer Details */}
            <div className="space-y-1">
              <h3 className="font-bold text-base text-[#2D1B14]">
                {current.name}
              </h3>
              <p className="text-xs text-[#9C6D58] font-medium">
                {current.location} · {current.occasion}
              </p>
              <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8DFD8] text-[11px] text-[#7A6155]">
                <Heart className="w-3 h-3 text-[#A67C52] fill-[#A67C52]" />
                <span>{current.cakeType}</span>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F2ECE4]">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#A67C52]' : 'w-2 bg-[#E0D5CC]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-[#E0D5CC] hover:bg-[#FAF7F2] text-[#2D1B14] transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-[#E0D5CC] hover:bg-[#FAF7F2] text-[#2D1B14] transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
