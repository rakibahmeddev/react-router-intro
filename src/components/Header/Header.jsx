import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-blue-500 text-white'>
            <h2 className='cursor-pointer text-2xl font-bold'>Navbar</h2>
            <nav>
                <ul className='flex space-x-4 cursor-pointer'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/about'>About</Link>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;