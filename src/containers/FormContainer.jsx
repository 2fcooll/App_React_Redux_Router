import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUserData } from '../actions';
import UserForm from '../components/UserForm.jsx';

class FormContainer extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { match: { params: { id } }, history } = this.props;
    const { sendUserData } = this.props;
    const data = [...e.target].reduce((result, input) => {
      if (input.type === 'text' && input.value) {
        result[input.name] = input.value;
      }
      return result;
    }, {});
    sendUserData(data, id);
    history.goBack();
  }

  render() {
    return (
      <div>
        <UserForm handleSubmit = {this.handleSubmit } />
      </div>
    );
  }
}

export default connect(state => state, { sendUserData })(FormContainer);
