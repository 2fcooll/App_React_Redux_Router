import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return <Link to='/hello'>To hello</Link>
  }
}
