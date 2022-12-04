import React from 'react';

const CourseCard = () => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl mx-3 mb-6">
            <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;