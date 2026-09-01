"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, Gift, PhoneCall, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Custom Builder", href: "/#customizer" },
    { name: "Occasions", href: "/#occasions" },
    { name: "Contact & Enquiry", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F0]/90 backdrop-blur-md shadow-md py-3 border-b border-[#D89A9E]/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7A2036] to-[#9B334C] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Gift className="w-5 h-5 text-[#FAF6F0]" />
            </div>
            <div>
              <span className="font-script text-2xl sm:text-3xl text-[#7A2036] font-bold block leading-none">
                twist_n_bloom
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#6C5D60] block mt-0.5">
                Bespoke Gifting Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? "text-[#7A2036] font-semibold" : "text-[#6C5D60] hover:text-[#7A2036]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7A2036] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A2036] text-[#FAF6F0] text-sm font-medium hover:bg-[#9B334C] transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Enquire Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-[#7A2036] hover:bg-[#F6E6E8] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#D89A9E]/30 shadow-xl px-4 pt-4 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-[#F6E6E8] text-[#7A2036] font-semibold"
                    : "text-[#6C5D60] hover:bg-[#F6E6E8]/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#D89A9E]/20 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#7A2036] text-white text-sm font-medium shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Start Product Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
