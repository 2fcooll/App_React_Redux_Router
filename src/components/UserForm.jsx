import React from 'react';

const UserForm = ({ handleSubmit }) => {
  return (
    <form onSubmit = { handleSubmit }>
      <input type='text' name='first_name' placeholder='First name' />
      <input type='text' name='last_name' placeholder='Last name' />
      <input type='text' name='gender' placeholder='Gender' />
      <input type='text' name='phone' placeholder='Phone' />
      <input type='text' name='email' placeholder='Email' />
      <input type='text' name='website' placeholder='Website' />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default UserForm;
