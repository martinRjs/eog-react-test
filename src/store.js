import { createStore } from 'redux';

import { rootReducer } from './Reducers/rootReducer';

const defaultState = {
  temperature: 296.70171815178423,
  latitude: 34.17278358219306,
  longitude: -92.93805783771036,
  lastReceived: "3 seconds ago"
}

export default createStore(
  rootReducer,
  defaultState
);

