import React from "react";

import AtwLoadingSpinner from "./AtwLoadingSpinner.es";
import AtwCardHeader from "./AtwCardHeader.es";
import AtwWebCams from "./AtwWebCams.es";

class AtwWebCamCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader
          iconName="camera"
          cardKey="Country Webcams"
          APIAttribution="Webcams.travel"
          APIURL="https://www.webcams.travel/"
        />
        {this.props.isWebCamLoading ? (
          <AtwLoadingSpinner />
        ) : (
          <AtwWebCams webCamData={this.props.webCamData} />
        )}
      </div>
    );
  }
}

export default AtwWebCamCard;
