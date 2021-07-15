import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link, Grid, Typography} from '@material-ui/core';
import {useStyles} from './styles';

// eslint-disable-next-line max-params
const TickerItem = ({ ticker, name, price, change, change_percent }) => {
    const classes = useStyles();

    return (
        <li
            className = { classes.listItem }>
            <Link
                noWrap
                className = { classes.link }
                color = 'inherit'
                component = { RouterLink }
                to = { `/ticker/${ticker}` }
                underline = 'none'
                variant = 'body2'>
                <Grid
                    container
                    alignItems = 'center'
                    className = { classes.listItemInner }
                    direction = 'row'
                    justifyContent = 'flex-start'>
                    <Grid
                        item
                        xs = { 5 }>
                        <div className = { classes.tickerWrap }>
                            <div
                                className = { classes.ticker }>
                                {ticker}
                            </div>
                        </div>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            {`name ${name}`}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        align = 'center'
                        xs = { 2 }>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            {price}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        align = 'center'
                        xs = { 2 }>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            {change}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        align = 'center'
                        xs = { 2 }>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            {change_percent}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        align = 'center'
                        xs = { 1 }>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            +
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </li>
    );
};

export default TickerItem;
