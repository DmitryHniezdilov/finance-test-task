import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Router from './Router';
import * as generalActions from './redux/actions/general';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(generalActions.receiveSocketTicker());

        return () => {
            dispatch(generalActions.disconnectSocketTicker());
        };
    }, []);

    return (
        <Router/>
    );
};

export default App;
