import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GymListContext from "../../contexts/GymListContext";
import "./SearchBox.css";

class SearchBox extends Component {
  static defaultProps = {
    onSubmit: () => {},
    history: {
      push: () => {},
    },
  };

  static contextType = GymListContext;

  handleSubmit = (e) => {
    this.props.handleSearchSubmit(e);
  };

  render() {
    return (
      <div className="SearchBox_container">
        <form
          className="SearchBox_form"
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e.target.searchBox.value);
          }}
        >
          <label htmlFor="searchBox">Search:</label>
          <input
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="Account name"
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
