import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
               <Header></Header>
               <h2 className='text-center text-5xl my-6'>Home Compo</h2>
               <Outlet></Outlet>
        </div>
    );
};

export default Home;