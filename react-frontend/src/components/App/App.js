import React, { Component } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import NullIntent from '../../intent_components/NullIntent';
import EmptyDiv from "../Empty/EmptyDiv";
import Spinner from '../Spinner/Spinner';
import { Container } from 'react-bootstrap';
import About from '../About/About';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: null, // TODO: Change to a landing page where user can get info on how to use the chatbot
      isLoading: false
    }

    /* Bindings */
    this.handleViewChange = this.handleViewChange.bind(this)
    this.addView = this.addView.bind(this)
    this.showSpinner = this.showSpinner.bind(this)
  }

  showSpinner() {
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
        this.setState({ isLoading: false})
      })
      .catch(() => {
        this.setState({ isLoading: false})
      })
  }

  render() {
    const { isLoading, component } = this.state
    return (
      <div className="App">
        <Container>
          <ChatInput className="chat-input" handleViewChange={this.handleViewChange} showSpinner={this.showSpinner} isLoading={isLoading} />
          <div className="intent-view">
            {component === null ? (
              <About />
            ): (
              component
            )}
          </div>
          <Spinner isLoading={isLoading} />
        </Container>
      </div>
    )
  };
}

export default App;
