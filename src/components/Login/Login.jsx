import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Required, MaxLengthCreator } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControl'
import { login } from '../../redux/auth-reducer'
import { Redirect } from "react-router-dom";
import style from "./Login.module.css"

const LoginForm = (props) => {
  debugger
  const maxLength50 = MaxLengthCreator(50)
  return (
    <form onSubmit={props.handleSubmit} className={style.form}>
      <div>
        <Field placeholder='email' validate={[Required, maxLength50]} name={'email'} component={Input} />
      </div>
      <div>
        <Field placeholder='password' type={"password"} validate={[Required]} name={'password'} component={Input} />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
      </div>
      { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }
  return (
    <div className={style.form}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

const primer = (value)=>{
  let array = []
  return(
      array.push(value)
  )
}

console.log(primer(23,54,6,32))

export default connect(mapStateToProps, { login })(Login)
