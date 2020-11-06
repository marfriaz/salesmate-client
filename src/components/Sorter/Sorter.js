import React, { Component } from "react";
import "./Sorter.css";

class Sorter extends Component {
  handleChange = (e) => {
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
        <form className="SearchBox_form">
          <label htmlFor="searchBox">Sort By:</label>
          <select
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="Search"
            defaultValue={"DEFAULT"}
            onChange={(e) => {
              e.preventDefault();
              this.handleChange(e.target.value);
            }}
          >
            <option value="DEFAULT">Select option</option>
            <option value="name">Account Name: A-Z</option>
            <option value="stage">Stage: A-Z</option>
            <option value="industry">Industry: A-Z</option>
            <option value="territory">Territory: A-Z</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Sorter;
