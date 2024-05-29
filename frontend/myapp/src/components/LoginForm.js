import React from "react";
import "./index.css";

function LoginForm() {
  return (
    <div className="login-form-container active">
      <form action="">
        <h3>sign in</h3>
        <span>username</span>
        <input type="email" className="box" placeholder="enter your email" />
        <span>password</span>
        <input
          type="password"
          className="box"
          placeholder="enter your password"
        />
        <input type="text" />
        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me"> remember me</label>
        </div>
        <input type="submit" value="sign in" className="btn" />
        <p>
          forget password ? <a href="#">click here</a>
        </p>
        <p>
          don't have an account ? <a href="#">create one</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
