import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import logo from '../assest/signin.gif'; // Adjust path if needed
import simmaryapi from './url/Api';
import { toast } from 'react-toastify';
import Context from '../../Context/index';
import { useContext } from 'react';


function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({ email: "", password: "" });

const {userdetails}=useContext(Context)

    // console.log('context',userdetails);


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(simmaryapi.signin.url, {
                method: simmaryapi.signin.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Correctly placed here
                body: JSON.stringify(data),
            });

            if (response.ok) {
              toast.success("Login successful");
                const responseData = await response.json();
                console.log('Login successful:', responseData);
                localStorage.setItem('token', responseData.token);
                localStorage.setItem('user', JSON.stringify(responseData.user));
            } else {
                console.error('Login failed');
                toast.error("Invalid email or password");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='container mx-auto'>
            <div className='w-full max-w-md mx-auto bg-white m-5 p-5 rounded-md'>
                <div className="flex justify-center bg-white ">
                    <img src={logo} alt="logo" />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
                    <label htmlFor="email">Email:</label>
                    <input
                        required
                        type="email"
                        value={data.email}
                        name="email"
                        id="email"
                        onChange={handleChange}
                        placeholder='Enter Your Email'
                        className='w-full p-2 border-2 border-gray-300 rounded-md outline-none bg-gray-100'
                    />
                    <label htmlFor="password">Password:</label>
                    <div className='w-full flex justify-center items-center border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 bg-gray-100'>
                        <input
                            required
                            onChange={handleChange}
                            value={data.password}
                            type={showPassword ? 'text' : "password"}
                            name="password"
                            id="password"
                            placeholder='Enter Your Password'
                            className='w-full h-full outline-none p-3 bg-gray-100'
                        />
                        {showPassword ? (
                            <IoEyeSharp size={20} className='cursor-pointer bg-gray-100' onClick={() => setShowPassword(!showPassword)} />
                        ) : (
                            <IoEyeOffSharp size={20} className='cursor-pointer bg-gray-100' onClick={() => setShowPassword(!showPassword)} />
                        )}
                    </div>
                    <div className='ml-auto text-left mt-3 md:text-end'>
                        <Link to="/forgot-password" className='hover:text-red-500 hover:underline text-left md:text-center'>
                            Forget Password
                        </Link>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button type="submit" className='btn bg-red-500 hover:bg-red-700 px-6 max-w-[100px] py-3 w-full text-white rounded-full transition-all'>Login</button>
                    </div>
                </form>
                <p className='mt-5'>Don't have an account? <Link className='hover:underline hover:text-red-500' to='/signup'>Signup</Link></p>
            </div>
        </div>
    );
}

export default Login;
