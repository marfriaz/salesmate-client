import React, { Component } from "react";
import { Required } from "../Utils/Utils";
import "./NoteForm.css";

export default class NoteForm extends Component {
  updateText(value) {
    const { noteId } = this.props;
    let updates = { ...this.props.note };
    Object.assign(updates, {
      text: value,
    });

    this.props.updateFields(updates, noteId);
  }

  render() {
    const { note } = this.props;
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
              required
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
