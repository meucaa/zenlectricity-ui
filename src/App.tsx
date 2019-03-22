import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { List } from './List';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Zenlectricity</h1>
          </header>
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/list" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;
