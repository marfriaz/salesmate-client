import React, { Component } from "react";

const industries = require("../STORE/industries");

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      address: {},
    };
  }

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    const { address } = this.props;

    this.setState({
      address: address,
    });
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
      <option value={item}>{item}</option>
    ));

    return (
      <>
        <div className="AccountPage">
          <form className="CreateAccountForm">
            <div role="alert">{error && <p className="red">{error}</p>}</div>
            <div className="AccountPage__card">
              <div className="AccountPage__card__header">Address</div>
              <div className="AccountPage__card__fields">
                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_street"
                    className="AccountPage__card__item__key"
                  >
                    Street:
                  </label>
                  <input
                    name="street"
                    type="text"
                    id="Create_street"
                    value={address.street}
                    onChange={(ev) =>
                      this.handleUpdateAddress("street", ev.target.value)
                    }
                  ></input>
                </div>
                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_city"
                    className="AccountPage__card__item__key"
                  >
                    City:
                  </label>
                  <input
                    name="city"
                    type="text"
                    id="Create_city"
                    value={address.city}
                    onChange={(ev) =>
                      this.handleUpdateAddress("city", ev.target.value)
                    }
                  ></input>
                </div>
                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_zip_code"
                    className="AccountPage__card__item__key"
                  >
                    Zip Code:
                  </label>
                  <input
                    name="zip_code"
                    type="text"
                    id="Create_zip_code"
                    value={address.zip_code}
                    onChange={(ev) =>
                      this.handleUpdateAddress("zip_code", ev.target.value)
                    }
                  ></input>
                </div>
                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_state"
                    className="AccountPage__card__item__key"
                  >
                    State:
                  </label>
                  <input
                    name="state"
                    type="text"
                    id="Create_state"
                    value={address.state}
                    onChange={(ev) =>
                      this.handleUpdateAddress("state", ev.target.value)
                    }
                  ></input>
                </div>
                <div className="AccountPage__card__item">
                  <label
                    htmlFor="Create_country"
                    className="AccountPage__card__item__key"
                  >
                    Country:
                  </label>
                  <input
                    name="country"
                    type="text"
                    required
                    id="Create_country"
                    value={address.country}
                    onChange={(ev) =>
                      this.handleUpdateAddress("country", ev.target.value)
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
