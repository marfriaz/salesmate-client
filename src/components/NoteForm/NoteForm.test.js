import React from "react";
import ReactDOM from "react-dom";
import NoteForm from "./NoteForm";

describe("NoteForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    const note = {
      id: 1,
      user_id: 1,
      account_id: 1,
      text: "Nisi suscipit illum itaque error.",
    };

    ReactDOM.render(<NoteForm note={note} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
