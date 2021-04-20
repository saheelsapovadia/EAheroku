import React from 'react';
import { Card, CardDeck, Button, Row, Col } from 'react-bootstrap';
import './Developer.scss';

function Developer() {
  return (
    <Row sm='1' md='2' lg='3'>
      <Col className='test'>
        <Card>
          <Card.Img src='Bhrugu.jpg' />
          <Card.Body>
            <Card.Title>Bhrugu Sharma</Card.Title>
            <Card.Text>CoFounder, UI-UX & Backend Developer</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className='test'>
        <Card>
          <Card.Img src='s4vvy-min.jpg' />
          <Card.Body>
            <Card.Title>Saheel Sapovadia</Card.Title>
            <Card.Text>
              Co-Founder & Full stack Developer (MERN expert)
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
      <Col className='test'>
        <Card>
          <Card.Img src='gaurav.jpg' />
          <Card.Body>
            <Card.Title>Gaurav Suthar</Card.Title>
            <Card.Text>Frontend Developer </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button style={{ backgroundColor: 'black' }}>
              <a href='https://ko-fi.com/M4M248BM9' style={{ color: 'white' }}>
                Support EATranslations
              </a>
            </Button>{' '}
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default Developer;
