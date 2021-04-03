import * as actionTypes from '../actions/actionTypes';

const initialState = {
  novel: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOVEL_BY_ID:
      const newState = {
        ...action.novel,
      };
      return newState;
  }
};
export default reducer;
