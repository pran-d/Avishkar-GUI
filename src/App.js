import React from "react";
import { ServerReceive } from "./utils/ServerReceive.js";
import { ServerSend } from "./utils/ServerSend.js";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Navbar } from "./views/components/Navbar/Navbar.js";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/data" />
        </Route>
        <Route path="/data">
          <ServerReceive />
        </Route>
        <Route exact path="/send">
          <ServerSend />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
