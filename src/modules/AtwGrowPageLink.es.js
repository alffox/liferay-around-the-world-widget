import React from "react";

class AtwGrowPageLink extends React.Component {
  render() {
    return (
      <div className="card w-100 my-1">
        <div className="card-body d-flex align-items-center">
          <img
            className="float-left img-fluid favicon pr-1 grow-logo"
            src="/o/npm-react-liferay-around-the-world-portlet/images/grow_logo.png"
            alt="Grow logo"
          />
          Official Grow page:{" "}
          <a
            href={this.props.currentGrowURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pl-1">{this.props.currentCountry} Office</span>
          </a>
        </div>
      </div>
    );
  }
}

export default AtwGrowPageLink;
