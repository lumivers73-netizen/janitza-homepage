"use client";

import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconCaretRightFilled } from "@tabler/icons-react";
import { useState } from "react";

const industries = [
  {
    label: "Průmyslové podniky",
    desc: "Snižte prostoje výroby díky přesným energetickým datům",
    cta: "Optimalizujte výrobu",
    image: "/datovacentra.png",
    hoverText: "Identifikujte energeticky náročné procesy a eliminujte zbytečné ztráty ve výrobě.",
  },
  {
    label: "Energetika a LDS",
    desc: "Měřicí technika pro spolehlivou distribuci energie",
    cta: "Řešení pro vaši síť",
    image: "/budovy a infrastruktura.png",
    hoverText: "Spolehlivé měření a billing pro lokální distribuční soustavy a utility.",
  },
  {
    label: "Kancelářské budovy",
    desc: "Snižte náklady na provoz a uhlíkovou stopu budovy",
    cta: "Optimalizujte budovu",
    image: "/energier a utility.png",
    hoverText: "Monitorujte spotřebu po patrech, optimalizujte HVAC a plňte ESG požadavky.",
  },
  {
    label: "Datová centra",
    desc: "Nepřetržitý provoz a přesné měření efektivity",
    cta: "Zabezpečte datacentrum",
    image: "/prumyslovavyroba.png",
    hoverText: "Předcházejte výpadkům, měřte efektivitu a spravujte náklady colocation klientů.",
  },
];

const VISIBLE = 4;
const TOTAL_SIMULATED = 9;

export default function IndustriesSection() {
  const [offset, setOffset] = useState(0);
  const maxOffset = TOTAL_SIMULATED - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const realMax = industries.length - VISIBLE;
  const next = () => setOffset((o) => Math.min(realMax, o + 1));

  return (
    <section className="bg-white py-14" itemScope itemType="https://schema.org/ItemList">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-4 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
            Řešení pro vaše odvětví
          </h2>
          <p className="sr-only">
            Janitza nabízí řešení pro měření a management elektrické energie v průmyslu, energetice, komerčních budovách a datových centrech. Každé odvětví má specifické požadavky na monitoring, kvalitu sítě a úspory energie.
          </p>
        </div>
        <meta itemProp="name" content="Odvětvová řešení Janitza" />
        <meta itemProp="description" content="Řešení Janitza pro průmysl, energetiku, komerční budovy a datová centra – měření, monitoring a optimalizace elektrické energie." />

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
        <div className="relative" role="region" aria-label="Odvětvová řešení Janitza" aria-roledescription="carousel">
          {/* Šipka vlevo */}
          <button
            onClick={prev}
            disabled={offset === 0}
            aria-label="Předchozí odvětví"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronLeft size={20} stroke={2} />
          </button>

          {/* Šipka vpravo */}
          <button
            onClick={next}
            disabled={false}
            aria-label="Další odvětví"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronRight size={20} stroke={2} />
          </button>

          {/* Karty */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE + 1.2)}%)` }}
              aria-live="polite"
            >
              {industries.map((ind, i) => (
                <article
                  key={ind.label}
                  className="product-card group flex flex-col rounded-lg overflow-hidden bg-[#f5f7f7] flex-shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 16}px) / ${VISIBLE})` }}
                  itemScope
                  itemProp="itemListElement"
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  <a href="#" className="flex flex-col flex-1" aria-label={`${ind.label} – ${ind.desc}`}>
                    <div className="flex-1 p-6 pb-5 text-center flex flex-col justify-between">
                      <div>
                        <h3 itemProp="name" className="text-[1.25rem] font-normal text-black leading-[1.3] mb-3 group-hover:text-[#0170E3] transition-colors">
                          {ind.label}
                        </h3>
                        <p itemProp="description" className="text-[0.875rem] text-black leading-[1.375] mb-4">
                          {ind.desc}
                        </p>
                      </div>
                      <span className="self-center inline-flex items-center justify-center px-3.5 py-1 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.75rem] font-medium rounded-[3px] transition-colors" aria-hidden="true">
                        {ind.cta}
                      </span>
                    </div>
                    <div className="h-52 flex-shrink-0 overflow-hidden relative">
                      <Image src={ind.image} alt={`Janitza řešení pro ${ind.label.toLowerCase()} – ${ind.desc.toLowerCase()}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                        <p className="text-[1rem] text-white font-semibold leading-[1.5] text-center">
                          {ind.hoverText}
                        </p>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <a href="#" className="inline-flex items-center justify-center px-5 py-2 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.875rem] font-semibold rounded-[3px] transition-colors">
            Zobrazit všechna řešení
          </a>
        </div>
      </div>
    </section>
  );
}
