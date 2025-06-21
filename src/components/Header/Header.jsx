import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-blue-500 text-white'>
            <h2 className='cursor-pointer text-2xl font-bold'>Navbar</h2>
            <nav>
                <ul className='flex space-x-4 cursor-pointer'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;