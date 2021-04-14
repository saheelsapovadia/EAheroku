import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Aux from '../../hoc/Auxiliary';
import Row from 'react-bootstrap/Row';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillCaretLeft,
  AiFillCaretRight,
} from 'react-icons/ai';

import { Container } from 'react-bootstrap';

class ToolBar extends Component {
  render() {
    return (
      <Aux>
        <Container
          className='mt-3'
          style={{ display: 'grid', justifyContent: 'right' }}
        >
          <Row className='mb-3'>
            {/* <a className='mr-2' href='/'>
              <AiOutlinePlusCircle size={30} />
            </a> */}
            <Button className='mr-2' variant='none' onClick={this.props.dec}>
              <AiOutlineMinusCircle size={30} />
            </Button>
            <Button className='mr-2' variant='none' onClick={this.props.inc}>
              <AiOutlinePlusCircle size={30} />
            </Button>

            {/* <a className='mr-2' href='/' onClick>
              <AiOutlineMinusCircle size={30} />
            </a> */}
          </Row>
          {/* <Row>
            <Button className='mr-2' variant='primary'>
              <AiFillCaretLeft />
              Prev
            </Button>
            <Button className='mr-0' variant='primary'>
              <AiFillCaretRight />
              Next
            </Button>
          </Row> */}
        </Container>
      </Aux>
    );
  }
}
export default ToolBar;
