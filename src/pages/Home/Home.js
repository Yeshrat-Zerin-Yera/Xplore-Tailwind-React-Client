import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Banner from '../../assets/banner.jpg';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            {/* Banner */}
            <div className="hero h-[60vh]" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content flex flex-col">
                    <h1 className="mb-5 text-4xl md:text-6xl font-bold">Your Bright Future Is Our Mission</h1>
                    <Link to='/courses' className="btn btn-secondary">Courses<FaArrowRight className='ml-1' /></Link>
                </div>
            </div>
            {/* Categories */}
            <div className='mt-12'>
                <h2 className='mb-5 text-2xl md:text-4xl font-bold text-center'>Categories</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 md:w-[700px] lg:w-[1000px] mx-auto'>
                    {
                        categories.map(category => <div key={category?.id} className="card w-full md:w-80  bg-base-100 shadow-xl mx-auto my-3">
                            <div className="card-body">
                                <h2 className="card-title">{category?.name}</h2>
                                <div className="card-actions justify-end">
                                    <Link to={`/categories/${category.id}`} className='btn btn-secondary btn-outline'>Access<FaArrowRight className='ml-1' /></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;