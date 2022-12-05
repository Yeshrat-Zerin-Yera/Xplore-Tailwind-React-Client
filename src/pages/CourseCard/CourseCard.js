import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StarRated from '../../pages/Others/StarRated/StarRated';

const CourseCard = ({ course }) => {
    const { title, rating, introduction, thumbnail_url, _id, others_info } = course;

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mx-3 mb-6">
            {/* Card Image */}
            <figure><img src={thumbnail_url} alt="" /></figure>
            {/* Card Body */}
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    {/* Badge */}
                    <div>
                        {
                            rating?.badge === 'New'
                                ? <div className="badge badge-accent badge-outline">{rating?.badge}</div>
                                : <div className="badge badge-secondary badge-outline">{rating?.badge}</div>
                        }
                    </div>
                    {/* Price */}
                    <div>
                        {
                            others_info?.price === 0
                                ? <div className="text-warning text-2xl font-bold">Free</div>
                                : <div className="text-warning text-2xl font-bold">{others_info?.price}$</div>
                        }
                    </div>
                </div>
                {/* Title */}
                <h2 className="card-title">
                    {title}
                </h2>
                {/* Introduction */}
                <p>
                    {
                        introduction?.length < 80 ? introduction : introduction.slice(0, 80) + '...'
                    }
                </p>
                <div className="card-actions justify-end">
                    <div className='w-[100%] flex items-center justify-between'>
                        {/* Star Rating */}
                        <div className="rating">
                            <StarRated value={rating?.number}></StarRated>
                        </div>
                        {/* Go To Details Button */}
                        <Link to={`/courses/${_id}`} className="btn btn-primary">View<FaArrowRight className='ml-1' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;