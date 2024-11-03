import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            <div>
            {/* Dynamic Sections */}
            <Outlet></Outlet>

            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;