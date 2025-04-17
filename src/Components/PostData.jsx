import React, { use } from 'react';
import { Link } from 'react-router-dom';

const PostData = ({ fetchData }) => {
    const posts = use(fetchData)
    return (
        <div className='grid grid-cols-3 gap-3 px-4 mt-5'>
            {
                posts.map(post => (
                    <div className="card  bg-base-100 card-lg shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="justify-end card-actions">
                              <Link to={`/post/${post.id}`}> <button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostData;