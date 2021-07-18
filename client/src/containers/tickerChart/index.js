import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as generalActions from '../../redux/actions/general';
import { useRouteMatch } from 'react-router-dom';
import {Typography, Paper} from '@material-ui/core';
import Title from '../../conponents/title';
import Chart from '../../conponents/chart';
import {TICKERS_NAMES} from '../../constants';
import {useStyles} from './styles';

// Generate Data
const createData = (time, amount) => ({ time, amount });

const TickerChart = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { tickers } = useSelector((state) => state.general);
    const { params } = useRouteMatch();
    const { ticker: tickerName } = params;

    const filteredTickerData = tickers.reduce((acc, ticker) => {
        const currentTicker = ticker.find((item) => item.ticker === tickerName);

        return [ ...acc, currentTicker ];
    }, []);

    const normalizedTickerData = filteredTickerData.map((ticker) => {
        const date = new Date(ticker.last_trade_time);
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return createData(`${hours}:${minutes}`, ticker.price);
    });

    const { price, last_trade_time: tradeTime } = filteredTickerData[ filteredTickerData.length - 1 ] || {};
    const optionsTradeTime = {day: 'numeric', month: 'long', year: 'numeric' };
    const formattedTradeTime = new Date(tradeTime)
        .toLocaleString('en-US', optionsTradeTime);


    useEffect(() => {
        dispatch(generalActions.receiveSocketTicker());

        return () => {
            dispatch(generalActions.disconnectSocketTicker());
        };
    }, []);

    return (
        <Paper className = { classes.paper }>
            <Title>
                { TICKERS_NAMES[ tickerName ] }
            </Title>
            <Typography
                component = 'p'
                variant = 'h4'>
                {`${price} $`}
            </Typography>
            <Typography
                color = 'textSecondary'>
                {`on ${formattedTradeTime}`}
            </Typography>
            <Chart
                data = { normalizedTickerData }
            />
        </Paper>
    );
};

export default TickerChart;
