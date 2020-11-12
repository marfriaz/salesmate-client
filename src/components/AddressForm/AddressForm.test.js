import React from "react";
import ReactDOM from "react-dom";
import AddressForm from "./AddressForm";

describe("AddressForm Component", () => {
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

    ReactDOM.render(<AddressForm address={address} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
