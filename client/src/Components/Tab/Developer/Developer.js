import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import './Developer.scss';

function Developer() {
  return (
    <CardDeck>
      <Card className="developer">
        <Card.Img src="Bhrugu.jpg" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Bhrugu Sharma</Card.Title>
          <Card.Text>Full-Stack developer and Profesional in CSS</Card.Text>
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
        <Card.Img src="s4vvy.jpg" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Saheel Sapovadia</Card.Title>
          <Card.Text>Full-Stack developer and Profesional in CSS</Card.Text>
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
        <Card.Img src="gaurav.jpg" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Gaurav Suthar</Card.Title>
          <Card.Text>Full-Stack developer and Profesional in CSS</Card.Text>
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

export default Developer;
