import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import ChapterCard from './ChapterCard';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class ChapterList extends Component {
  state = {
    chapters: [],
  };

  componentDidMount() {
    axios.get('/api/novels/' + this.props.novelId).then((response) => {
      //console.log(response.data.Chapters);
      this.setState({ chapters: response.data.Chapters });
    });
    //this.setState({ chapters: this.props.chapterlist });
  }

  chapterSelectHandler = (id) => {
    console.log('chapter no', id);
    this.props.history.push({
      pathname: '/novels/' + this.props.novelId + '/' + id,
    });
  };

  render() {
    const chaptersl = this.state.chapters.map((chapter) => {
      console.log(chapter);
      return (
        <ChapterCard
          key={chapter.no}
          title={chapter.title}
          no={chapter.no}
          clicked={() => this.chapterSelectHandler(chapter._id)}
        />
      );
    });

    return (
      <Aux>
        <h4 className='px-4'>Latest Chapter Release-</h4>
        <Container className='px-4 py-4'>{chaptersl}</Container>
      </Aux>
    );
  }
}
export default withRouter(ChapterList);
