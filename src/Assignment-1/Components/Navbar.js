import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {
  // const navigate = useNavigate();
  const navigateToLoginPage = () => {
    onLogout();
    // navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <h4 className="navbar-brand" style={{ marginTop: "0.3rem" }}>
          Assignment-1
        </h4>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success"
            onClick={navigateToLoginPage}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
