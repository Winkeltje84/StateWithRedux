import { combineReducers } from 'redux';
import SportsReducer from './reducer_sports';

const rootReducer = combineReducers({
  sports: SportsReducer
});

export default rootReducer;
