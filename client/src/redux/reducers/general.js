import * as types from '../actionTypes';

const initialState = {
    tickers: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TICKER:
            return {
                ...state,
                tickers: [ ...state.tickers, action.ticker ],
            };

        default:
            return {
                ...state,
            };
    }
};
