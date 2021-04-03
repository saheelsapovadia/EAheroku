import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/index';
const clientId =
  '957555850286-fdghjg3gfo010plts5uer77f3fpfc9c9.apps.googleusercontent.com';

function Logout(props) {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.onLogout();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.userLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
