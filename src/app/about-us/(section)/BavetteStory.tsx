import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#C4B4A8] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11">
        <h2 className="text-center font-jost text-8xl text-gray-300 md:left-[15%] md:text-8xl">
          The Cafe Z Bar
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
              From Vision
              <br />
              to Flavor
            </h1>
            <p className="max-w-[450px] text-center font-jost font-light leading-[160%] text-foreground md:text-start">
              What started as a dream to bring authentic Turkish flavors to
              London has grown into a beloved café at the heart of Stoke
              Newington. Since 2002, Café Z Bar has been a home for those who
              appreciate rich Middle Eastern spices, hearty breakfasts, and
              freshly brewed coffee.
              <br />
              <br />
              From our famous Menemen and Yumurta to our flavorful meze platters
              and handcrafted wraps, every dish is a reflection of tradition,
              passion, and community. Our journey from a small café to a vibrant
              neighborhood favorite has been built on quality ingredients, warm
              hospitality, and a deep love for sharing great food. While we’ve
              grown over the years, our mission remains the same—to offer an
              inviting space where every meal is a moment to savor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
