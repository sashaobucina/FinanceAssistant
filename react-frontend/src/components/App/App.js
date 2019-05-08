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
      component: null, // TODO: Change to a landing page where user can get info on how to use the chatbot
      // component: <CompanyRating data={{ rating: 4, ticker: {companyName: 'Scotiabank', symbol: 'G'} }}/>,
      inputValue: '',
      isLoading: false
    }

    /* Bindings */
    this.handleViewChange = this.handleViewChange.bind(this)
    this.addView = this.addView.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.processingMessage = this.processingMessage.bind(this)
  }

  onInputChange(evt) {
    this.setState({
      inputValue: evt.target.value
    })
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

  handleViewChange = (intentName, data) => {
    this.addView(intentName, data)
      .then(() => {
        this.setState({ isLoading: false, inputValue: '' })
      })
      .catch(() => {
        this.setState({ isLoading: false, inputValue: '' })
      })
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
