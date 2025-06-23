import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div className='bg-violet-700 m-3 my-4 text-left p-6 rounded-3xl shadow-lg shadow-purple-800 text-white text-lg cursor-pointer'>
             <p> post of id: {id}</p>
            <h2 className='text-lg'>Title: <span className='italic text-sm'>{title}</span></h2>

            <Link to={`/post/${id}`} className='text-sm bg-black px-3 py-2 rounded-lg'>View Details</Link>
           
        </div>
    );
};

export default Post;