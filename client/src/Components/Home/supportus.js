import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap/';

class supportUs extends Component {
  render() {
    return (
      <Jumbotron
        className='my-0 mx-auto'
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <h3 className='mx-auto mb-4'>Support EA Translations</h3>
        <h6
          className='mb-4'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Your donations will go towards site costs and management.{' '}
        </h6>
        <Button variant='warning'>
          <img
            className='mx-1 mb-2'
            width='25px'
            height='20px'
            src='ko-fi.jpg'
            alt='Ko-fi'
          ></img>
          Support EA
        </Button>
      </Jumbotron>
    );
  }
}

export default supportUs;