import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../../components/SearchBox/SearchBox";
import TokenService from "../../services/token-service";
import "./NavBar.css";

export default class Navbar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  render() {
    return (
      <nav className="Header">
        <div className="name">
          <SearchBox />
        </div>

        <div className="Header_login">
          <div className="Header__not-logged-in">
            <Link to="/accounts">All Accounts &nbsp; </Link>
            <Link to="/accounts/leads">Leads &nbsp;</Link>
            <Link to="/accounts/sold">Sold &nbsp;</Link>
          </div>
        </div>
      </nav>
    );
  }
}
