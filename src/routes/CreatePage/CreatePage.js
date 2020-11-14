import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import CreateForm from "../../components/CreateForm/CreateForm";

export default class AccountPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = {
    error: null,
    account: {},
    address: {},
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { account, address } = this.state;
    let updates = { ...account, ...address };
    AccountApiService.postAccount({
      name: updates.name,
      stage: updates.stage,
      website: updates.website,
      industry: updates.industry,
      territory: updates.territory,
      employee_range: updates.employee_range,
      phone: updates.phone,
      fax: updates.fax,
      linkedin: updates.linkedin,
      street: updates.street,
      city: updates.city,
      zip_code: updates.zip_code,
      state: updates.state,
      country: updates.country,
    })
      .then((data) => {
        this.props.history.push(`/accounts/${data.id}`);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleUpdateField(value) {
    this.setState({ account: value });
  }

  handleUpdateAddress(value) {
    this.setState({ address: value });
  }

  handleClick(e) {
    this.props.history.push("/accounts/");
  }

  render() {
    const { error, account, address } = this.state;

    return (
      <>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="AccountPage">
          <form className="CreateAccountForm" onSubmit={this.handleSubmit}>
            <CreateForm
              account={account}
              address={address}
              updateFields={(value) => this.handleUpdateField(value)}
              updateAddress={(value) => this.handleUpdateAddress(value)}
            />
            <button
              className="button"
              onClick={(event) => this.handleClick(event)}
            >
              Cancel
            </button>
            &nbsp;
            <button className="button" type="submit">
              Save
            </button>
          </form>
        </div>
      </>
    );
  }
}
