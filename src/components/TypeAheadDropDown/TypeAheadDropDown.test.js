import React from "react";
import ReactDOM from "react-dom";
import TypeAheadDropDown from "./TypeAheadDropDown";

describe("TypeAheadDropDown Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TypeAheadDropDown />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
