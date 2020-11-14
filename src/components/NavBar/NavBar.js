import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import TokenService from "../../services/token-service";

export default class NavBar extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
    match: { params: {} },
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  handleClick = (e) => {
    window.location.reload();
  };

  render() {
    return (
      <nav className="Header">
        <SearchBox />
        <div className="Header_login">
          <div className="Header__not-logged-in">
            <Link to="/accounts">All Accounts &nbsp; </Link>
            <Link to="/accounts/stage/leads">Leads &nbsp;</Link>
            <Link to="/accounts/stage/sold">Sold &nbsp;</Link>
          </div>
        </div>
      </nav>
    );
  }
}
