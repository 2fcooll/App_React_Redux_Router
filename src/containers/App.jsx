import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import Table from '../components/Table.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    const { getUsers } = props;

    getUsers();
  }

  render() {
    const { users } = this.props;
    
    return (
      <div>
        <Table users = { users } />
      </div>
    );
  }
}

export default connect(
  state => ({ users: state.reducer.users }),
  { getUsers }
)(App);
