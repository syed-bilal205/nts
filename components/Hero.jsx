import React from 'react'
import Image from 'next/image'

const Hero = ({img}) => {
  return (
    <>
    <div className=' flex  flex-col items-center gap-6 justify-center py-12 h-100 w-full px-6 md:px-28 md:flex-row md:justify-evenly'>
        <div className='w-100 flex flex-col  items-start gap-5  justify-center tracking-wide'>
            <h6 className='text-[#ff3998] text-2xl  font-medium'>LAUNCHING SOON</h6>
            <h2 className='text-black font-bold text-3xl md:text-6xl'>An NFT Like No Other</h2>
            <p className=' md:w-[60%] text-gray-400 md:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi illo ut voluptatum voluptate fuga illum explicabo praesentium eius sapiente quia.</p>
            <button className='border border-[#ff3998] rounded-full py-1 px-5 font-medium'>Sign Up</button>
        </div>
        <div className='w-100 '>
            <Image alt="image" src={img} width={'100%'} height={'auto'} />
        </div>
    </div>
    </>
  )
}

export default Hero
