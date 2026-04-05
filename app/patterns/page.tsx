export default function PatternsPage() {
  return (
    <main className="flex flex-col">

      {/* 1. Sinusoida */}
      <section className="relative h-[400px] bg-[#f5f7f7] overflow-hidden flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 400">
          <path d="M0,200 Q175,80 350,200 T700,200 T1050,200 T1400,200" fill="none" stroke="rgba(1,112,227,0.15)" strokeWidth="3" />
          <path d="M0,230 Q175,110 350,230 T700,230 T1050,230 T1400,230" fill="none" stroke="rgba(1,112,227,0.12)" strokeWidth="2" />
          <path d="M0,170 Q175,50 350,170 T700,170 T1050,170 T1400,170" fill="none" stroke="rgba(1,112,227,0.12)" strokeWidth="2" />
          <path d="M0,260 Q175,140 350,260 T700,260 T1050,260 T1400,260" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="1.5" />
          <path d="M0,140 Q175,20 350,140 T700,140 T1050,140 T1400,140" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="1.5" />
          <path d="M0,290 Q175,170 350,290 T700,290 T1050,290 T1400,290" fill="none" stroke="rgba(1,112,227,0.05)" strokeWidth="1" />
          <path d="M0,110 Q175,-10 350,110 T700,110 T1050,110 T1400,110" fill="none" stroke="rgba(1,112,227,0.05)" strokeWidth="1" />
        </svg>
        <div className="relative z-10 text-center">
          <h2 className="text-[2rem] font-semibold text-black mb-2">1. Sinusoida</h2>
          <p className="text-[#5c5b5b]">Střídavý proud – vizuální podpis energetiky</p>
        </div>
      </section>

      {/* 2. Hexagonální mřížka */}
      <section className="relative h-[400px] bg-[#f5f7f7] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='rgba(1,112,227,0.12)' stroke-width='1'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='rgba(1,112,227,0.12)' stroke-width='1'/%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 text-center">
          <h2 className="text-[2rem] font-semibold text-black mb-2">2. Hexagonální mřížka</h2>
          <p className="text-[#5c5b5b]">Síťová struktura – technologický feel</p>
        </div>
      </section>

      {/* 3. Fázorový diagram */}
      <section className="relative h-[400px] bg-[#f5f7f7] overflow-hidden flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1400 400">
          <circle cx="700" cy="200" r="160" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="1.5" />
          <circle cx="700" cy="200" r="110" fill="none" stroke="rgba(1,112,227,0.12)" strokeWidth="1.5" />
          <circle cx="700" cy="200" r="60" fill="none" stroke="rgba(1,112,227,0.15)" strokeWidth="1.5" />
          <line x1="700" y1="200" x2="845" y2="115" stroke="rgba(1,112,227,0.18)" strokeWidth="2" />
          <line x1="700" y1="200" x2="600" y2="320" stroke="rgba(1,112,227,0.14)" strokeWidth="2" />
          <line x1="700" y1="200" x2="810" y2="310" stroke="rgba(1,112,227,0.16)" strokeWidth="2" />
          <circle cx="250" cy="200" r="80" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />
          <circle cx="250" cy="200" r="40" fill="none" stroke="rgba(1,112,227,0.10)" strokeWidth="1" />
          <line x1="250" y1="200" x2="320" y2="155" stroke="rgba(1,112,227,0.12)" strokeWidth="1.5" />
          <line x1="250" y1="200" x2="200" y2="265" stroke="rgba(1,112,227,0.10)" strokeWidth="1.5" />
          <circle cx="1150" cy="200" r="80" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />
          <circle cx="1150" cy="200" r="40" fill="none" stroke="rgba(1,112,227,0.10)" strokeWidth="1" />
          <line x1="1150" y1="200" x2="1210" y2="145" stroke="rgba(1,112,227,0.12)" strokeWidth="1.5" />
          <line x1="1150" y1="200" x2="1100" y2="260" stroke="rgba(1,112,227,0.10)" strokeWidth="1.5" />
        </svg>
        <div className="relative z-10 text-center">
          <h2 className="text-[2rem] font-semibold text-black mb-2">3. Fázorový diagram</h2>
          <p className="text-[#5c5b5b]">Kružnice a vektory – odkaz na displej analyzátoru</p>
        </div>
      </section>

      {/* 4. Topologická síť */}
      <section className="relative h-[400px] bg-[#f5f7f7] overflow-hidden flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 400">
          {/* Uzly */}
          {[
            [100,60],[250,120],[400,50],[550,140],[700,80],[850,160],[1000,70],[1150,130],[1300,90],
            [150,220],[300,280],[450,200],[600,300],[750,230],[900,290],[1050,210],[1200,270],[1350,240],
            [200,370],[400,350],[600,380],[800,340],[1000,360],[1200,380]
          ].map(([x, y], i) => (
            <circle key={`n${i}`} cx={x} cy={y} r="3" fill="rgba(1,112,227,0.20)" />
          ))}
          {/* Spojení */}
          {[
            [100,60,250,120],[250,120,400,50],[400,50,550,140],[550,140,700,80],[700,80,850,160],[850,160,1000,70],[1000,70,1150,130],[1150,130,1300,90],
            [100,60,150,220],[250,120,300,280],[400,50,450,200],[550,140,600,300],[700,80,750,230],[850,160,900,290],[1000,70,1050,210],[1150,130,1200,270],
            [150,220,300,280],[450,200,600,300],[750,230,900,290],[1050,210,1200,270],
            [300,280,400,350],[600,300,600,380],[900,290,1000,360],[1200,270,1200,380],
            [250,120,450,200],[550,140,750,230],[850,160,1050,210],[700,80,600,300]
          ].map(([x1, y1, x2, y2], i) => (
            <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(1,112,227,0.10)" strokeWidth="1" />
          ))}
        </svg>
        <div className="relative z-10 text-center">
          <h2 className="text-[2rem] font-semibold text-black mb-2">4. Topologická síť</h2>
          <p className="text-[#5c5b5b]">Propojené uzly – distribuční síť</p>
        </div>
      </section>

      {/* 5. Izočáry */}
      <section className="relative h-[400px] bg-[#f5f7f7] overflow-hidden flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 400">
          <ellipse cx="350" cy="200" rx="320" ry="160" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1.5" />
          <ellipse cx="350" cy="200" rx="240" ry="120" fill="none" stroke="rgba(1,112,227,0.09)" strokeWidth="1.5" />
          <ellipse cx="350" cy="200" rx="160" ry="80" fill="none" stroke="rgba(1,112,227,0.12)" strokeWidth="1.5" />
          <ellipse cx="350" cy="200" rx="80" ry="40" fill="none" stroke="rgba(1,112,227,0.15)" strokeWidth="1.5" />
          <ellipse cx="1050" cy="200" rx="280" ry="140" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1.5" />
          <ellipse cx="1050" cy="200" rx="200" ry="100" fill="none" stroke="rgba(1,112,227,0.09)" strokeWidth="1.5" />
          <ellipse cx="1050" cy="200" rx="120" ry="60" fill="none" stroke="rgba(1,112,227,0.12)" strokeWidth="1.5" />
          <ellipse cx="1050" cy="200" rx="50" ry="25" fill="none" stroke="rgba(1,112,227,0.15)" strokeWidth="1.5" />
          <ellipse cx="700" cy="100" rx="200" ry="70" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />
          <ellipse cx="700" cy="100" rx="120" ry="45" fill="none" stroke="rgba(1,112,227,0.09)" strokeWidth="1" />
          <ellipse cx="700" cy="320" rx="180" ry="60" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />
          <ellipse cx="700" cy="320" rx="100" ry="35" fill="none" stroke="rgba(1,112,227,0.09)" strokeWidth="1" />
        </svg>
        <div className="relative z-10 text-center">
          <h2 className="text-[2rem] font-semibold text-black mb-2">5. Izočáry</h2>
          <p className="text-[#5c5b5b]">Energetická mapa – fraktální kontury</p>
        </div>
      </section>

      {/* 6. Kombinace: sinusoida + hexagony + topologie + izočáry */}
      <section className="relative h-[400px] bg-[#f5f7f7] overflow-hidden flex items-center justify-center">
        {/* Hexagonální mřížka jako základ */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='rgba(1,112,227,0.05)' stroke-width='0.5'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='rgba(1,112,227,0.05)' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }} />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 400" preserveAspectRatio="none">
          {/* Izočáry */}
          <ellipse cx="300" cy="200" rx="250" ry="130" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />
          <ellipse cx="300" cy="200" rx="150" ry="80" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="1" />
          <ellipse cx="1100" cy="200" rx="220" ry="110" fill="none" stroke="rgba(1,112,227,0.06)" strokeWidth="1" />
          <ellipse cx="1100" cy="200" rx="130" ry="65" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="1" />
          {/* Sinusoidy */}
          <path d="M0,200 Q175,100 350,200 T700,200 T1050,200 T1400,200" fill="none" stroke="rgba(1,112,227,0.12)" strokeWidth="2" />
          <path d="M0,230 Q175,130 350,230 T700,230 T1050,230 T1400,230" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="1.5" />
          <path d="M0,170 Q175,70 350,170 T700,170 T1050,170 T1400,170" fill="none" stroke="rgba(1,112,227,0.08)" strokeWidth="1.5" />
          {/* Topologické uzly */}
          {[
            [150,80],[350,120],[550,60],[750,110],[950,75],[1150,100],[1350,65],
            [200,320],[450,340],[700,310],[950,330],[1200,315]
          ].map(([x, y], i) => (
            <circle key={`cn${i}`} cx={x} cy={y} r="2.5" fill="rgba(1,112,227,0.15)" />
          ))}
          {[
            [150,80,350,120],[350,120,550,60],[550,60,750,110],[750,110,950,75],[950,75,1150,100],[1150,100,1350,65],
            [200,320,450,340],[450,340,700,310],[700,310,950,330],[950,330,1200,315]
          ].map(([x1,y1,x2,y2], i) => (
            <line key={`cl${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(1,112,227,0.07)" strokeWidth="0.8" />
          ))}
        </svg>
        <div className="relative z-10 text-center">
          <h2 className="text-[2rem] font-semibold text-black mb-2">6. Kombinace</h2>
          <p className="text-[#5c5b5b]">Sinusoida + hexagony + topologie + izočáry</p>
        </div>
      </section>

      {/* 7. Dynamická fraktální síť (hexagony + topologie) */}
      <section className="relative h-[400px] bg-[#f5f7f7] overflow-hidden flex items-center justify-center">
        {/* Vrstva 1: Nepravidelná hexagonální mřížka – mírně natočená */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Cpath d='M30 70L0 52L0 18L30 0L60 18L60 52Z' fill='none' stroke='rgba(1,112,227,0.07)' stroke-width='0.7'/%3E%3C/svg%3E")`,
          transform: 'rotate(8deg) scale(1.15)',
        }} />
        {/* Vrstva 2: Menší hexagonální mřížka – jiný úhel, jiná hustota */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='72' viewBox='0 0 42 72'%3E%3Cpath d='M21 52L0 39L0 13L21 0L42 13L42 39Z' fill='none' stroke='rgba(1,112,227,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          transform: 'rotate(-5deg) scale(1.3)',
        }} />
        {/* Vrstva 3: Topologické spojení – asymetrické, decentralizované */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 400">
          {/* Uzly – nepravidelně rozmístěné, různé velikosti */}
          {[
            [85,45,3],[210,135,2.5],[370,70,2],[490,175,3.5],[130,260,2],[310,310,2.5],[520,280,3],
            [680,55,2.5],[790,165,3],[920,95,2],[1060,180,2.5],[840,290,2],[680,340,3],[1010,320,2.5],
            [1180,60,3],[1290,150,2],[1350,270,2.5],[1150,240,3.5],[1250,340,2],[170,370,2.5],
            [440,365,2],[760,380,3],[1080,375,2],[60,160,2.5],[950,210,2]
          ].map(([x, y, r], i) => (
            <circle key={`fn${i}`} cx={x} cy={y} r={r} fill={`rgba(1,112,227,${0.12 + (i % 3) * 0.05})`} />
          ))}
          {/* Spojení – organické, různé délky a směry */}
          {[
            [85,45,210,135],[210,135,370,70],[370,70,490,175],[490,175,520,280],[130,260,310,310],[310,310,520,280],
            [85,45,130,260],[210,135,310,310],[370,70,680,55],[490,175,790,165],
            [680,55,790,165],[790,165,920,95],[920,95,1060,180],[1060,180,1150,240],[840,290,1010,320],[680,340,840,290],
            [790,165,840,290],[680,55,920,95],[1010,320,1150,240],
            [1180,60,1290,150],[1290,150,1350,270],[1350,270,1250,340],[1150,240,1250,340],[1180,60,1060,180],
            [520,280,680,340],[680,340,760,380],[840,290,1010,320],[310,310,440,365],[170,370,310,310],
            [60,160,85,45],[60,160,130,260],[950,210,1060,180],[950,210,840,290],
            [440,365,680,340],[760,380,1080,375],[1080,375,1250,340],
            [170,370,440,365],[1010,320,1080,375]
          ].map(([x1,y1,x2,y2], i) => (
            <line key={`fl${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={`rgba(1,112,227,${0.06 + (i % 4) * 0.02})`}
              strokeWidth={0.6 + (i % 3) * 0.3}
            />
          ))}
        </svg>
        <div className="relative z-10 text-center">
          <h2 className="text-[2rem] font-semibold text-black mb-2">7. Dynamická fraktální síť</h2>
          <p className="text-[#5c5b5b]">Hexagony + topologie – decentralizovaná dynamika bez centra</p>
        </div>
      </section>

    </main>
  );
}
