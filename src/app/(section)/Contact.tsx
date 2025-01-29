"use client";

import { Icons } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

const Contact = ({}) => {
  return (
    <section
      id="ora"
      className="relative flex h-fit w-full flex-col items-center justify-end gap-12 py-12 pb-6 md:px-12 md:py-24 md:pb-6"
      style={{
        backgroundImage: "url('/images/home/connect/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[#252C34]/90"></div>
      <div className="z-20 flex w-full flex-col-reverse items-center justify-center gap-4 md:flex-row md:pl-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5324727439543!2d-0.07673782352684456!3d51.558471471824944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c61b7f72741%3A0xeb21e3d97563e1e1!2sCafe%20Z%20Bar.!5e0!3m2!1sen!2sin!4v1738137199455!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[450px] w-full md:w-1/2"
        ></iframe>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2">
          <p className="w-full text-center font-jost text-2xl font-[300] uppercase tracking-[4px] text-white md:text-4xl">
            connect with us
          </p>
          <Link href="/">
            <Image
              src="/images/home/logo.png"
              width={105}
              height={73}
              alt="logo"
            />
          </Link>
          <div className="flex flex-col items-center justify-center gap-1">
            <Link
              href="https://maps.app.goo.gl/3c776tRDmvogSitG8"
              target="_blank"
              className="text-center font-jost font-[300] text-white"
            >
              58 Stoke Newington High St, London N16 7PB, United Kingdom{" "}
            </Link>
            <Link
              href="tel: +44 20 7275 7523"
              className="text-center text-white md:text-start"
            >
              +44 20 7275 7523{" "}
            </Link>

            <Link
              href="mailto:cafezbar.stoky@gmail.com"
              className="text-center text-white md:text-start"
            >
              cafezbar.stoky@gmail.com
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div></div>
            <p className="font-jost font-semibold uppercase text-white">
              Opening hours:
            </p>
            <p className="font-jost font-[300] text-white">
              Monday to Friday : 6:30 AM to 6:30 PM{" "}
            </p>
            <p className="font-jost font-[300] text-white">
              Sunday & Saturday : 7:00 AM to 6:30 PM{" "}
            </p>
          </div>

          <div className="flex items-center justify-start gap-4">
            <Link
              href="https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d1014681-Reviews-Cafe_Z_Bar-London_England.html"
              className="text-white"
            >
              <Icons.instagram />
            </Link>
            {/* <Link href="" className="text-white">
                            <Icons.tripAdvisor />
                        </Link> */}
            <Link href="https://g.co/kgs/dVbkPeZ" className="text-white">
              <Icons.google />
            </Link>
            {/* <Link href="" className="text-white">
                            <Icons.facebook />
                            </Link> */}
            <Link href="https://g.co/kgs/dVbkPeZ" className="text-white">
              <Icons.tripAdvisor />
            </Link>
            <Link
              href="https://www.facebook.com/cafezbarstokey/"
              className="text-white"
            >
              <Icons.facebook />
            </Link>
          </div>
        </div>
      </div>
      <div className="z-30 flex w-full flex-col items-center justify-center pl-0 md:flex-row md:justify-between md:pl-[350px]">
        <Link
          className="font-inter text-sm font-[400] tracking-[0.8px] text-[#CCAD64]"
          href="https://foodo.ai"
        >
          © 2025 cafe z bar. All Rights Reserved
        </Link>
        <Link
          className="font-inter text-sm font-[400] capitalize tracking-[0.8px] text-[#CCAD64]"
          href="https://foodo.ai"
        >
          Foodo
        </Link>
      </div>
    </section>
  );
};

export default Contact;
