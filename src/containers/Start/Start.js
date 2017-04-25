import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../img/LogoURSS.png'

class Start extends Component {
  render() {
    return (
      <div className="register-page">
        <Grid>
          <Row>
            <Col mdOffset={4} md={4} lgOffset={4} lg={4}>
              <img src={Logo} alt="Logo Ultimate RSS" className="logo"/>
              <h1>Ultimate RSS <br/> <small>Powered by React</small></h1>
            </Col>
          </Row>
          <Row>
            <Col mdOffset={4} md={4} lgOffset={4} lg={4}>
              <Link className="loginButton" to="/login">
                <Button
                  bsSize="large"
                  bsClass="">
                  Login
                </Button>
              </Link>
              <br/>
              <Link className="registerButton" to="/register">
                <Button
                  bsSize="large"
                  bsClass="">
                  Register
                </Button>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Start;
