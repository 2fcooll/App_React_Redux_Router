import React from 'react';
import { Link } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../helpers';

const Pagination = ({ users }) => {
  if (users) {
    return (
      <div className='pagination'>
        <ul className='pagination__list'>
          {[...Array(Math.ceil(users.length / ITEMS_PER_PAGE))].map((e, i) => (
            <Link to={`/page/${i+1}/`}>
              <li key={i} className='pagination__list-item'>
                {i+1}
              </li>
            </Link>
            )
          )}
        </ul>
      </div>
    );
  }
  return null;
};

export default Pagination;
