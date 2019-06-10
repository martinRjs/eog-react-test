import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-content">
          <span>Temperature:</span> {this.props.temperature}<br />
          <span>Latitude:</span> {this.props.latitude}<br />
          <span>Longitude:</span> {this.props.longitude}<br />
          <span>Last Received:</span>{this.counter}{this.props.lastReceived}<br />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currentTemperature }) {
  const { temperature, latitude, longitude, lastReceived } = currentTemperature;
  return {
    temperature,
    latitude,
    longitude,
    lastReceived,
  }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard);

export default DashboardContainer;


