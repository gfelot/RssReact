import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'

import Logo from '../../img/LogoURSS.png'

class Register extends Component {
  login(e) {
    e.preventDefault();
    e.stopPropagation();
    
    this.props.history.push('/View')
  }

  render() {
    return (
      <div className="register-page">
        <Grid>
          <Row>
            <Col mdOffset={4} lgOffset={4} md={4} lg={4}>
              <img src={Logo} alt="Logo Ultimate RSS" className="logo"/>
              <h1>Ultimate RSS <br/> <small>Powered by React</small></h1>
              <form onSubmit={(e) => this.login(e)}>
                <FormGroup>
                  <FormControl
                    inputRef={ref => { this.email = ref; }}
                    required
                    type="email"
                    placeholder="Email"
                    id="email">
                  </FormControl>
                  <FormControl
                    inputRef={ref => { this.password = ref; }}
                    required
                    type="password"
                    placeholder="Password"
                    id="password">
                  </FormControl>
                  <FormControl
                    inputRef={ref => { this.rePassword = ref; }}
                    required
                    type="password"
                    placeholder="Password"
                    id="password">
                  </FormControl>
                  <Button
                    bsClass="btn btn-default btn-login"
                    type="submit">
                    Register
                  </Button>
                </FormGroup>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Register
