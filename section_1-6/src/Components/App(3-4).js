import React, { Component } from 'react';

export default class App extends Component {
  state = {
    value: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  resetValue() {
    this.setState({ value: 0 });
  }
  
  //In React, the render function defines 
  //how a component appears on the screen based on its props and state
  render() {
    return (
      <div>
        <h1>value: {this.state.value}</h1>
        <button
          onClick={() => {
            this.setState((state) => ({
              value: state.value + 1
            }));
          }}
        >
          Increase value
        </button>
        <button
          onClick={this.resetValue.bind(this)}
        >
          Reset value
        </button>
      </div>
    );
  }
}
