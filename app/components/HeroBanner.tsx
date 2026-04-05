import { IconCaretRightFilled, IconCertificate, IconCertificate2, IconHistory, IconTruck } from "@tabler/icons-react";

const trustItems = [
  { icon: IconCertificate2, text: "Distribuce pro ČR a SR" },
  { icon: IconHistory, text: "25+ let v oboru" },
  { icon: IconTruck, text: "Expedice do 24 h" },
];

export default function HeroBanner() {
  return (
    <section className="bg-white relative overflow-hidden">
        {/* Křížkový pattern – malé +, houstnoucí zleva doprava */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 300" preserveAspectRatio="none" aria-hidden="true">
          {(() => {
            const crosses: React.ReactElement[] = [];
            let x = 10;
            let col = 0;
            while (x < 1400) {
              const ratio = x / 1400;
              const spacing = 50 - ratio * 32;
              const opacity = 0.1 + ratio * 0.18;
              const rowSpacing = spacing;
              for (let y = rowSpacing / 2; y < 300; y += rowSpacing) {
                crosses.push(
                  <g key={`${col}-${Math.round(y)}`}>
                    <line x1={x - 2.5} y1={y} x2={x + 2.5} y2={y} stroke={`rgba(1,112,227,${opacity.toFixed(3)})`} strokeWidth="1" />
                    <line x1={x} y1={y - 2.5} x2={x} y2={y + 2.5} stroke={`rgba(1,112,227,${opacity.toFixed(3)})`} strokeWidth="1" />
                  </g>
                );
              }
              x += spacing;
              col++;
            }
            return crosses;
          })()}
        </svg>
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-6 lg:py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Levý sloupec – text */}
        <div className="max-w-[640px]">
          {/* Headline */}
          <h1 className="sr-only">Vaše spotřeba energie pod kontrolou – měření a management elektrické energie</h1>
          <div className="text-[2rem] lg:text-[2.5rem] font-normal leading-[1.111] text-black mb-4" role="presentation">
            Vaše{' '}
            <span className="relative inline-block group/s cursor-pointer"><a href="/dictionary#spotreba" className="relative z-10 font-semibold text-[#0170E3] hover:text-[#0f5aa8]">spotřeba</a><span className="absolute bottom-0 left-0 w-full h-[0.35em] bg-[#0170E3]/15 -z-0" /><span className="absolute left-0 top-full mt-2 w-60 bg-white rounded-[3px] shadow-xl p-4 border border-gray-100 z-30 opacity-0 pointer-events-none group-hover/s:opacity-100 group-hover/s:pointer-events-auto transition-opacity duration-300 text-left font-normal"><span className="block text-[0.8125rem] font-semibold text-black mb-1">Přesná data o spotřebě</span><span className="block text-[0.75rem] text-[#5c5b5b] leading-[1.4] mb-2">Měřte spotřebu v reálném čase po jednotlivých odběrných místech a identifikujte největší spotřebiče</span><a href="/dictionary#spotreba" className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0170E3] hover:text-[#0f5aa8]">Více o spotřebě <IconCaretRightFilled size={10} stroke={2} /></a></span></span>{' '}
            energie{' '}
            <span className="relative inline-block group/k cursor-pointer"><a href="/dictionary#pod-kontrolou" className="relative z-10 font-semibold text-[#0170E3] hover:text-[#0f5aa8]">pod kontrolou</a><span className="absolute bottom-0 left-0 w-full h-[0.35em] bg-[#0170E3]/20 -z-0" /><span className="absolute left-0 top-full mt-2 w-60 bg-white rounded-[3px] shadow-xl p-4 border border-gray-100 z-30 opacity-0 pointer-events-none group-hover/k:opacity-100 group-hover/k:pointer-events-auto transition-opacity duration-300 text-left font-normal"><span className="block text-[0.8125rem] font-semibold text-black mb-1">Vše pod kontrolou</span><span className="block text-[0.75rem] text-[#5c5b5b] leading-[1.4] mb-2">Alarmy, reporty a vizualizace vám dají okamžitý přehled o stavu vaší sítě a nákladech</span><a href="/dictionary#pod-kontrolou" className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#0170E3] hover:text-[#0f5aa8]">Více o kontrole <IconCaretRightFilled size={10} stroke={2} /></a></span></span>
            <span className="block text-[1.25rem] lg:text-[1.5rem] text-[#5c5b5b] font-normal mt-2">
              měření a management elektrické energie
            </span>
          </div>

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
