import React, { Component } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import NullIntent from '../../intent_components/NullIntent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedComponents: [],
      component: null // TODO: Change to a landing page where user can get info on how to use the chatbot
    }
    this.handleViewChange = this.handleViewChange.bind(this)
  }

  addView = async (viewName, viewData) => {
    if (this.state.loadedComponents.includes(viewName)) return;

    console.log(`Loading ${viewName} view`)

    import(`../../intent_components/${viewName}.js`)
      .then(Component => {
        this.setState({
          loadedComponents: this.state.loadedComponents.concat(viewName),
          component: <Component.default
              data={viewData}
            />
        });
      })
      .catch(() => {
        this.setState({
          loadedComponents: this.state.loadedComponents.concat(viewName),
          component: <NullIntent data={{ error: 'Could not connect to the server', status: 503 }} />
        })
      });
  }

  handleViewChange = async (intentName, data) => {
    await this.addView(intentName, data)
  }

  render() {
    const { component } = this.state
    return (
      <div className="App">
        <ChatInput className="chat-input" handleViewChange={this.handleViewChange} />
        <div className="intent-view">
          {component === null ? (
            <div>Nothing to display...</div>
          ): (
            component
          )}
        </div>
      </div>
    )
  };
}

export default App;
