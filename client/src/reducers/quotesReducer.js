import initialState from './initialState';
import {RECEIVE_ALL_QUOTES} from '../actions/actionTypes';

export default function quotes(state = initialState.quotes, action) {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_QUOTES:
      if(action.quotes) {
        newState = action.quotes;
      } else {
        newState = state;
      }
      return newState;
    default:
      return state;
  }
}
