import React from "react";

import AtwIcon from "./AtwIcon.es";

class AtwCardHeader extends React.Component {
  render() {
    return (
      <div className="card-header py-1">
        <AtwIcon
          classes="lexicon-icon inline-item mr-1"
          iconName={this.props.iconName}
        />
        {this.props.cardKey}
        <p>
          <small>
            Powered by{" "}
            <u>
              <a
                href={this.props.APIURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                {this.props.APIAttribution}
              </a>
            </u>
          </small>
        </p>
      </div>
    );
  }
}

export default AtwCardHeader;
