import React, { Component } from "react";

const GymContext = React.createContext({
  gym: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setGym: () => {},
  clearGym: () => {},
});

export default GymContext;

export class GymProvider extends Component {
  state = {
    gym: {},
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setGym = (gym) => {
    this.setState({ gym });
  };

  clearGym = () => {
    this.setGym({});
  };

  render() {
    const value = {
      gym: this.state.gym,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGym: this.setGym,
      clearGym: this.clearGym,
    };
    return (
      <GymContext.Provider value={value}>
        {this.props.children}
      </GymContext.Provider>
    );
  }
}
