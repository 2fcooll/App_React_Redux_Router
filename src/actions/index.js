export const GET_USERS = 'GET_USERS';

export const getUsers = () => dispatch => {
    fetch('https://gorest.co.in/public-api/users?access-token=zKT8i4hEbPym-CkqMV5k9KUOIcmP9CkwahdR')
      .then(res => res.json())
      .then(res => {
        if (res._meta.success) {
          dispatch({ type: GET_USERS, users: res.result });
        }
      });
};
