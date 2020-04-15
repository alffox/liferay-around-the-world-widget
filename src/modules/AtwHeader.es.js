import React from "react";

import AtwIcon from "./AtwIcon.es";

class AtwHeader extends React.Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-12 text-center text-uppercase">
          <img
            className="float-left img-fluid favicon"
            src="/o/liferay-around-the-world/images/logo.svg"
            alt="Paper airplane icon"
          />
          <h1 className="title-super position-relative d-none d-sm-block">
            Liferay Around the World
          </h1>
          <button className={"btn position-absolute dark-mode " + (this.props.isDarkMode ? 'btn-dark' : 'btn-light')} data-toggle="tooltip" title="Dark Mode" onClick={this.props.toggleDarkMode}>
            <AtwIcon
              classes="lexicon-icon"
              iconName="moon"
            />
          </button>
        </div>
      </header>
    );
  }
}

export default AtwHeader;
