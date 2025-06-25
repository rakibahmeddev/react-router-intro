import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-violet-800 text-white'>
             <Link className='cursor-pointer text-2xl font-bold' to='/'>Navbar</Link>
            <nav>
                <ul className='flex space-x-4 cursor-pointer'>
                   
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/posts">Post</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;