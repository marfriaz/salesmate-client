import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";

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
          <div className="AccountPage__card__item">
            <label
              htmlFor="Create_note_text"
              className="AccountPage__card__item__key"
            >
              Note:
            </label>
            <input
              name="text"
              id="Create_note_text"
              className="AccountPage__card__item__value"
              value={note.text}
              onChange={(ev) => this.updateText(ev.target.value)}
            />
          </div>

          <button type="submit">Save</button>
        </form>
      </>
    );
  }
}
