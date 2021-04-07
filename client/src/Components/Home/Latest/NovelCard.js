import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';
import './NovelCard.scss';
class NovelCard extends Component {
  render() {
    return (
      <CardDeck style={{ display: 'flex' }}>
        <Card
          style={{ width: '15rem', margin: '2rem' }}
          onClick={this.props.clicked}
          className=' novelCard lg md sm'
        >
          <Card.Img src={this.props.image} />

          <Card.Body className='px-2'>
            <Card.Title className='my-0 py-0 b'>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}
export default NovelCard;
