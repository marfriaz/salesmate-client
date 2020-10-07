import React from "react";
import ReactDOM from "react-dom";
import Description from "./Description";

describe("Description Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Description />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
