import React, { useEffect } from 'react';
import TickerItem from '../../conponents/tickerItem';
import { useDispatch, useSelector } from 'react-redux';
import * as generalActions from '../../redux/actions/general';
import {PRICE_CHANGE_DIRECTION, TICKERS_NAMES} from '../../constants';
import {useStyles} from './styles';

const TickerList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { tickers } = useSelector((state) => state.general);
    const currentTickers = tickers[ tickers.length - 1 ] || [];
    const previousTickers = tickers[ tickers.length - 2 ] || [];

    useEffect(() => {
        dispatch(generalActions.receiveSocketTicker());

        return () => {
            dispatch(generalActions.disconnectSocketTicker());
        };
    }, []);


    return (
        <ul className = { classes.list }>
            {currentTickers.map((row, index) => {
                const {ticker, price } = row;
                const {price: previousTickerPrice} = previousTickers[ index ] || {price};
                const change = Math.abs(price - previousTickerPrice).toFixed(2);
                const changePCT = Math.abs((price - previousTickerPrice) / previousTickerPrice * 100).toFixed(2);

                let changeDirection = PRICE_CHANGE_DIRECTION.equal;

                if (price > previousTickerPrice) {
                    changeDirection = PRICE_CHANGE_DIRECTION.grow;
                }

                if (price < previousTickerPrice) {
                    changeDirection =  PRICE_CHANGE_DIRECTION.drop;
                }

                return (
                    <TickerItem
                        change = { change }
                        changeDirection = { changeDirection }
                        changePCT = { changePCT }
                        key = { ticker }
                        name =   { TICKERS_NAMES[ ticker ] }
                        price =  { price }
                        ticker = { ticker }
                    />
                );
            })}
        </ul>
    );
};

export default TickerList;
