import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../Navbar/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
