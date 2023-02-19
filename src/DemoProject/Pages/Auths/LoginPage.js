import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({
  userDetails,
  setUserDetails,
  onLogin,
  isError,
  setIsError,
}) {
  const [passwordType, setPasswordType] = useState("password");
  const [credentials, setCredentials] = useState(false);

  const checkErrors = () => {
    validateForm();
    if (isError) {
      setCredentials(true);
    } else {
      navigateToLandingPage();
    }
  };

  const navigateToLandingPage = () => {
    onLogin(userDetails);
  };

  const validateForm = () => {
    setIsError(
      userDetails.email.includes("@") && userDetails.password.trim().length < 6
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    validateForm();
    setUserDetails({ ...userDetails, [name]: value });
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  console.log("LogError", isError);
  return (
    <>
      <h1>Login To Your Account</h1>
      <div
        className="shadow p-3 mb-5 bg-body rounded mx-auto"
        style={{ width: "45%" }}
      >
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Please Enter your email"
            onChange={handleChange}
            onBlur={handleChange}
            style={{ background: isError ? "#f6b0b0" : "#e8f0fe" }}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div style={{ display: "flex" }}>
            <input
              type={passwordType}
              className="form-control"
              id="password"
              name="password"
              placeholder="Please Enter your password"
              onChange={handleChange}
              onBlur={handleChange}
              style={{ background: isError ? "#f6b0b0" : "#e8f0fe" }}
            />
            <i
              className="fa-solid fa-eye mx-2"
              style={{ marginTop: "0.7rem", cursor: "pointer" }}
              onClick={togglePassword}
            ></i>
          </div>
        </div>
        <div
          className="mb-2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={checkErrors}
          >
            Login
          </button>
          {credentials && <p>Please enter valid credentials</p>}
          <Link to="/signup" className="mx-2">
            Forgot Password?
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
