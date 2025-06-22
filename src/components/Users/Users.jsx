import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User'

const Users = () => {
    const users = useLoaderData();
    return (
        <div className='text-center'>
            <h2>no of users {users.length} </h2>
            <div className='md:grid md:grid-cols-4 my-6'>
                {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;