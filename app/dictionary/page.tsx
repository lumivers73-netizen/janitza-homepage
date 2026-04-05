import type { Metadata } from "next";
import { IconArrowLeft, IconBook } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Slovník energetiky – Janitza | Měření, analýza a management elektrické energie",
  description: "Kompletní slovník pojmů z oblasti měření a managementu elektrické energie. Spotřeba, analýza dat, vyhodnocení, energetická data, kvalita sítě a další klíčové pojmy.",
};

const terms = [
  {
    id: "spotreba",
    term: "Spotřeba energie",
    definition: "Celkové množství elektrické energie odebrané za určité období, měřené v kWh. Přesné měření spotřeby je základem pro optimalizaci nákladů a plnění normy ISO 50001.",
    details: [
      "Měření v reálném čase po jednotlivých odběrných místech",
      "Identifikace největších spotřebičů v provozu",
      "Porovnání skutečné vs. fakturované spotřeby",
      "Podklad pro energetické audity",
    ],
    related: "Analyzátory Janitza řady UMG měří spotřebu s přesností třídy 0,2 a odesílají data do GridVis® pro vyhodnocení.",
    productLink: "/#kategorie",
    productLabel: "Zobrazit analyzátory",
  },
  {
    id: "pod-kontrolou",
    term: "Energie pod kontrolou",
    definition: "Stav, kdy máte úplný přehled o energetických tocích ve vašem provozu — v reálném čase, s alarmy a automatickými reporty.",
    details: [
      "Okamžité notifikace při překročení limitů",
      "Automatické reporty pro management",
      "Vizualizace na dashboardech v GridVis®",
      "Vzdálený přístup odkudkoli",
    ],
    related: "Kombinace analyzátorů Janitza a softwaru GridVis® vám dá kompletní kontrolu nad energií ve vašem provozu.",
    productLink: "/#kategorie",
    productLabel: "Zjistit jak na to",
  },
  {
    id: "analyza",
    term: "Analýza elektrické energie",
    definition: "Systematické měření a vyhodnocování parametrů elektrické sítě — napětí, proudu, výkonu, účiníku, harmonických a kvality napětí.",
    details: [
      "Třífázové měření v reálném čase",
      "Harmonická analýza do 63. řádu",
      "Detekce přechodových jevů a flickeru",
      "Kontinuální záznam pro zpětnou analýzu",
    ],
    related: "Analyzátory Janitza provádějí analýzu automaticky a ukládají data pro pozdější vyhodnocení v GridVis®.",
    productLink: "/#kategorie",
    productLabel: "Vybrat analyzátor",
  },
  {
    id: "vyhodnoceni",
    term: "Vyhodnocení energetických dat",
    definition: "Proces zpracování naměřených dat do srozumitelných výstupů — trendů, porovnání s normami, identifikace anomálií a doporučení pro úspory.",
    details: [
      "Automatické porovnání s limity EN 50160",
      "Detekce anomálií a odchylek od normy",
      "Trendy spotřeby po dnech, týdnech, měsících",
      "Benchmarking mezi odběrnými místy",
    ],
    related: "GridVis® automaticky vyhodnocuje data z analyzátorů a generuje reporty bez manuální práce.",
    productLink: "/#kategorie",
    productLabel: "Více o GridVis®",
  },
  {
    id: "energeticka-data",
    term: "Energetická data",
    definition: "Soubor měřených veličin elektrické sítě: napětí (V), proud (A), činný výkon (kW), jalový výkon (kVAr), účiník (cos φ), harmonické složky a kvalita napětí.",
    details: [
      "Napětí, proud, výkon — základní trojice",
      "Účiník a jalový výkon — klíč k penále",
      "Harmonické — příčina poruch zařízení",
      "Kvalita napětí — flicker, přerušení, nesymetrie",
    ],
    related: "Analyzátory Janitza měří všechny tyto veličiny současně a ukládají je s časovým razítkem pro kompletní dokumentaci.",
    productLink: "/#kategorie",
    productLabel: "Zobrazit produkty",
  },
  {
    id: "export-dat",
    term: "Export a dokumentace dat",
    definition: "Schopnost exportovat naměřená data do standardních formátů (CSV, PDF, XML) a integrovat je s externími systémy (ERP, SCADA, BMS).",
    details: [
      "Export do CSV, PDF a Excel",
      "Automatické e-mailové reporty",
      "REST API pro integraci s ERP",
      "Propojení s SCADA a BMS systémy",
    ],
    related: "GridVis® nabízí flexibilní export a API pro napojení na jakýkoli podnikový systém.",
    productLink: "/#kategorie",
    productLabel: "Více o GridVis®",
  },
];

export default function EnergyGlossaryPage() {
  return (
    <main>
      {/* Sticky navigace */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="btn-primary !h-10 !text-[0.875rem]">
            <IconArrowLeft size={16} stroke={2} />
            Zpět na hlavní stránku
          </a>
          <span className="text-[0.8125rem] text-[#5c5b5b]">Slovník energetiky</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <h1 className="text-[2.5rem] font-normal text-black leading-[1.1] mb-4">
            Slovník energetiky
          </h1>
          <p className="text-[1.125rem] text-black leading-[1.5] max-w-[700px] mx-auto">
            Klíčové pojmy z oblasti měření, analýzy a managementu elektrické energie. Každý termín vysvětlujeme v kontextu praxe a produktů Janitza.
          </p>
        </div>
      </section>

      {/* Pojmy */}
      {terms.map((item, i) => (
        <section key={item.id} id={item.id} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f7]'} py-14`}>
          <div className="max-w-[1320px] mx-auto px-6">
            <div className="flex items-start gap-4 mb-8">
              <div className={`w-14 h-14 rounded-[3px] ${i % 2 === 0 ? 'bg-[#f5f7f7]' : 'bg-white'} flex items-center justify-center flex-shrink-0`}>
                <IconBook size={28} stroke={1.5} className="text-[#0170E3]" />
              </div>
              <div>
                <h2 className="text-[2rem] font-normal text-black leading-[1.1]">{item.term}</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[1rem] text-black leading-[1.6] mb-4">
                  {item.definition}
                </p>
                <p className="text-[1rem] text-black leading-[1.6]">
                  {item.related}
                </p>
                <a href={item.productLink} className="inline-flex items-center justify-center px-5 py-2 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.875rem] font-semibold rounded-[3px] transition-colors mt-6">
                  {item.productLabel}
                </a>
              </div>
              <div className={`${i % 2 === 0 ? 'bg-[#f5f7f7]' : 'bg-white'} rounded-lg p-8`}>
                <p className="font-semibold text-[#0170E3] mb-3">V praxi to znamená</p>
                <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mb-4">
            Chcete vědět víc?
          </h2>
          <p className="text-[1rem] text-black leading-[1.5] mb-8 max-w-[500px] mx-auto">
            Naši technici vám rádi vysvětlí jakýkoli pojem v kontextu vašeho konkrétního provozu.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="/#kategorie" className="btn-primary">
              Prohlédnout produkty
            </a>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-4 h-[48px] font-semibold text-[1rem] border border-[#0170E3] text-[#0170E3] rounded-[3px] hover:bg-[#0170E3] hover:text-white transition-colors"
            >
              Konzultace s technikem
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
