import stocks from '../apis/stocks';
import { timeParse } from "d3-time-format";
import {
    FETCH_STOCKS
} from './types';

// Refactor this to const
function parseData(parse) {
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

// Yet to connect through redux
export function getData() {
    const requestApi = async() => {
        const response = await stocks.get('/stocks');
        return response.data.map(element => {
            var d = parseData(parseDate)(element);
            d.SP500Close = +d.SP500Close;
            d.AAPLClose = +d.AAPLClose;
            d.GEClose = +d.GEClose;
            return d;
            });
        };

	return requestApi();
}

// Refactor after api is ready
export const fetchStocks = sector => async dispatch => {
    const response = await stocks.get(`./stocks/${sector}`);

    dispatch({ type: FETCH_STOCKS, payload: response.data });
}
