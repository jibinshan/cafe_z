import Image from 'next/image'
import { FC } from 'react'


const Perfect = ({ }) => {
    return (
        <section className='w-full h-[100vh] flex justify-end items-start px-4 md:px-12 py-12 md:py-24'
            style={{
                backgroundImage: "url('/images/home/perfect/bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center center'
            }}
        >
            <div className='md:pl-[350px] w-full h-full flex flex-col md:flex-row justify-center md;justify-between items-center md:items-start'>
                <p className='w-full md:w-1/3 font-jost uppercase tracking-[4px] text-5xl font-[300] md:mt-12'>
                    FIND YOUR<br /> PERFECT<br /> BLEND
                </p>
                <div className='w-full md:w-1/3 flex justify-center'>
                    <Image
                        src='/images/home/perfect/Vector.png'
                        width={191}
                        height={86}
                        alt='vector'
                    />
                </div>
                <div className='w-full md:w-1/3 flex flex-col justify-start items-end gap-24 md:mt-12'>
                    <div className='flex flex-col items-start justify-start gap-3'>
                        <p className='text-xl font-jost font-[300] uppercase tracking-[4px]'>Crafted Just for You</p>
                        <p className='text-sm font-jost font-[300] max-w-[300px]'>Delight in the warmth of Bruncho’s handcrafted coffees and treats, from bold espressos to velvety lattes, each sip and bite designed to brighten your day.</p>
                    </div>

                    <div className='flex flex-col items-start justify-start gap-3'>
                        <p className='text-xl font-jost font-[300] uppercase tracking-[4px]'>Relax & Indulge</p>
                        <p className='text-sm font-jost font-[300] max-w-[300px]'>Savor our signature drinks and freshly made pastries, thoughtfully crafted to bring comfort, joy, and a touch of London’s charm to every moment.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Perfect