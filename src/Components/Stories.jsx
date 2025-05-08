import React from 'react';
import { useLoaderData } from 'react-router';
import Story from './Story';

const Stories = () => {
    const data=useLoaderData()
    return (
        <div className='max-w-4xl mx-auto my-10 '>
           <h1 className='font-bold text-2xl text-center'>Successfull stories</h1>
           <p className='font-normal text-md text-gray-500 text-center mt-3 text-balance'>uccess stories inspire by showing how determination and hard work lead to achievement,  <br />   encouraging others to overcome obstacles and pursue dreams.</p>
            <div>
               {
                data.map(story=><Story key={story.id} story={story}></Story>)
               }
            </div>
        </div>
    );
};

export default Stories;