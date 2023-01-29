import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnBackToDashboard from "../../Components/BtnBackToDashboard";
import "./LoginForm.css";

function LoginForm(props) {
  // const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [credentials, setCredentials] = useState(false);

  const navigateToLandingPage = () => {
    if (props.onError) {
      setCredentials(true);
    }
    validateForm();
    props.onLogin(props.userDetails);
    // navigate("/landing-page", { replace: true });
  };

  const validateForm = () => {
    props.setOnError(
      props.userDetails.password.trim().length > 6 &&
        props.userDetails.email.includes("@")
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    validateForm();
    props.setUserDetails({ ...props.userDetails, [name]: value });
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div className="bgImg">
      <BtnBackToDashboard />
      <h1 className="loginHeading">Login To Your Account</h1>
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
            // style={{ background: !props.onError ? "#f6b0b0" : "#e8f0fe" }}
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
              // style={{ background: !props.onError ? "#f6b0b0" : "#e8f0fe" }}
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
            onClick={navigateToLandingPage}
            // disabled={!props.onError}
          >
            Login
          </button>
          {credentials && <p>Please enter valid credentials</p>}
          <Link to="/signup" className="mx-2">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
