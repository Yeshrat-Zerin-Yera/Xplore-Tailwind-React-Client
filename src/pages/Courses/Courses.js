import React from 'react';

const Courses = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2'>
                    <div className="card w-80 bg-base-100 shadow-xl mr-6">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl mr-6">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl mr-6">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="drawer-side">
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