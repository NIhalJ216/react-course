import React from "react";
// import Navbar from "../Components/Navbar";
import NavDrawer from "../Components/NavDrawer";
import "./LandingPage.css";

function LandingPage({ onLogout, userDetails }) {
  return (
    <div>
      {/* <Navbar onLogout={onLogout} /> */}
      <NavDrawer />
      <div className="bgLImg">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Hello User,</h1>
          <div style={{ textAlign: "center", marginTop: "8rem" }}>
            <h2>Welcome to LandingPage</h2>
            <h4>Your email is {userDetails.email}</h4>
            <h4>And password is {userDetails.password}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
