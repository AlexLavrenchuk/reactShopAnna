import React, { useState } from "react";
import { connect } from 'react-redux';

import styleLogin from "./_login.module.scss";
import { Input } from "../../common/forms";
import Button from "../../common/button/Button";

import Preloader from '../../common/preloader/Preloader';
import { fetchRequest } from '../../common/fetch/fetch';

import { loginRequest, loginRequestSussess, loginRequestError, btn, nameChange, passwordChange } from './../../store/actionCreator';

const Login = (props) => {
  console.log(props);
  const { loginPreloader, buttonDisabled, errorMessage, name, password } = props.loginStateToProps;
  const { login, btnLock, changeName, changePasswoord, validForm } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    login(name, password);
  }

  return (
    <div className={styleLogin.login}>
      <form className={styleLogin.form} onSubmit={submitHandler}>
        <h1 className={styleLogin.title}>Login</h1>
        <Input
          type="text"
          label="Name"
          name="name"

          handlerInputChange={e=>changeName(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          name="password"

          handlerInputChange={e=>changePasswoord(e.target.value)}
        />
        { loginPreloader ? <Preloader /> : <Button type="submit" title={errorMessage ? errorMessage : "send"} disabled={buttonDisabled} />}
      </form>
    </div>
  );
  
}

const mapStateToProps = state => {
  return {
    loginStateToProps: state.loginReducer
  };
};

const mapDispatchToProps = dispatch => {
  const fetchLogin = info => {
    return fetchRequest(
      "fake",
      {
        metod: "POST",
        header: JSON.stringify({
          authorization: "bearer "
        }),
        body: JSON.stringify(info)
      },
      () => loginRequest(),
      response => {
        return response ? loginRequestSussess("fake_token") : loginRequestError("try again)))");
      }
    );
  };
  const checkLength = /[0-9a-zA-Z!@#$%^&*]{8,}/;
  
  const validData = (name, password) => {
    (checkLength.test(name) === true && checkLength.test(password) === true) ? btn(true) : btn(false);
  }
  return {
    login: info => dispatch(fetchLogin(info)),
    btnLock: (bool) => dispatch(btn(bool)),
    changeName: (name) => dispatch(nameChange(name)),
    changePasswoord: (password) => dispatch(passwordChange(password)),
    validForm: (name, password) => dispatch(validData(name, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
