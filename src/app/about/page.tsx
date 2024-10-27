import React from 'react'
import Image from 'next/image';
import AboutPage from '@/components/About';
function About() {
    return (
        <div>
            <main className='flex flex-col justify-center items-center' style={{
            backgroundImage:"url('/bgabout.png')",
            backgroundSize: "cover",
            backgroundPosition:"center",
            height:"90vh",
            width:"100%",
            backgroundRepeat:"no-repeat",
        }}>
            <div className='max-w-3xl flex flex-col justify-center items-center'>
                <h1 className='text-xl md:text-2xl lg:text-4xl text-black font-bold'>Real Estate Investment</h1>
                <h1 className='text-xl md:text-2xl lg:text-4xl text-black font-bold'>Opportunities Designed For You</h1>
                <p className='my-4'>A National Mortgage and Sales Brokerage Since 1995</p>
                <div className='space-x-4'>
                <button className='py-2 px-2 md:px-6 bg-[#0093FF] text-[10px] rounded-md text-white'>Current Opportunities</button>
                <button className='py-2 px-4 md:px-6 text-black text-[10px] rounded-md  border-black border font-bold'>Learn More About Investment</button>
                </div>
            </div>    
            
        </main>  
        <AboutPage/>
        
        </div>
               
    )
}

export default About;

