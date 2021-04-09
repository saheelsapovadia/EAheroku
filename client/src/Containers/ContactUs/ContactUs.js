import React from 'react';
import './ContactUs.css';
import { Col, Row } from 'react-bootstrap';

const ContactUs = () => {
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
            />
            <label for='lname'>Last Name</label>
            <input
              type='text'
              id='lname'
              name='lastname'
              placeholder='Your last name..'
            />
            <label for='Email'>Email</label>
            <input
              type='text'
              id='Email'
              name='Email'
              placeholder='Your Email..'
            />
            <label for='subject'>Subject</label>
            <textarea
              id='subject'
              name='subject'
              placeholder='Write something..'
              className='textarea'
            ></textarea>
            <input className='mx-auto' type='submit' value='Submit' />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
