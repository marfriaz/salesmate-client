import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import { Required } from "../Utils/Utils";
import "./NoteForm.css";

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      noteId: this.props.noteId,
      accountId: this.props.accountId,
      error: null,
    };
  }

  componentDidMount() {
    const { note } = this.props;
    this.setState({
      note: note,
    });
  }

  handleSubmit = (ev) => {
    const { accountId, noteId, text } = this.props;

    ev.preventDefault();
    this.setState({ error: null });
    AccountApiService.postNote(accountId, text)
      .then((note) => this.props.updateNotes(note))
      .catch((res) => {
        this.setState({ error: res.error });
      });
    this.props.updatecreateNotes(noteId);
  };

  updateText(value) {
    // this.setState({ text: value });
    const { noteId } = this.props;
    let updates = { ...this.state.contact };
    Object.assign(updates, {
      text: value,
    });
    this.setState({ note: updates });

    this.props.updateFields(updates, noteId);
  }

  render() {
    const { note } = this.state;
    return (
      <>
        <form
          className="createNotesForm AccountPage__card__fields"
          onSubmit={(ev) => this.props.handleSubmit(ev, this.props.noteId)}
        >
          <div className="Note__card__item">
            <label htmlFor="Create_note_text" className="Note__card__item__key">
              Note: <Required />
            </label>
            <textarea
              name="text"
              id="Create_note_text"
              className="Note__card__item__value"
              rows="3"
              cols="40"
              value={note.text}
              onChange={(ev) => this.updateText(ev.target.value)}
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
