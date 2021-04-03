import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import axios from 'axios';
import ToolBar from '../../Components/Chapter/ToolBar';
import Button from 'react-bootstrap/Button';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
//import SupportUs from '../../components/home/supportus';
//import * as actionTypes from '../../store/actions/actionTypes';

class ChapterPage extends Component {
  state = {
    chapter: {},
  };
  componentDidMount() {
    axios
      .get(
        'http://localhost:5000/api/novels/' +
          this.props.match.params.id +
          '/' +
          this.props.match.params.no
      )
      .then((response) => {
        //console.log(response.data[0]);
        this.setState({ chapter: response.data[0] });
      });
  }
  createMarkup = () => {
    return { __html: this.state.chapter.content };
  };

  render() {
    //console.log(this.state.bookmark);
    return (
      <Aux>
        <Container>
          <h3 className='mt-3 px-3'>{this.state.chapter.title}</h3>
          <ToolBar></ToolBar>
          <div dangerouslySetInnerHTML={this.createMarkup()}></div>
          <div
            className='mb-5'
            style={{ display: 'flex', justifyContent: 'right' }}
          >
            <Button className='mr-2' variant='primary'>
              <AiFillCaretLeft />
              Prev
            </Button>
            <Button className='mr-2' variant='primary'>
              <AiFillCaretRight />
              Next
            </Button>
          </div>
          {/* <SupportUs /> */}
        </Container>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default ChapterPage;
