import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions';
import EditForm from '../components/EditForm.jsx';

class EditFormContainer extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { match: { params: { id } }, history } = this.props;
    const { editUser } = this.props;
    const data = [...e.target].reduce((result, input) => {
      if (input.type === 'text' && input.value) {
        result[input.name] = input.value;
      }
      return result;
    }, {});
    editUser(data, id);
    history.goBack();
  }

  render() {
    return (
      <div>
        <EditForm handleSubmit = {this.handleSubmit } />
      </div>
    );
  }
}

export default connect(state => state, { editUser })(EditFormContainer);
