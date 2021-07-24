import * as types from '../actionTypes';
import io from 'socket.io-client';
import {SERVER_URL} from '../../constants';

const socket = io(SERVER_URL);

export const addTicker = (ticker) => ({ type: types.ADD_TICKER,  ticker});

export let receiveSocketTicker = () => (dispatch) => {
    socket.emit('start');
    socket.on('ticker', (ticker) => {
        dispatch(addTicker(ticker));
    });
};

export let disconnectSocketTicker = () => () => {
    socket.disconnect();
};
