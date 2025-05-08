import React from 'react';
import { FaJsSquare, FaReact } from 'react-icons/fa';
import { SiHtml5, SiNextdotjs } from 'react-icons/si';

const Docs = () => {
    return (
        <div className='max-w-5xl mx-auto my-5 bg-gradient-to-b from-blue-100 to-red-50  py-20 rounded-2xl'>
            <h1 className='font-bold text-3xl text-center'>Read the document for smooth learning</h1>
            <p className='font-normal text-md text-center mt-3 text-balance'>Read the document carefully every day to understand concepts,<br /> retain knowledge, and build confidence gradually</p>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 p-10 '>
                <div className='block mx-auto space-y-3  p-3 px-6 bg-white rounded-2xl shadow-xl'>
                <SiHtml5 size={100} className='bg-blue-500 p-3 rounded-3xl' color='white' />
                <p className='font-bold text-lg'>HTML documents</p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <button className='btn hover:bg-blue-700 hover:text-white bg-blue-500 text-white'>Read</button>
                </a>
                </div>
                <div className='block mx-auto  space-y-3  p-3 px-9 bg-white rounded-2xl shadow-xl'>
                <FaJsSquare size={100} className='bg-blue-500 p-3 rounded-3xl' color='white' />
                <p className='font-bold text-lg'>JS documents</p>
                <a href="https://www.w3schools.com/js/">
                <button className='btn hover:bg-blue-700 hover:text-white bg-blue-500 text-white'>Read</button>
                </a>
                </div>
                <div className='block mx-auto  space-y-3  p-3 bg-white rounded-2xl shadow-xl px-6'>
                <FaReact size={100} className='bg-blue-500 p-3 rounded-3xl' color='white' />
                <p className='font-bold text-lg'>React documents</p>
                <a href="https://react.dev/">
                <button className='btn hover:bg-blue-700 hover:text-white bg-blue-500 text-white'>Read</button>
                </a>
                </div>
                <div className='block mx-auto  space-y-3  p-3 bg-white rounded-2xl shadow-xl'>
                <SiNextdotjs size={100} className='bg-blue-500 p-3 rounded-3xl' color='white' />
                <p className='font-bold text-lg'>NEXT.js documents</p>
                <a href="https://nextjs.org/">
                <button className='btn hover:bg-blue-700 hover:text-white bg-blue-500 text-white'>Read</button>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Docs;