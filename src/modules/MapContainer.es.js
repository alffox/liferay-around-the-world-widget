import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1 mb-1 embed-responsive embed-responsive-1by1">
        <div className="map embed-responsive-item">
          <Map
            google={this.props.google}
            zoom={5}
            center={{
              lat: this.props.currentLatitude,
              lng: this.props.currentLongitude
            }}
          >
            <Marker
              position={{
                lat: this.props.currentLatitude,
                lng: this.props.currentLongitude
              }}
            />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "redacted"
})(MapContainer);
