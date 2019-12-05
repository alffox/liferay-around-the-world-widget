import React from "react";

import AtwWebCamsPicture from "./AtwWebCamsPicture.es.js";

class AtwWebCamsPictures extends React.Component {
  render() {
    return (
      <div className="carousel-inner">
        {this.props.webCamData &&
          this.props.webCamData.map((picture, index) => {
            return (
              <AtwWebCamsPicture
                key={index}
                className={index === 0 ? "active" : ""}
                webCamImageURL={picture.image.current.preview}
                webCamAltText={picture.title}
                webCamLocation={picture.location.city}
                webCamRegion={picture.location.region}
                webCamLocationCountry={picture.location.country}
              />
            );
          })}
      </div>
    );
  }
}

export default AtwWebCamsPictures;
