import React from 'react';
import img from '/download.jpeg'
import img1 from '/download.png'
import img2 from '/images (1).jpeg'
import img3 from '/images.jpeg'
 
const Learing = () => {
   
   return (
    <div className='max-w-6xl mx-auto my-5'>
        <h1 className='font-bold text-3xl text-center mb-3'>Boost your learing</h1>
        <p className='text-md font-normal text-center text-balance'>Boost your learning by setting clear goals, staying consistent, <br /> practicing daily, and reflecting on your progress.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-3'>
     <div className='my-10 space-y-3  p-3  bg-gradient-to-b from-blue-200 to-red-100 rounded-xl shadow-lg'>
      <img className='w-96 h-50  rounded-xl object-cover' src={img3} alt="" />
      <h1 className='text-lg font-bold text-center md:text-start'>Learn HTML and CSS Basics</h1>
     <a href="https://www.youtube.com/watch?v=G3e-cpL7ofc">
     <button className='btn w-25 font-bold hover:bg-blue-700 hover:text-white bg-blue-500 text-white md:inline block mx-auto'>Learn</button>
     </a>
      </div>
      <div className='my-10 space-y-3 p-3  bg-gradient-to-b from-blue-200 to-red-100 rounded-xl shadow-lg'>
      <img className='w-96  h-50  rounded-xl object-cover' src={img2} alt="" />
      <h1 className='text-lg font-bold text-center md:text-start'>Learn JavaScript Essentials</h1>
     <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg">
     <button className='btn w-25 font-bold hover:bg-blue-700 hover:text-white bg-blue-500 text-white md:inline block mx-auto'>Learn</button>
     </a>
      </div>
      <div className='my-10 space-y-3 p-3  bg-gradient-to-b from-blue-200 to-red-100 rounded-xl shadow-lg'>
      <img className='w-96  h-50  rounded-xl' src={img1} alt="" />
      <h1 className='text-lg font-bold text-center md:text-start'>Learn React Fundamentals</h1>
     <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">
     <button className='btn w-25 font-bold hover:bg-blue-700 hover:text-white bg-blue-500 text-white md:inline block mx-auto'>Learn</button>
     </a>
      </div>
      <div className='my-10 space-y-3 p-3  bg-gradient-to-b from-blue-200 to-red-100 rounded-xl shadow-lg'>
      <img className='w-96  h-50 rounded-xl' src={img} alt="" />
      <h1 className='text-lg font-bold text-center md:text-start'>Learn Next.js Introduction</h1>
     <a href="https://youtu.be/NgrljB7UU34?si=UUdoI2NZcPZnXMIM">
     <button className='btn w-25 font-bold hover:bg-blue-700 hover:text-white bg-blue-500 text-white md:inline block mx-auto'>Learn</button>
     </a>
      </div>
     </div>
    </div>
);


};

export default Learing;