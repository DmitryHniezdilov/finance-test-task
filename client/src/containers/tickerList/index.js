import React from 'react';
import {useSelector} from 'react-redux';
import {Typography, Table, TableBody, Paper} from '@material-ui/core';
import TickerItem from '../../components/tickerItem';
import Title from '../../components/title';
import {PRICE_CHANGE_DIRECTION, TICKERS_NAMES} from '../../constants';
import {useStyles} from './styles';

const TickerList = () => {
    const classes = useStyles();
    const { tickers } = useSelector((state) => state.general);
    const currentTickers = tickers[ tickers.length - 1 ] || [];
    const previousTickers = tickers[ tickers.length - 2 ] || [];

    return (
        <>
            { currentTickers.length === 0 && (
                <Typography
                    align = 'center'
                    component = 'span'
                    data-test = 'no-data-text'
                    variant = 'h5'>
                    Please run server to give data
                </Typography>
            )}

            { currentTickers.length !== 0 && (
                <Paper className = { classes.paper }>
                    <Title>
                        Interested Promotions
                    </Title>
                    <Table
                        aria-label = 'tickers table'
                        mt = { 3 }
                        size = 'small'>
                        <TableBody role = 'rowgroup'>
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
                        </TableBody>
                    </Table>
                </Paper>
            )}
        </>
    );
};

export default TickerList;
