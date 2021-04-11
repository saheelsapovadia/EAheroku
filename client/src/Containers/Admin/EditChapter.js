import React, { Component, useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class EditChapter extends Component {
  state = {
    no: '',
    title: '',
    content: '',
    show: false,
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        '/api/novels/' +
          this.props.match.params.id +
          '/' +
          this.props.match.params.chapterId
      )
      .then((response) => {
        if (response.data) {
          //console.log(response.data[0]);
          this.setState({ chapter: response.data });
          this.setState({ title: response.data.title });
          this.setState({ no: response.data.no });
          this.setState({ content: response.data.content });
          this.setState({ isLoading: false });
        } else this.setState({ wrongChapter: true });
      });
  }

  updateChapter = () => {
    console.log('updating chapter...');
    //console.log('userToken', localStorage.getItem('userToken'));

    // axios
    //   .post(
    //     'http://localhost:5000/api/novels/' +
    //       this.props.match.params.novelId +
    //       '/addchapter',
    //     {
    //       data:{title: this.state.title,
    //       no: this.state.no,
    //       content: this.state.content},
    //       headers: { 'X-Auth-Token': localStorage.getItem('userToken') },
    //     }
    //   )
    axios({
      method: 'post',
      url:
        '/api/novels/editchapter/' +
        this.props.match.params.id +
        '/' +
        this.state.chapter._id,
      data: {
        title: this.state.title,
        no: this.state.no,
        content: this.state.content,
      },
      headers: { 'X-Auth-Token': localStorage.getItem('userToken') },
    })
      .then((response) => {
        //console.log('new novel: ', response);
        this.handleShow();
      })
      .catch((error) => {
        //console.log(error);
      });
  };
  handleEditorChange = (content, editor) => {
    //console.log('Content was updated:', content);
    this.setState({ content: content });
    //return content;
  };
  handleChange = (event) => {
    var type = event.target.id;
    //console.log(event.target.id);
    if (type == 'title') this.setState({ title: event.target.value });
    if (type == 'no') this.setState({ no: event.target.value });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleRedirect = () => {
    this.props.history.push({
      pathname:
        '/admin/novels/' +
        this.props.match.params.id +
        '/' +
        this.props.match.params.chapterId,
    });
  };
  render() {
    if (this.props.userRole !== 'admin') {
      return (
        <Aux>
          <h2>Oops you are not an ADMIN!</h2>
        </Aux>
      );
    } else {
      return (
        <Aux>
          {this.state.isLoading ? <h2>Loading...</h2> : ''}
          <Form className='mx-5'>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>No</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                id='no'
                type='name'
                placeholder='chapter no'
                value={this.state.no}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                id='title'
                type='name'
                placeholder='title'
                value={this.state.title}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Content</Form.Label>
              <Editor
                value={this.state.content}
                apiKey='qr4sj4fjiwaw1odmoacbqbevme87l1qlxf6ulietqugiws4l'
                init={{
                  height: 500,
                  menubar: false,
                  placeholder: 'Chapter Content',
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
                }}
                onEditorChange={this.handleEditorChange}
              />
            </Form.Group>
            <div className='text-center'>
              <Button
                onClick={() => this.updateChapter()}
                style={{}}
                variant='primary'
                type=''
              >
                Submit
              </Button>
            </div>
          </Form>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>hooraay!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, Your Chapter is Successfully Updated!
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={this.handleRedirect}>
                View
              </Button>
            </Modal.Footer>
          </Modal>
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
    userRole: state.user?.user?.role,
  };
};

export default connect(mapStateToProps)(withRouter(EditChapter));
