import React from "react";

import LazyLoad from "react-lazyload";

class AtwPicture extends React.Component {
  render() {
    return (
      <LazyLoad>
        <div className="card pictures text-center">
          <a
            href={this.props.pictureURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="card-img-top img-fluid"
              src={this.props.pictureURL}
              alt={this.props.pictureDescription}
            />
          </a>
          <div className="card-block">
            <small className="text-muted">
              <p>{this.props.pictureDescription}</p>
              Photo by{" "}
              <a
                href={
                  this.props.pictureAuthorURL +
                  "?utm_source=around_the_world&utm_medium=referral"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.pictureAuthorUsername}{" "}
              </a>
              via{" "}
              <a
                href={this.props.pictureSiteAttributionURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.pictureSiteAttribution}
              </a>
            </small>
          </div>
        </div>
      </LazyLoad>
    );
  }
}

export default AtwPicture;
