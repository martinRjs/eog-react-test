export function update(temperature, latitude, longitude, lastReceived) {
  return {
    type: 'UPDATE',
    temperature,
    latitude,
    longitude,
    lastReceived
  }
}