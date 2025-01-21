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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9498.007177800067!2d-2.2693783128418215!3d53.4773634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb106947accd9%3A0x8584fcba9b1ebf9f!2sBruncho!5e0!3m2!1sen!2sin!4v1736968399747!5m2!1sen!2sin"
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
          <div className="flex flex-col items-center justify-center gap-3">
            <Link
              href="https://maps.app.goo.gl/3c776tRDmvogSitG8"
              target="_blank"
              className="text-center font-jost font-[300] text-white"
            >
              Bruncho, 270 Deansgate, Manchester M3 4JB,
              <br /> United Kingdom, info@bruncho.co.uk
            </Link>
            <Link
              href="mailto:info@bruncho.co.uk"
              className="text-center text-white md:text-start"
            ></Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div></div>
            <p className="font-jost font-semibold uppercase text-white">
              Opening hours
            </p>
            <p className="font-jost font-[300] text-white">
              Mon – Thu: 07.30 am – 05:00 pm
            </p>
            <p className="font-jost font-[300] text-white">
              Fri : 07:30 am – 07:00 pm
            </p>
            <p className="font-jost font-[300] text-white">
              Sat : 08:00 am – 07:00 pm
            </p>
            <p className="font-jost font-[300] text-white">
              Sun : 08:00 am – 06:00 pm
            </p>
          </div>

          <div className="flex items-center justify-start gap-4">
            <Link
              href="https://www.instagram.com/bruncho_uk/?hl=en"
              className="text-white"
            >
              <Icons.instagram />
            </Link>
            {/* <Link href="" className="text-white">
                            <Icons.tripAdvisor />
                        </Link> */}
            <Link
              href="https://www.google.com/search?hl=en-IN&gl=in&q=Bruncho,+270+Deansgate,+Manchester+M3+4JB,+United+Kingdom"
              className="text-white"
            >
              <Icons.google />
            </Link>
            {/* <Link href="" className="text-white">
                            <Icons.facebook />
                            </Link> */}
          </div>
        </div>
      </div>
      <div className="z-30 flex w-full flex-col items-center justify-center pl-0 md:flex-row md:justify-between md:pl-[350px]">
        <Link
          className="font-inter text-sm font-[400] tracking-[0.8px] text-[#CCAD64]"
          href="https://foodo.ai"
        >
          © 2025 bruncho. All Rights Reserved
        </Link>
        <Link
          className="font-inter text-sm font-[400] capitalize tracking-[0.8px] text-[#CCAD64]"
          href="https://foodo.ai"
        >
          Powered By Foodo
        </Link>
      </div>
    </section>
  );
};

export default Contact;
