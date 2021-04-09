import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';

function Developer() {
  return (
    <div>
      <CardDeck className='mt-4'>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Bhrugu Sharma</Card.Title>
            <Card.Text>Full-Stack developer and Profesional in CSS</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant='dark'>Support</Button>{' '}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='s4vvy.jpg' />
          <Card.Body>
            <Card.Title>Saheel Sapovadia</Card.Title>
            <Card.Text>Tech Lead</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant='dark'>Support</Button>{' '}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Gaurav Suthar</Card.Title>
            <Card.Text>Front-end Developer</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant='dark'>Support</Button>{' '}
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Developer;
