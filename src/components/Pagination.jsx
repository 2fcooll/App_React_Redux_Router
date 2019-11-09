import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ users }) => {
  if (users) {
    return (
      <div>
        <ul>
          {users.map((e, i) => (
            <li>
              <Link to={`/page/${i}/`}>{i}</Link>
            </li>
            )
          )}
        </ul>
      </div>
    );
  }
  return null;
};

export default Pagination;
