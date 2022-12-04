import React from 'react';

const Courses = () => {
    return (
        <div className="drawer drawer-mobile mt-12">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {/* Main Content */}
            <div className="drawer-content flex flex-col items-center">
                {/* Button For Opening Sidebar */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-6">Categories</label>
                {/* Card Body */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
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
                </div>
            </div>
            {/* SideBar */}
            <div className="drawer-side" style={{ borderRight: "1px solid lightgray" }}>
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Courses;