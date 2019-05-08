import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { MDBInput, MDBBtn, MDBIcon, MDBAnimation, MDBBadge } from 'mdbreact';

class ChatInput extends Component {
  constructor(props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      this.sendMessage()
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
        handleViewChange(intent, data)
      })
      .catch(err => {
        console.error(err)
        handleViewChange('NullIntent', { error: 'Could not connect to the server', status: 503 })
      })
    }
  }

  render() {
    const { isLoading, inputValue, onInputChange } = this.props
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
              onKeyPress={this.handleKeyPress}
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
        {/* <hr className="chat-divider" /> */}
      </div>
    )
  }
}

export default ChatInput