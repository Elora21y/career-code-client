import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='min-h-[calc(100vh-200px)]'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;