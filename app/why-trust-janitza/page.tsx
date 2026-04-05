import type { Metadata } from "next";
import { IconWorld, IconCalendar, IconFlag, IconShieldCheck, IconLock, IconArrowLeft } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Proč důvěřovat Janitza – 60+ let, Made in Germany, ISO certifikace",
  description: "Janitza electronics GmbH – německý výrobce s 60letou tradicí, přítomný v 90+ zemích. Certifikace ISO 9001, ISO 14001, ISO 50001 a ISO 27001. 100% Made in Germany.",
};

export default function WhyTrustJanitza() {
  return (
    <main>
      {/* Zpět na hlavní stránku – sticky */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="btn-primary !h-10 !text-[0.875rem]">
            <IconArrowLeft size={16} stroke={2} />
            Zpět na hlavní stránku
          </a>
          <span className="text-[0.8125rem] text-[#5c5b5b]">Proč důvěřovat Janitza</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <h1 className="text-[2.5rem] font-normal text-black leading-[1.1] mb-4">
            Proč důvěřovat Janitza
          </h1>
          <p className="text-[1.125rem] text-black leading-[1.5] max-w-[700px] mx-auto">
            Německá přesnost, globální dosah a certifikovaná kvalita. Přečtěte si, proč nám důvěřují tisíce firem po celém světě.
          </p>
        </div>
      </section>

      {/* 1. 90+ zemí světa */}
      <section id="globalni-dosah" className="bg-white py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-[#f5f7f7] flex items-center justify-center flex-shrink-0">
              <IconWorld size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
                90+ zemí světa
              </h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Globální přítomnost a lokální podpora</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Produkty Janitza jsou nasazeny ve více než 90 zemích na všech kontinentech. Od průmyslových závodů v Německu přes datová centra v Singapuru po energetické utility v Brazílii.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                V České republice a na Slovensku zajišťujeme plnou technickou podporu v češtině — od návrhu řešení přes instalaci až po servis a školení.
              </p>
            </div>
            <div className="bg-[#f5f7f7] rounded-lg p-8">
              <p className="text-[2.5rem] font-semibold text-[#0170E3] leading-none mb-2">90+</p>
              <p className="text-[1rem] text-black mb-6">zemí s aktivními instalacemi</p>
              <p className="text-[2.5rem] font-semibold text-[#0170E3] leading-none mb-2">500 000+</p>
              <p className="text-[1rem] text-black mb-6">nasazených přístrojů celosvětově</p>
              <p className="text-[2.5rem] font-semibold text-[#0170E3] leading-none mb-2">24h</p>
              <p className="text-[1rem] text-black">expedice z vlastního skladu v Pardubicích</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 60+ let na trhu */}
      <section id="tradice" className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0">
              <IconCalendar size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
                60+ let na trhu
              </h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Tradice a kontinuální inovace od roku 1961</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Janitza electronics GmbH byla založena v roce 1961 v Lahnau, Německo. Více než šest dekád se zaměřuje výhradně na měření, analýzu a management elektrické energie.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Tato specializace znamená, že každý produkt vychází z hlubokého porozumění potřebám energetiků, údržby a facility manažerů. Žádné kompromisy, žádné vedlejší obory.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-[1.25rem] font-semibold text-[#0170E3] whitespace-nowrap">1961</span>
                  <span className="text-[0.9375rem] text-black">Založení Janitza electronics v Lahnau</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-[1.25rem] font-semibold text-[#0170E3] whitespace-nowrap">1990</span>
                  <span className="text-[0.9375rem] text-black">Uvedení první řady digitálních analyzátorů UMG</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-[1.25rem] font-semibold text-[#0170E3] whitespace-nowrap">2005</span>
                  <span className="text-[0.9375rem] text-black">Spuštění platformy GridVis® pro správu dat</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-[1.25rem] font-semibold text-[#0170E3] whitespace-nowrap">2015</span>
                  <span className="text-[0.9375rem] text-black">Expanze do 80+ zemí, IoT integrace</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-[1.25rem] font-semibold text-[#0170E3] whitespace-nowrap">2024</span>
                  <span className="text-[0.9375rem] text-black">UMG 801 — modulární platforma nové generace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 100% Made in Germany */}
      <section id="made-in-germany" className="bg-white py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-[#f5f7f7] flex items-center justify-center flex-shrink-0">
              <IconFlag size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
                100 % Made in Germany
              </h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Vývoj, výroba i testování v Německu</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Veškerý vývoj, výroba i finální kontrola probíhají v závodě v Lahnau, Hesensko. Žádný outsourcing, žádné kompromisy na kvalitě komponent.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                Každý přístroj prochází kompletním funkčním testem před expedicí. Výrobní procesy splňují normy ISO 9001 a environmentální standardy ISO 14001.
              </p>
            </div>
            <div className="bg-[#f5f7f7] rounded-lg p-8 flex flex-col justify-center">
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                <span className="font-semibold text-[#0170E3]">Vlastní SMD osazovací linka</span> — plná kontrola nad kvalitou pájení a osazování
              </p>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                <span className="font-semibold text-[#0170E3]">100% výstupní kontrola</span> — každý kus testován před expedicí
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                <span className="font-semibold text-[#0170E3]">Sledovatelnost komponent</span> — plná traceabilita od dodavatele po zákazníka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ISO certifikace */}
      <section id="iso-certifikace" className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0">
              <IconShieldCheck size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
                4 ISO certifikace
              </h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">Kvalita ověřená nezávislými audity</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { cert: "ISO 9001", desc: "Systém řízení kvality. Zajišťuje konzistentní kvalitu produktů a služeb napříč celou organizací." },
              { cert: "ISO 14001", desc: "Environmentální management. Minimalizace dopadu výroby na životní prostředí a kontinuální zlepšování." },
              { cert: "ISO 50001", desc: "Energetický management. Systematické snižování energetické náročnosti vlastní výroby." },
              { cert: "ISO 27001", desc: "Informační bezpečnost. Ochrana dat zákazníků a kybernetická bezpečnost produktů i procesů." },
            ].map((item) => (
              <div key={item.cert} className="bg-white rounded-lg p-6 border-l-[3px] border-[#0170E3]/30">
                <p className="text-[1.5rem] font-semibold text-[#0170E3] mb-3">{item.cert}</p>
                <p className="text-[0.875rem] text-black leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ISO 27001 – Kybernetická bezpečnost */}
      <section id="kyberneticka-bezpecnost" className="bg-white py-14">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 rounded-[3px] bg-[#f5f7f7] flex items-center justify-center flex-shrink-0">
              <IconLock size={28} stroke={1.5} className="text-[#0170E3]" />
            </div>
            <div>
              <h2 className="text-[2rem] font-normal text-black leading-[1.1]">
                Kyberneticky zabezpečeno
              </h2>
              <p className="text-[1rem] text-[#5c5b5b] mt-1">ISO 27001 certifikace pro bezpečnost dat a komunikace</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                Moderní analyzátory komunikují po síti — Modbus TCP, Ethernet, OPC UA. To přináší pohodlí, ale i rizika. Janitza jako jeden z mála výrobců měřicí techniky drží certifikaci ISO 27001.
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                To znamená, že bezpečnost dat a komunikace není doplněk, ale součást návrhu každého produktu od samého začátku. Šifrované spojení, správa přístupů a pravidelné bezpečnostní audity jsou standard.
              </p>
            </div>
            <div className="bg-[#f5f7f7] rounded-lg p-8">
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                <span className="font-semibold text-[#0170E3]">Šifrovaná komunikace</span> — TLS/SSL pro všechny síťové protokoly
              </p>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                <span className="font-semibold text-[#0170E3]">Správa uživatelských rolí</span> — granulární řízení přístupu k datům a konfiguraci
              </p>
              <p className="text-[1rem] text-black leading-[1.6] mb-4">
                <span className="font-semibold text-[#0170E3]">Bezpečné firmware updaty</span> — podepsané binárky, ověření integrity
              </p>
              <p className="text-[1rem] text-black leading-[1.6]">
                <span className="font-semibold text-[#0170E3]">Pravidelné penetrační testy</span> — nezávislé audity bezpečnosti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f7f7] py-14">
        <div className="max-w-[1320px] mx-auto px-6 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mb-4">
            Připraveni začít?
          </h2>
          <p className="text-[1rem] text-black leading-[1.5] mb-8 max-w-[500px] mx-auto">
            Rádi vám pomůžeme vybrat řešení přesně pro váš provoz. Ozvěte se nám.
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
