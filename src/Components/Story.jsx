import React from 'react';

const Story = ({story}) => {
    console.log(story)
    return (
        <div className='block mx-auto md:flex md:gap-10 my-5 p-5 rounded-xl shadow-xl bg-gradient-to-r from-blue-100 to-red-50' >
            <div>
                <img className=' block mx-auto md:w-45 h-30 object-cover rounded-xl' src={story.img_url} alt="" />
            </div>
            <div>
                <h1 className='font-semibold text-lg text-center md:text-start'>{story.name}</h1>
                <p className='font-semibold text-md text-center md:text-start'>{story.company}</p>
                <p className='font-semibold text-sm text-center md:text-start'>{story.job_title}</p>
                <p className='font-medium text-sm text-gray-500 text-center text-balance md:text-start'>{story.story}</p>
            </div>
        </div>
    );
};

export default Story;