import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import { Section } from "../../components/Utils/Utils";
import CardItem from "../../components/CardItem/CardItem";
import Notes from "../../components/Notes/Notes";
import Contacts from "../../components/Contacts/Contacts";
import Address from "../../components/Address/Address";
import AccountModal from "../../components/AccountModal/AccountModal";
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

  componentDidUpdate(prevProps) {
    const { accountId } = this.props.match.params;

    if (prevProps.match.params.accountId !== accountId) {
      AccountApiService.getAccount(accountId)
        .then((res) => {
          this.setState({
            account: res,
            address: res.address,
          });
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
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
      <CardItem
        key={key}
        name={field.name}
        value={field.value}
        handleModal={() => this.handleModal()}
      />
    ));
  }

  renderAccountListAddress(accountInfo) {
    return accountInfo.map((field, key) => (
      <CardItem key={key} name={field.name} value={field.address_value} />
    ));
  }

  changePage = (page) => {
    this.setState({ page });
  };

  render() {
    const { account, address } = this.state;

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

    const { accountId } = this.props.match.params;
    return (
      <>
        <Section className="AccountPage">
          <div className="AccountPage__header">
            <div className="Account__name">
              <h1>{account.name}</h1>
            </div>
          </div>
          <AccountModal
            modalIsOpen={this.state.modalIsOpen}
            triggerModal={() => this.handleModal()}
            account={this.state.account}
            accountId={this.props.match.params.accountId}
          />
          <div className="AccountPage__buttons">
            <button
              onClick={() => this.handleModal()}
              className="button submitButton"
            >
              Edit
            </button>
            &nbsp;
            <button
              onClick={() => this.handleDelete(accountId)}
              className="button submitButton"
            >
              Delete
            </button>
          </div>

          <div className="AccountPage__card">
            <div className="AccountPage__card__header">Business Details</div>
            <div className="AccountPage__card__fields">
              {this.renderAccountList(businessDetails)}
            </div>
          </div>

          <Address accountId={accountId} />
          <Contacts accountId={accountId} />
          <Notes accountId={accountId} />
        </Section>
      </>
    );
  }
}
