import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './LoadingNovelCard.scss';
export default class LoadingNovelCard extends Component {
  render() {
    return (
      <Card
        style={{ width: '15rem', margin: '2rem' }}
        onClick={this.props.clicked}
        className='is-loading'
      >
        <div className='image'></div>

        <Card.Body>
          <Card.Title className='test'></Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
