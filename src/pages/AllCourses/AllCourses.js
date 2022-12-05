import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Sidebar from '../Sidebar/Sidebar';

const AllCourses = () => {
    const courses = useLoaderData();

    return (
        <div className="drawer drawer-mobile mt-12">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {/* Main Content */}
            <div className="drawer-content flex flex-col items-center">
                {/* Button For Opening Sidebar */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-6">Categories</label>
                {/* Card Body */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                    {
                        courses.map(course => <CourseCard key={course?._id} course={course}></CourseCard>)
                    }
                </div>
            </div>
            {/* SideBar */}
            <Sidebar></Sidebar>
        </div >
    );
};

export default AllCourses;