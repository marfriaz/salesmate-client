import React from "react";
import ReactDOM from "react-dom";
import AccountModal from "./AccountModal";

describe("AccountModal Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AccountModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
