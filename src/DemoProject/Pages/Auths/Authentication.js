import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";

function Authentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  console.log("erroer", isError);

  const loginHandler = (userDetails) => {
    console.log("LoggedIn");
    // const { email, password } = userDetails;
    // if (email === "admin@admin.com" && password === "admin123") {
    if (!userDetails) {
      setIsError(true);
    } else {
      setIsError(false);
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    }
  };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  useEffect(() => {
    const infoLoggedIn = localStorage.getItem("isLoggedIn");
    if (infoLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="main-body">
      <LoginPage
        onLogin={loginHandler}
        isError={isError}
        setIsError={setIsError}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      {/* {!isLoggedIn && (
        <LoginPage
          onLogin={loginHandler}
          onError={isError}
          setOnError={setIsError}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {isLoggedIn && <LandingPage />} */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default Authentication;
