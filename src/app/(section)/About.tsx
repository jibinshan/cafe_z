'use client'
import { useEffect } from "react";
import gsap, { Bounce, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.about-one', {
                scrollTrigger: {
                    trigger: ".reserve-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.about-two', {
                scrollTrigger: {
                    trigger: ".about-two",
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
            gsap.to('.about-one', {
                scrollTrigger: {
                    trigger: ".about-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
            gsap.to('.about-two', {
                scrollTrigger: {
                    trigger: ".about-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                scale: 1,
                duration: 0.8

            })
        })
        gsap.to('.about-image', {
            scrollTrigger: {
                trigger: ".about-image",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1.3,
            ease: Power4.easeOut,
            duration: 1.3
        })

        const splitType = document.querySelectorAll(".head-about")
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
                    stagger: 0.2
                })
            }
        })

    }, [])
    return (
        <section id="about" className="relative flex w-full items-center justify-center md:justify-end bg-[#8e6031] md:pl-[370px]">
            <div className="relative flex flex-col  lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 md:pr-14 overflow-hidden">
                <div className="z-30 flex flex-col md:flex-row gap-5 lg:gap-9 h-full w-full items-center lg:items-center justify-center">
                    <div className="w-full md:w-1/3 flex flex-col gap-5 justify-center items-start">
                        <p className="w-full non-italic font-[300] uppercase font-jost text-white text-3xl">
                            <span className="head-about text-white tracking-[4px]">Our Specialties</span>
                        </p>
                        <p className="font-jost text-white font-extralight w-full md:max-w-[400px]"
                        >Bruncho Café in London is a haven for food lovers, offering a rich selection of breakfast delights, from the indulgent Bruncho Full English to Mediterranean-inspired dishes like Halloumi Shrooms and Turkish Eggs. With handcrafted brioche French toasts, fluffy waffles, and hearty focaccia sandwiches, every dish is a celebration of vibrant flavors and comforting warmth.</p>
                        <Link href='/menu'>
                            <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 text-white rounded-none bg-black uppercase">Order Now</Button>
                        </Link>
                    </div>
                    <div className="relative w-full md:w-2/3 flex flex-col gap-10 justify-center items-center">

                        <div className="relative w-2/3 h-2/3 aspect-square bg-gradient-to-b from-transparent via-[#a16936] to-[#a16936] rounded-full m-6">
                            <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center">
                                <Image
                                    src='/images/home/about.png'
                                    width={815}
                                    height={815}
                                    alt="about"
                                    className="about-image object-cover"
                                    style={{
                                        transform: "scale(1.5)"
                                    }}
                                />
                            </div>
                            <Link className="absolute hidden md:block -left-2 -bottom-5 z-20" href='/table-booking'>
                                <Image
                                    src='/images/home/table-booking.png'
                                    width={276}
                                    height={276}
                                    alt="about"
                                    className="max-w-[250px] max-h-[250px]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
