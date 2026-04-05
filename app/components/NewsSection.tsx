"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

const articles = [
  {
    date: "28. 3. 2026",
    title: "Nový analyzátor UMG 801 – modulární platforma pro budoucnost",
    perex: "Představujeme novou generaci síťových analyzátorů s rozšiřitelnou architekturou, podporou IoT protokolů a až 92 měřicími kanály v jednom přístroji. Ideální pro rostoucí provozy.",
    image: "/UMG 801.png",
    hoverText: "Zjistěte, jak modulární architektura UMG 801 šetří náklady na budoucí rozšíření a proč je ideální volbou pro rostoucí provozy.",
  },
  {
    date: "15. 3. 2026",
    title: "Jak správně kompenzovat jalový výkon v průmyslu",
    perex: "Praktický průvodce návrhem kompenzačních rozvaděčů pro výrobní podniky s proměnlivým zatížením. Vysvětlíme jak dimenzovat, jaké regulátory zvolit a kolik ušetříte na penále.",
    image: "/Kompenzace účiniků.png",
    hoverText: "Naučte se vyhnout penále za jalovou energii a správně dimenzovat kompenzaci pro váš typ provozu. Včetně kalkulačky úspor.",
  },
  {
    date: "2. 3. 2026",
    title: "GridVis® 9.0 – nové funkce pro analýzu kvality energie",
    perex: "Aktualizace přináší vylepšenou vizualizaci harmonických, automatické reporty dle EN 50160 a nové interaktivní dashboardy pro správu více měřicích bodů současně.",
    image: "/GRIDVIS software.png",
    hoverText: "Podívejte se, jak nové dashboardy a automatické reporty zjednoduší plnění legislativních požadavků a ušetří hodiny práce měsíčně.",
  },
  {
    date: "28. 3. 2026",
    title: "Nový analyzátor UMG 801 – modulární platforma pro budoucnost",
    perex: "Představujeme novou generaci síťových analyzátorů s rozšiřitelnou architekturou, podporou IoT protokolů a až 92 měřicími kanály v jednom přístroji. Ideální pro rostoucí provozy.",
    image: "/UMG 801.png",
    hoverText: "Zjistěte, jak modulární architektura UMG 801 šetří náklady na budoucí rozšíření a proč je ideální volbou pro rostoucí provozy.",
  },
];

const VISIBLE = 4;
const TOTAL_SIMULATED = 12;

export default function NewsSection() {
  const [offset, setOffset] = useState(0);
  const realMax = articles.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(realMax, o + 1));

  return (
    <section className="bg-white py-14">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-4 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
            Novinky
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
            aria-label="Předchozí novinky"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronLeft size={20} stroke={2} />
          </button>

          <button
            onClick={next}
            disabled={false}
            aria-label="Další novinky"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronRight size={20} stroke={2} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE + 1.2)}%)` }}
            >
              {articles.map((article, i) => (
                <a
                  key={`${article.title}-${i}`}
                  href="#"
                  className="product-card group flex flex-col bg-[#f5f7f7] rounded-lg overflow-hidden flex-shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 16}px) / ${VISIBLE})` }}
                >
                  {/* Obrázek nahoře */}
                  <div className="h-56 flex items-center justify-center flex-shrink-0 bg-[#e4e8eb] overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#0170E3]/0 group-hover:bg-[#0170E3]/90 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-[1.0625rem] text-white leading-[1.6] text-center font-semibold">
                        {article.hoverText}
                      </p>
                    </div>
                  </div>

                  {/* Text dole */}
                  <div className="p-6 pb-5 flex flex-col flex-1 bg-[#f5f7f7] text-center">
                    <h3 className="text-[1.25rem] font-normal text-black leading-[1.3] mb-3 group-hover:text-[#0170E3] transition-colors h-[3.25rem] overflow-hidden line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[0.875rem] text-black leading-[1.375] mb-4 h-[5rem] overflow-hidden line-clamp-4">
                      {article.perex}
                    </p>
                    <span className="self-center inline-flex items-center justify-center px-3.5 py-1 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.75rem] font-medium rounded-[3px] transition-colors">
                      Číst článek
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <a href="#" className="inline-flex items-center justify-center px-5 py-2 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.875rem] font-semibold rounded-[3px] transition-colors">
            Zobrazit všechny novinky
          </a>
        </div>
      </div>
    </section>
  );
}
