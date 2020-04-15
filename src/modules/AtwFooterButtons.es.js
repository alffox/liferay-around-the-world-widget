import React from "react";

import AtwFooterAboutButton from "./AtwFooterAboutButton.es";
import AtwFooterNewIssueFeatRequestButton from "./AtwFooterNewIssueFeatRequestButton.es";
import AtwFooterPoweredByButton from "./AtwFooterPoweredByButton.es";

class AtwFooterButtons extends React.Component {
  render() {
    return (
      <div className="row">
        <AtwFooterAboutButton
          toggleDarkMode={this.props.toggleDarkMode}
          isDarkMode={this.props.isDarkMode}
        />
        <AtwFooterNewIssueFeatRequestButton
          toggleDarkMode={this.props.toggleDarkMode}
          isDarkMode={this.props.isDarkMode}
        />
        <AtwFooterPoweredByButton
          toggleDarkMode={this.props.toggleDarkMode}
          isDarkMode={this.props.isDarkMode}
        />
      </div>
    );
  }
}

export default AtwFooterButtons;
