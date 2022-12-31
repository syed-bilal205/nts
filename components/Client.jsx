import Image from 'next/image'
import React from 'react'
import clientsImg1 from '../public/assets/clients1.png'
import clientsImg2 from '../public/assets/clients2.png'
import clientsImg3 from '../public/assets/clients3.png'
import clientsImg4 from '../public/assets/clients4.png'
import clientsImg5 from '../public/assets/clients5.png'

const clientData = [
  {
    id:1,
    img:clientsImg1,
  },
  {
    id:2,
    img:clientsImg2,
  },
  {
    id:3,
    img:clientsImg3,
  },
  {
    id:4,
    img:clientsImg4,
  },
  {
    id:5,
    img:clientsImg5,
  },
]

const Client = () => {
  return (
    <>
      <div className='flex flex-wrap px-4 gap-6 items-center justify-center py-5 md:gap-10'>
        {
          clientData.map((item)=>(
            <Image alt="image" className='md:hover:origin-center md:hover:rotate-180 cursor-pointer ease-out duration-500' src={item.img}  key={item.id}/>
          ))
        }
      </div>
    </>
  )
}

export default Client
