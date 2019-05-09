import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { MDBInput, MDBBtn, MDBIcon, MDBAnimation, MDBBadge } from 'mdbreact';

class ChatInput extends Component {
  constructor(props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleKeyPress(e) {
    const { onDownArrow, onUpArrow } = this.props;
    if (e.keyCode === 13) {
      e.preventDefault();
      this.sendMessage();
    } else if (e.keyCode === 38) {
      e.preventDefault();
      onUpArrow();
    } else if (e.keyCode === 40) {
      e.preventDefault();
      onDownArrow();
    }
  }

  sendMessage() {
    const { inputValue, handleViewChange, processingMessage } = this.props
    if (inputValue.length > 0) {
      processingMessage()
      const url = 'http://localhost:8080/chat'
      const data = { message: inputValue }
      axios.post(url, data).then(res => {
        const { data, intent } = res.data
        handleViewChange(data, intent, inputValue)
      })
      .catch(err => {
        console.error(err)
        handleViewChange({ error: 'Could not connect to the server', status: 503 }, 'NullIntent', inputValue)
      })
    }
  }

  render() {
    const { isLoading, inputValue, onInputChange } = this.props;
    return (
      <div className="chat-input mb-4">
        <div className='chat-badge mb-2 text-left'>
          <MDBBadge color="blue-gradient">
            Finance Assistant<MDBIcon className="ml-2" icon="comment" />
          </MDBBadge>
        </div>
        <Row className="border rounded">
          <Col className="offset-md-1" md={9}>
            <MDBInput
              type="text"
              value={inputValue}
              label="Ask me about finance!"
              onChange={evt => onInputChange(evt)}
              onKeyDown={this.handleKeyPress}
            />
          </Col>
          <Col md={2}>
            <MDBBtn className="chat-btn" gradient="blue" disabled={isLoading} onClick={this.sendMessage} >
              {(!isLoading)
                ? <MDBIcon className="white-text" far icon="paper-plane" size="lg" />
                : <MDBAnimation type="heartBeat" infinite>
                    <MDBIcon className="white-text" icon="ellipsis-h" size="lg" />
                  </MDBAnimation>
              }
            </MDBBtn>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ChatInput