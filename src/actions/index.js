export function selectSport(sport) {
  // console.log('A sport has been selected:', sport.name)

  // selectSport is an ActionCreator; needs to return an action which is
  // an object with a type property
  return {
    type: 'SPORT_SELECTED', // an action always returns a type
    payload: sport // and it sometimes returns a payload
  }
}
