import React from 'react';
import Banner from '../../assets/banner.jpg';

const Home = () => {
    return (
        <div className="hero h-[60vh]" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <h1 className="mb-5 text-4xl md:text-6xl font-bold">Your Bright Future Is Our Mission</h1>
            </div>
        </div>
    );
};

export default Home;