//  state argument is not the application state but the state this reducer is responsible for
//  'state = null' is ES6 syntax for: when state is undefined (what will be the case the first time the app will be loaded) --> set it to null
export default function (state = null, action) {
  switch (action.type) {
    case 'SPORT_SELECTED':
      // debugger
      return action.payload
    default:
      return state   // if the action was not triggered by this reducer, return default 'state'
  }
}
