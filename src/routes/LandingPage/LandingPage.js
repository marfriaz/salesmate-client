import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import Description from "../../components/Description/Description";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Section className="LandingPage">
          <div>
            {/* <div className="logo">SalesMate</div> */}
            <div className="banner">
              <div className="description">
                <h1>
                  A better Customer Relationship Management platform for selling
                  your products and services
                </h1>
              </div>
            </div>
          </div>
          <Description />
        </Section>
      </>
    );
  }
}
