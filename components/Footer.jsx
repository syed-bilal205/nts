import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/logo.png'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className='bg-red-200 px-10 flex flex-col gap-6 md:items-center justify-center py-6 md:px-28 md:gap-10 md:flex-row '>
        <div className=' flex-1 flex flex-col gap-3'>
            <Image alt="image" src={logo}/>
            <p className='text-gray-500'>Exclusive NFT collection</p>
            <div className='flex items-center gap-2 text-gray-500'>
                <BsFacebook size={20}/>
                <AiOutlineInstagram size={20}/>
                <AiOutlineTwitter size={20}/>
                <FaTiktok size={20}/>
            </div>
        </div>
        <div className='flex flex-col md:items-center '>
            <h6 className='font-bold'>ABOUT</h6>
            <ul className='text-gray-500'>
                <li>About</li>
                <li>Terms</li>
                <li>Legal</li>
            </ul>
        </div>
        <div className='flex flex-col md:items-center '>
            <h6 className='font-bold'>NFT</h6>
            <ul className='text-gray-500 '>
                <li>Opensea</li>
                <li>Maker</li>
                <li>Learn</li>
            </ul>
        </div>
        <div className='flex flex-col md:items-center gap-4'>
            <h6 className='font-bold'>Collection</h6>
            <ul className='text-gray-500 '>
                <li>Press</li>
                <li>Support</li>
            </ul>
        </div>
        <div className='flex flex-col md:items-center gap-3'>
            <h6 className='font-bold'>Social</h6>
            <ul className='text-gray-500 '>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
