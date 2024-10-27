import React from 'react'
import Image from 'next/image'
function AboutPage() {
  return (
    <main>
        <div className='md:flex justify-evenly  items-center max-w-screen-2xl xl:mx-auto py-10 '>
        <div className='max-w-sm lg:max-w-lg '>
            <h2 className='text-[#0093FF] font-semibold'>- About</h2>
            <h2 className='font-bold '>
            Atlas Limited Partnerships
            </h2>
            <p className='mt-1'>When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can access
                opportunities usually reserved only for the largest institutional investors. You can access a team driven only by
                excellence and results. You can access real estate investment opportunities designed with you in mind.</p>
        </div>
        <div className='flex items-center -space-x-[500px] md:-space-x-[400px] relative'>
        <Image src={'/abouthand.png'} alt={'hand'} width={450} height={200}/>
        <Image src={'/hand2.png'} alt={'hand2'} width={250} height={100} />
        
        </div>
            
        </div>

        <div className='flex flex-col gap-4 overflow-clip'>
            <h1 className='font-bold mx-auto max-w-scren-2xl text-xl'>Featured In</h1>
            <div className='grid grid-cols-3 md:grid-cols-6 justify-between ml-10 md:ml-20 my-10'>
                <Image src={'/airnb.jpg'} alt={'air'} width={90} height={30}/>
                <Image src={'/hub.jpg'} alt={'hub'} width={90} height={30}/>
                <Image src={'/google.png'} alt={'google'} width={90} height={30} />
                <Image src={'/microsoft.png'} alt={'microsoft'} width={100} height={30}/>
                <Image src={'/walmart.png'} alt={'walmart'} width={100} height={30}/>
                <Image src={'/fedx.png'} alt={'fedex'} width={70} height={10}/>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center space-y-2' style={{
            backgroundImage:"url('/bluepic.png')",
           backgroundRepeat:"no-repeat",
           backgroundPosition:"center",
           height:"40vh"
            
            
        }}>
            <h1 className='text-3xl text-white font-bold'>Ready To Invest?</h1>
            <button className='py-2 px-6 text-md text-white text-[10px] rounded-md  border-white border font-bold'>View Current Opportunities</button>
        </div>
    </main>
    
  )
}

export default AboutPage