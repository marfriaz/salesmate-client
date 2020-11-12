import React from "react";
import ReactDOM from "react-dom";
import NoteModal from "./NoteModal";

describe("NoteModal Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NoteModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
