"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

const guides = [
  {
    title: "Analyzátory – který je pro vás?",
    desc: "Průvodce výběrem správného analyzátoru energie podle vašich požadavků, typu sítě a aplikace. Porovnání řad UMG a doporučení pro váš provoz.",
    productLink: "#kategorie",
    productLabel: "Analyzátory v e-shopu",
  },
  {
    title: "Kompenzace – kolik ušetříte?",
    desc: "Návod jak správně navrhnout kompenzaci jalového výkonu pro váš provoz. Kalkulačka úspor, dimenzování stupňů a volba regulátoru.",
    productLink: "#kategorie",
    productLabel: "Kompenzace v e-shopu",
  },
  {
    title: "Transformátory – jaký typ potřebujete?",
    desc: "Přehled měřicích transformátorů proudu a napětí pro různé aplikace. Dělitelné, násuvné a pevné MTP — jak vybrat správný typ a rozsah.",
    productLink: "#kategorie",
    productLabel: "Transformátory v e-shopu",
  },
  {
    title: "Software – co zvládne GridVis®?",
    desc: "Porovnání softwarových platforem GridVis® pro vizualizaci a analýzu dat. Desktop vs. cloud, licence, funkce a kompatibilita s přístroji.",
    productLink: "#kategorie",
    productLabel: "GridVis® v e-shopu",
  },
];

const VISIBLE = 4;
const TOTAL_SIMULATED = 8;

export default function ProductGuide() {
  const [offset, setOffset] = useState(0);
  const realMax = guides.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(realMax, o + 1));

  return (
    <section className="bg-[#f5f7f7] py-14">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-4 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
            Pomůžeme vám s výběrem
          </h2>
        </div>

        {/* Progress bar */}
        <div className="flex justify-center mb-6" aria-hidden="true">
          <div className="w-48 h-[3px] bg-gray-200 rounded-[3px] overflow-hidden">
            <div
              className="h-full bg-[#0170E3] rounded-[3px] transition-all duration-300 ease-in-out"
              style={{
                width: `${(VISIBLE / TOTAL_SIMULATED) * 100}%`,
                marginLeft: `${(offset / TOTAL_SIMULATED) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          <button
            onClick={prev}
            disabled={offset === 0}
            aria-label="Předchozí průvodce"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronLeft size={20} stroke={2} />
          </button>

          <button
            onClick={next}
            disabled={false}
            aria-label="Další průvodce"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronRight size={20} stroke={2} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE + 1.2)}%)` }}
            >
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className="product-card group bg-white rounded-lg p-6 flex flex-col border-l-[3px] border-[#0170E3]/30 hover:border-[#0170E3] transition-all duration-300 flex-shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 16}px) / ${VISIBLE})` }}
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <a
                      href={guide.productLink}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.6875rem] font-medium rounded-[3px] transition-colors whitespace-nowrap"
                    >
                      {guide.productLabel}
                    </a>
                    <a
                      href="#kontakt"
                      className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#0170E3] text-[#0170E3] text-[0.6875rem] font-medium rounded-[3px] hover:bg-[#0170E3] hover:text-white transition-colors whitespace-nowrap"
                    >
                      Vyžádat podporu
                    </a>
                  </div>
                  <h3 className="text-[1.25rem] font-normal text-black leading-[1.3] mb-3 group-hover:text-[#0170E3] transition-colors h-[3.25rem] overflow-hidden line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-[0.875rem] text-black leading-[1.5] h-[5.25rem] overflow-hidden line-clamp-4">
                    {guide.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <a href="#" className="inline-flex items-center justify-center px-5 py-2 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.875rem] font-semibold rounded-[3px] transition-colors">
            Zobrazit všechny průvodce
          </a>
        </div>
      </div>
    </section>
  );
}
