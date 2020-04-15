import React from "react";

import AtwGrowPageLink from "./AtwGrowPageLink.es";
import AtwWeatherCard from "./AtwWeatherCard.es";
import MapContainer from "./MapContainer.es";
import AtwWebCamCard from "./AtwWebCamCard.es";

class AtwLocalDataRight extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <AtwGrowPageLink
          toggleDarkMode={this.props.toggleDarkMode}
          isDarkMode={this.props.isDarkMode}
          currentCountry={this.props.currentCountry}
          currentGrowURL={this.props.currentGrowURL}
        />
        <AtwWeatherCard
          toggleDarkMode={this.props.toggleDarkMode}
          isDarkMode={this.props.isDarkMode}
          isWeatherLoading={this.props.isWeatherLoading}
          currentLocation={this.props.currentLocation}
          currentWeatherCountry={this.props.currentWeatherCountry}
          currentTemperatureCelsius={this.props.currentTemperatureCelsius}
          currentTemperatureFahrenheit={this.props.currentTemperatureFahrenheit}
          setCelsius={this.props.setCelsius}
          setFahrenheit={this.props.setFahrenheit}
          isCelsius={this.props.isCelsius}
          currentForecastCountry={this.props.currentForecastCountry}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          forecastData={this.props.forecastData}
        />
        <MapContainer
          currentLatitude={this.props.currentLatitude}
          currentLongitude={this.props.currentLongitude}
        />
        <AtwWebCamCard
          toggleDarkMode={this.props.toggleDarkMode}
          isDarkMode={this.props.isDarkMode}
          isWebCamLoading={this.props.isWebCamLoading}
          webCamData={this.props.webCamData}
        />
      </div>
    );
  }
}

export default AtwLocalDataRight;
