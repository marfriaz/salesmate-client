import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CardItemNote.css";

// import { format as formatDate } from "date-fns";

export default class CardItemNote extends Component {
  NiceDate(date) {
    var d = new Date(date),
      month = "" + d.getMonth(),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("/");
  }
  render() {
    const { note } = this.props;
    let noteId = note.id;

    return (
      <>
        <div className="AccountPage__card__item__note">
          <button
            onClick={() => this.props.handleModal(noteId)}
            className="editButton"
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <div className="AccountPage__card__item__note__key">
            {this.NiceDate(note.date_created)}
          </div>
          <div className="AccountPage__card__item__note__value">
            {note.text}
          </div>
        </div>
      </>
    );
  }
}
