"use client";

import Image from "next/image";
import { IconCaretRightFilled, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";

const hotspots = [
  { x: 15, y: 22, label: "Visualization", desc: "Interaktivní vizualizace dat v reálném čase s konfigurovatelným layoutem", link: "#", linkText: "Více o vizualizaci" },
  { x: 45, y: 5, label: "Energy management", desc: "Kompletní správa energií dle ISO 50001 s automatickými reporty", link: "#", linkText: "Více o managementu" },
  { x: 85, y: 25, label: "Fault analysis", desc: "Detekce poruch a anomálií v síti s heatmapou událostí", link: "#", linkText: "Analýza poruch" },
  { x: 48, y: 48, label: "Active power", desc: "Třífázové měření činného výkonu L1/L2/L3 v čase", link: "#", linkText: "Měření výkonu" },
  { x: 28, y: 82, label: "Economic efficiency", desc: "Ekonomické vyhodnocení spotřeby a identifikace úspor", link: "#", linkText: "Analýza nákladů" },
  { x: 82, y: 78, label: "Gas, water, electricity", desc: "Multikomoditní monitoring všech energií na jednom místě", link: "#", linkText: "Multienergie" },
];

export default function CtaBanner() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f7f7] py-14 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-center gap-16">

          {/* Text vlevo */}
          <div className="flex-1 min-w-0">
            <span className="section-label">Software GRIDVIS®</span>
            <h2 className="text-[2rem] font-normal text-black leading-[1.111] mb-4">
              <span className="relative inline-block group/a cursor-pointer"><a href="/dictionary#analyza" className="relative z-10 font-semibold text-[#0170E3] hover:text-[#0f5aa8]">Analyzujte</a><span className="absolute bottom-0 left-0 w-full h-[0.35em] bg-[#0170E3]/15 -z-0" /><span className="absolute left-0 top-full mt-2 w-56 bg-white rounded-[3px] shadow-xl p-4 border border-gray-100 z-30 opacity-0 pointer-events-none group-hover/a:opacity-100 group-hover/a:pointer-events-auto transition-opacity duration-300"><span className="block text-[0.8125rem] font-semibold text-black mb-1">Analýza v reálném čase</span><span className="block text-[0.75rem] text-[#5c5b5b] leading-[1.4] mb-2">Sledujte spotřebu, výkon a kvalitu energie na jednom dashboardu</span><a href="/dictionary#analyza" className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0170E3] hover:text-[#0f5aa8]">Více o analýze →</a></span></span>, <span className="relative inline-block group/v cursor-pointer"><a href="/dictionary#vyhodnoceni" className="relative z-10 font-semibold text-[#0170E3] hover:text-[#0f5aa8]">vyhodnocujte</a><span className="absolute bottom-0 left-0 w-full h-[0.35em] bg-[#0170E3]/15 -z-0" /><span className="absolute left-0 top-full mt-2 w-56 bg-white rounded-[3px] shadow-xl p-4 border border-gray-100 z-30 opacity-0 pointer-events-none group-hover/v:opacity-100 group-hover/v:pointer-events-auto transition-opacity duration-300"><span className="block text-[0.8125rem] font-semibold text-black mb-1">Automatické vyhodnocení</span><span className="block text-[0.75rem] text-[#5c5b5b] leading-[1.4] mb-2">Porovnání s normami, detekce anomálií a trendy spotřeby</span><a href="/dictionary#vyhodnoceni" className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0170E3] hover:text-[#0f5aa8]">Více o vyhodnocení →</a></span></span><br />a dokumentujte <span className="relative inline-block group/e cursor-pointer"><a href="/dictionary#energeticka-data" className="relative z-10 font-semibold text-[#0170E3] hover:text-[#0f5aa8]">energetická</a><span className="absolute bottom-0 left-0 w-full h-[0.35em] bg-[#0170E3]/15 -z-0" /><span className="absolute left-0 top-full mt-2 w-56 bg-white rounded-[3px] shadow-xl p-4 border border-gray-100 z-30 opacity-0 pointer-events-none group-hover/e:opacity-100 group-hover/e:pointer-events-auto transition-opacity duration-300"><span className="block text-[0.8125rem] font-semibold text-black mb-1">Energetická data</span><span className="block text-[0.75rem] text-[#5c5b5b] leading-[1.4] mb-2">Napětí, proud, výkon, účiník, harmonické — vše na jednom místě</span><a href="/dictionary#energeticka-data" className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0170E3] hover:text-[#0f5aa8]">Více o datech →</a></span></span> <span className="relative inline-block group/d cursor-pointer"><a href="/dictionary#export-dat" className="relative z-10 font-semibold text-[#0170E3] hover:text-[#0f5aa8]">data</a><span className="absolute bottom-0 left-0 w-full h-[0.35em] bg-[#0170E3]/20 -z-0" /><span className="absolute left-0 top-full mt-2 w-56 bg-white rounded-[3px] shadow-xl p-4 border border-gray-100 z-30 opacity-0 pointer-events-none group-hover/d:opacity-100 group-hover/d:pointer-events-auto transition-opacity duration-300"><span className="block text-[0.8125rem] font-semibold text-black mb-1">Export a dokumentace</span><span className="block text-[0.75rem] text-[#5c5b5b] leading-[1.4] mb-2">Generujte reporty v PDF, CSV a sdílejte data s ERP systémy</span><a href="/dictionary#export-dat" className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0170E3] hover:text-[#0f5aa8]">Více o exportu →</a></span></span>
            </h2>
            <p className="text-[1rem] text-black leading-[1.375] mb-8 max-w-lg">
              S vizualizačním software Gridvis® lokalizujete energeticky náročné
              spotřebiče, detekujete poruchy v rané fázi a plníte zákonné
              požadavky i normy EN&nbsp;50160 a ISO&nbsp;50001.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a href="#" className="btn-primary">
                Stáhnout zdarma <IconCaretRightFilled size={18} stroke={2} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 h-[48px] font-semibold text-[1rem] border border-[#0170E3] text-[#0170E3] rounded-[3px] hover:bg-[#0170E3] hover:text-white transition-colors"
              >
                Naplánovat demo <IconCaretRightFilled size={18} stroke={2} />
              </a>
            </div>
          </div>

          {/* Obrázek vpravo – zvětšený, přesahující */}
          <div className="flex-shrink-0 w-[580px] relative -mr-16">
            <a href="#" className="block group">
              <Image
                src="/gridvis-keyvisual.avif"
                alt="GridVis software – interaktivní vizualizace energetických dat"
                width={580}
                height={420}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
            </a>

            {/* Hotspoty s plus ikonami */}
            {hotspots.map((spot, i) => (
              <div
                key={spot.label}
                className="absolute"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                {/* Plus tlačítko */}
                <button
                  onClick={() => setActiveSpot(activeSpot === i ? null : i)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    activeSpot === i
                      ? 'bg-white text-[#0170E3] scale-110'
                      : 'bg-[#0170E3] text-white hover:scale-110'
                  }`}
                >
                  {activeSpot === i ? <IconX size={14} stroke={2.5} /> : <IconPlus size={14} stroke={2.5} />}
                </button>

                {/* Info pole */}
                {activeSpot === i && (
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 w-56 bg-white rounded-[3px] shadow-xl p-4 z-30 border border-gray-100">
                    <p className="text-[0.8125rem] font-semibold text-black mb-1">{spot.label}</p>
                    <p className="text-[0.75rem] text-[#5c5b5b] leading-[1.4] mb-3">{spot.desc}</p>
                    <a href={spot.link} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0170E3] hover:text-[#0f5aa8] transition-colors">
                      {spot.linkText}
                      <IconCaretRightFilled size={10} stroke={2} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
