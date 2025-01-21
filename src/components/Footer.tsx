import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer
      id="footer"
      className="flex h-full w-full flex-col items-center justify-center gap-12 border-t-[2px] border-t-[#C4B4A8] bg-[#252C34] px-2 py-12"
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:flex-row">
        <div className="flex w-full flex-col items-center justify-start gap-12 md:w-1/3 md:items-start">
          <Image
            src="/images/home/logo.png"
            width={105}
            height={73}
            alt="logo"
          />
          <div className="flex flex-col gap-3">
            <Link
              href="https://maps.app.goo.gl/3c776tRDmvogSitG8"
              target="_blank"
              className="text-center font-jost text-white md:text-start"
            >
              Brunch, 270 Deansgate,
              <br /> Manchester M3 4JB, United Kingdom
            </Link>
            <Link
              href="tel:+447708433823"
              className="text-center font-jost text-white md:text-start"
            >
              +447708433823
            </Link>
            <Link
              href="mailto:info@bruncho.co.uk"
              className="text-center font-jost text-white md:text-start"
            >
              info@bruncho.co.uk
            </Link>
          </div>
          <div className="flex items-center justify-start gap-4">
            <Link
              href="https://www.instagram.com/bruncho_uk/?hl=en"
              className="font-jost text-white"
            >
              <Icons.instagram />
            </Link>
            {/* <Link href="" className="text-white font-jost">
                            <Icons.tripAdvisor />
                        </Link> */}
            <Link
              href="https://www.google.com/search?hl=en-IN&gl=in&q=Bruncho,+270+Deansgate,+Manchester+M3+4JB,+United+Kingdom"
              className="font-jost text-white"
            >
              <Icons.google />
            </Link>
            {/* <Link href="" className="text-white font-jost">
                            <Icons.facebook />
                        </Link> */}
          </div>
        </div>
        <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex md:w-1/3">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl font-light text-accent text-white"
            asChild
          >
            <Link href="/" className="font-jost text-white">
              Home
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl font-light text-accent text-white"
            asChild
          >
            <Link href="/menu" className="font-jost text-white">
              Menu
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl font-light text-accent text-white"
            asChild
          >
            <Link href="/about-us" className="font-jost text-white">
              About
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl font-light text-accent text-white"
            asChild
          >
            <Link href="/contact" className="font-jost text-white">
              Contact
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl font-light text-accent text-white"
            asChild
          >
            <Link href="/table-booking" className="font-jost text-white">
              Table booking
            </Link>
          </Button>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 md:hidden md:w-1/3">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/menu">Menu</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/about-us">About</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-jost text-xl text-[#959595] text-accent"
            asChild
          >
            <Link href="/table-booking">Table booking</Link>
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/3">
          <div></div>
          <p className="font-jost font-semibold uppercase text-white">
            Opening hours
          </p>
          <p className="font-jost text-white">Mon - Thur: 7:30 - 17:00</p>
          <p className="font-jost text-white">Fri : 7:30 - 19:00</p>
          <p className="font-jost text-white">Sat : 8:00 - 18:00</p>
          <p className="font-jost text-white">Sun : 8:00 - 17:00</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="w-fit px-4 text-center font-jost text-xl text-white">
          © 2024 Bruncho,all rights reserved |{" "}
          <Link
            href="https://foodo.ai"
            className="hover:underline"
            target="_blank"
          >
            Powered By Foodo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
