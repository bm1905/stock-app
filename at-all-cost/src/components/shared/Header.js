import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="test ui secondary pointing menu">
            <Link to="/" className="item">What the Duck!!</Link>
            <div className="right menu">
                <Link to="/" className="item">All Ducks!!</Link>
            </div>
        </div>
    )
};

export default Header;