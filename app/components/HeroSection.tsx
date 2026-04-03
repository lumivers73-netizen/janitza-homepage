"use client";

import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";

const categories = [
  { title: "Energetické analyzátory", desc: "Přesné měření spotřeby a toků energie v reálném čase", image: "/varianta_0.png", cta: "Vybrat analyzátor", badge: "Nejprodávanější", features: ["Měření v reálném čase", "Vysoká přesnost dat", "Snadná instalace", "Snížení nákladů", "Přehledný displej"] },
  { title: "Síťové analyzátory", desc: "Modulární přístroje pro komplexní monitoring elektrické sítě", image: "/varianta_A_33pct.png", cta: "Prozkoumat řadu UMG", features: ["Modulární rozšiřitelnost", "Komplexní monitoring sítě", "Vzdálený přístup", "Flexibilní konfigurace", "Dlouhá životnost"] },
  { title: "Kvalita napětí", desc: "Normované měření power quality dle EN 50160 a IEC 61000", image: "/varianta_B_50pct.png", cta: "Zobrazit analyzátory", features: ["Shoda s normami", "Detekce harmonických", "Kontinuální záznam", "Prevence poruch", "Certifikovaná měření"] },
  { title: "Diferenční proudy (RCM)", desc: "Kontinuální sledování reziduálních proudů pro požární ochranu", image: "/varianta_C_66pct.png", cta: "Zobrazit RCM řešení", features: ["Požární ochrana", "Nepřetržité sledování", "Včasná detekce úniků", "Bezpečnost provozu", "Automatická signalizace"] },
  { title: "Software GridVis®", desc: "Vizualizace, analýza a reporting energetických dat", image: "/GR-new.png", cta: "Stáhnout GridVis", features: ["Přehledná vizualizace", "Automatický reporting", "Snadná analýza dat", "Centrální správa zařízení", "Export do formátů"] },
  { title: "Energetický management", desc: "Řešení pro ISO 50001, úspory energie a snižování nákladů", image: "/KU-new.png", cta: "Zjistit více", features: ["Certifikace ISO 50001", "Úspora energie", "Snížení provozních nákladů", "Identifikace plýtvání", "Transparentní spotřeba"] },
  { title: "Řízení zátěže & CO₂", desc: "Optimalizace odběrových špiček a sledování uhlíkové stopy", image: "/MT-new.png", cta: "Zobrazit řešení", features: ["Optimalizace odběrových špiček", "Sledování uhlíkové stopy", "Nižší emisní náklady", "Automatické řízení zátěže", "Ekologický provoz"] },
  { title: "Služby & projekty", desc: "Návrh, uvedení do provozu, školení a servisní podpora", image: "/SP-new.png", cta: "Objednat servis", features: ["Odborné školení", "Rychlý servis", "Profesionální uvedení do provozu", "Individuální návrh řešení", "Dlouhodobá podpora"] },
];

export default function HeroSection() {
  return (
    <section className="bg-white pt-8 pb-14" itemScope itemType="https://schema.org/ItemList">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Nadpis sekce – SEO H2 */}
        <h2 className="sr-only">
          Produktové kategorie Janitza – měření a management elektrické energie. Autorizovaný distributor Janitza pro ČR a SR nabízí energetické analyzátory, síťové analyzátory, měření kvality napětí, monitorování diferenčních proudů, software GridVis, energetický management, řízení zátěže a servisní služby.
        </h2>
        <meta itemProp="name" content="Produktové kategorie Janitza" />
        <meta itemProp="description" content="Kompletní portfolio Janitza pro měření, analýzu a management elektrické energie – analyzátory, software GridVis, kompenzace a servis." />

        {/* 4×2 grid */}
        <nav aria-label="Produktové kategorie">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <a
                key={cat.title}
                href="#"
                className="product-card group flex flex-col rounded-lg overflow-hidden bg-[#f5f7f7] cursor-pointer"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(i + 1)} />
                <div className="flex-1 p-6 pb-5 text-center flex flex-col justify-between">
                  <div>
                    <h3 itemProp="name" className="text-[1.25rem] font-normal leading-[1.3] mb-3 text-black group-hover:text-[#0170E3] transition-colors decoration-2 underline-offset-4 decoration-transparent group-hover:decoration-[#0170E3] transition-all duration-300" style={{ textDecorationLine: 'underline' }}>
                      {cat.title}
                    </h3>
                    <p itemProp="description" className="text-[0.875rem] text-black leading-[1.375] mb-4">
                      {cat.desc}
                    </p>
                  </div>
                  <span className="self-center inline-flex items-center text-[#0170E3] text-[0.8125rem] font-semibold transition-colors group-hover:text-[#0f5aa8]">
                    {cat.cta}
                  </span>
                </div>
                <div className="h-52 flex-shrink-0 flex items-center justify-center overflow-hidden relative bg-[#e4e8eb]">
                  {cat.badge && (
                    <span className="absolute top-2 right-2 z-20 text-[0.625rem] font-semibold uppercase tracking-[1px] text-white bg-[#0170E3] rounded-[3px] px-2 py-0.5">
                      {cat.badge}
                    </span>
                  )}
                  <Image
                    src={cat.image}
                    alt={`Janitza ${cat.title} – ${cat.desc}`}
                    width={468}
                    height={274}
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Modrý overlay s výhodami */}
                  <div className="absolute inset-0 bg-[#0170E3]/0 group-hover:bg-[#0170E3]/90 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-start p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ul className="text-left text-[1.0625rem] text-white leading-[1.6] space-y-2">
                      {cat.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5">
                          <IconCheck size={15} stroke={2.5} className="text-white flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-5 flex justify-center">
          <a href="#" className="inline-flex items-center justify-center px-5 py-2 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.875rem] font-semibold rounded-[3px] transition-colors">
            Prohlédnout všechna řešení
          </a>
        </div>
      </div>
    </section>
  );
}
