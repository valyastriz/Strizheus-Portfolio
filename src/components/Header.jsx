import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <h1>Valya Strizheus</h1>
            <Navigation /> {/* This will include the navigation component */}
        </header>
    );
};

export default Header;