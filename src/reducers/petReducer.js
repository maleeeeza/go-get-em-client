import { FETCH_CAT_SUCCESS } from '../actions/catAction';

const initialState = {
  cat: {}
};

export default function petReducer(state=initialState, action) {

  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      cat: action.cat
    })
  }
  

  return state;
}
