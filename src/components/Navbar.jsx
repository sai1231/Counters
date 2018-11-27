import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Total {this.getTotal()}</span>
      </nav>
    );
  }
  getTotal() {
    const a = this.props.counters.filter(c => c.value > 0).length;
    return a;
  }
}

export default Navbar;
