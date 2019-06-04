import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import './index.css';
import App from './Components/App';
import store from './store';
import * as actionCreators from './ActionCreators/actionCreators';

function mapStateToProps(state) {
    return {
        temperature: state.temperature,
        latitude: state.latitude,
        longitude: state.longitude,
        lastReceived: state.lastReceived
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

console.log(store.getState());

render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));