import initialState from './initialState';
import {FETCH_QUOTE, RECEIVE_QUOTE, COPY_QUOTE} from '../actions/actionTypes';

export default function quote(state = initialState.quote, action) {
  let newState;
  switch (action.type) {
    case FETCH_QUOTE:
      return action;
    case RECEIVE_QUOTE:
      if(action.quote) {
        newState = action.quote;
      } else {
        newState = state;
      }
      return newState;
    case COPY_QUOTE:
      console.log(action);
      // we dont want to blow away previous state or mutate it. 
      newState = Object.assign({}, state, {copyquote: action.copyquote})
      return newState;
    default:
      return state;
  }
}
