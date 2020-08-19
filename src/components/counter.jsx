import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <input type="textbox" value={this.state.count} />
        <br />
        <br />
        <button onClick={this.increment}> increment </button> {"  "}
        {this.state.count ? (
          <button onClick={this.decrement}> decrement </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Counter;
