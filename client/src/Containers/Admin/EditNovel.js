import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { connect } from 'react-redux';
class EditNovel extends Component {
  state = {
    title: '',
    author: '',
    image: '',
    synopsis: '',
    show: false,
    newNovelId: '',
    novelinfo: {
      title: '',
      author: '',
      image: '',
      synopsis: '',
    },
    isLoading: true,
  };
  componentDidMount() {
    axios.get('/api/novels/' + this.props.match.params.id).then((response) => {
      //console.log(response);
      this.setState({ novelinfo: response.data });
      this.setState({ title: response.data.title });
      this.setState({ author: response.data.author });
      this.setState({ image: response.data.image });
      this.setState({ synopsis: response.data.synopsis });
      this.setState({ isLoading: false });
      this.setState({ isLoading: false });
      //console.log(this.state.novelinfo);
    });
  }

  updateNovel = () => {
    console.log('updating..');
    // axios
    //   .post('/api/novels/', {
    //     title: this.state.title,
    //     author: this.state.author,
    //     image: this.state.image,
    //     synopsis: this.state.synopsis,
    //     header: { 'X-Auth-Token': localStorage.getItem('userToken') },
    //   })
    //   .then((response) => {
    //     //console.log('new novel: ', response);
    //     this.handleShow();
    //   })
    //   .catch((error) => {
    //     //console.log(error);
    //   });
    axios({
      method: 'post',
      url: '/api/novels/edit/' + this.props.match.params.id,
      data: {
        title: this.state.title,
        author: this.state.author,
        image: this.state.image,
        synopsis: this.state.synopsis,
      },
      headers: { 'X-Auth-Token': localStorage.getItem('userToken') },
    })
      .then((response) => {
        //console.log('new novel: ', response);
        //console.log(response.data._id);
        this.setState({ newNovelId: response.data._id });
        this.handleShow();
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  handleEditorChange = (content, editor) => {
    //console.log('Content was updated:', content);
    this.setState({ synopsis: content });
    //return content;
  };
  handleChange = (event) => {
    var type = event.target.id;
    //console.log(event.target.id);
    if (type == 'title') this.setState({ title: event.target.value });
    if (type == 'author') this.setState({ author: event.target.value });
    if (type == 'image') this.setState({ image: event.target.value });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleRedirect = () => {
    this.props.history.push({
      pathname: '/novels/' + this.state.newNovelId,
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
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                id='title'
                type='name'
                placeholder='title'
                value={this.state.title}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                id='author'
                type='name'
                placeholder='name'
                value={this.state.author}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                value={this.state.image}
                onChange={this.handleChange}
                id='image'
                type='name'
                placeholder='image'
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Synopsis</Form.Label>
              <Editor
                value={this.state.synopsis}
                //initialValue={this.state.synopsis}
                apiKey='qr4sj4fjiwaw1odmoacbqbevme87l1qlxf6ulietqugiws4l'
                init={{
                  height: 500,
                  menubar: false,
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
                onClick={() => this.updateNovel()}
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
            <Modal.Body>Woohoo, Your Novel is Successfully updated!</Modal.Body>
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

export default connect(mapStateToProps)(EditNovel);
