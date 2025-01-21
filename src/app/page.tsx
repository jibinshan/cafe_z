import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Footer from "@/components/Footer";
import Reviews from "./(section)/Review";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Special from "./(section)/(special)/Special";
import Menu from "./(section)/Menu";
import Reserve from "./(section)/Reserve";
import About from "./(section)/About";
import Perfect from "./(section)/Perfect";
import Specialities from "./(section)/Specialities";
import Contact from "./(section)/Contact";

export default function HomePage() {
  return (
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
  );
}
