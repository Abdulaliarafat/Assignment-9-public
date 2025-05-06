import React from 'react';
import banner from '/Why-you-should.jpg'
const Banner = () => {
    return (
        <div className='shadow-lg my-5 md:py-5 px-2 md:max-w-6xl md:flex max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-red-100'>
            <div className='space-y-5 py-4 md:py-10 ml-2'>
            <h1 className='text-2xl font-bold  text-balance text-start'>Find Top IT Company Jobs Fast with <br /> JobTrack Today</h1>
            <p className='text-gray-500 font-medium text-balance text-start'>JobTrack connects you with the latest job openings at top IT companies.Discover tech roles, apply easily, and boost your career with <br /> trusted listings updated in real-time.</p>
            <button className='btn font-bold bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:bg-gradient-to-t hover:from-blue-900 hover:to-blue-600 w-40'>Explore</button>
            </div>
            <div>
                <img className='rounded-2xl md:h-[330px] md:w-[950px] w-[650px]' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;