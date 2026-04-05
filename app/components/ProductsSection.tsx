"use client";

import { IconShoppingCart, IconHeart, IconScale, IconChevronLeft, IconChevronRight, IconStar } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const products = [
  { badge: "Class A",         badgeColor: "bg-amber-500 text-white",   promo: ["Sleva", "1+1 zdarma"], title: "Janitza UMG 512-PRO – analyzátor kvality sítě Class A",    desc: "Certifikovaný Power Quality analyzátor dle IEC 61000-4-30 Ed.3 Class A pro kontinuální monitoring kvality napětí v distribučních sítích NN/VN. Harmonické do 63. řádu, flicker, transiety.",    price: "od 45 900 Kč", image: "/UMG 512-PRO.png", categoryHref: "#kategorie", sellPoints: ["Doprava + instalace zdarma", "Splátky bez navýšení", "Cashback 5 000 Kč", "30 dní na vrácení", "Firmware update 3 roky"] },
  { badge: "Nejprodávanější", badgeColor: "bg-[#0170E3] text-white",   title: "Janitza UMG 96RM-E – multifunkční síťový analyzátor",     desc: "Kompaktní panelový analyzátor 96×96 mm s Ethernet rozhraním, integrovaným RCM monitoringem reziduálních proudů a pamětí 256 MB pro záznam dat. Modbus TCP/RTU.",   price: "od 18 500 Kč", image: "/UMG 96RM-E.png", categoryHref: "#kategorie", sellPoints: ["Akce 2+1 zdarma", "Sleva 15 % pro nováčky", "Kabel + software jako dárek", "Záruka 4 roky", "Kupón 10 % na příště"] },
  { badge: "Novinka",         badgeColor: "bg-emerald-500 text-white", title: "Janitza UMG 96-PQ-L-LP – modulární měřicí přístroj",       desc: "Měřicí přístroj nové generace s modulární architekturou pro měření výkonu, kvality sítě a energetický management. Rozšiřitelný o I/O moduly, napájení 24–48 V DC.",            price: "od 22 900 Kč", image: "/UMG 96-PQ-L-LP.png", categoryHref: "#kategorie", sellPoints: ["Bundle sleva 20 %", "Tento týden −3 000 Kč", "Školení obsluhy zdarma", "Trade-in sleva 5 000 Kč", "Doručení do 24 hodin"] },
  { badge: "Kompenzace",      badgeColor: "bg-violet-600 text-white",  title: "Janitza VARTRON 25 kVAr – kompenzační kondenzátor",        desc: "Výkonový kondenzátor 25 kVAr / 440 V pro kompenzaci jalového výkonu v průmyslových rozvaděčích. Samoregenerační metaliz. film, pojistka, vybíjecí odpor, montáž na DIN lištu.",                       price: "od 1 550 Kč",  image: "/VARTRON 25 kVAr.png", categoryHref: "#kategorie", sellPoints: ["Množstevní sleva až 35 %", "Druhý kus za polovinu", "Doprava zdarma od 2 ks", "Gravírování štítku zdarma", "Garance nejnižší ceny"] },
];

const VISIBLE = 4;
const TOTAL_SIMULATED = 12;

export default function ProductsSection() {
  const [offset, setOffset] = useState(0);
  const realMax = products.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(realMax, o + 1));

  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-4 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.111]">
            Doporučené produkty
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
            aria-label="Předchozí produkty"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-[3px] bg-[#0170E3] text-white shadow-lg hover:bg-[#0f5aa8] transition-colors disabled:opacity-0 disabled:pointer-events-none"
          >
            <IconChevronLeft size={20} stroke={2} />
          </button>

          {/* Šipka vpravo */}
          <button
            onClick={next}
            disabled={false}
            aria-label="Další produkty"
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
              {products.map((product) => (
                <div
                  key={product.title}
                  className="product-card rounded-[4px] border border-gray-100 bg-white overflow-hidden flex flex-col flex-shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 16}px) / ${VISIBLE})` }}
                >
                  <div className="flex">
                    {/* Fotka */}
                    <div className="group/img relative h-52 flex-1 flex items-center justify-center bg-[#f5f7f7] overflow-hidden pl-3">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={208}
                        className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300"
                      />
                      {product.promo && (
                        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1">
                          {product.promo.map((p) => (
                            <span key={p} className="text-[0.6875rem] font-semibold uppercase tracking-[0.5px] text-white bg-red-500 rounded-[3px] px-2 py-0.5">
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[#0170E3]/0 group-hover/img:bg-[#0170E3]/90 transition-colors duration-500 z-30" />
                      <div className="absolute inset-0 flex items-center justify-start p-5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-30">
                        <ul className="text-left text-[1.0625rem] text-white leading-[1.6] space-y-2">
                          {product.sellPoints.map((sp, si) => (
                            <li key={si} className="flex items-center gap-1.5">
                              <IconStar size={15} stroke={2.5} className="text-white flex-shrink-0" />
                              {sp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Boční panel – ikony */}
                    <div className="flex flex-col gap-2 p-1.5 bg-[#f5f7f7] border-l border-gray-100">
                      <a href={product.categoryHref} className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-[#5c5b5b] hover:text-white hover:bg-[#0170E3] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110" aria-label="Porovnat">
                        <IconScale size={15} stroke={1.5} />
                      </a>
                      <a href={product.categoryHref} className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-[#5c5b5b] hover:text-white hover:bg-[#0170E3] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110" aria-label="Oblíbené">
                        <IconHeart size={15} stroke={1.5} />
                      </a>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[1rem] font-semibold text-black mb-1 leading-[1.3]">{product.title}</h3>
                    <p className="text-[0.875rem] text-black leading-[1.375] flex-1">{product.desc}</p>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <span className="text-[1rem] font-semibold text-[#0170E3] whitespace-nowrap">
                        {product.price}
                      </span>
                      <button className="inline-flex items-center justify-center px-3.5 py-1 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.75rem] font-medium rounded-[3px] transition-colors flex-shrink-0">
                        Do košíku
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
