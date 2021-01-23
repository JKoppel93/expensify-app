import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
        ></PrivateRoute>
        <PrivateRoute path="/create" component={AddExpensePage}></PrivateRoute>
        <PrivateRoute
          path="/edit/:id"
          component={EditExpensePage}
        ></PrivateRoute>
        <Route path="/help" component={HelpPage}></Route>
        <Route path="/" component={LoginPage} exact={true}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
