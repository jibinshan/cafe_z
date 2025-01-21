import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#C4B4A8] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11">
        <h2 className="text-center font-jost text-8xl text-gray-300 md:left-[15%] md:text-8xl">
          The Bruncho
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/aboutstory.jpg"
              width={1500}
              height={2250}
              alt="private dining"
              className="w-full rounded-lg object-cover md:h-[600px] md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[600px] text-center font-jost text-6xl text-foreground sm:text-7xl md:text-start">
              From Dream
              <br />
              to Cozy Cafe
            </h1>
            <p className="max-w-[450px] text-center font-jost font-light leading-[160%] text-foreground md:text-start">
              Bruncho began as a heartfelt dream to create a space where coffee,
              cakes, and community come together. Inspired by the warmth of
              meaningful connections and a passion for rich flavors, we crafted
              a cozy café where every visit feels like coming home.
              <br />
              <br />
              From the aroma of freshly brewed coffee to the sight of our
              lovingly handcrafted cakes, Bruncho is designed to awaken your
              senses and fill your moments with joy. Over the years, we’ve grown
              into a haven for cherished conversations and unforgettable
              memories. Whether it’s a quiet morning with your favorite brew or
              a lively gathering over sweet indulgences, Bruncho is here to make
              every visit truly special. With every sip and bite, we aim to
              brighten your day and warm your heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
