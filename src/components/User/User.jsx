import React from 'react';

const Users = ({user}) => {
    const {id, name, phone} = user;
    return (
        <div className='bg-violet-700 m-3 my-4 text-left p-6 rounded-3xl shadow-lg shadow-purple-800 text-white text-lg'>
            <h2>Name: <small>{name}</small></h2>
            <p>Phone: <small>{phone}</small></p>
        </div>
    );
};

export default Users;