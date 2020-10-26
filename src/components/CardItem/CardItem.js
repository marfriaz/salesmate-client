import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./CardItem.css";
// import Modal from "react-modal";
import EditModal from "../../components/EditModal/EditModal";

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  handleModal() {
    if (this.state.modalIsOpen == false) {
      this.setState({ modalIsOpen: true });
    } else {
      this.setState({ modalIsOpen: false });
    }
  }

  render() {
    const { name, value } = this.props;
    return (
      <div className="AccountPage__card__item">
        <div className="AccountPage__card__item__key">{name}: &nbsp;</div>
        <div className="AccountPage__card__item__value">{value}</div>
        <EditModal
          modalIsOpen={this.state.modalIsOpen}
          triggerModal={() => this.handleModal()}
        />
        <button onClick={() => this.handleModal()} className="editButton">
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
      </div>
    );
  }
}
