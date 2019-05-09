import React, { Component } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import NullIntent from '../../intent_components/NullIntent';
import EmptyDiv from "../Empty/EmptyDiv";
import { Container } from 'react-bootstrap';
import About from '../About/About';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: null,
      chatHistory: [],
      historyIndex: -1,
      inputValue: '',
      isLoading: false
    }

    /* Bindings */
    this.addView = this.addView.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleChatHistoryChange = this.handleChatHistoryChange.bind(this);
    this.onDownArrow = this.onDownArrow.bind(this);
    this.onUpArrow = this.onUpArrow.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.processingMessage = this.processingMessage.bind(this);
  }

  onInputChange(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  onDownArrow() {
    const { chatHistory, historyIndex } = this.state;
    if (chatHistory.length === 0) { return; }
    if (historyIndex > 0) {
      this.setState(prevState => ({
        historyIndex: prevState.historyIndex - 1,
        inputValue: prevState.chatHistory[prevState.historyIndex - 1]
      }))
    } else {
      this.setState({ historyIndex: -1, inputValue: '' })
    }
  }

  onUpArrow() {
    const { chatHistory, historyIndex } = this.state;
    if (chatHistory.length === 0) { return; }
    if (historyIndex < chatHistory.length - 1 && historyIndex < 20) {
      this.setState(prevState => ({
        historyIndex: prevState.historyIndex + 1,
        inputValue: prevState.chatHistory[prevState.historyIndex + 1]
      }))
    }
  }

  handleViewChange = (data, intentName, message) => {
    this.addView(intentName, data)
      .then(() => {
        this.handleChatHistoryChange(message);
      })
      .catch(() => {
        this.handleChatHistoryChange(message);
      })
  }

  handleChatHistoryChange(message) {
    const { chatHistory } = this.state;
    if (chatHistory.length < 20) {
      this.setState(prevState => ({
        isLoading: false,
        inputValue: '',
        chatHistory: [message, ...prevState.chatHistory],
        historyIndex: -1
      }));
    } else {
      this.setState({ isLoading: false, inputValue: '', historyIndex: -1 });
    }
  }

  processingMessage() {
    this.setState(() => ({
      component: <EmptyDiv />,
      isLoading: true
    }))
  }

  addView = (viewName, viewData) => {
    console.log(`Loading ${viewName} view`) // added for dev/debugging purposes

    return import(`../../intent_components/${viewName}.js`)
      .then(IntentComponent => {
        this.setState({
          component: <IntentComponent.default data={viewData} />
        });
      })
      .catch(() => {
        this.setState({
          component: <NullIntent data={{ error: 'Could not connect to the server', status: 503 }} />
        })
      });
  }

  render() {
    const { inputValue, isLoading, component } = this.state
    return (
      <div className="App">
        <Container>
          <ChatInput
            className="chat-input"
            handleViewChange={this.handleViewChange}
            processingMessage={this.processingMessage} isLoading={isLoading}
            inputValue={inputValue}
            onInputChange={this.onInputChange}
            onDownArrow={this.onDownArrow}
            onUpArrow={this.onUpArrow}
          />
          <div className="intent-view">
            {component === null ? (
              <About />
            ): (
              component
            )}
          </div>
        </Container>
      </div>
    )
  };
}

export default App;
