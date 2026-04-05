import { IconShieldCheck } from "@tabler/icons-react";

const items = [
  { label: "ISO 50001", href: "/standards-and-compliance#iso-50001" },
  { label: "EN 50160", href: "/standards-and-compliance#en-50160" },
  { label: "ISO 9001", href: "/standards-and-compliance#iso-9001" },
  { label: "ISO 14001", href: "/standards-and-compliance#iso-14001" },
  { label: "ISO 27001", href: "/standards-and-compliance#iso-27001" },
  { label: "IEC 61000-4-30 Class A", href: "/standards-and-compliance#iec-61000" },
  { label: "RoHS", href: "/standards-and-compliance#rohs" },
];

export default function NormsBar() {
  return (
    <section className="bg-[#f5f7f7]">
      <div className="max-w-[1320px] mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-between">
          {items.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#0170E3] transition-colors duration-300">
                <IconShieldCheck size={22} stroke={1.5} className="text-[#0170E3] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-[1rem] font-semibold text-black leading-none group-hover:text-[#0170E3] transition-colors">
                {item.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
