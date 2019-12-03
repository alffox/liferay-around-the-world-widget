# Liferay Around the World React portlet

![A paper airplane](https://github.com/alffox/npm-react-liferay-around-the-world-portlet/blob/master/src/main/resources/META-INF/resources/images/logo.svg)

Liferay Around the World is a Liferay 7.1 DXP portlet showing information for Liferay locations around the world: https://www.liferay.com/locations

All APIs have been used for demo, non-commercial purposes. You may read more here: https://github.com/alffox/npm-react-liferay-around-the-world-portlet#api--credit

## Purpose of this project

Back in late 90's when having an internet connection was not always possible, I used to get to know people from all over the world through paper letters. At a point, I decided to ask each of my penpals to draw a flag of the country they were writing from and send it back to me. Eventually, after collecting all of them, I could get a huge poster, hanging on my room's wall, showing me the colors of the world I was in touch with. This project is inspired by those times.

Where are my co-workers worldwide living? What's going on at their location right now? How can I get to know better other Liferay offices in worldwide countries? What's going on at my location at the moment? How can I get useful information, all in one place?

**Liferay Around the World** would like to cover this needs and encourage the global mutual knowledge of our countries. The name is inspired by a popular song of the late 90's: https://en.wikipedia.org/wiki/Around_the_World_(Red_Hot_Chili_Peppers_song)

## How to run the app?

1. Clone the project on your machine: `git clone https://github.com/alffox/npm-react-liferay-around-the-world-portlet.git`
2. Navigate to the root directory: `cd npm-react-liferay-around-the-world-portlet/`
3. Compile the portlet with `./gradlew clean build` (Unix-Linux) or `gradlew.bat clean build` (Windows)
4. Locate the deployable .jar file within `npm-react-liferay-around-the-world-portlet/build/libs`
5. Place the .jar file in the `deploy` directory of your Liferay home folder
6. Wait for successful deployment by checking the server logs
7. Place the portlet onto a page by clicking on the top-right "+" icon > Add > Widgets > Sample > NpmReactLiferayAroundTheWorld

(Note: After the above steps, the Google Maps card will not render. To fix that, edit the value within the double quotes at https://github.com/alffox/npm-react-liferay-around-the-world-portlet/blob/master/src/main/resources/META-INF/resources/lib/modules/MapContainer.es.js#L31 by replacing "redacted" with your Google Maps API key and have that key enabled on the host where you wish to run the website (https://console.cloud.google.com/apis/credentials) )

## Can I edit the location list?

Yes. To add or modify locations:

1. Edit the `locationsData` variable at https://github.com/alffox/npm-react-liferay-around-the-world-portlet/blob/master/src/main/resources/META-INF/resources/lib/index.es.js#L15 by populating the json array with the location of your choice:

```
{
    title: "",
    continent: "",
    country: "",
    ISO_3166_1_alpha_2: "",
    timezone_database_name: "",
    state_name: "",
    state_code: "",
    language: "",
    wiki: {
        description: "",
        URL: ""
        },
    location: {
        lat: ,
        lon:
    },
    grow_URL: ""
},

```

---

- **title**: Required. Location's city name
- **continent**: Required. Location's city continent. Possible choices are: Americas, Europe, Africa, Asia-Pacific)
- **country**: Required. Location's city country
- **ISO_3166_1_alpha_2**: Required. Location's city ISO 3166 1 alpha 2 code, 2 digits, lower case. Use this site to find it: https://en.wikipedia.org/wiki/ISO_3166-2
- **timezone_database_name**: Required. Use a value from the "Time Zone" column of this list: https://timezonedb.com/time-zones
  **state_name**: Optional. Location's city state name
  **state_code**: Optional. Location's city state code
- **language**: Required. Location's most spoken language, ISO 639-1 Code format, 2 digits, lower case. Use this site to find it: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
- **wiki**: Required. Location's city country Wiki information. Use the URL https://en.wikipedia.org/api/rest_v1/page/summary/ + `Country` to find the relevant info
- **location**: Required. Location's latitude and longitude. Use this site to find them: https://google-developers.appspot.com/maps/documentation/utils/geocoder/

- **grow_URL**: Required. Location's official page on the internal Liferay Grow website

---

## Information displayed

The **Navigation bar** displays the currently selected location, the current date and time at that location plus other available locations, ordered in dropdown lists by continents

**Time and Date** will appear under the flags list at the top and they will indicate the current time and date on the clicked location

**Latest local news** displays the recent local news for the selected country ordered like this: 6 top headlines in the local language, 8 top headlines in English, 2 top headlines news about technical topics in English. All news will show the source where they come from, the publish date, a picture if present and their typology: Local news: blue background, English news: red, Technical news: orange

**Official Grow page** has a hyperlink to the official Grow page for that location on the Liferay's internal Grow website

**Weather** displays the weather and temperature at the selected location and forecasts for the next 5 days. Buttons to switch between Celsius and Fahrenheit are also provided

**Map** represents the currently selected location on Google Maps

**Nearby web cams** shows 10 web cams snapshots in a slider, taken at the current location and time

**Wiki** shows the first information for the selected country from Wikipedia.org

**Pictures** at the bottom shows selected pictures for the selected country

## Technical details

This project was bootstrapped with the 7.1 [npm React portlet template](https://portal.liferay.dev/docs/7-1/tutorials/-/knowledge_base/t/using-react-in-your-portlets), using the React framework: https://reactjs.org/
The app is optimized for being used on mobile devices through [Bootstrap CSS](https://getbootstrap.com/docs/4.1/getting-started/introduction/) and [Clay UI](https://clayui.com/)

The backend runs through: https://github.com/alffox/around-the-world-backend/blob/master/index.js

### API / Credit

- [TimeZoneDB.com](https://timezonedb.com/)
- [News API](https://newsapi.org/)
- [OpenWeatherMap](https://openweathermap.org/)
- [GoogleMaps API](https://developers.google.com/maps/documentation/)
- [Webcams.travel](https://www.webcams.travel/)
- [Unsplash](https://unsplash.com/)
