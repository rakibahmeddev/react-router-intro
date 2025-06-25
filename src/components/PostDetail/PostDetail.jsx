import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    console.log(post)
    const {id, title, body} = post;


    const handleGoBack =() =>{
        navigate(-1)
    }
    return (
        <div className='text-center'>
            <h2>Title: <span>{title}</span></h2>
            <p>post id: {id} </p>
            <p className='mb-2'>Content: {body}</p>
            <Link to={-1} className='bg-black text-white px-6 py-2 rounded-lg '>Back</Link>

            <button onClick={handleGoBack} className='text-sm bg-green-500 text-white font-medium px-3 py-2 rounded-lg ml-2'>Go Back</button>
        </div>
    );
};

export default PostDetail;