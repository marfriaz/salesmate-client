import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import CardItem from "../../components/CardItem/CardItem";
import CardItemAddress from "../../components/CardItemAddress/CardItemAddress";
import Notes from "../../components/Notes/Notes";
import Contacts from "../../components/Contacts/Contacts";
import EditModal from "../../components/EditModal/EditModal";

import "./AccountPage.css";

export default class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
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
    const { accountId } = this.props.match.params;

    try {
      const res = await AccountApiService.getAccount(accountId);

      this.setState({
        account: res,
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

  renderAccountList(account) {
    return account.map((field, key) => (
      <CardItem key={key} name={field.name} value={field.value} />
    ));
  }

  renderAccountListAddress(accountInfo) {
    return accountInfo.map((field, key) => (
      <CardItemAddress
        key={key}
        name={field.name}
        value={field.address_value}
      />
    ));
  }

  changePage = (page) => {
    this.setState({ page });
  };

  render() {
    // const { account, error } = this.props;
    const { account, address, contacts, notes } = this.state;

    const businessDetails = [
      { name: "Account Name", value: [account.name] },
      { name: "Stage", value: [account.stage] },
      { name: "Website", value: [account.website] },
      { name: "Industry", value: [account.industry] },
      { name: "Territory", value: [account.territory] },
      { name: "Employee Range", value: [account.employee_range] },
      { name: "Phone", value: [account.phone] },
      { name: "Fax", value: [account.fax] },
      { name: "LinkedIn", value: [account.linkedin] },
    ];
    // const accountAddress = [
    //   {
    //     name: "Billing",
    //     address_value: [
    //       {
    //         addresss_section: "Street",
    //         value: address.street,
    //       },
    //       { addresss_section: "City", value: address.city },
    //       { addresss_section: "Zip Code", value: address.zip_code },
    //       { addresss_section: "State", value: address.state },
    //       { addresss_section: "Country", value: address.country },
    //     ],
    //   },
    // ];

    const accountAddress = [
      {
        name: "Billing",
        address_value: [
          {
            addresss_section: "Street",
            value: address.street,
          },
          { addresss_section: "City", value: address.city },
          { addresss_section: "Zip Code", value: address.zip_code },
          { addresss_section: "State", value: address.state },
          { addresss_section: "Country", value: address.country },
        ],
      },
    ];
    const { accountId } = this.props.match.params;

    return (
      <>
        <div className="AccountPage">
          <div className="AccountPage__header">
            <div className="Account__name">
              <h1>{account.name}</h1>
            </div>
          </div>
          <EditModal
            modalIsOpen={this.state.modalIsOpen}
            triggerModal={() => this.handleModal()}
            account={this.state.account}
            accountId={this.props.match.params.accountId}
          />
          <div className="AccountPage__buttons">
            <button onClick={() => this.handleModal()} className="button">
              Edit
            </button>
            <button
              onClick={() => this.handleDelete(accountId)}
              className="button"
            >
              Delete
            </button>
          </div>

          <div className="AccountPage__card">
            <div className="AccountPage__card__header">Business Details</div>
            <div className="AccountPage__card__fields">
              {this.renderAccountList(businessDetails)}
              {this.renderAccountListAddress(accountAddress)}
            </div>
          </div>
          {/* 
          <div className="AccountPage__card">
            <div className="AccountPage__card__header">Address</div>
            <div className="AccountPage__card__fields">
              {this.renderAccountListAddress(accountAddress)}
            </div>
          </div> */}

          <Contacts accountId={accountId} />
          <Notes accountId={accountId} />
        </div>
      </>
    );
  }
}
