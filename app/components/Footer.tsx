import { IconBrandFacebook, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer>
      {/* 17a – Rychlé kontakty */}
      <div data-section="17a – Rychlé kontakty" className="relative overflow-hidden bg-[#0170E3]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cline x1='13' y1='15' x2='17' y2='15' stroke='rgba(255,255,255,0.2)' stroke-width='1'/%3E%3Cline x1='15' y1='13' x2='15' y2='17' stroke='rgba(255,255,255,0.2)' stroke-width='1'/%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-8">
          <div className="flex justify-center gap-56">
            <div className="text-center">
              <p className="text-[0.8125rem] text-white/90 uppercase tracking-[1px] mb-1">E-mail</p>
              <a href="mailto:kbh@kbh.cz" className="text-[1.25rem] font-semibold text-white hover:text-white/80 transition-colors">kbh@kbh.cz</a>
            </div>
            <div className="text-center">
              <p className="text-[0.8125rem] text-white/90 uppercase tracking-[1px] mb-1">Obchod</p>
              <a href="tel:+420777730001" className="text-[1.25rem] font-semibold text-white hover:text-white/80 transition-colors">+420 777 730 001</a>
            </div>
            <div className="text-center">
              <p className="text-[0.8125rem] text-white/90 uppercase tracking-[1px] mb-1">Expedice</p>
              <a href="tel:+420777730002" className="text-[1.25rem] font-semibold text-white hover:text-white/80 transition-colors">+420 777 730 002</a>
            </div>
          </div>
        </div>
      </div>

      {/* 17b – Kontakty */}
      <div data-section="17b – Kontakty" className="bg-[#f5f7f7]">
        <div className="max-w-[1320px] mx-auto px-6 py-14">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4 text-black">Kontakty</h4>
              <div className="text-[0.875rem] text-[#5c5b5b] leading-[1.8] space-y-1">
                <p className="font-semibold text-black">KBH Energy a.s.</p>
                <p>Na Spravedlnosti 1533</p>
                <p>530 02 Pardubice</p>
                <p className="mt-2">Po – Pá: 7:00 – 14:30</p>
              </div>
            </div>

            <div>
              <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4 text-black">Spojte se s námi</h4>
              <div className="text-[0.875rem] text-[#5c5b5b] leading-[1.8] space-y-1">
                <p>
                  <a href="tel:+420777730002" className="text-[#0170E3] font-semibold hover:text-[#0f5aa8] transition-colors">+420 777 730 002</a>
                </p>
                <p>
                  <a href="mailto:kbh@kbh.cz" className="text-[#0170E3] font-semibold hover:text-[#0f5aa8] transition-colors">kbh@kbh.cz</a>
                </p>
                <p className="mt-2">IČ: 27502279</p>
                <p>DIČ: CZ27502279</p>
              </div>
            </div>

            <div>
              <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4 text-black">Užitečné informace</h4>
              <ul className="text-[0.875rem] text-[#5c5b5b] leading-[1.8] space-y-1">
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Obchodní podmínky</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Ochrana osobních údajů</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Reklamační řád</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Doprava a platba</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Cookies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4 text-black">Zůstaňte v obraze</h4>
              <p className="text-[0.875rem] text-[#5c5b5b] mb-4">
                Odebírejte novinky o produktech a technologiích.
              </p>
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Váš e-mail pro odběr novinek</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Váš e-mail"
                  className="flex-1 bg-white border border-gray-200 rounded-[3px] px-3 py-2 text-[0.875rem] text-black placeholder:text-[#9ca3af] focus:border-[#0170E3] focus:outline-none transition-colors"
                />
                <button className="px-4 h-[40px] text-[0.9375rem] font-semibold bg-[#0170E3] text-white rounded-[3px] hover:bg-[#0060C4] transition-colors">
                  Odebírat
                </button>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="text-[#5c5b5b] hover:text-[#0170E3] transition-colors">
                  <IconBrandLinkedin size={22} stroke={1.5} />
                </a>
                <a href="#" className="text-[#5c5b5b] hover:text-[#0170E3] transition-colors">
                  <IconBrandFacebook size={22} stroke={1.5} />
                </a>
                <a href="#" className="text-[#5c5b5b] hover:text-[#0170E3] transition-colors">
                  <IconBrandYoutube size={22} stroke={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 18 – Mapa webu (bílá) */}
      <div data-section="18 – Mapa webu" className="bg-white border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 py-10">
          <div className="grid grid-cols-5 gap-8 text-[0.8125rem]">

            <div>
              <p className="font-semibold text-black mb-3">Produkty</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Energetické analyzátory</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Síťové analyzátory</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Kvalita napětí</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Diferenční proudy (RCM)</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Měřicí transformátory</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Kompenzace účiníku</a></li>
              </ul>
              <p className="font-semibold text-black mt-5 mb-3">Software</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">GridVis® Desktop</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">GridVis® Online</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Stáhnout GridVis®</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-3">Řešení pro odvětví</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/#odvetvi" className="hover:text-[#0170E3] transition-colors">Průmyslové podniky</a></li>
                <li><a href="/#odvetvi" className="hover:text-[#0170E3] transition-colors">Energetika a LDS</a></li>
                <li><a href="/#odvetvi" className="hover:text-[#0170E3] transition-colors">Kancelářské budovy</a></li>
                <li><a href="/#odvetvi" className="hover:text-[#0170E3] transition-colors">Datová centra</a></li>
              </ul>
              <p className="font-semibold text-black mt-5 mb-3">Služby</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Návrh a projekt</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Uvedení do provozu</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Školení</a></li>
                <li><a href="/#kategorie" className="hover:text-[#0170E3] transition-colors">Servis a kalibrace</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-3">Podpora</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/dictionary" className="hover:text-[#0170E3] transition-colors">Slovník energetiky</a></li>
                <li><a href="/#kontakt" className="hover:text-[#0170E3] transition-colors">Průvodce výběrem</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Technická dokumentace</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Často kladené dotazy</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Porovnání produktů</a></li>
              </ul>
              <p className="font-semibold text-black mt-5 mb-3">Ke stažení</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Katalogy PDF</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Firmware updaty</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Certifikáty</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-3">Normy a certifikace</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/standards-and-compliance#iso-50001" className="hover:text-[#0170E3] transition-colors">ISO 50001</a></li>
                <li><a href="/standards-and-compliance#en-50160" className="hover:text-[#0170E3] transition-colors">EN 50160</a></li>
                <li><a href="/standards-and-compliance#iso-9001" className="hover:text-[#0170E3] transition-colors">ISO 9001</a></li>
                <li><a href="/standards-and-compliance#iso-14001" className="hover:text-[#0170E3] transition-colors">ISO 14001</a></li>
                <li><a href="/standards-and-compliance#iso-27001" className="hover:text-[#0170E3] transition-colors">ISO 27001</a></li>
                <li><a href="/standards-and-compliance#iec-61000" className="hover:text-[#0170E3] transition-colors">IEC 61000-4-30 Class A</a></li>
                <li><a href="/standards-and-compliance#rohs" className="hover:text-[#0170E3] transition-colors">RoHS</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-black mb-3">Proč Janitza</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/why-trust-janitza#globalni-dosah" className="hover:text-[#0170E3] transition-colors">90+ zemí světa</a></li>
                <li><a href="/why-trust-janitza#tradice" className="hover:text-[#0170E3] transition-colors">60+ let na trhu</a></li>
                <li><a href="/why-trust-janitza#made-in-germany" className="hover:text-[#0170E3] transition-colors">Made in Germany</a></li>
                <li><a href="/why-trust-janitza#kyberneticka-bezpecnost" className="hover:text-[#0170E3] transition-colors">Kybernetická bezpečnost</a></li>
                <li><a href="#" className="hover:text-[#0170E3] transition-colors">Reference</a></li>
              </ul>
              <p className="font-semibold text-black mt-5 mb-3">Kontakt</p>
              <ul className="text-[#5c5b5b] leading-[2] space-y-0.5">
                <li><a href="/#kontakt" className="hover:text-[#0170E3] transition-colors">Formulář</a></li>
                <li><a href="tel:+420777730002" className="hover:text-[#0170E3] transition-colors">+420 777 730 002</a></li>
                <li><a href="mailto:kbh@kbh.cz" className="hover:text-[#0170E3] transition-colors">kbh@kbh.cz</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* 19 – Copyright (šedá) */}
      <div data-section="19 – Copyright" className="bg-[#f5f7f7] border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between text-[0.75rem] text-[#5c5b5b]">
          <span>&copy; 2026 KBH Energy a.s. | Všechna práva vyhrazena</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#0170E3] transition-colors">Ochrana osobních údajů</a>
            <a href="#" className="hover:text-[#0170E3] transition-colors">Obchodní podmínky</a>
            <a href="#" className="hover:text-[#0170E3] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[#0170E3] transition-colors">Mapa stránek</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
