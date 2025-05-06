import React from 'react';

const Jobs = ({ one,singleDetails }) => {
    console.log(one);
    return (
        <div>
            <div className='text-center shadow-2xl p-3 bg-gradient-to-b from-blue-100 to-red-50 rounded-2xl'>
                <div className='space-y-1.5'>
                    <p className='font-bold text-xl'>Job : {one.title}</p>
                    <p className='font-semibold'>Work : {one.jobType}</p>
                    <span className='font-bold text-md'>Salary : {one.salary}</span>
                </div>
                <button className='mt-2 bg-blue-500 text-white px-3 py-1.5 text-sm font-bold rounded-lg hover:bg-blue-700 hover:text-white' onClick={() => document.getElementById(`modal-${one.id}`).showModal()}>Details</button>
            </div>

            <dialog id={`modal-${one.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-full  max-w-6xl h-[600px] px-10">
                    <img src={one?.bannerImage} alt="Banner" className="w-full h-50 object-cover rounded-lg my-3" />
                    <p className='font-bold text-xl text-gray-800'>Job : {one.title}</p>
                    <p className='font-semibold text-gray-600'>Work : {one.jobType}</p>
                    <p className='font-semibold text-gray-600'>description : {one.description}</p>
                    <p className='font-semibold text-md text-gray-600'>Salary : <span className='text-lg text-gray-600'> {one.salary}</span>  </p>
                    <p className='font-semibold text-gray-600'>Location : {one.location}</p>
                     <p className='font-bold text-lg'> Requirements :</p>
                     {
                        one.requirements.map((requ,index)=><p className='font-semibold text-md text-gray-600' key={index}> {requ}</p>)
                     }
                    <div className="modal-action flex justify-between items-center">
                        <form method="dialog">
                            <button className="btn  hover:bg-blue-700 hover:text-white bg-blue-500 text-white">Close</button>
                        </form>
                        <a href={singleDetails.website} className="btn  hover:bg-blue-700 hover:text-white bg-blue-500 text-white">Apply</a>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Jobs;