import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '/686413_Jobs-image-icon-207887.jpg'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='max-w-7xl px-2 py-5 bg-gradient-to-b from-blue-100 to-red-50'>
            <div className='flex justify-center items-center gap-2'>
                <Link to='/'><img  className='w-15 rounded-full' src={logo} alt="" /></Link>
                <button className=" p-4 font-bold text-blue-500 text-2xl">JoBsTrack</button>
            </div>
            <div className='mt-8'>
                <ul className='menu menu-horizontal px-1 flex justify-center items-center md:gap-10  mx-auto'>
                    <li><NavLink to='/' className={({ isActive }) => `ml-5 font-medium text-lg ${isActive ? 'bg-blue-500 text-white' : 'text-blue-400 hover:bg-blue-500 hover:text-white'}`}>Home</NavLink></li>
                    <li><NavLink to='/myProfile/profile' className={({ isActive }) => `ml-5 font-medium text-lg ${isActive ? 'bg-blue-400 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}>My profile</NavLink></li>
                    <li><NavLink to='/successes/stories' className={({ isActive }) => `ml-5 font-medium text-lg ${isActive ? 'bg-blue-400 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'}`}>Successes</NavLink></li>
                </ul>
            </div>
            <div className='flex justify-evenly  my-5'>
                <div>
                <div>
                <h1 className='font-semibold text-lg mb-2'>📍Location (Dhaka Office)</h1>
                    <p className='text-md font-medium text-balance text-gray-800 '>
                        <a className='hover:underline' href="https://www.google.com/maps/place/Programming+Hero/@23.7936109,90.4027887,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c7163736e453:0xb12cfac638de13ed!8m2!3d23.7936109!4d90.4053636!16s%2Fg%2F11vws7qfy2?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D">
                            JobTrack HQ (Bangladesh Office)
                            <br />House #123,Road #4, Block B,
                            <br />House #123, Road #4, Block B,
                            <br /> Banani, Dhaka 1213,<br />
                            Bangladesh <br />
                        </a>
                        📞 Phone: +880 1234 567890 <br />

                        📧 Email: <span className='underline'>support@jobtrack.com</span> <br />
                    </p>
                </div>
                </div>
                <div className='mt-2'>
                    <h1 className='font-bold  mb-3'>⚖️  Terms and conditions</h1>
                    <p className='flex flex-col text-sm font-medium text-balance '>
                   🌐 Account required to access job features <br />
                   🌐 User data stored for service improvement<br />
                   🌐 No guarantee of job placement<br />
                   🌐 Respect employer confidentiality and privacy policies<br />
                   🌐 Misuse may lead to account suspension<br />
                    </p>
                </div>
                <div className=' ml-2'>
                    <h1 className='font-bold mb-3'>Follow on </h1>
                    <div className='flex flex-col gap-2'>
                    <a href="https://www.facebook.com/share/v/15pQTabBgd/"> <FaFacebook size={30} color='blue' /></a>
                    <a href="https://www.instagram.com/reel/DJKGttVNDSy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="> <FaInstagram size={30} color='red' /></a>
                    <a href="https://www.instagram.com/reel/DI_wIDry-bY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><FaX size={30} color='black' /></a>
                    <a href="https://youtu.be/gm_AgWVBTCE?si=9NuWWIqlCWBU1wCO"><FaYoutube size={30} color='red' /></a>
                    </div>
                </div>
            </div>
           <p className='font-semibold text-sm text-center'> @JoBsTrack 2024</p>
        </div>
    );
};

export default Footer;