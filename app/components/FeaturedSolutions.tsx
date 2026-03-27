import { IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";

const solutions = [
  { title: "UMG 801",         link: "Více o UMG 801",          image: "/UMG 801.png",         desc: "Modulární síťový analyzátor nové generace. Rozšiřitelný pro komplexní monitoring sítě a měření kvality napětí." },
  { title: "Datová centra",   link: "Více o datových centrech", image: "/DATOVÁ CENTRA.png",   desc: "Komplexní řešení pro monitoring napájení, PUE a kvalitu sítě v datových centrech a serverovnách." },
  { title: "UMG 800",         link: "Více o UMG 800",          image: "/UMG 800.png",         desc: "Kompaktní analyzátor pro přehledový monitoring odběrových míst s integrovaným webovým serverem." },
  { title: "GRIDVIS® Online", link: "Více o GRIDVIS®",         image: "/Banner GRIDVIS.png",  desc: "Cloudová platforma pro vizualizaci, analýzu a reportování energetických dat v reálném čase." },
];

export default function FeaturedSolutions() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-12 text-center">
          <span className="section-label" style={{ textAlign: "center" }}>Doporučená řešení</span>
          <h2 className="text-[2rem] font-normal text-black leading-[1.111]">
            Osvědčená řešení pro měření, řízení<br />a optimalizaci kvality energie
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {solutions.map((sol) => (
            <a
              key={sol.title}
              href="#"
              className="product-card group flex flex-col bg-[#f5f7f7] rounded-lg overflow-hidden"
            >
              {/* Obrázek nahoře */}
              <div className="h-56 flex items-center justify-center flex-shrink-0 bg-[#f5f7f7] overflow-hidden">
                <Image
                  src={sol.image}
                  alt={sol.title}
                  width={300}
                  height={224}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text dole */}
              <div className="p-6 flex flex-col flex-1 bg-[#f5f7f7]">
                <h3 className="text-[1.25rem] font-normal text-black leading-[1.3] mb-2 group-hover:text-[#1488c9] transition-colors">
                  {sol.title}
                </h3>
                <p className="text-[0.875rem] text-[#5c5b5b] leading-[1.375] flex-1 mb-4">
                  {sol.desc}
                </p>
                <span className="text-[#1488c9] font-semibold text-[0.875rem] flex items-center gap-1 mt-auto pt-5">
                  {sol.link} <IconCaretRightFilled size={14} stroke={2.5} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
