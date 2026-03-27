import Image from "next/image";

const industries = [
  {
    label: "Datová centra",
    title: <>Řešení pro<br />datová centra</>,
    image: "/datovacentra.png",
  },
  {
    label: "Průmysl",
    title: <>Průmyslová<br />řešení</>,
    image: "/prumyslovavyroba.png",
  },
  {
    label: "Energetika",
    title: <>Řešení pro<br />dodavatele energie</>,
    image: "/energier a utility.png",
  },
  {
    label: "Budovy",
    title: <>Řešení pro budovy<br />a infrastrukturu</>,
    image: "/budovy a infrastruktura.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Centrovaný nadpis */}
        <div className="mb-12" style={{ textAlign: "center" }}>
          <span style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#000000",
            marginBottom: "8px",
            textAlign: "center",
          }}>
            Odvětví
          </span>
          <h2 style={{ textAlign: "center" }} className="text-[2.5rem] font-normal text-black leading-[1.1] mt-1">
            Prozkoumejte naše průmyslová řešení
          </h2>
        </div>

        {/* 4 karty – text nahoře, foto dole */}
        <div className="grid grid-cols-4 gap-4">
          {industries.map((ind) => (
            <a
              key={ind.label}
              href="#"
              className="product-card group flex flex-col rounded-lg overflow-hidden bg-[#f5f7f7]"
            >
              {/* Text sekce nahoře – roztáhne se */}
              <div className="flex-1 p-6 pb-5 text-center flex flex-col justify-between">
                <div>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[2px] text-[#5c5b5b] mb-3">
                    {ind.label}
                  </p>
                  <h3 className="text-[1.25rem] font-normal text-black leading-[1.3] mb-5 group-hover:text-[#1588C8] transition-colors">
                    {ind.title}
                  </h3>
                </div>
                <span className="text-[#1488c9] font-semibold text-[0.875rem]">
                  Více informací
                </span>
              </div>

              {/* Foto dole – vždy přilepené */}
              <div className="h-52 flex-shrink-0 overflow-hidden relative bg-[#f5f7f7]">
                <Image
                  src={ind.image}
                  alt={ind.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-300" />
                {/* Šipka překrývající horní okraj fotky */}
                <svg viewBox="0 0 50 24" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '50px', height: '20px', fill: '#f5f7f7', zIndex: 10 }}>
                  <polygon points="0,0 50,0 25,20" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
