import React, { ChangeEvent, MouseEvent } from 'react';
import { css } from './FormStyle';

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
    fetch("http://localhost:9000/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        login: state.username,
        password: state.password
      })
    }).then(response => {
      if(response.status == 200) return response.json()
      else return {status: response.status}
    })
    .then(jsonData => alert(`You got a response from the API: ${jsonData.token || jsonData.status}`))
    .catch(error => {
      alert(`No response from API: ${error}`)
    })
    event.preventDefault();
  }

  return (
    <div className={css.formPage}>
      <div className={css.form}>
        <form>
          <input className={css.formInput} type="text" onChange={handleLoginChange} placeholder="username"/>
          <input className={css.formInput} type="password" onChange={handlePasswordChange} placeholder="password"/>
          <button className={css.formButton} onClick={handleSubmit}>login</button>
          <p className={css.formMessage}>Not registered? <a className={css.formMessageLink} href="#">Create an account</a></p>
        </form>
      </div>
    </div>
  );
};
