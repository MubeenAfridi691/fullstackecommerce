import React from 'react'
import logo from '../assest/signin.gif'
import { Link } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { useState } from 'react';
import { IoEyeOffSharp } from "react-icons/io5";
import simmaryapi from './url/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [cpassword, setCpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);
    const [filevalue, setFieldValue] = useState('');
    const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
    name:"",
    cpassword:""
  });
  const handlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   if(data.password!==data.cpassword){
    toast.error("Password and Confirm Password do not match");

    return
   }
  try {
      const response = await fetch('http://localhost:5000/signup', {
        method: simmaryapi.signup.method,
        headers: {
          'Content-Type': 'application/json',
        },
       
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Signup successful");
        const responseData = await response.json();
        console.log('Signup successful:', responseData);
       console.log(responseData);
        navigate('/login')
      } else {
        console.error('Signup failed');
        toast.error("Signup failed");
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error("Signup failed");
    }
    

      
    

   
  };
  
  
  const handleUploadProfile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = () => {
        if (reader.readyState === FileReader.DONE) {
          const base64String = reader.result;
          setFieldValue(base64String); // Ensure you are setting the value correctly
          console.log(filevalue); // Log the Base64 string
        }
      };
  
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
  
      reader.readAsDataURL(file);
    } else {
      console.log('No file selected');
    }
  };
  
  
  return (
    <div className='container mx-auto'>
    <div className='w-full max-w-md mx-auto bg-white m-5 p-5 rounded-md'>
      <div className="flex justify-center bg-white relative mx-auto max-w-sm w-full ">
        <img className='rounded-full mb-7 h-20 p-1 w-20 object-cover	' src={ filevalue || logo} alt="logo" />
        <label className='absolute bottom-0  w-70 p-1 rounded-full mx-auto bg-white' htmlFor="upload">
       
        <form action="">
          <p className='bg-white text-black font-bold cursor-pointer'>Upload Porfile</p>
            
        </form>
        <input type="file" id='upload'  onChange={handleUploadProfile} className='hidden' />
        </label>
        
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
      <label  htmlFor="email">Name:</label>
      <input required type="text" value={data.name} name="name" id="name" onChange={handlechange} placeholder='Enter Your Name' className='w-full p-2 border-2 border-gray-300 rounded-md outline-none  bg-gray-100' />
        <label  htmlFor="email">Email:</label>
        <input required type="email" value={data.email} name="email" id="email" onChange={handlechange} placeholder='Enter Your Email' className='w-full p-2 border-2 border-gray-300 rounded-md outline-none  bg-gray-100' />
        <label htmlFor="password">Password:</label>

        <div className='w-full flex  justify-center items-center border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 bg-gray-100'>
          <input required onChange={handlechange} value={data.password} type={showPassword?'text':"password"} name="password" id="password" placeholder='Enter Your Password' className='w-full h-full outline-none p-3 bg-gray-100 '  />
          {
            showPassword?
            <IoEyeSharp size={20} className='cursor-pointer bg-gray-100' onClick={()=>setShowPassword(!showPassword)} />
            :
            <IoEyeOffSharp size={20} className='cursor-pointer bg-gray-100' onClick={()=>setShowPassword(!showPassword)}/>
          }
        </div>
        <label htmlFor="password">Confirm Password:</label>

        <div className='w-full flex  justify-center items-center border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 bg-gray-100'>
          <input required onChange={handlechange} value={data.cpassword} type={showcpassword?'text':"password"} name="cpassword" id="password" placeholder='Enter Your Confirm Password' className='w-full h-full outline-none p-3 bg-gray-100 '  />
          {
            showcpassword?
            <IoEyeSharp size={20} className='cursor-pointer bg-gray-100' onClick={()=>setShowcpassword((prev)=>!prev)} />
            :
            <IoEyeOffSharp size={20} className='cursor-pointer bg-gray-100' onClick={()=>setShowcpassword((prev)=>!prev)}/>
          }
        </div>
        <div className='ml-auto text-left mt-3 md:text-end'>
  <Link to="/forgot-password" className='hover:text-red-500 hover:underline text-left md:text-center'>
    Forget Password
  </Link>
</div>


        <div className=' flex justify-center mt-5'>
        <button onSubmit={handleSubmit} className='btn bg-red-500 hover:bg-red-700 px-6 max-w-[100px] py-3 w-full text-white rounded-full transition-all'>Signup</button>

        </div>
      </form>

      <p className='mt-5'>Already have an account? <Link className='hover:underline hover:text-red-500 ' to='/login'>Login</Link></p>
        

    </div>
    
  
</div>
  )
}

export default Signup
