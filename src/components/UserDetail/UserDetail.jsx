import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const {name, website} = user;
    console.log(user);

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='text-center'>
            <h2>User Details: {name}</h2>
            <p className='mb-4'>Website: {website}</p>
            <Link to={-1} className='bg-black text-white px-6 py-2 rounded-lg'>Back to the users</Link>
            <button onClick={handleGoBack} className='text-sm bg-green-500 text-white font-medium px-3 py-2 rounded-lg ml-2'>Go Back</button>
        </div>
    );
};

export default UserDetail;