import React from 'react';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';


const LogInLayout = () => {
    return (
        <div>
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

export default LogInLayout;