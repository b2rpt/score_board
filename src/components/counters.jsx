import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: "1" },
      { id: 2, value: 0, name: "2" },
      { id: 3, value: 0, name: "3" },
      { id: 4, value: 0, name: "4" },
      { id: 5, value: 0, name: "5" },
      { id: 6, value: 0, name: "6" }
    ]
  };


  handleIncrement = counter => {
    const x = [...this.state.counters];
    const index = x.indexOf(counter);
    x[index] = { ...counter };
    x[index].value += 5;
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
          <h1>CONNECTIONS QUIZ PUNE</h1>
        </div>
        <div className="bcolor">
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            >
              <h3> TEAM {counter.name}</h3>
            </Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
