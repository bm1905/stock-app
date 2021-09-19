import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import DashboardChart from './DashboardChart';

import * as actions from '../../actions';

class DashboardPage extends React.Component {

    componentDidMount() {
		this.props.dispatch(actions.fetchDashboardData());
	}

	render() {
		const options = [
			'SP500Close', 'GEClose'
		  ];

		const defaultOption = options[0];

		if (this.props.dashboardStocks === null || this.props.dashboardStocks.length <= 0) {
			console.log("First", this.state)
			return <div>Loading...</div>
		}

		console.log("DashboardStocks", this.props.dashboardStocks);

		return (
			<div>
				<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
				<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
				<DashboardChart data={this.props.dashboardStocks} options={options} />
			</div>
		)
    }
};

const mapStateToProps = (state) => {
	console.log("State", state);
    return {
		dashboardStocks: state.dashboardStocks.data
    };
}

export default connect(mapStateToProps)(DashboardPage);