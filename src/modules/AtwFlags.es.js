import React from "react";

import AtwFlag from "./AtwFlag.es";

class AtwFlags extends React.Component {

  constructor() {
    super();
    this.state = {
      initialFlags: [],
      currentFlags: []
    };
    this.filterList = this.filterList.bind(this);
  }

  filterList(event) {
    let currentFlags = this.state.initialFlags;
    currentFlags = currentFlags.filter((location) => {
      return location.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ currentFlags: currentFlags });
  }

  componentDidMount() {
    this.setState({
      initialFlags: this.props.content,
      currentFlags: this.props.content
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="location-tags">
            {this.state.currentFlags.map((location, index) => {
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
          <form>
            <input type="text" placeholder="Search" onChange={this.filterList} />
          </form>
        </div>
      </div>
    );
  }
}

export default AtwFlags;
