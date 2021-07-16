import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link, Grid, Typography} from '@material-ui/core';
import {useStyles} from './styles';
import {PRICE_CHANGE_DIRECTION} from '../../constants';

const TickerItem = (props) => {
    const classes = useStyles();
    const { ticker, name, price, change, changeDirection, changePCT } = props;

    const CHANGE_DIRECTION_SYMBOLS = {
        [ PRICE_CHANGE_DIRECTION.equal ]: '',
        [ PRICE_CHANGE_DIRECTION.grow ]:  '+',
        [ PRICE_CHANGE_DIRECTION.drop ]:  '-',
    };

    const CHANGE_PCT_SYMBOLS = {
        [ PRICE_CHANGE_DIRECTION.equal ]: '',
        [ PRICE_CHANGE_DIRECTION.grow ]:  '↑',
        [ PRICE_CHANGE_DIRECTION.drop ]:  '↓',
    };

    return (
        <li
            className = { classes.listItem }>
            <Link
                noWrap
                className = { classes.link }
                color = 'inherit'
                component = { RouterLink }
                to = { `/${ticker}` }
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
                            {name}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        align = 'right'
                        xs = { 2 }>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            {price}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        align = 'right'
                        xs = { 2 }>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            {CHANGE_DIRECTION_SYMBOLS[ changeDirection ]} {change}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        align = 'right'
                        xs = { 2 }>
                        <Typography
                            component = 'span'
                            variant = 'body1'>
                            {CHANGE_PCT_SYMBOLS[ changeDirection ]} {changePCT} %
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
