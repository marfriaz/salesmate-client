import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./CardItem.css";

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  render() {
    const { name, value } = this.props;
    return (
      <div className="AccountPage__card__item">
        <div className="AccountPage__card__item__key">{name}: &nbsp;</div>
        <div className="AccountPage__card__item__value">{value}</div>
        <button onClick={() => this.props.handleModal()} className="editButton">
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
      </div>
    );
  }
}
