import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';

import '../Developer/Developer.scss';

function Owners() {
  return (
    <CardDeck style={{ width: '60%' }}>
      <Card className="developer">
        <Card.Img
          src="Anne.jpg"
          className="developer-img"
          style={{ img: '60%' }}
        />
        <Card.Body className="DeveloperBody">
          <Card.Title>Anne</Card.Title>
          <Card.Text>Founder</Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer className="developer-footer">
          <Button style={{ backgroundColor: 'black' }}>
            <a href="https://ko-fi.com/M4M248BM9" style={{ color: 'white' }}>
              Support EATranslations
            </a>
          </Button>{' '}
        </Card.Footer>
      </Card>
      <Card className="developer">
        <Card.Img src="Ash.jpg" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Ashlyn Rose</Card.Title>
          <Card.Text>Managing Director</Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer className="developer-footer">
          <Button style={{ backgroundColor: 'black' }}>
            <a href="https://ko-fi.com/M4M248BM9" style={{ color: 'white' }}>
              Support EATranslations
            </a>
          </Button>{' '}
        </Card.Footer>
      </Card>
    </CardDeck>
  );
}

export default Owners;
