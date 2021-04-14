import React, { Component } from 'react';
import axios from 'axios';
import Novel from './Latest/NovelCard';
import withRouter from 'react-router-dom/withRouter';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';
class Top extends Component {
  state = {
    novelinfo1: {
      title: '',
    },
    novelinfo2: {
      title: '',
    },
    novelinfo3: {
      title: '',
    },

    isLoading: true,
  };
  componentDidMount() {
    axios.get('/api/novels/6072fdb05d6dde0015f712d6').then((response) => {
      //console.log(response);
      this.setState({ novelinfo1: response.data });
      this.setState({ isLoading: false });
      //console.log(this.state.novelinfo);
    });

    axios.get('/api/novels/6073021c5d6dde0015f712e6').then((response) => {
      //console.log(response);
      this.setState({ novelinfo2: response.data });
      this.setState({ isLoading: false });
      //console.log(this.state.novelinfo);
    });

    axios.get('/api/novels/607300905d6dde0015f712e3').then((response) => {
      //console.log(response);
      this.setState({ novelinfo3: response.data });
      this.setState({ isLoading: false });
      //console.log(this.state.novelinfo);
    });
  }
  novelSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/novels/' + id });
  };
  render() {
    return (
      <Container>
        <h5 className="mx-auto">TRENDING ON EA</h5>
        <Row>
          <Novel
            title={this.state.novelinfo1.title}
            author={this.state.novelinfo1.author}
            image={this.state.novelinfo1.image}
            clicked={() => this.novelSelectedHandler(this.state.novelinfo1._id)}
          />

          <Novel
            title={this.state.novelinfo2.title}
            author={this.state.novelinfo2.author}
            image={this.state.novelinfo2.image}
            clicked={() => this.novelSelectedHandler(this.state.novelinfo2._id)}
          />

          <Novel
            title={this.state.novelinfo3.title}
            author={this.state.novelinfo3.author}
            image={this.state.novelinfo3.image}
            clicked={() => this.novelSelectedHandler(this.state.novelinfo3._id)}
          />
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
    );
  }
}

export default withRouter(Top);
