import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import "../cssFiles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    navigate("/dashboard");
  };

  return (
    <>
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <div className="logo">
            <img src="" alt="" />
          </div>

          <div className="heading">
            <h1>Welcome Back</h1>
          </div>

          <div className="title">
            <h5>Please Enter your Details</h5>
          </div>

          <div className="googleAuth">
            <div className="google">
              <FaGoogle className="auth-icon" />
            </div>
            <div className="apple">
              <FaApple className="auth-icon" />
            </div>
            <div className="facebook">
              <FaFacebook className="auth-icon" />
            </div>
          </div>

          <hr />

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              placeholder="Enter the Email"
              id="email"
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              placeholder="Enter the password"
              id="password"
            />
          </div>

          <hr />
          <div className="alternates">
            <div className="checkbox">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember the Password?</label>
            </div>

            <div className="forget">
              <a href="">Forget Password?</a>
            </div>
          </div>

          <div className="btn">
            <button type="submit">Sign in</button>
          </div>

          <div className="create-account">
            <h5>
              Don't have an account? <a href="">Create account</a>
            </h5>
          </div>
        </form>
      </div>
    </>
  );
}
