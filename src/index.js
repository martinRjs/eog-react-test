import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

import './index.css';
import App from './Components/App';
import store from './store';
import { update } from './ActionCreators/actionCreators';

const Main = connect(null, { update })(App);

render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));