import React from 'react';

const Profile = ({ user }) => {
  console.log(user, 'user');
  if (Object.keys(user).length) {
    return (
      <div className='profile'>
        <div>
          <img className='profile__image' src={user._links.avatar.href} />
        </div>
        <div>
          <ul className='profile__list'>
            <li className='profile__list-item'>{`${user.first_name} ${user.last_name}`}</li>
            <li className='profile__list-item'>{user.address}</li>
            <li className='profile__list-item'>{user.email}</li>
            <li className='profile__list-item'>{user.phone}</li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
};

export default Profile;
