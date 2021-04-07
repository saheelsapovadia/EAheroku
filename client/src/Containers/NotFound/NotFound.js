import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
export default class NotFound extends Component {
  returnHome = (id) => {
    this.props.history.push({
      pathname: '/',
    });
  };
  render() {
    return (
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className='mt-5'>404</h1>
        <h4>You are lost..</h4>
        <Button onClick={() => this.returnHome()} variant='link'>
          return to happiness...
        </Button>
      </div>
    );
  }
}
