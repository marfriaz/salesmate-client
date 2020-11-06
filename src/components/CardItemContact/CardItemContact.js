import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default class CardItemContact extends Component {
  render() {
    const { contact } = this.props;
    let contactId = contact.id;
    return (
      <>
        <div className="AccountPage__card__item">
          <div className="AccountPage__card__item__key">
            Employee Name: &nbsp;
          </div>
          <div className="AccountPage__card__item__value">{contact.name}</div>
          <button
            onClick={() => this.props.handleModal(contactId)}
            className="editButton"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
        <div className="AccountPage__card__item">
          <div className="AccountPage__card__item__key">Employee Title:</div>
          <div className="AccountPage__card__item__value">{contact.title}</div>
          <button
            onClick={() => this.props.handleModal(contactId)}
            className="editButton"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
        <div className="AccountPage__card__item">
          <div className="AccountPage__card__item__key">Phone: &nbsp;</div>
          <div className="AccountPage__card__item__value">{contact.phone}</div>
          <button
            onClick={() => this.props.handleModal(contactId)}
            className="editButton"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
        <div className="AccountPage__card__item">
          <div className="AccountPage__card__item__key">Email: &nbsp;</div>
          <div className="AccountPage__card__item__value">{contact.email}</div>
          <button
            onClick={() => this.props.handleModal(contactId)}
            className="editButton"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
      </>
    );
  }
}
