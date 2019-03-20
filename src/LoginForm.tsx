import React, { ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import './Form.css';

interface LoginState {
  username: string;
  password: string;
}


export const LoginForm = () => {
  const [state, setState] = React.useState<LoginState>({username: '', password: ''});

  function handleLoginChange(event: ChangeEvent<HTMLInputElement>) {
    setState({username: event.target.value, password: state.password});
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setState({username: state.username, password: event.target.value});
  }

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    axios.post('http://localhost:9000/api/login', {
      login: state.username,
      password: state.password
    }).then(_ => {
      alert("You got a token!");
    }, error => {
      alert("You got no token: " + error)
    })
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" onChange={handleLoginChange} placeholder="username"/>
          <input type="password" onChange={handlePasswordChange} placeholder="password"/>
          <button onClick={handleSubmit}>login</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>
  );
};
