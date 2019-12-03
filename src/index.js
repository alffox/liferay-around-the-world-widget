import React from "react";
import ReactDOM from "react-dom";

import locationsData from "./locations.json";

import AtwHeader from "./modules/AtwHeader.es";

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */

console.log(locationsData);

export default function main({ portletElementId }) {
  ReactDOM.render(
    <div className="container-fluid">
      <AtwHeader />
    </div>,
    document.getElementById(portletElementId)
  );
}
