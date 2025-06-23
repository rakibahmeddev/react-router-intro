import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    console.log(post)
    const {id, title, body} = post;
    return (
        <div className='text-center'>
            <h2>Title: <span>{title}</span></h2>
            <p>post id: {id} </p>
            <p className='mb-2'>Content: {body}</p>
            <Link to={-1} className='bg-black text-white px-6 py-2 rounded-lg '>Back</Link>
        </div>
    );
};

export default PostDetail;