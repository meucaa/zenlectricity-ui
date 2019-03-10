import React, { Component } from 'react';
import './Form.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;