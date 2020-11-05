import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import CardItem from "../../components/CardItem/CardItem";
import AddressModal from "../../components/AddressModal/AddressModal";

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {},
      modalIsOpen: false,
      error: null,
    };
  }

  static defaultProps = {
    match: { params: {} },
    history: {
      push: () => {},
    },
  };

  async componentDidMount() {
    const { accountId } = this.props;

    try {
      const res = await AccountApiService.getAccount(accountId);

      this.setState({
        address: res.address,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  componentWillUnmount() {
    this.setState({ error: null });
  }

  handleModal() {
    if (this.state.modalIsOpen == false) {
      this.setState({ modalIsOpen: true });
    } else {
      this.setState({ modalIsOpen: false });
    }
  }

  handleDelete(accountId) {
    AccountApiService.deleteAccount(accountId).catch((err) =>
      this.setState({ error: err })
    );
    this.props.history.push("/accounts");
    window.location.reload();
  }

  renderAccountListAddress(accountInfo) {
    return accountInfo.map((field, key) => (
      <CardItem key={key} name={field.name} value={field.address_value} />
    ));
  }
  renderAccountList(account) {
    return account.map((field, key) => (
      <CardItem
        key={key}
        name={field.name}
        value={field.value}
        handleModal={() => this.handleModal()}
      />
    ));
  }

  changePage = (page) => {
    this.setState({ page });
  };

  render() {
    const { account, address } = this.state;

    const accountAddress = [
      {
        name: "Street",
        value: [address.street],
      },
      { name: "City", value: [address.city] },
      { name: "Zip Code", value: [address.zip_code] },
      { name: "State", value: [address.state] },
      { name: "Country", value: [address.country] },
    ];

    const { accountId } = this.props;
    console.log("HEY", accountId);
    return (
      <>
        <AddressModal
          modalIsOpen={this.state.modalIsOpen}
          triggerModal={() => this.handleModal()}
          address={address}
          accountId={accountId}
        />

        <div className="AccountPage__card">
          <div className="AccountPage__card__header">Address</div>
          <div className="AccountPage__card__fields">
            {this.renderAccountList(accountAddress)}
          </div>
        </div>
      </>
    );
  }
}
