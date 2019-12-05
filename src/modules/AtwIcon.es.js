import React from "react";

class AtwIcon extends React.Component {
  render() {
    return (
      <svg
        className={this.props.classes + " lexicon-icon-" + this.props.iconName}
        focusable="false"
        role="presentation"
      >
        <use
          xlinkHref={
            Liferay.ThemeDisplay.getPathThemeImages() +
            "/clay/icons.svg#" +
            this.props.iconName
          }
        />
      </svg>
    );
  }
}

export default AtwIcon;
