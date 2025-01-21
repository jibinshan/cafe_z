"use client";
import { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Reserve = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".reserve-one", {
        scrollTrigger: {
          trigger: ".reserve-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        scale: 1,
        ease: Power4.easeOut,
        duration: 0.8,
      });

      gsap.to(".reserve-two", {
        scrollTrigger: {
          trigger: ".reserve-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        scale: 1,
        ease: Power4.easeOut,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".reserve-one", {
        scrollTrigger: {
          trigger: ".reserve-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        ease: Power4.easeOut,
        duration: 0.8,
      });
      gsap.to(".reserve-two", {
        scrollTrigger: {
          trigger: ".reserve-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        scale: 1,
        ease: Power4.easeOut,
        duration: 0.8,
      });
    });
    gsap.to(".reserve-image", {
      scrollTrigger: {
        trigger: ".reserve-image",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      ease: Power4.easeOut,
      duration: 1.5,
    });

    const splitType = document.querySelectorAll(".head-reserve");
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
          stagger: 0.2,
        });
      }
    });
  }, []);
  return (
    <section
      id="reserve"
      className="relative flex w-full items-center justify-center bg-[#252C34]"
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="relative z-40 flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:justify-end lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row md:pl-[370px] md:pr-14 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 md:w-1/2">
            <Image
              src="/images/home/reserve.png"
              width={475}
              height={579}
              alt="reserve"
              className="reserve-image max-h-[581] max-w-[603] rounded-t-full"
              style={{
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-10 md:w-1/2">
            <p className="non-italic flex items-center justify-center gap-3 font-jost text-4xl font-[100] uppercase text-white md:text-5xl">
              <span className="head-reserve">Savor the Bruncho Experience</span>
            </p>
            <p
              className="reserve-two w-full font-jost text-white md:max-w-[400px]"
              style={{
                transform: "scale(1.3)",
              }}
            >
              Discover the joy of all-day brunch at Bruncho Café. From hearty
              classics to Mediterranean-inspired dishes and artisanal coffee,
              every bite is crafted to create moments worth savoring.
            </p>
            <Link href="/menu">
              <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-black px-10 py-7 font-jost uppercase text-white">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
