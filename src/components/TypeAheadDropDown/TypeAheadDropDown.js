import React from "react";
import { Link } from "react-router-dom";
import AccountApiService from "../../services/account-api-service";
import "./TypeAheadDropDown.css";

export default class TypeAheadDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList: [],
      text: "",
      error: null,
    };
  }

  onTextChange = (e) => {
    const value = e.target.value;

    this.setState({
      text: value,
    });

    const { text } = this.state;

    AccountApiService.getAccountsByName(text)
      .then((res) => this.setState({ accountList: res }))
      .catch((err) => this.setState({ error: err }));
  };

  renderSuggestions = () => {
    const { accountList, text } = this.state;
    if (accountList.length === 0) {
      return null;
    }
    if (text) {
      return (
        <ul>
          {accountList.map((account) => (
            <li>
              <Link to={`/accounts/${account.id}`}>{account.name}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  render() {
    const { text } = this.state;
    return (
      <>
        <div className="TypeAheadDropDown">
          <input
            onChange={(ev) => this.onTextChange(ev)}
            placeholder="Account Name"
            value={text}
            type="text"
          />
          {this.renderSuggestions()}
        </div>
      </>
    );
  }
}
