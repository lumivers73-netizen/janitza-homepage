"use client";

import { IconCaretRightFilled, IconChevronLeft, IconChevronRight, IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const solutions = [
  { title: "UMG 801",         link: "Více o UMG 801",          image: "/UMG 801.png",         desc: "Modulární síťový analyzátor nové generace. Rozšiřitelný pro komplexní monitoring sítě a měření kvality napětí.", features: ["Modulární rozšiřitelnost", "Přesnost třídy 0.2", "Až 92 měřicích kanálů", "Komunikace přes OPC UA", "Integrovaný 4GB úložiště"] },
  { title: "Datová centra",   link: "Více o datových centrech", image: "/DATOVÁ CENTRA.png",   desc: "Komplexní řešení pro monitoring napájení, PUE a kvalitu sítě v datových centrech a serverovnách.", features: ["Přesné měření PUE", "Monitoring reziduálních proudů", "Certifikace ISO 50001", "Prevence výpadků sítě", "Detekce napěťových událostí"] },
  { title: "UMG 800",         link: "Více o UMG 800",          image: "/UMG 800.png",         desc: "Kompaktní analyzátor pro přehledový monitoring odběrových míst s integrovaným webovým serverem.", features: ["Kompaktní 2-modulová velikost", "Integrovaný webový server", "Virtuální měřicí body", "Rychlé zprovoznění přes USB", "Škálovatelnost bez výměny"] },
  { title: "GRIDVIS® Online", link: "Více o GRIDVIS®",         image: "/Banner GRIDVIS.png",  desc: "Cloudová platforma pro vizualizaci, analýzu a reportování energetických dat v reálném čase.", features: ["Přístup odkudkoli", "Interaktivní dashboardy", "Automatické reporty", "Vizualizace CO₂ emisí", "Snadná správa spotřeby"] },
];

const VISIBLE = 4;
const TOTAL_SIMULATED = 8;

export default function FeaturedSolutions() {
  const [offset, setOffset] = useState(0);
  const realMax = solutions.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(realMax, o + 1));

  return (
    <section className="bg-white py-14" itemScope itemType="https://schema.org/ItemList">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-4 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.111]">
            Osvědčená řešení pro měření, řízení<br />a optimalizaci kvality energie
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
          {/* Šipka vlevo */}
          <button
            onClick={prev}
            disabled={offset === 0}
            aria-label="Předchozí řešení"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronLeft size={20} stroke={2} />
          </button>

          {/* Šipka vpravo */}
          <button
            onClick={next}
            disabled={false}
            aria-label="Další řešení"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronRight size={20} stroke={2} />
          </button>

          {/* Karty */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE + 1.2)}%)` }}
            >
              {solutions.map((sol, i) => (
                <a
                  key={sol.title}
                  href="#"
                  className="product-card group flex flex-col bg-[#f5f7f7] rounded-lg overflow-hidden flex-shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 16}px) / ${VISIBLE})` }}
                  itemScope
                  itemProp="itemListElement"
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  {/* Obrázek nahoře */}
                  <div className="h-56 flex items-center justify-center flex-shrink-0 bg-[#f5f7f7] overflow-hidden relative">
                    <Image
                      src={sol.image}
                      alt={`Janitza ${sol.title} – ${sol.desc}`}
                      width={300}
                      height={224}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#0170E3]/0 group-hover:bg-[#0170E3]/90 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-start p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ul className="text-left text-[1.0625rem] text-white leading-[1.6] space-y-2">
                        {sol.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-1.5">
                            <IconCheck size={15} stroke={2.5} className="text-white flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Text dole */}
                  <div className="p-6 pb-5 flex flex-col flex-1 bg-[#f5f7f7] text-center">
                    <h3 itemProp="name" className="text-[1.25rem] font-normal text-black leading-[1.3] mb-3 group-hover:text-[#0170E3] transition-colors">
                      {sol.title}
                    </h3>
                    <p itemProp="description" className="text-[0.875rem] text-black leading-[1.375] flex-1 mb-4">
                      {sol.desc}
                    </p>
                    <span className="self-center inline-flex items-center justify-center px-3.5 py-1 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.75rem] font-medium rounded-[3px] transition-colors">
                      {sol.link}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
