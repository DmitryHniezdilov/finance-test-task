import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {TableRow, TableCell, Typography} from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TickerItemChange from '../../components/TickerItemChange';
import TickerItemPct from '../../components/TickerItemPct';
import {PRICE_CHANGE_DIRECTION} from '../../constants';
import {useStyles} from './styles';

const TickerItem = (props) => {
    const { ticker, name, price, change, changeDirection, changePCT } = props;
    const classes = useStyles();
    let history = useHistory();

    const handleClick = () => {
        history.push(`/${ticker}`);
    };

    return (
        <TableRow
            hover
            className = { classes.tableRow }
            role = 'row'
            onClick = { handleClick }>
            <TableCell>
                <div className = { classes.tickerWrap }>
                    <div
                        className = { classes.ticker }>
                        {ticker}
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <Typography
                    component = 'span'
                    variant = 'body1'>
                    {name}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography
                    component = 'span'
                    variant = 'body1'>
                    {`${price}\u00A0$`}
                </Typography>
            </TableCell>
            <TableCell align = 'right'>
                <TickerItemChange
                    change = { change }
                    changeDirection = { changeDirection }
                />
            </TableCell>
            <TableCell align = 'right'>
                <TickerItemPct
                    changeDirection = { changeDirection }
                    changePCT = { changePCT }
                />
            </TableCell>
            <TableCell align = 'right'>
                <ControlPointIcon/>
            </TableCell>
        </TableRow>
    );
};

TickerItem.propTypes = {
    changeDirection: PropTypes.oneOf(
        [ PRICE_CHANGE_DIRECTION.grow, PRICE_CHANGE_DIRECTION.drop, PRICE_CHANGE_DIRECTION.equal ],
    ).isRequired,
    changePCT: PropTypes.string,
    change:    PropTypes.string,
    ticker:    PropTypes.string,
    name:      PropTypes.string,
};

export default TickerItem;
