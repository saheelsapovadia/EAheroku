import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getNovelById = (id) => {
  let novel;
  return (dispatch) => {
    axios.get('http://localhost:5000/api/novels/' + id).then((response) => {
      console.log(response.data);
      novel = response.data;
      //console.log(this.state.novelinfo);
      dispatch({ type: actionTypes.GET_NOVEL_BY_ID, novel: novel });
    });
  };
};
