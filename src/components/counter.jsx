import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-9">{this.props.children}</div>

          <div className="col">
            <div className={this.getBadgeClassess()}>
              <span className="score-font"> {this.formateCount()} </span>
            </div>

            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-danger btn m-4"
            >
              -
            </button>

            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-primary btn m-"
            >
              +
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClassess() {
    let classes = "badge d-xl badge m-4 badge-pill_1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? " zero " : value;
  }
}

export default Counter;
