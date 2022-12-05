import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
    const [courses, setCourses] = useState([]);

    // Get Cart Courses From Database
    useEffect(() => {
        const selectedCourses = localStorage.getItem('courses');
        setCourses(JSON.parse(selectedCourses));
    }, []);

    return (
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
                                courses.map((course, index) => <tr key={course._id}>
                                    <th>{index + 1}</th>
                                    <td>{course?.title}</td>
                                    <td>{course?.others_info?.price}</td>
                                    <td className='text-2xl text-red-600'><FaTrashAlt /></td>
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
    );
};

export default Cart;