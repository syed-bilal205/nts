import React, { useState } from 'react'
import Link from 'next/link'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Top = () => {
  
  const [scroll,setScroll] = useState(false)

  window.addEventListener('scroll' , ()=>{
    window.pageYOffset > 100 ? setScroll(true) : setScroll(false)
  })

    return (
    <>
      <div className={scroll ? 'flex items-center justify-center rounded-full bg-red-500 hover:bg-transparent hover:border hover:text-black hover:border-black fixed z-50 bottom-4 right-4 h-12 w-12 cursor-pointer text-white' : '' }>
        <Link href="/" ><AiOutlineArrowUp  size={20}/></Link>
      </div>
    </>
  )
}

export default Top
