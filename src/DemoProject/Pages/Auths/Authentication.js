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
    const { email, password } = userDetails;
    if (email === "admin@admin.com" && password === "admin123") {
      setIsError(false);
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
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

  console.log("AuthError", isError);

  return (
    <div className="main-body">
      {/* {!isLoggedIn && ( */}
      <LoginPage
        onLogin={loginHandler}
        isError={isError}
        setIsError={setIsError}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      {/* )} */}

      {/* {isLoggedIn && <MiniDrawer logoutHandler={logoutHandler} />} */}
    </div>
  );
}

export default Authentication;
