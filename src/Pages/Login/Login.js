import React, { Component } from 'react'
import Logo from "../../Assets/Logo.svg"
export default class Login extends Component {
  render() {
    return (
      <div className="login-sec d-flex align-items-center justify-content-center">
        <div className="login-form">
          <div className="text-center logo">
            <img src={Logo} />
          </div>
          <form>
            <div className="form-group">
              <lable>Email :</lable>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <lable>Password :</lable>
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <button className="btn btn-default">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
