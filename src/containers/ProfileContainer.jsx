import React, { Component } from 'react';
import Profile from '../components/Profile.jsx';
import { getUsers } from '../actions';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    const { getUsers } = props;
    const { match: { params: { id } } } = props;

    getUsers(id);
  }

  render() {
    const { user } = this.props;

    return (
      <>
        <Profile user = { user } />
      </>
    )
  }
}

export default connect(
  state => ({ user: state.reducer.user }),
  { getUsers }
)(ProfileContainer);
