import React, { useState, useContext } from 'react';
import Logo from '../../Logo';
import { CiSearch } from "react-icons/ci";
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import simmaryapi from '../Pages/url/Api';
import { setuserdata } from '../../store/userslice';
import { toast } from 'react-toastify';
import context from '../../Context/index';
import { useLocation } from 'react-router-dom';

function Header() {
  const query = useLocation();

  const [search, setSearch] = useState([query?.search?.split('=')[1]]);
  const dispatch = useDispatch();
  const counter = useContext(context);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value) {
      navigate(`/searchproduct?q=${value}`);
    } else {
      navigate("/");
      setSearch('')
    }
  };

  const handlelogout = async () => {
    try {
      const response = await fetch(simmaryapi.logout.url, {
        method: simmaryapi.logout.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(setuserdata(null));
        toast.success("Logout Successfully");
        // Optionally reset the counter or other user data on logout
        counter.setCount(0);
      } else {
        toast.error("Logout Failed");
      }
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return (
    <div className='h-16 shadow-md py-3 bg-white'>
      <div className='mx-auto container flex item-center justify-between px-3 h-full'>
        <Link to='/'>
          <Logo h={50} w={80} />
        </Link>

        <div className='hidden lg:flex w-full max-w-sm justify-center items-center focus-within:shadow-sm rounded-full'>
          <input
            type="text"
            placeholder='Search Products ...'
            value={search}
            onChange={handleSearch}
            
            className='w-full outline-none p-3 rounded-l-full'
          />
          <div className='rounded-r-full bg-red-500 text-lg text-white p-3 max-w-[50px] h-full flex items-center justify-center'>
            <CiSearch />
          </div>
        </div>

        <div className='flex items-center gap-5 cursor-pointer relative'>
          <FaCircleUser className='text-3xl' />
          {user?._id && (
            <div>
              <span className='text-sm bg-red-500 p-1 absolute -top-2 rounded-full -right-2'>{counter.count}</span>
              <FaCartShopping />
            </div>
          )}
        </div>

        <div className='flex justify-center items-center'>
          {user?._id ? (
            <Link
              onClick={handlelogout}
              className='bg-red-500 rounded-full flex justify-center item-center p-3 hover:bg-red-700'
            >
              Logout
            </Link>
          ) : (
            <Link
              to='/login'
              className='bg-red-500 rounded-full flex justify-center item-center p-3 hover:bg-red-700'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
