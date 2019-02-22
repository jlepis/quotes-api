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

export function receiveAllQuotes(json) {
  // TODO - check response?
  return {type: types.RECEIVE_ALL_QUOTES, quotes: json};
}

// TODO - check response length?
export function fetchQuote() {
  return dispatch => {
    return fetch('/api/random/quote')
    .then(response => response.json())
    .then(json => dispatch(receiveQuote(json)));
  };
}

export function fetchQuotes() {
  return dispatch => {
    return fetch('/api/quotes')
    .then(response => response.json())
    .then(json => dispatch(receiveAllQuotes(json)));
  };
}
