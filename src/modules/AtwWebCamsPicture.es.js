import React from "react";

class AtwWebCamsPicture extends React.Component {
  render() {
    return (
      <div className={"carousel-item " + this.props.className}>
        <img
          className="d-block w-100 img-fluid img-thumbnail webcam-picture"
          src={this.props.webCamImageURL}
          alt={this.props.webCamAltText}
        />
        <p>
          <small className="font-italic">
            {" "}
            {this.props.webCamLocation}, {this.props.webCamRegion},{" "}
            {this.props.webCamLocationCountry}{" "}
          </small>
        </p>
      </div>
    );
  }
}

export default AtwWebCamsPicture;
