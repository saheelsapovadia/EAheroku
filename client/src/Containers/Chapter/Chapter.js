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
//import SupportUs from '../../components/home/supportus';
//import * as actionTypes from '../../store/actions/actionTypes';

class ChapterPage extends Component {
  state = {
    chapter: {},
    chapterNo: 0,
    wrongChapter: false,
  };
  componentDidMount() {
    console.log('component mounted');
    this.setState({ chapterNo: parseInt(this.props.match.params.no) });
    console.log(
      'novelid: ',
      this.props.match.params.id,
      'chapterno: ',
      this.props.match.params.no
    );
    axios
      .get(
        '/api/novels/' +
          this.props.match.params.id +
          '/' +
          this.props.match.params.no
      )
      .then((response) => {
        if (response.data) {
          console.log(response.data[0]);
          this.setState({ chapter: response.data[0] });
        } else this.setState({ wrongChapter: true });
      });
  }

  createMarkup = () => {
    return { __html: this.state.chapter.content };
  };

  nextChapter = async () => {
    await this.setState({ chapterNo: this.state.chapterNo + 1 });
    await axios
      .get(
        '/api/novels/' + this.props.match.params.id + '/' + this.state.chapterNo
      )
      .then((response) => {
        //console.log(response.data[0]);
        if (response.data) {
          this.setState({ chapter: response.data[0] });
          this.props.history.push({
            pathname:
              '/novels/' +
              this.props.match.params.id +
              '/' +
              this.state.chapterNo,
          });
        } else {
          alert('next chapter not available!');
          this.setState({ chapterNo: this.state.chapterNo - 1 });
        }
      });
  };
  prevChapter = async () => {
    if (this.state.chapterNo != 1) {
      await this.setState({ chapterNo: this.state.chapterNo - 1 });
      this.props.history.push({
        pathname:
          '/novels/' + this.props.match.params.id + '/' + this.state.chapterNo,
      });
      axios
        .get(
          '/api/novels/' +
            this.props.match.params.id +
            '/' +
            this.state.chapterNo
        )
        .then((response) => {
          console.log(response.data[0]);
          //if(response.data.)
          this.setState({ chapter: response.data[0] });
        });
    } else {
      alert('no previous chapter');
    }
  };

  render() {
    console.log('chapter no', this.state.chapterNo);
    if (this.state.wrongChapter) {
      return <NotFound></NotFound>;
    } else {
      return (
        <Aux>
          <Container>
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
            <h3 className='mt-3 px-3'>{this.state.chapter.title}</h3>
            {/* <ToolBar></ToolBar> */}
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
            {/* <SupportUs /> */}
          </Container>
        </Aux>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(ChapterPage);
