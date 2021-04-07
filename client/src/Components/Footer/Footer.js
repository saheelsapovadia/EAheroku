import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Col, Row } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';
import './footer.scss';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div class='container'>
          <div class='row'>
            <div class='col-md-4 footer-column'>
              <img
                src='EA-Logo-edit.png'
                className='ealogo img-fluid'
                alt='EA Logo'
              ></img>
            </div>
            <div class='col-md-4 footer-column'>
              <ul class='nav flex-column'>
                <li class='nav-item'>
                  <span class='footer-title'>Overview</span>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Library
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Completed
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Ongoing
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Dropped
                  </a>
                </li>
              </ul>
            </div>
            <div class='col-md-4 footer-column'>
              <ul class='nav flex-column'>
                <li class='nav-item'>
                  <span class='footer-title'>Community</span>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    <i class='fas fa-comments'></i>Staff
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    <i class='fas fa-comments'></i>Tech
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    <i class='fas fa-envelope'></i>Contact us
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    <i class='fas fa-star'></i>Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class='text-center'>
            <i class='fas fa-ellipsis-h'></i>
          </div>

          <div class='row text-center'>
            <div class='col-md-4 box'>
              <span class='copyright quick-links'>
                Copyright &copy; eatranslations.com
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </div>
            <div class='col-md-4 box'>
              <ul class='list-inline social-buttons'>
                <a href='#'>
                  <FaFacebook size='2em' style={{ marginLeft: '10px' }} />
                </a>
                <a href='#'>
                  <FaDiscord size='2em' style={{ marginLeft: '10px' }} />
                </a>
                <a href='#'>
                  <FaInstagram size='2em' style={{ marginLeft: '10px' }} />
                </a>
              </ul>
            </div>
            <div class='col-md-4 box'>
              <ul class='list-inline quick-links'>
                <li class='list-inline-item'>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li class='list-inline-item'>
                  <a href='#'>Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
