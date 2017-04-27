import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux';

import { loginUserAction } from '../../actions/loginActions';

import Logo from '../../img/LogoURSS.png'

class Login extends Component {
  login = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let email = this.email.value || '',
      password = this.password.value || '';

    this.props.loginUser(email, password)
    console.log("Yipyyoyippiyé");
    if (this.props.fetched){
      console.log("Yipyyoyippiyé2");
      this.props.history.push('/View')
    } else if (this.props.error) {
      console.log(this.props.error);
    }

  }

  render() {
    return (
      <div className="login-page">
        <Grid>
          <Row>
            <Col mdOffset={4} lgOffset={4} md={4} lg={4}>
              <img src={Logo} alt="Logo Ultimate RSS" className="logo"/>
              <h1>Ultimate RSS <br/> <small>Powered by React</small></h1>
              <form onSubmit={ this.login }>
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
                  <Button
                    bsClass="btn btn-default btn-login"
                    type="submit">
                    Login
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => {
      dispatch(loginUserAction(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
