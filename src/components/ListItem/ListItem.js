import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

export default class ListItem extends Component {
  render() {
    const { account = {}, index } = this.props;
    return (
      <tr className="ListItem" key={index}>
        <td>
          <Link to={`/accounts/${account.id}`}>
            <span className="ListItem_name"> {account.name}</span>
          </Link>
          &nbsp;
        </td>
        <td>{account.stage} &nbsp;</td>
        <td>{account.industry} &nbsp;</td>
        <td>{account.territory} &nbsp;</td>
      </tr>
    );
  }
}
