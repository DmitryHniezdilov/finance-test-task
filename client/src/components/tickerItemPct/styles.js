import {makeStyles} from '@material-ui/core/styles';
import {PRICE_CHANGE_DIRECTION} from '../../constants';

export const useStyles = makeStyles({
    pctWrap: {
        display:    'inline-block',
        paddingTop: '4px',
    },
    pctInner: {
        display:      'flex',
        alignItems:   'center',
        padding:      '0 8px',
        borderRadius: '8px',
        width:        'min-content',
        color:        (props) => {
            if (props.changeDirection === PRICE_CHANGE_DIRECTION.grow) {
                return '#137333';
            }

            if (props.changeDirection === PRICE_CHANGE_DIRECTION.drop) {
                return '#a50e0e';
            }

            return 'rgba(0, 0, 0, 0.87)';
        },
        background: (props) => {
            if (props.changeDirection === PRICE_CHANGE_DIRECTION.grow) {
                return '#e6f4ea';
            }

            if (props.changeDirection === PRICE_CHANGE_DIRECTION.drop) {
                return '#fce8e6';
            }

            return 'transparent';
        },
    },
});
