import React from 'react';
import PropTypes from 'prop-types';
import { Box, CssBaseline, Container  } from '@material-ui/core';
import Footer from '../Footer';
import Header from '../Header';
import {useStyles} from './styles';

const PageLayout = ({children}) => {
    const classes = useStyles();

    return (
        <Box
            className = { classes.pageLayout }>
            <Header/>
            <CssBaseline />
            <Container
                className = { classes.container }
                maxWidth = 'sm'>

                <main className = { classes.toolbar }>{children}</main>

            </Container>
            <Footer/>
        </Box>
    );
};

PageLayout.propTypes = {
    children: PropTypes.node,
};

export default PageLayout;
