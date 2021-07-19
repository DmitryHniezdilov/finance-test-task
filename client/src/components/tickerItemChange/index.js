import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';
import {PRICE_CHANGE_DIRECTION} from '../../constants';
import {useStyles} from './styles';

const CHANGE_DIRECTION_SYMBOLS = {
    [ PRICE_CHANGE_DIRECTION.equal ]: '',
    [ PRICE_CHANGE_DIRECTION.grow ]:  '+',
    [ PRICE_CHANGE_DIRECTION.drop ]:  '-',
};

const TickerItemChange = (props) => {
    const {changeDirection, change, ...other} = props;
    const classes = useStyles(props);

    const valueTickerItemChange = `${CHANGE_DIRECTION_SYMBOLS[ changeDirection ]}\u00A0${change}\u00A0$`;

    return (
        <Typography
            className = { classes.textChange }
            component = 'span'
            variant = 'body1'
            { ...other }>
            {valueTickerItemChange}
        </Typography>
    );
};

TickerItemChange.propTypes = {
    changeDirection: PropTypes.oneOf(
        [ PRICE_CHANGE_DIRECTION.grow, PRICE_CHANGE_DIRECTION.drop, PRICE_CHANGE_DIRECTION.equal ],
    ).isRequired,
    change: PropTypes.string,
};

export default TickerItemChange;
