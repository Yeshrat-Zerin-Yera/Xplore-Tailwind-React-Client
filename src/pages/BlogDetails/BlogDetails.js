import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blog = useLoaderData();
    const { question, title, description, thumbnail_url, author } = blog;
    console.log(question.length);

    return (
        // Blog Details
        <div className='grid lg:grid-cols-12 gap-6 p-6 w-full md:w-11/12 lg:w-11/12 xl:w-8/12 mx-auto'>
            {/* Details Content */}
            <div className='lg:col-span-7'>
                {
                    question?.length > 35 ? <h1 className='text-3xl text-primary font-bold my-6'>{question.toUpperCase()}</h1> : <h1 className='text-3xl sm:text-4xl lg:text-5xl text-primary font-bold my-6'>{question.toUpperCase()}</h1>
                }
                <img src={thumbnail_url} alt="" className='w-full rounded my-6' />
                <h2 className='text-3xl md:text-4xl text-primary font-bold mt-12 mb-6'>{title}</h2>
                <p>{description}</p>
            </div>
            {/* Author Info */}
            <div className='lg:col-span-5 mt-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={author?.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">{author?.name}</h2>
                        <p>Date: <b>{author?.published_date}</b></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Follow<FaPlus className='ml-1' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;