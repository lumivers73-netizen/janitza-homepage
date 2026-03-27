import { IconShoppingCart, IconHeart, IconScale } from "@tabler/icons-react";
import Image from "next/image";

const products = [
  { badge: "Class A",         badgeColor: "bg-amber-500 text-white",   title: "UMG 512-PRO",    desc: "Certifikovaný analyzátor kvality napětí Class A",    price: "od 45 900 Kč", image: "/UMG 512-PRO.png" },
  { badge: "Nejprodávanější", badgeColor: "bg-[#1488c9] text-white",   title: "UMG 96RM-E",     desc: "Multifunkční síťový analyzátor s Ethernet a RCM",   price: "od 18 500 Kč", image: "/UMG 96RM-E.png" },
  { badge: "Novinka",         badgeColor: "bg-emerald-500 text-white", title: "UMG 96-PQ-L-LP", desc: "Modulární měřicí přístroj nové generace",            price: "od 22 900 Kč", image: "/UMG 96-PQ-L-LP.png" },
  { badge: "Kompenzace",      badgeColor: "bg-violet-600 text-white",  title: "VARTRON 25 kVAr",desc: "Kompenzační kondenzátor 440V",                       price: "od 1 550 Kč",  image: "/VARTRON 25 kVAr.png" },
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="mb-10 text-center">
          <span className="section-label">E-shop</span>
          <h2 className="text-[2rem] font-normal text-black leading-[1.111]">
            Doporučené produkty
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.title} className="product-card rounded-[4px] border border-gray-100 bg-white overflow-hidden flex flex-col">

              <div className="relative h-52 flex items-center justify-center bg-[#f5f7f7] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={208}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <button className="group absolute top-3 right-11 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 text-[#5c5b5b] hover:text-[#1488c9] hover:bg-white transition-all shadow-sm" aria-label="Porovnat">
                  <IconScale size={15} stroke={1.5} />
                </button>
                <button className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 text-[#5c5b5b] hover:text-[#1488c9] hover:bg-white transition-all shadow-sm" aria-label="Oblíbené">
                  <IconHeart size={15} stroke={1.5} />
                </button>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[1rem] font-semibold text-black mb-1 leading-[1.3]">{product.title}</h3>
                <p className="text-[0.875rem] text-[#5c5b5b] leading-[1.375] flex-1">{product.desc}</p>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <span className="text-[1rem] font-semibold text-[#1488c9] whitespace-nowrap">
                    {product.price}
                  </span>
                  <button className="btn-primary !h-9 !text-[0.875rem] !px-3 !gap-1 flex-shrink-0">
                    <IconShoppingCart size={14} stroke={1.5} />
                    Do košíku
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
