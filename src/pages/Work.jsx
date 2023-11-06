import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Work() {
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
    };

    return (
        <div>
            <div className='work-links'>
                <Link to="/work" className={isActive('/work')}>
                    Website
                </Link>
                <Link to="/work/mobile" className={isActive('/work/mobile')}>
                    Mobile Application
                </Link>
            </div>
            <Outlet />
        </div>
    );
}


