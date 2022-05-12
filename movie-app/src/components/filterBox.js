import React, { Component } from "react";

class FilterBox extends Component {
  render() {
    return (
      <div>
        <select
          className="form-control ml-3"
          onChange={(event) => this.props.setFilterValue(event.target.value)}
        >
          <option defaultValue={""}>Choose type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episodes">Episodes</option>
        </select>
      </div>
    );
  }
}

export default FilterBox;
