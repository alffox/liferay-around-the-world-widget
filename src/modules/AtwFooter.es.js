import React from "react";

import AtwFooterButtons from "./AtwFooterButtons.es";

class AtwFooter extends React.Component {
  render() {
    return (
      <div className="row">
        <footer className="col-md-12 footer text-muted text-center font-small my-3">
          <AtwFooterButtons
            toggleDarkMode={this.props.toggleDarkMode}
            isDarkMode={this.props.isDarkMode}
          />
        </footer>
      </div>
    );
  }
}

export default AtwFooter;
