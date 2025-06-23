import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({user}) => {
    const {id, name, phone} = user;
    return (
        <div className='bg-violet-700 m-3 my-4 text-left p-6 rounded-3xl shadow-lg shadow-purple-800 text-white text-lg cursor-pointer'>
            <h2>Name: <small>{name}</small></h2>
            <p>Phone: <small>{phone}</small></p>
            <Link className='bg-black text-sm px-4 py-2 rounded-lg' to={`/user/${id}`}>Details</Link>
        </div>
    );
};

export default Users;