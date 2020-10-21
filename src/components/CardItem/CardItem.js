import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./CardItem.css";

export default class CardItem extends Component {
  // displayTheValue(value) {
  //   console.log(value);
  //   const list = value.map((item, key) => (
  //     <div className="AccountPage__card__item__value" key={key}>
  //       {item}
  //     </div>
  //   ));
  //   console.log(list);
  //   return list;
  // }

  render() {
    const { name, value } = this.props;
    return (
      <div className="AccountPage__card__item">
        <div className="AccountPage__card__item__key">{name}: &nbsp;</div>
        {/* <div className="AccountPage__card__item__keys">
          {this.displayTheValue(value)}
        </div> */}
        <div className="AccountPage__card__item__value">{value}</div>
        <button type="submit" className="editButton">
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
      </div>
    );
  }
}
