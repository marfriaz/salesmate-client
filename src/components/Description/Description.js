import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThList,
  faBookOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYelp,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Description.css";

export default class Description extends Component {
  render() {
    const content = [
      {
        icon: (
          <FontAwesomeIcon
            className="List_icon Description_icon icon"
            icon={faThList}
          />
        ),
        title: "Accounts",
        description: "Gives teams a shared view of every customer",
      },
      {
        icon: (
          <FontAwesomeIcon
            className="Calendar_icon Description_icon icon"
            icon={faUsers}
          />
        ),
        title: "Contacts",
        description: "Keep track of who you're contacting",
      },
      {
        icon: (
          <FontAwesomeIcon
            className="PiggyBank_icon Description_icon icon"
            icon={faBookOpen}
          />
        ),
        title: "Notes",
        description: "Keep track of your notes",
      },
    ];
    const list = content.map((item, index) => (
      <div className="Description_div" key={index}>
        {item.icon}
        <h2 className="Description_title">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ));

    return (
      <section className="Description">
        {/* <h2>How it Works</h2> */}
        <div className="Description_container">{list}</div>
      </section>
    );
  }
}
