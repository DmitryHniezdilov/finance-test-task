import React from 'react';
import {Typography, Paper} from '@material-ui/core';
import Title from '../../conponents/title';
import Chart from '../../conponents/chart';
import {useStyles} from './styles';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', 2500),
];


const TickerChart = () => {
    const classes = useStyles();

    return (
        <Paper className = { classes.paper }>
            <Title>
                Tickers name
            </Title>
            <Typography
                component = 'p'
                variant = 'h4'>
                Current price $
            </Typography>
            <Typography
                color = 'textSecondary'>
                on 15 March, 2019 ( current data )
            </Typography>
            <Chart
                data = { data }
            />
        </Paper>
    );
};

export default TickerChart;
