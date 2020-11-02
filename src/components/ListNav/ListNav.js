import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/SearchBox";
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
      <nav className="Accounts_Nav">
        <Sorter
          accountList={this.props.accountList}
          handleSort={(sortedList) => this.props.handleSort(sortedList)}
        />
        <Link to="/accounts/create">Create New Account &nbsp;</Link>
        {/* </div> */}
      </nav>
    );
  }
}
