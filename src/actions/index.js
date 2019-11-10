export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';

export const getUsers = (id='') => dispatch => {
    fetch(`https://gorest.co.in/public-api/users${id ? '/' + id : id}?access-token=zLLmbXgcCajMU5Hjc_mO8DiwzqUGfjDgZOG-`)
      .then(res => res.json())
      .then(res => {
        if (res._meta.success && !id) {
          dispatch({ type: GET_USERS, users: res.result });
        } else if (res._meta.success && id) {
          dispatch({ type: GET_USER, user: res.result });
        }
      });
};
