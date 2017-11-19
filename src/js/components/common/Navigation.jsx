import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavigationItem from './NavigationItem';

const Navigation = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">AH</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavigationItem to="#portfolio" name="Portfolio" active />
        <NavigationItem to="#about" name="About" />
      </Nav>
      <Nav pullRight>
        <NavigationItem to="http://uk.linkedin.com/in/adamhawkin" icon="fa fa-linkedin-square" external />
        <NavigationItem to="https://github.com/ahawkin" icon="fa fa-github-square" external />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
