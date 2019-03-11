import React from 'react';
import axios from 'axios';
import './Form.css';

interface LoginState {
  username: string;
  password: string;
}


class LoginForm extends React.Component<any, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoginChange(event: any) {
    this.setState({username: event.target.value, password: this.state.password});
  }

  handlePasswordChange(event: any) {
    this.setState({username: this.state.username, password: event.target.value});
  }

  handleSubmit(event: any) {
    axios.post('http://localhost:9000/api/login', {
      login: this.state.username,
      password: this.state.password
    }).then(response => {
      alert("You got a token!");
    }, error => {
      alert("You got no token: " + error)
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" onChange={this.handleLoginChange} placeholder="username"/>
            <input type="password" onChange={this.handlePasswordChange} placeholder="password"/>
            <button onClick={this.handleSubmit}>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;