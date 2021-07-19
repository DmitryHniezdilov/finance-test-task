import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

const Title = ({children}) => {
    return (
        <Typography
            gutterBottom
            color = 'primary'
            component = 'h2'
            variant = 'h6'>
            {children}
        </Typography>
    );
};

Title.propTypes = {
    children: PropTypes.node,
};

export default Title;
