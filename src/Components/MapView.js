import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

export class MapView extends Component {

  render() {
    return <div id="map-view">
      <Map google={this.props.google} zoom={14} initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}>
        <Marker name="current location" />
      </Map>
    </div>
  }
}

function mapStateToProps({ currentTemperature }) {
  const { latitude, longitude } = currentTemperature;
  return {
    latitude,
    longitude
  }
}

const MapViewContainer = connect(mapStateToProps)(MapView);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA5O92PVJkN1pR6yQ6AP374W4_lDwJKG3Y'
})(MapViewContainer);