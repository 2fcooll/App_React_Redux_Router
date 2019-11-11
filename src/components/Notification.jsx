import React from 'react';

const Notification = ({ notification, toggleNotification }) => {
  if (notification) {
    setTimeout(() => toggleNotification(''), 5000);

    return (
      <div className='notification'>{ notification }</div>
    );
  }
  return null;
};

export default Notification;
