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
          <Person
            name="Lisa"
            origin={window.crypto.getRandomValues(new Uint32Array(1))[0]}
          >
            <span>I'm a customized content. </span>
            <span>How many of me can be passed? </span>
            <span>Is it limited to only 1? </span>
            <span>Apparently not. </span>
          </Person>
          <Person
            name="Jonah"
            origin={window.crypto.getRandomValues(new Uint32Array(1))[0]}
          />
          <Person
            name="Koko"
            origin={window.crypto.getRandomValues(new Uint32Array(1))[0]}
          />
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default App;
