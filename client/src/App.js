import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from './Store/reducers/userReducer';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
// import { createBrowserHistory } from 'history';

// const trackingId = 'G-FXG6P09SHJ'; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ user: userReducer });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const history = createBrowserHistory();
history.listen((location) => {
  console.log('location pathname: ', location.pathname);
  ReactGA.pageview(location.pathname + location.search);
});
class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-194302215-1');
  }
  render() {
    console.log('App Component');
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <div>
            <Layout></Layout>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
