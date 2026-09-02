"use client";

import { useState } from "react";
import Link from "next/link";
import { Gift, Heart, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#2D2424] text-[#FAF6F0] pt-16 pb-8 border-t-4 border-[#7A2036]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#9B334C] flex items-center justify-center text-white">
                <Gift className="w-5 h-5" />
              </div>
              <span className="font-script text-3xl text-[#F6E6E8] font-bold">
                twist_n_bloom
              </span>
            </div>
            <p className="text-sm text-[#D89A9E] leading-relaxed italic">
              &quot;Every hamper tells a story. Let&apos;s create yours.&quot;
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              Thoughtfully curated bespoke gift hampers made with love for your special events. Pick what you love, add a personal touch, and make it truly meaningful.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/Twist_n__bloom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#7A2036] hover:bg-[#9B334C] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@twistandbloom.com"
                className="w-9 h-9 rounded-full bg-[#7A2036] hover:bg-[#9B334C] flex items-center justify-center transition-colors text-white"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#F6E6E8] mb-4 border-b border-[#7A2036] pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#D89A9E] transition-colors">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D89A9E] transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="/#customizer" className="hover:text-[#D89A9E] transition-colors">
                  Interactive Hamper Builder
                </Link>
              </li>
              <li>
                <Link href="/#occasions" className="hover:text-[#D89A9E] transition-colors">
                  Special Event Occasions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D89A9E] transition-colors">
                  Product Enquiry Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Occasions */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#F6E6E8] mb-4 border-b border-[#7A2036] pb-2">
              Occasions We Cover
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Birthday Celebrations</li>
              <li>Anniversary & Romance</li>
              <li>Engagement & Wedding</li>
              <li>Congratulations & Milestones</li>
              <li>Baby Shower & New Born</li>
              <li>Corporate & Festive Gifting</li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#F6E6E8] mb-4 border-b border-[#7A2036] pb-2">
              Stay Connected
            </h3>
            <p className="text-xs text-gray-300">
              Subscribe for seasonal hamper catalog updates & gifting inspiration.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2.5 rounded-full bg-[#1A1414] border border-[#7A2036] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D89A9E]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-[#7A2036] text-white hover:bg-[#9B334C] transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>

            <div className="pt-2 text-xs text-gray-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-3.5 h-3.5 text-[#D89A9E]" />
                <span>Instagram: @Twist_n__bloom</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D89A9E]" />
                <span>Email: enquire@twistandbloom.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#3D3232] text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Twist &amp; Bloom (twist_n_bloom). All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#D89A9E]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#9B334C] fill-current" />
            <span>for your special moments.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
// just check