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
    return accountList.map((account) => <ListItem account={account} />);
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

  // onTextChange() {
  //   const { accountList } = this.state;

  //   const sortedAccounts = accountList
  //     .map((account) => [account.name, account.id])
  //     .sort(function (a, b) {
  //       if (a[0] < b[0]) return -1;
  //       if (a[0] > b[0]) return 1;
  //       return 0;
  //     });

  //   let suggestions = [];
  //   const value = "Wal";

  //   if (value.length > 0) {
  //     const regex = new RegExp(`^${value}`, `i`);

  //     suggestions = sortedAccounts.filter((v) => regex.test(v[0]));
  //   }

  //   console.log(suggestions);
  // }

  render() {
    const { accountList, error } = this.state;
    // console.log(
    //   accountList
    //     .map((account) => [account.name, account.id])
    //     .sort(function (a, b) {
    //       if (a[0] < b[0]) return -1;
    //       if (a[0] > b[0]) return 1;
    //       return 0;
    //     })
    // );

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
            </table>
          </div>
        </section>
      </>
    );
  }
}
