import React, { Component } from "react";
import HighestMovers from "./HighestMovers";

class HighestGainers extends Component {
  render() {
    const { highestMovers } = this.props.data;
    return (
      <div className="biggest-losers">
        <HighestMovers data={highestMovers} direction={'up'} />
      </div>
    )
  }
}

export default HighestGainers;