import React, { Component } from "react";
// import AccountApiService from "../../services/account-api-service";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageLimit: 0,
      error: null,
    };
  }

  static defaultProps = {
    history: {
      push: () => {},
    },
    match: { params: {} },
  };

  handleNext() {
    this.props.history.push({
      pathname: "/accounts",
      search: `?page=${this.state.page}`,
    });
    this.setState({ page: this.state.page++ });
  }

  handleBack() {
    this.setState({ page: this.state.page-- });
  }

  hasPrevious() {
    const { page } = this.props;
    return page > 1;
  }

  hasNext() {
    const { next } = this.props;
    return !!next;
  }

  render() {
    const { page } = this.props;

    return (
      <>
        <div className="Paginate__Containter">
          {this.hasPrevious() && (
            <Link to={`/accounts/?page=${page - 1}`}>
              <button className="button">Previous </button>
            </Link>
          )}{" "}
          {this.hasNext() && (
            <Link to={`/accounts/?page=${page + 1}`}>
              <button className="button">Next </button>
            </Link>
          )}
        </div>
      </>
    );
  }
}
