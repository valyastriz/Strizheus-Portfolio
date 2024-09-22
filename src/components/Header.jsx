import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="text-white sticky-top w-100">
            <div className="container d-flex justify-content-between">
                <h1 className="header-title pt-1" style={{ whiteSpace: 'nowrap', fontSize: '2.5rem' }}>Valya Strizheus</h1>
                <Navigation /> {/* This will include the navigation component */}
            </div>

        </header>
    );
};

export default Header;