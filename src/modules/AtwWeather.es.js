import React from "react";

import AtwWeatherForecasts from "./AtwWeatherForecasts.es";

class AtwWeather extends React.Component {
  render() {
    return (
      <div className="weather card-body text-center">
        <p>{this.props.currentLocation}</p>
        <img
          className="weather-icon-main"
          src={this.props.currentIconURL}
          alt={this.props.currentWeatherDescription}
        />
        {this.props.isCelsius ? (
          <p>
            {this.props.currentTemperatureCelsius} °C ,{" "}
            {this.props.currentWeatherDescription}
          </p>
        ) : (
          <p>
            {this.props.currentTemperatureFahrenheit} °F ,{" "}
            {this.props.currentWeatherDescription}
          </p>
        )}
        <div className="btn-group-item">
          <button
            value="celsius"
            className="btn btn-outline-secondary btn-outline-borderless btn-temperature"
            type="button"
            onClick={this.props.setCelsius}
          >
            °C
          </button>
          |
          <button
            value="fahrenheit"
            className="btn btn-outline-secondary btn-outline-borderless btn-temperature"
            type="button"
            onClick={this.props.setFahrenheit}
          >
            °F
          </button>
        </div>
        <hr />
        <AtwWeatherForecasts
          forecastData={this.props.forecastData}
          currentForecastCountry={this.props.currentForecastCountry}
          isCelsius={this.props.isCelsius}
        />
      </div>
    );
  }
}

export default AtwWeather;
