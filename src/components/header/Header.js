import React from 'react';
import './header.css';
import Proptypes from 'prop-types'

const Header = ({titulo}) => {
    return (
        <nav className="header">
            <div className="titulo nav-wrapper ">
               <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    );
};

Header.prototype = {
    titulo: Proptypes.string.isRequired,
}

export default Header;