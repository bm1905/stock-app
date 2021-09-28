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

		return (
			<div className="dashboard-container container">
				<div className="dashboard-container-text">
					<h1>At All Cost</h1>
					<h4>Introducing new baby boomers blah blah YOLO. Destroy all wealth or become billionaire. Enjoy the life!!!</h4>
				</div>
				<div className="dashboard-container-options">
					<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
					<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
				</div>
				<div className="dashboard-container-chart">
					<DashboardChart data={this.props.dashboardStocks} options={options} />
				</div>
			</div>
		)
    }
};

const mapStateToProps = (state) => {
    return {
		dashboardStocks: state.dashboardStocks.data
    };
}

export default connect(mapStateToProps)(DashboardPage);