import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Login from "./components/Auth/Login";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import useToken from "./components/Auth/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <header className="App-header">In header</header>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
