import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import CardItemNote from "../CardItemNote/CardItemNote";
import NoteModal from "../../components/NoteModal/NoteModal";

import NoteForm from "../NoteForm/NoteForm";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      editNote: {},
      createNotes: [],
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
      const res = await AccountApiService.getAccountNotes(accountId);
      this.setState({
        notes: res,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  componentWillUnmount() {
    this.setState({ error: null });
  }

  handleModal(noteId) {
    const { notes } = this.state;

    let editNote = notes.find((o) => o.id === noteId);

    if (this.state.modalIsOpen == false) {
      this.setState({ modalIsOpen: true });
      this.setState({ editNote: editNote });
    } else {
      this.setState({ modalIsOpen: false });
    }
  }

  handleUpdateCreateNotes(noteId) {
    const { createNotes } = this.state;
    const index = createNotes.indexOf(
      createNotes.find((obj) => obj.noteId === noteId)
    );
    createNotes.splice(index, 1);
    this.setState({
      createNotes: createNotes,
    });
  }

  renderAccountNotes(notes) {
    return notes.map((note, key) => (
      <CardItemNote
        key={key}
        note={note}
        handleModal={(noteId) => this.handleModal(noteId)}
      />
    ));
  }

  renderAddNotes() {
    const { accountId } = this.props;
    this.setState({
      createNotes: [
        ...this.state.createNotes,
        {
          text: "",
          accountId: accountId,
          noteId: this.state.createNotes.length + 1,
        },
      ],
    });
  }

  handleUpdateNotes(note) {
    this.setState({ notes: [...this.state.notes, note] });
  }

  renderCreateNotes() {
    return this.state.createNotes.map((noteObj) => (
      <NoteForm
        note={noteObj}
        noteId={noteObj.noteId}
        handleSubmit={(ev, noteId) => this.handleSubmit(ev, noteId)}
        updateFields={(updates, noteId) =>
          this.handleUpdateFields(updates, noteId)
        }
        updateNotes={(note) => this.handleUpdateNotes(note)}
        updatecreateNotes={(noteId) => this.handleUpdateCreateNotes(noteId)}
      />
    ));
  }

  handleUpdateFields(updates, noteId) {
    let createNotesArr = [...this.state.createNotes];
    Object.assign(
      createNotesArr.find((obj) => obj.noteId === noteId),
      updates
    );
    this.setState({ createNotes: createNotesArr });
  }

  handleSubmit = (ev, noteId) => {
    ev.preventDefault();
    let createNotesArr = [...this.state.createNotes];

    let noteObj = createNotesArr.find((obj) => obj.noteId === noteId);

    const { accountId, text } = noteObj;

    this.setState({ error: null });
    AccountApiService.postNote(accountId, text)
      .then((note) => this.handleUpdateNotes(note))
      .catch((res) => {
        this.setState({ error: res.error });
      });
    this.handleUpdateCreateNotes(noteId);
  };

  render() {
    const { notes } = this.state;
    return (
      <>
        <NoteModal
          modalIsOpen={this.state.modalIsOpen}
          triggerModal={() => this.handleModal()}
          note={this.state.editNote}
          noteId={this.state.editNote.id}
        />
        <div className="AccountPage__card">
          <div className="AccountPage__card__header">Notes</div>
          <div className="AccountPage__card__fields">
            {this.renderAccountNotes(notes)}
          </div>
          {this.renderCreateNotes()}
          <button className="button" onClick={() => this.renderAddNotes()}>
            Add Note
          </button>
        </div>
      </>
    );
  }
}
