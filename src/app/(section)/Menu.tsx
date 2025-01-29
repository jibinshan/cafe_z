"use client";
import { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Menu = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".menu-one", {
        scrollTrigger: {
          trigger: ".menu-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".menu-two", {
        scrollTrigger: {
          trigger: ".menu-two",
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

    mm.add("(min-width:501px)", () => {
      gsap.to(".menu-one", {
        scrollTrigger: {
          trigger: ".menu-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        duration: 0.8,
      });
      gsap.to(".menu-two", {
        scrollTrigger: {
          trigger: ".menu-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });
    gsap.to(".menu-items", {
      scrollTrigger: {
        trigger: ".menu-items",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      ease: Power4.easeOut,
      duration: 1.5,
    });

    const splitType = document.querySelectorAll(".head-menu");
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

  const text = "Our Bestsellers";
  return (
    <section
      id="menu"
      className="relative flex h-fit w-full items-center justify-center bg-[#C4B4A8] md:justify-end"
    >
      <div className="relative z-40 flex h-fit w-full max-w-[1160px] flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:pr-14 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <div className="flex w-full flex-col items-center justify-center gap-12">
              <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-5 md:justify-between lg:flex-row">
                <div className="flex h-full w-full flex-col items-center justify-center gap-9 md:w-1/2 md:gap-14">
                  <div className="flex w-full flex-col items-center justify-center gap-4">
                    {/* <p className="menu-one font-open font-[200] text-xl text-primary md:-ml-[50px]"
                                            style={{
                                                transform: "scale(1.5)"
                                            }}
                                        >
                                            Menu
                                        </p> */}
                    <p className="non-italic flex items-center justify-center gap-3 text-center font-jost text-xl font-[300] uppercase text-[#000] md:text-4xl">
                      {text.split("").map((char, index) => (
                        <span key={index} className="key head-menu">
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div
                    className="menu-items flex w-full flex-col gap-9 md:w-1/2"
                    style={{
                      transform: "scale(1.3)",
                    }}
                  >
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="w-auto font-jost text-lg text-[#000]">
                          THE ENGLISH BREAKFAST
                        </p>
                        <div className="h-[1px] flex-grow border-b border-b-black pb-[2px]"></div>
                        <p className="flex w-auto items-end font-jost text-lg text-[#000]">
                          £ 9.5
                        </p>
                      </div>
                      <p className="font-jost text-sm text-[#000]">
                        Egg, bacon, sausage, hash brown, mushrooms, grilled
                        tomatoes, beans, toasted bread
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="w-auto font-jost text-lg text-[#000]">
                          THE VEGGIE BREAKFAST (V)
                        </p>
                        <div className="h-[1px] flex-grow border-b border-b-black pb-[2px]"></div>
                        <p className="flex w-auto items-end font-jost text-lg text-[#000]">
                          £ 9.0
                        </p>
                      </div>
                      <p className="font-jost text-sm text-[#000]">
                        Halloumi and spinach on wholegrain toast with veg
                        sausage, bubble, egg, grilled tomatoes and mushrooms
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="w-auto font-jost text-lg text-[#000]">
                          THE SOUTHERN BREAKFAST
                        </p>
                        <div className="h-[1px] flex-grow border-b border-b-black pb-[2px]"></div>
                        <p className="flex w-auto items-end font-jost text-lg text-[#000]">
                          £ 8.0
                        </p>
                      </div>
                      <p className="font-jost text-sm text-[#000]">
                        Halloumi & feta cheese, jam, olives, boiled egg,
                        tomatoes, cucumber, avocado, borek.
                      </p>
                    </div>
                    <div className="flex w-full flex-col">
                      <div className="flex w-full items-center gap-1">
                        <p className="w-auto font-jost text-lg text-[#000]">
                          SADE MENEMEN
                        </p>
                        <div className="h-[1px] flex-grow border-b border-b-black pb-[2px]"></div>
                        <p className="flex w-auto items-end font-jost text-lg text-[#000]">
                          £ 6.5
                        </p>
                      </div>
                      <p className="font-jost text-sm text-[#000]">
                        Scrambled eggs mixed with tomatoes, peppers
                      </p>
                    </div>
                  </div>
                  <Link href="/menu">
                    <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-black px-10 py-7 font-jost text-[#fff]">
                      View Menu
                    </Button>
                  </Link>
                </div>
                <div className="flex h-full w-full items-center justify-center md:w-1/2">
                  <Image
                    src="/images/home/menu.png"
                    width={476}
                    height={579}
                    alt="menu"
                    className="menu-items rounded-t-full"
                    style={{
                      transform: "scale(1.3)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
