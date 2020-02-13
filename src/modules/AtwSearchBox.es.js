import React from "react";

class AtwSearchBox extends React.Component {

    filterList(event) { // Feature inspired by https://www.jondjones.com/frontend/react/components/how-to-build-a-filterable-search-bar-in-react
        let currentFlags = this.state.initialFlags;
        currentFlags = currentFlags.filter((location) => {
            return location.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ currentFlags: currentFlags });
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={this.preventSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Find Location ..." aria-label="Search" onChange={this.props.filterList} />
            </form>
        );
    }
}

export default AtwSearchBox;
