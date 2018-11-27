import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  handleIncrement = counterID => {
    const counters = { ...this.state.counters };
    const index = this.state.counters.findIndex(c => c.id === counterID);
    // counters[index] = { ...counter };
    counters[index].value++;
    // counters[index] = { ...counter };
    // console.log(counters[index]);
    // console.log(counter);
    // console.log(index);
    this.setState(counters);
  };

  handleReset = () => {
    // console.log("reset");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar counters={this.state.counters} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
