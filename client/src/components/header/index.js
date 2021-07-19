import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link, Typography, Box} from '@material-ui/core';

const Header = () => {
    return (
        <Box
            align = 'center'
            component = 'header'
            m = { 4 }>
            <Link
                noWrap
                color = 'primary'
                component = { RouterLink }
                to = '/'
                variant = 'body2'>
                <Typography
                    align = 'center'
                    color = 'primary'
                    component = 'h1'
                    display = 'inline'
                    variant = 'h4'>
                    Finance Test Task
                </Typography>
            </Link>
        </Box>
    );
};

export default Header;
