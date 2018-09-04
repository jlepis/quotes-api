import * as types from './actionTypes';

export function copiedQuote() {
  return {type: types.COPY_QUOTE, copyquote: true};
}

export function copyQuote() {
  return dispatch => {
    dispatch(copiedQuote())
  }
}

export function receiveQuote(json) {
  // TODO - check response?
  return {type: types.RECEIVE_QUOTE, quote: json[0]};
}

// TODO - check response length?
export function fetchQuote() {
  return dispatch => {
    return fetch('/random/quote', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveQuote(json)));
  };
}
