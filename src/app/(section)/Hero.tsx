"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";

const Hero = ({}) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 1.5, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1, {
        x: 200,
        opacity: 0,
        delay: -1.5,
      })
      .from(".hero-button", 1, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -1.5,
      });
    tl.from(".down-button", 1, {
      opacity: 0, // Start with opacity 0
      duration: 1, // Animation duration (1 second)
      delay: -0.5, // Optional delay before starting animation
    }).to(".down-button", 1, {
      opacity: 1, // End with opacity 1
      duration: -1.5, // Animation duration (1 second)
      ease: "bounce.out",
    });
  }, []);
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center overflow-hidden"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
        <div
          className="-left-80 top-0 z-0 hidden h-full w-full bg-black/30 md:flex lg:absolute lg:z-20"
          style={{
            width: "100%", // Full width of the div
            height: "100vh", // Full height of the div
            borderRadius: "957px", // Adjust if you need rounded corners
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(226, 161, 75, 0.16) 0%, rgba(0, 0, 0, 0) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "40% 100%", // Restrict gradient to 10% of the width
            backgroundPosition: "left", // Align the gradient to the left side
          }}
        ></div>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
        <div className="absolute right-0 top-0 flex h-full w-full justify-center overflow-hidden">
          {/* <Image
                        src='/images/home/hero.png'
                        alt="hero"
                        width={1093}
                        height={967}
                        className="min-h-full scale-x-[-1] object-cover"
                    /> */}

          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bruncho-cafe-thumbnail.png"
          ></video>
        </div>
        <div className="hero-container z-40 flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-9 px-4 md:pl-[200px]">
          <div className="flex w-full flex-col items-center justify-center md:items-start">
            <p className="head-hero w-full text-center font-jost text-lg font-[300] uppercase text-[#C2C2C2]">
              Welcome To Bruncho
            </p>
            <h1 className="w-full text-center font-jost text-5xl font-[100] uppercase tracking-[1.12px] text-[#C2C2C2] md:text-6xl lg:leading-[80px]">
              your Cozy Tea{" "}
              <TypeAnimation
                sequence={["Escape ", 3000, "Retreat", 3000]}
                wrapper="span"
                speed={25}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
            {/* <Link href='/table-booking'>
                            <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 rounded-none"> Book Table</Button>
                        </Link> */}
            <Link href="/menu">
              <Button className="hero-button flex items-center justify-center gap-3 rounded-none bg-[#e8e8e8] px-10 py-7 font-jost uppercase">
                Order nOw
              </Button>
            </Link>
          </div>
        </div>
        <Link href="" className="absolute bottom-10 left-28 z-40">
          <Button
            className="down-button flex items-center justify-center gap-3 rounded-full bg-transparent px-3 text-white hover:text-black"
            variant="ghost"
            onClick={scrollToBottom}
          >
            <ArrowDown className="font-extralight text-[#e2a14b]" />{" "}
            <span className="font-inter uppercase tracking-[2px] text-white hover:text-black">
              SCROLL DOWN
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
