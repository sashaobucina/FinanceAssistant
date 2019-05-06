import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

class ChatInput extends Component {
  constructor(props) {
    super(props)
    this.chatInput = React.createRef()

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
    if (this.chatInput.current.value.length > 0) {
      const url = 'http://localhost:8080/chat'
      const data = { message: this.chatInput.current.value }
      axios.post(url, data).then(res => {
        const { data, intent } = res.data
        this.chatInput.current.value = ''
        this.props.handleViewChange(intent, data)
      })
      .catch(err => {
        console.error(err)
        this.chatInput.current.value = ''
        this.props.handleViewChange('NullIntent', { error: 'Could not connect to the server', status: 503 })
      })
    }
  }

  render() {
    const { isLoading } = this.props
    return (
      <div className="chat-input">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              <Form>
                <Form.Group controlId="formChatInput">
                  <Form.Label>Ask me about finance!</Form.Label>
                  <Form.Control type="text" ref={this.chatInput} placeholder="Start typing..." onKeyPress={this.handleKeyPress}></Form.Control>
                  <Form.Text className="text-muted">
                    I'm not always correct, but I am constantly learning.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
            <Col md={2}>
              <Button
                className="chat-btn"
                variant="primary"
                disabled={isLoading}
                type="submit"
                onClick={this.sendMessage}>
                  {isLoading ? "Loading...": "Send"}
              </Button>
            </Col>
          </Row>
          {/* <h3>{JSON.stringify(this.state.data, null, 2)}</h3> */}
        </Container>
      </div>
    )
  }
}

export default ChatInput