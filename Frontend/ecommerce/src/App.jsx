import React, { useEffect,useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import context from '../Context/index';
import { setuserdata } from '../store/userslice';
import { useDispatch } from 'react-redux';
import simmaryapi from './Pages/url/Api';

export default function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const userdetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/user-details', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      const data = await response.json();
      // console.log("data now", data.user);

     if (response.status === 200) {
        dispatch(setuserdata(data.user));
      } else {
        console.log("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const countdocument = async () => {
    
    try {
      const response = await fetch(simmaryapi.countdocument.url, {
        method: simmaryapi.countdocument.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      const data = await response.json();
      setCount(data.count);
      
      
    } catch (error) {
      console.error("Error fetching user details:", error);
      
    }
   
  }

  useEffect(() => {
    userdetails();
    countdocument()
  }, [count]);

  

     


  return (
    <context.Provider value={{ userdetails, count
  }}>
      <div>
        <ToastContainer />
        <Header />
        <main className='min-h-[calc(100vh-100px)]'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </context.Provider>
  );
}
