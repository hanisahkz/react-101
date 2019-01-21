import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    /* jshint ignore:start */
    return (
      <div className="App">
        <h1>React 101</h1>
        <div>
          <p>Hello, it's Monday</p>
          <Person />
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default App;
