import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import "../cssFiles/login.css";

export default function Login() {
  return (
    <>
      <div className="main-container">
        <form action="">
          <div className="logo">
            <img src="" alt="" />
          </div>

          <div className="heading">
            <h1>Welcome Back</h1>
          </div>

          <div className="title">
            <h5>Please Enter your Deatils</h5>
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
              <label htmlFor="">Remember the Password ?</label>
            </div>

            <div className="forget">
              <a href="">Foreget Password?</a>
            </div>
          </div>

          <div className="btn">
            <button>
              {" "}
              <Link to={"/dashboard"}>Sign in</Link>
            </button>
          </div>

          <div className="create-account">
            <h5>
              Dont have an account ? <a href="">create account</a>
            </h5>
          </div>
        </form>
      </div>
    </>
  );
}
