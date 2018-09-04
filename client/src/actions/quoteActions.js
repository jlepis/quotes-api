import * as types from './actionTypes';

export function copiedQuote(value) {
  return {type: types.COPY_QUOTE, copyquote: value};
}

export function copyQuote(value) {
  return dispatch => {
    return dispatch(copiedQuote(value))
  }
}

export function receiveQuote(json) {
  // TODO - check response?
  return {type: types.RECEIVE_QUOTE, quote: json[0]};
}

// TODO - check response length?
export function fetchQuote() {
  return dispatch => {
    return fetch('/random/quote')
    .then(response => response.json())
    .then(json => dispatch(receiveQuote(json)));
  };
}
