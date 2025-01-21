"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Bounce } from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WelcomeRes = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 1.2,
      });
      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 0.8,
      });
    });

    const splitType = document.querySelectorAll(".head-welcome");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.3,
        });
      }
    });
    gsap.to(".about-arrow", {
      scrollTrigger: {
        trigger: ".about-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      ease: Bounce.easeInOut,
      duration: 1.2,
    });
  }, []);

  const text = "coffee moment";
  return (
    <section
      id="welcome"
      className="relative flex w-full items-center justify-center bg-[#252C34]"
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="relative z-40 flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:justify-end lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:pl-[370px] md:pr-14 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-6">
              <Image
                src="/images/home/logo.png"
                width={70}
                height={49}
                alt="bruncho"
                className="welcome-one md:-ml-[50px]"
                style={{
                  transform: "scale(1.5)",
                }}
              />
              <p
                className="head-welcome non-italic flex items-center justify-center gap-3 text-center font-jost text-xl font-[300] uppercase text-white md:text-6xl"
                // style={{
                //     transform: "scale(1.5)"
                // }}
              >
                {text.split("").map((char, index) => (
                  <span key={index} className="key">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </p>
              <p className="text-center font-jost text-white">
                Welcome to Bruncho Coffee Café, nestled in the heart of London,
                where every cup of coffee tells a story, and every cake is baked
                with love. Here, cherished moments are brewed alongside rich
                flavors, creating a haven for warmth, connection, and
                unforgettable smiles.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-9 md:flex-row md:justify-between">
            <div className="flex h-full w-full flex-col items-center justify-start gap-6">
              <Image
                src="/images/home/about/image1.png"
                alt="right"
                width={359}
                height={508}
                className="about-arrow h-fit w-fit object-cover"
                style={{
                  transform: "scale(1.5)",
                }}
              />
              <p className="font-jost uppercase text-white">coffee & cake</p>
              <Link
                href="/menu"
                className="border-b-[1px] border-b-[#D5A859] pb-1"
              >
                <Button
                  className="font-manrope rounded-none border-b-[1px] border-b-[#D5A859] px-0 py-1 text-sm font-[300] uppercase text-[#D5A859] hover:bg-transparent hover:text-[#D5A859] md:text-lg"
                  variant="ghost"
                >
                  Order Now
                </Button>
              </Link>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-6">
              <Image
                src="/images/home/about/image2.png"
                alt="right"
                width={520}
                height={718}
                className="about-arrow h-[200px] w-4/5 object-cover md:h-full md:w-full"
                style={{
                  transform: "scale(1.5)",
                }}
              />
              <p className="font-jost uppercase text-white">tradition</p>
              <Link
                href="/menu"
                className="border-b-[1px] border-b-[#D5A859] pb-1"
              >
                <Button
                  className="font-manrope rounded-none border-b-[1px] border-b-[#D5A859] px-0 py-1 text-sm font-[300] uppercase text-[#D5A859] hover:bg-transparent hover:text-[#D5A859] md:text-lg"
                  variant="ghost"
                >
                  Order Now
                </Button>
              </Link>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-end gap-6">
              <Image
                src="/images/home/about/image3.png"
                alt="right"
                width={359}
                height={498}
                className="about-arrow h-fit w-fit object-cover"
                style={{
                  transform: "scale(1.5)",
                }}
              />
              <p className="font-jost uppercase text-white">Our Bestsellers</p>
              <Link
                href="/menu"
                className="border-b-[1px] border-b-[#D5A859] pb-1"
              >
                <Button
                  className="font-manrope rounded-none border-b-[1px] border-b-[#D5A859] px-0 py-1 text-sm font-[300] uppercase text-[#D5A859] hover:bg-transparent hover:text-[#D5A859] md:text-lg"
                  variant="ghost"
                >
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeRes;
