"use client";

import { useState } from "react";
import { IconCaretRightFilled, IconChevronDown } from "@tabler/icons-react";

const faqs = [
  {
    q: "Jaký analyzátor je vhodný pro monitoring kvality energie?",
    a: "Pro monitoring kvality energie doporučujeme analyzátory řady UMG s certifikací Class A dle EN 50160, například UMG 96-PQ nebo UMG 801 pro rozsáhlejší instalace.",
  },
  {
    q: "Nabízíte technickou podporu v češtině?",
    a: "Ano, poskytujeme plnou technickou podporu v českém jazyce včetně školení, servisu a poradenství při návrhu měřicích a kompenzačních systémů.",
  },
  {
    q: "Jaká je dodací lhůta?",
    a: "Většinu produktů expedujeme do 24 hodin z vlastního skladu v Pardubicích. U speciálních konfigurací se dodací lhůta pohybuje mezi 2–4 týdny.",
  },
  {
    q: "Je software GridVis® zdarma?",
    a: "GridVis® Desktop ve verzi Basic je k dispozici zdarma. Rozšířené verze Professional a Enterprise s pokročilými funkcemi jsou dostupné na základě licence.",
  },
  {
    q: "Provádíte instalaci a uvedení do provozu?",
    a: "Ano, nabízíme kompletní služby od návrhu, přes instalaci až po uvedení do provozu a následný servis. Kontaktujte nás pro individuální nabídku.",
  },
  {
    q: "Jaké normy splňují vaše přístroje?",
    a: "Naše přístroje splňují mezinárodní normy IEC 61557-12, IEC 62586, EN 50160 a další. Konkrétní certifikace jsou uvedeny u každého produktu.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f7f7] py-14">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="section-label" style={{ textAlign: "center" }}>FAQ</span>
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mt-1">
            Často kladené dotazy
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className={`text-[1rem] font-semibold leading-[1.4] transition-colors ${open === i ? "text-[#0170E3]" : "text-black group-hover:text-[#0170E3]"}`}>
                  {faq.q}
                </span>
                <IconChevronDown
                  size={20}
                  stroke={2}
                  className={`flex-shrink-0 ml-4 text-[#5c5b5b] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-5" : "max-h-0"}`}
              >
                <p className="text-[0.875rem] text-[#5c5b5b] leading-[1.6]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-6">
          <a href="#" className="link-arrow">
            Porovnávací tabulka produktů
            <IconCaretRightFilled size={16} stroke={2.5} />
          </a>
          <a href="#" className="link-arrow">
            Vysvětlení pojmů
            <IconCaretRightFilled size={16} stroke={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
