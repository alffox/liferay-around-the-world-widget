import React from "react";

import AtwIcon from "./AtwIcon.es";

class AtwTimeDate extends React.Component {
  render() {
    return (
      <div className="timedate">
        <AtwIcon classes="lexicon-icon inline-item" iconName="time" />
        <span className="time px-1 mr-3">{this.props.time}</span>
        <AtwIcon classes="lexicon-icon inline-item" iconName="calendar" />
        <span className="date px-1">{this.props.date}</span>
      </div>
    );
  }
}

export default AtwTimeDate;
