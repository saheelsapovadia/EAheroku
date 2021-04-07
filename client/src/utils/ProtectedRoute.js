import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as actions from '../Store/actions/index';
class ProtectedRoute extends Component {
  render() {
    console.log('Layout Component');
    // if (localStorage.getItem('userToken') !== null) {
    //   this.props.userLogin(localStorage.getItem('userToken'));
    // }
    const { component: Component, ...props } = this.props;
    console.log('ProtectedRoute');
    return (
      <Route
        {...props}
        render={(props) =>
          this.props.isSignedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to='/login' />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.user.isSignedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch(actions.userLogin(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
