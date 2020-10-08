import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Description from "../../components/Description/Description";
import "./LandingPage.css";

export default class LandingPage extends Component {
  handleSubmit = (e) => {
    const { history } = this.props;
    if (e == "all" || undefined) {
      history.push(``);
      history.push("/gyms");
      window.location.reload();
    } else {
      history.push(``);
      history.push(`gyms/location/${e}`);
      window.location.reload();
    }
  };
  render() {
    return (
      <>
        <Section className="LandingPage">
          <div>
            <div className="logo">SalesMate</div>
            <div>
              a better Customer Relationship Management platform for selling
              your products and services
            </div>
          </div>
          <Description />
          <SignUpForm
            handleSearchSubmit={(event) => this.handleSubmit(event)}
          />
        </Section>
      </>
    );
  }
}
