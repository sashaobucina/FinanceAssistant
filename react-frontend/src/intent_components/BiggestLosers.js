import React, { Component } from "react";
import HighestMovers from "./HighestMovers";

class BiggestLosers extends Component {
  render() {
    const { highestMovers } = this.props.data;
    return (
      <div className="biggest-losers">
        <HighestMovers data={highestMovers} direction={'down'} />
      </div>
    )
  }
}

export default BiggestLosers;