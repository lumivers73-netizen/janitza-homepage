import Image from "next/image";

const partners = [
  { name: "EN 50160 / ISO 50001", image: "/logo_01.webp" },
  { name: "Made in Germany", image: "/logo_02.webp" },
  { name: "Energie Effizienz", image: "/logo_03.webp" },
  { name: "AEO", image: "/logo_04.webp" },
  { name: "DENEFF", image: "/logo_05.webp" },
  { name: "Green Energy Monitoring", image: "/logo_06.webp" },
  { name: "PHI Factory", image: "/logo_07.webp" },
  { name: "TÜV SÜD ISO 9001", image: "/logo_08.webp" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-7">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="flex items-center justify-between gap-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={160}
                height={80}
                className="h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
