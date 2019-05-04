import React, { Component } from 'react'
import { TextField } from "react-md";

class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="md-grid">
        <TextField
          id="floating-center-title"
          label="Ask me about finance!"
          lineDirection="center"
          className="md-cell md-cell-bottom"
        />
      </div>
    )
  }
}

export default ChatInput