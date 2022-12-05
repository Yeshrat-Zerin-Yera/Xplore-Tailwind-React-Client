import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const [courses, setCourses] = useState([]);
    // Load Dynamic Router Data
    const course = useLoaderData();
    const { title, others_info, _id } = course;
    // Get Current Date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    // Get Cart Courses From Database
    useEffect(() => {
        const selectedCourses = localStorage.getItem('courses');
        setCourses(JSON.parse(selectedCourses));
    }, []);

    return (
        <div className='w-8/12 mx-auto mt-12'>
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
            <div className='mt-12'>
                {/* Cart Table */}
                <h2 className='text-2xl text-center font-bold text-primary mb-6'>Cart</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Course</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses !== null ?
                                    courses.map(course => <tr key={_id}>
                                        <th></th>
                                        <td>{course?.title}</td>
                                        <td>{course?.others_info?.price}</td>
                                        <td></td>
                                    </tr>) :
                                    <tr>
                                        <td className='font-bold'>----</td>
                                        <td className='font-bold'>----</td>
                                        <td className='font-bold'>----</td>
                                        <td className='font-bold'>----</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkout;