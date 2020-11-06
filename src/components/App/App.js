import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import LandingPage from "../../routes/LandingPage/LandingPage";
import HomePage from "../../routes/HomePage/HomePage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import SignUpPage from "../../routes/SignUpPage/SignUpPage";
import AccountPage from "../../routes/AccountPage/AccountPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import CreatePage from "../../routes/CreatePage/CreatePage";
import "./App.css";
import TokenService from "../../services/token-service";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        {TokenService.hasAuthToken() && (
          <header className="App__NavBar">
            <NavBar />
          </header>
        )}
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/signup"} component={SignUpPage} />
            <PrivateRoute
              exact
              path={"/accounts/create"}
              component={CreatePage}
            />
            <PrivateRoute
              path={"/accounts/stage/:accountStage"}
              component={HomePage}
            />
            <PrivateRoute
              path={"/accounts/:accountId"}
              component={AccountPage}
            />
            <PrivateRoute path={"/accounts"} component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
