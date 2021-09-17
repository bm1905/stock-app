import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import { getData } from '../../actions';
import DashboardChart from './dashboard/DashboardChart';

class ShowDashboard extends React.Component {

    componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}

    render() {
		const options = [
			'SP500Close', 'GEClose'
		  ];
		const defaultOption = options[0];

        // Will display spinner here
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
				<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

				<DashboardChart data={this.state.data} options={options} />
			</div>
            
		)
    }
};

const mapStateToProps = (state) => {
    return {
        stocks: Object.values(state.stocks)
    };
}

export default connect(mapStateToProps, {  })(ShowDashboard);