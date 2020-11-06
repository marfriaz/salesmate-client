import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import ListNav from "../../components/ListNav/ListNav";
import ListItem from "../../components/ListItem/ListItem";
import "./HomePage.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList: [],
      error: null,
    };
  }

  static defaultProps = {
    match: { params: {} },
  };

  componentDidMount() {
    const { accountStage } = this.props.match.params;

    if (accountStage == "leads") {
      AccountApiService.getAccountByStage("lead")
        .then((res) => this.setState({ accountList: res }))
        .catch((err) => this.setState({ error: err }));
    }
    if (accountStage == "sold") {
      AccountApiService.getAccountByStage("sold")
        .then((res) => this.setState({ accountList: res }))
        .catch((err) => this.setState({ error: err }));
    } else {
      AccountApiService.getAccounts()
        .then((res) => this.setState({ accountList: res }))
        .catch((err) => this.setState({ error: err }));
    }
  }

  componentDidUpdate(prevProps) {
    const { accountStage } = this.props.match.params;

    if (prevProps.match.params.accountStage !== accountStage) {
      if (accountStage == "leads") {
        AccountApiService.getAccountByStage("lead")
          .then((res) => this.setState({ accountList: res }))
          .catch((err) => this.setState({ error: err }));
      } else if (accountStage == "sold") {
        AccountApiService.getAccountByStage("sold")
          .then((res) => this.setState({ accountList: res }))
          .catch((err) => this.setState({ error: err }));
      } else {
        AccountApiService.getAccounts()
          .then((res) => this.setState({ accountList: res }))
          .catch((err) => this.setState({ error: err }));
      }
    }
  }

  componentWillUnmount() {
    this.setState({ error: null });
  }

  renderAccountList(accountList) {
    return accountList.map((account, index) => (
      <ListItem account={account} key={index} />
    ));
  }

  renderHeader() {
    if (this.props.match.params.accountStage == "leads") {
      return "Leads";
    }
    if (this.props.match.params.accountStage == "sold") {
      return "Sold";
    } else return "All Accounts";
  }

  handleSort(sortedList) {
    this.setState({ accountList: sortedList });
  }

  render() {
    const { accountList, error } = this.state;

    return (
      <>
        <section className="HomePage">
          <div className="HomePage__Header">
            <h2>{this.renderHeader()}</h2>
          </div>
          <div>
            <div className="Account_List_Nav">
              <ListNav
                accountList={accountList}
                handleSort={(sortedList) => this.handleSort(sortedList)}
              />
            </div>
            <table id="customers">
              <tbody>
                <tr>
                  <th>Account Name</th>
                  <th>Stage</th>
                  <th>Industry</th>
                  <th>Territory</th>
                </tr>

                {error ? (
                  <p className="red">There was an error, try again</p>
                ) : (
                  this.renderAccountList(accountList)
                )}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  }
}
