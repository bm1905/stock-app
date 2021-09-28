import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { dashboardReducer } from './dashboard-reducer';
import { tickersReducer } from './tickers-reducer';
import { themeReducer } from './theme-reducer';

export const init = () => {
    const reducer = combineReducers({
        form: formReducer,
        dashboardStocks: dashboardReducer,
        tickers: tickersReducer,
        theme: themeReducer
    });

    const persistConfig = {
        key: 'darkTheme',
        storage: storage,
        whitelist: ['theme']
    };

    const pReducer = persistReducer(persistConfig, reducer);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
    const persistor = persistStore(store);

    return { persistor, store };
}