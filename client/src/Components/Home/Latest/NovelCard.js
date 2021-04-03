import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';

class Latest extends Component {
  render() {
    return (
      <CardDeck>
        <Card
          style={{ width: '15rem', margin: '2rem' }}
          onClick={this.props.clicked}
        >
          <Card.Img
            width='100%'
            //height='300px'
            variant='top'
            src={this.props.image}
          />

          <Card.Body className='px-2'>
            <Card.Title className='my-0 py-0 b' style={{ fontSize: '0.9 rem' }}>
              {this.props.title}
            </Card.Title>

            <Card.Text className='mb-0 ' style={{ fontSize: '1em' }}>
              {this.props.author}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}
export default Latest;
