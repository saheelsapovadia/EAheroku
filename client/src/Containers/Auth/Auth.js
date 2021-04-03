import React, { Component } from 'react';
import Logout from '../../Components/Auth/Logout';
import Login from '../../Components/Auth/Login';
import { connect } from 'react-redux';
class Auth extends Component {
  // componentDidMount() {
  //   console.log(this.props.history);
  //   if (this.props.isSignedIn) this.props.history.push('/');
  // }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log(this.props.history);
      if (this.props.isSignedIn) this.props.history.push('/');
    }
  }
  render() {
    console.log(this.props.history);
    return <div>{this.props.isSignedIn ? <Logout /> : <Login />}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.user.isSignedIn,
  };
};

export default connect(mapStateToProps)(Auth);
