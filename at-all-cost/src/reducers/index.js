import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import { dashboardReducer } from './dashboard-reducer';
import { tickersReducer } from './tickers-reducer';

export const init = () => {

    const reducer = combineReducers({
        form: formReducer,
        dashboardStocks: dashboardReducer,
        tickers: tickersReducer
    });
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

    return store;
}

// More reducers to be added