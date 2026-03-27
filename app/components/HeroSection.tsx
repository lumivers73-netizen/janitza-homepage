import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";

const categories = [
  { title: "Energetické Analyzátory",     desc: "Přesné měření spotřeby a výkonu pro optimalizaci nákladů",   emoji: "⚡", image: "/Energetické Analyzátory.png" },
  { title: "Síťové analyzátory",          desc: "Komplexní analýza sítě s rozšiřitelnými moduly",             emoji: "🔌", image: "/Síťové analyzároty.png" },
  { title: "Analyzátory kvality sítě",    desc: "Certifikované měření dle EN 50160 Class A",                   emoji: "📊", image: "/Analyzátory kvality sítě.png" },
  { title: "Monitorování rezid. proudů",  desc: "Prevence požárů a zvýšení provozní bezpečnosti",             emoji: "🔒", image: "/monitorovani-proudu.png" },
  { title: "Měřicí transformátory",       desc: "Dělitelné a násuvné MTP pro snadnou instalaci",              emoji: "🔧", image: "/Měřící transformátory.png" },
  { title: "Kompenzace účiníku",          desc: "Kompenzace poplatků za jalový výkon",                        emoji: "⚙️", image: "/Kompenzace účiniků.png" },
  { title: "GRIDVIS® software",           desc: "Vizualizace a analýza energetických dat",                     emoji: "💻", image: "/GRIDVIS software.png" },
  { title: "Servis a podpora",            desc: "Školení, servis a technická podpora v češtině",               emoji: "🛠️", image: "/Servis a podpora.png" },
];

export default function HeroSection() {
  return (
    <section className="bg-white pt-12 pb-24">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Dvouúrovňový nadpis – label černý, 14px, 2px tracking */}
        <div className="mb-10 text-center">
          <span className="section-label" style={{ textAlign: "center" }}>Produktové kategorie</span>
          <h1 className="text-[2rem] lg:text-[2.25rem] font-normal text-[#1488c9] leading-[1.111]">
            Profesionální měření a management elektrické energie
          </h1>
        </div>

        {/* 4×2 grid */}
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#"
              className="product-card group flex flex-col rounded-lg overflow-hidden bg-[#f5f7f7]"
            >
              {/* Text nahoře – roztáhne se */}
              <div className="flex-1 p-6 pb-5 text-center flex flex-col justify-between">
                <h3 className="text-[1.25rem] font-normal text-black leading-[1.3] mb-3 group-hover:text-[#1488c9] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[0.875rem] text-[#5c5b5b] leading-[1.375] mb-4">{cat.desc}</p>
                <span className="text-[#1488c9] font-semibold text-[0.875rem]">
                  Více informací
                </span>
              </div>

              {/* Obrázek dole – přilepený */}
              <div className="h-72 flex-shrink-0 flex items-center justify-center overflow-hidden relative bg-[#e4e8eb]">
                {/* Trojúhelník překrývající horní okraj fotky */}
                <svg viewBox="0 0 50 24" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '50px', height: '20px', fill: '#f5f7f7', zIndex: 10 }}>
                  <polygon points="0,0 50,0 25,20" />
                </svg>
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={468}
                    height={274}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-5xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                    {cat.emoji}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#" className="link-arrow">
            Prohlédnout všechna řešení
            <IconCaretRightFilled size={16} stroke={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
