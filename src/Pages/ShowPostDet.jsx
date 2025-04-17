import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowPostDet = () => {
    const post=useLoaderData()
    return (
        <div className='text-center py-4'>
            <p> User Id: {post.userId}</p>
            <h2 className='text-center text-xl font-bold '>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default ShowPostDet;