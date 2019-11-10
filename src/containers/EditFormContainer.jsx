import React, { Component } from 'react';

export default class EditFormContainer extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { match: { params: { id } } } = this.props;

    return (
      <div>
        <form onSubmit = { this.handleSubmit }>
          <input type='text' name='first_name' placeholder='First name' />
          <input type='text' name='last_name' placeholder='Last name' />
          <input type='text' name='phone' placeholder='Phone' />
          <input type='text' name='email' placeholder='Email' />
          <input type='text' name='website' placeholder='Website' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
