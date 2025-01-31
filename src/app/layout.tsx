import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Open_Sans, Jost, Manrope } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Cafe Z Bar",
  description: "Cafe Z Bar",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
};

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400"],
});

const open = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen font-inter text-[#FBEAD2] antialiased",
          open.variable,
          jost.variable,
          inter.variable,
          manrope.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
