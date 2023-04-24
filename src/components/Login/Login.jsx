import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-nav">
        <div className="logo">Logo</div>
        <div className="signup-content">
          Dont have an account? <span>Sign up!</span>
        </div>
      </div>
      <div className="login-container">
        <div className="left">
          <div className="image-div"></div>
        </div>

        <div className="right">
          <div className="form-container">
            <h1>Welcome Back</h1>
            <p>Welcome back plese enter your details</p>
            <form>
              <div className="input-container">
                <label for="email">Email:</label>
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-container">
                <label for="password">Password:</label>
                <input
                  className="input-field"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-content">
                <p>Help?</p>
                <p>Forgot password?</p>
              </div>
              <button className="sign-in-button">Sign In</button>
            </form>
            <div className="social-signin">
              <div className="content-or">or</div>
              <button className="sign-in-google">
                <FcGoogle />
                Sign In With Google
              </button>
            </div>
            <div className="bottom-text-content">
              <div className="signup-content">
                Dont have an account? <span>Sign up</span>
              </div>
              <div className="terms-content">
                By continuing you indicate that you read and agreed to the Terms
                of Use
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
