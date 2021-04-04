import axios from 'axios';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import refreshTokenSetup from '../../utils/refreshToken';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';

const clientId =
  '957555850286-fdghjg3gfo010plts5uer77f3fpfc9c9.apps.googleusercontent.com';
class Login extends Component {
  render() {
    const onSuccess = (res) => {
      //console.log('result: ', res.tokenId);
      console.log('Login Success: currentUser:', res.profileObj);
      // alert(
      //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
      // );

      const result = res?.profileObj;
      const token = res?.tokenId;

      //execute the onLogin action
      this.props.onLogin(res.tokenId, this.props.history);

      //refresh the token
      refreshTokenSetup(res);
    };

    const onFailure = (res) => {
      console.log('Login failed: res:', res);
      alert(`Failed to login. 😢 Please try again`);
    };
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccess}
          onFailure={onFailure}
          accessType='offline'
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (token, history) => dispatch(actions.userLogin(token, history)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
