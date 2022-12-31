import Image from 'next/image'
import React from 'react'
import bannerImg from '../public/assets/icon.png'
import bannerImg1 from '../public/assets/super1.png'
import bannerImg2 from '../public/assets/release2.png'

const Banner = () => {
  return (
    <>
      <div className='px-4 py-12 md:px-16'>
        <div className='bg-pink-100 pt-20 md:pt-0 md:h-[250px] h-[460px]  flex flex-col gap-12 items-center justify-center md:justify-around rounded-lg md:flex-row'>
            <div className='flex flex-col items-start justify-start px-6 gap-4 pt-6 md:pt-0'>
                <Image src={bannerImg} alt="image"/>
                <h5 className='text-3xl font-bold'>Free NFT for early birds</h5>
                <p>sign up today and you'll get a free NFT when we launch.</p>
            </div>
            <div className='pb-[9rem]'>
            <div className='flex items-start'>
                <Image className='origin-center -rotate-12  z-10'  src={bannerImg1} width={200} alt="image"/>
                <Image className='origin-bottom rotate-6 md:overflow-hidden pr-3' src={bannerImg2} width={200} alt="image"/>
            </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
