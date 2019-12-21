import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-9">{this.props.children}</div>

          <div className="col" >
            <span className={this.getBadgeClassess()} >
              {this.formateCount()}
            </span>

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
    let classes = "badge d-xl p-2 badge m-4 badge-pill badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? " zero " : value;
  }
}

export default Counter;
