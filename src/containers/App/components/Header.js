import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Ultimate RSS</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">Add</NavItem>
        <NavItem eventKey={2} href="#">Logout</NavItem>
      </Nav>
      </Navbar>
    )
  }
}

export default Header
