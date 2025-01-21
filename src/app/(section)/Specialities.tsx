import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Specialities = ({}) => {
  return (
    <section
      id="about"
      className="relative flex w-full items-center justify-center bg-[#252C34] md:justify-end"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:flex-row md:gap-0 md:p-0 md:pr-14 lg:py-24">
        <div className="z-30 grid h-full w-full grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 md:items-center md:gap-0 md:px-12 md:pl-[370px]">
          <div className="relative flex w-full flex-col items-center justify-center gap-10">
            <Image
              src="/images/home/about/about.png"
              width={725}
              height={795}
              alt="about"
            />
          </div>

          <div className="flex h-full w-full items-center justify-center bg-[#8A7056] p-4">
            <div className="flex w-fit flex-col items-start justify-center gap-5">
              <p className="non-italic w-full font-jost text-3xl font-[300] uppercase text-white">
                <span className="head-about tracking-[4px] text-white">
                  about us
                </span>
              </p>
              <p className="w-full font-jost font-extralight text-white md:max-w-[400px]">
                Welcome to Bruncho Café, your all-day brunch destination located
                at 270 Deansgate, Manchester, M3 4JB. At Bruncho, we believe in
                turning every meal into a celebration of flavors and moments.
                Our menu is crafted with love, featuring everything from hearty
                breakfasts and indulgent French toasts to vibrant
                Mediterranean-inspired dishes and artisanal coffees.
              </p>
              <Link href="https://g.co/kgs/769495E" target="_blank">
                <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-black px-10 py-7 font-jost uppercase text-white">
                  Locate Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
