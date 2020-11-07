import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import Sorter from "../../components/Sorter/Sorter";

import "./ListNav.css";

export default class ListNav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  render() {
    return (
      <nav className="Account_List_Nav">
        <Sorter
          accountList={this.props.accountList}
          handleSort={(sortedList) => this.props.handleSort(sortedList)}
        />
        <Link to="/accounts/create">
          <button className="button createButton">Create New Account </button>
        </Link>
      </nav>
    );
  }
}
