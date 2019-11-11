import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, toggleNotification } from '../actions';
import Table from '../components/Table.jsx';
import Pagination from '../components/Pagination.jsx';
import { splitContentIntoPages } from '../helpers';
import { Link } from 'react-router-dom';
import Notification from '../components/Notification.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    const { getUsers } = props;

    getUsers();
  }

  render() {
    const { users, notification, toggleNotification } = this.props;
    const { match: { params: { page } } } = this.props;

    return (
      <div>
        <Notification notification = { notification } toggleNotification = { toggleNotification } />
        <Table users = { splitContentIntoPages(users, page) } />
        <Pagination users = { users } />
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.reducer.users,
    notification: state.reducer.notification
   }),
  { getUsers, toggleNotification }
)(App);
