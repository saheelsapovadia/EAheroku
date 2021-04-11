import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import axios from 'axios';
import ToolBar from '../../Components/Chapter/ToolBar';
import Button from 'react-bootstrap/Button';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NotFound from '../NotFound/NotFound';

import SupportUs from '../../Components/Home/supportus';
//import * as actionTypes from '../../store/actions/actionTypes';

class ChapterPage extends Component {
  state = {
    chapter: {
      nextChapter: '',
      prevChapter: '',
    },
    chapterId: '',
    wrongChapter: false,
    fontSize: 1,
  };
  componentDidMount() {
    //console.log('component mounted');
    //this.setState({ chapterNo: parseInt(this.props.match.params.no) });
    // console.log(
    //   'novelid: ',
    //   this.props.match.params.id,
    //   'chapterno: ',
    //   this.props.match.params.no
    // );
    axios
      .get(
        '/api/novels/' +
          this.props.match.params.id +
          '/' +
          this.props.match.params.chapterId
      )
      .then((response) => {
        if (response.data) {
          //console.log(response.data);
          this.setState({ chapter: response.data });
        } else this.setState({ wrongChapter: true });
      });
  }

  createMarkup = () => {
    return { __html: this.state.chapter.content };
  };

  nextChapter = async () => {
    //console.log(this.state.chapter.nextChapter);
    if (this.state.chapter.nextChapter)
      await this.setState({ chapterId: this.state.chapter.nextChapter });
    else {
      alert('no next chapter');
      return;
    }
    //console.log('state:', this.state.chapterId);
    await axios
      .get(
        '/api/novels/' + this.props.match.params.id + '/' + this.state.chapterId
      )
      .then((response) => {
        //console.log(response.data);
        if (response.data) {
          this.setState({ chapter: response.data });
          this.props.history.push({
            pathname:
              '/admin/novels/' +
              this.props.match.params.id +
              '/' +
              this.state.chapterId,
          });
        } else {
          alert('next chapter not available!');
        }
      });
  };
  prevChapter = async () => {
    //console.log(this.state.chapter.prevChapter);
    if (this.state.chapter.prevChapter)
      await this.setState({ chapterId: this.state.chapter.prevChapter });
    else {
      alert('no previous chapter');
      return;
    }
    axios
      .get(
        '/api/novels/' + this.props.match.params.id + '/' + this.state.chapterId
      )
      .then((response) => {
        if (response.data) {
          //console.log(response.data);
          //if(response.data.)
          this.setState({ chapter: response.data });
          this.props.history.push({
            pathname:
              '/admin/novels/' +
              this.props.match.params.id +
              '/' +
              this.state.chapterId,
          });
        } else {
          alert('No prev chapter!');
        }
      });
  };

  incrementSize = async () => {
    console.log('incrementing..');
    if (this.state.fontSize < 2) {
      await this.setState({ fontSize: this.state.fontSize + 0.2 });
    }
  };
  decrementSize = async () => {
    console.log('decrementing..');
    if (this.state.fontSize > 1.0) {
      await this.setState({ fontSize: this.state.fontSize - 0.2 });
    }
  };
  editChapter = (id) => {
    this.props.history.push({
      pathname:
        '/admin/novels/editchapter/' +
        this.props.match.params.id +
        '/' +
        this.props.match.params.chapterId,
    });
  };
  render() {
    //console.log('chapter no', this.state.chapterNo);

    const { fontSize } = this.state;
    if (this.state.wrongChapter) {
      return <NotFound></NotFound>;
    } else {
      return (
        <Aux>
          <Container style={{ fontSize: fontSize + 'em' }}>
            <Button
              onClick={() => this.editChapter(this.props.match.params.id)}
              variant='link'
            >
              Edit
            </Button>
            <Row className='ml-auto'>
              <Button
                className='mr-2'
                variant='primary'
                onClick={() => this.prevChapter()}
              >
                <AiFillCaretLeft />
                Prev
              </Button>
              <Button
                className='mr-2'
                variant='primary'
                onClick={() => this.nextChapter()}
              >
                <AiFillCaretRight />
                Next
              </Button>
            </Row>
            <h3 className='mt-3 px-3'>
              {this.state.chapter.no}- {this.state.chapter.title}
            </h3>
            <ToolBar
              inc={this.incrementSize}
              dec={this.decrementSize}
            ></ToolBar>
            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
            <Row>
              <Button
                className='mr-2'
                variant='primary'
                onClick={() => this.prevChapter()}
              >
                <AiFillCaretLeft />
                Prev
              </Button>
              <Button
                className='mr-2'
                variant='primary'
                onClick={() => this.nextChapter()}
              >
                <AiFillCaretRight />
                Next
              </Button>
            </Row>
            <SupportUs />
          </Container>
        </Aux>
      );
    }
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default withRouter(ChapterPage);
