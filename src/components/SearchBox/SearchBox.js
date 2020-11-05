import React, { Component } from "react";
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
        <label htmlFor="searchBox">Search:&nbsp;&nbsp;</label>
        <TypeAheadDropDown />
      </div>
    );
  }
}

export default SearchBox;
