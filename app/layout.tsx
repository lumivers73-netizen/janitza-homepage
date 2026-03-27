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
  title: "Janitza – Profesionální měření a management elektrické energie",
  description:
    "Analyzátory kvality energie, síťové analyzátory a software pro monitoring elektrické energie.",
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
