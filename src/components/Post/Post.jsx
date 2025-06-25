import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='bg-violet-700 m-3 my-4 text-left p-6 rounded-3xl shadow-lg shadow-purple-800 text-white text-lg cursor-pointer'>
             <p> post of id: {id}</p>
            <h2 className='text-lg'>Title: <span className='italic text-sm'>{title}</span></h2>

            <Link to={`/post/${id}`} className='text-sm bg-black px-3 py-2 rounded-lg'>View Details</Link>

            <button onClick={handleNavigate} className='text-sm bg-green-500 text-white font-medium px-3 py-2 rounded-lg ml-2'>Post Detail</button>
           
        </div>
    );
};

export default Post;