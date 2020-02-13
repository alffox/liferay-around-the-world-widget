import React from "react";

class AtwSearchBox extends React.Component {
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Filter Locations ..." aria-label="Search" onChange={this.props.filterList} />
            </form>
        );
    }
}

export default AtwSearchBox;
