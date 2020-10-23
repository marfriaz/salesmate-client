import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GymListContext from "../../contexts/GymListContext";
import AccountApiService from "../../services/account-api-service";
import TypeAheadDropDown from "../../components/TypeAheadDropDown/TypeAheadDropDown";

import "./SearchBox.css";

class SearchBox extends Component {
  static defaultProps = {
    onSubmit: () => {},
    history: {
      push: () => {},
    },
    match: { params: {} },
  };

  constructor(props) {
    super(props);
    this.state = {
      accountList: [],
      searchTerm: "",
      error: null,
    };
  }

  componentDidMount() {
    AccountApiService.getAccountsByName()
      .then((res) => this.setState({ accountList: res }))
      .catch((err) => this.setState({ error: err }));
  }

  componentWillUnmount() {
    this.setState({ error: null });
  }

  handleSubmit = (e) => {
    this.setState({ searchTerm: e });
  };

  render() {
    return (
      <div className="SearchBox_container">
        <label htmlFor="searchBox">Search: </label>
        <TypeAheadDropDown />
        {/* <form
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
        </form> */}
      </div>
    );
  }
}

export default SearchBox;
