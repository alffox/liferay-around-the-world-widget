import React from "react";
import ReactDOM from "react-dom";

import locationsData from "./locations.json";

import axios from "axios";

import AtwHeader from "./modules/AtwHeader.es";
import AtwFlags from "./modules/AtwFlags.es";
import AtwNavbar from "./modules/AtwNavbar.es";
import AtwLocalData from "./modules/AtwLocalData.es";
import AtwFooter from "./modules/AtwFooter.es";

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */

//const RESTAPIServer = "https://around-the-world-backend.herokuapp.com";
const RESTAPIServer = "dummy";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialFlags: [],
      currentFlags: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.setCelsius = this.setCelsius.bind(this);
    this.setFahrenheit = this.setFahrenheit.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {

    this.setState({
      initialFlags: locationsData.locations,
      currentFlags: locationsData.locations
    })

    if (localStorage.getItem("lastLocationIndex") === null) {
      localStorage.setItem("lastLocationIndex", 0);
    }

    const lastLocationIndex = localStorage.getItem("lastLocationIndex");

    this.fetchCurrentLocation(locationsData.locations[lastLocationIndex].title);
    this.fetchCurrentCountry(
      locationsData.locations[lastLocationIndex].country
    );
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      locationsData.locations[lastLocationIndex].ISO_3166_1_alpha_2
    );
    this.fetchTime(
      locationsData.locations[lastLocationIndex].timezone_database_name
    );
    this.fetchGrowURL(locationsData.locations[lastLocationIndex].grow_URL);
    this.fetchWeather(
      locationsData.locations[lastLocationIndex].country,
      locationsData.locations[lastLocationIndex].location.lat,
      locationsData.locations[lastLocationIndex].location.lon
    );
    this.fetchWeatherForecast(
      locationsData.locations[lastLocationIndex].country,
      locationsData.locations[lastLocationIndex].location.lat,
      locationsData.locations[lastLocationIndex].location.lon
    );
    this.fetchMapCoordinates(
      locationsData.locations[lastLocationIndex].location.lat,
      locationsData.locations[lastLocationIndex].location.lon
    );
    this.fetchWebCamData(
      locationsData.locations[lastLocationIndex].location.lat,
      locationsData.locations[lastLocationIndex].location.lon,
      locationsData.locations[lastLocationIndex].ISO_3166_1_alpha_2
    );
    this.fetchWikiData(
      locationsData.locations[lastLocationIndex].wiki.description,
      locationsData.locations[lastLocationIndex].wiki.URL
    );
    this.fetchPictures(locationsData.locations[lastLocationIndex].country);
  }

  handleClick(
    currentLocationIndex,
    currentLocation,
    currentCountry,
    currentLocationISO_3166_1_alpha_2,
    currentTimeZoneDBName,
    currentGrowURL,
    currentWikiDescription,
    currentWikiURL,
    currentLatitude,
    currentLongitude
  ) {
    this.setLocationIndex(currentLocationIndex);
    this.fetchCurrentLocation(currentLocation);
    this.fetchCurrentCountry(currentCountry);
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      currentLocationISO_3166_1_alpha_2
    );
    this.fetchTime(currentTimeZoneDBName);
    this.fetchGrowURL(currentGrowURL);
    this.fetchWeather(currentCountry, currentLatitude, currentLongitude);
    this.fetchWeatherForecast(
      currentCountry,
      currentLatitude,
      currentLongitude
    );
    this.fetchMapCoordinates(currentLatitude, currentLongitude);
    this.fetchWebCamData(
      currentLatitude,
      currentLongitude,
      currentLocationISO_3166_1_alpha_2
    );
    this.fetchWikiData(currentWikiDescription, currentWikiURL);
    this.fetchPictures(currentCountry);
  }

  filterList(event) { // Feature inspired by https://www.jondjones.com/frontend/react/components/how-to-build-a-filterable-search-bar-in-react
    let currentFlags = this.state.initialFlags;
    currentFlags = currentFlags.filter((location) => {
      return location.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ currentFlags: currentFlags });
  }

  setLocationIndex(currentLocationIndex) {
    localStorage.setItem("lastLocationIndex", currentLocationIndex);
  }

  setCelsius() {
    if (!this.state.isCelsius)
      this.setState({
        isCelsius: true
      });
  }

  setFahrenheit() {
    if (this.state.isCelsius)
      this.setState({
        isCelsius: false
      });
  }

  fetchCurrentLocation(currentLocation) {
    this.setState({
      currentLocation: currentLocation
    });
  }

  fetchCurrentCountry(currentCountry) {
    this.setState({
      currentCountry: currentCountry
    });
  }

  fetchCurrentLocationISO_3166_1_alpha_2(currentLocationISO_3166_1_alpha_2) {
    this.setState({
      currentLocationISO_3166_1_alpha_2: currentLocationISO_3166_1_alpha_2
    });
  }

  fetchTime(currentTimeZoneDBName) {
    const URL =
      RESTAPIServer +
      "/TimeDateEndpoint?format=json&by=zone&zone=" +
      currentTimeZoneDBName;

    this.setState({ isTimeDateLoading: true }, () => {
      axios
        .get(URL)
        .then(response => response.data)
        .then(data => {
          this.setState({
            isTimeDateLoading: false,
            date: data.formatted.substr(0, data.formatted.indexOf(" ")),
            time: data.formatted.substr(data.formatted.indexOf(" ") + 1)
          });
        });
    });
  }

  fetchGrowURL(currentGrowURL) {
    this.setState({
      currentGrowURL: currentGrowURL
    });
  }

  fetchWeather(currentCountry, currentLatitude, currentLongitude) {
    const weatherURL =
      RESTAPIServer +
      "/weatherEndpoint?lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude +
      "&units=metric";

    this.setState({ isWeatherLoading: true }, () => {
      axios
        .get(weatherURL)
        .then(response => response.data)
        .then(data => {
          this.setState({
            isWeatherLoading: false,
            currentWeatherCountry: currentCountry,
            currentTemperatureCelsius: Math.round(data.main.temp),
            currentTemperatureFahrenheit: Math.round(
              (data.main.temp * 9) / 5 + 32
            ),
            isCelsius: true,
            currentWeatherDescription: data.weather[0].main,
            currentIconURL:
              "https://openweathermap.org/img/w/" +
              data.weather[0].icon +
              ".png"
          });
        });
    });
  }

  fetchWeatherForecast(currentCountry, currentLatitude, currentLongitude) {
    const weatherForecastURL =
      RESTAPIServer +
      "/forecastEndpoint?lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude +
      "&units=metric";

    axios
      .get(weatherForecastURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          currentForecastCountry: currentCountry,
          forecastData: data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
          )
        });
      });
  }

  fetchMapCoordinates(currentLatitude, currentLongitude) {
    this.setState({
      currentLatitude: currentLatitude,
      currentLongitude: currentLongitude
    });
  }

  fetchWebCamData(
    currentLatitude,
    currentLongitude,
    currentLocationISO_3166_1_alpha_2
  ) {
    const webCamDataURL =
      RESTAPIServer +
      "/webcamEndpoint?countryCode=" +
      currentLocationISO_3166_1_alpha_2.toUpperCase() +
      "&lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude;

    this.setState({ isWebCamLoading: true }, () => {
      axios
        .get(webCamDataURL)
        .then(response => response.data)
        .then(data => {
          this.setState({
            isWebCamLoading: false,
            webCamData: data.result.webcams
          });
        });
    });
  }

  fetchWikiData(currentWikiDescription, currentWikiURL) {
    this.setState({
      currentWikiDescription: currentWikiDescription,
      currentWikiURL: currentWikiURL
    });
  }

  fetchPictures(currentCountry) {
    const randomPicturesPageNumber = Math.floor(Math.random() * 20); //helps to display mostly new pictures upon refreshing the page

    const picturesDataURL =
      RESTAPIServer +
      "/picturesEndpoint?page=" +
      randomPicturesPageNumber +
      "&query=" +
      currentCountry;

    this.setState({ isPicturesLoading: true }, () => {
      axios
        .get(picturesDataURL)
        .then(response => response.data)
        .then(data => {
          this.setState({
            isPicturesLoading: false,
            picturesData: data.results
          });
        });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <AtwHeader />
        <AtwFlags
          currentFlags={this.state.currentFlags}
          handleClick={this.handleClick}
        />
        <AtwNavbar
          filterList={this.filterList}
          currentLocation={this.state.currentLocation}
          currentCountry={this.state.currentCountry}
          currentLocationISO_3166_1_alpha_2={
            this.state.currentLocationISO_3166_1_alpha_2
          }
          isTimeDateLoading={this.state.isTimeDateLoading}
          date={this.state.date}
          time={this.state.time}
        />
        <AtwLocalData
          isWeatherLoading={this.state.isWeatherLoading}
          isWebCamLoading={this.state.isWebCamLoading}
          isPicturesLoading={this.state.isPicturesLoading}
          currentLocation={this.state.currentLocation}
          currentGrowURL={this.state.currentGrowURL}
          currentWeatherCountry={this.state.currentWeatherCountry}
          currentTemperatureCelsius={this.state.currentTemperatureCelsius}
          currentTemperatureFahrenheit={this.state.currentTemperatureFahrenheit}
          setCelsius={this.setCelsius}
          setFahrenheit={this.setFahrenheit}
          isCelsius={this.state.isCelsius}
          currentWeatherDescription={this.state.currentWeatherDescription}
          currentIconURL={this.state.currentIconURL}
          currentForecastCountry={this.state.currentForecastCountry}
          forecastData={this.state.forecastData}
          currentLatitude={this.state.currentLatitude}
          currentLongitude={this.state.currentLongitude}
          webCamData={this.state.webCamData}
          currentCountry={this.state.currentCountry}
          currentWikiDescription={this.state.currentWikiDescription}
          currentWikiURL={this.state.currentWikiURL}
          picturesData={this.state.picturesData}
        />
        <AtwFooter />
      </div>
    );
  }
}

export default function main({ portletElementId }) {
  ReactDOM.render(<App />, document.getElementById(portletElementId));
}
