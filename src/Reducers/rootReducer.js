export function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        temperature: action.temperature,
        latitute: action.latitute,
        longitud: action.longitud,
        lastUpdated: action.lastUpdated
      };
    default:
      return state;
  }
}
