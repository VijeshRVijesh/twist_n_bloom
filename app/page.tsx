import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Gift, ArrowRight, Star, ShieldCheck, CheckCircle2, Award, Calendar } from "lucide-react";
import HamperCard, { HamperProps } from "@/components/HamperCard";
import InteractiveCustomizer from "@/components/InteractiveCustomizer";

const FEATURED_HAMPERS: HamperProps[] = [
  {
    id: "h-1",
    title: "Signature Rose & Botanical Hamper",
    occasion: "Special Events",
    description: "Our iconic hamper box featuring velvet wrapping, dried eucalyptus bouquet, lavender sachet, and personalized handwritten card.",
    image: "/images/hero_hamper.png",
    badge: "Most Loved",
    price: "$75.00",
    highlights: ["Plush Rose Velvet Box", "Dried Floral Arrangement", "Apothecary Organza Sachet", "Calligraphy Greeting Card"],
  },
  {
    id: "h-2",
    title: "Artisanal Birthday Delights Box",
    occasion: "Birthday",
    description: "Celebrate their special day with handmade chocolate pralines, lavender bergamot candle, and golden string fairy lights.",
    image: "/images/birthday_hamper.png",
    badge: "Bestseller",
    price: "$85.00",
    highlights: ["Handmade Chocolate Truffles", "Soy Scented Candle", "Fairy Light String", "Custom Birthday Card"],
  },
  {
    id: "h-3",
    title: "Romantic Velvet Anniversary Set",
    occasion: "Anniversary",
    description: "An unforgettable romantic keepsake with rose bouquet, sparkling beverage, glass chalice, and gold stamped note.",
    image: "/images/anniversary_hamper.png",
    badge: "Luxury Edition",
    price: "$110.00",
    highlights: ["Wine Velvet Gift Trunk", "Fresh Red Rose Bouquet", "Sparkling Rose Champagne", "Custom Anniversary Note"],
  },
  {
    id: "h-4",
    title: "Welcome Little One Baby Shower Box",
    occasion: "Baby Shower",
    description: "Soft pastel luxury basket filled with organic cotton baby booties, teddy bear plush, and dried baby's breath flowers.",
    image: "/images/baby_shower_hamper.png",
    badge: "New Arrival",
    price: "$95.00",
    highlights: ["Woven Cotton Basket", "Plush Teddy Bear", "Organic Baby Booties", "Keepsake Floral Card"],
  },
];

const OCCASIONS_LIST = [
  { name: "Birthday", icon: "🎂", count: "12+ Designs" },
  { name: "Anniversary", icon: "💍", count: "8+ Designs" },
  { name: "Engagement", icon: "✨", count: "10+ Designs" },
  { name: "Congratulations", icon: "🎓", count: "6+ Designs" },
  { name: "Baby Shower", icon: "👶", count: "9+ Designs" },
  { name: "Corporate Gifting", icon: "🎁", count: "Custom Orders" },
];

const REVIEWS = [
  {
    name: "Ananya Sharma",
    handle: "@ananya_s",
    text: "The hamper for my sister's engagement was beyond gorgeous! The fairy lights and dried flowers made it feel so magical. Twist & Bloom really curates with love.",
    rating: 5,
    event: "Engagement Gift",
  },
  {
    name: "Rohan & Priya",
    handle: "@rohan_priya",
    text: "Ordered a customized anniversary box. The personalized handwriting note and chocolate pralines were top notch. Everyone asked where we got it from!",
    rating: 5,
    event: "Anniversary Surprise",
  },
  {
    name: "Kavya Patel",
    handle: "@kavyacreates",
    text: "You Choose We Curate isn't just a tagline, they literally listened to every detail I wanted for my bestie's baby shower hamper. 10/10 recommend!",
    rating: 5,
    event: "Baby Shower Basket",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-rose-gold overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D89A9E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#7A2036]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A2036] text-[#FAF6F0] text-xs font-medium tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Twist &amp; Bloom Bespoke Gifting Studio</span>
              </div>

              {/* Calligraphy Title */}
              <div className="space-y-1">
                <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#7A2036] block font-bold">
                  Customise Your Own
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#7A2036] tracking-tight uppercase">
                  HAMPER
                </h1>
                <p className="font-serif text-lg sm:text-xl text-[#9B334C] font-bold tracking-wider uppercase pt-1">
                  For Your Special Events
                </p>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-[#6C5D60] font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Thoughtfully curated. Uniquely yours. <br className="hidden sm:inline" />
                Made with love, just for them.
              </p>

              {/* Highlight Pill Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D89A9E]/40 text-xs font-semibold text-[#7A2036] shadow-xs">
                  ✨ You Choose, We Curate
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D89A9E]/40 text-xs font-semibold text-[#7A2036] shadow-xs">
                  💖 Made Just For You
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D89A9E]/40 text-xs font-semibold text-[#7A2036] shadow-xs">
                  🎀 Artisanal Packaging
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/#customizer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#7A2036] hover:bg-[#9B334C] text-[#FAF6F0] font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Build Your Custom Hamper</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#7A2036] font-medium text-sm border border-[#D89A9E]/50 transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Submit Order Enquiry</span>
                </Link>
              </div>
            </div>

            {/* Hero Right Visual (Hamper Showcase Box) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -right-4 z-20 bg-gradient-wine text-[#FAF6F0] p-4 rounded-2xl shadow-xl border border-[#D89A9E]/30 hidden sm:block max-w-[200px] text-center">
                  <Heart className="w-6 h-6 text-[#D4AF37] mx-auto mb-1 fill-current" />
                  <span className="font-serif font-bold text-xs block uppercase tracking-wider">
                    You Choose We Curate
                  </span>
                  <span className="text-[10px] text-[#F6E6E8] block mt-0.5">
                    Made Just For You
                  </span>
                </div>

                <div className="absolute -bottom-6 -left-4 z-20 glass-card p-4 rounded-2xl shadow-xl border border-[#D89A9E]/40 max-w-[220px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift className="w-4 h-4 text-[#9B334C]" />
                    <span className="font-bold text-xs text-[#7A2036]">Customise Your Way</span>
                  </div>
                  <p className="text-[11px] text-[#6C5D60]">
                    Pick what you love, add a personal touch and make it truly meaningful.
                  </p>
                </div>

                {/* Primary Hero Hamper Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
                  <div className="relative h-[420px] sm:h-[480px] w-full">
                    <Image
                      src="/images/hero_hamper.png"
                      alt="Twist & Bloom Bespoke Custom Hamper"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Subtle fairy lights overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTS & PHILOSOPHY BAR */}
      <section className="py-16 bg-white border-y border-[#D89A9E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0]/60 border border-[#D89A9E]/20">
              <div className="w-12 h-12 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036] shrink-0 font-bold">
                01
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#7A2036] mb-1">
                  Customise It Your Way
                </h4>
                <p className="text-xs text-[#6C5D60]">
                  Select products, colors, treats, and card messages to match your event theme.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0]/60 border border-[#D89A9E]/20">
              <div className="w-12 h-12 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036] shrink-0 font-bold">
                02
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#7A2036] mb-1">
                  Handcrafted Curation
                </h4>
                <p className="text-xs text-[#6C5D60]">
                  Every hamper includes dried florals, fairy lights, ribbons, and velvet touches.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0]/60 border border-[#D89A9E]/20">
              <div className="w-12 h-12 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036] shrink-0 font-bold">
                03
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#7A2036] mb-1">
                  Handwritten Notes
                </h4>
                <p className="text-xs text-[#6C5D60]">
                  Personalized calligraphy cards crafted with your exact message and wishes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0]/60 border border-[#D89A9E]/20">
              <div className="w-12 h-12 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036] shrink-0 font-bold">
                04
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#7A2036] mb-1">
                  Express Delivery
                </h4>
                <p className="text-xs text-[#6C5D60]">
                  Safely packaged and delivered directly to your doorstep or recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OCCASIONS SHOWCASE GRID */}
      <section id="occasions" className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9B334C] bg-[#F6E6E8] px-3.5 py-1 rounded-full border border-[#D89A9E]/30">
              Perfect For Every Occasion
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A2036] mt-3 mb-2">
              Curated Gift Hamper Collections
            </h2>
            <p className="text-sm text-[#6C5D60]">
              Whether it&apos;s a birthday milestone, romantic anniversary, engagement, or new baby arrival — we have the perfect hamper ready for customization.
            </p>

            {/* Occasion Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {OCCASIONS_LIST.map((item) => (
                <div
                  key={item.name}
                  className="px-4 py-2 rounded-xl bg-white border border-[#D89A9E]/30 text-xs font-semibold text-[#7A2036] shadow-xs flex items-center gap-1.5"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_HAMPERS.map((hamper) => (
              <HamperCard key={hamper.id} hamper={hamper} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CUSTOMIZER WIDGET */}
      <InteractiveCustomizer />

      {/* 5. BRAND STORY BANNER */}
      <section className="py-16 bg-gradient-wine text-[#FAF6F0] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Heart className="w-10 h-10 text-[#D4AF37] mx-auto fill-current animate-pulse" />
          <h2 className="font-script text-4xl sm:text-5xl text-[#F6E6E8] font-bold">
            Every hamper tells a story. Let&apos;s create yours.
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
            At <strong className="text-white">twist_n_bloom</strong>, we believe gifting should feel deeply personal, memorable, and timeless. We take your ideas and elevate them into handcrafted works of art.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#7A2036] font-bold text-sm hover:bg-[#F6E6E8] transition-all shadow-lg"
            >
              <span>Get In Touch For Enquiries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9B334C]">
              Customer Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A2036] mt-1">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#D89A9E]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-[#2D2424] leading-relaxed italic mb-4">
                    &quot;{rev.text}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#D89A9E]/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#7A2036]">
                      {rev.name}
                    </h4>
                    <span className="text-[10px] text-[#6C5D60]">{rev.handle}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#9B334C] bg-[#F6E6E8] px-2.5 py-1 rounded-md">
                    {rev.event}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
