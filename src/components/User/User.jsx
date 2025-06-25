import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Users = ({user}) => {
    const {id, name, phone} = user;
    const navigate = useNavigate();

    const handleNagivate = () => {
        navigate(`/user/${id}`)
    }
    return (
        <div className='bg-violet-700 m-3 my-4 text-left p-6 rounded-3xl shadow-lg shadow-purple-800 text-white text-lg cursor-pointer'>
            <h2>Name: <small>{name}</small></h2>
            <p>Phone: <small>{phone}</small></p>
            <div className='flex'>
                <Link className='bg-black text-sm px-4 py-2 rounded-lg' to={`/user/${id}`}>Details</Link>

            <button onClick={handleNagivate} className='text-sm bg-green-500 text-white font-medium px-3 py-2 rounded-lg ml-2'>Show Details</button>
            </div>
        </div>
    );
};

export default Users;