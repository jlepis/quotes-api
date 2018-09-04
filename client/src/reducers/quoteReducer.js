import initialState from './initialState';
import {FETCH_QUOTE, RECEIVE_QUOTE} from '../actions/actionTypes';

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
    default:
      return state;
  }
}
