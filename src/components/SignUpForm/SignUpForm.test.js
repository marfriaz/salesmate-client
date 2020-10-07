import React from "react";
import ReactDOM from "react-dom";
import SignUpForm from "./SignUpForm";

describe("SignUpForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SignUpForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
