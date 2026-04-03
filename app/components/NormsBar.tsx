import { IconShieldCheck } from "@tabler/icons-react";

const items = [
  "ISO 50001",
  "EN 50160",
  "ISO 9001",
  "ISO 14001",
  "ISO 27001",
  "IEC 61000-4-30 Class A",
  "RoHS",
];

export default function NormsBar() {
  return (
    <section className="bg-[#f5f7f7]">
      <div className="max-w-[1320px] mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-between">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0">
                <IconShieldCheck size={22} stroke={1.5} className="text-[#0170E3]" />
              </div>
              <p className="text-[1rem] font-semibold text-black leading-none">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
