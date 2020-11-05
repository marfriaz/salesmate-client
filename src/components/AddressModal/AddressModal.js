import React, { Component } from "react";
import Modal from "react-modal";
import AccountApiService from "../../services/account-api-service";
import AddressForm from "../AddressForm/AddressForm";

export default class AddressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {},
      accountId: "",
    };
  }
  componentDidMount() {
    const { address, accountId } = this.props;

    this.setState({
      address: address,
      accountId: accountId,
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { address } = this.state;
    let updates = { ...address };
    AccountApiService.updateAddress(this.props.accountId, updates)
      .then(() => {
        window.location.reload();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleUpdateAddress(value) {
    this.setState({ address: value });
  }

  handleClick(e) {
    this.props.triggerModal(e);
  }

  render() {
    const { account, address } = this.props;

    return (
      <>
        <Modal isOpen={this.props.modalIsOpen}>
          <AddressForm
            address={address}
            updateAddress={(value) => this.handleUpdateAddress(value)}
          />
          <button onClick={(event) => this.handleClick(event)}>Cancel</button>
          <button onClick={(ev) => this.handleSubmit(ev)}>Save</button>
        </Modal>
      </>
    );
  }
}
