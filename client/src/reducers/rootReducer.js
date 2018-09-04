import {combineReducers} from 'redux';
import quote from './quoteReducer';

const rootReducer = combineReducers({
  quote
});

export default rootReducer;
