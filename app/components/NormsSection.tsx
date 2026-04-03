import { IconCaretRightFilled, IconScale, IconShieldCheck, IconFileText } from "@tabler/icons-react";

const norms = [
  {
    icon: <IconScale size={28} stroke={1.5} />,
    title: "EN 50160",
    desc: "Charakteristiky napětí elektrické energie dodávané z veřejných distribučních sítí.",
  },
  {
    icon: <IconShieldCheck size={28} stroke={1.5} />,
    title: "IEC 61000",
    desc: "Elektromagnetická kompatibilita — normy pro měření a hodnocení kvality energie.",
  },
  {
    icon: <IconFileText size={28} stroke={1.5} />,
    title: "Vyhláška č. 540/2005 Sb.",
    desc: "Kvalita dodávek elektřiny a souvisejících služeb v elektroenergetice.",
  },
];

export default function NormsSection() {
  return (
    <section className="bg-[#f5f7f7] py-14">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="section-label" style={{ textAlign: "center" }}>Legislativa</span>
          <h2 className="text-[2rem] font-normal text-black leading-[1.1] mt-1">
            Normy a legislativa
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {norms.map((norm) => (
            <a
              key={norm.title}
              href="#"
              className="product-card group bg-white rounded-lg p-6 flex items-start gap-4"
            >
              <div className="text-[#0170E3] flex-shrink-0 mt-1">
                {norm.icon}
              </div>
              <div>
                <h3 className="text-[1rem] font-semibold text-black leading-[1.3] mb-1 group-hover:text-[#0170E3] transition-colors">
                  {norm.title}
                </h3>
                <p className="text-[0.875rem] text-[#5c5b5b] leading-[1.5]">
                  {norm.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <a href="#" className="link-arrow">
            Zobrazit všechny normy a legislativu
            <IconCaretRightFilled size={16} stroke={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
