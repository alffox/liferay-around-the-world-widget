import React from "react";

class AtwFooterAboutButton extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    Liferay.Util.openWindow({
      dialog: {
        bodyContent:
          "<p>Liferay Around the World is a Single Page Application showing information for Liferay locations around the world: <a href='https://www.liferay.com/locations' target='_blank' rel='noopener noreferrer'>https://www.liferay.com/locations</a></p><p>All APIs have been used for demo, non-commercial purposes. You may read more here: <a href='https://github.com/alffox/npm-react-liferay-around-the-world-portlet/blob/master/README.md#api--credit' target='_blank' rel='noopener noreferrer'>https://github.com/alffox/npm-react-liferay-around-the-world-portlet/blob/master/README.md#api--credit</a></p><h3 className='anchor'>Purpose of this project</h3><p>Back in late 90's when having an internet connection was not always possible, I used to get to know people from all overthe world through paper letters. At a point, I decided to ask each of my penpals to draw a flag of the country they were writing from and send it back to me. Eventually, after collecting all of them, I could get a huge poster, hanging on my room's wall, showing me the colors of the world I was in touch with. This project is inspired by those times.</p><p> Where are my co-workers worldwide living? What's going on at their location right now? How can I get to know better other Liferay offices worldwide countries?</p><p>And also: What's going on at my location at the moment? Howcan I get useful information, all in one place?</p><p><strong>Around the World</strong> would like to cover this needs and encourage the global mutual knowledge of our countries. The name is inspired by a <a href='https://en.wikipedia.org/wiki/Around_the_World_(Red_Hot_Chili_Peppers_song)' target='_blank' rel='noopener noreferrer'>popular song of the late 90's</a></p><p>More on GitHub: <a href='https://github.com/alffox/npm-react-liferay-around-the-world-portlet' target='_blank' rel='noopener noreferrer'>https://github.com/alffox/npm-react-liferay-around-the-world-portlet</a></p>",
        centered: true,
        headerContent: "<h2 className='modal-title'>About this App</h2>",
        modal: true,
        width: 600
      }
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <button className="btn btn-light" onClick={this.openModal}>
          About
        </button>
      </div>
    );
  }
}

export default AtwFooterAboutButton;
