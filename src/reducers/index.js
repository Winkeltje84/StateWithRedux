import { combineReducers } from 'redux'
import SportsReducer from './reducer_sports'
import ActiveSport from './reducer_active_sport'

const rootReducer = combineReducers({
  sports: SportsReducer,
  activeSport: ActiveSport
});
// what SportsReducer returns becomes available as 'sports'

export default rootReducer;
