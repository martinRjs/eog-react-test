import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers/rootReducer';

const defaultState = {
  currentTemperature: {
    temperature: 296.70171815178423,
    latitude: 34.17278358219306,
    longitude: -92.93805783771036,
    lastReceived: "3 seconds ago"
  }
}

export default createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
);