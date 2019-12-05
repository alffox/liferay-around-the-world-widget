import React from "react";

import AtwWebCamsIndicators from "./AtwWebCamsIndicators.es";
import AtwWebCamsPictures from "./AtwWebCamsPictures.es";

class AtwWebCams extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide webcam card-body text-center"
        data-ride="carousel"
        data-interval="false"
      >
        <AtwWebCamsIndicators webCamData={this.props.webCamData} />
        <AtwWebCamsPictures webCamData={this.props.webCamData} />
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default AtwWebCams;
