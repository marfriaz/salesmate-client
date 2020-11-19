import React from "react";
import ReactDOM from "react-dom";
import CardItemNote from "./CardItemNote";

describe("CardItemNote Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const note = {
      id: 1,
      user_id: 1,
      account_id: 1,
      text: "Nisi suscipit illum itaque error.",
    };
    ReactDOM.render(<CardItemNote note={note} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
