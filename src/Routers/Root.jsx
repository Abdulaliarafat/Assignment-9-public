import React from 'react';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-gray-100'>
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

export default Root;