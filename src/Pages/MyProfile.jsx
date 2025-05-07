import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MyProfile = () => {
    return (
        <div>
            <title>My profile</title>
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

export default MyProfile;