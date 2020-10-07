import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThList,
  faCalendar,
  faPiggyBank,
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
        title: "Put SMB Sales success on the menu",
        description: "Gives teams a shared view of every customer",
      },
      {
        icon: (
          <FontAwesomeIcon
            className="Calendar_icon Description_icon icon"
            icon={faYelp}
          />
        ),
        title: "All restaurant businesses are supplied by Yelp",
        description: "Yes",
      },
      {
        icon: (
          <FontAwesomeIcon
            className="PiggyBank_icon Description_icon icon"
            icon={faCalendar}
          />
        ),
        title:
          "Check in with businesses that may have had supply or staff affected by Covid",
        description: "Yes",
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
