import React, { Component } from 'react';
import DashboardContainer from './Dashboard'
import '../App.css';
import MapViewContainer from './MapView';

class App extends Component {
  componentDidMount() {
    var self = this;
    setInterval(() => {
      fetch('https://react-assessment-api.herokuapp.com/api/drone')
        .then((response) => response.json())
        .then((data) => {
          console.log('dispatch UPDATE');
          self.props.update(data.data.pop())
        })
    }, 4000)
  };

  render() {
    return (
      <div className="App">
        <header><h1>EOG Data Visualization</h1></header>
        <MapViewContainer/>
        <DashboardContainer/>
      </div>
    );
  }
}

export default App;
