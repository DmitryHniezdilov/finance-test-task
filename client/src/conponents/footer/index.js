import React from 'react';
import { Box, IconButton, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import {useStyles} from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Box
            align = 'center'
            component = 'footer'
            m = { 3 }>
            <Typography
                color = 'textSecondary'
                component = 'span'
                variant = 'subtitle1'>
                "Finance Test Task" by Dmitry Hniezdilov:&nbsp;
            </Typography>
            <IconButton
                className = { classes.icon }
                component = { Link }
                href = 'https://github.com/DmitryHniezdilov/'
                rel = 'noreferrer'
                size = 'small'
                target = '_blank'>
                <GitHubIcon />
            </IconButton>
        </Box>
    );
};

export default Footer;
