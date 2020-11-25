import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleSignUpSuccess() {
    const { history } = this.props;
    history.push("/login");
  }

  render() {
    return (
      <Section className="SignUpPage">
        <SignUpForm onSignUpSuccess={() => this.handleSignUpSuccess()} />
      </Section>
    );
  }
}
