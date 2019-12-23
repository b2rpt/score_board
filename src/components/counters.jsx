import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: "WHITE SHARKS" },
      { id: 2, value: 0, name: "BLUE NINJAS" },
      { id: 3, value: 0, name: "WOLVERINE" },
      { id: 4, value: 0, name: "404-NOT-FOUND" },
      { id: 5, value: 0, name: "BLACK HAWKS" },
      { id: 6, value: 0, name: "PEGASUS" }
    ]
  };


  handleIncrement = counter => {
    const x = [...this.state.counters];
    const index = x.indexOf(counter);
    x[index] = { ...counter };
    x[index].value += 10;
    x.sort((a,b) => b.value - a.value)
    this.setState({ counters: x });
  };

  handleDecrement = counter => {
    const x = [...this.state.counters];
    const index = x.indexOf(counter);
    x[index] = { ...counter };
    x[index].value -= 5;
    x.sort((a,b) => b.value - a.value)
    this.setState({ counters: x });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>CONNECTIONS QUIZ - SCORE BOARD</h1>
        </div>
        <div className="bcolor">
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            >
              <h3> {counter.name}</h3>
            </Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
