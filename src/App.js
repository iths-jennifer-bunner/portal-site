import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/pages/Login";
import Search from "./components/pages/Search";
import Result from "./components/pages/Result";
import NewSession from "./components/pages/NewSession";
import NotFound from "./components/NotFound";
import GetSessions from "./components/GetSessions";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/login" component={Login}></Redirect>
        </Route>
        <Route path="/get-sessions" component={GetSessions} />
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute
            path="/new-session"
            component={NewSession}
          ></PrivateRoute>
          <PrivateRoute path="/search" component={Search}></PrivateRoute>
          <PrivateRoute path="/result" component={Result}></PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
