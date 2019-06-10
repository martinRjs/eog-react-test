export function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      const { temperature, latitude, longitude, lastReceived } = action.payload;
      return {
        currentTemperature: {
          temperature,
          latitude,
          longitude,
          lastReceived,
        }
      };
    default:
      return state;
  }
}