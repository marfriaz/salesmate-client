import React, { Component } from "react";
import Modal from "react-modal";
import AccountApiService from "../../services/account-api-service";
import AccountForm from "../../components/AccountForm/AccountForm";
import "./AccountModal.css";

export default class AccountModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
      accountId: this.props.accountId,
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { account } = this.state;
    let updates = { ...account };
    AccountApiService.updateAccount(this.props.accountId, updates)
      .then(() => {
        window.location.reload();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleUpdateField(value) {
    this.setState({ account: value });
  }

  handleClick(e) {
    this.props.triggerModal(e);
  }

  render() {
    const { account } = this.props;

    return (
      <>
        <Modal overlayClassName="AccountModal" isOpen={this.props.modalIsOpen}>
          <AccountForm
            account={account}
            updateFields={(value) => this.handleUpdateField(value)}
          />
          <button
            className="button"
            onClick={(event) => this.handleClick(event)}
          >
            Cancel
          </button>
          &nbsp;
          <button className="button" onClick={(ev) => this.handleSubmit(ev)}>
            Save
          </button>
        </Modal>
      </>
    );
  }
}
