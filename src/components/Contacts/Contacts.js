import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import CardItemContact from "../CardItemContact/CardItemContact";
import ContactModal from "../../components/ContactModal/ContactModal";
import ContactForm from "../ContactForm/ContactForm";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      editContact: {},
      createContacts: [],
      modalIsOpen: false,
      error: null,
    };
  }

  static defaultProps = {
    match: { params: {} },
  };

  async componentDidMount() {
    const { accountId } = this.props;

    try {
      const res = await AccountApiService.getAccountContacts(accountId);
      this.setState({
        contacts: res,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  componentWillUnmount() {
    this.setState({ error: null });
  }

  handleModal(contactId) {
    const { contacts } = this.state;

    let editContact = contacts.find((contact) => contact.id === contactId);

    if (this.state.modalIsOpen == false) {
      this.setState({ modalIsOpen: true });
      this.setState({ editContact: editContact });
    } else {
      this.setState({ modalIsOpen: false });
    }
  }

  handleUpdateCreateContacts(contactId) {
    console.log("This is the contact to delete", contactId);
    const { createContacts } = this.state;
    const index = createContacts.indexOf(
      createContacts.find((obj) => obj.contactId === contactId)
    );
    console.log("But this is index", index);
    createContacts.splice(index, 1);
    this.setState({
      createContacts: createContacts,
    });
    console.log(createContacts);
  }

  renderAccountContacts(contacts) {
    return contacts.map((contact, key) => (
      <CardItemContact
        key={key}
        contact={contact}
        handleModal={(contactId) => this.handleModal(contactId)}
      />
    ));
  }

  renderAddContacts() {
    const { accountId } = this.props;

    this.setState({
      createContacts: [
        ...this.state.createContacts,
        {
          name: "",
          title: "",
          phone: "",
          email: "",
          accountId: accountId,
          contactId: this.state.createContacts.length + 1,
        },
      ],
    });
    console.log(this.state.createContacts);
  }

  handleUpdateContacts(contact) {
    this.setState({ contacts: [...this.state.contacts, contact] });
  }

  renderCreateContacts() {
    return this.state.createContacts.map((contactObj) => (
      <ContactForm
        contact={contactObj}
        contactId={contactObj.contactId}
        handleSubmit={(ev, contactId) => this.handleSubmit(ev, contactId)}
        updateFields={(updates, contactId) =>
          this.handleUpdateFields(updates, contactId)
        }
        updateContacts={(contact) => this.handleUpdateContacts(contact)}
        updatecreateContacts={(contactId) =>
          this.handleUpdateCreateContacts(contactId)
        }
      />
    ));
  }

  handleUpdateFields(updates, contactId) {
    let createContactsArr = [...this.state.createContacts];
    Object.assign(
      createContactsArr.find((obj) => obj.contactId === contactId),
      updates
    );

    this.setState({ createContacts: createContactsArr });
  }

  handleSubmit = (ev, contactId) => {
    ev.preventDefault();
    let createContactsArr = [...this.state.createContacts];

    let contactObj = createContactsArr.find(
      (obj) => obj.contactId === contactId
    );
    const { accountId, name, title, phone, email } = contactObj;

    this.setState({ error: null });
    AccountApiService.postContact(accountId, name, title, phone, email)
      .then((contact) => this.handleUpdateContacts(contact))
      .catch((res) => {
        this.setState({ error: res.error });
      });
    this.handleUpdateCreateContacts(contactId);
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactModal
          modalIsOpen={this.state.modalIsOpen}
          triggerModal={() => this.handleModal()}
          contact={this.state.editContact}
          contactId={this.state.editContact.id}
        />
        <div className="AccountPage__card">
          <div className="AccountPage__card__header">Contacts</div>
          <div className="AccountPage__card__fields">
            {this.renderAccountContacts(contacts)}
          </div>
          {this.renderCreateContacts()}
          <button className="button" onClick={() => this.renderAddContacts()}>
            Add Contact
          </button>
        </div>
      </>
    );
  }
}
