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
                Cafe Z Bar - Where
                <br />
                Every Sip <br />
                and Bite
                <br />
                Tell a Story
              </h1>
              <p className="font-jost font-normal text-white">
                Ready to indulge in the rich flavors of Turkish cuisine? Whether
                you` re stopping by for a comforting breakfast, a relaxed coffee
                break, or a hearty meal with friends, Cafe Z Bar welcomes you to
                savor the dishes we` ve perfected over the years. From our
                signature Menemen to our delightful meze platters and freshly
                brewed Turkish coffee, every bite is crafted with passion. Come
                and experience the warmth, flavor, and hospitality that make
                Café Z Bar a local favorite.
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
