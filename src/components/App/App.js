import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
// import PrivateRoute from "../Utils/PrivateRoute";
// import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import LandingPage from "../../routes/LandingPage/LandingPage";
import HomePage from "../../routes/HomePage/HomePage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import SignUpPage from "../../routes/SignUpPage/SignUpPage";
import AccountPage from "../../routes/AccountPage/AccountPage";
import EditPage from "../../routes/EditPage/EditPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import CreatePage from "../../routes/CreatePage/CreatePage";
import "./App.css";
import Store from "../STORE/store";

class App extends Component {
  state = { ...Store, error: false };

  // state = { hasError: false };

  // static getDerivedStateFromError(error) {
  //   console.error(error);
  //   return { hasError: true };
  // }

  render() {
    const { accountList, error } = this.state;
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <header className="App__NavBar">
          <NavBar />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route exact path={"/accounts/create"} component={CreatePage} />
            <Route
              path={"/accounts/stage/:accountStage"}
              component={HomePage}
            />
            {/* <Route
              exact
              path={"/accounts/leads"}
              render={(routeProps) => {
                const leads = findLeads(accountList) || {};
                return (
                  <HomePage accountList={leads} error={error} {...routeProps} />
                );
              }}
            />
            <Route
              exact
              path={"/accounts/sold"}
              render={(routeProps) => {
                const sold = findSold(accountList) || {};
                return (
                  <HomePage accountList={sold} error={error} {...routeProps} />
                );
              }}
            /> */}
            <Route
              exact
              path={"/accounts/create"}
              render={(routeProps) => (
                <CreatePage error={error} {...routeProps} />
              )}
            />

            <Route
              path={"/accounts/:accountId"}
              render={(routeProps) => {
                const { accountId } = routeProps.match.params;
                const account = findAccount(accountList, accountId) || {};
                return (
                  <AccountPage
                    account={account}
                    error={error}
                    {...routeProps}
                  />
                );
              }}
            />

            <Route
              path={"/accounts"}
              render={(routeProps) => (
                <HomePage
                  accountList={accountList}
                  error={error}
                  {...routeProps}
                />
              )}
            />

            <Route path={"/login"} component={LoginPage} />
            <Route path={"/signup"} component={SignUpPage} />

            {/* <PrivateRoute path={"/hostgym"} component={HostGymPage} /> */}
            {/* <Route
              path={"/gyms/location/:gymLocation"}
              component={GymListPage}
            /> */}
            {/* <Route path={"/gyms/:gymId"} component={GymPage} />
            <Route path={"/gyms"} component={GymListPage} /> */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

const findAccount = (accountList = [], accountId) =>
  accountList.find((account) => account.id == accountId);

const findLeads = (accountList = []) =>
  accountList.filter((account) => account.stage === "Lead");

const findSold = (accountList = []) =>
  accountList.filter((account) => account.stage === "Sold");

export default App;
