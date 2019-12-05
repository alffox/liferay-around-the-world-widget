import React from "react";

class AtwWeatherForecast extends React.Component {
  render() {
    return (
      <div className="next-days">
        <span className="font-weight-bold">{this.props.forecastDay}</span>
        <br />
        <img
          className="weather-icon-next-days"
          src={this.props.forecastDayIconURL}
          alt={this.props.forecastDayIconDescription}
        />
        <br />
        {this.props.isCelsius ? (
          <div>{this.props.forecastDayTemperatureCelsius} °C</div>
        ) : (
          <div>{this.props.forecastDayTemperatureFahrenheit} °F</div>
        )}
      </div>
    );
  }
}

export default AtwWeatherForecast;
