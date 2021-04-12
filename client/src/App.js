import React, { Component } from 'react';
import Layout from './Containers/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from './Store/reducers/userReducer';
import thunk from 'redux-thunk';
// import ReactGA from 'react-ga';
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
// const history = createBrowserHistory();

// Initialize google analytics page view tracking
// history.listen((location) => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });
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
