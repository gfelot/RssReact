import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap'
import FluxList from './FluxList';
import s from './components.css';

const FluxModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  render() {
    return (
        <NavItem eventKey={1} onClick={this.open}>Add
          <Modal show={this.state.showModal} onHide={this.close} bsSize="lg">
            <Modal.Header closeButton />
            <Modal.Body>
              <FluxList/>
            </Modal.Body>
          </Modal>
        </NavItem>
    );
  }
});

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
        <FluxModal />
        <NavItem eventKey={2} href="#">Logout</NavItem>
      </Nav>
      </Navbar>
    )
  }
}

export default Header
