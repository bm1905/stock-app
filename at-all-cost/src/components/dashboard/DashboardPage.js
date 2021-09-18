import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import DashboardChart from './DashboardChart';
import { timeParse } from "d3-time-format";

import * as actions from '../../actions';

class DashboardPage extends React.Component {

    componentDidMount() {
		// getData().then(data => {
		// 	this.setState({ data })
		// })

		this.props.dispatch(actions.fetchDashboardData());

	}

	render() {


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
// export function getData() {
//     const requestApi = async() => {
//         const response = await stocks.get('/stocks');
//         return response.data.map(element => {
//             var d = parseData(parseDate)(element);
//             d.SP500Close = +d.SP500Close;
//             d.AAPLClose = +d.AAPLClose;
//             d.GEClose = +d.GEClose;
//             return d;
//             });
//         };

// 	return requestApi();
// }


		const options = [
			'SP500Close', 'GEClose'
		  ];
		const defaultOption = options[0];


		if (this.props.dashboardStocks == null) {
			return <div>Loading...</div>
		}

		console.log("DashboardStocks", this.props.dashboardStocks);

		return (
			<div>
				{/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
				<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /> */}
				{/* {this.props.dashboardStocks.map(a => <h1>{a}</h1>)} */}

				{/* <h1>{this.props.dashboardStocks}</h1> */}

				<DashboardChart data={this.props.dashboardStocks} options={options} />
			</div>
		)
    }


    // render() {
	// 	const options = [
	// 		'SP500Close', 'GEClose'
	// 	  ];
	// 	const defaultOption = options[0];

    //     // Will display spinner here
	// 	if (this.state == null) {
	// 		return <div>Loading...</div>
	// 	}
	// 	return (
	// 		<div>
	// 			<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
	// 			<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

	// 			<DashboardChart data={this.state.data} options={options} />
	// 		</div>
            
	// 	)
    // }
};

const mapStateToProps = (state) => {
	console.log(state);
    return {
	
		dashboardStocks: state.dashboardStocks.data
    };
}

export default connect(mapStateToProps)(DashboardPage);