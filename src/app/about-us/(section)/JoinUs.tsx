import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/DSC03437.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60"></div>
      <div className="z-40 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="jost max-w-[500px] text-center text-5xl leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Experience
          </h1>
          <p className="max-w-[450px] text-center font-jost font-light leading-[160%] text-white">
            Ready to indulge in the rich flavors of Turkish cuisine? Whether
            you're stopping by for a comforting breakfast, a relaxed coffee
            break, or a hearty meal with friends, Café Z Bar welcomes you to
            savor the dishes we've perfected over the years. From our signature
            Menemen to our delightful meze platters and freshly brewed Turkish
            coffee, every bite is crafted with passion. Come and experience the
            warmth, flavor, and hospitality that make Café Z Bar
            a local favorite.
          </p>
          <Button className="group w-fit items-center gap-[1.19rem] rounded-none bg-black px-6 py-6 font-semibold uppercase text-white">
            <Link
              href="https://g.co/kgs/HVi1CHB"
              className="flex items-center justify-center gap-2 rounded-none font-jost"
            >
              Locate Us{" "}
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
