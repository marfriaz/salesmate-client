import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/SearchBox";
import TokenService from "../../services/token-service";
import "./ListItem.css";

export default class ListItem extends Component {
  render() {
    const { account = [] } = this.props;
    return (
      <Link to={`/accounts/${account.id}`}>
        <li className="List_Item">
          <div className="List_Item_Content">
            <div>{account.name}</div>
            <div>{account.categories[0].title}</div>
            <div>{account.phone}</div>
            <div>{account.review_count}</div>
          </div>
        </li>
      </Link>
    );
  }
}
