import React from "react";
import LoginBackground from "../../Assets/Images/LoginBackground.jpg";

function LoginWrap() {
  return (
    <div
      style={{
        backgroundImage: `url${LoginBackground}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img src={LoginBackground} alt="LoginBackground Not Found" /> */}
    </div>
  );
}

export default LoginWrap;
