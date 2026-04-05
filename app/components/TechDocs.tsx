import { IconCaretRightFilled, IconFileTypePdf, IconBook, IconCertificate, IconDownload } from "@tabler/icons-react";

const docs = [
  {
    icon: <IconFileTypePdf size={32} stroke={1.5} />,
    title: "Katalogy a datasheety",
    desc: "Technické specifikace, katalogové listy a porovnávací tabulky produktů.",
  },
  {
    icon: <IconBook size={32} stroke={1.5} />,
    title: "Návody k instalaci",
    desc: "Instalační příručky, schémata zapojení a konfigurační návody.",
  },
  {
    icon: <IconCertificate size={32} stroke={1.5} />,
    title: "Certifikáty",
    desc: "Certifikáty shody, kalibrační protokoly a prohlášení o vlastnostech.",
  },
  {
    icon: <IconDownload size={32} stroke={1.5} />,
    title: "Firmware & SW",
    desc: "Aktualizace firmware, ovladače a softwarové nástroje ke stažení.",
  },
];

export default function TechDocs() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mt-1">
            Technická dokumentace a podpora
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {docs.map((doc) => (
            <a
              key={doc.title}
              href="#"
              className="product-card group bg-[#f5f7f7] rounded-lg p-6 text-center flex flex-col items-center"
            >
              <div className="text-[#0170E3] mb-4">
                {doc.icon}
              </div>
              <h3 className="text-[1rem] font-semibold text-black leading-[1.3] mb-2 group-hover:text-[#0170E3] transition-colors">
                {doc.title}
              </h3>
              <p className="text-[0.875rem] text-[#5c5b5b] leading-[1.5]">
                {doc.desc}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <a href="#" className="inline-flex items-center justify-center px-5 py-2 bg-[#0170E3] hover:bg-[#0060C4] text-white text-[0.875rem] font-semibold rounded-[3px] transition-colors">
            Zobrazit všechny dokumenty
          </a>
        </div>
      </div>
    </section>
  );
}
