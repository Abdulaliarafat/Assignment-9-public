import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Successes = () => {
    return (
        <div className='bg-gray-100'>
            <title>Successes story</title>
            <header>
            <Navber></Navber>
            </header>
            <main>
          <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Successes;