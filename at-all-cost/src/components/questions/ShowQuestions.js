import React from 'react';
import { connect } from 'react-redux';
import { fetchStocks } from '../../../actions';
import QuestionForm from '../forms/QuestionForm';

class ShowQuestions extends React.Component {

    onSubmit = sector => {
        this.props.fetchStocks(sector);
    }

    render() {
        return (
            <div>
                <h3>Submit</h3>
                <QuestionForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { fetchStocks })(ShowQuestions);