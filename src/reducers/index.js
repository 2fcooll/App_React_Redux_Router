import { combineReducers } from 'redux';
import { GET_USERS } from '../actions';

const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS: {
      return Object.assign({}, state, { users: action.users });
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  reducer
});
