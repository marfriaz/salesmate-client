import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import AccountApiService from "../../services/account-api-service";
import { Section } from "../../components/Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CardItem from "../../components/CardItem/CardItem";
import CardItemAddress from "../../components/CardItemAddress/CardItemAddress";
import AccountPageContacts from "../../components/AccountPageContacts/AccountPageContacts";
import AccountPageNotes from "../../components/AccountPageNotes/AccountPageNotes";

import "./AccountPage.css";

export default class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
      address: {},
      notes: [],
      contacts: [],
      error: null,
    };
  }

  static defaultProps = {
    match: { params: {} },
  };

  // static contextType = GymContext;

  // componentDidMount() {
  //   // this.context.clearError();
  //   const { accountId } = this.props.match.params;

  //   AccountApiService.getAccount(accountId)
  //     .then((res) => this.setState({ account: res }))
  //     .catch((err) => this.setState({ error: err }));
  // }

  async componentDidMount() {
    const { accountId } = this.props.match.params;

    try {
      const res = await AccountApiService.getAccount(accountId);

      this.setState({
        account: res,
        address: res.address,
      });
      const res2 = await AccountApiService.getAccountNotes(accountId);
      this.setState({
        notes: res2,
      });
      const res3 = await AccountApiService.getAccountContacts(accountId);
      this.setState({
        contacts: res3,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  componentWillUnmount() {
    this.setState({ error: null });
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

  renderAccountListContacts(accountInfo) {
    return accountInfo.map((field, key) => (
      <AccountPageContacts key={key} value={field} />
    ));
  }

  renderAccountListNotes(accountInfo) {
    return accountInfo.map((field, key) => (
      <AccountPageNotes key={key} value={field} />
    ));
  }

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
      { name: "LinkedIn", value: [account.licopage] },
    ];
    const address1 = [
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

    return (
      <>
        <div className="AccountPage">
          <form className="HostGymForm" onSubmit={this.handleSubmit}>
            <div className="AccountPage__header">
              {/* <div className="Account__photo">
                {" "}
                <img
                  className=""
                  alt="Listed Gym"
                  src={account.image_url}
                  width="100px"
                />
              </div> */}
              <div className="Account__name">
                <h1>{account.name}</h1>
              </div>
            </div>

            <div className="AccountPage__buttons">
              <button className="Account__lead">Mark As Lead</button>
              <button className="Account__not_interested">
                Mark as Not Interested
              </button>
              <button className="Account__sold">Mark as SOLD</button>
            </div>

            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Business Details</div>
              <div className="AccountPage__card__fields">
                {this.renderAccountList(businessDetails)}
              </div>
            </div>

            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Address</div>
              <div className="AccountPage__card__fields">
                {this.renderAccountListAddress(address1)}
              </div>
            </div>

            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Contacts</div>
              <div className="AccountPage__card__fields">
                {this.renderAccountListContacts(contacts)}
              </div>
              <button>Add Contact</button>
            </div>
            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Notes</div>
              <div className="AccountPage__card__fields">
                {this.renderAccountListNotes(notes)}
              </div>
              <button>Add Note</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
