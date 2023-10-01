import React from 'react'
import "./login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
    navigate("/table")
    }



    return (

        <div className="min-h-screen flex items-center justify-center  bg-[#1c4b69] relative overflow-hidden">
            <div className='w-[473px] h-[437px] bg-[#24597a] flex justify-center items-center  rounded-[30px] z-50'>
                <div className="max-w-md w-full    shadow-lg bg-[#2c6c8f] rounded-[30px]">
                    <h1 className="  text-center mt-6   text-[#e99b4c] text-4xl fontCalibri_light font-bold">Tika<span className='text-[#129dc7] font-light'>Rx</span></h1>
                    <p className='fontCalibri_light text-center text-white text-[9px] leading-3 -mt-2'>Rx Management System</p>
                    <div>
                        <p className='text-white text-center pt-8 fontCalibri text-3xl font-semibold'>Login</p>
                    </div>
                    <form className=' mx-12 '>
                        <div className='flex  items-center justify-center pt-5 gap-5'>
                            <label for="email" className=" text-xs text-white fontCalibri_light ">User Id:</label>
                            <input type="email" id="email" name="email"
                                className="md:w-64 w-44 px-4 py-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-sm" />
                        </div>
                        <div className='flex  items-center justify-center pt-5 gap-5 mr-4'>
                            <label for="password" className=" text-xs text-white fontCalibri_light">password:</label>
                            <input type="password" id="password" name="password"
                                className="md:w-64 w-44 px-4 py-1 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyan-500 " />
                        </div>
                        <div class="flex items-center justify-center ml-14   gap-10 pt-3">
                            <div className='flex justify-center items-center'>
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-checkbox" class="ml-2 text-xs fontCalibri_light font-medium text-white  dark:text-gray-300">Remember me</label>
                            </div>
                            <p className='text-white text-xs fontCalibri_italics font-medium'>Forgot User ID/Passcode</p>
                        </div>
                        <div className='flex justify-end items-center pt-7  mb-12 px-5 '>
                            <button 
                                className=" input   w-36 bg-white   py-1 rounded-3xl ring- focus:ring-offset- focus:outline-none  mt-4 mb-4 fontCalibri font-bold text-black text-sm" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </div>


            <div className='hidden lg:block  w-[800px] z-10 h-[800px] bg-[#206688] rounded-[190px] absolute -left-[410px] transform rotate-45 overflow-hidden'></div>
            <div className='hidden md:block  w-[550px] h-[550px] bg-[#2b6b8e] rounded-[150px] z-20 absolute -left-[350px] bottom-0  rotate-45'></div>
            <div className='hidden sm:block w-[400px] h-[400px] rounded-[150px] bg-[#2b749b] z-20 absolute -left-[310px] bottom-0  rotate-45'></div>
            
            <div className='hidden lg:block  md w-[800px] z-10 h-[800px] bg-[#206688] rounded-[190px] absolute -right-[410px] transform rotate-45 overflow-hidden'></div>
            <div className=' hidden md:block w-[550px] h-[550px] bg-[#2b6b8e] rounded-[150px] z-20 absolute -right-[350px] bottom-0 rotate-45'></div>
            <div className='hidden sm:block  w-[400px] h-[400px] rounded-[150px] bg-[#2b749b] z-20 absolute -right-[310px] bottom-0 rotate-45   '></div>
        </div>


    )
}

export default Login