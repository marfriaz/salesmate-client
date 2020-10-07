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
            <span>{account.stage} &nbsp;</span>
            <span>{account.name} &nbsp;</span>
            <span>{account.categories[0].title} &nbsp;</span>
            <span>{account.review_count} &nbsp;</span>
          </div>
        </li>
      </Link>
    );
  }
}
