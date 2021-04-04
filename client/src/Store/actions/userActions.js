import * as actionTypes from './actionTypes';
import axios from 'axios';
export const userLogin = (token, history) => {
  return (dispatch) => {
    axios
      .post('/api/auth/checkToken', { body: token })
      .then((user) => {
        //console.log('getUser');
        localStorage.setItem('userToken', token);
        dispatch({ type: actionTypes.USER_LOGIN, user: { ...user.data } });
        //console.log(history);
        if (history) history.push('/');
      })
      .catch((err) => {
        dispatch({ type: actionTypes.USER_LOGOUT });

        console.log(err);
      });
  };
};

export const userLogout = (token) => {
  localStorage.clear();
  return { type: actionTypes.USER_LOGOUT };
};

export const addBookmark = (userId, novelId) => {
  return (dispatch) => {
    axios
      .post('/api/users/' + userId + '/addbookmark', {
        novelId: novelId,
      })
      .then(function (response) {
        dispatch({
          type: actionTypes.USER_ADD_BOOKMARK,
          newBookmark: response.data,
        });
      })
      .catch((err) => {});
  };
};

export const removeBookmark = (userId, novelId) => {
  return (dispatch) => {
    axios
      .post('api/users/' + userId + '/removebookmark', {
        novelId: novelId,
      })
      .then(function (response) {
        //console.log(response);
        dispatch({
          type: actionTypes.USER_REMOVE_BOOKMARK,
          novelId: novelId,
        });
      })
      .catch((err) => {});
  };
};
