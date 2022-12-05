import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StarRated from '../Others/StarRated/StarRated';

const CourseCard = ({ course }) => {
    const { title, rating, introduction, thumbnail_url, _id } = course;

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl mx-3 mb-6">
            <figure><img src={thumbnail_url} alt="" /></figure>
            <div className="card-body">
                {
                    rating?.badge === 'New'
                        ? <div className="badge badge-accent badge-outline">{rating?.badge}</div>
                        : <div className="badge badge-secondary badge-outline">{rating?.badge}</div>
                }
                <h2 className="card-title">
                    {title}
                </h2>
                <p>
                    {
                        introduction?.length < 80 ? introduction : introduction.slice(0, 80) + '...'
                    }
                </p>
                <div className="card-actions justify-end">
                    <div className='w-[100%] flex items-center justify-between'>
                        <div className="rating">
                            <StarRated value={rating?.number}></StarRated>
                        </div>
                        <Link to={`/courses/${_id}`} className="btn btn-primary">View<FaArrowRight className='ml-1' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;