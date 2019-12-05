import React from "react";

class AtwCurrentLocation extends React.Component {
  render() {
    return (
      <div className="navbar-brand mx-3">
        <div
          className={
            this.props.currentLocationISO_3166_1_alpha_2 +
            " flag-navbar mx-auto"
          }
        />
        <div>
          {this.props.currentLocation}, {this.props.currentCountry}
        </div>
      </div>
    );
  }
}

export default AtwCurrentLocation;
