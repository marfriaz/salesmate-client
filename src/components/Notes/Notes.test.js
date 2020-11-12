import React from "react";
import ReactDOM from "react-dom";
import Notes from "./Notes";

describe("ContactForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const note = {
      id: 1,
      user_id: 1,
      account_id: 1,
      text: "Nisi suscipit illum itaque error.",
    };

    ReactDOM.render(<Notes note={note} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
