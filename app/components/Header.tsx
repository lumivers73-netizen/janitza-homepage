"use client";
import {
  IconSearch,
  IconPhone,
  IconHeart,
  IconShoppingCart,
  IconUser,
  IconCaretDownFilled,
  IconScale,
  IconMessageCircle,
} from "@tabler/icons-react";
import Image from "next/image";

const navItems = [
  { label: "Výprodej", href: "#" },
  { label: "Kompenzace", href: "#", hasDropdown: true },
  { label: "Komponenty", href: "#", hasDropdown: true },
  { label: "Janitza® UMG", href: "#" },
  { label: "MTP", href: "#", hasDropdown: true },
  { label: "Rozvaděče", href: "#", hasDropdown: true },
  { label: "Služby", href: "#" },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1320px] mx-auto px-6 flex items-center h-[72px] gap-6">

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/janitzalogo.png"
              alt="Janitza Solution Partner"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Search – roztáhne se */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center border border-gray-200 rounded-[3px] px-3 py-2 gap-2 focus-within:border-[#335EEC] transition-colors max-w-md">
              <IconSearch size={16} stroke={1.5} className="text-[#9ca3af] flex-shrink-0" />
              <input
                type="text"
                placeholder="Co hledáte? např. regulátor výkonu…"
                className="flex-1 text-sm outline-none bg-transparent text-[#131313] placeholder:text-[#9ca3af] min-w-0"
              />
            </div>
          </div>

          {/* Kontakt */}
          <a href="tel:+420777730002" className="flex-shrink-0 flex items-center gap-1.5 group">
            <IconPhone size={14} stroke={1.5} className="text-[#131313] group-hover:text-[#335EEC] transition-colors" />
            <span className="text-[13px] font-semibold text-[#131313] group-hover:text-[#335EEC] transition-colors whitespace-nowrap">
              +420 777 730 002
            </span>
          </a>
          <a href="#" className="flex-shrink-0 flex items-center gap-1.5 group">
            <IconMessageCircle size={14} stroke={1.5} className="text-[#131313] group-hover:text-[#335EEC] transition-colors" />
            <span className="text-[13px] font-semibold text-[#131313] group-hover:text-[#335EEC] transition-colors whitespace-nowrap">
              Online chat
            </span>
          </a>

          {/* Divider */}
          <div className="w-px h-7 bg-gray-200 flex-shrink-0" />

          {/* Ikony – jednotný stroke 1.5 */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              className="p-1.5 text-[#5a6268] hover:text-[#1488c9] transition-colors rounded-sm hover:bg-gray-50"
              aria-label="Porovnat produkty"
            >
              <IconScale size={20} stroke={1.5} />
            </button>
            <button
              className="p-1.5 text-[#5a6268] hover:text-[#335EEC] transition-colors rounded-sm hover:bg-gray-50"
              aria-label="Oblíbené"
            >
              <IconHeart size={20} stroke={1.5} />
            </button>
            <button
              className="p-1.5 text-[#5a6268] hover:text-[#335EEC] transition-colors rounded-sm hover:bg-gray-50"
              aria-label="Účet"
            >
              <IconUser size={20} stroke={1.5} />
            </button>
            <button
              className="relative p-1.5 text-white bg-[#335EEC] hover:bg-[#1747D0] transition-colors rounded-sm"
              aria-label="Košík"
            >
              <IconShoppingCart size={20} stroke={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#131313] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="max-w-[1320px] mx-auto px-6">
          <ul className="flex items-center gap-0 h-[50px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link flex items-center gap-1 px-5 h-[50px] text-[1rem] font-semibold text-black hover:text-black transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <IconCaretDownFilled size={10} className="text-black mt-0.5" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
