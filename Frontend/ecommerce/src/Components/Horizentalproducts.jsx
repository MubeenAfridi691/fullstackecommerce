import React,{useEffect,useRef, useState} from 'react'
import simmaryapi from '../Pages/url/Api'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import addtocart from './Adtocart'



function Horizentalproducts({
    heading,
    category
}) {
    const [loading,setLoading] = useState(true)
    const loadingList = new Array(13).fill(null)

    const scrollElement = useRef()
  
    const [productdata,setproductdata]=useState([])
const fetchdata=async()=>{
    setLoading(true)
  try {
    const response=await fetch(simmaryapi.getcategorywiseproduct.url,{
        method:simmaryapi.getcategorywiseproduct.method,
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            category:category
        })
    })
    const data=await response.json()
    setLoading(false)
    setproductdata(data.data)
    console.log(data.data)
    
  } catch (error) {
    console.log(error)
    
  }
}

useEffect(()=>{
    fetchdata()
    // console.log(productdata)
},[])

const scrollRight = () =>{
    scrollElement.current.scrollLeft += 300
}
const scrollLeft = () =>{
    scrollElement.current.scrollLeft -= 300
}

const handleAddToCart = async (e,id) =>{
    addtocart(e,id)
   
}


  return (
    <div className='container mx-auto px-4 my-6 relative'>

    <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

        
   <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>

    <button  className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft/></button>
    <button  className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight/></button> 

   {   loading ? (
        loadingList.map((product,index)=>{
            return(
                <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                    <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'>

                    </div>
                    <div className='p-4 grid w-full gap-2'>
                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                        <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                        <div className='flex gap-3 w-full'>
                            <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                            <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                        </div>
                        <button className='text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                    </div>
                </div>
            )
        })
   ) : (
    productdata?.map((product,index)=>{
        return(
            <Link to={"product/"+product?._id} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]'>
                    <img src={product.productImage[0]} className='object-scale-down h-full w-full hover:scale-110 transition-all'/>
                </div>
                <div className='p-4 grid'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                    <p className='capitalize text-slate-500'>{product?.category}</p>
                    <div className='flex gap-3'>
                        <p className='text-red-600 font-medium'>{ product?.sellingPrice }</p>
                        <p className='text-slate-500 line-through'>{ product?.price }</p>
                    </div>
                    <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full'  onClick={(e)=>handleAddToCart(e,product?._id)} >Add to Cart</button>
                </div>
            </Link>
        )
    })
   )
       
    }
   </div>
    

</div>
  )
}

export default Horizentalproducts
