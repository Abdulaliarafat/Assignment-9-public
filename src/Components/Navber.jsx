import React from 'react';
import logo from '/686413_Jobs-image-icon-207887.jpg'
import { NavLink } from 'react-router';
import { FaUserCircle } from 'react-icons/fa';
const Navber = () => { 
    const link=(
        <>
        <li className='ml-5'><NavLink className='font-semibold text-blue-500 text-lg hover:bg-blue-500 hover:text-white' to='/'>Home</NavLink></li>
        <li className='ml-5'><NavLink className='font-semibold text-blue-500 text-lg hover:bg-blue-500 hover:text-white'>My profile</NavLink></li>
        <li className='ml-5'><NavLink className='font-semibold text-blue-500 text-lg hover:bg-blue-500 hover:text-white'>Successes</NavLink></li>
        </>
    )
    return (
        <div className="navbar shadow-sm px-5 bg-gradient-to-b from-blue-100 to-red-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {link}
            </ul>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <img className='w-15 rounded-full hidden md:block' src={logo} alt="" />
          <button className=" p-4 font-bold text-blue-500 text-2xl">JoBsTrack</button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {link}
          </ul>
        </div>
        <div className="navbar-end gap-3    ">
        <FaUserCircle size={50} />
          <a className="btn w-24 font-bold bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:bg-gradient-to-t hover:from-blue-900 hover:to-blue-600 ">Login</a>
        </div>
      </div>
    );
};

export default Navber;