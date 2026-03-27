import {
  IconThumbUp,
  IconHeadset,
  IconTruck,
  IconTool,
} from "@tabler/icons-react";

const items = [
  {
    icon: IconThumbUp,
    title: "25+ let zkušeností",
    desc: "v oboru kompenzace a měření energie",
  },
  {
    icon: IconHeadset,
    title: "Odborné poradenství",
    desc: "od certifikovaných specialistů",
  },
  {
    icon: IconTruck,
    title: "Expedice do 24h",
    desc: "z vlastního skladu v Pardubicích",
  },
  {
    icon: IconTool,
    title: "Technická podpora",
    desc: "servis, náhradní díly a školení v češtině",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 px-8 first:pl-0 last:pr-0"
              >
                <Icon size={24} stroke={1.5} className="text-[#1488c9] flex-shrink-0 mt-0.5" strokeLinecap="round" />
                <div>
                  <p className="text-black font-semibold text-[1rem] leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[#5c5b5b] text-[0.875rem] leading-snug mt-1">
                    {item.desc}
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
