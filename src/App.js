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
          <Person name="Lisa" origin={window.crypto.getRandomValues(new Uint32Array(1))[0]} />
          <Person name="Jonah" origin={window.crypto.getRandomValues(new Uint32Array(1))[0]} />
          <Person name="Koko" origin={window.crypto.getRandomValues(new Uint32Array(1))[0]} />  
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default App;
