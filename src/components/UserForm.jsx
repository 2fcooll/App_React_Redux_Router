import React from 'react';

const UserForm = ({ handleSubmit }) => {
  return (
    <form onSubmit = { handleSubmit } className='userForm'>
      <input className='userForm__input' type='text' name='first_name' placeholder='First name' />
      <input className='userForm__input' type='text' name='last_name' placeholder='Last name' />
      <input className='userForm__input' type='text' name='gender' placeholder='Gender' />
      <input className='userForm__input' type='text' name='phone' placeholder='Phone' />
      <input className='userForm__input' type='text' name='email' placeholder='Email' />
      <input className='userForm__input' type='text' name='website' placeholder='Website' />
      <input className='userForm__inputTypeSubmit' type='submit' />
    </form>
  );
};

export default UserForm;
