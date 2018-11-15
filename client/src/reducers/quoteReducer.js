import initialState from './initialState';
import {FETCH_QUOTE, RECEIVE_QUOTE, RECEIVE_ALL_QUOTES, COPY_QUOTE} from '../actions/actionTypes';

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
    case RECEIVE_ALL_QUOTES:
      if(action.quotes) {
        newState = action.quotes;
      } else {
        newState = newState;
      }
      return newState;
    case COPY_QUOTE:
      // we dont want to blow away previous state or mutate it.
      newState = Object.assign({}, state, {copyquote: action.copyquote})
      return newState;
    default:
      return state;
  }
}
