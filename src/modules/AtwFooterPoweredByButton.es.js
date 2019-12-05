import React from "react";

class AtwFooterPoweredByButton extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    Liferay.Util.openWindow({
      dialog: {
        bodyContent:
          "<p><a href='https://timezonedb.com/'>TimeZoneDB.com</a></p><p><a href='https://newsapi.org/'>News API</a></p><p><a href='https://openweathermap.org/'>OpenWeatherMap</a></p><p><a href='https://developers.google.com/maps/documentation/'>  GoogleMaps API</a></p><p><a href='https://www.webcams.travel/'>Webcams.travel</a></p><p><a href='https://unsplash.com/'>Unsplash</a></p>",
        centered: true,
        headerContent: "<h2 className='modal-title'>Powered by ...</h2>",
        modal: true,
        width: 400
      }
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <button className="btn btn-light" onClick={this.openModal}>
          Powered By ...
        </button>
      </div>
    );
  }
}

export default AtwFooterPoweredByButton;
