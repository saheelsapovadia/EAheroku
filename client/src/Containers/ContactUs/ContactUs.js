import React from 'react';
import { useState } from 'react';
import './ContactUs.css';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
const ContactUs = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    var type = event.target.id;
    //console.log(event.target.id);
    if (type == 'fname') setName(event.target.value);
    if (type == 'lname') setLastName(event.target.value);
    if (type == 'Email') setEmail(event.target.value);
    if (type == 'Content') setContent(event.target.value);
  };
  const postRequest = () => {
    axios({
      method: 'post',
      url: '/api/users/contactus',
      data: {
        name: name,
        lastName: lastName,
        email: email,
        content: content,
      },
    })
      .then((response) => {
        handleShow();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className='container'>
      <div className='container1'>
        <h2 className='heading2'>Contact Us</h2>
      </div>
      <p className='Para'>
        Swing by for a cup of coffee, or leave us a message:
      </p>
      <Row>
        <div class='column'></div>
        <Col>
          <form>
            <label for='fname'>First Name</label>
            <input
              type='text'
              id='fname'
              name='firstname'
              placeholder='Your name..'
              onChange={handleChange}
            />
            <label for='lname'>Last Name</label>
            <input
              type='text'
              id='lname'
              name='lastname'
              placeholder='Your last name..'
              onChange={handleChange}
            />
            <label for='Email'>Email</label>
            <input
              type='text'
              id='Email'
              name='Email'
              placeholder='Your Email..'
              onChange={handleChange}
            />
            <label for='Content'>Content</label>
            <textarea
              id='Content'
              name='Content'
              placeholder='Write something..'
              className='textarea'
              onChange={handleChange}
            ></textarea>
            <div className='text-center'>
              <Button
                onClick={() => postRequest()}
                style={{}}
                variant='primary'
                type=''
              >
                Submit
              </Button>
            </div>
          </form>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Valuable request is sent to the EA tls Team
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactUs;
