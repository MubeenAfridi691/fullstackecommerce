import React from 'react'
import ROLE from './UserRoll'
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from 'react'
import simmaryapi from '../Pages/url/Api'


function ChangeuserRoll({setShow,show,
    name,
    email,
    Roll
}) {
    const [roll,setRoll]=useState(Roll)
       const handlechangeroll=(e)=>{
        setRoll(e.target.value)
        console.log(roll)
    }

const updateuserroll=async()=>{
    try {
        const res=await fetch(simmaryapi.changeuserroll.url,{
            method:simmaryapi.changeuserroll.method,
            headers:{
                'Content-Type':'application/json'

            },
            credentials:'include',
            body:JSON.stringify({
                name,
                email,
                roll
            })
        })
        const data=await res.json()
        console.log(data)
        if(data.status===200){
            alert('User Roll Updated')
            setShow(false)
        }
        else{
            alert('User Roll Not Updated')
        }
        
    } catch (error) {
        console.log(error)
        
    }
}



  return (
    <div className='absolute w-full h-screen flex justify-center items-center z-  right-0	 inset-0  ' >
      <div className='w-[500px] h-[300px] bg-slate-200 p-5 relative z-50 rounded-lg'>
      <FaRegWindowClose onClick={()=>setShow(false)} className='absolute right-5 top-5 text-2xl cursor-pointer' />
        <h1 className='text-center text-2xl font-bold'>Change User Roll</h1>
       <div className='py-5'>
       <h3>Name:{name}</h3>
       <h3>Email:{email}</h3>
       <div className='py-5 flex justify-center items-center'>
        <h3 className='mr-5'>Change Roll</h3>
       {
        <select className='border-2 border-black' value={roll} onChange={(e)=>handlechangeroll(e)} >
            <option value={ROLE.GENERAL}>Admin</option>
            <option value={ROLE.ADMIN}>General</option>
        </select>
       }
       </div>
 <button  onClick={()=>updateuserroll()} className='p-3 rounded-full bg-red-600'>Submit</button>
       </div>
      </div>
    </div>
  )
}

export default ChangeuserRoll
