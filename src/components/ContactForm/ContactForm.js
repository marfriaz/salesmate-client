import React, { Component } from "react";
import { Required } from "../Utils/Utils";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: "",
        title: "",
        phone: "",
        email: "",
      },
      contactId: this.props.contactId,
      accountId: this.props.accountId,
      error: null,
    };
  }

  componentDidMount() {
    const { contact } = this.props;
    this.setState({
      contact: contact,
    });
  }

  handleUpdateField(field, value) {
    const { contactId } = this.props;
    let updates = { ...this.props.contact };
    Object.assign(updates, {
      [`${field}`]: value,
    });
    this.setState({ contact: updates });
    this.props.updateFields(updates, contactId);
  }

  render() {
    const { contact } = this.props;
    return (
      <>
        <form
          className="AddContactForm AccountPage__card__fields"
          onSubmit={(ev) => this.props.handleSubmit(ev, this.props.contactId)}
        >
          <div className="AccountPage__card__item">
            <label
              htmlFor="Create_contact_name"
              className="AccountPage__card__item__key"
            >
              Name: <Required />
            </label>
            <input
              name="name"
              id="Create_contact_name"
              className="AccountPage__card__item__value"
              required
              value={contact.name}
              onChange={(ev) => this.handleUpdateField("name", ev.target.value)}
            />
          </div>
          <div className="AccountPage__card__item">
            <label
              htmlFor="Create_contact_title"
              className="AccountPage__card__item__key"
            >
              Title:
            </label>
            <input
              name="title"
              id="Create_contact_title"
              className="AccountPage__card__item__value"
              value={contact.title}
              onChange={(ev) =>
                this.handleUpdateField("title", ev.target.value)
              }
            />
          </div>

          <div className="AccountPage__card__item">
            <label
              htmlFor="Create_contact_title"
              className="AccountPage__card__item__key"
            >
              Phone:
              <Required />
            </label>

            <input
              name="phone"
              id="Create_contact_title"
              className="AccountPage__card__item__value"
              required
              value={contact.phone}
              onChange={(ev) =>
                this.handleUpdateField("phone", ev.target.value)
              }
            />
          </div>
          <div className="AccountPage__card__item">
            <label
              htmlFor="Create_contact_title"
              className="AccountPage__card__item__key"
            >
              Email:
            </label>
            <input
              name="email"
              id="Create_contact_title"
              className="AccountPage__card__item__value"
              value={contact.email}
              onChange={(ev) =>
                this.handleUpdateField("email", ev.target.value)
              }
            />
          </div>
          <button className="button saveButton" type="submit">
            Save
          </button>
        </form>
      </>
    );
  }
}
