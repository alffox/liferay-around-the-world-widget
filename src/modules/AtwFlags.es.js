import React from "react";

import AtwFlag from "./AtwFlag.es";

class AtwFlags extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="location-tags">
            {this.props.locationsData.locations.map((location, index) => {
              return (
                <AtwFlag
                  key={index}
                  handleClick={this.props.handleClick}
                  currentLocationIndex={index}
                  currentLocation={location.title}
                  currentCountry={location.country}
                  currentLocationISO_3166_1_alpha_2={
                    location.ISO_3166_1_alpha_2
                  }
                  currentTimeZoneDBName={location.timezone_database_name}
                  currentGrowURL={location.grow_URL}
                  classes={
                    location.ISO_3166_1_alpha_2 + " flag-button mx-auto mr-3"
                  }
                  currentWikiDescription={location.wiki.description}
                  currentWikiURL={location.wiki.URL}
                  currentLatitude={location.location.lat}
                  currentLongitude={location.location.lon}
                  locationTitle={location.title}
                  locationCountry={location.country}
                />
              );
            })}
          </h3>
        </div>
      </div>
    );
  }
}

export default AtwFlags;
