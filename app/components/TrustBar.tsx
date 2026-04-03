import {
  IconWorld,
  IconCalendar,
  IconFlag,
  IconShieldCheck,
  IconLock,
} from "@tabler/icons-react";

const items = [
  { icon: IconWorld, number: "90+", label: "zemí světa" },
  { icon: IconCalendar, number: "60+", label: "let na trhu" },
  { icon: IconFlag, number: "100 %", label: "Made in Germany" },
  { icon: IconShieldCheck, number: "4", label: "ISO certifikace" },
  { icon: IconLock, number: "ISO 27001", label: "Kyberneticky zabezpečeno" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#f5f7f7]">
      <div className="max-w-[1320px] mx-auto px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-[3px] bg-white flex items-center justify-center flex-shrink-0">
                  <Icon size={22} stroke={1.5} className="text-[#0170E3]" />
                </div>
                <div>
                  <p className="text-[1rem] font-semibold text-black leading-none">
                    {item.number}
                  </p>
                  <p className="text-[0.8125rem] text-[#5c5b5b] leading-snug mt-0.5">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
