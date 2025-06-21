import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
               <Header></Header>
               <h2 className='text-center text-5xl my-6'>Home Compo</h2>
               <Outlet></Outlet>
               <Footer></Footer>
        </div>
    );
};

export default Home;