import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="drawer-side" style={{ borderRight: "1px solid lightgray" }}>
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                {/* Sidebar content here */}
                {
                    categories.map(category => <li key={category?.id}><Link to={`/categories/${category.id}`}>{category?.name}</Link></li>)
                }
            </ul>

        </div>
    );
};

export default Sidebar;