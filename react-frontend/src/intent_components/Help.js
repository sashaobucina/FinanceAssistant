import React, { Component } from "react";

class Help extends Component {
  render() {
    const { intentInfos } = this.props.data;
    return(
      <div className="help-intent">
        {JSON.stringify(intentInfos)}
      </div>
    )
  }
}

export default Help;