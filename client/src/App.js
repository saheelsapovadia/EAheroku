import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from './Store/reducers/userReducer';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-C5GVGBFNY1'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ user: userReducer });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    console.log('App Component');
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Layout></Layout>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
