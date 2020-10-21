import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CardItem from "../../components/CardItem/CardItem";
import CardItemAddress from "../../components/CardItemAddress/CardItemAddress";

import "./AccountPage.css";

export default class AccountPage extends Component {
  // static defaultProps = {
  //   match: { params: {} },
  // };

  // static contextType = GymContext;

  // componentDidMount() {
  //   this.context.clearError();
  //   const { gymId } = this.props.match.params;

  //   GymApiService.getGym(gymId)
  //     .then(this.context.setGym)
  //     .catch(this.context.setError);
  // }

  // componentWillUnmount() {
  //   this.context.clearGym();
  // }

  // renderAccountList(accountInfo) {
  //   for (let i = 0; i < accountInfo.length; i++) {
  //     var result = Object.entries(accountInfo[i]).map(([key, value]) => (
  //       <AccountPageCardItems key={key} value={value} />
  //     ));
  //   }
  //   return result;
  // }

  renderAccountList(accountInfo) {
    return accountInfo.map((account, key) => (
      <CardItem key={account.key} name={account.name} value={account.value} />
    ));
  }

  renderAccountListAddress(accountInfo) {
    return accountInfo.map((address, key) => (
      <CardItemAddress
        key={address.key}
        name={address.name}
        value={address.address_value}
      />
    ));
  }

  render() {
    const { account, error } = this.props;
    const businessDetails = [
      { name: "Account Name", value: [account.name] },
      { name: "Stage", value: [account.stage] },
      { name: "Website", value: [account.website] },
      { name: "Industry", value: [account.industry] },
      { name: "Phone Number", value: [account.phone] },
      { name: "Fax", value: [account.fax] },
      { name: "Territory", value: [account.territory] },
      { name: "Employee Range", value: [account.employee_range] },
      { name: "LI CO Page", value: [account.licopage] },
    ];
    const address = [
      {
        name: "Billing",
        address_value: [
          {
            addresss_section: "Street",
            value: account.address.street_address,
          },
          { addresss_section: "City", value: account.address.city },
          { addresss_section: "Zip Code", value: account.address.zip_code },
          { addresss_section: "State", value: account.address.state },
          { addresss_section: "Country", value: account.address.country },
        ],
      },
      {
        name: "Shipping",
        address_value: [
          {
            addresss_section: "Street",
            value: account.address.street_address,
          },
          { addresss_section: "City", value: account.address.city },
          { addresss_section: "Zip Code", value: account.address.zip_code },
          { addresss_section: "State", value: account.address.state },
          { addresss_section: "Country", value: account.address.country },
        ],
      },
    ];

    const contacts = [
      { name: "Employee Name", value: [account.contact.name] },
      { name: "Employee Title", value: [account.contact.title] },
      { name: "Phone", value: [account.contact.phone] },
      { name: "Email", value: [account.contact.email] },
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
                {this.renderAccountListAddress(address)}
              </div>
            </div>

            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Contacts</div>
              <div className="AccountPage__card__fields">
                {this.renderAccountList(contacts)}
              </div>
              <button>Add Contact</button>
            </div>

            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Notes</div>
              <div className="AccountPage__card__fields">
                <div className="Account__website">
                  Date:
                  <input />
                </div>
                <div className="Account__phone">
                  Note:
                  <textarea rows="2" cols="20"></textarea>
                </div>
                <button>Add</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
