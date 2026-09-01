import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Gift, Award, CheckCircle2, ArrowRight, PackageCheck, Flower2, PenTool } from "lucide-react";

export const metadata = {
  title: "About Us | Twist & Bloom Bespoke Hamper Studio",
  description:
    "Learn about Twist & Bloom - our passion for creating handcrafted, customized hampers for birthdays, weddings, baby showers, and special events.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-0">
      {/* 1. HERO HEADER */}
      <section className="py-16 md:py-24 bg-gradient-rose-gold relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A2036] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Our Studio Story</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#7A2036] tracking-tight">
            Crafting Memories, One Hamper at a Time
          </h1>

          <p className="font-script text-3xl sm:text-4xl text-[#9B334C]">
            &quot;Thoughtfully curated. Uniquely yours. Made with love.&quot;
          </p>

          <p className="text-sm sm:text-base text-[#6C5D60] max-w-2xl mx-auto leading-relaxed pt-2">
            Welcome to <strong className="text-[#7A2036]">Twist &amp; Bloom</strong> (<code className="text-[#9B334C]">@Twist_n__bloom</code>), where we transform gift-giving into an art form. We specialize in bespoke hamper curations designed around your most cherished celebrations.
          </p>
        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY & STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F6E6E8]">
                <div className="relative h-[420px] w-full">
                  <Image
                    src="/images/hero_hamper.png"
                    alt="Twist & Bloom Hamper Crafting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl border border-[#D89A9E]/40 max-w-xs hidden sm:block shadow-lg">
                <span className="font-script text-2xl text-[#7A2036] block font-bold">
                  You Choose, We Curate
                </span>
                <p className="text-xs text-[#6C5D60] mt-1">
                  Made just for you with premium ribbons, fairy lights, and handwritten cards.
                </p>
              </div>
            </div>

            {/* Story Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9B334C] bg-[#F6E6E8] px-3.5 py-1 rounded-full">
                What Makes Us Special
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A2036]">
                Bespoke Gifting Without Rigid Templates
              </h2>

              <p className="text-sm text-[#6C5D60] leading-relaxed">
                Most gift baskets are mass-produced with generic items that lack warmth. At Twist &amp; Bloom, we believe that <strong>every hamper tells a story</strong>. Whether you want to celebrate a milestone birthday, express love on an anniversary, or welcome a newborn baby, we give you total creative freedom.
              </p>

              <p className="text-sm text-[#6C5D60] leading-relaxed">
                You select the packaging tone, gourmet treats, fragrant soy candles, plush keepsakes, and preserved flower bouquets. We take care of the intricate hand-wrapping, fairy light accents, wax stamp seals, and calligraphy note card.
              </p>

              {/* Differentiator Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-[#2D2424]">
                    100% Customized to your specific vision &amp; event theme
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-[#2D2424]">
                    Hand-preserved floral arrangements &amp; organic botanical elements
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-[#2D2424]">
                    Personalized handwritten calligraphy card included in every box
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CRAFTSMANSHIP PROCESS */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9B334C]">
              Behind The Scenes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7A2036] mt-1">
              How We Bring Your Hamper To Life
            </h2>
            <p className="text-sm text-[#6C5D60] mt-2">
              Four steps from your enquiry to an exquisite gift unboxing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-2xl border border-[#D89A9E]/30 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#7A2036] text-[#FAF6F0] flex items-center justify-center mx-auto shadow-md">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#7A2036]">
                1. Product Selection
              </h3>
              <p className="text-xs text-[#6C5D60]">
                Choose your hamper style or submit your custom requirement form with preferences.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-[#D89A9E]/30 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#7A2036] text-[#FAF6F0] flex items-center justify-center mx-auto shadow-md">
                <Flower2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#7A2036]">
                2. Floral &amp; Filler Styling
              </h3>
              <p className="text-xs text-[#6C5D60]">
                We arrange hand-dried rose mini bouquets, lavender sachets, and soft shredded base.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-[#D89A9E]/30 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#7A2036] text-[#FAF6F0] flex items-center justify-center mx-auto shadow-md">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#7A2036]">
                3. Calligraphy Note
              </h3>
              <p className="text-xs text-[#6C5D60]">
                Your personal message is handwritten in elegant script on parchment cardstock.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-[#D89A9E]/30 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#7A2036] text-[#FAF6F0] flex items-center justify-center mx-auto shadow-md">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#7A2036]">
                4. Ribbon &amp; Fairy Lighting
              </h3>
              <p className="text-xs text-[#6C5D60]">
                Final satin ribbon bow, fairy light string installation, and doorstep delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-wine text-[#FAF6F0] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready To Create A Special Hamper?
          </h2>
          <p className="text-sm text-gray-200">
            Tell us about your event date, recipient preferences, and budget. We will bring your dream hamper to reality!
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#7A2036] font-bold text-sm hover:bg-[#F6E6E8] transition-all shadow-md"
            >
              <span>Submit Product Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
