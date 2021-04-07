import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ChapterCard from '../../Components/Novel/ChapterCard';
import { connect } from 'react-redux';
import Logout from '../../Components/Auth/Logout';
class Profile extends Component {
  state = {
    user: {
      bookmarked: [],
    },
  };

  componentDidMount() {
    console.log('Component Mount');
    console.log(this.state.user);
    this.setState({ user: this.props.user });
    console.log(this.state.user);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.user._id !== this.props.user?._id) {
      this.setState({ user: this.props.user });
      console.log(this.state.user);
    }
  }
  chapterSelectHandler = (id) => {
    this.props.history.push({
      pathname: '/novels/' + id,
    });
  };

  render() {
    console.log('Profile Component');
    console.log(this.state.user);
    const bookmark = this.state.user.bookmarked.map((item) => {
      return (
        <ChapterCard
          title={item.novelName}
          no={item.chapter}
          clicked={() => this.chapterSelectHandler(item.novelId, item.chapter)}
        />
      );
    });
    console.log(this.state.user._id);
    if (this.state.user?._id !== undefined) {
      return (
        <Container>
          <h2>Profile</h2>
          <img
            className='profile-img'
            src={this.state.user.image}
            style={{ width: '200px', height: '200px' }}
          ></img>
          <h3>{this.state.user.displayName}</h3>

          <h4>Bookmarked Novels</h4>
          <ul>{bookmark}</ul>
          <Logout />
        </Container>
      );
    } else {
      return (
        <Container>
          <h2>Profile</h2>
          <h4>Please Login First..</h4>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  let user = {
    bookmarked: [],
  };
  if (state.user.user) user = state.user.user;
  return {
    user: user,
  };
};

export default connect(mapStateToProps)(Profile);
