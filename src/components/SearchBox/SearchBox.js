import React, { Component } from "react";
import TypeAheadDropDown from "../../components/TypeAheadDropDown/TypeAheadDropDown";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox_container">
        <div>
          <label htmlFor="searchBox">Search:&nbsp;&nbsp;</label>
        </div>
        <div>
          <TypeAheadDropDown />
        </div>
      </div>
    );
  }
}

export default SearchBox;
