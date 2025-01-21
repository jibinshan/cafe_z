"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const pageBottom = window.scrollY + window.innerHeight;

        // Check if the bottom of the viewport is at or past the top of the footer
        const isAtFooter = pageBottom >= footerTop;
        setIsScrolled(isAtFooter);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `${position} left-0 top-0 z-50 flex h-[10vh] w-full flex-col items-center bg-transparent p-4 transition-all duration-0 ease-in-out md:left-6 md:top-5 md:h-[95vh] md:w-[300px] md:rounded-tr-[100px] md:py-12`,
        isScrolled && "z-0 opacity-0 transition-opacity duration-500 ease-in",
        pathname !== "/" &&
          "bg-[#8A7056] md:left-0 md:top-0 md:h-[10vh] md:w-full md:rounded-tr-none md:py-4",
        pathname === "/" && "bg-[#8A7056]/90 backdrop-blur-lg",
      )}
    >
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center gap-2">
        <div
          className={cn(
            "mb-2 flex w-full justify-between border-white/30 md:border-b md:py-2",
            (isScrolled || pathname !== "/" || pathname === "/") && "hidden",
          )}
        >
          <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
            <Link
              href="https://maps.app.goo.gl/fvPgSt9sysjK8Y9p8"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <MapPin />
              Country Club, High Street Bushey, London WD23 1TT
            </Link>
            <p className="flex items-center gap-2 text-sm text-white md:text-sm">
              <Clock />
              Sun - Thur: 4pm - 12am, Fri - Sat: 4pm - 2am
            </p>
          </div>
          <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
            <Link
              href="tel:02083414814"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <Phone />
              02083414814
            </Link>
            <Link
              href="info@oralounge.uk"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <Mail />
              info@oralounge.uk
            </Link>
          </div>
        </div>
        <div
          className={cn(
            "flex h-full w-full items-center justify-between md:flex-col",
            // isScrolled && "h-fit md:flex-row",
            pathname !== "/" && "md:flex-row",
          )}
        >
          <Link href="/">
            <Image
              src="/images/home/logo.png"
              width={105}
              height={73}
              alt="logo"
              className="h-[60px] w-[95px] md:h-[75px] md:w-[105px]"
            />
          </Link>
          <div
            className={cn(
              "hidden flex-row items-center justify-center gap-3 md:flex md:flex-col",
              // isScrolled && "gap-[3.48rem] md:flex-row",
              pathname !== "/" && "gap-[3.48rem] md:flex-row",
            )}
          >
            <Button
              asChild
              variant="link"
              className="px-0 font-jost font-light uppercase hover:font-semibold"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-jost font-light uppercase hover:font-semibold"
            >
              <Link href="/menu">Menu</Link>
            </Button>
            {/* <Button
              asChild
              variant="link"
              className="px-0 font-jost font-light uppercase hover:font-semibold"
            >
              <Link href="/table-booking">Reservation</Link>
            </Button> */}
            <Button
              asChild
              variant="link"
              className="px-0 font-jost font-light uppercase hover:font-semibold"
            >
              <Link href="/about-us">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-jost font-light uppercase hover:font-semibold"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            {/* <Button
              asChild
              variant="link"
              className="px-0 font-jost uppercase text-accent"
            >
              <Link href="/table-booking">Table Booking</Link>
            </Button> */}
            {/* <Button
              asChild
              variant="link"
              className="px-0 font-jost uppercase text-accent"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button> */}
          </div>
          <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
            {/* {pathname !== "/" && (
                            <CartSheet>
                                <Button
                                    variant="ghost"
                                    className="px-1 py-1 hover:bg-transparent"
                                    disabled={!BetaMenuActive}
                                >
                                    <span className="sr-only">Shopping Cart</span>
                                    <Icons.shoppingCart />
                                </Button>
                            </CartSheet>
                        )} */}
            <div className={cn("flex", pathname !== "/" && "hidden")}>
              <Link href="/menu">
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-3 rounded-none border-[#b58c67] px-6 py-6 uppercase"
                >
                  Order Now
                  {/* <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" /> */}
                </Button>
              </Link>
            </div>
            <div className={cn("hidden", pathname !== "/" && "flex")}>
              <Link
                href="tel:+447708433823"
                target="_blank"
                className="flex items-center gap-2 text-lg md:text-sm"
              >
                <Phone />
                +447708433823
              </Link>
            </div>
          </div>
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
