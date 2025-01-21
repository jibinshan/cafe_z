'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Bounce } from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WelcomeRes = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.welcome-one', {
                scrollTrigger: {
                    trigger: ".welcome-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.welcome-two', {
                scrollTrigger: {
                    trigger: ".welcome-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.welcome-one', {
                scrollTrigger: {
                    trigger: ".welcome-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                ease: Bounce.easeOut,
                duration: 1.2

            })
            gsap.to('.welcome-two', {
                scrollTrigger: {
                    trigger: ".welcome-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                ease: Bounce.easeOut,
                duration: 0.8

            })
        })

        const splitType = document.querySelectorAll(".head-welcome")
        splitType.forEach((char, i) => {
            if (char instanceof HTMLElement) {
                const text = new SplitType(char, { types: "chars" })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.2,
                    stagger: 0.3
                })
            }
        })
        gsap.to('.about-arrow', {
            scrollTrigger: {
                trigger: ".about-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            ease: Bounce.easeInOut,
            duration: 1.2

        })

    }, [])

    const text = "coffee moment";
    return (
        <section id="welcome" className="relative flex w-full items-center justify-center bg-[#261D14]">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full items-center justify-center md:justify-end px-3 lg:p-0 py-12 lg:py-24 overflow-hidden z-40">
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full md:pl-[370px] items-center lg:items-center justify-center md:pr-14">
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/logo.png'
                                width={70}
                                height={49}
                                alt="bruncho"
                                className="welcome-one md:-ml-[50px]"
                                style={{
                                    transform: "scale(1.5)"
                                }}
                            />
                            <p className="head-welcome font-jost non-italic font-[300] uppercase text-white text-xl md:text-6xl text-center flex gap-3 justify-center items-center"
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
                            <p className="text-white text-center">Welcome to Bruncho Coffee Café, nestled in the heart of London, where every cup of coffee tells a story, and every cake is baked with love. Here, cherished moments are brewed alongside rich flavors, creating a haven for warmth, connection, and unforgettable smiles.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-9">
                        <div className="w-full h-full flex flex-col items-center justify-start gap-6">
                            <Image
                                src='/images/home/about/image1.png'
                                alt="right"
                                width={359}
                                height={508}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.5)"
                                }}
                            />
                            <p className="uppercase text-white">coffee & cake</p>
                            <Link href='/menu' className="border-b-[1px] border-b-[#D5A859] pb-1">
                                <Button className="uppercase text-sm md:text-lg font-jost font-[300] py-1 text-[#D5A859] border-b-[1px] border-b-[#D5A859] rounded-none px-0 hover:bg-transparent hover:text-[#D5A859]" variant="ghost">
                                    Order Now
                                </Button>
                            </Link>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/about/image2.png'
                                alt="right"
                                width={520}
                                height={718}
                                className="about-arrow w-4/5 h-[200px] md:w-full md:h-full object-cover"
                                style={{
                                    transform: "scale(1.5)"
                                }}
                            />
                            <p className="uppercase text-white">tradition</p>
                            <Link href='/menu' className="border-b-[1px] border-b-[#D5A859] pb-1">
                                <Button className="uppercase text-sm md:text-lg font-jost font-[300] py-1 text-[#D5A859] border-b-[1px] border-b-[#D5A859] rounded-none px-0 hover:bg-transparent hover:text-[#D5A859]" variant="ghost">
                                    Order Now
                                </Button>
                            </Link>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-end gap-6">
                            <Image
                                src='/images/home/about/image3.png'
                                alt="right"
                                width={359}
                                height={498}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.5)"
                                }}
                            />
                            <p className="uppercase text-white">Our Bestsellers</p>
                            <Link href='/menu' className="border-b-[1px] border-b-[#D5A859] pb-1">
                                <Button className="uppercase text-sm md:text-lg font-jost font-[300] py-1 text-[#D5A859] border-b-[1px] border-b-[#D5A859] rounded-none px-0 hover:bg-transparent hover:text-[#D5A859]" variant="ghost">
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
