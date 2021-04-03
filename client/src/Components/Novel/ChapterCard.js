import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class ChapterCard extends Component {
  render() {
    console.log(this.props.title);
    return (
      <Aux>
        <ListGroup.Item action href='' onClick={this.props.clicked}>
          <Row>
            <h5>{this.props.title}</h5>
            {/* <Col sm={2}>
              <h5 className=''>{this.props.no}</h5>
            </Col>
            <Col sm={10}>
              <h5>{this.props.title}</h5>
            </Col> */}
          </Row>
        </ListGroup.Item>
      </Aux>
    );
  }
}
export default ChapterCard;
