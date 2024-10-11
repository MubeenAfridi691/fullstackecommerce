import React from 'react'
import img1 from '../assest/banner/img1.webp'
import img2 from '../assest/banner/img2.webp'
import img3 from '../assest/banner/img3.jpg'
import img4 from '../assest/banner/img4.jpg'
import img5 from '../assest/banner/img5.webp'
import { useState,useEffect } from 'react'

import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
// modle images
import img1mobile from '../assest/banner/img1_mobile.jpg'
import img2mobile from '../assest/banner/img2_mobile.webp'
import img3mobile from '../assest/banner/img3_mobile.jpg'
import img4mobile from '../assest/banner/img4_mobile.jpg'
import img5mobile from '../assest/banner/img5_mobile.png'

function sliding() {
  const [currentImage,setCurrentImage] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
        if(desktopImages.length - 1 > currentImage){
            nextImage()
        }else{
            setCurrentImage(0)
        }
    },5000)

    return ()=> clearInterval(interval)
},[currentImage])

const desktopImages=[
  img1,
  img2,
  img3,
  img4,
  img5
]
const mobileImages=[
  img1mobile,
  img2mobile,
  img3mobile,
  img4mobile,
  img5mobile
]

const nextImage = () =>{
  if(desktopImages.length - 1 > currentImage){
      setCurrentImage(preve => preve + 1)
  }
}

const preveImage = () =>{
  if(currentImage != 0){
      setCurrentImage(preve => preve - 1)
  }
}



  return (
    <div className='max-w-[1240px]   mx-auto flex flex-col  rounded  '>
      <div className='h-72 w-full object-cover flex flex-col gap-5 '>
      <div className='hidden md:flex h-full w-full overflow-hidden'> 
      {
        desktopImages.map((item,index)=>{
          return(
           <div className='min-w-full min-h-full gap-5 ' key={index} style={{transform : `translateX(-${currentImage * 100}%)`}}>
            <div className='absolute z-10 h-full w-full md:flex items-center  '>
                    <div className=' flex justify-between w-full gap-5 text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                    </div>
                </div>
             <img src={item}  className='h-full w-full ' alt="" />
            </div>


          )
        })


      }
      {/* moble type */}
      <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                        mobileImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover'/>
                            </div>
                            )
                        })
                }
              </div>


      </div>
      </div>
      

     
      
    </div>
  )
}

export default sliding
