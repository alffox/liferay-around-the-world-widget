import React from "react";

class AtwWebCamsIndicator extends React.Component {
  render() {
    return (
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to={this.props.dataSlideTo}
        className="active"
      ></li>
    );
  }
}

export default AtwWebCamsIndicator;
