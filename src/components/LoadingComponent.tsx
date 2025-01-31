"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const LoadingComponent = () => {
  const [progress, setProgress] = useState(0);
  const websiteNameRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (websiteNameRef.current) {
      gsap.fromTo(
        websiteNameRef.current,
        { opacity: 0, y: -50, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
      );
    }

    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { width: "0%" },
        { width: "100%", duration: 1, ease: "linear" },
      );
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, Math.round((elapsed / 1000) * 100));
      setProgress(newProgress);

      if (newProgress === 100) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const splitTypeElements = document.querySelectorAll(".head-welcome");
      splitTypeElements.forEach((char) => {
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
    }
  }, []);

  const text = "Cafe Z Bar";

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#dfd0c5] text-[#8A7056]">
      <div
        ref={websiteNameRef}
        className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl font-bold lg:text-4xl"
      >
        <p className="head-welcome non-italic flex items-center justify-center gap-3 text-center font-jost text-xl font-[300] uppercase text-[#8A7056] md:text-6xl">
          {text.split("").map((char, index) => (
            <span key={index} className="key">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
      <div className="absolute bottom-10 left-5 flex w-1/2 flex-row justify-between text-lg lg:w-1/4">
        <span className="font-jost text-lg uppercase">Loading...</span>
        <span className="font-jost text-lg uppercase">{progress}</span>
      </div>
      <div className="absolute bottom-5 left-5 h-1 w-1/2 bg-gray-700 lg:w-1/4">
        <div
          ref={progressBarRef}
          className="h-full bg-[#8A7056] transition-all"
        ></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
