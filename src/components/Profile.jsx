import React from 'react';

const Profile = ({ user }) => {
  if (user) {
    return (
      <div>{user.first_name}</div>
    );
  }
  return null;
};

export default Profile;
