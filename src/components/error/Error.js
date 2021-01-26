import React from 'react';
import Proptypes from 'prop-types';
import './error.css';

const Error = ({mensaje}) => {
    return (
       <p className="error" >{mensaje}</p>
    );
};

Error.prototype = {
    mensaje: Proptypes.string.isRequired
}

export default Error;