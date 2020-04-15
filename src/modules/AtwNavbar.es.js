import React from "react";

import AtwLoadingSpinner from "./AtwLoadingSpinner.es";
import AtwCurrentLocation from "./AtwCurrentLocation.es";
import AtwSearchBox from "./AtwSearchBox.es";
import AtwTimeDate from "./AtwTimeDate.es";

class AtwNavbar extends React.Component {
  render() {
    return (
      <nav className={"navbar navbar-expand-md p-1 " + (this.props.isDarkMode ? 'bg-dark' : 'bg-info')}>
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
        <AtwSearchBox
          filterList={this.props.filterList} />
      </nav>
    );
  }
}

export default AtwNavbar;
