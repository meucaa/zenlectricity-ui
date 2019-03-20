import React, { Component } from 'react';
import { css } from './FormStyle';

class SignupForm extends Component {
  render() {
    return (
      <div className={css.formPage}>
        <div className={css.form}>
          <form>
            <input className={css.formInput} type="text" placeholder="name"/>
            <input className={css.formInput} type="password" placeholder="password"/>
            <input className={css.formInput} type="text" placeholder="email address"/>
            <button className={css.formButton}>create</button>
            <p className={css.formMessage}>Already registered? <a className={css.formMessageLink} href="#">Sign In</a></p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;