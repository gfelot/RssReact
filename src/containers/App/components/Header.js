import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import s from './header.css';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/view">Ultimate RSS</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/view/add">Add</NavItem>
          <NavItem eventKey={2} href="#">Logout</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
