import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import BtnBackToDashboard from "../../../Components/BtnBackToDashboard";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <BtnBackToDashboard />
      <Navigation />
    </header>
  );
};

export default MainHeader;
