import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import CustomCursor from "@/components/layout/CustomCursor"; //
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huilén Vilches - Desarrollador Full-Stack",
  description: "Portfolio de Huilén Vilches, desarrolladora full-stack ",
  keywords: [
    "desarrolladora",
    "full-stack",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Huilén Vilches" }],
  openGraph: {
    title: "Huilén Vilches - Desarrolladora Full-Stack",
    description: "Portfolio profesional de desarrollo web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Sidebar />
        <main className="relative">{children}</main>
        {/* <CustomCursor /> */}{" "}
      </body>
    </html>
  );
}
