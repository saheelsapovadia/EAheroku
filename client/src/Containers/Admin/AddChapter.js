import React, { Component, useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class AddChapter extends Component {
  state = {
    no: '',
    title: '',
    content: '',
    show: false,
  };
  componentDidMount() {}

  postChapter = () => {
    console.log('posting chapter...');
    axios
      .post(
        'http://localhost:5000/api/novels/' +
          this.props.match.params.novelId +
          '/addchapter',
        {
          title: this.state.title,
          no: this.state.no,
          content: this.state.content,
        }
      )
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
        '/novels/' + this.props.match.params.novelId + '/' + this.state.no,
    });
  };
  render() {
    return (
      <Aux>
        <Form className='mx-5'>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>No</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              id='no'
              type='name'
              placeholder='chapter no'
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              id='title'
              type='name'
              placeholder='title'
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Content</Form.Label>
            <Editor
              initialValue=''
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
              onClick={() => this.postChapter()}
              style={{}}
              variant='primary'
              type=''
            >
              Submit
            </Button>
          </div>
        </Form>
        <div>{this.state.no}</div>
        <div>{this.state.title}</div>
        <div>{this.state.content}</div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>hooraay!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, Your Chapter is Successfully uploaded!
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
export default withRouter(AddChapter);