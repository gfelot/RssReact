import React, { Component } from 'react';
import Header from '../App/components/Header';
import FluxAddList from './components/FluxAddList';

class Add extends Component {
  render() {
    return (
      <div>
        <Header />
        <FluxAddList />
      </div>
    );
  }
}

export default Add;
