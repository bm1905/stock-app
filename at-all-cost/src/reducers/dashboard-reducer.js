import { FETCH_DASHBOARD_DATA_INIT, 
    FETCH_DASHBOARD_DATA_SUCCESS, 
    FETCH_DASHBOARD_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {
    dashboardStocks: {
        data: {},
        errors: []
    }
}

export const dashboardReducer = (state = INITIAL_STATE.dashboardStocks, action) => {
    switch(action.type) {
        case FETCH_DASHBOARD_DATA_INIT:
            return {...state, data: {}, errors: []};
        case FETCH_DASHBOARD_DATA_SUCCESS:
            return {...state, data: action.dashboardStocks};
            case FETCH_DASHBOARD_DATA_FAIL:
                return Object.assign({}, state, {errors: action.errors, data: {}});
        default:
            return state;
    }
};