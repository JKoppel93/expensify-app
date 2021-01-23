import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/dashboard" component={ExpenseDashboardPage}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route path="/" component={LoginPage} exact={true}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
