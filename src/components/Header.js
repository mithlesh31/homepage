import React from 'react';

import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <div>
                Logo
            </div>
            <div/>
            <div>
                <a href="#">Home</a>
                <a href="#">Patients</a>
                <a href="#">Appointments</a>
            </div>
        </div>
    );
};

export default Header;