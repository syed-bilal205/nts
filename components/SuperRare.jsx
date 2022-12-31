import Image from 'next/image'
import React from 'react'
import rareImg1 from '../public/assets/super1.png'
import rareImg2 from '../public/assets/super2.png'
import rareImg3 from '../public/assets/super3.png'
import rareImg4 from '../public/assets/super4.png'
import rareImg5 from '../public/assets/supereth.png'
import Heading from './Heading'

const rareAuction = [
    {
        id:1,
        img:rareImg1,
        gloop:'GLOOP SERIES',
        bid:'TOP BID',
        heading:'Purple Man',
        logo:rareImg5,
        price:'2.99 ETH',
        code:'#12983',
        days:'1 day left'
    },
    {
        id:2,
        img:rareImg2,
        gloop:'GLOOP SERIES',
        bid:'TOP BID',
        heading:'Beige',
        logo:rareImg5,
        price:'2.99 ETH',
        code:'#12983',
        days:'1 day left'
    },
    {
        id:3,
        img:rareImg3,
        gloop:'GLOOP SERIES',
        bid:'TOP BID',
        heading:'Red Man',
        logo:rareImg5,
        price:'2.99 ETH',
        code:'#12983',
        days:'1 day left'
    },
    {
        id:4,
        img:rareImg4,
        gloop:'GLOOP SERIES',
        bid:'TOP BID',
        heading:'Green',
        logo:rareImg5,
        price:'2.99 ETH',
        code:'#12983',
        days:'1 day left'
    },
]

const SuperRare = () => {
  return (
    <>

    <Heading/>



      <div className=' gap-6 md:flex-row flex flex-col px-10 justify-center rounded-md py-6 items-center '>
        
        
        
        {
            rareAuction.map((item)=>(
                <>

                <div className='bg-gray-200 rounded-lg '>
            <Image alt="image" src={item.img}/>
        <div className='flex justify-between px-3 pt-1'>
            <h6 className='text-[#FFA500] font-semibold'>{item.gloop}</h6>
            <h6 className='text-gray-500'>{item.bid}</h6>
        </div>
        <div className='flex justify-between px-3'>
                <h6 className='font-bold'>{item.heading}</h6>
                <div className='flex items-center gap-1'>
                <Image alt="image" src={item.logo}/>
                <h6 className='font-bold'>{item.price}</h6>
            </div>
            </div>
            <div className=' py-1 flex justify-between px-3'>
            <p className='text-gray-500'>{item.code}</p>
            <p className='text-gray-500'>{item.days}</p>
            </div>
        </div>












                </>






            ))
        }



        



      </div>
    </>
  )
}

export default SuperRare
