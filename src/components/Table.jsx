import React from 'react';

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
                <td>{user.first_name}{user.last_name}</td>
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
