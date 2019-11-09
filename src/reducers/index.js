import { combineReducers } from 'redux';
import { GET_USERS, GET_USER } from '../actions';

const initialState = {
  users: [],
  user: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS: {
      return Object.assign({}, state, { users: action.users });
    }
    case GET_USER: {
      return Object.assign({}, state, { user: action.user })
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  reducer
});
