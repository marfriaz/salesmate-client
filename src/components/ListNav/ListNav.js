import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/SearchBox";
import TokenService from "../../services/token-service";
import "./ListNav.css";

export default class ListNav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  render() {
    return (
      <nav className="Header">
        <div className="Header_login">
          <div className="Header__not-logged-in">
            <div>Filter goes here &nbsp; </div>
            <Link to="/signup">Create New Account &nbsp;</Link>
            <Link to="/login">Ingest Accounts &nbsp;</Link>
          </div>
        </div>
      </nav>
    );
  }
}
