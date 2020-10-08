import React, { Component } from "react";
import "./CardItem.css";

export default class CardItem extends Component {
  render() {
    const { name, value } = this.props;
    return (
      <div className="AccountPage__card__item">
        <div className="AccountPage__card__item__key">{name}: &nbsp;</div>
        <div className="AccountPage__card__item__value">{value}</div>
      </div>
    );
  }
}
