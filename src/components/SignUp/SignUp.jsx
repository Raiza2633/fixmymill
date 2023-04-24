import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <div className="signup-nav">
        <div className="logo">Logo</div>
        <div className="login-content">
          have an account? <span>Sign in!</span>
        </div>
      </div>
      <div className="signup-container">
        <div className="left">
          <div className="image-div"></div>
        </div>
        <div className="right">
          <div className="form-container">
            <div className="social-signin">
              <p className="signup-google">Sign in with Google</p>
              <button className="sign-in-google" style={{ maxWidth: "373px" }}>
                {" "}
                <FcGoogle /> Google
              </button>
              <div className="separate-container">
                <div className="line"></div>
                <div className="content-or">or continue with</div>
                <div className="line"></div>
              </div>
            </div>
            <form>
              <div className="input-container first">
                <input
                  className="input-field"
                  type="text"
                  name="Full Name"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-container">
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-container password">
                <input
                  className="input-field"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <p
                  className="eye-icon"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </p>
              </div>
              <div className="input-container password">
                <input
                  className="input-field"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  placeholder=" Confirm Password"
                />
                <p
                  className="eye-icon"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </p>
              </div>
              <button className="sign-up-button">Create Account</button>
            </form>
            <div className="terms-content">
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
