const partners = [
  { name: "Janitza electronics", type: "Official Partner" },
  { name: "Siemens", type: "Technology Partner" },
  { name: "ABB", type: "Technology Partner" },
  { name: "Schneider Electric", type: "Cooperation" },
  { name: "TÜV SÜD", type: "Certifikace" },
  { name: "ČSN EN ISO 9001", type: "Certifikace" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="section-label" style={{ textAlign: "center" }}>Partneři</span>
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mt-1">
            Partneři a certifikace
          </h2>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
            >
              <div className="text-[1rem] font-semibold text-black mb-1">{p.name}</div>
              <span className="text-[0.75rem] text-[#5c5b5b]">{p.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
