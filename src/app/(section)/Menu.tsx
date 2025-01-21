'use client'
import { useEffect } from "react";
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Menu = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.menu-one', {
                scrollTrigger: {
                    trigger: ".menu-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.menu-two', {
                scrollTrigger: {
                    trigger: ".menu-two",
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

        mm.add("(min-width:501px)", () => {
            gsap.to('.menu-one', {
                scrollTrigger: {
                    trigger: ".menu-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                duration: 0.8

            })
            gsap.to('.menu-two', {
                scrollTrigger: {
                    trigger: ".menu-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
        })
        gsap.to('.menu-items', {
            scrollTrigger: {
                trigger: ".menu-items",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            ease: Power4.easeOut,
            duration: 1.5
        })

        const splitType = document.querySelectorAll(".head-menu")
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


    const text = "Our Bestsellers"
    return (
        <section id="menu" className="relative flex w-full items-center h-fit justify-center md:justify-end bg-[#605343]">
            <div className="relative flex flex-col max-w-[1160px] lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden md:pr-14 z-40">
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full items-center lg:items-center justify-center">
                    <div className="w-full flex flex-col gap-10 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-12">
                            <div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center justify-center md:justify-between gap-5">
                                <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center gap-9 md:gap-14">
                                    <div className="w-full flex flex-col gap-4 items-center justify-center">
                                        {/* <p className="menu-one font-open font-[200] text-xl text-primary md:-ml-[50px]"
                                            style={{
                                                transform: "scale(1.5)"
                                            }}
                                        >
                                            Menu
                                        </p> */}
                                        <p className="font-jost non-italic font-[300] uppercase text-white text-xl md:text-4xl text-center flex gap-3 justify-center items-center">
                                            {text.split("").map((char, index) => (
                                                <span key={index} className="key head-menu" >
                                                    {char === " " ? "\u00A0" : char}
                                                </span>
                                            ))}
                                        </p>
                                    </div>

                                    <div className="menu-items w-full md:w-1/2 flex flex-col gap-9"
                                        style={{
                                            transform: "scale(1.3)"
                                        }}
                                    >
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-white text-lg">BRUNCHO FULL ENGLISH</p>
                                                <div className="flex-grow border-b pb-[2px] border-b-white h-[1px]"></div>
                                                <p className="w-auto flex items-end text-white text-lg">£ 14.90</p>
                                            </div>
                                            <p className="text-white text-sm">Two free range eggs, Beef sausage, Beef Bacon, Hash browns, Cherry tomatoes, Garlic Butter Mushrooms served on a butter toasted sourdough bread</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-white text-lg">MEDITERRANEAN (V)</p>
                                                <div className="flex-grow border-b pb-[2px] border-b-white h-[1px]"></div>
                                                <p className="w-auto flex items-end text-white text-lg">£ 38</p>
                                            </div>
                                            <p className="text-white text-sm">Two free range poached eggs, Red pepper spread, Sun-dried tomatoes, Olives, Crumbled Feta, Zhoug sauce, Micro salad, Mixed seeds served on a sourdough bread</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-white text-lg">SMOKED SALMON ROCKET & CREAM CHEESE </p>
                                                <div className="flex-grow border-b pb-[2px] border-b-white h-[1px]"></div>
                                                <p className="w-auto flex items-end text-white text-lg">£ 12.90</p>
                                            </div>
                                            <p className="text-white text-sm">Focaccia, Dill cream cheese and smoked salmon served with seasoned fries</p>
                                        </div>
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex gap-1 items-center">
                                                <p className="w-auto text-white text-lg">PISTACHIO BAKLAVA (V)</p>
                                                <div className="flex-grow border-b pb-[2px] border-b-white h-[1px]"></div>
                                                <p className="w-auto flex items-end text-white text-lg">£ 12.90</p>
                                            </div>
                                            <p className="text-white text-sm">Thick brioche french toast, Mascarpone topping,
                                                Pistachio flakes served with kinder and vanilla ice cream</p>
                                        </div>
                                    </div>
                                    <Link href='/menu'>
                                        <Button className="hero-button flex items-center bg-black justify-center gap-3 px-10 py-7 text-white rounded-none">View Menu</Button>
                                    </Link>
                                </div>
                                <div className="w-full h-full md:w-1/2 flex justify-center items-center ">
                                    <Image
                                        src='/images/home/menu.png'
                                        width={476}
                                        height={579}
                                        alt="menu"
                                        className="menu-items rounded-t-full"
                                        style={{
                                            transform: "scale(1.3)"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Menu;
