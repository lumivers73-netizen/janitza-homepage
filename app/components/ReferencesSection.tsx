"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const references = [
  {
    logo: "ŠKODA AUTO",
    title: "Monitoring energie ve výrobních halách",
    desc: "Implementace systému UMG 96RM pro kontinuální měření a analýzu kvality elektrické energie.",
  },
  {
    logo: "ČEZ",
    title: "Optimalizace rozvodné sítě",
    desc: "Nasazení analyzátorů UMG 801 pro monitoring distribuční soustavy a detekci poruch.",
  },
  {
    logo: "FOXCONN",
    title: "Kompenzace jalového výkonu",
    desc: "Komplexní řešení kompenzace s regulátory Prophi pro snížení nákladů na energii.",
  },
];

const VISIBLE = 3;
const TOTAL_SIMULATED = 9;

export default function ReferencesSection() {
  const [offset, setOffset] = useState(0);
  const realMax = references.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(realMax, o + 1));

  return (
    <section className="bg-[#f5f7f7] py-14">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-4 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
            Co říkají naši zákazníci
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
            aria-label="Předchozí reference"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronLeft size={20} stroke={2} />
          </button>

          <button
            onClick={next}
            disabled={false}
            aria-label="Další reference"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronRight size={20} stroke={2} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE + 1.8)}%)` }}
            >
              {references.map((ref) => (
                <a
                  key={ref.title}
                  href="#"
                  className="product-card group bg-white rounded-lg p-8 flex flex-col flex-shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})` }}
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <span className="text-[1.125rem] font-bold text-[#0170E3] tracking-wide">{ref.logo}</span>
                    <Image src="/ref-logo.png" alt={ref.logo} width={48} height={48} className="h-9 w-auto object-contain flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(1825%) hue-rotate(198deg) brightness(101%) contrast(98%)' }} />
                  </div>
                  <h3 className="text-[1.125rem] font-semibold text-black leading-[1.3] mb-3 group-hover:text-[#0170E3] transition-colors">
                    {ref.title}
                  </h3>
                  <p className="text-[0.875rem] text-black leading-[1.5] flex-1">
                    {ref.desc}
                  </p>
                  <span className="text-[#0170E3] font-semibold text-[0.875rem] mt-1">
                    Zobrazit případovou studii
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <a href="#" className="inline-flex items-center justify-center px-5 py-2 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.875rem] font-semibold rounded-[3px] transition-colors">
            Zobrazit všechny reference
          </a>
        </div>
      </div>
    </section>
  );
}
