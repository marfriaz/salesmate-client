import React, { Component } from "react";
import AccountApiService from "../../services/account-api-service";
import { Section } from "../../components/Utils/Utils";
import ListNav from "../../components/ListNav/ListNav";
import ListItem from "../../components/ListItem/ListItem";
import Paginate from "../../components/Paginate/Paginate";
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

    const uri = this.props.location.search;
    let queryPage = uri.slice(1).split(/&|=/)[1];
    let page = null;

    if (queryPage) {
      page = queryPage;
    }

    if (accountStage == "leads") {
      AccountApiService.getAccountByStage("lead", page)
        .then((res) => this.setState({ accountList: res }))
        .catch((err) => this.setState({ error: err }));
    }
    if (accountStage == "sold") {
      AccountApiService.getAccountByStage("sold", page)
        .then((res) => this.setState({ accountList: res }))
        .catch((err) => this.setState({ error: err }));
    } else {
      AccountApiService.getAccounts(page)
        .then((res) => this.setState({ accountList: res }))
        .catch((err) => this.setState({ error: err }));
    }
  }

  componentDidUpdate(prevProps) {
    const { accountStage } = this.props.match.params;
    const resource = this.props.location.search;

    const uri = this.props.location.search;
    let queryPage = uri.slice(1).split(/&|=/)[1];
    let page = null;

    if (queryPage) {
      page = queryPage;
    }

    if (
      prevProps.match.params.accountStage !== accountStage ||
      (resource && resource !== prevProps.location.search)
    ) {
      if (accountStage == "leads") {
        AccountApiService.getAccountByStage("lead", page)
          .then((res) => this.setState({ accountList: res }))
          .catch((err) => this.setState({ error: err }));
      } else if (accountStage == "sold") {
        AccountApiService.getAccountByStage("sold", page)
          .then((res) => this.setState({ accountList: res }))
          .catch((err) => this.setState({ error: err }));
      } else {
        AccountApiService.getAccounts(page)
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
    const { accountStage } = this.props.match.params;
    if (accountStage == "leads") {
      return "Leads";
    }
    if (accountStage == "sold") {
      return "Sold";
    } else return "All Accounts";
  }

  handleSort(sortedList) {
    this.setState({ accountList: sortedList });
  }

  render() {
    const { accountList, error } = this.state;
    const pageQuery = this.props.location.search.slice(1).split(/&|=/)[1];

    const page = pageQuery ? parseInt(pageQuery, 10) : 1;
    const next = accountList.length / 20 >= 1;

    return (
      <>
        <Section className="HomePage">
          <div className="HomePage__Header">
            <h2>{this.renderHeader()}</h2>
          </div>
          <div className="HomePage__Body">
            <ListNav
              accountList={accountList}
              handleSort={(sortedList) => this.handleSort(sortedList)}
            />
            <div className="CustomersTableOuter">
              <table id="CustomersTable">
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
          </div>
          <Paginate
            page={page}
            next={next}
            updatePage={(page) => this.updatePage(page)}
          />
        </Section>
      </>
    );
  }
}
