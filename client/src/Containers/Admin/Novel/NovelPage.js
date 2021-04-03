import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import NovelInfo from '../../../Components/Admin/Novel/NovelInfo';
import axios from 'axios';
import Summary from '../../../Components/Admin/Novel/Summary';
import { connect } from 'react-redux';
import ChapterList from '../../../Components/Admin/Novel/ChapterList';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import * as actions from '../../../Store/actions/index';
//import { addBookmark } from '../../Store/actions/userActions';
import { AiOutlinePlus } from 'react-icons/ai';
class NovelPage extends Component {
  state = {
    novelinfo: {
      title: '',
    },
  };

  async componentDidMount() {
    console.log('Component Mount');
    axios
      .get('http://localhost:5000/api/novels/' + this.props.match.params.id)
      .then((response) => {
        //console.log(response);
        this.setState({ novelinfo: response.data });
        //console.log(this.state.novelinfo);
      });
    //checking bookmark status
    // axios
    //   .get(
    //     'http://localhost:5000/users/' +
    //       this.props.userId +
    //       '/' +
    //       this.props.match.params.id +
    //       '/check'
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ bookmark: response.data.res });
    //     console.log(this.state.bookmark);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // console.log(this.state.bookmark);
  }

  componentDidUpdate(prevProps) {
    console.log('Component Update');
    console.log('prev prop', prevProps.userId);
    console.log('user prop', this.props.userId);
    if (prevProps?.userId !== this.props.userId) {
      console.log('setting..');
      //checking bookmark status
      //   axios
      //     .get(
      //       'http://localhost:5000/users/' +
      //         this.props.userId +
      //         '/' +
      //         this.props.match.params.id +
      //         '/check'
      //     )
      //     .then((response) => {
      //       console.log(response);
      //       this.setState({ bookmark: response.data.res });
      //       console.log(this.state.bookmark);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    }
  }

  //   checkBookmark = (id) => {
  //     console.log('checking...');
  //     var result;
  //     if (this.props.userBookmarks) {
  //       result = this.props.userBookmarks.find((id) => {
  //         return id === this.props.match.params.id;
  //       });
  //     }
  //     console.log('result: ', result);
  //     return result ? true : false;
  //   };

  //   toggleBookMark = () => {
  //     this.setState({ bookmark: !this.state.bookmark }, () => {
  //       if (this.state.bookmark) {
  //         console.log('adding...');
  //         this.props.addBookmark(this.props.userId, this.props.match.params.id);
  //       } else {
  //         console.log('removing...');
  //         this.props.removeBookmark(
  //           this.props.userId,
  //           this.props.match.params.id
  //         );
  //       }
  //     });
  //   };
  addChapter = (id) => {
    this.props.history.push({
      pathname: '/addchapter/' + id,
    });
  };
  render() {
    console.log('Novel Component');
    console.log(this.state);
    return (
      <Aux>
        <Container>
          <h3 className='px-4 mb-5 mt-3'>{this.state.novelinfo.title} </h3>
          <NovelInfo
            novelInfo={this.state.novelinfo}
            toggle={() => this.toggleBookMark()}
          ></NovelInfo>
          <Summary summary={this.state.novelinfo.synopsis}></Summary>
          <ChapterList
            chapterlist={this.state.novelinfo.Chapters}
            novelId={this.props.match.params.id}
          ></ChapterList>

          <Button
            onClick={() => this.addChapter(this.props.match.params.id)}
            variant='link'
          >
            <AiOutlinePlus /> Chapter
          </Button>
        </Container>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  var userBookmarks;
  if (state.user?.user?.bookmarked) userBookmarks = state.user.user.bookmarked;
  return {
    userBookmarks: userBookmarks,
    userId: state.user?.user?._id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getNovel: (id) => {
      dispatch(actions.getNovelById(id));
    },
    addBookmark: (userId, novelId) => {
      dispatch(actions.addBookmark(userId, novelId));
    },
    removeBookmark: (userId, novelId) => {
      dispatch(actions.removeBookmark(userId, novelId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NovelPage);
