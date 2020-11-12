import React from "react";
import ReactDOM from "react-dom";
import ListNav from "./ListNav";
import { MemoryRouter } from "react-router-dom";

describe("ListNav Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ListNav />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
