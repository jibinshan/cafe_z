'use client'
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from 'gsap';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ }) => {

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    };

    useEffect(() => {

        const tl = gsap.timeline()
        tl.from('.head-container', 1.5, {
            y: 50,
            opacity: 1,
            ease: 'power4.out'
        }).from('.head-hero', 1, {
            x: 200,
            opacity: 0,
            delay: -1.5
        }).from('.hero-button', 1, {
            y: 100,
            opacity: 0,
            ease: "power4.out",
            delay: -1.5
        })
        tl.from('.down-button', 1, {
            opacity: 0, // Start with opacity 0
            duration: 1, // Animation duration (1 second)
            delay: -0.5, // Optional delay before starting animation
        }).to('.down-button', 1, {
            opacity: 1, // End with opacity 1
            duration: -1.5, // Animation duration (1 second)
            ease: "bounce.out",
        });
    }, [])
    return (
        <section id="hero" className="flex w-full items-center justify-center overflow-hidden">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black" >
                <div className="hidden md:flex lg:absolute -left-80 top-0 h-full w-full bg-black/30 z-0 lg:z-20"
                    style={{
                        width: "100%", // Full width of the div
                        height: "100vh", // Full height of the div
                        borderRadius: "957px", // Adjust if you need rounded corners
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(226, 161, 75, 0.16) 0%, rgba(0, 0, 0, 0) 100%)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "40% 100%", // Restrict gradient to 10% of the width
                        backgroundPosition: "left", // Align the gradient to the left side
                    }}
                ></div>
                <div className="absolute left-0 top-0 h-full w-full bg-black/50 z-10"></div>
                <div className="absolute right-0 top-0 h-full w-full flex justify-center overflow-hidden">
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
                        src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bruncho-cafe-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/bruncho-cafe-thumbnail.png"
                    ></video>
                </div>
                <div className="hero-container z-40 flex flex-col gap-9 h-full w-full max-w-[1300px] items-start justify-center px-4 md:pl-[200px]">
                    <div className="flex w-full flex-col items-center md:items-start justify-center">
                        <p className="head-hero w-full text-center font-jost text-[#C2C2C2] font-[300] text-lg uppercase">Welcome To Bruncho</p>
                        <h1 className="w-full text-center font-jost text-[#C2C2C2] font-[100] text-5xl  lg:leading-[80px] uppercase md:text-6xl tracking-[1.12px]">
                            your Cozy Tea{' '}
                            <TypeAnimation
                                sequence={[
                                    'Escape ',
                                    3000,
                                    'Retreat',
                                    3000,
                                ]}
                                wrapper="span"
                                speed={25}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h1>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
                        {/* <Link href='/table-booking'>
                            <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 rounded-none"> Book Table</Button>
                        </Link> */}
                        <Link href='/menu'>
                            <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 rounded-none bg-[#e8e8e8] uppercase"
                            >Order nOw</Button>
                        </Link>
                    </div>
                </div>
                <Link href='' className="absolute left-28 bottom-10 z-40">
                    <Button className="down-button flex items-center justify-center px-3 bg-transparent rounded-full text-white  hover:text-black gap-3" variant='ghost' onClick={scrollToBottom}><ArrowDown className="font-extralight text-[#e2a14b]" /> <span className="text-white font-inter tracking-[2px] uppercase hover:text-black">SCROLL DOWN</span></Button>
                </Link>
            </div>
        </section >
    );
};

export default Hero;






