import React from "react";

import AtwFooterAboutButton from "./AtwFooterAboutButton.es";
import AtwFooterNewIssueFeatRequestButton from "./AtwFooterNewIssueFeatRequestButton.es";
import AtwFooterPoweredByButton from "./AtwFooterPoweredByButton.es";

class AtwFooterButtons extends React.Component {
  render() {
    return (
      <div className="row">
        <AtwFooterAboutButton />
        <AtwFooterNewIssueFeatRequestButton />
        <AtwFooterPoweredByButton />
      </div>
    );
  }
}

export default AtwFooterButtons;
