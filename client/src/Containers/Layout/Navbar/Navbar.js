import React, { Component } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// const links = [
//   { href: '/', text: 'Get Started' },
//   { href: '/', text: 'Library' },
//   { href: '/', text: 'About Us' },
//   { href: '/profile', text: 'Profile' },
// ];

const createNavItem = ({ href, text, className }) => (
  <Nav.Item key={text}>
    <Nav.Link className={className}>
      <Link to={href}> {text}</Link>
    </Nav.Link>
  </Nav.Item>
);

class NavbarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'home',
      links: [],
      user: {},
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    if (this.props.isSignedIn) {
      this.setState({
        links: [
          { href: '/', text: 'Get Started' },
          { href: '/', text: 'Library' },
          { href: '/', text: 'About Us' },
          { href: '/postnovel', text: 'Post Novel' },
        ],
      });
    } else {
      this.setState({
        links: [
          { href: '/', text: 'Get Started' },
          { href: '/', text: 'Library' },
          { href: '/', text: 'About Us' },
        ],
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isSignedIn !== this.props.isSignedIn) {
      if (this.props.isSignedIn) {
        this.setState({
          links: [
            { href: '/', text: 'Get Started' },
            { href: '/', text: 'Library' },
            { href: '/', text: 'About Us' },
            { href: '/postnovel', text: 'Post Novel' },
            // { href: '/profile', text: 'Profile' },
          ],
        });
      } else {
        this.setState({
          links: [
            { href: '/', text: 'Get Started' },
            { href: '/', text: 'Library' },
            { href: '/', text: 'About Us' },
            { href: '/postnovel', text: 'Post Novel' },
          ],
        });
      }
    }
  }

  handleSelect(key) {
    this.setState({
      key: key,
    });
    alert(`selected ${key}`);
  }
  checkSignedIn = () => {};

  render() {
    if (this.props.isSignedIn) {
      let links = [
        { href: '/', text: 'Get Started' },
        { href: '/', text: 'Library' },
        { href: '/', text: 'About Us' },
        // { href: '/profile', text: 'Profile' },
      ];
    } else {
      let links = [
        { href: '/', text: 'Get Started' },
        { href: '/', text: 'Library' },
        { href: '/', text: 'About Us' },
      ];
    }
    return (
      <Navbar bg='light' variant='light' expand='lg' fixed-top>
        <Navbar>
          <Navbar.Brand>
            <Link to='/' exact>
              <img
                src='EA-Logo-edit.png'
                width='90'
                height='70'
                margin='none'
                className='d-inline-block align-top'
                alt='EA'
                style={{ margin: 'none' }}
              />
            </Link>
          </Navbar.Brand>
        </Navbar>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto navbar' activeKey='/'>
            {this.state.links.map(createNavItem)}
            {this.props.isSignedIn ? (
              <NavDropdown title='Admin Console' id='basic-nav-dropdown'>
                <NavDropdown.Item>
                  <Link to='/allnovels'>All Novels</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/postnovel'>Post Novels</Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ''
            )}
          </Nav>

          <Nav className='ml-auto navbar' navbar>
            <Nav.Item>
              <Nav.Link href='#discord'>
                <Button variant='outline-dark'>
                  {/* <img height={25} width={40} src='discord.svg' alt='Discord' /> */}
                  Discord
                </Button>
              </Nav.Link>
            </Nav.Item>
            {this.props.isSignedIn ? (
              <Nav.Item>
                <Nav.Link>
                  <Link to='/profile'>
                    <Button variant='outline-dark'>
                      {/* <img height={25} width={40} src='google.svg' alt='Login' /> */}

                      <img
                        src={this.props.user.image}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '90px',
                        }}
                      ></img>
                    </Button>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link>
                  <Link to='/login'>
                    <Button variant='outline-dark'>
                      {/* <img height={25} width={40} src='google.svg' alt='Login' /> */}
                      Login
                    </Button>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            )}
            {/* <Nav.Item>
              <Nav.Link>
                <Link to='/login'>
                  <Button variant='outline-dark'>
                    
                    {this.props.isSignedIn ? (
                      <img
                        src={this.props.user.image}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '90px',
                        }}
                      ></img>
                    ) : (
                      'Login'
                    )}
                  </Button>
                </Link>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  let user = {};
  if (state.user.user) user = state.user.user;
  return { isSignedIn: state.user.isSignedIn, user: state.user.user };
};

export default connect(mapStateToProps)(NavbarMain);

{
  /* <img height={25} width={40} src='google.svg' alt='Login' /> */
}