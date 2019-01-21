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

  updateNameHandler = newName => {
    this.setState({
      persons: [
        { id: 1, name: newName, origin: 33 },
        { id: 2, name: "Jonathan", origin: 233 },
        { id: 3, name: "Koko Hekmatyar", origin: 112 }
      ]
    });
  };

  // this method accepts event object
  // perhaps, this is tied to Form HTML element that's always expecting an event object ?
  changeNameHandler = event => {
    this.setState({
      persons: [
        { id: 1, name: "Lisa", origin: 33 },
        { id: 2, name: "Jonathan", origin: 233 },
        { id: 3, name: event.target.value, origin: 112 }
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

          <button onClick={() => this.updateNameHandler("Wiley")}>
            Click to Update!
          </button>

          {/* Putting change event trigger here to observe the impact of placing the triggerer */}
          <Person
            changedName={this.changeNameHandler}
            name={this.state.persons[0].name}
            origin={this.state.persons[0].origin}
          >
            <span>I'm a customized content. </span>
            <span>How many of me can be passed? </span>
            <span>Is it limited to only 1? </span>
            <span>Apparently not. </span>
          </Person>

          {/* This doesn't get executed immediately. This style of writing has implicit "return" due to "()" */}
          {/* Alternatively, it to make it multiline, it can be written: onClick={() => {return this.updateNameHandler("Lisard!")} */}
          {/* This is the most preferred way of passing params. Use bind */}
          <Person
            click={this.updateNameHandler.bind(this, "Jonah")}
            name={this.state.persons[1].name}
            origin={this.state.persons[1].origin}
          />
          <Person
          changedName={this.changeNameHandler}
            name={this.state.persons[2].name}
            origin={this.state.persons[2].origin}
          />
        </div>
      </div>
    );
  }
}

export default App;
