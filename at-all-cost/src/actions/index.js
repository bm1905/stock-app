import { timeParse } from "d3-time-format";
import axiosService from '../services/axios-service';

import {
    FETCH_STOCKS,
    FETCH_DASHBOARD_DATA,
    FETCH_DASHBOARD_DATA_INIT,
    FETCH_DASHBOARD_DATA_SUCCESS,
    FETCH_DASHBOARD_DATA_FAIL,
    FETCH_TICKERS,
    FETCH_TICKERS_INIT,
    FETCH_TICKERS_SUCCESS,
    FETCH_TICKERS_FAIL
} from './types';

const axiosInstance = axiosService.getInstance();

const fetchDashboardDataInit = () => {
    return {
        type: FETCH_DASHBOARD_DATA_INIT
    }
}

const fetchDashboardDataSuccess = (dashboardStocks) => {
    return {
        type: FETCH_DASHBOARD_DATA_SUCCESS,
        dashboardStocks
    }
}

const fetchDashboardDataFail = (errors) => {
    return {
        type: FETCH_DASHBOARD_DATA_FAIL,
        errors
    }
}

export const fetchDashboardData = () => {
    return dispatch => {
        dispatch(fetchDashboardDataInit());

        axiosInstance.get(`/stocks`)
            .then(res => res.data.map(element => {
                var d = parseData(parseDate)(element);
                d.SP500Close = +d.SP500Close;
                d.AAPLClose = +d.AAPLClose;
                d.GEClose = +d.GEClose;
                return d;
                }))
            .then(dashboardStocks => dispatch(fetchDashboardDataSuccess(dashboardStocks)))
            .catch(({ response }) => dispatch(fetchDashboardDataFail(response.data.errors)))
    }
}

const parseData = (parse) => {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;
		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

const fetchTickerInit = () => {
    return {
        type: FETCH_TICKERS_INIT
    }
}

const fetchTickerSuccess = (tickers) => {
    return {
        type: FETCH_TICKERS_SUCCESS,
        tickers
    }
}

const fetchTickerFail = (errors) => {
    return {
        type: FETCH_TICKERS_FAIL,
        errors
    }
}

export const fetchTickers = () => {
    return dispatch => {
        dispatch(fetchTickerInit());

        axiosInstance.get(`/tickers`)
            .then(res => res.data)
            .then(tickers => dispatch(fetchTickerSuccess(tickers)))
            .catch(({ response }) => dispatch(fetchTickerFail(response.data.errors)))
    }
}