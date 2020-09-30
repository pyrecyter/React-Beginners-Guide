import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import LoggedNavbar from "./components/LoggedNavbar";
import { Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";
import { TokenContext } from "./context/TokenContext";

const useCookieState = (key) => {
  const [token, setToken] = useState(Cookie.get(key) || "");

  useEffect(() => {
    Cookie.set(key, token);
  }, [token]);

  return [token, setToken];
};

function App() {
  const [token, setToken] = useCookieState("myToken");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <Fragment>
        {token == "" ? <Navbar /> : <LoggedNavbar />}
        <center>token is {token}</center>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/login"
            component={() => (token == "" ? Login() : Home())}
          />
          <Route
            exact
            path="/register"
            component={() => (token == "" ? Register() : Home())}
          />
          <Route exact path="*" component={Home} />
        </Switch>
      </Fragment>
    </TokenContext.Provider>
  );
}

export default App;
