import React, { Component } from "react";

class MajorIndexes extends Component {
  render() {
    const { majorIndexes } = this.props.data
    return (
      <div className="major-indexes">
        {JSON.stringify(majorIndexes)}
      </div>
    )
  }
}

export default MajorIndexes;