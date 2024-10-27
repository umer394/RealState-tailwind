import React from 'react'
import Image from 'next/image';


function ContactPage() {
  return (
    <main className='bg-white text-black'>
        <section className='mx-0 md:mx-32 lg:mx-20  py-10 flex justify-center'>
       
            <div className=''>
                <div className='flex items-center  -space-x-12'>
                    <Image src={'/Ellipse.png'} alt={'ellipse'} width={70} height={20}/>
                    <h1 className='font-bold text-2xl  '>Contact Us</h1>
                </div>       
                <div className='flex'>
                <div className='flex flex-col ml-4 mt-6 space-y-6'>
                    <div className='md:flex md:gap-8'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="fName">First Name</label>
                        <input type="text" placeholder='First Name' className='bg-[#EBEBEB] max-w-[200px] py-2 px-4 rounded-lg'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="lName">Last Name</label>
                        <input type="text" placeholder='Last Name' className='bg-[#EBEBEB] max-w-[200px] py-2 px-4 rounded-lg'/>
                    </div>
                    </div>
                   
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="Email">Email</label>
                        <input type="text" placeholder='Ex JohnDoe214@gmail.com' className='bg-[#EBEBEB] max-w-[430px] py-2 px-4 rounded-lg'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="help">What can we help you with?</label>
                        <textarea  placeholder='Type your text here' rows={5} className='bg-[#EBEBEB] max-w-[430px] py-2 px-4 rounded-lg'></textarea>
                    
                    </div>
                    <button className='py-2 px-6 bg-[#0093FF] text-md font-semibold rounded-md text-white max-w-[430px]'>join mailing list</button>

                </div>
                <div className=' lg:flex flex-col justify-center items-center hidden  lg:-space-y-20 space-x-20 -mt-32'>
                    <Image src={'/text.png'} alt={'text'} width={650} height={3}></Image>
                    <Image src={'/contact.png'} alt={'text'} width={400} height={200}></Image>
                </div>
                </div>  
            </div>
        </section>
    </main>
  )
}

export default ContactPage;