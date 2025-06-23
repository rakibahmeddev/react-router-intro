import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    const {name, website} = user;
    console.log(user)
    return (
        <div className='text-center'>
            <h2>User Details: {name}</h2>
            <p className='mb-4'>Website: {website}</p>
            <Link to={-1} className='bg-black text-white px-6 py-2 rounded-lg'>Back to the users</Link>
        </div>
    );
};

export default UserDetail;