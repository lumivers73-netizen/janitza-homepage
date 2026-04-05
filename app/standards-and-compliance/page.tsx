import type { Metadata } from "next";
import { IconArrowLeft, IconShieldCheck } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Normy a certifikace – Janitza | ISO 50001, EN 50160, IEC 61000, RoHS",
  description: "Produkty Janitza splňují nejpřísnější mezinárodní normy: ISO 50001, EN 50160, ISO 9001, ISO 14001, ISO 27001, IEC 61000-4-30 Class A a RoHS. Kompletní přehled certifikací.",
};

export default function StandardsPage() {
  return (
    <main>
      {/* Sticky navigace */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="btn-primary !h-10 !text-[0.875rem]">
            <IconArrowLeft size={16} stroke={2} />
            Zpět na hlavní stránku
          </a>
          <span className="text-[0.8125rem] text-[#5c5b5b]">Normy a certifikace</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <h1 className="text-[2.5rem] font-normal text-black leading-[1.1] mb-4">
            Normy a certifikace
          </h1>
          <p className="text-[1.125rem] text-black leading-[1.5] max-w-[700px] mx-auto">
            Produkty Janitza splňují nejpřísnější mezinárodní standardy pro měření elektrické energie, kvalitu sítě, environmentální odpovědnost a kybernetickou bezpečnost.
          </p>
        </div>
      </section>

      {/* ISO 50001 */}
      <section id="iso-50001" className="bg-white py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-[#f5f7f7] flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">ISO 50001</h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Energetický management</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                ISO 50001 definuje požadavky na systém energetického managementu. Produkty Janitza poskytují přesná data potřebná pro implementaci, udržování a kontinuální zlepšování energetické efektivity.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Software GridVis® automatizuje sběr dat, generuje reporty a pomáhá identifikovat oblasti s potenciálem úspor — klíčové požadavky normy ISO 50001.
              </p>
            </div>
            <div className="bg-[#f5f7f7] rounded-lg p-8">
              <p className="font-semibold text-[#0170E3] mb-2">Klíčové přínosy</p>
              <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                <li>Systematické snižování spotřeby energie</li>
                <li>Průkazné plnění legislativních požadavků</li>
                <li>Automatizované reporty pro auditory</li>
                <li>Identifikace největších spotřebičů</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EN 50160 */}
      <section id="en-50160" className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">EN 50160</h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Kvalita napětí v distribučních sítích</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Norma EN 50160 stanovuje parametry kvality napětí v distribučních sítích — odchylky, harmonické, flicker, přerušení a nesymetrie. Analyzátory Janitza řady UMG 512-PRO a UMG 96-PQ měří všechny tyto parametry kontinuálně.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Výsledky měření jsou automaticky vyhodnocovány v GridVis® a porovnávány s limity normy. Při překročení dojde k okamžité notifikaci.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="font-semibold text-[#0170E3] mb-2">Monitorované parametry</p>
              <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                <li>Odchylky napětí a frekvence</li>
                <li>Harmonické do 50. řádu</li>
                <li>Flicker (Pst, Plt)</li>
                <li>Krátkodobá a dlouhodobá přerušení</li>
                <li>Nesymetrie napětí</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 9001 */}
      <section id="iso-9001" className="bg-white py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-[#f5f7f7] flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">ISO 9001</h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Systém řízení kvality</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Janitza je certifikována dle ISO 9001 pro vývoj, výrobu a servis měřicích přístrojů. Každý produkt prochází kompletní výstupní kontrolou a funkčním testem.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Certifikace garantuje konzistentní kvalitu, sledovatelnost procesů a neustálé zlepšování napříč celou organizací.
              </p>
            </div>
            <div className="bg-[#f5f7f7] rounded-lg p-8">
              <p className="font-semibold text-[#0170E3] mb-2">Co to znamená pro vás</p>
              <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                <li>100% testované přístroje</li>
                <li>Sledovatelnost každého kusu</li>
                <li>Standardizované servisní procesy</li>
                <li>Konzistentní kvalita po celém světě</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 14001 */}
      <section id="iso-14001" className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">ISO 14001</h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Environmentální management</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Janitza minimalizuje dopad výroby na životní prostředí. Certifikace ISO 14001 pokrývá celý životní cyklus produktu — od návrhu přes výrobu po recyklaci.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Výrobní závod v Lahnau využívá obnovitelné zdroje energie a implementuje programy snižování odpadu a emisí.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="font-semibold text-[#0170E3] mb-2">Environmentální závazky</p>
              <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                <li>Snižování uhlíkové stopy výroby</li>
                <li>RoHS kompatibilní komponenty</li>
                <li>Recyklovatelné obaly a materiály</li>
                <li>Dlouhá životnost přístrojů (15+ let)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 27001 */}
      <section id="iso-27001" className="bg-white py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-[#f5f7f7] flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">ISO 27001</h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Informační bezpečnost a kybernetická ochrana</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Měřicí přístroje komunikují po síti — Modbus TCP, OPC UA, MQTT. ISO 27001 garantuje, že bezpečnost dat je součástí návrhu každého produktu.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Šifrovaná komunikace, správa uživatelských rolí, podepsané firmware updaty a pravidelné penetrační testy jsou standard.
              </p>
            </div>
            <div className="bg-[#f5f7f7] rounded-lg p-8">
              <p className="font-semibold text-[#0170E3] mb-2">Bezpečnostní opatření</p>
              <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                <li>TLS/SSL šifrování komunikace</li>
                <li>Granulární řízení přístupu</li>
                <li>Podepsané firmware binárky</li>
                <li>Nezávislé bezpečnostní audity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IEC 61000-4-30 */}
      <section id="iec-61000" className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">IEC 61000-4-30 Class A</h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Nejvyšší třída přesnosti měření kvality energie</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Class A je nejvyšší třída přesnosti definovaná normou IEC 61000-4-30. Přístroje s touto certifikací poskytují právně závazná měření kvality napětí — použitelná pro smluvní vztahy, reklamace a soudní spory.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Analyzátory Janitza UMG 512-PRO a UMG 96-PQ splňují Class A a jsou kalibrovány v akreditované laboratoři.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <p className="font-semibold text-[#0170E3] mb-2">Proč Class A</p>
              <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                <li>Právně závazné výsledky měření</li>
                <li>Srovnatelné výsledky napříč přístroji</li>
                <li>Přesně definované metody agregace</li>
                <li>Požadováno distributory energie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RoHS */}
      <section id="rohs" className="bg-white py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-[#f5f7f7] flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">RoHS</h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Omezení nebezpečných látek v elektronice</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Všechny produkty Janitza splňují směrnici RoHS (Restriction of Hazardous Substances). To znamená, že neobsahují olovo, rtuť, kadmium ani další nebezpečné látky nad stanovené limity.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                RoHS kompatibilita je důležitá pro zákazníky s vlastními environmentálními závazky a pro export do zemí s přísnými regulacemi.
              </p>
            </div>
            <div className="bg-[#f5f7f7] rounded-lg p-8">
              <p className="font-semibold text-[#0170E3] mb-2">Omezené látky</p>
              <ul className="text-[0.9375rem] text-black leading-[1.8] space-y-1">
                <li>Olovo (Pb) — pod 0,1 %</li>
                <li>Rtuť (Hg) — pod 0,1 %</li>
                <li>Kadmium (Cd) — pod 0,01 %</li>
                <li>Šestimocný chrom — pod 0,1 %</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mb-4">
            Potřebujete certifikát nebo dokumentaci?
          </h2>
          <p className="text-[1rem] text-black leading-[1.5] mb-8 max-w-[500px] mx-auto">
            Rádi vám zašleme kopie certifikátů, prohlášení o shodě nebo technickou dokumentaci.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="/#kategorie" className="btn-primary">
              Prohlédnout produkty
            </a>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-4 h-[48px] font-semibold text-[1rem] border border-[#0170E3] text-[#0170E3] rounded-[3px] hover:bg-[#0170E3] hover:text-white transition-colors"
            >
              Vyžádat dokumentaci
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
