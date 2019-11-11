import { combineReducers } from 'redux';
import { GET_USERS, GET_USER, EDIT_USER, ADD_USER, TOGGLE_NOTIFICATION } from '../actions';

const initialState = {
  notification: '',
  users: [],
  user: {}
};

const reducer = (state = initialState, action) => {
  let oldUsers;

  switch(action.type) {
    case GET_USERS: {
      return Object.assign({}, state, { users: action.users });
    }
    case GET_USER: {
      return Object.assign({}, state, { user: action.user })
    }
    case EDIT_USER: {
      oldUsers = [...state.users];
      oldUsers.splice(oldUsers.findIndex(e => e.id === action.user.id), 1, action.user);
      return Object.assign({}, state, { users: oldUsers });
    }
    case ADD_USER: {
      oldUsers = [...state.users];
      oldUsers.unshift(action.user);
      return Object.assign({}, state, { users: oldUsers });
    }
    case TOGGLE_NOTIFICATION: {
      return Object.assign({}, state, { notification: action.message });
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  reducer
});
