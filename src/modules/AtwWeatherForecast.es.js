import React from "react";

import Moment from "react-moment";

class AtwWeatherForecast extends React.Component {
  render() {
    return (
      <div className="next-days">
        <span className="font-weight-bold">
          <Moment format="DD">{this.props.forecastDay}</Moment>
          <br />
          <Moment format="ddd">{this.props.forecastDay}</Moment>
        </span>
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
