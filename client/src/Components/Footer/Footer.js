import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Col, Row } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import './footer.scss';
import { Link } from 'react-router-dom';
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
                    <Link to='/library'>Library</Link>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    <Link to='/library'>Completed</Link>
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
                    <Link to='/aboutus'>
                      <i class='fas fa-comments'></i>Staff
                    </Link>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    <Link to='/aboutus'>
                      <i class='fas fa-comments'></i>Tech
                    </Link>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    <Link to='/contactus'>
                      <i class='fas fa-envelope'></i>Contact us
                    </Link>
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='https://ko-fi.com/M4M248BM9'>
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
                <a href='https://twitter.com/EA_Translation?s=09'>
                  <FaTwitter size='2em' style={{ marginLeft: '10px' }} />
                </a>
                <a href='https://discord.gg/8uESkwvzbe'>
                  <FaDiscord size='2em' style={{ marginLeft: '10px' }} />
                </a>
                <a href='https://instagram.com/euphoria_airlines?igshid=g8iqne5q3jb4'>
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
