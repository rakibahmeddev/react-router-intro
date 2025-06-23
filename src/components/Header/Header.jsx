import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-violet-800 text-white'>
             <Link className='cursor-pointer text-2xl font-bold' to='/'>Navbar</Link>
            <nav>
                <ul className='flex space-x-4 cursor-pointer'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/about'>About</Link>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;