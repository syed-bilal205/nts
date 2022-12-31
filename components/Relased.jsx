import React from 'react'
import Image from 'next/image'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Relased = ({img}) => {
  return (
    <>
      <div className='px-4 py-12  md:px-16'>
        <div className=' bg-green-100 md:pt-0 md:h-[250px] h-[100%]  flex flex-col gap-12 items-center justify-center md:justify-around rounded-lg md:flex-row'>
            <div className='flex flex-col items-start justify-start px-6 gap-4 pt-6 md:pt-0'>
                <h2 className='text-3xl font-bold'>Initial Release 4/11</h2>
                <p>We have released four limited edition NFTs early which can be bid on
            via OpenSea</p>
            <p>We have released four limited edition NFTs early which can be bid on
            via OpenSea</p>
            <p>50% of proceeds go to charity.</p>
            <div className='flex items-center'>
                <button>Check them out</button><AiOutlineArrowRight size={20}/>
            </div>
            </div>
            <div className='md:pt-6'>
                <Image alt="image" src={img} className="w-32"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Relased
