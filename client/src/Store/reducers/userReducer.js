import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isSignedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      const newState = {
        ...state,
        isSignedIn: true,
        ...action.user,
      };

      return newState;

    case actionTypes.USER_LOGOUT:
      const newState1 = {
        isSignedIn: false,
      };
      return newState1;

    case actionTypes.USER_ADD_BOOKMARK:
      console.log('addBookmark reducer..');
      //const newState2 = Object.assign({}, state);
      const newState2 = {
        ...state,
      };
      newState2.user.bookmarked = [
        ...state.user.bookmarked,
        action.newBookmark,
      ];

      return newState2;

    case actionTypes.USER_REMOVE_BOOKMARK:
      //const newState3 = Object.assign({}, state);
      const newState3 = {
        ...state,
      };
      var bookmarkedArr = [...state.user.bookmarked];
      function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
          return ele.novelId != value;
        });
      }
      var updatedBookmarkArr = arrayRemove(bookmarkedArr, action.novelId);
      newState3.user.bookmarked = updatedBookmarkArr;
      console.log('removing reducer');
      return newState3;

    default:
      return state;
  }
};
export default reducer;
