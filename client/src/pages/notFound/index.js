import React from 'react';
import { Typography } from '@material-ui/core';
import PageLayout from '../../conponents/pageLayout';

const NotFound = () => {
    return (
        <PageLayout>
            <Typography
                align = 'center'
                variant = 'h5'>
                Page not found
            </Typography>
        </PageLayout>
    );
};

export default NotFound;