/* Dependencies and components */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main/Main';
import App from './components/App/App';

/* Styles */
import './style/styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import SupportedSymbols from './components/SupportedSymbols/SupportedSymbols';

class AppRouter extends Component {
  render () {
    return (
      <Router>
        <Main>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/symbols" component={SupportedSymbols} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
