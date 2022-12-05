import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-8/12 mx-auto mt-12'>
            {
                blogs.map(blog => <div key={blog?._id} className="card w-96 glass mb-6">
                    <figure><img src={blog?.thumbnail_url} alt="" className='h-60 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{blog?.question}</h2>
                        <p>
                            {
                                blog?.description?.length > 80 ? blog?.description.slice(0, 80) + '...' : blog?.description
                            }
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={`/blogs/${blog?._id}`} className="btn btn-primary">Learn More<FaArrowRight className='ml-1' /></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blog;