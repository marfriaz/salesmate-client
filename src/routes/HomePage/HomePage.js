import React, { Component } from "react";
import GymListContext from "../../contexts/GymListContext";
import AccountApiService from "../../services/account-api-service";
import { Section } from "../../components/Utils/Utils";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ListNav from "../../components/ListNav/ListNav";
import ListItem from "../../components/ListItem/ListItem";
import "./HomePage.css";

export default class HomePage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = GymListContext;

  componentDidMount() {
    this.context.clearError();
    AccountApiService.getAccounts()
      .then(this.context.setGymList)
      .catch(this.context.setError);
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    if (e === "all" || undefined) {
      history.push(``);
      history.push("/gyms");
    } else {
      history.push(``);
      history.push(`gyms/location/${e}`);
    }
  };

  renderAccountList() {
    const { accountList = [] } = this.props;
    // const gymListCount = gymList.count();
    return accountList.map((account) => <ListItem account={account} />);
  }

  render() {
    const { accountList = [], error } = this.props;

    // const { error } = this.context;
    return (
      <>
        <Section list className="HomePage">
          <div>
            <div>All Accounts</div>
            <div>
              <div className="Account_List_Nav">
                <ListNav />
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
                  this.renderAccountList()
                )}
              </table>
            </div>
          </div>
        </Section>
      </>
    );
  }
}
