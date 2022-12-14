import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';

export function Menubar({ user }) {

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  }

  return (

    <Navbar className="main-nav fixed-top" sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-logo" href="/">myFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && (
              <Nav.Link href={`/profile/${user.Username}`}>{user.Username}</Nav.Link>
            )}
            {isAuth() && (
              <Button variant="link" onClick={() => { onLoggedOut() }}>Logout</Button>
            )}
            {!isAuth() && (
              <Nav.Link href="/">Sign In</Nav.Link>
            )}
            {!isAuth() && (
              <Nav.Link href="/register">Sign Up</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

Menubar.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired
  }).isRequired,
};