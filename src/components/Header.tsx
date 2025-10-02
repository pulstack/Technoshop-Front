import React from 'react'
import Logo from '../app/assets/images/LogoVector.png'
import Image from 'next/image'
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className=' flex items-center gap-4  xl:gap-[56px] justify-between mb-10 mx-auto max-w-[1440px] px-10 lg:px-32 py-5'>
      <Image src={Logo} alt='logo' width={65} height={22} className='min-w-[65px]' />

      <div className='flex  gap-3  bg-[#F5F5F5] rounded-[8px] px-3 py-2 max-w-[372px] w-full max-h-[58px] h-full '>
        <Search size={20} className='text-gray-400'  />
        <input type="text" placeholder='Search' className='placeholder:text-gray-400 active:outline-none  focus:outline-none' />
      </div>

        <div className='flex items-center justify-between gap-4 lg:gap-6'>
            <Link href="/" className='text-black font-medium lg:text-lg'>Home</Link>
            <Link href="/about" className='text-black font-medium lg:text-lg'>About</Link>
            <Link href="/contact" className='text-black  whitespace-nowrap font-medium lg:text-lg'>Contact Us</Link>
            <Link href="/blog" className='text-black font-medium lg:text-lg'>Blog</Link>
        </div>
        <div className='hidden md:flex items-center justify-between gap-3 lg:gap-6'> 
            <Heart size={23}  className='text-black' />
            <ShoppingCart size={23} className='text-black' />
            <User size={23} className='text-black' />
        </div>
    </div>
  )
}

export default Header