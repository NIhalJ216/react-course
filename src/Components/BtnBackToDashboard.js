import React from "react";
import { useNavigate } from "react-router-dom";

function BtnBackToDashboard() {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/");
  };
  return (
    <button
      className="btn btn-success backBtn"
      onClick={navigateToDashboard}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        marginTop: "1rem",
        marginRight: "2rem",
      }}
    >
      Back To Dashboard
    </button>
  );
}

export default BtnBackToDashboard;
