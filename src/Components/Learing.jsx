import React, { use } from 'react';
const learnPromise=fetch('/Learn.json').then(res=>res.json())
const Learing = () => {
   const data =use(learnPromise)
   console.log(data)
   return (
    <div className='max-w-6xl mx-auto my-5'>
        <h1 className='font-bold text-3xl text-center mb-3'>Boost your learing</h1>
        <p className='text-md font-normal text-center text-balance'>Boost your learning by setting clear goals, staying consistent, <br /> practicing daily, and reflecting on your progress.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-2'>
        {
            data.map(learn=> <div key={learn.id} className='my-10 space-y-3  px-6 py-6  bg-gradient-to-b from-blue-200 to-red-100 rounded-xl shadow-lg'>
                <img className='h-50 w-80 rounded-xl' src={learn.img} alt="" />
                <h1 className='text-lg font-bold text-center md:text-start'>{learn.title}</h1>
               <a href={learn.video}>
               <button className='btn w-25 font-bold hover:bg-blue-700 hover:text-white bg-blue-500 text-white md:inline block mx-auto'>Learn</button>
               </a>
                </div>    )
        }

     
   
     </div>
    </div>
);


};

export default Learing;