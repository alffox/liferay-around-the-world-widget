import React from "react";

import AtwPicturesCard from "./AtwPicturesCard.es";

class AtwLocalDataBottom extends React.Component {
  render() {
    return <AtwPicturesCard picturesData={this.props.picturesData} />;
  }
}

export default AtwLocalDataBottom;
