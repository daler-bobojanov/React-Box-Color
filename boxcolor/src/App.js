import React, { Component } from "react";
import "./App.css";

// Pseudocode:
// - Update functional component to a class component (App.js)
// - Set a state (hint: color & clickCounter)
// - When the button is clicked it should change its color and the    counter should increase.
// - Use a component lifecycle method to call setState.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "blue",
      clickCounter: 0
    };
  }

  onChange = event => {
    this.setState({
      color: this.randColors(),
      clickCounter: this.state.clickCounter + 1
    });
    console.log(
      "click counter ===> " +
        this.state.clickCounter +
        " (" +
        this.state.color +
        ")"
    );
  };

  // Color randomizer
  randColors() {
    const colors = [
      "salmon",
      "yellow",
      "black",
      "aqua",
      "white",
      "pink",
      "rebeccapurple",
      "tan",
      "teal",
      "yellowgreen",
      "indigo"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    return (
      <div className="App">
        <h1>Box color change</h1>

        <div
          className="colorBox"
          style={{ backgroundColor: this.state.color }}
          onClick={this.onChange}
        >
          <p>Click Me!</p>
        </div>
      </div>
    );
  }
}

export default App;
