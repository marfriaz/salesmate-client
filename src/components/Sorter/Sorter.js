import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Sorter.css";

class Sorter extends Component {
  handleSubmit = (e) => {
    const { accountList } = this.props;

    let sortedList = accountList.sort(function (a, b) {
      var x = a[e];
      var y = b[e];
      return x < y ? -1 : x > y ? 1 : 0;
    });

    this.props.handleSort(sortedList);
  };

  render() {
    return (
      <div className="SearchBox_container ListNav">
        <form
          className="SearchBox_form"
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e.target.searchBox.value);
          }}
        >
          <label htmlFor="searchBox">Sort By:</label>
          <select
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="Search"
          >
            <option value="name">Account Name: A-Z</option>
            <option value="stage">Stage: A-Z</option>
            <option value="industry">Industry: A-Z</option>
            <option value="territory">Territory: A-Z</option>
          </select>
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default Sorter;
