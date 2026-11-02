/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import SignatureCreations from './components/SignatureCreations';
import Gallery from './components/Gallery';
import CustomerLove from './components/CustomerLove';
import HowToOrder from './components/HowToOrder';
import OrderEnquiryForm from './components/OrderEnquiryForm';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D1B14] selection:bg-[#E8C5B0] selection:text-[#2D1B14]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Floating Cake Showcase */}
        <Hero />

        {/* 2. Our Story Section */}
        <OurStory />

        {/* 3. Signature Creations with Flavour Guide */}
        <SignatureCreations />

        {/* 4. Gallery with Lightbox */}
        <Gallery />

        {/* 5. Customer Love Testimonials */}
        <CustomerLove />

        {/* 6. How to Order (3 Simple Steps & FAQs) */}
        <HowToOrder />

        {/* 7. Interactive Order Enquiry Form & WhatsApp Builder */}
        <OrderEnquiryForm />

        {/* 8. Contact, Studio Location & Embedded Map */}
        <ContactLocation />
      </main>

      {/* 9. Luxury Patisserie Footer */}
      <Footer />

      {/* Floating WhatsApp Action on every screen */}
      <FloatingWhatsApp />
    </div>
  );
}
