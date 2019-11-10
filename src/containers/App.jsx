import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import Table from '../components/Table.jsx';
import Pagination from '../components/Pagination.jsx';
import { splitContentIntoPages } from '../helpers';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    const { getUsers } = props;

    getUsers();
  }

  render() {
    const { users } = this.props;
    const { match: { params: { page } } } = this.props;

    return (
      <div>
        <Link to='/users/new/'>Добавить</Link>
        <Table users = { splitContentIntoPages(users, page) } />
        <Pagination users = { users } />
      </div>
    );
  }
}

export default connect(
  state => ({ users: state.reducer.users }),
  { getUsers }
)(App);
