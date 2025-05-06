import React, { Suspense} from 'react';
import Banner from '../Components/Banner';
import Companies from '../Components/Companies';
import Learing from '../Components/Learing';
import Docs from '../Components/Docs';
   
const Home = () => {
   
    return (
        <div className=''>
           <Banner></Banner>
           <Suspense fallback={<p className='text-center'><span className="loading loading-bars loading-xl text-blue-700"></span></p>}>
           <Companies></Companies>
           <Learing ></Learing>
           <Docs></Docs>
           </Suspense>
           
        </div>
    );
};

export default Home;