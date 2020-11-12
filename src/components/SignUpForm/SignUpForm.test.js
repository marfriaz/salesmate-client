import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import SignUpForm from "./SignUpForm";

describe("SignUpForm Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
