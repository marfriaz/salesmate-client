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
      <tr List_Item>
        <td>
          <Link to={`/accounts/${account.id}`}>{account.name}</Link> &nbsp;
        </td>
        <td>{account.stage} &nbsp;</td>
        <td>{account.categories[0].title} &nbsp;</td>
        <td>{account.review_count} &nbsp;</td>
      </tr>
    );
  }
}
