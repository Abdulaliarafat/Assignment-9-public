import React from 'react';
import { NavLink } from 'react-router';
import logo from '/686413_Jobs-image-icon-207887.jpg'
import { FaApple, FaFacebook, FaMicrosoft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { FaMeta } from 'react-icons/fa6';
import { SiDell, SiSamsung } from 'react-icons/si';
import { GrHpi } from 'react-icons/gr';
const Footer = () => {
    return (
        <div className='px-5 py-12 bg-gradient-to-b from-blue-100 to-red-50'>
            <div className='flex justify-center items-center gap-2'>
                <img className='w-15 rounded-full' src={logo} alt="" />
                <button className=" p-4 font-bold text-blue-500 text-2xl">JoBsTrack</button>
            </div>
            <div className='mt-8'>
                <ul className='flex justify-center items-center gap-10'>
                <li className='ml-5'><NavLink className='font-semibold text-blue-500 text-lg p-2.5 rounded-lg hover:bg-blue-500 hover:text-white' to='/'>Home</NavLink></li>
                <li className='ml-5'><NavLink className='font-semibold text-blue-500 text-lg p-2.5 rounded-lg hover:bg-blue-500 hover:text-white'>My profile</NavLink></li>
                <li className='ml-5'><NavLink className='font-semibold text-blue-500 text-lg p-2.5 rounded-lg hover:bg-blue-500 hover:text-white'>Successes</NavLink></li>
                </ul>
            </div>
            <div className='flex justify-center items-center mt-8 gap-7'>
            <FaApple  size={30} className='text-gray-500'/>
            <FaFacebook  size={30} color='blue'/>
            <FcGoogle  size={30} color=''/>
            <AiFillAmazonCircle  size={20} color=''/>
            <FaMeta  size={30} color='blue'/>
            <SiSamsung size={30} color='blue'/>
            <SiDell  size={30} color='blue'/>
            <GrHpi  size={30} color='blue'/>

            </div>
        </div>
    );
};

export default Footer;