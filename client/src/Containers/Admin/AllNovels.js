import React, { Component } from 'react';
import Novel from '../../Components/Home/Latest/NovelCard';
import Aux from '../../hoc/Auxiliary';
import { Container, Row } from 'react-bootstrap/';
import axios from 'axios';
import withRouter from 'react-router-dom/withRouter';
import { connect } from 'react-redux';
class AllNovels extends Component {
  state = {
    novels: [],
  };

  componentDidMount() {
    axios
      .get('/api/novels/', {
        // headers: { 'X-Auth-Token': localStorage.getItem('userToken') },
      })
      .then((response) => {
        this.setState({ novels: response.data });
      })
      .catch((err) => console.log(err));
  }

  novelSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/admin/novels/' + id });
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
    console.log('userRole: ', this.props.userRole);
    if (this.props.userRole !== 'admin') {
      return (
        <Aux>
          <h2>Oops you are not an ADMIN!</h2>
        </Aux>
      );
    } else {
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
}

const mapStateToProps = (state) => {
  let user = {};
  if (state.user.user) user = state.user.user;
  return {
    isSignedIn: state.user.isSignedIn,
    user: state.user.user,
    userRole: state.user?.user?.role,
  };
};

export default connect(mapStateToProps)(withRouter(AllNovels));
