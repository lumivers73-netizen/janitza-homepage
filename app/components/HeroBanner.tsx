import { IconCaretRightFilled, IconCertificate, IconCertificate2, IconHistory, IconTruck } from "@tabler/icons-react";

const trustItems = [
  { icon: IconCertificate2, text: "Distribuce pro ČR a SR" },
  { icon: IconHistory, text: "25+ let v oboru" },
  { icon: IconTruck, text: "Expedice do 24 h" },
];

export default function HeroBanner() {
  return (
    <section className="bg-white relative overflow-hidden">
        {/* Gradient maska – zleva průhledná, doprava plná */}
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0) 60%)',
        }} />
        {/* Bohaté sinusoidy – proudění energie */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 200" preserveAspectRatio="none">
          {/* === Hloubkové podkladové vlny === */}
          <path d="M0,100 C300,30 500,30 700,100 S1100,170 1400,100" fill="none" stroke="rgba(1,112,227,0.04)" strokeWidth="12" />
          <path d="M0,100 C250,170 500,170 750,100 S1150,30 1400,100" fill="none" stroke="rgba(1,112,227,0.03)" strokeWidth="16" />
          <path d="M-100,100 C200,50 400,50 600,100 S900,150 1100,100 S1300,50 1500,100" fill="none" stroke="rgba(1,112,227,0.035)" strokeWidth="10" />

          {/* === Hlavní třífázový proud L1 – svazek vláken === */}
          <path d="M0,100 C60,40 120,40 180,100 S300,160 360,100 S480,40 540,100 S660,160 720,100 S840,40 900,100 S1020,160 1080,100 S1200,40 1260,100 S1380,160 1440,100" fill="none" stroke="rgba(1,112,227,0.10)" strokeWidth="1.2" />
          <path d="M0,102 C60,43 120,43 180,102 S300,162 360,102 S480,43 540,102 S660,162 720,102 S840,43 900,102 S1020,162 1080,102 S1200,43 1260,102 S1380,162 1440,102" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="0.8" />
          <path d="M0,98 C60,37 120,37 180,98 S300,158 360,98 S480,37 540,98 S660,158 720,98 S840,37 900,98 S1020,158 1080,98 S1200,37 1260,98 S1380,158 1440,98" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="0.8" />
          <path d="M0,104 C60,46 120,46 180,104 S300,164 360,104 S480,46 540,104 S660,164 720,104 S840,46 900,104 S1020,164 1080,104 S1200,46 1260,104 S1380,164 1440,104" fill="none" stroke="rgba(1,112,227,0.05)" strokeWidth="0.5" />
          <path d="M0,96 C60,34 120,34 180,96 S300,156 360,96 S480,34 540,96 S660,156 720,96 S840,34 900,96 S1020,156 1080,96 S1200,34 1260,96 S1380,156 1440,96" fill="none" stroke="rgba(1,112,227,0.05)" strokeWidth="0.5" />

          {/* === L2 – svazek vláken === */}
          <path d="M0,133 C60,73 120,73 180,133 S300,193 360,133 S480,73 540,133 S660,193 720,133 S840,73 900,133 S1020,193 1080,133 S1200,73 1260,133 S1380,193 1440,133" fill="none" stroke="rgba(1,112,227,0.09)" strokeWidth="1.2" />
          <path d="M0,135 C60,76 120,76 180,135 S300,195 360,135 S480,76 540,135 S660,195 720,135 S840,76 900,135 S1020,195 1080,135 S1200,76 1260,135 S1380,195 1440,135" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="0.8" />
          <path d="M0,131 C60,70 120,70 180,131 S300,191 360,131 S480,70 540,131 S660,191 720,131 S840,70 900,131 S1020,191 1080,131 S1200,70 1260,131 S1380,191 1440,131" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="0.8" />
          <path d="M0,137 C60,79 120,79 180,137 S300,197 360,137 S480,79 540,137 S660,197 720,137 S840,79 900,137 S1020,197 1080,137 S1200,79 1260,137 S1380,197 1440,137" fill="none" stroke="rgba(1,112,227,0.04)" strokeWidth="0.5" />
          <path d="M0,129 C60,67 120,67 180,129 S300,189 360,129 S480,67 540,129 S660,189 720,129 S840,67 900,129 S1020,189 1080,129 S1200,67 1260,129 S1380,189 1440,129" fill="none" stroke="rgba(1,112,227,0.04)" strokeWidth="0.5" />

          {/* === L3 – svazek vláken === */}
          <path d="M0,67 C60,7 120,7 180,67 S300,127 360,67 S480,7 540,67 S660,127 720,67 S840,7 900,67 S1020,127 1080,67 S1200,7 1260,67 S1380,127 1440,67" fill="none" stroke="rgba(1,112,227,0.09)" strokeWidth="1.2" />
          <path d="M0,69 C60,10 120,10 180,69 S300,129 360,69 S480,10 540,69 S660,129 720,69 S840,10 900,69 S1020,129 1080,69 S1200,10 1260,69 S1380,129 1440,69" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="0.8" />
          <path d="M0,65 C60,4 120,4 180,65 S300,125 360,65 S480,4 540,65 S660,125 720,65 S840,4 900,65 S1020,125 1080,65 S1200,4 1260,65 S1380,125 1440,65" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="0.8" />
          <path d="M0,71 C60,13 120,13 180,71 S300,131 360,71 S480,13 540,71 S660,131 720,71 S840,13 900,71 S1020,131 1080,71 S1200,13 1260,71 S1380,131 1440,71" fill="none" stroke="rgba(1,112,227,0.04)" strokeWidth="0.5" />
          <path d="M0,63 C60,1 120,1 180,63 S300,123 360,63 S480,1 540,63 S660,123 720,63 S840,1 900,63 S1020,123 1080,63 S1200,1 1260,63 S1380,123 1440,63" fill="none" stroke="rgba(1,112,227,0.04)" strokeWidth="0.5" />

          {/* === Sekundární vlny – posunuté fáze === */}
          <path d="M-30,105 C50,55 130,55 210,105 S330,155 410,105 S530,55 610,105 S730,155 810,105 S930,55 1010,105 S1130,155 1210,105 S1330,55 1410,105" fill="none" stroke="rgba(1,112,227,0.12)" strokeWidth="1.8" />
          <path d="M-30,138 C50,88 130,88 210,138 S330,188 410,138 S530,88 610,138 S730,188 810,138 S930,88 1010,138 S1130,188 1210,138 S1330,88 1410,138" fill="none" stroke="rgba(1,112,227,0.10)" strokeWidth="1.5" />
          <path d="M-30,72 C50,22 130,22 210,72 S330,122 410,72 S530,22 610,72 S730,122 810,72 S930,22 1010,72 S1130,122 1210,72 S1330,22 1410,72" fill="none" stroke="rgba(1,112,227,0.10)" strokeWidth="1.5" />

          {/* === Terciární echo vlny === */}
          <path d="M-60,95 C30,55 100,55 180,95 S310,135 390,95 S520,55 600,95 S730,135 810,95 S940,55 1020,95 S1150,135 1230,95 S1360,55 1440,95" fill="none" stroke="rgba(1,112,227,0.07)" strokeWidth="1.2" />
          <path d="M-60,145 C30,105 100,105 180,145 S310,185 390,145 S520,105 600,145 S730,185 810,145 S940,105 1020,145 S1150,185 1230,145 S1360,105 1440,145" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />
          <path d="M-60,55 C30,15 100,15 180,55 S310,95 390,55 S520,15 600,55 S730,95 810,55 S940,15 1020,55 S1150,95 1230,55 S1360,15 1440,55" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />

          {/* === Harmonické – vyšší frekvence, jemné === */}
          <path d="M0,100 C30,75 60,75 90,100 S150,125 180,100 S240,75 270,100 S330,125 360,100 S420,75 450,100 S510,125 540,100 S600,75 630,100 S690,125 720,100 S780,75 810,100 S870,125 900,100 S960,75 990,100 S1050,125 1080,100 S1140,75 1170,100 S1230,125 1260,100 S1320,75 1350,100 S1410,125 1440,100" fill="none" stroke="rgba(1,112,227,0.09)" strokeWidth="1" />
          <path d="M0,100 C20,85 40,85 60,100 S100,115 120,100 S160,85 180,100 S220,115 240,100 S280,85 300,100 S340,115 360,100 S400,85 420,100 S460,115 480,100 S520,85 540,100 S580,115 600,100 S640,85 660,100 S700,115 720,100 S760,85 780,100 S820,115 840,100 S880,85 900,100 S940,115 960,100 S1000,85 1020,100 S1060,115 1080,100 S1120,85 1140,100 S1180,115 1200,100 S1240,85 1260,100 S1300,115 1320,100 S1360,85 1380,100 S1420,115 1440,100" fill="none" stroke="rgba(1,112,227,0.07)" strokeWidth="0.7" />
          <path d="M0,100 C15,90 30,90 45,100 S75,110 90,100 S120,90 135,100 S165,110 180,100 S210,90 225,100 S255,110 270,100 S300,90 315,100 S345,110 360,100 S390,90 405,100 S435,110 450,100 S480,90 495,100 S525,110 540,100 S570,90 585,100 S615,110 630,100 S660,90 675,100 S705,110 720,100 S750,90 765,100 S795,110 810,100 S840,90 855,100 S885,110 900,100 S930,90 945,100 S975,110 990,100 S1020,90 1035,100 S1065,110 1080,100 S1110,90 1125,100 S1155,110 1170,100 S1200,90 1215,100 S1245,110 1260,100 S1290,90 1305,100 S1335,110 1350,100 S1380,90 1395,100 S1425,110 1440,100" fill="none" stroke="rgba(1,112,227,0.05)" strokeWidth="0.5" />

          {/* === Záření z centra – glow efekt === */}
          <path d="M0,100 C60,40 120,40 180,100 S300,160 360,100 S480,40 540,100 S660,160 720,100 S840,40 900,100 S1020,160 1080,100 S1200,40 1260,100 S1380,160 1440,100" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="8" />
          <path d="M0,133 C60,73 120,73 180,133 S300,193 360,133 S480,73 540,133 S660,193 720,133 S840,73 900,133 S1020,193 1080,133 S1200,73 1260,133 S1380,193 1440,133" fill="none" stroke="rgba(1,112,227,0.04)" strokeWidth="6" />
          <path d="M0,67 C60,7 120,7 180,67 S300,127 360,67 S480,7 540,67 S660,127 720,67 S840,7 900,67 S1020,127 1080,67 S1200,7 1260,67 S1380,127 1440,67" fill="none" stroke="rgba(1,112,227,0.04)" strokeWidth="6" />

          {/* === Vertikální spectro pruhy – jako na obrázku === */}
          {Array.from({ length: 70 }, (_, i) => {
            const x = i * 20 + 10;
            const h = 15 + Math.abs(Math.sin(i * 0.4)) * 60 + Math.abs(Math.sin(i * 0.7)) * 30;
            return (
              <g key={`sp${i}`}>
                <line x1={x} y1={100 - h} x2={x} y2={100 + h} stroke={`rgba(1,112,227,${0.03 + Math.abs(Math.sin(i * 0.5)) * 0.04})`} strokeWidth="3" strokeLinecap="round" />
                {Array.from({ length: Math.floor(h / 5) }, (_, j) => (
                  <circle key={`d${i}-${j}`} cx={x} cy={100 - h + j * 10} r="1.5" fill={`rgba(1,112,227,${0.04 + Math.abs(Math.sin(i * 0.3 + j * 0.5)) * 0.06})`} />
                ))}
                {Array.from({ length: Math.floor(h / 5) }, (_, j) => (
                  <circle key={`d2${i}-${j}`} cx={x} cy={100 + j * 10} r="1.5" fill={`rgba(1,112,227,${0.04 + Math.abs(Math.sin(i * 0.4 + j * 0.3)) * 0.06})`} />
                ))}
              </g>
            );
          })}
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
