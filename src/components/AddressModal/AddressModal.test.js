import React from "react";
import ReactDOM from "react-dom";
import AddressModal from "./AddressModal";

describe("AddressModal Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddressModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
