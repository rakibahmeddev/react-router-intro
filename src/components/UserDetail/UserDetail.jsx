import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    const {name, website} = user;
    console.log(user)
    return (
        <div className='text-center'>
            <h2>User Details: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetail;