"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Gift, Sparkles, Check, Heart, Sliders, ArrowRight, ShieldCheck } from "lucide-react";

interface OptionItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

const BOX_STYLES: OptionItem[] = [
  { id: "box-pink", name: "Rose Velvet Box", price: 25, description: "Signature plush pink velvet box with golden trim" },
  { id: "box-[#D4AF37]", name: "Champagne Gold Box", price: 30, description: "Luxury metallic champagne finish" },
  { id: "box-cream", name: "Cream Floral Box", price: 20, description: "Classic textured linen with floral embossing" },
  { id: "box-plum", name: "Deep Plum Velvet", price: 28, description: "Royal wine velvet box with satin lining" },
];

const GIFT_ITEMS: OptionItem[] = [
  { id: "bouquet", name: "Dried Floral Mini Bouquet", price: 18, description: "Handcrafted preserved eucalyptus & roses" },
  { id: "chocolates", name: "Artisanal Chocolate Pralines", price: 15, description: "Box of 9 handmade gourmet truffles" },
  { id: "candle", name: "Lavender & Bergamot Candle", price: 16, description: "Hand-poured soy wax candle in glass jar" },
  { id: "organza", name: "Apothecary Organza Sachet", price: 8, description: "French dried lavender scented sachet" },
  { id: "card", name: "Custom Calligraphy Card", price: 6, description: "Handwritten personal note on parchment paper" },
  { id: "champagne", name: "Mini Sparkling Rose", price: 22, description: "Premium mini sparkling beverage" },
];

const EXTRA_TOUCHES: OptionItem[] = [
  { id: "lights", name: "Warm Fairy Lights Glow", price: 5 },
  { id: "ribbon", name: "Custom Silk Satin Bow", price: 4 },
  { id: "wax-seal", name: "Handcrafted Wax Stamp Seal", price: 3 },
];

export default function InteractiveCustomizer() {
  const router = useRouter();
  const [selectedBox, setSelectedBox] = useState<OptionItem>(BOX_STYLES[0]);
  const [selectedItems, setSelectedItems] = useState<string[]>(["bouquet", "chocolates", "card", "organza"]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["lights", "ribbon"]);
  const [cardNote, setCardNote] = useState("Made Especially For You");

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = selectedBox.price;
    selectedItems.forEach((id) => {
      const found = GIFT_ITEMS.find((item) => item.id === id);
      if (found) total += found.price;
    });
    selectedExtras.forEach((id) => {
      const found = EXTRA_TOUCHES.find((item) => item.id === id);
      if (found) total += found.price;
    });
    return total;
  };

  const handleProceedEnquiry = () => {
    const itemNames = GIFT_ITEMS.filter((i) => selectedItems.includes(i.id))
      .map((i) => i.name)
      .join(", ");
    const extraNames = EXTRA_TOUCHES.filter((i) => selectedExtras.includes(i.id))
      .map((i) => i.name)
      .join(", ");

    const query = new URLSearchParams({
      box: selectedBox.name,
      items: itemNames,
      extras: extraNames,
      card: cardNote,
      estimatedTotal: `$${calculateTotal()}`,
    });

    router.push(`/contact?${query.toString()}`);
  };

  return (
    <section id="customizer" className="py-20 bg-gradient-rose-gold relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6E6E8] text-[#7A2036] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D89A9E]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Hamper Builder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A2036] mb-4">
            Customise It Your Way
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-[#9B334C]">
            &quot;You Choose. We Curate. Made Just For You.&quot;
          </p>
          <p className="text-sm text-[#6C5D60] mt-3">
            Pick what you love, add a personal touch, and make your gift truly meaningful. Select your elements below to calculate your custom hamper quote.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selector Controls (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Box Style */}
            <div className="glass-card p-6 rounded-2xl border border-[#D89A9E]/30">
              <h3 className="font-serif text-lg font-bold text-[#7A2036] mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7A2036] text-white text-xs flex items-center justify-center font-sans">
                  1
                </span>
                Choose Hamper Packaging Style
              </h3>
              <p className="text-xs text-[#6C5D60] mb-4">
                Select your preferred luxury gift box design and color tone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BOX_STYLES.map((box) => {
                  const isSelected = selectedBox.id === box.id;
                  return (
                    <button
                      key={box.id}
                      onClick={() => setSelectedBox(box)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#F6E6E8] border-[#7A2036] shadow-sm ring-1 ring-[#7A2036]"
                          : "bg-white/60 border-gray-200 hover:border-[#D89A9E]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-[#7A2036]">
                          {box.name}
                        </span>
                        <span className="text-xs font-bold text-[#9B334C] bg-white px-2 py-0.5 rounded-md border border-[#D89A9E]/30">
                          +${box.price}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#6C5D60]">
                        {box.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Gift Items */}
            <div className="glass-card p-6 rounded-2xl border border-[#D89A9E]/30">
              <h3 className="font-serif text-lg font-bold text-[#7A2036] mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7A2036] text-white text-xs flex items-center justify-center font-sans">
                  2
                </span>
                Pick Gift Contents &amp; Treats
              </h3>
              <p className="text-xs text-[#6C5D60] mb-4">
                Select items to include in your personalized hamper.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GIFT_ITEMS.map((item) => {
                  const isSelected = selectedItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-start justify-between gap-2 ${
                        isSelected
                          ? "bg-[#F6E6E8] border-[#7A2036] shadow-sm"
                          : "bg-white/60 border-gray-200 hover:border-[#D89A9E]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isSelected
                                ? "bg-[#7A2036] border-[#7A2036] text-white"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span className="font-semibold text-xs text-[#2D2424]">
                            {item.name}
                          </span>
                        </div>
                        {item.description && (
                          <span className="text-[11px] text-[#6C5D60] block mt-1 pl-6">
                            {item.description}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-bold text-[#9B334C] shrink-0">
                        +${item.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Extra Touches & Card Note */}
            <div className="glass-card p-6 rounded-2xl border border-[#D89A9E]/30">
              <h3 className="font-serif text-lg font-bold text-[#7A2036] mb-1 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7A2036] text-white text-xs flex items-center justify-center font-sans">
                  3
                </span>
                Personal Message &amp; Decorative Touches
              </h3>
              <p className="text-xs text-[#6C5D60] mb-4">
                Add fairytale lighting, ribbon details, and custom greeting note.
              </p>

              <div className="space-y-4">
                {/* Extras */}
                <div className="flex flex-wrap gap-2">
                  {EXTRA_TOUCHES.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.id);
                    return (
                      <button
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`px-3.5 py-2 rounded-full text-xs font-medium border flex items-center gap-2 transition-all ${
                          isSelected
                            ? "bg-[#7A2036] text-white border-[#7A2036] shadow-xs"
                            : "bg-white/80 text-[#6C5D60] border-gray-300 hover:border-[#D89A9E]"
                        }`}
                      >
                        <span>{extra.name}</span>
                        <span className="font-bold opacity-80">+${extra.price}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Greeting Card Note */}
                <div>
                  <label className="block text-xs font-semibold text-[#7A2036] mb-1">
                    Greeting Card Heading / Note:
                  </label>
                  <input
                    type="text"
                    value={cardNote}
                    onChange={(e) => setCardNote(e.target.value)}
                    placeholder="e.g. Made Especially For You"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-xs text-[#2D2424] focus:outline-none focus:border-[#7A2036]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-card p-6 rounded-2xl border-2 border-[#7A2036]/20 shadow-lg bg-white/95">
              <div className="flex items-center justify-between pb-4 border-b border-[#D89A9E]/30">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#9B334C]">
                    Live Estimation Summary
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#7A2036]">
                    Your Bespoke Hamper
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F6E6E8] flex items-center justify-center text-[#7A2036]">
                  <Gift className="w-5 h-5" />
                </div>
              </div>

              {/* Items Breakdown List */}
              <div className="py-4 space-y-3 border-b border-[#D89A9E]/20 text-xs">
                <div className="flex justify-between text-[#2D2424]">
                  <span className="font-medium">Box Style: {selectedBox.name}</span>
                  <span className="font-bold text-[#7A2036]">${selectedBox.price}</span>
                </div>

                {selectedItems.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-[#6C5D60] block mb-1">
                      Selected Contents ({selectedItems.length}):
                    </span>
                    <ul className="space-y-1 pl-2">
                      {selectedItems.map((id) => {
                        const item = GIFT_ITEMS.find((g) => g.id === id);
                        if (!item) return null;
                        return (
                          <li key={id} className="flex justify-between text-[#6C5D60]">
                            <span>• {item.name}</span>
                            <span>+${item.price}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {selectedExtras.length > 0 && (
                  <div>
                    <span className="text-[11px] font-semibold text-[#6C5D60] block mb-1">
                      Finishing Touches:
                    </span>
                    <ul className="space-y-1 pl-2">
                      {selectedExtras.map((id) => {
                        const item = EXTRA_TOUCHES.find((g) => g.id === id);
                        if (!item) return null;
                        return (
                          <li key={id} className="flex justify-between text-[#6C5D60]">
                            <span>• {item.name}</span>
                            <span>+${item.price}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {cardNote && (
                  <div className="bg-[#FAF6F0] p-2.5 rounded-lg border border-[#D89A9E]/30 mt-2">
                    <span className="text-[10px] uppercase font-bold text-[#9B334C] block">
                      Card Note:
                    </span>
                    <p className="font-script text-lg text-[#7A2036] italic">
                      &quot;{cardNote}&quot;
                    </p>
                  </div>
                )}
              </div>

              {/* Total Calculation */}
              <div className="pt-4 pb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#6C5D60] block">Estimated Total</span>
                  <span className="font-serif text-3xl font-bold text-[#7A2036]">
                    ${calculateTotal()}
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#6C5D60]">
                  <span>Includes Taxes &amp; Premium Wrapping</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleProceedEnquiry}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-wine text-[#FAF6F0] font-medium text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-[1.01] active:scale-98"
              >
                <span>Send Custom Order Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#6C5D60]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9B334C]" />
                <span>Hand-curated with care &amp; premium packaging guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
