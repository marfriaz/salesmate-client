import React, { Component } from "react";
import { Required } from "../Utils/Utils";
const industries = require("../../components/STORE/industries");

export default class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      account: {
        name: "",
        stage: "",
        website: "",
        industry: "",
        territory: "",
        employee_range: "",
        phone: "",
        fax: "",
        linkedin: "",
      },
      address: {},
    };
  }

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    const { account, address } = this.props;
    this.setState({
      account: account,
      address: address || account.address,
    });
  }

  handleUpdateField(field, value) {
    let updates = { ...this.state.account };
    Object.assign(updates, {
      [`${field}`]: value,
    });
    this.setState({ account: updates });
    this.props.updateFields(updates);
  }

  handleUpdateAddress(field, value) {
    let updates = { ...this.state.address };
    Object.assign(updates, {
      [`${field}`]: value,
    });
    this.setState({ address: updates });
    this.props.updateAddress(this.state.address);
  }

  render() {
    const { error, account, address } = this.state;

    const industryList = industries.map((item, index) => (
      <option value={item} key={index}>
        {item}
      </option>
    ));

    return (
      <>
        <div className="AccountPage">
          <form className="CreateAccountForm">
            <div role="alert">{error && <p className="red">{error}</p>}</div>
            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Business Details</div>
              <div className="AccountPage__card__fields">
                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_account_name"
                    className="AccountPage__card__item__key"
                  >
                    Account Name <Required />
                  </label>
                  <input
                    name="account_name"
                    type="text"
                    required
                    id="Create_account_name"
                    value={account.name}
                    onChange={(ev) =>
                      this.handleUpdateField("name", ev.target.value)
                    }
                  ></input>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_stage"
                    className="AccountPage__card__item__key"
                  >
                    Stage:
                  </label>
                  <select
                    type="text"
                    name="stage"
                    id="Create_stage"
                    defaultValue={"DEFAULT"}
                    required
                    value={account.stage}
                    onChange={(ev) =>
                      this.handleUpdateField("stage", ev.target.value)
                    }
                  >
                    <option value="DEFAULT">Select </option>
                    <option value="Lead">Lead</option>
                    <option value="Sold">Sold</option>
                    <option value="Not interested">Not Interested</option>
                  </select>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_website"
                    className="AccountPage__card__item__key"
                  >
                    Website: <Required />
                  </label>
                  <input
                    name="website"
                    type="text"
                    required
                    id="Create_website"
                    value={account.website}
                    onChange={(ev) =>
                      this.handleUpdateField("website", ev.target.value)
                    }
                  ></input>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_industry"
                    className="AccountPage__card__item__key"
                  >
                    Industry:
                  </label>
                  <select
                    type="text"
                    name="industry"
                    id="Create_industry"
                    required
                    defaultValue={"DEFAULT"}
                    value={account.industry}
                    onChange={(ev) =>
                      this.handleUpdateField("industry", ev.target.value)
                    }
                  >
                    <option value="DEFAULT">Select</option>
                    {industryList}
                  </select>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_territory"
                    className="AccountPage__card__item__key"
                  >
                    Territory:
                  </label>
                  <select
                    type="text"
                    name="territory"
                    id="Create_territory"
                    defaultValue={"DEFAULT"}
                    required
                    value={account.territory}
                    onChange={(ev) =>
                      this.handleUpdateField("territory", ev.target.value)
                    }
                  >
                    <option value="DEFAULT">Select </option>
                    <option value="NAMER">NAMER</option>
                    <option value="EMEA">EMEA</option>
                    <option value="LATAM">LATAM</option>
                  </select>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_employee_range"
                    className="AccountPage__card__item__key"
                  >
                    Employee Range:
                  </label>
                  <select
                    type="text"
                    name="employee_range"
                    id="Create_employee_range"
                    defaultValue={"DEFAULT"}
                    required
                    value={account.employee_range}
                    onChange={(ev) =>
                      this.handleUpdateField("employee_range", ev.target.value)
                    }
                  >
                    <option value="DEFAULT">Select</option>
                    <option value="Self-Employed">Self Employed</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1001-5000">1001-5000</option>
                    <option value="5001-10,000">5001-10,000</option>
                    <option value="10,001+">10,001+</option>
                  </select>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_phone"
                    className="AccountPage__card__item__key"
                  >
                    Phone: <Required />
                  </label>
                  <input
                    name="phone"
                    type="text"
                    required
                    id="Create_phone"
                    value={account.phone}
                    onChange={(ev) =>
                      this.handleUpdateField("phone", ev.target.value)
                    }
                  ></input>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_fax"
                    className="AccountPage__card__item__key"
                  >
                    Fax:
                  </label>
                  <input
                    name="fax"
                    type="text"
                    id="Create_fax"
                    value={account.fax}
                    onChange={(ev) =>
                      this.handleUpdateField("fax", ev.target.value)
                    }
                  ></input>
                </div>

                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_linkedin"
                    className="AccountPage__card__item__key"
                  >
                    Linkedin:
                  </label>
                  <input
                    name="linkedin"
                    type="text"
                    id="Create_linkedin"
                    value={account.linkedin}
                    onChange={(ev) =>
                      this.handleUpdateField("linkedin", ev.target.value)
                    }
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
