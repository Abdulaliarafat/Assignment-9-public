import React from 'react';
import { MdError } from 'react-icons/md';

import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='max-w-4xl mx-auto bg-amber-50'>
            <div className='space-y-2 md:space-y-5 max-w-4xl  shadow-2xl rounded-2xl mx-2 md:mx-auto my-28 p-10 flex flex-col justify-center items-center'>
            <MdError fill='red' size={200} />
           <p className='font-extrabold text-5xl text-red-400 text-center text-balance'>404-Page Not found</p>
           <p className='font-medium text-lg text-red-300 text-center text-balance'>Oop's the page you are looking dosn't exist</p>
           <Link to={'/'}>
            <button className='py-2 px-3 font-medium text-white rounded-xl bg-red-500 hover:bg-red-700 hover:text-white'>Go back Home</button>
            </Link>
            </div>
        </div>
    );
};

export default Error;