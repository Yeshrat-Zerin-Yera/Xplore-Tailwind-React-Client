import React from 'react';

const Sidebar = () => {
    return (
        <div className="drawer-side" style={{ borderRight: "1px solid lightgray" }}>
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                {/* Sidebar content here */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>

        </div>
    );
};

export default Sidebar;