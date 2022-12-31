import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/logo.png'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }

  return (
    <>
        <header className='flex shadow-lg sticky top-0 bottom-0  items-center justify-between px-6 w-full bg-red-200 h-20 z-50 py-5 md:px-28'>
            <div >
                <Image  src={Logo} alt="image"/>
            </div>
            <ul className='hidden md:flex gap-6 text-gray-600 font-medium text-xl items-center'>
                <li><Link href='/'>Features</Link></li>
                <li><Link href='/'>About</Link></li>
                <li><Link href='/'>Launch</Link></li>
                <li><Link href='/'>Sign Up</Link></li>
            </ul>
            <div onClick={handleNav} className="md:hidden z-50 cursor-pointer block">
                {
                    nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>
                }
            </div>
            <div className={nav ? 'fixed top-0 bg-red-300 shadow-2xl text-white right-0 w-[50%] shadow-lg h-screen ease-in duration-300 text-3xl flex flex-col items-center justify-center' : 'fixed right-[-100%]'}>
                <ul className='flex flex-col items-center justify-center gap-8 font-semibold cursor-pointer'>
                <li><Link href='/'>Features</Link></li>
                <li><Link href='/'>About</Link></li>
                <li><Link href='/'>Launch</Link></li>
                <li><Link href='/'>Sign Up</Link></li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Navbar
