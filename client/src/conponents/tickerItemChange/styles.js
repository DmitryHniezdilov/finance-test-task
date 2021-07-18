import {makeStyles} from '@material-ui/core/styles';
import {PRICE_CHANGE_DIRECTION} from '../../constants';

export const useStyles = makeStyles({
    textChange: {
        color: (props) => {
            if (props.changeDirection === PRICE_CHANGE_DIRECTION.grow) {
                return '#137333';
            } else if (props.changeDirection === PRICE_CHANGE_DIRECTION.drop) {
                return '#a50e0e';
            } else {
                return 'rgba(0, 0, 0, 0.87)';
            }
        },
    },
});
