import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Login from "./components/Auth/Login";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { PrivateRoute } from "./components/Auth/PrivateComponent";
import { history } from "../src/helper/history";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetail } from "./components/Product/ProductDetail";

function App() {
  const token = useSelector((state) => state.loginReducer.token);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            token={token}
          ></PrivateRoute>
          <PrivateRoute
            path="/home"
            component={Home}
            token={token}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/product"
            component={Product}
            token={token}
          ></PrivateRoute>
          <PrivateRoute
            path="/product/:id"
            component={ProductDetail}
            token={token}
          ></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
