import React,{useState} from 'react'
import UploadProducts from './UploadProducts';
import { useEffect } from 'react';
import Adminproductimages from './adminproductimages';
// import Editproduct from './Editproduct';


function allproducts() {
  const [show, setshow] = useState(false);
  const [data,setData]=useState([])

const getproducts=async()=>{
  try {
    const getproducts=await fetch('http://localhost:5000/getproducts',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    const res=await getproducts.json()
    setData(res || [])
    console.log(res)
    
  } catch (error) {
    
  }
}

useEffect(()=>{
getproducts()
},[])
  return (
 <>
    <div className='py-5 bg-white mt-3 flex justify-between items-center mx-5  ]' >
      <h1 className='text-bold ml-5 '>All Products</h1>
      <button onClick={()=>setshow(true)} className='rounded-full text-red-500 border-2 p-3 hover:bg-red-400 hover:text-white transition-all'>Upload Products</button>
    </div>


{
  data?.map((item,index)=>(
    <Adminproductimages item={item} index={index}/>

    
  ))
}
{
  // show && <Editproduct  setshow={setshow}/>
  
}
{
  show && <UploadProducts  setshow={setshow}/>
}

{/* {
  show && <Editproduct  setshow={setshow}  />
} */}
 </>
  )
}

export default allproducts
