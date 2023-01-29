import React, { useEffect, useState } from "react";
import LoginForm from "./Pages/LoginForm";
import LandingPage from "./Pages/LandingPage";
import "./LoginApp.css";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (userDetails) => {
    const { email, password } = userDetails;
    if (email === "admin@admin.com" && password === "admin123") {
      setIsError(false);
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    } else {
      setIsError(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const infoLoggedIn = localStorage.getItem("isLoggedIn");
    if (infoLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="main-body">
      {!isLoggedIn && (
        <LoginForm
          onLogin={loginHandler}
          onError={isError}
          setOnError={setIsError}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {isLoggedIn && (
        <LandingPage onLogout={logoutHandler} userDetails={userDetails} />
      )}
    </div>
  );
}

export default LoginApp;
