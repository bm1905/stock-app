import { FETCH_TICKERS_INIT,
    FETCH_TICKERS_SUCCESS,
    FETCH_TICKERS_FAIL } from '../actions/types';

const INITIAL_STATE = {
    tickers: {
        data: [],
        errors: []
    }
}

export const tickersReducer = (state = INITIAL_STATE.tickers, action) => {
    switch(action.type) {
        case FETCH_TICKERS_INIT:
            return {...state, data: [], errors: []};
        case FETCH_TICKERS_SUCCESS:
            return {...state, data: action.tickers};
            case FETCH_TICKERS_FAIL:
                return Object.assign({}, state, {errors: action.errors, data: []});
        default:
            return state;
    }
};