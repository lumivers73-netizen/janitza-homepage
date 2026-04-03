import { IconBrandFacebook, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-[1320px] mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Firma */}
          <div>
            <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4">Firma</h4>
            <div className="text-[0.875rem] text-white/70 leading-[1.8] space-y-1">
              <p>KBH Energy a.s.</p>
              <p>Pardubická 1777</p>
              <p>530 02 Pardubice</p>
              <p className="mt-2">IČ: 25931474</p>
              <p>DIČ: CZ25931474</p>
              <p className="mt-2">
                <a href="tel:+420777730002" className="hover:text-white transition-colors">+420 777 730 002</a>
              </p>
              <p>
                <a href="mailto:info@kbh.cz" className="hover:text-white transition-colors">info@kbh.cz</a>
              </p>
            </div>
          </div>

          {/* Užitečné informace */}
          <div>
            <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4">Užitečné informace</h4>
            <ul className="text-[0.875rem] text-white/70 leading-[1.8] space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Obchodní podmínky</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ochrana osobních údajů</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reklamační řád</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doprava a platba</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4">Zůstaňte v obraze</h4>
            <p className="text-[0.875rem] text-white/70 mb-4">
              Odebírejte novinky o produktech a technologiích.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="flex-1 bg-white/10 border border-white/20 rounded-[3px] px-3 py-2 text-[0.875rem] text-white placeholder:text-white/40 focus:border-[#0170E3] focus:outline-none transition-colors"
              />
              <button className="btn-primary px-4 h-[40px] text-[0.875rem]">
                Odebírat
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <IconBrandLinkedin size={22} stroke={1.5} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <IconBrandFacebook size={22} stroke={1.5} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <IconBrandYoutube size={22} stroke={1.5} />
              </a>
            </div>
          </div>

          {/* Mapa webu */}
          <div>
            <h4 className="text-[0.875rem] font-semibold uppercase tracking-[1px] mb-4">Mapa webu</h4>
            <ul className="text-[0.875rem] text-white/70 leading-[1.8] space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Produkty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Řešení</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Znalostní báze</a></li>
              <li><a href="#" className="hover:text-white transition-colors">O nás</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between text-[0.75rem] text-white/50">
          <span>&copy; 2026 KBH Energy a.s. | Všechna práva vyhrazena</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Ochrana osobních údajů</a>
            <a href="#" className="hover:text-white transition-colors">Obchodní podmínky</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Mapa stránek</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
