import React from "react";

import AtwLoadingSpinner from "./AtwLoadingSpinner.es";
import AtwCurrentLocation from "./AtwCurrentLocation.es";
import AtwTimeDate from "./AtwTimeDate.es";

class AtwNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info p-1">
        <AtwCurrentLocation
          currentLocation={this.props.currentLocation}
          currentCountry={this.props.currentCountry}
          currentLocationISO_3166_1_alpha_2={
            this.props.currentLocationISO_3166_1_alpha_2
          }
        />
        {this.props.isTimeDateLoading ? (
          <AtwLoadingSpinner />
        ) : (
            <AtwTimeDate date={this.props.date} time={this.props.time} />
          )}
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Filter Locations ..." aria-label="Search" onChange={this.props.filterList} />
        </form>
      </nav>
    );
  }
}

export default AtwNavbar;
