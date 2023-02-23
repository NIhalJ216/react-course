import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import MiniDrawer from "../../../Components/SideNavbar";

function Authentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (userDetails) => {
    console.log("dets", userDetails);
    const { email, password } = userDetails;
    if (email.includes("@") && password.length >= 6) {
      if (email === "admin@admin.com" && password === "admin123") {
        setIsError(false);
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
      } else {
        setIsError(true);
        setIsLoggedIn(false);
      }
    } else {
      setIsError(true);
      setIsLoggedIn(false);
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
        <LoginPage
          onLogin={loginHandler}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          isError={isError}
          setIsError={setIsError}
        />
      )}
      {isLoggedIn && <MiniDrawer logoutHandler={logoutHandler} />}
    </div>
  );
}

export default Authentication;
