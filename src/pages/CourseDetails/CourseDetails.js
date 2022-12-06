import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight, FaBook, FaDownload, FaEye, FaLaptop, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import StarRated from '../Others/StarRated/StarRated';

const CourseDetails = () => {
    const course = useLoaderData();
    const componentRef = useRef();
    const { title, rating, introduction, thumbnail_url, others_info } = course;
    const courses = [];

    // Get Course Button Action
    const handleGetCourse = () => {
        courses.push(course);
        const selectedCourses = localStorage.getItem('courses');
        if (selectedCourses) {
            const newCourses = JSON.parse(selectedCourses);
            const updateCourses = newCourses.filter(newCourse => newCourse._id !== course._id);
            updateCourses.push(course);
            localStorage.setItem('courses', JSON.stringify(updateCourses));
        }
        else {
            localStorage.setItem('courses', JSON.stringify(courses));
        }
    }

    // Download PDF Button Action
    const handleDownloadPDF = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'course_data',
        onAfterPrint: () => toast.success('PDF Download Successfull')
    });

    return (
        // Course Details
        <div className='grid lg:grid-cols-12 gap-6 p-6 w-full md:w-11/12 lg:w-11/12 xl:w-8/12 mx-auto'>
            {/* Details Content */}
            <div ref={componentRef} className='lg:col-span-7 p-3'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-primary font-bold my-6'>{title.toUpperCase()}</h1>
                {/* PDF Download Button */}
                <button onClick={handleDownloadPDF} className='btn btn-primary btn-outline'>Get PDF<FaDownload className='ml-3' /></button>
                <img src={thumbnail_url} alt="" className='w-full rounded my-6' />
                <h2 className='text-3xl md:text-4xl text-primary font-bold mt-12 mb-6'>Introduction</h2>
                <p>{introduction}</p>
            </div>
            {/* Details Info List */}
            <div className='lg:col-span-5 mt-6'>
                <ul className="menu bg-base-100 p-2">
                    {/* Price Button */}
                    <button className='btn btn-accent text-2xl font-bold mb-3'>Price
                        <span className='ml-3 text-primary'>
                            {
                                others_info?.price !== 0 ? others_info.price + '$' : 'Free'
                            }
                        </span>
                    </button>
                    {/* Info List */}
                    <li className='border-b-2'>
                        <p className='flex justify-between'>
                            <span>Study Mode: <b>{others_info?.study_mode}</b></span>
                            <FaLaptop className='text-accent text-2xl' />
                        </p>
                    </li>
                    <li className='border-b-2'>
                        <p className='flex justify-between'>
                            <span>Lectures: <b>{others_info?.lectures}</b></span>
                            <FaBook className='text-accent text-2xl' />
                        </p>
                    </li>
                    <li className='border-b-2'>
                        <p className='flex justify-between'>
                            <span>Enrolled: <b>{others_info?.enrolled} Students</b></span>
                            <FaUser className='text-accent text-2xl' />
                        </p>
                    </li>
                    <li className='border-b-2'>
                        <p className='flex justify-between'>
                            <span>Course View: <b>{others_info?.total_view}</b></span>
                            <FaEye className='text-accent text-2xl' />
                        </p>
                    </li>
                    {/* Rating */}
                    <span className='mt-3'>
                        <StarRated value={rating?.number}></StarRated>
                    </span>
                    {/* Link To Get Course */}
                    <span className='w-full flex justify-end'>
                        <Link to={`/checkout/${course?._id}`} onClick={handleGetCourse} className='btn btn-primary btn-outline'>Get Course<FaArrowRight className='ml-3' /></Link>
                    </span>
                </ul>
            </div>
        </div>
    );
};

export default CourseDetails;