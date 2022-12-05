import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Checkout = () => {
    const navigate = useNavigate();
    // Load Dynamic Router Data
    const course = useLoaderData();
    const { title, others_info } = course;
    // Get Current Date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div className='md:w-8/12 mx-auto mt-12 p-3'>
            {/* Selected Course */}
            <div>
                <ul style={{ listStyleType: "disc" }}>
                    <li>Course: <b>{title}</b></li>
                    <li>Price: <b>{others_info?.price}$</b></li>
                    <li>Date: <b>{date}</b></li>
                    <li>Payment method: <b>Debit/Credit Cards</b></li>
                </ul>
            </div>
            {/* Cart */}
            <Cart></Cart>
            {/* Navigate Button */}
            <div className='mt-6'>
                <button onClick={() => navigate(-1)} className='btn btn-primary btn-outline mr-3'>Go Back</button>
                <Link to='/courses' className='btn btn-secondary btn-outline'>Go To Courses</Link>
            </div>
        </div>
    );
};

export default Checkout;