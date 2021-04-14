import React, { Component } from 'react';
import { Navbar, Nav, Button, NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './Navbar.css';
// const links = [
//   { href: '/', text: 'Get Started' },
//   { href: '/', text: 'Library' },
//   { href: '/', text: 'About Us' },
//   { href: '/profile', text: 'Profile' },
// ];

// const createNavItem = ({ href, text, className }) => (
//   <Nav.Item key={text}>
//     <Nav.Link className='navlink'>
//       <Link to={href} onClick={() => this.setExpanded()}>
//         {' '}
//         {text}
//       </Link>
//     </Nav.Link>
//   </Nav.Item>
// );

class NavbarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'home',
      links: [],
      user: {},
      expanded: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    if (this.props.isSignedIn) {
      this.setState({
        links: [
          { href: '/library', text: 'Library' },
          { href: '/aboutus', text: 'About Us' },
          { href: '/contactus', text: 'Contact Us' },
        ],
      });
    } else {
      this.setState({
        links: [
          { href: '/library', text: 'Library' },
          { href: '/aboutus', text: 'About Us' },
          { href: '/contactus', text: 'Contact Us' },
        ],
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isSignedIn !== this.props.isSignedIn) {
      if (this.props.isSignedIn) {
        this.setState({
          links: [
            { href: '/library', text: 'Library' },
            { href: '/aboutus', text: 'About Us' },
            { href: '/contactus', text: 'Contact Us' },

            // { href: '/profile', text: 'Profile' },
          ],
        });
      } else {
        this.setState({
          links: [
            { href: '/library', text: 'Library' },
            { href: '/aboutus', text: 'About Us' },
            { href: '/contactus', text: 'Contact Us' },
          ],
        });
      }
    }
  }
  createNavItem = ({ href, text, className }) => (
    <Nav.Item key={text}>
      <Nav.Link className='navlink'>
        <Link to={href} onClick={() => this.setExpanded()}>
          {' '}
          {text}
        </Link>
      </Nav.Link>
    </Nav.Item>
  );

  handleSelect(key) {
    this.setState({
      key: key,
    });
    alert(`selected ${key}`);
  }
  checkSignedIn = () => {};

  setExpanded = () => {
    this.setState({ expanded: this.state.expanded ? false : 'expanded' });
  };
  render() {
    if (this.props.isSignedIn) {
      let links = [
        { href: '/', text: 'Get Started' },
        { href: '/', text: 'Library' },
        { href: '/aboutus', text: 'About Us' },
        { href: '/contactus', text: 'Contact Us' },
        // { href: '/profile', text: 'Profile' },
      ];
    } else {
      let links = [
        { href: '/', text: 'Get Started' },
        { href: '/', text: 'Library' },
        { href: '/aboutus', text: 'About Us' },
        { href: '/contactus', text: 'Contact Us' },
      ];
    }
    return (
      <div>
        {/* <Image src="panel.png" fluid></Image> */}
        <Navbar
          expanded={this.state.expanded}
          className='navbar'
          expand='lg'
          fixed-top
        >
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

          <Navbar.Toggle
            onClick={() => this.setExpanded()}
            aria-controls='basic-navbar-nav'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto' activeKey='/'>
              {this.state.links.map(this.createNavItem)}
              {this.props.isSignedIn && this.props.userRole === 'admin' ? (
                <NavDropdown
                  title='Admin Console'
                  id='basic-nav-dropdown'
                  className='navdropdown'
                >
                  <NavDropdown.Item>
                    <Link to='/admin/novels' onClick={() => this.setExpanded()}>
                      All Novels
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to='/admin/postnovel'
                      onClick={() => this.setExpanded()}
                    >
                      Post Novels
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                ''
              )}
            </Nav>

            <Nav className='ml-auto navbar' navbar>
              <Nav.Item>
                <Nav.Link
                  href='https://discord.gg/8uESkwvzbe'
                  className='navlink'
                  onClick={() => this.setExpanded()}
                >
                  <Button variant='outline-light'>
                    <img
                      height={25}
                      width={40}
                      src='discord.svg'
                      alt='Discord'
                    />
                    Discord
                  </Button>
                </Nav.Link>
              </Nav.Item>
              {this.props.isSignedIn ? (
                <Nav.Item>
                  <Nav.Link onClick={() => this.setExpanded()}>
                    <Link to='/profile'>
                      <Button variant='outline-light'>
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
                    <Link onClick={() => this.setExpanded()} to='/login'>
                      <Button variant='outline-light'>
                        <img
                          height={25}
                          width={40}
                          src='google.svg'
                          alt='Login'
                        />
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let user = {};
  if (state.user.user) user = state.user.user;
  return {
    isSignedIn: state.user.isSignedIn,
    user: state.user.user,
    userRole: state.user?.user?.role,
  };
};

export default connect(mapStateToProps)(NavbarMain);

{
  /* <img height={25} width={40} src='google.svg' alt='Login' /> */
}
