import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Janitza ČR – Analyzátory energie, monitoring sítě a software GridVis",
  description:
    "Autorizovaný partner Janitza v ČR. Energetické analyzátory, síťové analyzátory, měření kvality napětí, kompenzace účiníku, software GridVis a servis. Expedice do 24 h z Pardubic.",
  keywords: "Janitza, analyzátor energie, síťový analyzátor, kvalita napětí, EN 50160, GridVis, kompenzace účiníku, měření elektrické energie, energetický management, ISO 50001",
  openGraph: {
    title: "Janitza ČR – Profesionální měření a management elektrické energie",
    description: "Certifikované analyzátory Janitza, software GridVis a kompletní servis. Autorizovaný distributor pro ČR a SR.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={sourceSans.variable}>
      <body style={{ fontFamily: "var(--font-source-sans), 'Helvetica Neue', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
