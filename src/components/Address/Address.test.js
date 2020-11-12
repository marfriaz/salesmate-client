import React from "react";
import ReactDOM from "react-dom";
import Address from "./Address";

describe("Address Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    const address = {
      id: 1,
      account_id: 1,
      street: "14302 Messerschmidt Way",
      city: "Columbus",
      zip_code: "31998",
      state: "Georgia",
      country: "United States",
    };

    ReactDOM.render(<Address address={address} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
