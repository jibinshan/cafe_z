"use client";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Reviews from "./(section)/Review";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Special from "./(section)/(special)/Special";
import Menu from "./(section)/Menu";
import Reserve from "./(section)/Reserve";
import About from "./(section)/About";
import Perfect from "./(section)/Perfect";
import Specialities from "./(section)/Specialities";
import Contact from "./(section)/Contact";
import { useEffect, useState } from "react";
import LoadingComponent from "@/components/LoadingComponent";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <main className="relative flex h-full w-full">
          <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
            <Navbar position="fixed" />
            <Hero />
            <Welcome />
            <About />
            <Perfect />
            <Specialities />
            <Special />
            <Menu />
            <Reserve />
            <Reviews />
            <ConnectWithUs />
            <Contact />
            {/* <Footer /> */}
          </div>
        </main>
      )}
    </>
  );
}
