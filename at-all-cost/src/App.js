import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import Header from './components/shared/Header';
import DashboardPage from './components/dashboard/DashboardPage';

import { AboutUs } from './components/shared/AboutUs';
import { Footer } from './components/shared/Footer';

import * as actions from './actions';

import './App.css';

const store = require('./reducers').init();


// More routes to be added here
class App extends Component {
    componentWillUnmount() { }

    render() {
        return (
          <Provider store={store}>
            <BrowserRouter>
              <div className='App'>
                <ToastContainer />
                <Header />
                <Route exact path='/' component={DashboardPage} />
                <div className='container'>
                  <Switch>
                    {/* <Route exact path='/survey' component={Survey} /> */}
                    <Route exact path='/aboutUs' component={AboutUs} />
                    {/* <Route exact path='/stocks/:id' component={StockDetails} /> */}
                    {/* <Route exact path='/stock-lists' component={stockLists} /> */}
                  </Switch>
                </div>
                {/* <InfoFooter /> */}
                <Footer />
              </div>
            </BrowserRouter>
          </Provider>
        );
    }
}

export default App;