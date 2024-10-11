import React, { useEffect,useState } from 'react'
import { toast } from 'react-toastify'
import Editproduct from './Editproduct'


function Adminproductimages({
    item
    ,index
}) 


{

    const [editproduct,seteditproduct]=useState(false)

    const deleateproducts=async()=>{
        try {
            const deleateproducts=await fetch(`http://localhost:5000/deleteproduct/${item._id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include'
            })
            const res=await deleateproducts.json()
            console.log(res)
            toast.success('Product Deleted Successfully')
            window.location.reload()

        } catch (error) {

            toast.error('Something went wrong')
        }
    }

    
   
  return (
    <div className='flex justify-between items-center bg-slate-200 mx-4 my-4 p-3'>
    <div className='flex gap-10'>
    <img src={item.productImage[0]} alt="" className='w-20 h-20'/>
    <div className='flex flex-col gap-1'>
    <h1 className='text-ellipsis line-clamp-1'>{item.productName}</h1>

    <h1 className='text-red-500'>{item.price}</h1>
    <h1 className='text-green-500'>{item.category}</h1>
    </div>
    </div>
<div className='flex gap-5'>
<button onClick={()=>deleateproducts(item._id)}  className='bg-red-500 text-white p-3 rounded-full'>Delete</button>
<button onClick={(item)=>{
    seteditproduct(true),
    console.log(item)
}} className='bg-green-500 text-white p-3 rounded-full'>Edit Product</button>
</div>
{
    editproduct && <Editproduct seteditproduct={seteditproduct} item={item}/>
  
}

  </div>
  )
}

export default Adminproductimages
