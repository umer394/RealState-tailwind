import React from 'react'
import Image from "next/image";
function Hero() {
  return (
    <main className='flex justify-center items-center bg-white text-black py-32 space-x-32 overflow-clip'>
        <section className=' max-w-md'>
            <div className='flex items-center  space-x-3'>
                <div className='py-3  w-12 bg-[#EBEBEB] flex flex-col justify center items-center rounded-lg'>
                    <h2 className='text-md font-bold'>06</h2>
                    <h2 className='text-[12px] '>Month</h2>
                </div>
                <div className='py-3  w-12 bg-[#EBEBEB] flex flex-col justify center items-center rounded-lg'>
                    <h2 className='text-md font-bold'>25</h2>
                    <h2 className='text-[12px] '>Days</h2>
                </div>
                <div className='py-3  w-12 bg-[#EBEBEB] flex flex-col justify center items-center rounded-lg'>
                    <h2 className='text-md font-bold'>12</h2>
                    <h2 className='text-[12px] '>Hours</h2>
                </div>
                <h1 className='text-[16px] text-[#0093FF] font-semibold'>Remaining</h1>
            </div>
            <h1 className='text-[30px] font-bold text-[#303A42] mt-4'>Equity Raising for Luxury</h1>
            <h1 className='text-[30px] font-bold text-[#303A42]'>House in san Diego</h1>
            <p className='my-4 text-[#303A42] text-md max-w-sm'>
            Be an Investor and live your dream life , follow the links bellow to read more about the project
            </p>
            <div className='space-x-3'>
                <button className='py-2 px-2 md:px-6 bg-[#0093FF] text-[10px] rounded-md text-white'>Become Investor now</button>
                <button className='py-2 px-6 text-[#0093FF] text-[10px] rounded-md bg-white border-[#0093FF] border font-bold'>Learn More About the project</button>
            </div>
        </section>
        <section className='hidden md:block'>
            <Image src={'/home.png'} alt={'home'} width={280} height={200} className='rounded-lg'/>
        </section>
    </main>
  )
}

export default Hero