import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const account = {
      id: 1,
      name: "Wal-Mart",
      stage: "sold",
      website: "www.wal-mart.com",
      industry: "Food Production",
      territory: "NAMER",
      employee_range: "10,001+",
      phone: "464-794-6724",
      fax: "857-211-3839",
      linkedin: "www.linkedin.com/company/walmart/about",
      address: {
        id: 1,
        account_id: 1,
        street: "14302 Messerschmidt Way",
        city: "Columbus",
        zip_code: "31998",
        state: "Georgia",
        country: "United States",
      },
      user: {
        id: 3,
        first_name: "test-user-3",
        last_name: "Test user 3",
        email: "TU3",
        password: "password",
      },
    };

    const address = {
      id: 1,
      account_id: 1,
      street: "14302 Messerschmidt Way",
      city: "Columbus",
      zip_code: "31998",
      state: "Georgia",
      country: "United States",
    };

    ReactDOM.render(
      <MemoryRouter>
        <ListItem account={account} address={address} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
