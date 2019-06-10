export function update({ metric: temperature, latitude, longitude, timestamp: lastReceived }) {
  return {
    type: 'UPDATE',
    payload: {
      temperature,
      latitude,
      longitude,
      lastReceived
    }
  }
}


export function updateAfter1second({ temperature, latitude, longitude, lastReceived }) {

  return (dispatch) => {

    setInterval(() => {
      console.log('martin');
    }, 4000)
  }
}
