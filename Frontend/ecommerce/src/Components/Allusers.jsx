import React from 'react'
import simmaryapi from '../Pages/url/Api'
import { useEffect } from 'react'
import '../../src/App.css'
import moment from 'moment'
import { CiEdit } from "react-icons/ci";
import ChangeuserRoll from './changeuserRoll'
import { useState } from 'react'

function Allusers() {
  const [users,setUsers]=useState([])
  const [show,setShow]=useState(false)


  
  const allusersdata = async () => {
    try {
      // console.log('Fetching all users...'); // Debugging log

      const response = await fetch('http://localhost:5000/allusers', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include'
      });

      console.log('Response status:', response.status); // Log the status code

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data.users);
      console.log("Data for all users:", users); // Debugging log

    } catch (error) {
      console.error("Error fetching users:", error); // Log any errors
      // setError(error.message); // Set error state
    }
  };

  useEffect(() => {
    allusersdata(); // Call the function
  }, []); // Emp

  return (
    <div>
     

<div class="relative overflow-x-auto shadow-md sm:rounded-lg tableclasses">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center'>
                <th scope="col" class="px-6 py-3">
                    Sr.
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Roll
                </th>
                <th scope="col" class="px-6 py-3">
                    Join Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody className=''>
                {
                    users.map((el,index) => {
                        return(
                            <tr>
                                <td className='text-center capitalize'>{index+1}</td>
                                <td className='text-center capitalize'>{el?.name}</td>
                                <td className='text-center capitalize'>{el?.email}</td>
                                <td className='text-center capitalize'>{el?.Roll}</td>
                                <td className='text-center capitalize'>{moment(el?.createdAt).format('ll')}</td>
                                <td onClick={()=>setShow(true)} className='text-green-300 text-center rounded-full ml-4 cursor-pointer hover:text-white hover:bg-blue-600 p-3'><CiEdit className='ml-5 '/> </td>

                               
                                <td>
                                    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
    </table>
{
  show && <ChangeuserRoll show={show} setShow={setShow}/>
}
</div>

    </div>
  )
}

export default Allusers
