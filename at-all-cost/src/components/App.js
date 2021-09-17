import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './shared/Header';
import history from '../history';
import ShowDashboard from './pages/ShowDashboard';

// More routes to be added here
class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={ShowDashboard} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;