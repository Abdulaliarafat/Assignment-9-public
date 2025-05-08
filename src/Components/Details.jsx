import React from 'react';
import Jobs from './jobs';


const Details = ({singleDetails}) => {
   const{logo,name,location,industry,jobs}=(singleDetails)
    return (
        <div  className='md:max-w-4xl mx-auto max-w-3xl rounded-xl shadow-2xl my-10 '>
        <div className='flex justify-center items-center'>
          <img className='w-50 object-cover rounded-full' src={logo} alt="" />
          <div className='space-y-2'>
          <h1 className='font-bold text-2xl'>{name}</h1>
          <p className='text-lg '>{location}</p>
          <p className='text-lg'>{industry}</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-6  '>
            {
               jobs.map((one,index)=><Jobs key={index} singleDetails={singleDetails} one={one}></Jobs>) 
            }
          </div>
        </div>
    );
};

export default Details;