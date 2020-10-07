import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/SearchBox";
import TokenService from "../../services/token-service";
import "./ListColumns.css";

export default class ListColumns extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  render() {
    return (
      <nav className="Header">
        <div className="Header_login">
          <div className="Header__not-logged-in">
            <span className="col">Account Name &nbsp;</span>
            <span className="col">Categories &nbsp;</span>
            <span className="col">Phone &nbsp;</span>
            <span className="col">Review Count &nbsp;</span>
          </div>
        </div>
      </nav>
    );
  }
}
