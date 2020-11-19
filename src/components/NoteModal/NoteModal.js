import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import NoteForm from "../NoteForm/NoteForm";
import Modal from "react-modal";
import "./NoteModal.css";

export default class NoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      noteId: this.props.noteId,
    };
  }

  componentDidMount() {
    const { note } = this.props;
    this.setState({
      note: note,
    });
  }

  handlePatch = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { note } = this.state;

    AccountApiService.updateNote(this.props.noteId, note)
      .then(() => {
        window.location.reload();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleDelete(ev) {
    ev.preventDefault();
    AccountApiService.deleteNote(this.props.noteId)
      .then(window.location.reload())
      .catch((err) => this.setState({ error: err }));
  }

  handleUpdateFields(value) {
    this.setState({ note: value });
  }

  handleClick(e) {
    this.props.triggerModal(e);
  }

  render() {
    const { note, noteId } = this.state;
    return (
      <>
        <Modal className="NoteModal" isOpen={this.props.modalIsOpen}>
          <NoteForm
            note={note}
            noteId={noteId}
            updateFields={(value) => this.handleUpdateFields(value)}
            handleSubmit={(ev) => this.handlePatch(ev)}
          />
          <button
            className="button"
            onClick={(event) => this.handleClick(event)}
          >
            Cancel
          </button>
          &nbsp;
          <button
            className="button"
            onClick={(event) => this.handleDelete(event)}
          >
            Delete
          </button>
        </Modal>
      </>
    );
  }
}
