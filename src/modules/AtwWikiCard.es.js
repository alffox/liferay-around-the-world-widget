import React from "react";

import AtwCardHeader from "./AtwCardHeader.es";
import AtwWiki from "./AtwWiki.es";

class AtwWikiCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader
          iconName="wiki"
          cardKey="Wiki"
          APIAttribution="Wikipedia"
          APIURL="https://en.m.wikipedia.org/wiki/Main_Page"
        />
        <AtwWiki
          currentCountry={this.props.currentCountry}
          currentWikiDescription={this.props.currentWikiDescription}
          currentWikiURL={this.props.currentWikiURL}
        />
      </div>
    );
  }
}

export default AtwWikiCard;
