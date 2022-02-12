import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    // this.increment = this.increment.bind(this);
  }

  Increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  Decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="card my-5 bg-light text-dark ">
          <div className="card-body">
            <div className="text text-center h1">Counter Class Component</div>
            <div className="container">
              <div className="row align-items-start justify-content-start">
                <div className="col">
                  <button
                    className="btn btn-success mx-1 text-center"
                    onClick={this.Increment}
                  >
                    Increment+
                  </button>
                </div>
                <div className="col">
                  <h2 className="text text-center text-bold text-dark">
                    {this.state.value}
                  </h2>
                </div>
                <div className="col">
                  <button
                    className="btn btn-danger mx-1"
                    onClick={this.Decrement}
                  >
                    Decrement-
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
