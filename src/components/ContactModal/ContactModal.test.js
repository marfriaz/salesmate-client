import React from "react";
import ReactDOM from "react-dom";
import ContactModal from "./ContactModal";

describe("ContactModal Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ContactModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
