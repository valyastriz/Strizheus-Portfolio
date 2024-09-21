import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="bg-dark text-white p-3 sticky-top w-100">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="header-title">Valya Strizheus</h1>
                <Navigation /> {/* This will include the navigation component */}
            </div>

        </header>
    );
};

export default Header;