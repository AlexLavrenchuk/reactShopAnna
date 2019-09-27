import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styleLogin from "./_login.module.scss";
import { Input } from "../../common/forms";
import Button from "../../common/button/Button";

import Preloader from "../../common/preloader/Preloader";
import { fetchRequest } from "../../common/fetch/fetch";

import {
  loginRequest,
  loginRequestSuccess,
  loginRequestError
} from "./../../store/actionCreator";

const Login = props => {
  console.log(props);
  const { loginPreloader, errorMessage } = props.loginStateToProps;
  const { sendForm } = props;

  const loginSchema = Yup.object().shape({
    loginName: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });

  return (
    <div className={styleLogin.login}>
      <div className={styleLogin.container_form}>
        <h1 className={styleLogin.title}>Login</h1>
        <Formik
          initialValues={{
            loginName: "",
            password: ""
          }}
          validationSchema={loginSchema}
          onSubmit={values => {
            sendForm(values);
          }}
        >
          {({ isValid }) => (
            <Form>
              <Field
                type="text"
                name="loginName"
                component={Input}
                label="Name"
                id="loginName"
              />
              <Field
                type="password"
                name="password"
                component={Input}
                label="Password"
                id="password"
              />
              {
                loginPreloader
                ? <Preloader />
                : <Button type="submit" title={errorMessage || "send"} disabled={!isValid} />
              }
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loginStateToProps: state.loginReducer
  };
};

const mapDispatchToProps = dispatch => {
  const fetchLogin = dataForm => {
    return fetchRequest(
      "fake",
      {
        metod: "POST",
        header: JSON.stringify({
          authorization: "bearer "
        }),
        body: JSON.stringify(dataForm)
      },
      () => loginRequest(dataForm),
      response => {
        return response
          ? loginRequestSuccess("fake_token")
          : loginRequestError("Error try again");
      }
    );
  };
  return {
    sendForm: dataForm => dispatch(fetchLogin(dataForm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
