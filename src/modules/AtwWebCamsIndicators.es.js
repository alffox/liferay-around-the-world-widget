import React from "react";

import AtwWebCamsIndicator from "./AtwWebCamsIndicator.es";

class AtwWebCamsIndicators extends React.Component {
  render() {
    return (
      <ol className="carousel-indicators">
        {this.props.webCamData &&
          this.props.webCamData.map((cam, index) => {
            return <AtwWebCamsIndicator key={index} dataSlideTo={index} />;
          })}
      </ol>
    );
  }
}

export default AtwWebCamsIndicators;
