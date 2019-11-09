import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ users }) => {
  if (users) {
    return (
      <table>
        <tbody>
          {users.map(user => (
              <tr key={user.id}>
                <td>
                  <img src={user._links.avatar.href} alt=""/>
                </td>
                <td>
                  <Link to={`/users/${user.id}/`}>{user.first_name}{user.last_name}</Link>
                </td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>&#x270E;</td>
                <td>&#x2715;</td>
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
