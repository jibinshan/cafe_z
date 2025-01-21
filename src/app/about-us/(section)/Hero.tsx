import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#252C34]"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-jost text-5xl font-semibold leading-[66px] text-white lg:text-6xl">
                Bruncho - Where
                <br />
                Every Sip <br />
                and Bite
                <br />
                Tell a Story
              </h1>
              <p className="font-jost font-normal text-white">
                Welcome to Bruncho, your cozy haven for coffee lovers and cake
                enthusiasts. Every sip of our freshly brewed coffee and every
                bite of our handcrafted treats are thoughtfully made to delight.
                We bring together rich flavors and a warm, inviting atmosphere
                to create an experience you won’t forget. Whether you’re
                stopping by for a quick pick-me-up or a leisurely escape,
                Bruncho is here to make every moment special. At Bruncho, every
                sip and bite tells a story worth savoring.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/abouthero.jpeg"
              width={423}
              height={717}
              alt="hero"
              className="w-full object-cover md:h-[900px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
