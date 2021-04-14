import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import axios from 'axios';
import ToolBar from '../../Components/Chapter/ToolBar';
import Button from 'react-bootstrap/Button';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NotFound from '../NotFound/NotFound';
import Disqus from 'disqus-react';
import SupportUs from '../../Components/Home/supportus';
//import * as actionTypes from '../../store/actions/actionTypes';
import './Chapter.css';

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
  novelSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/novels/' + id });
  };
  componentDidMount() {
    //stop right-click
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    //console.log('component mounted');
    this.setState({ chapterNo: parseInt(this.props.match.params.no) });
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
    console.log('state:', this.state.chapterId);
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
              '/novels/' +
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
              '/novels/' +
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
    //console.log('incrementing..');
    if (this.state.fontSize < 2) {
      await this.setState({ fontSize: this.state.fontSize + 0.2 });
    }
  };
  decrementSize = async () => {
    //console.log('decrementing..');
    if (this.state.fontSize > 1.0) {
      await this.setState({ fontSize: this.state.fontSize - 0.2 });
    }
  };
  render() {
    //console.log('chapter no', this.state.chapterNo);
    const disqusShortname = 'eatranslations'; //found in your Disqus.com dashboard
    const disqusConfig = {
      url:
        'https://lit-temple-67513.herokuapp.com/novels/' +
        this.props.match.params.id +
        '/' +
        this.state.chapterNo,
      identifier: this.props.match.params.id + this.state.chapterNo, //this.props.uniqueId
      title: this.state.novelinfo?.title, //this.props.title
    };
    const { fontSize } = this.state;
    if (this.state.wrongChapter) {
      return <NotFound></NotFound>;
    } else {
      return (
        <div className="noselect">
          <Aux>
            <Container style={{ fontSize: fontSize + 'em' }}>
              <Button
                className="mr-2"
                style={{
                  outline: 'none',
                  boxShadow: 'none',
                  border: '0',
                  padding: '5px 10px',
                  marginBottom: '0.8em',
                }}
                variant="dark"
                onClick={() =>
                  this.novelSelectedHandler(this.props.match.params.id)
                }
              >
                Go to Synopsis
              </Button>
              <Row className="ml-auto">
                <Button
                  className="mr-2"
                  variant="primary"
                  onClick={() => this.prevChapter()}
                >
                  <AiFillCaretLeft />
                  Prev
                </Button>
                <Button
                  className="mr-2"
                  variant="primary"
                  onClick={() => this.nextChapter()}
                >
                  <AiFillCaretRight />
                  Next
                </Button>
              </Row>
              <h3 className="mt-3 px-3">
                {this.state.chapter.no}- {this.state.chapter.title}
              </h3>
              <ToolBar
                inc={this.incrementSize}
                dec={this.decrementSize}
              ></ToolBar>
              <div dangerouslySetInnerHTML={this.createMarkup()}></div>
              <Row>
                <Button
                  className="mr-2"
                  variant="primary"
                  onClick={() => this.prevChapter()}
                >
                  <AiFillCaretLeft />
                  Prev
                </Button>
                <Button
                  className="mr-2"
                  variant="primary"
                  onClick={() => this.nextChapter()}
                >
                  <AiFillCaretRight />
                  Next
                </Button>
              </Row>
              <SupportUs />
              <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </Container>
          </Aux>
        </div>
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
