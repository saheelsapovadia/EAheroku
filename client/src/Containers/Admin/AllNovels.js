import React, { Component } from 'react';
import Novel from '../../Components/Home/Latest/NovelCard';
import Aux from '../../hoc/Auxiliary';
import { Container, Row } from 'react-bootstrap/';
import axios from 'axios';
import withRouter from 'react-router-dom/withRouter';
class AllNovels extends Component {
  state = {
    novels: [],
  };

  componentDidMount() {
    axios.get('/api/novels/').then((response) => {
      this.setState({ novels: response.data });
    });
  }

  novelSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/adminnovels/' + id });
  };
  render() {
    const novels = this.state.novels.map((novel) => {
      return (
        <Novel
          title={novel.title}
          author={novel.author}
          image={novel.image}
          clicked={() => this.novelSelectedHandler(novel._id)}
        />
      );
    });
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

export default withRouter(AllNovels);
