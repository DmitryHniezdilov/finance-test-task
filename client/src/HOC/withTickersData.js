import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from '../utils';
import * as generalActions from '../redux/actions/general';

const withTickersData = (Component) => {
    class WithTickersData extends React.PureComponent {
        componentDidMount = () => this.props.receiveSocketTicker();

        componentWillUnmount = () => this.props.disconnectSocketTicker();

        render = () => {
            return (
                <Component/>
            );
        }
    }

    WithTickersData.propTypes = {
        receiveSocketTicker:    PropTypes.func,
        disconnectSocketTicker: PropTypes.func,
    };

    return WithTickersData;
};

const mapDispatchToProps = (dispatch) => {
    return {
        receiveSocketTicker:    () => dispatch(generalActions.receiveSocketTicker()),
        disconnectSocketTicker: () => dispatch(generalActions.disconnectSocketTicker()),
    };
};

export {withTickersData as TestableWithTickersData};
export default compose(
    connect(null, mapDispatchToProps),
    withTickersData,
);
