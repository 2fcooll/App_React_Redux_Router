import React from 'react';
import { Link } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../helpers';

const Pagination = ({ users }) => {
  if (users) {
    return (
      <div>
        <ul>
          {[...Array(Math.ceil(users.length / ITEMS_PER_PAGE))].map((e, i) => (
            <li key={i}>
              <Link to={`/page/${i+1}/`}>{i+1}</Link>
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
