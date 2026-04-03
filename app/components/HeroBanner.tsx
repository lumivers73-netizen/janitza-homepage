import { IconCaretRightFilled, IconCertificate, IconCertificate2, IconHistory, IconTruck } from "@tabler/icons-react";

const trustItems = [
  { icon: IconCertificate2, text: "Distribuce pro ČR a SR" },
  { icon: IconHistory, text: "25+ let v oboru" },
  { icon: IconTruck, text: "Expedice do 24 h" },
];

export default function HeroBanner() {
  return (
    <section className="bg-[#f5f7f7]">
      <div className="max-w-[1320px] mx-auto px-6 py-6 lg:py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Levý sloupec – text */}
        <div className="max-w-[640px]">
          {/* Headline */}
          <h1 className="text-[2rem] lg:text-[2.5rem] font-normal leading-[1.111] text-black mb-4">
            Mějte spotřebu energie pod kontrolou
            <span className="block text-[1.25rem] lg:text-[1.5rem] text-[#5c5b5b] font-normal mt-2">
              měření a management elektrické energie
            </span>
          </h1>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <IconCertificate size={18} stroke={1.5} className="text-[#0170E3]" />
              <span className="text-[0.8125rem] font-semibold text-[#0170E3] tracking-wide uppercase">
                Přesná data o spotřebě = nižší náklady za energie
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IconCertificate size={18} stroke={1.5} className="text-[#0170E3]" />
              <span className="text-[0.8125rem] font-semibold text-[#0170E3] tracking-wide uppercase">
                Efektivnější výroba = vyšší zisky i v době rostoucích cen energií
              </span>
            </div>
          </div>
        </div>

        {/* Střední sloupec – hesla */}
        <div className="flex flex-col justify-between pt-5 pb-0 self-stretch">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2.5">
                <Icon size={20} stroke={1.5} className="text-[#0170E3] flex-shrink-0" />
                <span className="text-[0.875rem] font-semibold text-black whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Pravý sloupec – CTA */}
        <div className="flex flex-col gap-3 shrink-0 pt-5">
          <a href="#kategorie" className="btn-primary">
            Vyber si své řešení
            <IconCaretRightFilled size={18} stroke={2} />
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-4 h-[48px] font-semibold text-[1rem] border border-[#0170E3] text-[#0170E3] rounded-[3px] hover:bg-[#0170E3] hover:text-white transition-colors"
          >
            Konzultace s technikem
            <IconCaretRightFilled size={18} stroke={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
