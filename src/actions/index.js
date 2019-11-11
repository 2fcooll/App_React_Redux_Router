export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const EDIT_USER = 'EDIT_USER';
export const ADD_USER = 'ADD_USER';
export const TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION';

export const getUsers = id => dispatch => {
    fetch(`https://gorest.co.in/public-api/users${id ? '/' + id : ''}`, {
      headers: { 'Authorization': 'Bearer hCtRWHfj7yo32tJsLiFmFedqa6T-wksSWUzZ' }
    })
      .then(res => res.json())
      .then(res => {
        if (res._meta.success && !id) {
          dispatch({ type: GET_USERS, users: res.result });
        } else if (res._meta.success && id) {
          dispatch({ type: GET_USER, user: res.result });
        } else if (!res._meta.success) {
          dispatch({ type: TOGGLE_NOTIFICATION, message: 'Error: ' + res.result[0].message });
        }
      });
};

export const sendUserData = (data, id) => dispatch => {
  fetch(`https://gorest.co.in/public-api/users${id ? '/' + id : ''}`, {
    method: id ? 'PATCH' : 'POST',
    body: JSON.stringify(data),
    headers: {
      'Authorization': 'Bearer hCtRWHfj7yo32tJsLiFmFedqa6T-wksSWUzZ',
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res._meta.success && id) {
        dispatch({ type: EDIT_USER, user: res.result });
      } else if (res._meta.success && !id) {
        dispatch({ type: ADD_USER, user: res.result });
      } else if (!res._meta.success) {
        dispatch({ type: TOGGLE_NOTIFICATION, message: 'Error: ' + res.result[0].message });
      }
    });
};

export const toggleNotification = message => ({
  type: TOGGLE_NOTIFICATION,
  message
});
