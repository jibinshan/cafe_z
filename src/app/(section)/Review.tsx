"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".review-one", {
        scrollTrigger: {
          trigger: ".review-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        opacity: 1,
        scale: 1,
        ease: Power2.easeOut,
        duration: 1.3,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".review-one", {
        scrollTrigger: {
          trigger: ".review-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        ease: Power2.easeOut,
        duration: 1.3,
      });
    });

    gsap.to(".review-items", {
      scrollTrigger: {
        trigger: ".review-items",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      ease: Power2.easeOut,
      duration: 1.3,
    });

    const splitType = document.querySelectorAll(".head-review");
    splitType.forEach((char, i) => {
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
          stagger: 0.4,
        });
      }
    });
  }, []);
  const text = "Hear Our Guests";
  return (
    <section className="relative flex h-full w-full justify-center bg-[#252C34] md:justify-end">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="z-40 flex h-full w-full flex-col items-start justify-center gap-4 py-12 pb-20 md:pb-24 md:pl-[370px] md:pr-14">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <p className="non-italic flex items-center justify-center gap-3 text-center font-jost text-2xl font-light uppercase text-white md:text-5xl">
            {text.split("").map((char, index) => (
              <span key={index} className="key head-review font-jost">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        </div>
        <div
          className="review-items flex w-full items-center justify-center p-4"
          style={{
            transform: "scale(1.3)",
          }}
        >
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex h-fit w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-none border-[2px] border-[#C4B4A8] bg-[#C4B4A8] px-6 py-8 md:basis-1/3"
                  >
                    <div className="flex w-full">
                      {/* {Array.from({ length: review.rating }).map((_, index) => (
                                                <Icons.star key={index} className="text-[#fec679]" />
                                            ))} */}
                      <Icons.star key={index} className="text-[#252c34]" />
                      <Icons.star key={index} className="text-[#252c34]" />
                      <Icons.star key={index} className="text-[#252c34]" />
                      <Icons.star key={index} className="text-[#252c34]" />
                      <Icons.star key={index} className="text-[#252c34]" />
                    </div>
                    <div className="">
                      <p className="line-clamp-4 font-jost text-[#000]">
                        {review.text}
                      </p>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="font-jost text-[#000]">
                          {review.author_name}
                        </p>
                        <span className="font-jost text-[#000]">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-white text-white transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-white text-white transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
