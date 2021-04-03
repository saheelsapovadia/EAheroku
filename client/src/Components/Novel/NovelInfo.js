import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTrophy, FaPenNib } from 'react-icons/fa';
import {
  BsFillCollectionFill,
  BsBookmarksFill,
  BsBookmarks,
} from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
class NovelInfo extends Component {
  render() {
    console.log(this.props.novelInfo.title);
    console.log(this.props.isBookmarked);
    var bookmark;
    if (this.props.isBookmarked) {
      bookmark = <BsBookmarksFill size={30} />;
    } else {
      bookmark = <BsBookmarks size={30} />;
    }

    return (
      <Container>
        <Row>
          <Col
            sm={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <img src={this.props.novelInfo.image} alt='Novel Preview'></img>
          </Col>
          <Col sm={8}>
            <Row>
              <Col className=''>
                <Row className='mx-0 px-0 mb-2'>
                  <Col className='' sm={4}>
                    <FaTrophy className='mr-2' />
                    <strong>Rank</strong>
                  </Col>
                  <Col className='' sm={8}>
                    #1
                  </Col>
                </Row>
                <Row className='mx-0 px-0 mb-2'>
                  <Col className='' sm={4}>
                    <FaPenNib className='mr-2' />
                    <strong>Author</strong>
                  </Col>
                  <Col className='' sm={8}>
                    {this.props.novelInfo.author}
                  </Col>
                </Row>
                <Row className='mx-0 px-0 mb-2'>
                  <Col className='' sm={4}>
                    <BsFillCollectionFill className='mr-2' />
                    <strong>Genre</strong>
                  </Col>
                  <Col className='' sm={8}>
                    {this.props.novelInfo.genre}
                  </Col>
                </Row>
                <Row className='mx-0 px-0 mb-2'>
                  <Col className='' sm={4}>
                    <MdDateRange className='mr-2' />
                    <strong>Date</strong>
                  </Col>
                  <Col className='' sm={8}>
                    {this.props.novelInfo.date}
                  </Col>
                </Row>
              </Col>
              <Col className=''>
                <Row className=''>
                  <Col className='' sm={4}>
                    Project:
                  </Col>
                  <Col className='' sm={8}>
                    Active
                  </Col>
                </Row>
                <a className='mr-2' onClick={this.props.toggle}>
                  {bookmark}
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default NovelInfo;
