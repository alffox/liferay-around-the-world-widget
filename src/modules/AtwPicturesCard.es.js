import React from "react";

import AtwPicture from "./AtwPicture.es";

class AtwPicturesCard extends React.Component {
  render() {
    return (
      <div className="card-columns w-100 mt-4">
        {this.props.picturesData &&
          this.props.picturesData.map((picture, index) => {
            return (
              <AtwPicture
                key={index}
                pictureURL={picture.urls.regular}
                pictureAuthorUsername={"@" + picture.user.username}
                pictureAuthorURL={picture.user.links.html}
                pictureDescription={picture.description}
                pictureSiteAttribution={"Unsplash"}
                pictureSiteAttributionURL={
                  "https://unsplash.com/?utm_source=around_the_world&utm_medium=referral"
                }
              />
            );
          })}
      </div>
    );
  }
}

export default AtwPicturesCard;
