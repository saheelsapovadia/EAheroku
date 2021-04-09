import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
const ProofReaders = () => {
  return (
    <div>
      <CardDeck className='mt-4'>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Lorem ipsum</Card.Title>
            <Card.Text>Lorem ipsum</Card.Text>
            <Card.Text>
              "There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain..."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant='primary'>Support</Button>{' '}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Lorem ipsum</Card.Title>
            <Card.Text>Lorem ipsum</Card.Text>
            <Card.Text>
              "There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain..."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant='primary'>Support</Button>{' '}
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Lorem ipsum</Card.Title>
            <Card.Text>Lorem ipsum</Card.Text>
            <Card.Text>
              "There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain..."
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant='primary'>Support</Button>{' '}
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default ProofReaders;
