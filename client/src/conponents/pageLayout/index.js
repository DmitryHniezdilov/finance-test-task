import React from 'react';
import { Box, CssBaseline, Container  } from '@material-ui/core';
import Footer from '../footer';
import Header from '../header';
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
            <Footer />
        </Box>
    );
};

export default PageLayout;
