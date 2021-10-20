import { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div id="spinner" className="container col-12">
        <div className="loading"></div>
      </div>
    );
  }
}
export default Loader;
