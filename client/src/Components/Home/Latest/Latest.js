import React, { Component } from 'react';
import Novel from './NovelCard';
import Aux from '../../../hoc/Auxiliary';
import { Container, Row } from 'react-bootstrap/';
import axios from 'axios';
import withRouter from 'react-router-dom/withRouter';
import LoadingNovelCard from '../../Loading/LoadingNovelCard';
class Latest extends Component {
  state = {
    novels: ['', '', '', '', '', ''],
    isLoading: true,
  };

  componentDidMount() {
    axios.get('/api/novels/').then((response) => {
      this.setState({ novels: response.data });
      this.setState({ isLoading: false });
    });
  }

  novelSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/novels/' + id });
  };
  render() {
    var novels;
    if (this.state.isLoading) {
      novels = this.state.novels.map((novel) => {
        return <LoadingNovelCard></LoadingNovelCard>;
      });
    } else {
      novels = this.state.novels.map((novel) => {
        return (
          <Novel
            title={novel.title}
            author={novel.author}
            image={novel.image}
            clicked={() => this.novelSelectedHandler(novel._id)}
          />
        );
      });
    }
    return (
      <Aux>
        <h6 className='mx-auto' style={{ alignContent: 'center' }}>
          LATEST
        </h6>

        <Container>
          <Row>{novels}</Row>
        </Container>
      </Aux>
    );
  }
}

export default withRouter(Latest);
