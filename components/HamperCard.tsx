"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export interface HamperProps {
  id: string;
  title: string;
  occasion: string;
  description: string;
  image: string;
  badge?: string;
  price: string;
  highlights: string[];
}

export default function HamperCard({ hamper }: { hamper: HamperProps }) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full border border-[#D89A9E]/30 shadow-sm">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-[#F6E6E8]/30 group">
        <Image
          src={hamper.image}
          alt={hamper.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {hamper.badge && (
          <span className="absolute top-3 left-3 bg-[#7A2036] text-[#FAF6F0] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {hamper.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#7A2036] text-xs font-bold px-3 py-1 rounded-full border border-[#D89A9E]/40 shadow-sm">
          {hamper.price}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold tracking-wider text-[#9B334C] uppercase bg-[#F6E6E8] px-2.5 py-0.5 rounded-md">
              {hamper.occasion}
            </span>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#7A2036] mb-2">
            {hamper.title}
          </h3>

          <p className="text-xs text-[#6C5D60] leading-relaxed mb-4">
            {hamper.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 mb-6">
            {hamper.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#2D2424]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9B334C] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action button */}
        <Link
          href={`/contact?product=${encodeURIComponent(hamper.title)}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#7A2036] hover:bg-[#9B334C] text-[#FAF6F0] text-xs font-medium transition-all group shadow-sm hover:shadow-md"
        >
          <span>Enquire For This Hamper</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
