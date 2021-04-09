import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';
import './NovelCard.scss';
class NovelCard extends Component {
  render() {
    return (
      <Card
        //style={{ width: '15rem', margin: '2rem' }}
        onClick={this.props.clicked}
        className=" novelCard"
      >
        <Card.Img src={this.props.image} />

        <Card.Body className="px-2">{this.props.title}</Card.Body>
      </Card>
    );
  }
}
export default NovelCard;
