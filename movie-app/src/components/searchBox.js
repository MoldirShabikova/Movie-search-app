import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="form-control"
          placeholder="Type to search..."
          onChange={(event) => this.props.setSearchValue(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBox;
