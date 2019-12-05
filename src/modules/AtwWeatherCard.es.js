import React from "react";

import AtwLoadingSpinner from "./AtwLoadingSpinner.es";
import AtwCardHeader from "./AtwCardHeader.es";
import AtwWeather from "./AtwWeather.es";

class AtwWeatherCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader
          iconName="sun"
          cardKey="Weather"
          APIAttribution="OpenWeatherMap.org"
          APIURL="https://openweathermap.org/"
        />
        {this.props.isWeatherLoading ? (
          <AtwLoadingSpinner />
        ) : (
          <AtwWeather
            currentLocation={this.props.currentLocation}
            currentWeatherCountry={this.props.currentWeatherCountry}
            currentTemperatureCelsius={this.props.currentTemperatureCelsius}
            currentTemperatureFahrenheit={
              this.props.currentTemperatureFahrenheit
            }
            setCelsius={this.props.setCelsius}
            setFahrenheit={this.props.setFahrenheit}
            isCelsius={this.props.isCelsius}
            currentForecastCountry={this.props.currentForecastCountry}
            currentWeatherDescription={this.props.currentWeatherDescription}
            currentIconURL={this.props.currentIconURL}
            forecastData={this.props.forecastData}
          />
        )}
      </div>
    );
  }
}

export default AtwWeatherCard;
