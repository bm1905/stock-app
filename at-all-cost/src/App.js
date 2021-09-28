// Library imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

// Custom imports
// TODO - Make everything default export
import Header from './components/shared/Header';
import DashboardPage from './components/dashboard/DashboardPage';
import { AboutUs } from './components/about-us/AboutUs';
import { Footer } from './components/shared/Footer';
import { GlobalStyles } from './components/theme/GlobalStyle';
import DarkThemeProvider from './components/theme/DarkThemeProvider';

import './App.css';

const { store, persistor } = require('./reducers').init();

function App() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <DarkThemeProvider>
            <GlobalStyles/>
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
                <Footer />
              </div>
            </BrowserRouter>
            </DarkThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;