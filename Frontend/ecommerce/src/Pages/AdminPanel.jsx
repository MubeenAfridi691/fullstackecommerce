import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function adminPanel() {
    const user=useSelector((state)=>state.user.user)
    // const [users,setusers]=React.useState([])

    // // console.log("user redux",user)
    // const allusersdata = async () => {
    //     try {
    //       console.log('Fetching all users...'); // Debugging log
    
    //       const response = await fetch('http://localhost:5000/allusers', {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json"
    //         }
    //       });
    
    //       console.log('Response status:', response.status); // Log the status code
    
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
    
    //       const data = await response.json();
    //       setUsers(data);
    //       console.log("Data for all users:", data); // Debugging log
    
    //     } catch (error) {
    //       console.error("Error fetching users:", error); // Log any errors
    //     //   setError(error.message); // Set error state
    //     }
    //   };
    
    //   useEffect(() => {
    //     allusersdata(); // Call the function
    //   }, []);
    
    
  return (
   < div className='h-[calc(100vh-100px)] flex '>
    <aside className='h-full w-full max-w-60 bg bg-slate-200'  >
        <div className='w-full flex items-center justify-center   h-[200px] '>
        <div className='  col gap-5 cursor-pointer relative '>
      <FaCircleUser className='text-5xl '/>
      {/* <h3>{user}</h3> */}
      <span className='text-2xl block capitalize'>{user?user.name:'Please Login'}</span>
      <span className='text-2xl capitalize'>{user?user.Roll:'no Roll'}</span>
      
      </div>
      
      <div className='flex flex-col items-center justify-center'>
      
      </div>

            
        </div>
        <hr  className='w-full bg-red-500'/>
        <div>
            <nav className='flex flex-col gap-2 p-5'>
                <Link  to='allusers' className='text-bold  hover:bg-slate-400 p-2'>All Users</Link>
                <Link to='allproducts' className='text-bold hover:bg-slate-400 p-2'>All Products</Link>
            </nav>
        </div>
        
    </aside>
    <main className='h-full max-w-70 bg-black-900  w-full '>
        <Outlet/>
    </main>
   </div>

  
  
  )
}

export default adminPanel
