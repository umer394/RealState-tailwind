import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'


const links = [
  {
    id:1,
    href:"/",
    text:"Home",
    className:'text-[#0093FF] font-bold'
  },
  {
    id:2,
    href:"/about",
    text:"About",
    className:'text-[#0093FF] font-bold'
  },
  {
    id:3,
    href:"/contact",
    text:"Contact Us",
    className:'text-[#0093FF] font-bold',
  }
]

function Header() {
  return (
    <header className='flex justify-between px-4 py-4 items-center  text-black max-w-screen-2xl mx-auto'>
        <div>
        <Image src={'/logo-black.png'} alt={'logo'} width={100} height={30} />
        </div>
        
          <nav className="hidden md:block">
            <li className='space-x-6 list-none' >
              {links.map((item)=>(
                <Link key={item.id} href={item.href} className={`${item.className}`}>{item.text}</Link>
              ))}
              
            </li>
          </nav>
          
          <Sheet >
            <SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle >
                <li className=' list-none flex flex-col justify-center items-center space-y-6' >
                {links.map((item)=>(
                  <Link key={item.id} href={item.href} className={`${item.className}`}>{item.text}</Link>
                ))}
              </li>
                </SheetTitle>
               
              </SheetHeader>
            </SheetContent>
          </Sheet>

    </header>
  )
}

export default Header