import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Lisa", origin: 33 },
      { id: 2, name: "Jonah", origin: 233 },
      { id: 3, name: "Koko", origin: 112 }
    ]
  };

  updateNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: newName, origin: 33 },
        { id: 2, name: "Jonathan", origin: 233 },
        { id: 3, name: "Koko Hekmatyar", origin: 112 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React 101</h1>
        <div>
          {/* Inefficient - This gets executed immediately when React component renders */}
          {/* In fact, React wouldn't event render this */}
          {/* <button onClick={this.updateNameHandler()}>Click to Update!</button> */}

          <button onClick={() => this.updateNameHandler("Wiley")}>Click to Update!</button>

          {/* This doesn't get executed immediately. This style of writing has implicit "return" due to "()" */}
          {/* Alternatively, it to make it multiline, it can be written: onClick={() => {return this.updateNameHandler("Lisard!")} */}
          <Person
            name={this.state.persons[0].name}
            origin={this.state.persons[0].origin}
          >
            <span>I'm a customized content. </span>
            <span>How many of me can be passed? </span>
            <span>Is it limited to only 1? </span>
            <span>Apparently not. </span>
          </Person>
          {/* This is the most preferred way of passing params. Use bind */}
          <Person
            click={this.updateNameHandler.bind(this, "Jonah")}
            name={this.state.persons[1].name}
            origin={this.state.persons[1].origin}
          />
          <Person
            name={this.state.persons[2].name}
            origin={this.state.persons[2].origin}
          />
        </div>
      </div>
    );
  }
}

export default App;
