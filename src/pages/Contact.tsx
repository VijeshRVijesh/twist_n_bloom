import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Send,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Gift,
  ChevronDown,
  Package,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

const PRODUCTS_LIST = [
  "Signature Rose & Botanical Hamper ($75)",
  "Artisanal Birthday Delights Box ($85)",
  "Romantic Velvet Anniversary Set ($110)",
  "Welcome Little One Baby Shower Box ($95)",
  "Engagement & Wedding Keepsake Box ($120)",
  "Congratulations & Graduation Hamper ($70)",
  "Corporate Bulk Order (Custom Pricing)",
  "Fully Custom Designed Hamper",
];

const FAQS = [
  {
    q: "How far in advance should I place my hamper enquiry?",
    a: "We recommend placing your enquiry at least 3-5 days prior to your target event date. For urgent same-day or next-day express hampers, please contact us directly on Instagram @Twist_n__bloom.",
  },
  {
    q: "Can I customize the greeting card handwritten message?",
    a: "Yes! Every hamper includes a handwritten calligraphy card. You can provide your exact note in the Message/Requirements field.",
  },
  {
    q: "Do you offer corporate or bulk event hampers?",
    a: "Absolutely. We specialize in bespoke corporate gifting, bridesmaid proposal boxes, and wedding return gifts. Select 'Corporate Bulk Order' in the form and specify your quantity.",
  },
  {
    q: "How are the hampers packaged for delivery?",
    a: "All hampers are securely packed with shock-resistant cushion lining inside luxury branded boxes, complete with fairy light battery safety tabs and ribbon bows.",
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();

  // Pre-fill state from URL params if coming from Hamper Card or Customizer
  const prefillProduct = searchParams.get("product") || searchParams.get("box") || "";
  const prefillItems = searchParams.get("items") || "";
  const prefillExtras = searchParams.get("extras") || "";
  const prefillCard = searchParams.get("card") || "";
  const prefillTotal = searchParams.get("estimatedTotal") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: prefillProduct || PRODUCTS_LIST[0],
    quantity: 1,
    eventDate: "",
    budget: "$50 - $100",
    message: prefillItems
      ? `Custom Builder Selection:\n• Items: ${prefillItems}\n• Finishing Touches: ${prefillExtras}\n• Card Note: "${prefillCard}"\n• Estimated Quote: ${prefillTotal}`
      : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (prefillProduct) {
      const match = PRODUCTS_LIST.find((p) =>
        p.toLowerCase().includes(prefillProduct.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, product: match }));
      }
    }
  }, [prefillProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#7A2036", "#9B334C", "#D89A9E", "#D4AF37"],
      });
    }, 1200);
  };

  return (
    <div className="pt-28 pb-20 space-y-0">
      {/* 1. HERO HEADER */}
      <section className="py-16 md:py-20 bg-gradient-rose-gold relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#7A2036] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Product &amp; Hamper Enquiry</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#7A2036]">
            Let&apos;s Create Your Bespoke Hamper
          </h1>

          <p className="font-script text-2xl sm:text-3xl text-[#9B334C]">
            &quot;Every hamper tells a story. Let&apos;s create yours.&quot;
          </p>

          <p className="text-sm text-[#6C5D60] max-w-xl mx-auto">
            Have a custom theme in mind or need guidance choosing the perfect gift? Fill out our enquiry form below and our curation team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* 2. ENQUIRY FORM & CONTACT INFO CONTAINER */}
      <section className="py-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-10 rounded-3xl border border-[#D89A9E]/30 shadow-lg bg-white/95">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D89A9E]/20">
                  <div className="w-10 h-10 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036]">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#7A2036]">
                      Product Enquiry Form
                    </h2>
                    <p className="text-xs text-[#6C5D60]">
                      Submit your hamper requirements and custom details.
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#F6E6E8] text-[#7A2036] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10 text-[#9B334C]" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#7A2036]">
                      Enquiry Submitted Successfully!
                    </h3>

                    <p className="text-xs text-[#6C5D60] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#7A2036]">{formData.name}</strong>! We have received your hamper enquiry for <strong className="text-[#7A2036]">{formData.product}</strong>.
                    </p>

                    {/* Receipt Summary Card */}
                    <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D89A9E]/30 text-left max-w-md mx-auto space-y-2 text-xs text-[#2D2424]">
                      <div className="font-bold text-[#7A2036] border-b border-[#D89A9E]/20 pb-2 flex justify-between">
                        <span>Enquiry Details Summary</span>
                        <span className="text-[10px] uppercase bg-[#F6E6E8] px-2 py-0.5 rounded text-[#9B334C]">
                          Status: Received
                        </span>
                      </div>
                      <div><strong>Phone:</strong> {formData.phone}</div>
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Quantity:</strong> {formData.quantity} unit(s)</div>
                      {formData.eventDate && <div><strong>Event Date:</strong> {formData.eventDate}</div>}
                      {formData.message && (
                        <div className="pt-2 border-t border-[#D89A9E]/20 mt-2">
                          <strong>Message / Requirements:</strong>
                          <pre className="whitespace-pre-wrap font-sans text-[11px] text-[#6C5D60] mt-1 bg-white p-2 rounded border border-[#D89A9E]/20">
                            {formData.message}
                          </pre>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-[#9B334C] font-semibold">
                      Our team will reach out to you within 2-4 hours via WhatsApp / Email.
                    </p>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          product: PRODUCTS_LIST[0],
                          quantity: 1,
                          eventDate: "",
                          budget: "$50 - $100",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#7A2036] text-white text-xs font-semibold hover:bg-[#9B334C] transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#7A2036] mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Hrithika Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0]/60 border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#7A2036] mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0]/60 border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Product Select */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#7A2036] mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="e.g. hrithika@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0]/60 border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#7A2036] mb-1">
                          Hamper / Product <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0]/60 border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036] focus:bg-white transition-colors"
                        >
                          {PRODUCTS_LIST.map((prod, idx) => (
                            <option key={idx} value={prod}>
                              {prod}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Quantity & Event Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#7A2036] mb-1">
                          Quantity <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          min={1}
                          max={500}
                          value={formData.quantity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0]/60 border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#7A2036] mb-1">
                          Target Event Date (Optional)
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0]/60 border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message / Requirements Textarea */}
                    <div>
                      <label className="block text-xs font-bold text-[#7A2036] mb-1">
                        Message / Custom Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about the occasion, card message note, specific gifts to include, delivery address, or any special requests..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0]/60 border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-wine text-[#FAF6F0] font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending Your Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D4AF37]" />
                          <span>Submit Hamper Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Contact Info & Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Studio Info Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#D89A9E]/30 bg-white/90 shadow-md space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#7A2036] border-b border-[#D89A9E]/20 pb-3">
                  Direct Studio Contact
                </h3>

                <div className="space-y-4 text-xs">
                  <a
                    href="https://instagram.com/Twist_n__bloom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF6F0] hover:bg-[#F6E6E8] border border-[#D89A9E]/20 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#7A2036] text-white flex items-center justify-center shrink-0">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#7A2036] block">Instagram Studio</span>
                      <span className="text-[#6C5D60]">@Twist_n__bloom</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#D89A9E]/20">
                    <div className="w-9 h-9 rounded-full bg-[#7A2036] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#7A2036] block">Phone / WhatsApp</span>
                      <span className="text-[#6C5D60]">+91 98765 43210</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#D89A9E]/20">
                    <div className="w-9 h-9 rounded-full bg-[#7A2036] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#7A2036] block">Email Enquiries</span>
                      <span className="text-[#6C5D60]">enquire@twistandbloom.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#D89A9E]/20">
                    <div className="w-9 h-9 rounded-full bg-[#7A2036] text-white flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#7A2036] block">Studio Operating Hours</span>
                      <span className="text-[#6C5D60]">Mon - Sat: 9:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tagline Card */}
              <div className="bg-gradient-wine p-6 rounded-3xl text-white text-center space-y-2 shadow-md">
                <Gift className="w-8 h-8 text-[#D4AF37] mx-auto" />
                <p className="font-script text-2xl text-[#F6E6E8]">
                  PERFECT GIFTING MADE PERSONAL
                </p>
                <p className="text-[11px] text-gray-200">
                  Every order is handcrafted with fairy lights, ribbons, and love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9B334C] bg-[#F6E6E8] px-3.5 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#7A2036] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAF6F0] border border-[#D89A9E]/30 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-serif font-bold text-sm text-[#7A2036] hover:bg-[#F6E6E8]/40 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9B334C] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#6C5D60] leading-relaxed border-t border-[#D89A9E]/20 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
