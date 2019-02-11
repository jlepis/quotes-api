import {combineReducers} from 'redux';
import quote from './quoteReducer';
import quotes from './quotesReducer';

const rootReducer = combineReducers({
  quote,
  quotes
});

export default rootReducer;
