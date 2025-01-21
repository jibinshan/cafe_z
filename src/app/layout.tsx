import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Open_Sans, Jost } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Bruncho",
  description: "Welcome to Bruncho, your premier destination for a sophisticated blend of culinary excellence and vibrant ambiance. Indulge in an exquisite dining experience",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-inter flex min-h-screen text-[#FBEAD2] antialiased",
          open.variable,
          jost.variable,
          inter.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html >
  );
}
