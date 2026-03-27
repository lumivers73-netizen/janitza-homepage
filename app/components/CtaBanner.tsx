import Image from "next/image";
import { IconCaretRightFilled } from "@tabler/icons-react";

export default function CtaBanner() {
  return (
    <section className="bg-[#f5f7f7] py-12 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-center gap-16">

          {/* Text vlevo */}
          <div className="flex-1 min-w-0">
            <span className="section-label">Software GRIDVIS®</span>
            <h2 className="text-[2rem] font-normal text-black leading-[1.111] mb-4">
              Analyzujte, vyhodnocujte<br />a dokumentujte energetická data
            </h2>
            <p className="text-[1rem] text-[#5c5b5b] leading-[1.375] mb-8 max-w-lg">
              S vizualizačním software Gridvis® lokalizujete energeticky náročné
              spotřebiče, detekujete poruchy v rané fázi a plníte zákonné
              požadavky i normy EN&nbsp;50160 a ISO&nbsp;50001.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a href="#" className="btn-primary">
                Stáhnout zdarma <IconCaretRightFilled size={18} stroke={2} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 h-[48px] font-semibold text-[1rem] border border-[#1588C8] text-[#1588C8] rounded-[3px] hover:bg-[#1588C8] hover:text-white transition-colors"
              >
                Naplánovat demo <IconCaretRightFilled size={18} stroke={2} />
              </a>
            </div>
          </div>

          {/* Obrázek vpravo */}
          <div className="flex-shrink-0 w-[520px]">
            <Image
              src="/gridvis-keyvisual.avif"
              alt="GridVis software"
              width={520}
              height={380}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
