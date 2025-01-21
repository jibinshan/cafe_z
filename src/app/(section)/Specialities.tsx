import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'


const Specialities = ({ }) => {
    return (
        <section id="about" className="relative flex w-full items-center justify-center md:justify-end bg-[#261d14]">
            <div className="relative flex flex-col md:flex-row gap-9 md:gap-0 h-fit bg-transparent w-full items-center justify-center px-3 md:p-0 py-12 lg:py-24 md:pr-14 overflow-hidden">
                <div className="z-30 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 h-full w-full md:pl-[370px] items-center md:items-center justify-center md:px-12">

                    <div className="relative w-full flex flex-col gap-10 justify-center items-center">
                        <Image
                            src='/images/home/about/about.png'
                            width={725}
                            height={795}
                            alt='about'
                        />
                    </div>

                    <div className="w-full h-full flex justify-center items-center bg-[#5e3214] p-4">
                        <div className='w-fit flex flex-col justify-center items-start gap-5'>
                            <p className="w-full non-italic font-[300] uppercase font-jost text-white text-3xl">
                                <span className="head-about text-white tracking-[4px]">about us</span>
                            </p>
                            <p className="font-jost text-white font-extralight w-full md:max-w-[400px]"
                            >Welcome to Bruncho Café, your all-day brunch destination located at 270 Deansgate, Manchester, M3 4JB. At Bruncho, we believe in turning every meal into a celebration of flavors and moments. Our menu is crafted with love, featuring everything from hearty breakfasts and indulgent French toasts to vibrant Mediterranean-inspired dishes and artisanal coffees.</p>
                            <Link href='https://g.co/kgs/769495E' target='_blank'>
                                <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 text-white rounded-none bg-black uppercase">Locate Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specialities