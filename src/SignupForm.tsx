import React, { ChangeEvent, MouseEvent } from 'react';
import { css } from './FormStyle';

interface SignupState {
  username: string;
  password: string;
}


export const SignupForm = () => {
  const [state, setState] = React.useState<SignupState>({username: '', password: ''});

  function handleLoginChange(event: ChangeEvent<HTMLInputElement>) {
    setState({username: event.target.value, password: state.password});
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setState({username: state.username, password: event.target.value});
  }

  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    fetch("http://localhost:9000/api/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        login: state.username,
        password: state.password
      })
    }).then(response => {
      if(response.status == 201) return response.json()
      else return {status: response.status}
    })
    .then(jsonData => alert(`You got a response from the API: ${JSON.stringify(jsonData)}`))
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
          <button className={css.formButton} onClick={handleSubmit}>create</button>
          <p className={css.formMessage}>Already registered? <a className={css.formMessageLink} href="/login">Sign in</a></p>
        </form>
      </div>
    </div>
  );
};
