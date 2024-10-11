import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";



function FullImage({
    fullimage,
    setopenscreen
    
}) {
  return (
    <div onClick={()=>setopenscreen(false)} className='fixed z-40 justify-center items-center top-0 bottom-0 left-0  right-0 bg-black bg-opacity-50 flex'>
<img src={fullimage} width={500} height={500} alt="" className='rounded-md z-50 fixed'/>


    </div>
  )
}

export default FullImage
