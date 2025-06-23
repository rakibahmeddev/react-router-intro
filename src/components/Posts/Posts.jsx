import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='text-center'>
            <h2 className='text-xl'>Available Posts: {posts.length}</h2>
            <div className='md:grid md:grid-cols-3 my-6'>
                {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;