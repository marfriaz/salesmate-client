import React from "react";
import { Link } from "react-router-dom";
import AccountApiService from "../../services/account-api-service";
import "./TypeAheadDropDown.css";

export default class TypeAheadDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList: [],
      suggestions: [],
      text: "",
      error: null,
    };
  }

  componentDidMount() {
    AccountApiService.getAccounts()
      .then((res) => this.setState({ accountList: res }))
      .catch((err) => this.setState({ error: err }));
  }

  onTextChange = (e) => {
    const { accountList } = this.state;

    const sortedAccounts = accountList
      .map((account) => [account.name, account.id])
      .sort(function (a, b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      });

    let suggestions = [];
    const value = e.target.value;

    if (value.length > 0) {
      const regex = new RegExp(`${value}`, `i`);

      suggestions = sortedAccounts.filter((v) => regex.test(v[0]));
    }

    this.setState(() => ({
      suggestions,
      text: value,
    }));
  };

  suggestionSelected = (value) => {
    this.setState(() => ({
      text: value[0],
      suggestions: [],
    }));
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((account) => (
          <Link to={`/accounts/${account[1]}`}>
            <li key={account} onClick={(e) => this.suggestionSelected(account)}>
              {account[0]}
            </li>
          </Link>
        ))}
      </ul>
    );
  };

  render() {
    const { text } = this.state;
    return (
      <div className="TypeAheadDropDown">
        <input
          onChange={this.onTextChange}
          placeholder="Account Name"
          value={text}
          type="text"
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
