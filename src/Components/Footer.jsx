import React from 'react';
import { NavLink } from 'react-router';
import logo from '/686413_Jobs-image-icon-207887.jpg'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='px-5 py-5 bg-gradient-to-b from-blue-100 to-red-50'>
            <div className='flex justify-center items-center gap-2'>
                <img className='w-15 rounded-full' src={logo} alt="" />
                <button className=" p-4 font-bold text-blue-500 text-2xl">JoBsTrack</button>
            </div>
            <div className='mt-8'>
                <ul className='menu menu-horizontal px-1 flex justify-center items-center gap-10 block mx-auto'>
                    <li><NavLink to='/' className={({ isActive }) => `ml-5 font-semibold text-lg ${isActive ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}>Home</NavLink></li>
                    <li><NavLink to='/myProfile/profile' className={({ isActive }) => `ml-5 font-semibold text-lg ${isActive ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}>My profile</NavLink></li>
                    <li><NavLink to='/successes/stories' className={({ isActive }) => `ml-5 font-semibold text-lg ${isActive ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}>Successes</NavLink></li>

                </ul>
            </div>
            <div className='flex justify-center items-center mt-8 gap-7'>
                <a href="https://www.facebook.com/share/v/15pQTabBgd/"> <FaFacebook size={30} color='blue' /></a>
                <a href="https://www.instagram.com/reel/DJKGttVNDSy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="> <FaInstagram size={30} color='red' /></a>
                <a href="https://www.instagram.com/reel/DI_wIDry-bY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><FaX size={30} color='black' /></a>
                <a href="https://youtu.be/gm_AgWVBTCE?si=9NuWWIqlCWBU1wCO"><FaYoutube size={30} color='red' /></a>
            </div>
        </div>
    );
};

export default Footer;