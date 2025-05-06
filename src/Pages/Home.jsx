import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import Companies from '../Components/Companies';

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <Suspense fallback={<p className='text-center'><span className="loading loading-bars loading-xl text-blue-700"></span></p>}>
           <Companies></Companies>
           </Suspense>
           
        </div>
    );
};

export default Home;