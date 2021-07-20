import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {PRICE_CHANGE_DIRECTION} from '../../constants';
import {useStyles} from './styles';

const TickerItemPct = (props) => {
    const {changeDirection, changePCT, ...other} = props;
    const classes = useStyles(props);

    return (
        <div className = { classes.pctWrap }>
            <div
                className = { classes.pctInner }
                { ...other }>
                { changeDirection === 'grow' && <ExpandLessIcon data-test = 'icon-grow' fontSize = 'small'/>}
                { changeDirection === 'drop' && <ExpandMoreIcon data-test = 'icon-drop' fontSize = 'small'/>}
                <Typography
                    component = 'span'
                    variant = 'body1'>
                    {`${changePCT}\u00A0%`}
                </Typography>
            </div>
        </div>
    );
};

TickerItemPct.propTypes = {
    changeDirection: PropTypes.oneOf(
        [ PRICE_CHANGE_DIRECTION.grow, PRICE_CHANGE_DIRECTION.drop, PRICE_CHANGE_DIRECTION.equal ],
    ).isRequired,
    change: PropTypes.string,
};

export default TickerItemPct;
