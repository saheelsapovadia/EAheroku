import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';
class Top extends Component {
  render() {
    return (
      <Jumbotron style={{ background: 'none' }}>
        <h5 className="mx-auto">TRENDING ON EA</h5>
        <Container>
          <Row>
            <Col sm>
              <Card className="my-0 py-0 border-0" style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Subtitle className="text-muted">#1</Card.Subtitle>
                  <Card.Text className="mb-0">
                    The Magician Wants Normality
                  </Card.Text>
                  <Card.Link
                    style={{ fontSize: '0.9em', marginBottom: '10px' }}
                    href="#"
                  >
                    Read more..
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="my-0 py-0 border-0" style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Subtitle className="text-muted">#2</Card.Subtitle>
                  <Card.Text className="mb-0">
                    The Magician Wants Normality
                  </Card.Text>

                  <Card.Link
                    style={{ fontSize: '0.9em', marginBottom: '10px' }}
                    href="#"
                  >
                    Read more..
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col sm>
              <Card className="my-0 py-0 border-0" style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Subtitle className="text-muted">#3</Card.Subtitle>
                  <Card.Text className="mb-0">
                    The Magician Wants Normality
                  </Card.Text>
                  <Card.Link
                    style={{ fontSize: '0.9em', marginBottom: '10px' }}
                    href="#"
                  >
                    Read more..
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card className="my-0 py-0 border-0" style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Subtitle className="text-muted">#4</Card.Subtitle>
                  <Card.Text className="mb-0">
                    The Magician Wants Normality
                  </Card.Text>

                  <Card.Link
                    style={{ fontSize: '0.9em', marginBottom: '10px' }}
                    href="#"
                  >
                    Read more..
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col sm>
              <Card className='my-0 py-0 border-0' style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Subtitle className='text-muted'>#5</Card.Subtitle>
                  <Card.Text className='mb-0'>
                    The Magician Wants Normality
                  </Card.Text>
                  <Card.Link
                    style={{ fontSize: '0.9em', marginBottom: '10px' }}
                    href='#'
                  >
                    Read more..
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card className='my-0 py-0 border-0' style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Subtitle className='text-muted'>#6</Card.Subtitle>
                  <Card.Text className='mb-0'>
                    The Magician Wants Normality
                  </Card.Text>

                  <Card.Link
                    style={{ fontSize: '0.9em', marginBottom: '10px' }}
                    href='#'
                  >
                    Read more..
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </Jumbotron>
    );
  }
}

export default Top;
