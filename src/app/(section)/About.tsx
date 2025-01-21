"use client";
import { useEffect } from "react";
import gsap, { Bounce, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".about-one", {
        scrollTrigger: {
          trigger: ".reserve-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".about-two", {
        scrollTrigger: {
          trigger: ".about-two",
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
      gsap.to(".about-one", {
        scrollTrigger: {
          trigger: ".about-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".about-two", {
        scrollTrigger: {
          trigger: ".about-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        scale: 1,
        duration: 0.8,
      });
    });
    gsap.to(".about-image", {
      scrollTrigger: {
        trigger: ".about-image",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1.3,
      ease: Power4.easeOut,
      duration: 1.3,
    });

    const splitType = document.querySelectorAll(".head-about");
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
      id="about"
      className="relative flex w-full items-center justify-center bg-[#C4B4A8] py-12 md:justify-end md:pl-[370px]"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:pr-14 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-start justify-center gap-5 md:w-1/3">
            <p className="non-italic w-full font-jost text-3xl font-[300] uppercase text-white">
              <span className="head-about font-jost tracking-[4px] text-white">
                Our Specialties
              </span>
            </p>
            <p className="w-full font-jost font-extralight text-white md:max-w-[400px]">
              Bruncho Café in London is a haven for food lovers, offering a rich
              selection of breakfast delights, from the indulgent Bruncho Full
              English to Mediterranean-inspired dishes like Halloumi Shrooms and
              Turkish Eggs. With handcrafted brioche French toasts, fluffy
              waffles, and hearty focaccia sandwiches, every dish is a
              celebration of vibrant flavors and comforting warmth.
            </p>
            <Link href="/menu">
              <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-black px-10 py-7 font-jost uppercase text-white">
                Order Now
              </Button>
            </Link>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-10 md:w-2/3">
            <div className="relative m-6 aspect-square h-2/3 w-2/3 rounded-full bg-gradient-to-b from-transparent via-[#a99c91] to-[#a99c91]">
              <div className="absolute -top-12 left-0 flex h-full w-full items-center justify-center md:-top-28">
                <Image
                  src="/images/home/about.png"
                  width={613}
                  height={250}
                  alt="about"
                  className="about-image object-cover"
                  style={{
                    transform: "scale(1.5)",
                  }}
                />
              </div>
              <Link
                className="absolute -bottom-5 -left-2 z-20 hidden md:block"
                href="/table-booking"
              >
                <Image
                  src="/images/home/table-booking.png"
                  width={276}
                  height={276}
                  alt="about"
                  className="max-h-[250px] max-w-[250px] rounded-full bg-[#C4B4A8]/50 backdrop-blur-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
