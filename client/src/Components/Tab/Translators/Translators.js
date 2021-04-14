import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import '../Developer/Developer.scss';

const Translators = () => {
  return (
    <CardDeck style={{ width: '1300px' }}>
      <Card className="developer">
        <Card.Img src="Sang.png" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Sang</Card.Title>
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
        <Card.Img src="Lumist.png" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Lumist</Card.Title>
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
        <Card.Img src="Addison_1.png" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Addison</Card.Title>
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
        <Card.Img src="Traffy_2.png" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Traffy</Card.Title>
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
        <Card.Img src="Rita_2.png" className="developer-img" />
        <Card.Body className="DeveloperBody">
          <Card.Title>Rita</Card.Title>
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
};

export default Translators;
