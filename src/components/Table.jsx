import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ users }) => {
  if (users) {
    return (
      <table className='table'>
        <tbody>
          {users.map(user => (
              <tr key={user.id} className='table__row'>
                <td className='table__cell'>
                  <img className='image' src={user._links.avatar.href} alt=""/>
                </td>
                <td className='table__cell'>
                  <Link to={`/users/${user.id}/`}>{user.first_name}{user.last_name}</Link>
                </td>
                <td className='table__cell'>{user.phone}</td>
                <td className='table__cell'>{user.email}</td>
                <td className='table__cell'>{user.website}</td>
                <td className='table__cell'>
                  <Link to={`/users/${user.id}/edit/`}>&#x270E;</Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
  return null;
};

export default Table;
